import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Article } from "@/lib/articles";

export default function FeaturedPost({ article }: { article: Article }) {
  if (!article) return null;

  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
      <Link href={`/artigos/${article.slug}`} className="group relative block w-full aspect-[16/9] lg:aspect-[2/1] min-h-[400px] lg:min-h-[500px] overflow-hidden rounded-t-[50px] bg-gray-100">
        <Image
          src={article.image || "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289"}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-[1.02] transition-transform duration-1000"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="max-w-3xl">
            <span className="inline-block text-[10px] font-medium tracking-[0.2em] uppercase mb-4 text-white/60">
              Destaque
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white leading-[1.1] mb-4">
              {article.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/60 font-body line-clamp-2 font-light leading-relaxed mb-6 max-w-2xl">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-2 text-xs text-white/50">
              <span>{article.author}</span>
              <span>•</span>
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime} min de leitura</span>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 md:top-12 md:right-12 lg:top-16 lg:right-16 hidden md:flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 border border-white/20 text-white group-hover:bg-white group-hover:text-brand-primary transition-all duration-500">
          <ArrowRight className="w-5 h-5" />
        </div>
      </Link>
    </section>
  );
}
