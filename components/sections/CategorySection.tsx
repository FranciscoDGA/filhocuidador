import Link from "next/link";
import Image from "next/image";
import { getAllArticles } from "@/lib/articles";

interface CategorySectionProps {
  title: string;
  categorySlug: string;
  layout?: "light" | "dark";
}

export default function CategorySection({ title, categorySlug, layout = "light" }: CategorySectionProps) {
  const isDark = layout === "dark";
  
  const allArticles = getAllArticles();
  
  // Apenas uma lógica simples para pegar 4 artigos. Em um cenário real, você filtraria por `categorySlug`.
  // Para evitar que a seção fique vazia enquanto você não tem categorias configuradas, vamos pegar artigos aleatórios ou recentes.
  const articles = allArticles.slice(4, 8); // Skip the ones used in Featured
  
  if (articles.length === 0) return null;

  return (
    <div className={isDark ? "bg-black text-white p-8 md:p-12 -mx-4 sm:-mx-6 lg:-mx-8 rounded-none md:rounded-xl" : ""}>
      <div className="mb-8 flex items-center gap-4">
        <h2 className={`text-2xl md:text-3xl font-display font-bold ${isDark ? 'text-white' : 'text-gray-900'} tracking-wide`}>
          {title}
        </h2>
        <Link href={`/categorias/${categorySlug}`} className={`text-sm ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-black'} flex items-center gap-1 transition`}>
          Ver todos
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <article key={article.id} className="group">
            <Link href={`/artigos/${article.slug}`}>
              <div className="relative w-full aspect-[4/3] bg-gray-100 mb-4 overflow-hidden">
                {article.image ? (
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 text-sm">Sem Imagem</div>
                )}
              </div>
              <h4 className={`text-lg font-display font-bold leading-tight mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {article.title}
              </h4>
              <p className={`text-sm font-serif line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {article.excerpt}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
