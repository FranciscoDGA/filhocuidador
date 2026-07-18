import FeaturedPost from "@/components/sections/FeaturedPost";
import RecentArticlesSection from "@/components/sections/RecentArticlesSection";
import EmotionalSupportBlock from "@/components/sections/EmotionalSupportBlock";
import { getAllArticles } from "@/lib/articles";

export default function Home() {
  const articles = getAllArticles();
  const featuredArticle = articles.length > 0 ? articles[0] : null;

  return (
    <main className="bg-bg-base min-h-screen">
      {featuredArticle && <FeaturedPost article={featuredArticle} />}
      <RecentArticlesSection />
      <EmotionalSupportBlock />
    </main>
  );
}
