import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <main className="bg-white min-h-screen pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Todos os Artigos
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            Navegue pelos {articles.length} conteúdos que preparamos com orientação prática, acolhimento e informação confiável para cuidadores.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.id} href={`/artigos/${article.slug}`}>
              <article className="h-full flex flex-col group cursor-pointer p-6 rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300">
                <div className="flex flex-col flex-grow">
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-100 text-xs font-medium text-gray-500 mb-4 self-start bg-gray-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                    {article.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-gray-600 transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-500 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-sm border-t border-gray-100 pt-4 mt-auto">
                    <span className="font-bold text-gray-900">{article.author}</span>
                    <span className="text-gray-400">• {article.date}</span>
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
