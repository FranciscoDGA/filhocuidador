import type { Metadata } from "next";
import Link from "next/link";
import ArticlesCatalog from "@/components/articles/ArticlesCatalog";
import { getAllPublishedArticles } from "@/lib/articles";
import { CATEGORIES } from "@/lib/categories";
import { SITE_INFO } from "@/lib/site";

export const metadata: Metadata = {
  title: `Todos os Artigos | ${SITE_INFO.name}`,
  description:
    "Explore os guias publicados no Filho Cuidador sobre cuidados práticos, saúde emocional, doenças crônicas, família e benefícios oficiais.",
  alternates: {
    canonical: "/artigos",
  },
  openGraph: {
    title: `Todos os Artigos | ${SITE_INFO.name}`,
    description:
      "Biblioteca completa de guias informativos publicados para quem cuida de pessoas idosas.",
    url: "/artigos",
    type: "website",
  },
};

export default function ArtigosPage() {
  const articles = getAllPublishedArticles();

  return (
    <main id="conteudo-principal" className="bg-surface-page min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-2">
            Acervo publicado ({articles.length} guias disponíveis)
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-strong mb-4">
            Todos os Artigos
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed mb-4">
            Guias práticos e informativos para apoiar filhos e familiares na rotina do
            cuidado. Cada conteúdo tem finalidade educativa e não substitui atendimento
            médico, psicológico ou jurídico individualizado.
          </p>
          <Link
            href="/categorias"
            className="text-sm font-semibold text-ink-strong hover:underline underline-offset-4"
          >
            Ou navegue por categorias temáticas →
          </Link>
        </header>

        <ArticlesCatalog articles={articles} categories={CATEGORIES} />
      </div>
    </main>
  );
}
