import Link from "next/link";
import Image from "next/image";
import { getAllArticles } from "@/lib/articles";

export default function RecentArticlesSection() {
  const articles = getAllArticles().slice(0, 5); // Display top 5 recent articles

  return (
    <div className="space-y-12">
      {articles.map((article) => (
        <article key={article.id} className="group relative">
          <Link href={`/artigos/${article.slug}`} className="block">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              {/* Image */}
              <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-auto md:h-64 rounded-2xl bg-gray-100 overflow-hidden relative flex-shrink-0 border border-gray-100">
                {article.image ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <svg className="absolute inset-0 w-full h-full text-gray-300 p-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )}
              </div>
              
              {/* Content */}
              <div className="w-full md:w-3/5 flex flex-col justify-center py-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-600 mb-4 self-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                  {article.category}
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-gray-600 transition tracking-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                    {/* Placeholder for author avatar */}
                  </div>
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
