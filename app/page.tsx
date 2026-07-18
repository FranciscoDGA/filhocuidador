import FeaturedPost from "@/components/sections/FeaturedPost";
import RecentArticlesSection from "@/components/sections/RecentArticlesSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { getAllArticles } from "@/lib/articles";

export default function Home() {
  const articles = getAllArticles();
  const featuredArticle = articles.length > 0 ? articles[0] : null;

  return (
    <main className="bg-white min-h-screen">
      {featuredArticle && <FeaturedPost article={featuredArticle} />}
      
      <RecentArticlesSection />
      
      {/* 
        Temporarily hiding other sections to strictly match the Untitled UI blog template.
        We can bring them back styled appropriately later if needed.
      */}
      
      <div className="mt-20">
        <NewsletterSection />
      </div>
    </main>
  );
}
