import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, BookOpenIcon } from "@/components/ui/Icons";
import { getPublishedArticlesByCategorySlug } from "@/lib/articles";
import { CATEGORIES } from "@/lib/categories";
import { SITE_INFO } from "@/lib/site";

export const metadata: Metadata = {
  title: `Categorias de Conteúdo | ${SITE_INFO.name}`,
  description:
    "Navegue pelos guias publicados no Filho Cuidador por tema: saúde emocional, cuidados práticos, doenças, família e direitos.",
  alternates: {
    canonical: "/categorias",
  },
  openGraph: {
    title: `Categorias de Conteúdo | ${SITE_INFO.name}`,
    description:
      "Navegue pelos guias publicados no Filho Cuidador por área do cuidado com pessoas idosas.",
    url: "/categorias",
    type: "website",
  },
};

export default function CategoriasPage() {
  const categoriesWithArticles = CATEGORIES.map((cat) => {
    const articles = getPublishedArticlesByCategorySlug(cat.slug);
    return {
      ...cat,
      articles,
    };
  });

  return (
    <main id="conteudo-principal" className="bg-surface-page min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-3">
            Biblioteca organizada por tema
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-strong mb-4">
            Categorias
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            Escolha a área que mais faz sentido para o seu momento. Todos os links abaixo
            levam apenas a guias completos já publicados no portal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categoriesWithArticles.map((category) => (
            <section
              key={category.slug}
              aria-labelledby={`cat-heading-${category.slug}`}
              className="rounded-xl border border-border-subtle bg-surface-card p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-muted">
                    {category.accentBadge}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-subtle text-ink-strong">
                    <BookOpenIcon className="w-3.5 h-3.5" aria-hidden="true" />
                    {category.articles.length}{" "}
                    {category.articles.length === 1 ? "artigo" : "artigos"}
                  </span>
                </div>

                <h2
                  id={`cat-heading-${category.slug}`}
                  className="font-serif text-2xl font-bold text-ink-strong mb-2"
                >
                  <Link
                    href={`/${category.slug}`}
                    className="hover:underline underline-offset-4"
                  >
                    {category.title}
                  </Link>
                </h2>

                <p className="text-sm text-ink-muted leading-relaxed mb-5">
                  {category.description}
                </p>

                {category.articles.length > 0 ? (
                  <ul className="space-y-2 border-t border-border-subtle pt-4 mb-6">
                    {category.articles.slice(0, 3).map((article) => (
                      <li key={article.slug} className="text-sm">
                        <Link
                          href={`/artigos/${article.slug}`}
                          className="text-ink-body hover:text-ink-strong hover:underline underline-offset-2 font-medium line-clamp-1"
                        >
                          • {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-ink-muted border-t border-border-subtle pt-4 mb-6">
                    Nenhum guia publicado nesta categoria no momento.
                  </p>
                )}
              </div>

              <Link
                href={`/${category.slug}`}
                className="inline-flex items-center justify-between min-h-[44px] px-4 py-2 rounded-lg bg-surface-subtle text-ink-strong font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <span>Ver todos em {category.shortTitle}</span>
                <ArrowRightIcon className="w-4 h-4" aria-hidden="true" />
              </Link>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
