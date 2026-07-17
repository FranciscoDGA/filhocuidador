import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <main className="bg-white min-h-screen py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Todos os Artigos ({articles.length})
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Orientação prática, acolhimento e informação confiável para cuidadores.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link key={article.id} href={`/artigos/${article.slug}`}>
              <article className="h-full flex flex-col bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                {/* Image Placeholder */}
                <div className="aspect-video bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  {/* Category Badge */}
                  <div className="inline-block w-fit px-2 py-1 rounded text-xs font-semibold mb-3 bg-gray-100 text-gray-700">
                    {article.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight line-clamp-2 group-hover:text-brand-primary transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-2 text-xs text-gray-500 border-t border-gray-100 pt-3">
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
    </main>
  );
}
