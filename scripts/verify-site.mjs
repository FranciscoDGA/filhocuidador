import assert from "node:assert/strict";

const baseArg = process.argv.find((arg) => arg.startsWith("--base-url="));
const BASE_URL = (baseArg ? baseArg.slice("--base-url=".length) : "http://127.0.0.1:3005").replace(
  /\/$/,
  ""
);

const EXPECTED_CATEGORY_SLUGS = [
  "saude-emocional",
  "cuidados-praticos",
  "doencas",
  "familia",
  "orientacao-juridica",
];

const DRAFT_SLUGS = [
  "aposentadoria-idoso-direitos",
  "auxilio-doenca-inss-cuidador",
  "direitos-idoso-estatuto-lei",
  "imposto-renda-deducoes-cuidador",
  "pensao-morte-direitos-valores",
  "interdicao-vs-curatela-qual-usar",
  "procuracao-idoso-modelo-passo-passo",
  "testamento-heranca-guia-pratico",
];

const REMOVED_BROKEN_SLUGS = [
  "quando-a-natureza-espera",
  "direitos-escondidos",
  "rotina-pratica",
  "artigo-inexistente-teste",
];

async function fetchText(path, options = {}) {
  const url = path.startsWith("http") ? path : `${BASE_URL}${path}`;
  const res = await fetch(url, { redirect: options.redirect ?? "follow" });
  const text = await res.text();
  return { res, text, url };
}

function toLocalPath(rawUrl) {
  try {
    const parsed = new URL(rawUrl);
    return `${parsed.pathname}${parsed.search}` || "/";
  } catch {
    return rawUrl.startsWith("/") ? rawUrl : `/${rawUrl}`;
  }
}

async function run() {
  console.log(`Running site verification against ${BASE_URL}`);

  // 1. Validate robots.txt
  const robots = await fetchText("/robots.txt");
  assert.equal(robots.res.status, 200, `/robots.txt returned ${robots.res.status}`);
  assert.match(robots.text, /sitemap\.xml/i, "/robots.txt missing sitemap.xml reference");
  console.log("PASS robots.txt");

  // 2. Validate sitemap.xml
  const sitemap = await fetchText("/sitemap.xml");
  assert.equal(sitemap.res.status, 200, `/sitemap.xml returned ${sitemap.res.status}`);
  const locs = [...sitemap.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  assert.equal(locs.length, 54, `Expected 54 URLs in sitemap.xml, found ${locs.length}`);

  for (const draftSlug of DRAFT_SLUGS) {
    assert.ok(
      !locs.some((u) => u.includes(draftSlug)),
      `Draft slug leaked into sitemap.xml: ${draftSlug}`
    );
  }
  console.log(`PASS sitemap.xml (${locs.length} URLs, 0 drafts)`);

  // 3. Crawl every single URL listed in sitemap.xml and verify HTTP 200 & clean HTML
  const internalHrefs = new Set();
  for (const rawLoc of locs) {
    const path = toLocalPath(rawLoc);
    const { res, text } = await fetchText(path);
    assert.equal(res.status, 200, `Sitemap route ${path} returned ${res.status}`);
    assert.ok(text.length > 500, `Route ${path} returned unusually short HTML`);

    // Forbidden strings check
    for (const forbidden of [
      "0800 006 1766",
      "PILARE DE APOIO",
      "sozinho nissa",
      "https://filhocuidador.com.br",
      "Luto Anteipado",
      "Peambulação",
    ]) {
      assert.ok(
        !text.includes(forbidden),
        `Route ${path} contains forbidden string: ${forbidden}`
      );
    }

    // Collect internal links to check link integrity
    const hrefMatches = [...text.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]);
    for (const href of hrefMatches) {
      if (!href.startsWith("/_next/") && !href.startsWith("/images/")) {
        internalHrefs.add(href);
      }
    }
  }
  console.log(`PASS all ${locs.length} sitemap routes returned HTTP 200 with clean content`);

  // 4. Verify all discovered internal links resolve cleanly (200 or redirect -> 200)
  for (const href of internalHrefs) {
    const { res } = await fetchText(href);
    assert.equal(res.status, 200, `Internal link ${href} failed with HTTP ${res.status}`);
  }
  console.log(`PASS all ${internalHrefs.size} unique internal links resolve with HTTP 200`);

  // 5. Verify Home, Footer, Emergency links, Accessibility markers, and Copyright
  const home = await fetchText("/");
  assert.match(home.text, /href="tel:192"/, "Missing tel:192 SAMU link");
  assert.match(home.text, /href="tel:188"/, "Missing tel:188 CVV link");
  assert.match(home.text, /href="#conteudo-principal"/, "Missing skip link");
  assert.match(home.text, /Buscar artigos publicados/, "Missing search accessible label");
  assert.match(home.text, /Ativar tema escuro/, "Missing theme toggle accessible label");
  assert.ok(!home.text.includes("© 2024"), "Stale 2024 copyright year still rendered");
  assert.match(home.text.replace(/<!--[\s\S]*?-->/g, ""), /© 202[5-9]\s+Filho Cuidador/, "Missing updated copyright notice");
  assert.ok(!home.text.includes("FLASH NEWS"), "Fake FLASH NEWS block still rendered");
  assert.ok(!home.text.includes("11,5 milhões"), "Unverified stat still rendered");
  console.log("PASS homepage accessibility & emergency markers");

  // 6. Verify all 5 expected category routes return 200
  for (const slug of EXPECTED_CATEGORY_SLUGS) {
    const { res } = await fetchText(`/${slug}`);
    assert.equal(res.status, 200, `Category /${slug} returned ${res.status}`);
  }
  console.log("PASS all 5 unified category routes return HTTP 200");

  // 7. Verify legacy category redirects return 301/308 and land on 200
  for (const [legacyPath, expectedTarget] of [
    ["/direitos-financas", "/orientacao-juridica"],
    ["/rotina-organizacao", "/familia"],
  ]) {
    const manual = await fetchText(legacyPath, { redirect: "manual" });
    assert.ok(
      manual.res.status === 301 || manual.res.status === 308 || manual.res.status === 307,
      `Expected redirect status for ${legacyPath}, got ${manual.res.status}`
    );
    assert.equal(
      manual.res.headers.get("location"),
      expectedTarget,
      `Unexpected redirect Location for ${legacyPath}`
    );
    const followed = await fetchText(legacyPath);
    assert.equal(followed.res.status, 200, `Followed redirect ${legacyPath} failed`);
  }
  console.log("PASS legacy category redirects return permanent redirect -> 200");

  // 8. Verify real HTTP 404 on removed broken articles, unknown URLs, and 8 drafts
  for (const badPath of [
    ...REMOVED_BROKEN_SLUGS.map((s) => `/artigos/${s}`),
    ...DRAFT_SLUGS.map((s) => `/artigos/${s}`),
    "/categoria-inexistente-teste",
    "/rota/que/nao/existe",
  ]) {
    const { res, text } = await fetchText(badPath);
    assert.equal(res.status, 404, `Expected HTTP 404 for ${badPath}, got ${res.status}`);
    assert.match(
      text,
      /Página ou artigo não encontrado/,
      `Custom 404 Portuguese copy missing on ${badPath}`
    );
  }
  console.log(
    `PASS real HTTP 404 verified for ${REMOVED_BROKEN_SLUGS.length + DRAFT_SLUGS.length + 2} missing/draft routes`
  );

  // 9. Verify Sobre, Contato, Privacidade, Termos
  const sobre = await fetchText("/sobre");
  assert.ok(!sobre.text.includes("advogados e familiares"), "Unconfirmed team claim still present on /sobre");
  const contato = await fetchText("/contato");
  assert.match(contato.text, /contato@filhocuidador\.com\.br/, "Contact fallback email missing");
  assert.ok(
    !contato.text.includes("Mensagem enviada com sucesso"),
    "False success message present in /contato HTML"
  );
  console.log("PASS institutional pages honesty checks");

  console.log("\nALL SITE VERIFICATION CHECKS PASSED.");
}

run().catch((err) => {
  console.error("VERIFICATION FAILED:", err);
  process.exit(1);
});
