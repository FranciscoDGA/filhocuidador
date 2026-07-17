import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export default function RecentArticlesSection() {
  const articles = getAllArticles().slice(0, 5); // Display top 5 recent articles

  return (
    <div className="space-y-12">
      {articles.map((article) => (
        <article key={article.id} className="group relative">
          <Link href={`/artigos/${article.slug}`} className="block">
            <div className="flex flex-col py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition p-4 rounded-2xl -mx-4">
              {/* Content Only */}
              <div className="w-full flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-600 mb-4 self-start bg-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                  {article.category}
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-gray-600 transition tracking-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed mb-6 line-clamp-2">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center gap-3">
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
