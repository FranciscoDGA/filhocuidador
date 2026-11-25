import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, BookOpenIcon, ClockIcon } from "@/components/ui/Icons";
import { getPublishedArticlesByCategorySlug } from "@/lib/articles";
import { CATEGORIES, getCategoryBySlug } from "@/lib/categories";
import { SITE_INFO } from "@/lib/site";

export const dynamicParams = true;

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: rawCategory } = await params;
  const category = getCategoryBySlug(rawCategory);

  if (!category) {
    return {
      title: `Categoria não encontrada | ${SITE_INFO.name}`,
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${category.title} | ${SITE_INFO.name}`,
    description: category.description,
    alternates: {
      canonical: `/${category.slug}`,
    },
    openGraph: {
      title: `${category.title} | ${SITE_INFO.name}`,
      description: category.description,
      url: `/${category.slug}`,
      type: "website",
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: rawCategory } = await params;
  const category = getCategoryBySlug(rawCategory);

  if (!category) {
    notFound();
  }

  const articles = getPublishedArticlesByCategorySlug(category.slug);

  return (
    <main id="conteudo-principal" className="bg-surface-page min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Navegação estrutural" className="mb-8 text-xs text-ink-muted flex flex-wrap items-center gap-2">
          <Link href="/" className="hover:text-ink-strong transition-colors">
            Início
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/categorias" className="hover:text-ink-strong transition-colors">
            Categorias
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink-strong font-medium">{category.title}</span>
        </nav>

        <header className="max-w-3xl pb-8 border-b border-border-subtle mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-2">
            {category.accentBadge}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-strong mb-4">
            {category.title}
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed mb-4">
            {category.description}
          </p>
          <p className="text-xs font-semibold text-ink-muted inline-flex items-center gap-1.5">
            <BookOpenIcon className="w-4 h-4" aria-hidden="true" />
            {articles.length}{" "}
            {articles.length === 1 ? "guia publicado" : "guias publicados"} nesta categoria
          </p>
        </header>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="rounded-xl border border-border-subtle bg-surface-card p-6 flex flex-col justify-between hover:border-border-strong transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-ink-muted mb-3">
                    <span>{article.updatedAtLabel ?? article.dateLabel}</span>
                    <span className="inline-flex items-center gap-1">
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
                  <p className="text-sm text-ink-muted leading-relaxed line-clamp-3 mb-5">
                    {article.excerpt}
                  </p>
                </div>

                <Link
                  href={`/artigos/${article.slug}`}
                  className="inline-flex items-center min-h-[44px] text-sm font-semibold text-ink-strong hover:underline underline-offset-4"
                >
                  Ler guia completo →
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-border-subtle bg-surface-card p-8 text-center max-w-2xl mb-14">
            <h2 className="font-serif text-2xl font-bold text-ink-strong mb-2">
              Ainda não há guias publicados nesta categoria
            </h2>
            <p className="text-sm text-ink-muted mb-6">
              Outros materiais passam por revisão de fontes e atualização antes de irem ao ar.
            </p>
            <Link
              href="/artigos"
              className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-lg bg-brand-primary text-surface-card text-sm font-semibold"
            >
              Explorar artigos publicados
            </Link>
          </div>
        )}

        <section aria-labelledby="outras-categorias-heading" className="border-t border-border-subtle pt-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h2
              id="outras-categorias-heading"
              className="font-serif text-2xl font-bold text-ink-strong"
            >
              Outras categorias do portal
            </h2>
            <Link
              href="/categorias"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-strong hover:underline underline-offset-4"
            >
              <ArrowLeftIcon className="w-4 h-4" aria-hidden="true" />
              Ver todas as categorias
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            {CATEGORIES.filter((item) => item.slug !== category.slug).map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-lg border border-border-subtle bg-surface-card text-sm font-medium text-ink-strong hover:border-border-strong transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
