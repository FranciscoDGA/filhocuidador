export interface CategoryDefinition {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  frontmatterNames: string[];
  accentBadge: string;
}

export const CATEGORIES: CategoryDefinition[] = [
  {
    slug: "saude-emocional",
    title: "Saúde Emocional",
    shortTitle: "Saúde Emocional",
    description:
      "Apoio prático para lidar com sobrecarga, exaustão, ansiedade, insônia, luto antecipado e isolamento no dia a dia do cuidado.",
    frontmatterNames: ["Saúde Emocional"],
    accentBadge: "Cuidado com quem cuida",
  },
  {
    slug: "cuidados-praticos",
    title: "Cuidados Práticos",
    shortTitle: "Cuidados Práticos",
    description:
      "Guias objetivos sobre segurança domiciliar, prevenção de quedas, medicação, higiene, alimentação segura e mobilidade.",
    frontmatterNames: ["Cuidados Práticos"],
    accentBadge: "Rotina e segurança",
  },
  {
    slug: "doencas",
    title: "Condições de Saúde",
    shortTitle: "Doenças",
    description:
      "Orientações informativas para compreender sintomas, rotina de acompanhamento e sinais de alerta nas condições mais comuns da pessoa idosa.",
    frontmatterNames: ["Doenças"],
    accentBadge: "Acompanhamento e alertas",
  },
  {
    slug: "familia",
    title: "Família e Organização",
    shortTitle: "Família",
    description:
      "Estratégias para dividir responsabilidades entre familiares, conversar sobre limites, lidar com mudanças de papéis e preservar vínculos.",
    frontmatterNames: ["Família"],
    accentBadge: "Relações e acordos",
  },
  {
    slug: "orientacao-juridica",
    title: "Orientação Jurídica e Direitos",
    shortTitle: "Direitos e SUS",
    description:
      "Caminhos oficiais para acessar benefícios assistenciais e medicamentos pelo SUS, com atenção às normas vigentes e fontes verificáveis.",
    frontmatterNames: ["Jurídico & Direitos", "Jurídico & Financeiro"],
    accentBadge: "Fontes oficiais",
  },
];

export const LEGACY_CATEGORY_REDIRECTS: Array<{
  source: string;
  destination: string;
  permanent: boolean;
}> = [
  {
    source: "/direitos-financas",
    destination: "/orientacao-juridica",
    permanent: true,
  },
  {
    source: "/rotina-organizacao",
    destination: "/familia",
    permanent: true,
  },
  {
    source: "/saude-mental",
    destination: "/saude-emocional",
    permanent: true,
  },
];

function normalizeText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

export function getCategoryBySlug(slug: string): CategoryDefinition | undefined {
  const normalized = normalizeText(slug);
  return CATEGORIES.find((cat) => cat.slug === normalized);
}

export function getCategoryForFrontmatter(
  frontmatterCategory: string
): CategoryDefinition | undefined {
  const normalized = normalizeText(frontmatterCategory);
  return CATEGORIES.find((cat) =>
    cat.frontmatterNames.some((name) => normalizeText(name) === normalized)
  );
}
