import Link from "next/link";

const clusters = [
  {
    slug: "entendendo-a-doenca",
    title: "Entendendo a Doença",
    description: "Alzheimer, Parkinson, AVC e demências. O que é, como evolui e o que esperar.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    slug: "cuidados-praticos",
    title: "Cuidados Práticos",
    description: "Banho, alimentação, medicamentos, segurança e rotinas do dia a dia.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    slug: "saude-emocional",
    title: "Saúde do Cuidador",
    description: "Burnout, ansiedade, culpa, autocuidado e saúde mental de quem cuida.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    slug: "questoes-juridicas",
    title: "Questões Jurídicas",
    description: "Procuração, curatela, BPC, aposentadoria, direitos e benefícios.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    slug: "familia-e-conflitos",
    title: "Família e Conflitos",
    description: "Irmãos que não ajudam, dinâmica familiar, casamento e relacionamentos.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function ClustersSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-y border-border-base">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary mb-4 block">
            Explore por Tema
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-medium text-brand-primary">
            O que você precisa saber
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {clusters.map((cluster) => (
            <Link
              key={cluster.slug}
              href={`/categorias/${cluster.slug}`}
              className="group bg-bg-card border border-border-base p-6 text-center rounded-[5px] hover:border-brand-accent/40 transition-colors"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                {cluster.icon}
              </div>
              <h3 className="text-sm font-display font-medium text-brand-primary mb-2">
                {cluster.title}
              </h3>
              <p className="text-[11px] text-brand-secondary/50 leading-relaxed">
                {cluster.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
