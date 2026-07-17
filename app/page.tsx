import HeroSection from "@/components/sections/HeroSection";
import FeaturedArticleSection from "@/components/sections/FeaturedArticleSection";
import RecentArticlesSection from "@/components/sections/RecentArticlesSection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <FeaturedArticleSection />
      <RecentArticlesSection />
      <StatisticsSection />
      <NewsletterSection />
    </main>
  );
}
