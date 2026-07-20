import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

interface CategorySectionProps {
  title: string;
  categorySlug: string;
  layout?: "light" | "dark";
}

export default function CategorySection({ title, categorySlug, layout = "light" }: CategorySectionProps) {
  const isDark = layout === "dark";
  
  const allArticles = getAllArticles();
  const articles = allArticles.slice(4, 8);
  
  if (articles.length === 0) return null;

  return (
    <div className={isDark ? "bg-brand-primary text-white p-8 md:p-12 -mx-4 sm:-mx-6 lg:-mx-8" : ""}>
      <div className="mb-8 flex items-center gap-4">
        <h2 className={`text-sm font-medium tracking-widest uppercase ${isDark ? 'text-white' : 'text-brand-primary'}`}>
          {title}
        </h2>
        <div className="flex-1 h-px bg-border-base"></div>
        <Link href={`/categorias/${categorySlug}`} className={`text-xs ${isDark ? 'text-white/50 hover:text-white' : 'text-brand-secondary/50 hover:text-brand-primary'} flex items-center gap-1 transition tracking-wider uppercase`}>
          Ver todos
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <article key={article.id} className="group">
            <Link href={`/artigos/${article.slug}`}>
              <div className="relative w-full aspect-[4/3] bg-gray-100 mb-4 overflow-hidden">
                {article.image ? (
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 text-brand-secondary/30 text-xs">Sem Imagem</div>
                )}
              </div>
              <h4 className={`text-sm font-display font-medium leading-snug mb-2 ${isDark ? 'text-white' : 'text-brand-primary'}`}>
                {article.title}
              </h4>
              <p className={`text-xs font-light line-clamp-2 ${isDark ? 'text-white/40' : 'text-brand-secondary/60'}`}>
                {article.excerpt}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
