import HeroSection from "@/components/sections/HeroSection";
import CategoryGridSection from "@/components/sections/CategoryGridSection";
import RecentArticlesSection from "@/components/sections/RecentArticlesSection";
import EmotionalSupportBlock from "@/components/sections/EmotionalSupportBlock";
import StatisticsSection from "@/components/sections/StatisticsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <main className="bg-bg-base min-h-screen">
      <HeroSection />
      
      <CategoryGridSection />
      
      <RecentArticlesSection />
      
      <EmotionalSupportBlock />
      
      {/* We can update Statistics and Newsletter in the next steps */}
      <StatisticsSection />
      
      <NewsletterSection />
    </main>
  );
}
