import Link from "next/link";
import Image from "next/image";
import { getAllArticles } from "@/lib/articles";

export default function RecentArticlesSection() {
  // Pegamos a partir do segundo artigo, pois o primeiro estará no Hero (Featured)
  const articles = getAllArticles().slice(1, 7);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-display font-semibold text-text-base">
            Postagens recentes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/artigos/${article.slug}`}
              className="group flex flex-col items-start"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/10] rounded-[5px] overflow-hidden mb-5 bg-gray-100">
                {article.image && (
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>

              {/* Content */}
              <span className="text-brand-primary font-medium text-sm mb-2 uppercase tracking-wide">
                {article.category || "Saúde Emocional"}
              </span>
              <h3 className="text-xl font-bold font-display text-text-base mb-3 leading-snug group-hover:text-brand-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-text-base/70 line-clamp-2 text-base font-body mb-5">
                {article.excerpt}
              </p>

              {/* Author & Date */}
              <div className="mt-auto flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                  <Image 
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(article.author)}&background=random`} 
                    alt={article.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-text-base">{article.author}</span>
                  <span className="text-sm text-text-base/60">{article.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/artigos"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-sm font-semibold text-text-base hover:bg-gray-50 transition-colors"
          >
            Carregar mais...
          </Link>
        </div>
      </div>
    </section>
  );
}
