import Link from "next/link";
import Image from "next/image";
import { getAllArticles } from "@/lib/articles";

export default function RecentArticlesSection() {
  const articles = getAllArticles().slice(1, 7);

  return (
    <section className="py-20 lg:py-28 bg-bg-base">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary mb-4 block">
            Últimas
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-medium text-brand-primary">
            Postagens Recentes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/artigos/${article.slug}`}
              className="group flex flex-col items-start"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-[50px] mb-6 bg-gray-100">
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
                    <svg className="w-16 h-16 text-brand-primary/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Content */}
              <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-brand-accent mb-3">
                {article.category || "Saúde Emocional"}
              </span>
              <h3 className="text-lg lg:text-xl font-display font-medium text-brand-primary mb-3 leading-snug group-hover:text-brand-secondary transition-colors">
                {article.title}
              </h3>
              <p className="text-brand-secondary/70 line-clamp-2 text-sm font-body mb-6 leading-relaxed">
                {article.excerpt}
              </p>

              {/* Author & Date */}
              <div className="mt-auto flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden relative">
                  <Image 
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(article.author)}&background=random`} 
                    alt={article.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-brand-primary">{article.author}</span>
                  <span className="text-xs text-brand-secondary/50">{article.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 lg:mt-20 text-center">
          <Link
            href="/artigos"
            className="inline-flex items-center text-[13px] font-medium tracking-wide uppercase text-brand-primary border-b border-brand-primary/20 hover:border-brand-primary/60 pb-1 transition-colors"
          >
            Ver todos os artigos
          </Link>
        </div>
      </div>
    </section>
  );
}
