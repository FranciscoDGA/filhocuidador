import Link from "next/link";
import Image from "next/image";
import { getAllArticles } from "@/lib/articles";

export default function RecentArticlesSection() {
  const articles = getAllArticles().slice(0, 6);

  return (
    <section className="py-24 bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-display font-bold text-text-base">
            Artigos Recentes
          </h2>
          <Link href="/artigos" className="hidden sm:inline-flex text-sm font-semibold text-brand-primary hover:text-brand-primary/80 transition-colors">
            Ver todos os artigos →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-border-base shadow-sm hover:shadow-md transition-all">
              <Link href={`/artigos/${article.slug}`} className="flex flex-col h-full">
                <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
                  {article.image ? (
                    <Image 
                      src={article.image} 
                      alt={article.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">Sem Imagem</div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary text-xs font-semibold mb-4 self-start">
                    {article.category}
                  </span>
                  
                  <h3 className="text-xl font-display font-bold text-text-base leading-tight mb-3 group-hover:text-brand-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-text-base/70 line-clamp-2 mb-6 flex-grow">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-text-base/60 mt-auto pt-4 border-t border-border-base">
                    <span>{article.readTime} min de leitura</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 sm:hidden text-center">
          <Link href="/artigos" className="inline-flex px-6 py-3 border border-brand-primary text-brand-primary rounded-full font-semibold hover:bg-brand-primary/5 transition-colors">
            Ver todos os artigos
          </Link>
        </div>
      </div>
    </section>
  );
}
