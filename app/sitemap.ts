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
  "roberto-o-avc-que-mudou-tudo",
];

const articleSlugs = [
  "adaptacoes-casa-idoso-seguranca",
  "alimentacao-disfagia-idoso",
  "alzheimer-guia-pratico-cuidador",
  "ansiedade-cuidador-tecnicas-alivio",
  "aposentadoria-idoso-direitos",
  "autocuidado-self-care-cuidador",
  "auxilio-doenca-inss-cuidador",
  "avc-recuperacao-cuidados",
  "bpc-loas-guia-completo",
  "burnout-cuidador-sinais-alerta",
  "casamento-relacionamento-cuidando-pai",
  "comunicacao-idoso-demencia",
  "comunicacao-irmaos-nao-ajudam",
  "cuidar-de-si-mesmo-enquanto-cuida-outro",
  "culpa-perdao-familia",
  "culpa-raiva-exaustao-normal-sentir",
  "depressao-cuidador-sinais-ajuda",
  "diabetes-idoso-cuidados",
  "dinamica-familiar-mudanca-papeis",
  "direitos-idoso-estatuto-lei",
  "dpoc-insuficiencia-respiratoria",
  "filhos-pequenos-cuidar-idoso",
  "gerenciamento-medicamentos-idoso",
  "higiene-banho-seguro-idoso",
  "hipertensao-pressao-alta-idoso",
  "imposto-renda-deducoes-cuidador",
  "incontinencia-idoso-cuidados",
  "incontinencia-urinaria-idoso-causas",
  "insonia-cuidador-sono-qualidade",
  "insuficiencia-cardiaca-cuidados",
  "interdicao-vs-curatela-qual-usar",
  "isolamento-socializar-cuidador",
  "lidar-mudancas-aceitacao-envelhecimento",
  "limpeza-casa-segura-idoso",
  "luto-perdas-pai-idoso",
  "medicamentos-sus-gratuitos",
  "mobilidade-posicionamento-idoso",
  "noites-seguras-idoso-sono",
  "osteoporose-quedas-prevencao",
  "parkinson-cuidados-praticos",
  "pensao-morte-direitos-valores",
  "prevencao-quedas-casa-guia-pratico",
  "problemas-visao-catarata-glaucoma",
  "procuracao-idoso-modelo-passo-passo",
  "quando-colocar-asilo-decisao",
  "reconhecendo-burnout-cuidador",
  "relacionamentos-enquanto-cuida",
  "resiliencia-esperanca-cuidador",
  "retorno-trabalho-cuidador",
  "testamento-heranca-guia-pratico",
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
