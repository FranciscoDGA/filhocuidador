import Link from "next/link";
import Image from "next/image";
import { getAllArticles } from "@/lib/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todos os Artigos",
  description: "Navegue por todos os artigos do Filho Cuidador. Informação, acolhimento e orientação prática para filhos que cuidam de pais com demência.",
  openGraph: {
    title: "Todos os Artigos | Filho Cuidador",
    description: "Navegue por todos os artigos do Filho Cuidador.",
  },
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary/60 mb-3 block">
            Conteúdo
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-medium text-brand-primary mb-4 tracking-tight">
            Todos os Artigos
          </h1>
          <p className="text-base text-brand-secondary max-w-2xl leading-relaxed">
            {articles.length} artigos com orientação prática, acolhimento e informação confiável para cuidadores.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {articles.map((article) => (
            <Link key={article.id} href={`/artigos/${article.slug}`}>
              <article className="h-full flex flex-col group cursor-pointer">
                {/* Image */}
                <div className="aspect-[16/10] bg-gray-100 overflow-hidden mb-5 relative">
                  {article.image ? (
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  ) : null}
                </div>

                <div className="flex flex-col flex-grow">
                  {/* Category */}
                  <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-brand-accent mb-2">
                    {article.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-base lg:text-lg font-display font-medium text-brand-primary mb-2 leading-snug group-hover:text-brand-secondary transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-brand-secondary/60 mb-5 line-clamp-2 flex-grow font-light leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-2 text-[11px] text-brand-secondary/40 mt-auto">
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
