import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kits de Emergência para Cuidadores",
  description: "Downloads gratuitos com checklists, guias e listas de emergência para filhos que cuidam de pais com demência.",
};

const kits = [
  {
    slug: "primeiras-24h-alzheimer",
    title: "Kit: Primeiras 24h com Alzheimer",
    description: "O que fazer nas primeiras 24h após o diagnóstico. Checklists, contatos e passo a passo.",
    items: ["Checklist de documentos", "Lista de médicos especialistas", "Guia de primeiros cuidados", "Modelo de organização de medicamentos"],
    category: "Diagnóstico",
    pages: 12,
  },
  {
    slug: "agressividade-confusao",
    title: "Kit: Agressividade e Confusão",
    description: "10 técnicas práticas para lidar com episódios de agressividade, confusão e agitação.",
    items: ["Técnicas de comunicação", "Lista de emergência 24h", "Guia de medicamentos de resgate", "Modelo de registro de episódios"],
    category: "Comportamento",
    pages: 15,
  },
  {
    slug: "casa-segura",
    title: "Kit: Casa Segura",
    description: "Como adaptar sua casa para um idoso com demência — cômodo por cômodo.",
    items: ["Checklist por cômodo", "Lista de compras", "Guia de instalação de barras", "Dicas de iluminação"],
    category: "Segurança",
    pages: 10,
  },
  {
    slug: "direitos-cuidador",
    title: "Kit: Direitos do Cuidador",
    description: "Todos os benefícios governamentais, direitos trabalhistas e orientação jurídica.",
    items: ["Guia BPC/LOAS", "Modelo de procuração", "Lista de benefícios por estado", "Contatos de Defensoria Pública"],
    category: "Jurídico",
    pages: 18,
  },
  {
    slug: "alimentacao-saudavel",
    title: "Kit: Alimentação Saudável",
    description: "Cardápios, dicas de alimentação e receitas para idosos com demência.",
    items: ["Cardápio semanal", "Receitas fáceis", "Dicas para dificuldade de deglutição", "Lista de alimentos saudáveis"],
    category: "Nutrição",
    pages: 14,
  },
  {
    slug: "cuidador-sobrevivente",
    title: "Kit: Cuidador Sobrevivente",
    description: "Guia completo para cuidador que está no limite. Burnout, autoajuda e recursos.",
    items: ["Quiz de burnout", "Guia de autoajuda", "Lista de grupos de apoio", "Contatos de emergência psicológica"],
    category: "Saúde Mental",
    pages: 16,
  },
];

export default function KitsPage() {
  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[11px] text-brand-secondary/50">
          <Link href="/" className="hover:text-brand-primary transition">Início</Link>
          <span>/</span>
          <span className="text-brand-primary">Kits de Emergência</span>
        </div>

        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary/60 mb-4 block">
            Downloads Gratuitos
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-brand-primary mb-6 leading-tight">
            Kits de Emergência
          </h1>
          <p className="text-base text-brand-secondary leading-relaxed">
            Guia práticos e checklists para baixar e usar imediatamente. Tudo gratuito, sem cadastro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kits.map((kit) => (
            <div key={kit.title} className="bg-white border border-border-base p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-medium tracking-wider uppercase text-brand-accent">
                  {kit.category}
                </span>
                <span className="text-[10px] text-brand-secondary/40">
                  {kit.pages} páginas
                </span>
              </div>
              <h3 className="text-base font-display font-medium text-brand-primary mb-2">
                {kit.title}
              </h3>
              <p className="text-xs text-brand-secondary/60 leading-relaxed mb-4 flex-grow">
                {kit.description}
              </p>
              <ul className="space-y-1.5 mb-6">
                {kit.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[11px] text-brand-secondary/50">
                    <svg className="w-3 h-3 text-brand-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`/kits/${kit.slug}`}
                className="block w-full text-center px-6 py-3 bg-brand-primary text-white text-[13px] font-medium tracking-wide uppercase hover:bg-brand-primary/90 transition-colors"
              >
                Acessar Kit
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 bg-brand-primary/[0.03] border border-border-base p-8 text-center">
          <h3 className="text-lg font-display font-medium text-brand-primary mb-3">
            Precisa de algo específico?
          </h3>
          <p className="text-sm text-brand-secondary mb-6 max-w-xl mx-auto">
            Estamos sempre criando novos kits. Sugira o que seria útil para você.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center text-[13px] font-medium tracking-wide uppercase text-brand-primary border-b border-brand-primary/20 hover:border-brand-primary/60 pb-1 transition-colors"
          >
            Sugira um kit
          </Link>
        </div>
      </div>
    </main>
  );
}
