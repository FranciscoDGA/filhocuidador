import Link from "next/link";
import { ArrowRightIcon, ClockIcon } from "@/components/ui/Icons";
import type { ArticleSummary } from "@/lib/articles";

interface RecentArticlesSectionProps {
  articles: ArticleSummary[];
}

export default function RecentArticlesSection({
  articles,
}: RecentArticlesSectionProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="guias-recentes-heading">
      <div className="flex flex-wrap items-end justify-between gap-4 pb-5 border-b border-border-subtle mb-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-1">
            Leituras publicadas
          </p>
          <h2
            id="guias-recentes-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-ink-strong"
          >
            Guias Recentes
          </h2>
        </div>
        <Link
          href="/artigos"
          className="inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold text-ink-strong hover:underline underline-offset-4"
        >
          <span>Ver todos os artigos</span>
          <ArrowRightIcon className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="rounded-xl border border-border-subtle bg-surface-card p-6 flex flex-col justify-between hover:border-border-strong transition-colors"
          >
            <div>
              <div className="flex items-center justify-between gap-2 text-xs text-ink-muted mb-3">
                <Link
                  href={`/${article.categorySlug}`}
                  className="font-bold uppercase tracking-wider text-ink-strong hover:underline"
                >
                  {article.categoryTitle}
                </Link>
                <span className="inline-flex items-center gap-1">
                  <ClockIcon className="w-3.5 h-3.5" aria-hidden="true" />
                  {article.readTime} min
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink-strong leading-snug mb-2">
                <Link
                  href={`/artigos/${article.slug}`}
                  className="hover:underline underline-offset-4"
                >
                  {article.title}
                </Link>
              </h3>

              <p className="text-sm text-ink-muted leading-relaxed line-clamp-3 mb-5">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-xs text-ink-muted">
              <span>{article.updatedAtLabel ?? article.dateLabel}</span>
              <Link
                href={`/artigos/${article.slug}`}
                className="font-semibold text-ink-strong hover:underline underline-offset-4"
              >
                Ler guia →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
