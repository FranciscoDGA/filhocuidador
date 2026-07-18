import Link from "next/link";
import Image from "next/image";
import { getAllArticles } from "@/lib/articles";

export default function FeaturedNewsSection() {
  const allArticles = getAllArticles();
  
  if (allArticles.length === 0) {
    return <div>Carregando artigos...</div>;
  }

  // O primeiro artigo vai para o destaque principal
  const featured = allArticles[0];
  
  // Os 3 próximos vão para a lista "Em Alta"
  const trending = allArticles.slice(1, 4);

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      {/* Main Featured Article (Left 2/3) */}
      <div className="flex-1 lg:w-2/3">
        <div className="mb-6 flex items-center gap-2">
          <h2 className="text-xl font-display font-bold text-gray-900 tracking-wide">Destaque</h2>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>
        
        <article className="group cursor-pointer">
          <Link href={`/artigos/${featured.slug}`}>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3 block">{featured.category}</span>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight mb-4 group-hover:text-gray-700 transition">
              {featured.title}
            </h3>
            <div className="flex items-center gap-4 text-xs text-gray-500 mb-6 font-medium">
              <span>{featured.date}</span>
            </div>
            <div className="relative w-full aspect-video bg-gray-100 mb-6 overflow-hidden">
              {featured.image ? (
                <Image 
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">Sem Imagem</div>
              )}
            </div>
            <p className="text-gray-700 font-serif text-lg leading-relaxed md:w-4/5 line-clamp-3">
              {featured.excerpt}
            </p>
          </Link>
        </article>
      </div>

      {/* Sidebar (Right 1/3) */}
      <div className="lg:w-1/3">
        {/* Tópicos */}
        <div className="mb-10">
          <div className="mb-6 flex items-center gap-2">
            <h2 className="text-xl font-display font-bold text-gray-900 tracking-wide">Tópicos</h2>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/categorias/burocracia" className="relative h-24 bg-gray-100 group overflow-hidden">
              <div className="absolute inset-0 bg-blue-900 bg-opacity-80 flex items-center justify-center group-hover:bg-opacity-90 transition">
                <span className="text-white font-bold text-sm uppercase tracking-wide">Burocracia</span>
              </div>
            </Link>
            <Link href="/categorias/saude-mental" className="relative h-24 bg-gray-100 group overflow-hidden">
              <div className="absolute inset-0 bg-indigo-900 bg-opacity-80 flex items-center justify-center group-hover:bg-opacity-90 transition">
                <span className="text-white font-bold text-sm uppercase tracking-wide">Saúde Mental</span>
              </div>
            </Link>
            <Link href="/categorias/dicas" className="relative h-24 bg-gray-100 group overflow-hidden">
              <div className="absolute inset-0 bg-teal-900 bg-opacity-80 flex items-center justify-center group-hover:bg-opacity-90 transition">
                <span className="text-white font-bold text-sm uppercase tracking-wide">Dicas</span>
              </div>
            </Link>
            <Link href="/categorias/historias" className="relative h-24 bg-gray-100 group overflow-hidden">
              <div className="absolute inset-0 bg-orange-900 bg-opacity-80 flex items-center justify-center group-hover:bg-opacity-90 transition">
                <span className="text-white font-bold text-sm uppercase tracking-wide">Histórias</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Em Alta */}
        <div>
          <div className="mb-6 flex items-center gap-2">
            <h2 className="text-xl font-display font-bold text-gray-900 tracking-wide">Em Alta</h2>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          <div className="flex flex-col gap-6">
            {trending.map((article) => (
              <article key={article.id}>
                <Link href={`/artigos/${article.slug}`} className="group block">
                  <h4 className="text-lg font-display font-bold text-gray-900 leading-tight group-hover:text-gray-600 transition mb-2">
                    {article.title}
                  </h4>
                  <p className="text-sm text-gray-500 font-serif line-clamp-2">{article.excerpt}</p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
