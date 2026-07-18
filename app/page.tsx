import FeaturedNewsSection from "@/components/sections/FeaturedNewsSection";
import CategorySection from "@/components/sections/CategorySection";
import ColumnistsSection from "@/components/sections/ColumnistsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      {/* Top Section with Featured News and Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <FeaturedNewsSection />
      </div>

      <hr className="max-w-7xl mx-auto border-gray-200" />

      {/* Dicas Práticas Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <CategorySection title="Dicas Práticas" categorySlug="dicas" />
      </div>

      <hr className="max-w-7xl mx-auto border-gray-200" />

      {/* Saúde Mental Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <CategorySection title="Saúde Mental" categorySlug="saude-mental" layout="dark" />
      </div>

      <hr className="max-w-7xl mx-auto border-gray-200" />

      {/* Burocracia Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <CategorySection title="Burocracia" categorySlug="burocracia" />
      </div>
      
      {/* Columnists */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ColumnistsSection />
      </div>

      {/* Newsletter */}
      <NewsletterSection />
    </main>
  );
}
