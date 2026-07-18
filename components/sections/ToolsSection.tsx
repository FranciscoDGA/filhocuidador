import Link from "next/link";

const tools = [
  {
    slug: "quiz-burnout",
    title: "Quiz: Estou com Burnout?",
    description: "Descubra se você está nos limites. 10 perguntas rápidas.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    slug: "checklist-diagnostico",
    title: "Checklist: Diagnóstico",
    description: "Lista completa do que fazer após o diagnóstico de demência.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    slug: "calculadora-custos",
    title: "Calculadora de Custos",
    description: "Estime quanto custa cuidar do seu pai/mãe por mês.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function ToolsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-y border-border-base">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14">
          <div>
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary mb-4 block">
              Ferramentas Interativas
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-medium text-brand-primary">
              Descubra o que você precisa
            </h2>
          </div>
          <Link
            href="/ferramentas"
            className="mt-4 sm:mt-0 inline-flex items-center text-[13px] font-medium tracking-wide uppercase text-brand-primary border-b border-brand-primary/20 hover:border-brand-primary/60 pb-1 transition-colors"
          >
            Ver todas
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/ferramentas/${tool.slug}`}
              className="group bg-bg-card border border-border-base p-8 hover:border-brand-accent/40 transition-colors"
            >
              <div className="w-12 h-12 bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-5 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                {tool.icon}
              </div>
              <h3 className="text-base font-display font-medium text-brand-primary mb-2">
                {tool.title}
              </h3>
              <p className="text-xs text-brand-secondary/50 leading-relaxed">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
