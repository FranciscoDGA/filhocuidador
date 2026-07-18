import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Article } from "@/lib/articles";

export default function FeaturedPost({ article }: { article: Article }) {
  if (!article) return null;

  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Link href={`/artigos/${article.slug}`} className="group relative block w-full aspect-[2/1] min-h-[480px] overflow-hidden bg-gray-100">
        <Image
          src={article.image || "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289"}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-[1.02] transition-transform duration-1000"
          priority
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 lg:p-16 flex items-end justify-between">
          <div className="max-w-2xl text-white">
            <span className="inline-block text-[10px] font-medium tracking-[0.2em] uppercase mb-5 text-white/60">
              Destaque
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-medium leading-[1.1] mb-4">
              {article.title}
            </h1>
            <p className="text-base md:text-lg text-white/60 font-body line-clamp-2 font-light leading-relaxed">
              {article.excerpt}
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center w-12 h-12 border border-white/20 group-hover:bg-white group-hover:text-brand-primary text-white transition-all duration-500 shrink-0 mb-4 ml-8">
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </Link>
    </section>
  );
}
