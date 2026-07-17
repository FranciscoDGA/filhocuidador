import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import RecentArticlesSection from "@/components/sections/RecentArticlesSection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import AccolhimentoSection from "@/components/sections/AccolhimentoSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <CategoriesSection />
      <RecentArticlesSection />
      <StatisticsSection />
      <AccolhimentoSection />
      <NewsletterSection />
    </main>
  );
}
