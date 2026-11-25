import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
  ExternalLinkIcon,
  InfoIcon,
  RefreshIcon,
} from "@/components/ui/Icons";
import {
  getAllPublishedArticles,
  getPublishedArticleBySlug,
  getRelatedPublishedArticles,
} from "@/lib/articles";
import { getSiteUrl, SITE_INFO } from "@/lib/site";

export const dynamicParams = true;

export function generateStaticParams() {
  return getAllPublishedArticles().map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getPublishedArticleBySlug(slug);

  if (!article) {
    return {
      title: `Artigo não encontrado | ${SITE_INFO.name}`,
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${article.title} | ${SITE_INFO.name}`,
    description: article.metaDescription,
    keywords: article.keywords.length > 0 ? article.keywords : undefined,
    alternates: {
      canonical: `/artigos/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `/artigos/${article.slug}`,
      type: "article",
      publishedTime: article.dateISO,
      modifiedTime: article.updatedAtISO ?? article.dateISO,
      images: [
        {
          url: article.image,
          width: 960,
          height: 540,
          alt: article.imageAlt,
        },
      ],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getPublishedArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedPublishedArticles(
    article.slug,
    article.categorySlug,
    3
  );
  const articleUrl = `${getSiteUrl()}/artigos/${article.slug}`;
  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
    `${article.title} — ${articleUrl}`
  )}`;

  return (
    <main id="conteudo-principal" className="bg-surface-page min-h-screen py-10 sm:py-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Navegação estrutural"
          className="mb-8 text-xs text-ink-muted flex flex-wrap items-center gap-2"
        >
          <Link href="/" className="hover:text-ink-strong transition-colors">
            Início
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href={`/${article.categorySlug}`}
            className="hover:text-ink-strong transition-colors"
          >
            {article.categoryTitle}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink-strong font-medium line-clamp-1">{article.title}</span>
        </nav>

        <header className="mb-8 pb-8 border-b border-border-subtle">
          <div className="mb-4">
            <Link
              href={`/${article.categorySlug}`}
              className="inline-flex items-center px-3 py-1 rounded-full bg-surface-subtle text-xs font-bold uppercase tracking-wider text-ink-strong hover:opacity-85"
            >
              {article.categoryTitle}
            </Link>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-strong leading-tight mb-5">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-ink-muted leading-relaxed mb-6">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-ink-muted">
            <span className="inline-flex items-center gap-1.5">
              <CalendarIcon className="w-4 h-4" aria-hidden="true" />
              Publicado em{" "}
              <time dateTime={article.dateISO}>{article.dateLabel}</time>
            </span>

            {article.updatedAtLabel && article.updatedAtISO && (
              <span className="inline-flex items-center gap-1.5">
                <RefreshIcon className="w-4 h-4" aria-hidden="true" />
                Atualizado em{" "}
                <time dateTime={article.updatedAtISO}>{article.updatedAtLabel}</time>
              </span>
            )}

            <span className="inline-flex items-center gap-1.5">
              <ClockIcon className="w-4 h-4" aria-hidden="true" />
              Leitura de cerca de {article.readTime} min
            </span>
          </div>

          {(article.authorVerified || article.reviewerVerified) && (
            <div className="mt-4 text-xs text-ink-muted flex flex-wrap gap-4">
              {article.authorVerified && (
                <span>
                  Autoria: <strong className="text-ink-strong">{article.authorVerified}</strong>
                </span>
              )}
              {article.reviewerVerified && (
                <span>
                  Revisão: <strong className="text-ink-strong">{article.reviewerVerified}</strong>
                </span>
              )}
            </div>
          )}
        </header>

        <div className="mb-8 rounded-xl overflow-hidden border border-border-subtle bg-surface-subtle aspect-[16/9]">
          <Image
            src={article.image}
            alt={article.imageAlt}
            width={960}
            height={540}
            priority
            className="w-full h-full object-cover"
          />
        </div>

        <aside
          aria-label="Aviso sobre finalidade informativa"
          className="mb-8 rounded-xl border border-border-subtle bg-surface-subtle p-4 sm:p-5 flex gap-3 items-start"
        >
          <InfoIcon className="w-5 h-5 text-ink-strong shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-xs sm:text-sm text-ink-body leading-relaxed">
            {article.editorialNote ?? SITE_INFO.editorialNotice}
          </p>
        </aside>

        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: article.htmlContent }}
        />

        {article.sources.length > 0 && (
          <section
            aria-labelledby="fontes-oficiais-heading"
            className="mt-10 rounded-xl border border-border-subtle bg-surface-card p-6"
          >
            <h2
              id="fontes-oficiais-heading"
              className="font-serif text-xl font-bold text-ink-strong mb-3"
            >
              Fontes oficiais consultadas
            </h2>
            <ul className="space-y-2 text-sm">
              {article.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-ink-strong font-medium underline underline-offset-4 hover:opacity-80"
                  >
                    <span>{source.label}</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-10 pt-6 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4">
          <Link
            href={`/${article.categorySlug}`}
            className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-ink-strong hover:underline underline-offset-4"
          >
            <ArrowLeftIcon className="w-4 h-4" aria-hidden="true" />
            Mais em {article.categoryTitle}
          </Link>

          <a
            href={whatsappShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 rounded-lg border border-border-strong bg-surface-card text-sm font-semibold text-ink-strong hover:bg-surface-subtle transition-colors"
          >
            Compartilhar no WhatsApp
          </a>
        </div>

        {relatedArticles.length > 0 && (
          <section
            aria-labelledby="artigos-relacionados-heading"
            className="mt-12 pt-10 border-t border-border-subtle"
          >
            <h2
              id="artigos-relacionados-heading"
              className="font-serif text-2xl font-bold text-ink-strong mb-6"
            >
              Outros guias que podem ajudar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/artigos/${related.slug}`}
                  className="rounded-xl border border-border-subtle bg-surface-card overflow-hidden hover:border-border-strong transition-colors flex flex-col justify-between group"
                >
                  <div>
                    <div className="aspect-[16/9] overflow-hidden bg-surface-subtle border-b border-border-subtle">
                      <Image
                        src={related.image}
                        alt={related.imageAlt}
                        width={640}
                        height={360}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="p-4 pb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-ink-muted block mb-1.5">
                        {related.categoryTitle}
                      </span>
                      <h3 className="font-serif text-base font-bold text-ink-strong leading-snug">
                        {related.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-ink-strong px-4 pb-4 pt-2 block">
                    Ler guia →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
