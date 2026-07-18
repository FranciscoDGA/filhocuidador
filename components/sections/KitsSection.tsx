import Link from "next/link";

const kits = [
  {
    slug: "primeiras-24h-alzheimer",
    title: "Primeiras 24h com Alzheimer",
    category: "Diagnóstico",
    pages: 12,
  },
  {
    slug: "agressividade-confusao",
    title: "Agressividade e Confusão",
    category: "Comportamento",
    pages: 15,
  },
  {
    slug: "casa-segura",
    title: "Casa Segura",
    category: "Segurança",
    pages: 10,
  },
  {
    slug: "direitos-cuidador",
    title: "Direitos do Cuidador",
    category: "Jurídico",
    pages: 18,
  },
  {
    slug: "alimentacao-saudavel",
    title: "Alimentação Saudável",
    category: "Nutrição",
    pages: 14,
  },
  {
    slug: "cuidador-sobrevivente",
    title: "Cuidador Sobrevivente",
    category: "Saúde Mental",
    pages: 16,
  },
];

export default function KitsSection() {
  return (
    <section className="py-20 lg:py-28 bg-bg-base">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14">
          <div>
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary mb-4 block">
              Downloads Gratuitos
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-medium text-brand-primary">
              Kits de Emergência
            </h2>
          </div>
          <Link
            href="/kits"
            className="mt-4 sm:mt-0 inline-flex items-center text-[13px] font-medium tracking-wide uppercase text-brand-primary border-b border-brand-primary/20 hover:border-brand-primary/60 pb-1 transition-colors"
          >
            Ver todos
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {kits.map((kit) => (
            <Link
              key={kit.slug}
              href={`/kits/${kit.slug}`}
              className="group bg-white border border-border-base p-5 hover:border-brand-accent/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-medium tracking-wider uppercase text-brand-accent">
                  {kit.category}
                </span>
                <span className="text-[10px] text-brand-secondary/40">
                  {kit.pages} páginas
                </span>
              </div>
              <h3 className="text-sm font-display font-medium text-brand-primary group-hover:text-brand-accent transition-colors">
                {kit.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
