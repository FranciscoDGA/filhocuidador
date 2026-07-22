import Link from "next/link";
import Image from "next/image";
import { getAllArticles } from "@/lib/articles";

export default function FeaturedNewsSection() {
  const allArticles = getAllArticles();
  
  if (allArticles.length === 0) {
    return <div>Carregando artigos...</div>;
  }

  const featured = allArticles[0];
  const trending = allArticles.slice(1, 4);

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
      {/* Main Featured Article (Left 2/3) */}
      <div className="flex-1 lg:w-2/3">
        <div className="mb-8 flex items-center gap-4">
          <h2 className="text-sm font-medium text-brand-primary tracking-widest uppercase">Destaque</h2>
          <div className="flex-1 h-px bg-border-base"></div>
        </div>
        
        <article className="group cursor-pointer">
          <Link href={`/artigos/${featured.slug}`}>
            <span className="text-[10px] font-medium text-brand-accent tracking-[0.15em] uppercase mb-3 block">{featured.category}</span>
            <h3 className="text-3xl md:text-4xl font-display font-medium text-brand-primary leading-tight mb-4 group-hover:text-brand-secondary transition">
              {featured.title}
            </h3>
            <div className="flex items-center gap-4 text-xs text-brand-secondary/50 mb-6 font-medium">
              <span>{featured.date}</span>
            </div>
            <div className="relative w-full aspect-video bg-gray-100 mb-6 overflow-hidden">
              {featured.image ? (
                <Image 
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 text-brand-secondary/30 text-sm">Sem Imagem</div>
              )}
            </div>
            <p className="text-brand-secondary text-base leading-relaxed md:w-4/5 line-clamp-3 font-light">
              {featured.excerpt}
            </p>
          </Link>
        </article>
      </div>

      {/* Sidebar (Right 1/3) */}
      <div className="lg:w-1/3">
        {/* Tópicos */}
        <div className="mb-12">
          <div className="mb-8 flex items-center gap-4">
            <h2 className="text-sm font-medium text-brand-primary tracking-widest uppercase">Tópicos</h2>
            <div className="flex-1 h-px bg-border-base"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/categorias/entendendo-a-doenca" className="relative h-20 bg-brand-primary group overflow-hidden flex items-center justify-center">
              <span className="text-white font-medium text-[11px] tracking-wider uppercase">Diagnóstico</span>
            </Link>
            <Link href="/categorias/saude-emocional" className="relative h-20 bg-brand-primary group overflow-hidden flex items-center justify-center">
              <span className="text-white font-medium text-[11px] tracking-wider uppercase">Saúde Mental</span>
            </Link>
            <Link href="/categorias/cuidados-praticos" className="relative h-20 bg-brand-primary group overflow-hidden flex items-center justify-center">
              <span className="text-white font-medium text-[11px] tracking-wider uppercase">Cuidados</span>
            </Link>
            <Link href="/categorias/familia" className="relative h-20 bg-brand-primary group overflow-hidden flex items-center justify-center">
              <span className="text-white font-medium text-[11px] tracking-wider uppercase">Família</span>
            </Link>
          </div>
        </div>

        {/* Em Alta */}
        <div>
          <div className="mb-8 flex items-center gap-4">
            <h2 className="text-sm font-medium text-brand-primary tracking-widest uppercase">Em Alta</h2>
            <div className="flex-1 h-px bg-border-base"></div>
          </div>
          <div className="flex flex-col gap-6">
            {trending.map((article) => (
              <article key={article.id} className="border-b border-border-base pb-6 last:border-0 last:pb-0">
                <Link href={`/artigos/${article.slug}`} className="group block">
                  <h4 className="text-base font-display font-medium text-brand-primary leading-snug group-hover:text-brand-secondary transition mb-2">
                    {article.title}
                  </h4>
                  <p className="text-xs text-brand-secondary/50 font-light line-clamp-2">{article.excerpt}</p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
