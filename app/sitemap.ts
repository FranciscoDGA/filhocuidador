import { MetadataRoute } from "next";

const BASE_URL = "https://filhocuidador.com.br";

const staticPages = [
  "",
  "/artigos",
  "/sobre",
  "/contato",
  "/conselho",
  "/ferramentas",
  "/comunidade",
  "/produtos",
  "/diarios",
  "/pergunte-ao-especialista",
  "/kits",
  "/depoimentos",
  "/videos",
  "/categorias/entendendo-a-doenca",
  "/categorias/cuidados-praticos",
  "/categorias/saude-emocional",
  "/categorias/juridico",
  "/categorias/familia",
  "/ferramentas/quiz-burnout",
  "/ferramentas/checklist-diagnostico",
  "/ferramentas/calculadora-custos",
];

const diarySlugs = [
  "ana-maria-o-dia-a-dia-com-mae-alzheimer",
  "carlos-cuidar-do-pai-sozinho",
  "mariana-quando-a-familia-nao-ajuda",
  "pedro-o-burnout-que-ninguem-ve",
  "juliana-o-dia-em-que-desisti-e-voltei",
  "roberto-o-avv-que-mudou-tudo",
];

const articleSlugs = [
  "ansiedade-cuidador-tecnicas-alivio",
  "alzheimer-guia-pratico-cuidador",
  "autocuidado-self-care-cuidador",
  "alimentacao-idoso-demencia",
  "apoio-psicologico-cuidador",
  "assistente-virtual-idoso",
  "bpc-loas-idoso-como-CONSEGUIR",
  "brincadeiras-idosos-demencia",
  "cama-hospitalar-como-escolher",
  "calendario-rotinas-idoso",
  "capacidade-juridica-idoso",
  "cartao-de-saude-idoso",
  "casa-segura-idoso-adaptacoes",
  "cuidador-familia-como-enfrentar",
  "cuidados-diarios-alzheimer",
  "cuidados-paliativos-o-que-sao",
  "cuidados-primarios-idoso",
  "desafios-comportamentais-alzheimer",
  "direitos-cuidador-informal",
  "doencas-neurodegenerativas",
  "encaminhamento-geriatra",
  "escala-de-katz",
  "eutanasia-e-morte-assistida",
  " como-cuidar-de-idoso-com-parkinson",
  "como-lidar-com-agressividade-alzheimer",
  "como-parar-de-fumar-aos-60",
  "como-saber-se-idoso-tem-alzheimer",
  "como-viver-com-alzheimer",
  "comunicacao-eficaz-com-idosos",
  "conflitos-familiares-cuidado",
  "convivio-criancas-idosos-demencia",
  "cuidados-com-idosos-acamados",
  "cuidados-geriatricos",
  "cuidar-de-idoso-a-distancia",
  "declinio-cognitivo-como-identificar",
  "deficiencia-fisica-idoso",
  "dependencia-quimica-idosos",
  "depressao-idosos-como-identificar",
  "direitos-do-idoso",
  "dispositivos-de-seguranca-idoso",
  "diagnostico-alzheimer",
  "alzheimer-fases",
  "alzheimer-prevencao",
  "alzheimer-sintomas",
  "dieta-para-idosos",
  "doencas-cronicas-idosos",
  "como-cuidar-de-idoso-acamado",
  "alzheimer-cuidados-paliativos",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls = staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  const diaryUrls = diarySlugs.map((slug) => ({
    url: `${BASE_URL}/diarios/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articleUrls = articleSlugs.map((slug) => ({
    url: `${BASE_URL}/artigos/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...diaryUrls, ...articleUrls];
}
