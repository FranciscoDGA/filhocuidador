import Link from "next/link";
import Image from "next/image";
import { getArticleBySlug, getAllArticles } from "@/lib/articles";
import { Facebook, MessageCircle } from "lucide-react";

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
      <div className="min-h-screen flex items-center justify-center px-4 bg-bg-base">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-display font-bold text-text-base mb-4">Artigo não encontrado</h1>
          <Link href="/artigos" className="text-brand-primary font-semibold hover:underline">
            Voltar aos artigos →
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = allArticles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <main className="bg-bg-base min-h-screen pt-12 pb-24">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
        
        {/* Main Content Area */}
        <div className="flex-1 lg:max-w-[720px]">
          {/* Breadcrumb */}
          <div className="mb-10 flex items-center gap-2 text-sm text-text-base/60 font-medium overflow-x-auto whitespace-nowrap pb-2">
            <Link href="/" className="hover:text-brand-primary transition">Início</Link>
            <span>/</span>
            <Link href="/artigos" className="hover:text-brand-primary transition">Artigos</Link>
            <span>/</span>
            <span className="text-text-base">{article.title}</span>
          </div>

          <article>
            {/* Header */}
            <header className="mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-secondary/15 text-brand-secondary text-xs font-bold uppercase tracking-wider mb-6">
                {article.category}
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-text-base leading-tight tracking-tight mb-8">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-text-base/60 font-medium">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime} min de leitura</span>
                <span>•</span>
                <span>Por {article.author}</span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-md">
              {article.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={article.image} alt={article.title} className="object-cover w-full h-full" />
              ) : (
                <div className="w-full h-full bg-border-base flex items-center justify-center text-text-base/40">Imagem Indisponível</div>
              )}
            </div>

            {/* Disclaimer */}
            <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-5 mb-12">
              <p className="text-sm text-text-base/80 leading-relaxed">
                <strong className="text-brand-primary">⚠️ Atenção:</strong> Este site tem caráter informativo. Consulte sempre um profissional de saúde para diagnósticos e tratamentos adequados.
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg prose-gray max-w-none mb-16 text-text-base/90 leading-relaxed font-body">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            {/* Share */}
            <div className="border-t border-b border-border-base py-8 flex flex-col sm:flex-row items-center gap-6 justify-between">
              <p className="font-semibold text-text-base">Compartilhe e ajude outras famílias:</p>
              <div className="flex gap-4">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(article.title + " - https://filhocuidador.com.br/artigos/" + article.slug)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full hover:bg-[#20bd5a] transition shadow-sm font-semibold"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://filhocuidador.com.br/artigos/${article.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white rounded-full hover:bg-[#166fe5] transition shadow-sm font-semibold"
                >
                  <Facebook size={20} />
                  Facebook
                </a>
              </div>
            </div>
          </article>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-[280px] hidden lg:block">
          <div className="sticky top-32">
            <h3 className="text-xl font-display font-bold text-text-base mb-6 border-b border-border-base pb-4">
              Recomendados
            </h3>
            <div className="flex flex-col gap-6">
              {relatedArticles.map((related) => (
                <Link key={related.id} href={`/artigos/${related.slug}`} className="group flex flex-col gap-3">
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-border-base">
                    {related.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={related.image} alt="" className="object-cover w-full h-full group-hover:scale-105 transition duration-500" />
                    ) : null}
                  </div>
                  <h4 className="font-bold text-text-base group-hover:text-brand-primary transition leading-snug">
                    {related.title}
                  </h4>
                </Link>
              ))}
            </div>
            
            {/* Banner Placeholder (AdSense/Ebook future) */}
            <div className="mt-12 bg-white border border-border-base rounded-xl p-6 text-center shadow-sm">
              <h4 className="font-bold text-brand-primary mb-2">Comunidade Exclusiva</h4>
              <p className="text-sm text-text-base/70 mb-4">Em breve, um espaço seguro para trocarmos experiências.</p>
              <button className="w-full py-2 bg-bg-base border border-brand-primary text-brand-primary rounded-full text-sm font-semibold cursor-not-allowed opacity-50">
                Aguarde...
              </button>
            </div>
          </div>
        </aside>
        
      </div>
    </main>
  );
}
