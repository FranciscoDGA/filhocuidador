import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import Image from "next/image";

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
              <article className="h-full flex flex-col group cursor-pointer">
                {/* Image Placeholder or Actual Image */}
                <div className="aspect-[4/3] bg-gray-100 rounded-3xl overflow-hidden mb-6 relative border border-gray-100">
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

                <div className="flex flex-col flex-grow">
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-600 mb-4 self-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    {article.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-gray-600 transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2 flex-grow leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
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
