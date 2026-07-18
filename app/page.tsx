import HeroSection from "@/components/sections/HeroSection";
import RecentArticlesSection from "@/components/sections/RecentArticlesSection";
import EmotionalSupportBlock from "@/components/sections/EmotionalSupportBlock";
import { getAllArticles } from "@/lib/articles";

export default function Home() {
  return (
    <main className="bg-bg-base min-h-screen">
      <HeroSection />
      <RecentArticlesSection />
      <EmotionalSupportBlock />
    </main>
  );
}
