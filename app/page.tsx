import FeaturedPost from "@/components/sections/FeaturedPost";
import RecentArticlesSection from "@/components/sections/RecentArticlesSection";
import EmotionalSupportBlock from "@/components/sections/EmotionalSupportBlock";
import { getAllArticles } from "@/lib/articles";

export default function Home() {
  const articles = getAllArticles();
  const featuredArticle = articles.length > 0 ? articles[0] : null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Filho Cuidador",
    url: "https://filhocuidador.com.br",
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
      <EmotionalSupportBlock />
    </main>
  );
}
