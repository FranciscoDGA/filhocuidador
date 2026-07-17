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
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/30 to-green-50/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-16 gap-4">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-dark">
              Artigos Recentes
            </h2>
            <p className="text-text-light mt-2 font-medium">Conteúdo essencial para cuidadores</p>
          </div>
          <Link
            href="/artigos"
            className="px-6 py-2.5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-full font-bold text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 inline-flex items-center gap-2"
          >
            Ver todos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockArticles.map((article) => (
            <Link key={article.id} href={`/artigos/${article.slug}`}>
              <article className="h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-white/50 hover:border-brand-primary/30 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group backdrop-blur-sm">
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-brand-primary/30 via-brand-secondary/20 to-brand-accent/30 flex items-center justify-center group-hover:from-brand-primary/40 group-hover:to-brand-accent/40 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>
                  <svg className="w-12 h-12 text-brand-primary/30 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  {/* Category Badge */}
                  <div className="inline-block w-fit px-3 py-1.5 rounded-full text-xs font-bold mb-4 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 text-brand-primary border border-brand-primary/20">
                    {article.category}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-text-dark mb-3 leading-snug line-clamp-2 group-hover:text-brand-primary transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-text-light text-sm mb-6 line-clamp-2 flex-grow">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-text-light font-semibold border-t border-blue-100/50 pt-4">
                    <span>{article.readTime} min</span>
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
