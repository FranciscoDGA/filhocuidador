import Link from "next/link";
import Image from "next/image";
import { getArticleBySlug, getAllArticles } from "@/lib/articles";
import { Brain, Home, HeartPulse, Scale, Users } from "lucide-react";

const categoryCTA: Record<string, { title: string; description: string; href: string; icon: React.ReactNode }> = {
  "Saúde Emocional": {
    title: "Precisa de apoio emocional?",
    description: "Você não precisa carregar isso sozinho. Veja nosso guia sobre burnout do cuidador.",
    href: "/categorias/saude-emocional",
    icon: <HeartPulse className="w-5 h-5" />,
  },
  "Cuidados Práticos": {
    title: "Cuidados práticos do dia a dia",
    description: "Dicas claras para alimentação, higiene, medicação e segurança.",
    href: "/categorias/cuidados-praticos",
    icon: <Home className="w-5 h-5" />,
  },
  "Jurídico": {
    title: "Questões jurídicas e financeiras",
    description: "Procuração, interdição, BPC, LOAS — entenda seus direitos.",
    href: "/categorias/juridico",
    icon: <Scale className="w-5 h-5" />,
  },
  "Família": {
    title: "Conflitos familiares",
    description: "Quando a família não ajuda, o cuidador fica ainda mais sobrecarregado.",
    href: "/categorias/familia",
    icon: <Users className="w-5 h-5" />,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: `${article.title} | Filho Cuidador`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      images: article.image ? [{ url: article.image, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: article.image ? [article.image] : [],
    },
  };
}

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
          <h1 className="text-4xl font-display font-medium text-brand-primary mb-4">Artigo não encontrado</h1>
          <Link href="/artigos" className="text-brand-primary font-medium hover:underline">
            Voltar aos artigos
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = allArticles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  const categorySlug = article.category.toLowerCase().includes("emocional") || article.category.toLowerCase().includes("saúde")
    ? "saude-emocional"
    : article.category.toLowerCase().includes("jurídico") || article.category.toLowerCase().includes("bpc") || article.category.toLowerCase().includes("loas")
    ? "juridico"
    : article.category.toLowerCase().includes("família") || article.category.toLowerCase().includes("conflito")
    ? "familia"
    : article.category.toLowerCase().includes("cuidado") || article.category.toLowerCase().includes("alimentação") || article.category.toLowerCase().includes("higiene")
    ? "cuidados-praticos"
    : "entendendo-a-doenca";

  const cta = categoryCTA[article.category] || categoryCTA["Saúde Emocional"];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: "Filho Cuidador",
      url: "https://filhocuidador.com.br",
    },
    publisher: {
      "@type": "Organization",
      name: "Filho Cuidador",
      url: "https://filhocuidador.com.br",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://filhocuidador.com.br/artigos/${article.slug}`,
    },
    articleSection: article.category,
    wordCount: article.content.replace(/<[^>]*>/g, "").split(/\s+/).length,
  };

  return (
    <main className="bg-bg-base min-h-screen pt-8 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-[11px] text-brand-secondary/50 font-medium overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-brand-primary transition">Início</Link>
          <span>/</span>
          <Link href="/artigos" className="hover:text-brand-primary transition">Artigos</Link>
          <span>/</span>
          <Link href={`/categorias/${categorySlug}`} className="hover:text-brand-primary transition">{article.category}</Link>
          <span>/</span>
          <span className="text-brand-primary">{article.title}</span>
        </nav>

        <article>
          {/* Header */}
          <header className="mb-8">
            <Link 
              href={`/categorias/${categorySlug}`}
              className="inline-block text-[10px] font-medium tracking-[0.15em] uppercase text-brand-accent mb-4 hover:text-brand-primary transition"
            >
              {article.category}
            </Link>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-brand-primary leading-tight tracking-tight mb-6">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-3 text-[11px] text-brand-secondary/50 font-medium">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime} min de leitura</span>
              <span>•</span>
              <span>Por {article.author}</span>
            </div>
          </header>

          {/* Featured Image */}
          {article.image && (
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-[50px] mb-10">
              <Image 
                src={article.image} 
                alt={article.title} 
                fill 
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Disclaimer */}
          <div className="bg-brand-primary/[0.03] border border-border-base p-5 mb-10">
            <p className="text-xs text-brand-secondary/70 leading-relaxed">
              <strong className="text-brand-primary">Aviso importante:</strong> Este conteúdo é informativo e não substitui consulta com profissional de saúde. Sempre consulte um médico ou especialista para diagnósticos e tratamentos.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-gray max-w-none mb-12 text-brand-primary/90 leading-[1.8] font-body">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {/* CTA Contextual */}
          <div className="bg-white border border-border-base p-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-border-base flex items-center justify-center text-brand-secondary shrink-0">
                {cta.icon}
              </div>
              <div>
                <h3 className="text-sm font-display font-medium text-brand-primary mb-1">
                  {cta.title}
                </h3>
                <p className="text-xs text-brand-secondary/60 mb-3">
                  {cta.description}
                </p>
                <Link 
                  href={cta.href}
                  className="inline-flex items-center text-[11px] font-medium tracking-wide uppercase text-brand-primary border-b border-brand-primary/20 hover:border-brand-primary/60 pb-0.5 transition-colors"
                >
                  Explorar
                </Link>
              </div>
            </div>
          </div>

          {/* Share */}
          <div className="border-y border-border-base py-6 flex flex-col sm:flex-row items-center gap-4 justify-between mb-10">
            <p className="text-xs font-medium text-brand-secondary">Compartilhe e ajude outras famílias:</p>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(article.title + " - https://filhocuidador.com.br/artigos/" + article.slug)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-[#25D366] text-white text-xs font-medium hover:bg-[#20bd5a] transition"
              >
                WhatsApp
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://filhocuidador.com.br/artigos/${article.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-[#1877F2] text-white text-xs font-medium hover:bg-[#166fe5] transition"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-brand-primary tracking-widest uppercase mb-6">
                Artigos Relacionados
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <Link key={related.id} href={`/artigos/${related.slug}`} className="group">
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-[50px] bg-gray-100 mb-3">
                      {related.image && (
                        <Image 
                          src={related.image} 
                          alt={related.title} 
                          fill 
                          className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                        />
                      )}
                    </div>
                    <h4 className="text-sm font-display font-medium text-brand-primary group-hover:text-brand-secondary transition leading-snug">
                      {related.title}
                    </h4>
                    <p className="text-[11px] text-brand-secondary/40 mt-1">{related.date}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </main>
  );
}
