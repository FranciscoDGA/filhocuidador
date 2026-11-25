export interface EmergencyContact {
  id: string;
  label: string;
  phone: string;
  href: string;
  description: string;
}

export const DEFAULT_SITE_URL = "https://filhocuidador.vercel.app";

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) {
    return DEFAULT_SITE_URL;
  }

  try {
    const parsed = new URL(raw);
    return parsed.origin.replace(/\/$/, "");
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const SITE_INFO = {
  name: "Filho Cuidador",
  tagline: "Informação prática e acolhimento para quem cuida de pessoas idosas",
  description:
    "Portal informativo e prático para filhos e familiares que cuidam de pessoas idosas, com guias sobre saúde emocional, cuidados diários, doenças e direitos.",
  contactEmail: "contato@filhocuidador.com.br",
  editorialNotice:
    "Conteúdo meramente informativo. Não substitui avaliação médica, psicológica, jurídica ou financeira individualizada.",
  emergencySourceUrl:
    "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/suicidio-prevencao",
  bpcOfficialSources: [
    {
      label: "Lei nº 8.742/1993 (LOAS)",
      url: "https://www.planalto.gov.br/ccivil_03/leis/l8742.htm",
    },
    {
      label: "Solicitar BPC no Meu INSS (gov.br)",
      url: "https://www.gov.br/pt-br/servicos/solicitar-beneficio-assistencial-a-pessoa-idosa",
    },
    {
      label: "Portal do CadÚnico (gov.br)",
      url: "https://www.gov.br/mds/pt-br/acoes-e-programas/cadastro-unico",
    },
  ],
} as const;

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    id: "samu",
    label: "SAMU",
    phone: "192",
    href: "tel:192",
    description: "Urgência e emergência médica (ligação gratuita, 24h)",
  },
  {
    id: "cvv",
    label: "CVV",
    phone: "188",
    href: "tel:188",
    description:
      "Apoio emocional e prevenção do suicídio (ligação gratuita, 24h — não substitui atendimento de emergência médica)",
  },
];

export const MAIN_NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Artigos", href: "/artigos" },
  { label: "Categorias", href: "/categorias" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
] as const;
