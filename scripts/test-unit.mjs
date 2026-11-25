import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { validateContactForm, buildContactMailtoUrl } from "../lib/contact.ts";

// Basic runtime smoke tests on content integrity and URL helpers (runs with plain Node)
const articlesDir = path.join(process.cwd(), "content", "articles");
const mdFiles = fs.readdirSync(articlesDir).filter((f) => f.endsWith(".md")).sort();

assert.equal(mdFiles.length, 50, `Expected 50 markdown files on disk, found ${mdFiles.length}`);

let draftCount = 0;
let publishedCount = 0;
for (const file of mdFiles) {
  const raw = fs.readFileSync(path.join(articlesDir, file), "utf8");
  if (/^status:\s*"draft"/m.test(raw)) {
    draftCount += 1;
  } else {
    publishedCount += 1;
    assert.ok(!raw.includes("0800 006 1766"), `Published file ${file} contains unconfirmed 0800`);
    assert.ok(!raw.includes("Melatonina (1-3mg)"), `Published file ${file} still has dose`);
    assert.ok(!raw.includes("Trazodona (50mg)"), `Published file ${file} still has dose`);
    assert.ok(!raw.includes("500-1000mg"), `Published file ${file} still has dose`);
    assert.ok(!raw.includes("Luto Anteipado"), `Published file ${file} still has typo`);
    assert.ok(!raw.includes("Peambulação"), `Published file ${file} still has typo`);

    const imgMatch = raw.match(/^image:\s*"([^"]+)"/m);
    assert.ok(imgMatch, `Published file ${file} missing image frontmatter`);
    assert.ok(
      imgMatch[1].startsWith("/images/articles/") && imgMatch[1].endsWith(".jpg"),
      `Published file ${file} must use local /images/articles/*.jpg, got ${imgMatch[1]}`
    );
    const localImgPath = path.join(process.cwd(), "public", imgMatch[1].replace(/^\/+/, ""));
    assert.ok(fs.existsSync(localImgPath), `Missing image file on disk for ${file}: ${localImgPath}`);
    assert.ok(fs.statSync(localImgPath).size > 10_000, `Suspiciously small image for ${file}`);
  }
}

assert.equal(draftCount, 8, `Expected 8 preserved draft articles, found ${draftCount}`);
assert.equal(publishedCount, 42, `Expected 42 published articles, found ${publishedCount}`);

assert.equal(
  fs.existsSync(path.join(process.cwd(), "public", "robots.txt")),
  false,
  "Static public/robots.txt must stay removed so app/robots.ts handles /robots.txt"
);

// Contact form validation and mailto builder checks (fictitious data, no real sends)
const invalidContact = validateContactForm({
  name: "A",
  email: "invalido",
  subject: "",
  message: "curta",
});
assert.equal(invalidContact.valid, false);
assert.ok(invalidContact.errors.name);
assert.ok(invalidContact.errors.email);
assert.ok(invalidContact.errors.subject);
assert.ok(invalidContact.errors.message);

const honeypotContact = validateContactForm({
  name: "Maria Teste",
  email: "maria.teste@exemplo.com",
  subject: "Sugestão de tema ou guia",
  message: "Mensagem fictícia de teste de validação.",
  website: "https://spam.example",
});
assert.equal(honeypotContact.valid, false);
assert.ok(honeypotContact.errors.form);

const validContact = validateContactForm({
  name: "Maria Teste",
  email: "maria.teste@exemplo.com",
  subject: "Sugestão de tema ou guia",
  message: "Mensagem fictícia de validação do formulário sem envio real.",
});
assert.equal(validContact.valid, true);
assert.deepEqual(validContact.errors, {});

const mailtoUrl = buildContactMailtoUrl("contato@filhocuidador.com.br", {
  name: "Maria Teste",
  email: "maria.teste@exemplo.com",
  subject: "Sugestão de tema ou guia",
  message: "Mensagem fictícia de validação.",
});
assert.ok(mailtoUrl.startsWith("mailto:contato@filhocuidador.com.br?subject="));
assert.ok(mailtoUrl.includes("Maria%20Teste"));

console.log(
  `PASS unit content & contact checks (${publishedCount} published, ${draftCount} preserved drafts, 0 static robots override).`
);
