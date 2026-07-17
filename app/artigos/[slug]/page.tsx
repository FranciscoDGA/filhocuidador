import Link from "next/link";
import { getArticleBySlug, getAllArticles } from "@/lib/articles";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  const allArticles = getAllArticles();

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-white">
        <div className="text-center max-w-2xl">
          <h1 className="font-display text-4xl font-light text-text-dark mb-4">
            Artigo não encontrado
          </h1>
          <p className="text-text-dark/70 mb-8">
            Desculpe, não conseguimos encontrar esse artigo.
          </p>
          <Link href="/artigos" className="text-text-dark font-semibold hover:text-text-dark/70 transition">
            Voltar aos artigos →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-12 flex items-center gap-2 text-sm text-text-dark/70">
          <Link href="/" className="hover:text-text-dark transition">Início</Link>
          <span>/</span>
          <Link href="/artigos" className="hover:text-text-dark transition">Artigos</Link>
          <span>/</span>
          <span className="text-text-dark font-medium">{article.title}</span>
        </div>

        {/* Featured Image */}
        <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-100 rounded-2xl mb-16 flex items-center justify-center border border-gray-200">
          <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Article Header */}
        <div className="mb-12">
          <div className="inline-block px-3 py-1 bg-gray-100 text-text-dark/70 rounded-full text-xs font-semibold mb-6">
            {article.category}
          </div>

          <h1 className="font-display text-5xl sm:text-6xl font-light text-text-dark mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-text-dark/70 border-b border-gray-200 pb-6">
            <span>{article.readTime} min de leitura</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>
        </div>

        {/* Health Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12">
          <p className="text-sm text-amber-900">
            <strong>⚠️ Aviso Importante:</strong> Conteúdo informativo. Consulte sempre um profissional de saúde.
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-sm max-w-none mb-16 text-text-dark/80 leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        {/* Share Buttons */}
        <div className="border-t border-b border-gray-200 py-8 mb-12">
          <p className="text-sm font-semibold text-text-dark mb-4">Compartilhar:</p>
          <div className="flex gap-4">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(article.title + " - https://filhocuidador.com.br")}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition font-semibold text-sm"
            >
              WhatsApp
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://filhocuidador.com.br`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition font-semibold text-sm"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Related Articles */}
        {article && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Artigos Relacionados
            </h2>
            <div className="space-y-4">
              {allArticles
                .filter((a) => a.category === article.category && a.slug !== article.slug)
                .slice(0, 3)
                .map((related) => (
                  <Link
                    key={related.id}
                    href={`/artigos/${related.slug}`}
                    className="block p-6 bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-100 transition-all duration-300 group"
                  >
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Leia o artigo →
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
