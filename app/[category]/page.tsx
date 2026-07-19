import Link from "next/link";

const categoryInfo: { [key: string]: any } = {
  "saude-emocional": {
    name: "Saúde Emocional",
    description: "Burnout, ansiedade, depressão, autocuidado e bem-estar emocional",
    emoji: "💭",
  },
  "cuidados-praticos": {
    name: "Cuidados Práticos",
    description: "Mobilidade, higiene, medicamentos, segurança e rotina diária",
    emoji: "🏥",
  },
  "orientacao-juridica": {
    name: "Orientação Jurídica",
    description: "Direitos, benefícios sociais, documentação e legislação",
    emoji: "⚖️",
  },
  "doencas": {
    name: "Entendendo a Doença",
    description: "Alzheimer, Parkinson, AVC e outras condições neurodegenerativas",
    emoji: "🧠",
  },
  "familia": {
    name: "Família e Conflitos",
    description: "Dinâmica familiar, irmãos, relacionamentos e comunicação",
    emoji: "👨‍👩‍👧",
  },
};

const mockArticles: { [key: string]: any[] } = {
  "saude-emocional": [
    {
      id: 1,
      slug: "reconhecendo-burnout-cuidador",
      title: "Reconhecendo o Burnout do Cuidador",
      excerpt: "Sinais de alerta para quando você está no limite. E sim, sua exaustão é legítima.",
      readTime: 8,
      date: "17 de julho, 2024",
    },
  ],
  "orientacao-juridica": [
    {
      id: 2,
      slug: "bpc-loas-guia-completo",
      title: "BPC (Benefício de Prestação Continuada): Guia Completo 2024",
      excerpt: "Como solicitar o BPC, quem tem direito, documentos necessários e passo a passo.",
      readTime: 12,
      date: "20 de julho, 2024",
    },
  ],
  "familia": [
    {
      id: 3,
      slug: "comunicacao-irmaos-nao-ajudam",
      title: "Quando o Irmão Não Quer Ajudar: Como Comunicar",
      excerpt: "Estratégias práticas para conversar com irmãos que não colaboram no cuidado.",
      readTime: 10,
      date: "10 de agosto, 2024",
    },
  ],
  "cuidados-praticos": [],
  "doencas": [],
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categoryInfo[params.category];
  const articles = mockArticles[params.category] || [];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-bg-base">
        <div className="text-center max-w-2xl">
          <h1 className="font-display text-4xl font-light text-brand-primary mb-4">
            Categoria não encontrada
          </h1>
          <p className="text-brand-secondary mb-8">
            Desculpe, não conseguimos encontrar essa categoria.
          </p>
          <Link href="/" className="text-brand-primary font-semibold hover:text-brand-primary/70 transition">
            Voltar à página inicial →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="mb-8 flex items-center gap-2 text-[11px] text-brand-secondary/50">
          <Link href="/" className="hover:text-brand-primary transition">Início</Link>
          <span>/</span>
          <span className="text-brand-primary">{category.name}</span>
        </div>

        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary/60 mb-4 block">
            {category.emoji} Categoria
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-brand-primary mb-6 leading-tight">
            {category.name}
          </h1>
          <p className="text-base text-brand-secondary leading-relaxed">
            {category.description}
          </p>
        </div>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link key={article.id} href={`/artigos/${article.slug}`}>
                <article className="h-full flex flex-col bg-white border border-border-base overflow-hidden hover:border-brand-primary/20 hover:shadow-md transition-all duration-300 cursor-pointer group">
                  <div className="aspect-video bg-gradient-to-br from-brand-primary/5 to-brand-primary/10 flex items-center justify-center group-hover:from-brand-primary/10 group-hover:to-brand-primary/15 transition-colors">
                    <svg className="w-12 h-12 text-brand-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-display text-lg font-medium text-brand-primary mb-3 leading-snug line-clamp-2 group-hover:text-brand-primary/80 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-brand-secondary text-sm mb-6 line-clamp-2 flex-grow">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-brand-secondary/50 border-t border-border-base pt-4">
                      <span>{article.readTime} min</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-border-base">
            <p className="text-lg text-brand-secondary mb-8">
              Ainda não temos artigos nessa categoria.
            </p>
            <Link href="/artigos" className="text-brand-primary font-semibold hover:text-brand-primary/70 transition">
              Ver todos os artigos →
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
