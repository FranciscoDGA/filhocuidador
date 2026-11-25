import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";
import type { ArticleSummary } from "@/lib/articles";
import { SITE_INFO } from "@/lib/site";

interface HeroSectionProps {
  featuredArticle?: ArticleSummary;
  publishedCount: number;
}

export default function HeroSection({
  featuredArticle,
  publishedCount,
}: HeroSectionProps) {
  return (
    <section className="py-12 sm:py-16 border-b border-border-subtle bg-surface-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-3">
            Apoio prático para cuidadores familiares
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-black text-ink-strong leading-tight mb-5">
            O único portal que fala <span className="underline decoration-2 underline-offset-4">com você</span>, não apenas sobre quem você cuida.
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed mb-7">
            Cuidar de pai, mãe ou familiar idoso exige orientações objetivas sobre a rotina,
            saúde emocional de quem cuida e caminhos oficiais no SUS e na assistência social.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/artigos"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-2.5 rounded-lg bg-brand-primary text-surface-card font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <span>Explorar {publishedCount} guias publicados</span>
              <ArrowRightIcon className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/categorias"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-lg border border-border-strong bg-surface-card text-ink-strong font-semibold text-sm hover:bg-surface-subtle transition-colors"
            >
              Navegar por categorias
            </Link>
          </div>
        </div>

        {featuredArticle && (
          <div className="rounded-xl border border-border-subtle bg-surface-subtle overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <Link
              href={`/artigos/${featuredArticle.slug}`}
              className="lg:col-span-5 relative aspect-[16/9] lg:aspect-auto lg:min-h-[260px] block overflow-hidden bg-surface-card group"
            >
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.imageAlt}
                width={960}
                height={540}
                priority
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between gap-5">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2 text-xs text-ink-muted">
                  <span className="font-bold uppercase tracking-wider text-ink-strong">
                    Guia em destaque
                  </span>
                  <span aria-hidden="true">•</span>
                  <Link
                    href={`/${featuredArticle.categorySlug}`}
                    className="hover:underline font-medium"
                  >
                    {featuredArticle.categoryTitle}
                  </Link>
                  <span aria-hidden="true">•</span>
                  <span>{featuredArticle.readTime} min de leitura</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink-strong mb-2 leading-snug">
                  <Link
                    href={`/artigos/${featuredArticle.slug}`}
                    className="hover:underline underline-offset-4"
                  >
                    {featuredArticle.title}
                  </Link>
                </h2>
                <p className="text-sm sm:text-base text-ink-body leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div>
                <Link
                  href={`/artigos/${featuredArticle.slug}`}
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg bg-brand-primary text-surface-card text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <span>Ler guia completo</span>
                  <ArrowRightIcon className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        )}

        <p className="mt-6 text-xs text-ink-muted">{SITE_INFO.editorialNotice}</p>
      </div>
    </section>
  );
}
