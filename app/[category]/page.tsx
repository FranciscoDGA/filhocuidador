import Link from "next/link";
import Image from "next/image";
import { getAllArticles } from "@/lib/articles";

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
  "juridico": {
    name: "Orientação Jurídica",
    description: "Direitos, benefícios sociais, documentação e legislação",
    emoji: "⚖️",
  },
  "entendendo-a-doenca": {
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

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categoryInfo[params.category];
  const allArticles = getAllArticles();

  const categorySlugToName: Record<string, string> = {
    "saude-emocional": "Saúde Emocional",
    "cuidados-praticos": "Cuidados Práticos",
    "juridico": "Jurídico",
    "entendendo-a-doenca": "Entendendo a Doença",
    "familia": "Família",
  };

  const articles = allArticles.filter(
    (a) => a.category === categorySlugToName[params.category]
  );

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
                  <div className="aspect-video bg-gradient-to-br from-brand-primary/5 to-brand-primary/10 overflow-hidden relative">
                    {article.image ? (
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-12 h-12 text-brand-primary/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
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
