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
  "Jurídico & Financeiro": {
    title: "Questões jurídicas e financeiras",
    description: "Procuração, interdição, BPC, LOAS — entenda seus direitos.",
    href: "/categorias/juridico",
    icon: <Scale className="w-5 h-5" />,
  },
  "Família": {
    title: "Conflitos familiares",
    description: "Quando a família não ajuda, o cuidador fica ainda mais sobrecarregado.",
    href: "/categorias/familia-e-conflitos",
    icon: <Users className="w-5 h-5" />,
  },
  "Doenças": {
    title: "Entenda a doença",
    description: "Alzheimer, Parkinson, AVC — saiba como a doença evolui e como lidar.",
    href: "/categorias/entendendo-a-doenca",
    icon: <Brain className="w-5 h-5" />,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  const ogImage = `https://filhocuidador.vercel.app/api/og?title=${encodeURIComponent(article.title)}&category=${encodeURIComponent(article.category)}`;

  const metaDescription = article.seo?.metaDescription || article.excerpt;

  return {
    title: `${article.title} | Filhos Cuidadores`,
    description: metaDescription,
    keywords: article.seo?.keywords,
    openGraph: {
      title: article.title,
      description: metaDescription,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: metaDescription,
      images: [ogImage],
    },
    alternates: {
      canonical: `https://filhocuidador.vercel.app/artigos/${slug}`,
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

  const categorySlug = article.category.toLowerCase().includes("emocional") || article.category.toLowerCase().includes("saúde") || article.category.toLowerCase().includes("dor")
    ? "saude-emocional"
    : article.category.toLowerCase().includes("jurídico") || article.category.toLowerCase().includes("financeiro") || article.category.toLowerCase().includes("bpc") || article.category.toLowerCase().includes("loas")
    ? "juridico"
    : article.category.toLowerCase().includes("família") || article.category.toLowerCase().includes("conflito")
    ? "familia-e-conflitos"
    : article.category.toLowerCase().includes("cuidado") || article.category.toLowerCase().includes("alimentação") || article.category.toLowerCase().includes("higiene") || article.category.toLowerCase().includes("soluções")
    ? "cuidados-praticos"
    : article.category.toLowerCase().includes("doença") || article.category.toLowerCase().includes("doenças")
    ? "entendendo-a-doenca"
    : "entendendo-a-doenca";

  const cta = categoryCTA[article.category] || categoryCTA["Saúde Emocional"];

  const schemaDescription = article.seo?.metaDescription || article.excerpt;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: schemaDescription,
    image: article.image,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: "Filhos Cuidadores",
      url: "https://filhocuidador.vercel.app",
    },
    publisher: {
      "@type": "Organization",
      name: "Filhos Cuidadores",
      url: "https://filhocuidador.vercel.app",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://filhocuidador.vercel.app/artigos/${article.slug}`,
    },
    articleSection: article.category,
    keywords: article.seo?.keywords?.join(", "),
    wordCount: article.content.replace(/<[^>]*>/g, "").split(/\s+/).length,
  };

  // Extract FAQ from HTML content
  const faqMatches = article.content.match(/<h[23][^>]*>([^<]+)<\/h[23]>\s*<p>([^<]+)<\/p>/g);
  let faqSchema = null;
  if (faqMatches && article.content.includes("Perguntas Frequentes")) {
    const faqPairs: { question: string; answer: string }[] = [];
    const h3Pattern = /<h3[^>]*>([^<]+)<\/h3>\s*<p>([^<]+)<\/p>/g;
    let match;
    while ((match = h3Pattern.exec(article.content)) !== null) {
      faqPairs.push({ question: match[1], answer: match[2] });
    }
    if (faqPairs.length > 0) {
      faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqPairs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      };
    }
  }

  // Extract HowTo steps from HTML content
  let howToSchema = null;
  if (article.content.includes("Passo a Passo")) {
    const stepPattern = /<h3[^>]*>Passo \d+[^<]*<\/h3>\s*<p>([^<]+)<\/p>/g;
    const steps: { text: string }[] = [];
    let stepMatch;
    while ((stepMatch = stepPattern.exec(article.content)) !== null) {
      steps.push({ text: stepMatch[1] });
    }
    if (steps.length > 0) {
      howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: article.title,
        description: schemaDescription,
        step: steps.map((step, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          text: step.text,
        })),
      };
    }
  }

  const schemas: Record<string, any>[] = [articleSchema, faqSchema, howToSchema].filter(Boolean) as Record<string, any>[];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: "https://filhocuidador.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Artigos",
        item: "https://filhocuidador.vercel.app/artigos",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.category,
        item: `https://filhocuidador.vercel.app/categorias/${categorySlug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: article.title,
        item: `https://filhocuidador.vercel.app/artigos/${article.slug}`,
      },
    ],
  };

  schemas.push(breadcrumbSchema);

  return (
    <main className="bg-bg-base min-h-screen pt-8 pb-20">
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
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
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-[5px] mb-10">
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

          {/* Internal Links - Leia Também */}
          {relatedArticles.length > 0 && (
            <div className="bg-brand-primary/[0.03] border border-border-base p-6 mb-10">
              <h3 className="text-xs font-medium tracking-wider uppercase text-brand-secondary/50 mb-4">
                Leia Também
              </h3>
              <div className="space-y-3">
                {relatedArticles.slice(0, 3).map((related) => (
                  <Link
                    key={related.id}
                    href={`/artigos/${related.slug}`}
                    className="flex items-start gap-3 group"
                  >
                    <span className="text-brand-accent mt-0.5">→</span>
                    <div>
                      <span className="text-sm text-brand-primary group-hover:text-brand-secondary transition-colors font-medium">
                        {related.title}
                      </span>
                      <span className="text-xs text-brand-secondary/40 ml-2">
                        {related.readTime} min
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

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
                href={`https://wa.me/?text=${encodeURIComponent(article.title + " - https://filhocuidador.vercel.app/artigos/" + article.slug)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-[#25D366] text-white text-xs font-medium hover:bg-[#20bd5a] transition"
              >
                WhatsApp
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://filhocuidador.vercel.app/artigos/${article.slug}`}
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
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-[5px] bg-gray-100 mb-3">
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
