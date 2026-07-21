import FeaturedPost from "@/components/sections/FeaturedPost";
import RecentArticlesSection from "@/components/sections/RecentArticlesSection";
import ClustersSection from "@/components/sections/ClustersSection";
import KitsSection from "@/components/sections/KitsSection";
import ToolsSection from "@/components/sections/ToolsSection";
import SpecialistSection from "@/components/sections/SpecialistSection";
import DiariesSection from "@/components/sections/DiariesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import VideosSection from "@/components/sections/VideosSection";
import EmotionalSupportBlock from "@/components/sections/EmotionalSupportBlock";
import { getAllArticles } from "@/lib/articles";

export default function Home() {
  const articles = getAllArticles();
  const featuredArticle = articles.length > 0 ? articles[0] : null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Filhos Cuidadores",
    url: "https://filhoscuidadores.com.br",
    description: "O único portal brasileiro que fala com filhos que cuidam de pais com Alzheimer, Parkinson, AVC e outras demências.",
    sameAs: [
      "https://facebook.com/filhocuidador",
      "https://instagram.com/filhocuidador",
      "https://youtube.com/@filhocuidador",
    ],
  };

  return (
    <main className="bg-bg-base min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {featuredArticle && <FeaturedPost article={featuredArticle} />}
      <RecentArticlesSection />
      <ClustersSection />
      <KitsSection />
      <ToolsSection />
      <SpecialistSection />
      <DiariesSection />
      <TestimonialsSection />
      <VideosSection />
      <EmotionalSupportBlock />
    </main>
  );
}
