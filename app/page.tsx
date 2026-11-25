import HeroSection from "@/components/sections/HeroSection";
import RecentArticlesSection from "@/components/sections/RecentArticlesSection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import Sidebar from "@/components/layout/Sidebar";
import {
  getAllPublishedArticles,
  getPublishedArticleBySlug,
  getPublishedArticlesByCategorySlug,
} from "@/lib/articles";
import { CATEGORIES } from "@/lib/categories";

export default function Home() {
  const allPublished = getAllPublishedArticles();
  const featuredArticle =
    getPublishedArticleBySlug("bpc-loas-guia-completo") ?? allPublished[0];

  const recentArticles = allPublished
    .filter((article) => article.slug !== featuredArticle?.slug)
    .slice(0, 6);

  const categoryCounts = CATEGORIES.map((cat) => ({
    ...cat,
    count: getPublishedArticlesByCategorySlug(cat.slug).length,
  }));

  const essentialSlugs = [
    "reconhecendo-burnout-cuidador",
    "prevencao-quedas-casa-guia-pratico",
    "comunicacao-irmaos-nao-ajudam",
    "medicamentos-sus-gratuitos",
  ];
  const essentialArticles = essentialSlugs
    .map((slug) => allPublished.find((article) => article.slug === slug))
    .filter((article): article is NonNullable<typeof article> => Boolean(article));

  return (
    <main id="conteudo-principal" className="bg-surface-page min-h-screen">
      <HeroSection
        featuredArticle={featuredArticle}
        publishedCount={allPublished.length}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <RecentArticlesSection articles={recentArticles} />
          </div>
          <div className="lg:col-span-1">
            <Sidebar
              categories={categoryCounts}
              essentialArticles={essentialArticles}
            />
          </div>
        </div>
      </div>

      <StatisticsSection
        publishedCount={allPublished.length}
        categoryCount={CATEGORIES.length}
      />

      <NewsletterSection />
    </main>
  );
}
