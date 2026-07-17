import Link from "next/link";
import Image from "next/image";

const articles = [
  { 
    id: 1, 
    slug: "quando-a-natureza-espera", 
    title: "O desafio de manter o equilíbrio familiar", 
    excerpt: "Mesmo nos momentos mais difíceis, encontrar o equilíbrio emocional é fundamental. Aprenda técnicas práticas para manter a sanidade e o cuidado próprio em meio ao caos.", 
    category: "Saúde Emocional",
    author: "Tair",
    date: "13 Jun, 2026" 
  },
  { 
    id: 2, 
    slug: "direitos-escondidos", 
    title: "Descubra direitos e benefícios que muitas famílias desconhecem", 
    excerpt: "A carga financeira pode ser pesada. Exploramos as principais leis, isenções e recursos disponíveis para quem cuida em tempo integral.", 
    category: "Jurídico",
    author: "Sora",
    date: "10 Jun, 2026" 
  },
  { 
    id: 3, 
    slug: "rotina-pratica", 
    title: "Como estruturar uma rotina sustentável", 
    excerpt: "Rotinas imprevisíveis geram exaustão. Veja o passo a passo para criar hábitos diários que respeitam seus limites e as necessidades do idoso.", 
    category: "Cuidados Práticos",
    author: "Nira",
    date: "08 Jun, 2026" 
  }
];

export default function RecentArticlesSection() {
  return (
    <div className="space-y-12">
      {articles.map((article) => (
        <article key={article.id} className="group relative">
          <Link href={`/artigos/${article.slug}`} className="block">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              {/* Image */}
              <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-auto md:h-64 rounded-2xl bg-gray-100 overflow-hidden relative flex-shrink-0">
                 <svg className="absolute inset-0 w-full h-full text-gray-300 p-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              
              {/* Content */}
              <div className="w-full md:w-3/5 flex flex-col justify-center py-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-600 mb-4 self-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                  {article.category}
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-gray-600 transition">
                  {article.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  <span className="text-sm font-bold text-gray-900">{article.author}</span>
                  <span className="text-sm text-gray-400">• {article.date}</span>
                </div>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
