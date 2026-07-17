import Link from "next/link";
import { getArticleBySlug, getAllArticles } from "@/lib/articles";
import Image from "next/image";

// Add generateStaticParams to prerender all 50 articles
export function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = await getArticleBySlug(resolvedParams.slug);
  const allArticles = getAllArticles();

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-white">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Artigo não encontrado
          </h1>
          <p className="text-gray-500 mb-8">
            Desculpe, não conseguimos encontrar esse artigo.
          </p>
          <Link href="/artigos" className="text-gray-900 font-semibold hover:text-gray-600 transition">
            Voltar aos artigos →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen pt-16 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-12 flex items-center gap-2 text-sm text-gray-500 font-medium">
          <Link href="/" className="hover:text-gray-900 transition">Início</Link>
          <span>/</span>
          <Link href="/artigos" className="hover:text-gray-900 transition">Artigos</Link>
          <span>/</span>
          <span className="text-gray-900 line-clamp-1">{article.title}</span>
        </div>

        {/* Article Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-600 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
            {article.category}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 border-b border-gray-100 pb-8">
            <span className="font-medium text-gray-900">{article.author}</span>
            <span>•</span>
            <span>{article.readTime} min de leitura</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>
        </div>

        {/* Health Disclaimer */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-12">
          <p className="text-sm text-gray-600">
            <strong className="text-gray-900">⚠️ Aviso Importante:</strong> Este artigo é um conteúdo informativo. Consulte sempre um profissional de saúde qualificado.
          </p>
        </div>

        {/* Article Content */}
        {/* We use prose-lg for a better reading experience matching Foks template */}
        <div className="prose prose-gray prose-lg max-w-none mb-16 text-gray-700 leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        {/* Share Buttons */}
        <div className="border-t border-b border-gray-100 py-8 mb-16">
          <p className="text-sm font-bold text-gray-900 mb-4 tracking-wider uppercase">Compartilhar artigo</p>
          <div className="flex gap-4">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(article.title + " - https://filhocuidador.com.br/artigos/" + article.slug)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-50 text-gray-900 rounded-xl hover:bg-gray-100 border border-gray-200 transition font-semibold text-sm"
            >
              WhatsApp
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://filhocuidador.com.br/artigos/${article.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-50 text-gray-900 rounded-xl hover:bg-gray-100 border border-gray-200 transition font-semibold text-sm"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Related Articles */}
        {allArticles && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">
              Recomendados para você
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {allArticles
                .filter((a) => a.category === article.category && a.slug !== article.slug)
                .slice(0, 4)
                .map((related) => (
                  <Link
                    key={related.id}
                    href={`/artigos/${related.slug}`}
                    className="block p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-md hover:border-gray-200 transition-all duration-300 group"
                  >
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-600 transition-colors leading-snug mb-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium mt-auto">
                      Ler artigo →
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
