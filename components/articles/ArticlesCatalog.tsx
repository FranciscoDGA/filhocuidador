"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ClockIcon, SearchIcon } from "@/components/ui/Icons";
import type { ArticleSummary } from "@/lib/articles";
import type { CategoryDefinition } from "@/lib/categories";

interface ArticlesCatalogProps {
  articles: ArticleSummary[];
  categories: CategoryDefinition[];
}

export default function ArticlesCatalog({
  articles,
  categories,
}: ArticlesCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("todas");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === "todas" || article.categorySlug === selectedCategory;
      if (!matchesCategory) {
        return false;
      }
      if (!q) {
        return true;
      }
      return (
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.categoryTitle.toLowerCase().includes(q) ||
        article.keywords.some((kw) => kw.toLowerCase().includes(q))
      );
    });
  }, [articles, query, selectedCategory]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 rounded-xl border border-border-subtle bg-surface-card p-4 sm:p-5">
        <div className="relative">
          <label htmlFor="filtro-artigos" className="sr-only">
            Filtrar artigos publicados
          </label>
          <SearchIcon
            className="w-4 h-4 text-ink-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />
          <input
            id="filtro-artigos"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filtrar por tema, sintoma ou benefício (ex: queda, Alzheimer, BPC)..."
            className="w-full min-h-[44px] pl-10 pr-4 py-2.5 rounded-lg border border-border-subtle bg-surface-page text-sm text-ink-strong placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
        </div>

        <div
          role="group"
          aria-label="Filtrar por categoria"
          className="flex flex-wrap gap-2"
        >
          <button
            type="button"
            onClick={() => setSelectedCategory("todas")}
            aria-pressed={selectedCategory === "todas"}
            className={`min-h-[40px] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
              selectedCategory === "todas"
                ? "bg-brand-primary text-surface-card"
                : "bg-surface-subtle text-ink-body hover:text-ink-strong"
            }`}
          >
            Todas ({articles.length})
          </button>
          {categories.map((cat) => {
            const count = articles.filter((a) => a.categorySlug === cat.slug).length;
            const active = selectedCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setSelectedCategory(cat.slug)}
                aria-pressed={active}
                className={`min-h-[40px] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  active
                    ? "bg-brand-primary text-surface-card"
                    : "bg-surface-subtle text-ink-body hover:text-ink-strong"
                }`}
              >
                {cat.shortTitle} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <article
              key={article.slug}
              className="rounded-xl border border-border-subtle bg-surface-card overflow-hidden flex flex-col justify-between hover:border-border-strong transition-colors group"
            >
              <div>
                <Link
                  href={`/artigos/${article.slug}`}
                  className="block aspect-[16/9] overflow-hidden bg-surface-subtle border-b border-border-subtle"
                >
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    width={960}
                    height={540}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </Link>

                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Link
                      href={`/${article.categorySlug}`}
                      className="text-[11px] font-bold uppercase tracking-wider text-ink-muted hover:text-ink-strong"
                    >
                      {article.categoryTitle}
                    </Link>
                    <span className="inline-flex items-center gap-1 text-xs text-ink-muted">
                      <ClockIcon className="w-3.5 h-3.5" aria-hidden="true" />
                      {article.readTime} min
                    </span>
                  </div>

                  <h2 className="font-serif text-xl font-bold text-ink-strong mb-2 leading-snug">
                    <Link
                      href={`/artigos/${article.slug}`}
                      className="hover:underline underline-offset-4"
                    >
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-ink-muted leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="mx-6 pb-6 pt-4 border-t border-border-subtle flex items-center justify-between gap-2 text-xs text-ink-muted">
                <span>{article.updatedAtLabel ?? article.dateLabel}</span>
                <Link
                  href={`/artigos/${article.slug}`}
                  className="font-semibold text-ink-strong hover:underline underline-offset-4"
                >
                  Ler artigo →
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-border-subtle bg-surface-card p-8 text-center">
          <h2 className="font-serif text-xl font-bold text-ink-strong mb-2">
            Nenhum artigo corresponde ao filtro
          </h2>
          <p className="text-sm text-ink-muted mb-5">
            Tente buscar por outro termo ou limpe o filtro de categoria.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setSelectedCategory("todas");
            }}
            className="min-h-[44px] px-5 py-2 rounded-lg bg-brand-primary text-surface-card text-sm font-semibold"
          >
            Mostrar todos os artigos
          </button>
        </div>
      )}
    </div>
  );
}
