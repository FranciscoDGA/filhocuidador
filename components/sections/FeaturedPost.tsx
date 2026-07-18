import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Article } from "@/lib/articles";

export default function FeaturedPost({ article }: { article: Article }) {
  if (!article) return null;

  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link href={`/artigos/${article.slug}`} className="group relative block w-full aspect-[2/1] min-h-[500px] rounded-[5px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
        <Image
          src={article.image || "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289"}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          priority
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex items-end justify-between">
          <div className="max-w-3xl text-white">
            <span className="inline-block font-semibold tracking-wide text-sm mb-4 uppercase opacity-90">
              Destaque
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-4">
              {article.title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-body line-clamp-2">
              {article.excerpt}
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-full border border-white/30 backdrop-blur-sm bg-white/10 group-hover:bg-white group-hover:text-black transition-colors shrink-0 mb-4 ml-8">
            <ArrowRight className="w-6 h-6 text-current" />
          </div>
        </div>
      </Link>
    </section>
  );
}
