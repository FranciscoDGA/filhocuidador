import HeroSection from "@/components/sections/HeroSection";
import RecentArticlesSection from "@/components/sections/RecentArticlesSection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import Sidebar from "@/components/layout/Sidebar";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content Area (Left) */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Últimas Atualizações</h2>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>
            <RecentArticlesSection />
          </div>

          {/* Sidebar Area (Right) */}
          <Sidebar />
        </div>
      </div>

      <StatisticsSection />
      <NewsletterSection />
    </main>
  );
}
