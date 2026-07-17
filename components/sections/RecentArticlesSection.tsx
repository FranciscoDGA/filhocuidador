import Link from "next/link";

const mockArticles = [
  {
    id: 1,
    slug: "reconhecendo-burnout-cuidador",
    title: "Reconhecendo o Burnout do Cuidador",
    excerpt: "Sinais de alerta para quando você está no limite. E sim, sua exaustão é legítima.",
    category: "Saúde Emocional",
    readTime: 8,
    date: "17 de julho, 2024",
  },
  {
    id: 2,
    slug: "bpc-loas-guia-completo",
    title: "BPC (Benefício de Prestação Continuada): Guia Completo 2024",
    excerpt: "Como solicitar o BPC, quem tem direito, documentos necessários e passo a passo.",
    category: "Jurídico & Financeiro",
    readTime: 12,
    date: "20 de julho, 2024",
  },
  {
    id: 3,
    slug: "comunicacao-irmaos-nao-ajudam",
    title: "Quando o Irmão Não Quer Ajudar: Como Comunicar",
    excerpt: "Estratégias práticas para conversar com irmãos que não colaboram no cuidado.",
    category: "Família",
    readTime: 10,
    date: "10 de agosto, 2024",
  },
];

const categoryColors: { [key: string]: string } = {
  "Saúde Emocional": "bg-brand-primary/10 text-brand-primary",
  "Jurídico & Financeiro": "bg-brand-secondary/10 text-brand-secondary",
  "Família": "bg-brand-accent/10 text-brand-accent",
  "Cuidados Práticos": "bg-blue-100 text-blue-700",
  "Doenças": "bg-purple-100 text-purple-700",
};

export default function RecentArticlesSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-dark">
            Artigos Recentes
          </h2>
          <Link
            href="/artigos"
            className="text-brand-primary font-medium hover:text-brand-accent transition-colors inline-flex items-center gap-2"
          >
            Ver todos os artigos →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockArticles.map((article) => (
            <Link key={article.id} href={`/artigos/${article.slug}`}>
              <article className="h-full flex flex-col bg-white rounded-lg overflow-hidden border border-border-light hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-brand-primary/10 via-brand-secondary/10 to-brand-accent/10 flex items-center justify-center">
                  <svg className="w-12 h-12 text-text-dark/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  {/* Category Badge */}
                  <div className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-medium mb-4 ${categoryColors[article.category] || "bg-gray-100 text-gray-700"}`}>
                    {article.category}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-text-dark mb-3 leading-tight line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-text-dark/70 text-sm mb-4 line-clamp-2 flex-grow">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-text-dark/50 border-t border-border-light pt-4">
                    <span>{article.readTime} min de leitura</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
