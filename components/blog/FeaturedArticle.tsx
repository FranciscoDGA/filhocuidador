import Link from "next/link";

interface FeaturedArticleProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image?: string;
}

export default function FeaturedArticle({
  slug,
  title,
  excerpt,
  category,
  author,
  date,
  image,
}: FeaturedArticleProps) {
  return (
    <Link href={`/artigos/${slug}`}>
      <article className="group cursor-pointer mb-12">
        {image && (
          <div className="relative h-80 w-full mb-6 overflow-hidden bg-gray-100">
            <img
              src={image}
              alt={title}
              width={800}
              height={320}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        )}

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-medium text-brand-accent tracking-[0.15em] uppercase">
              {category}
            </span>
            <span className="text-[10px] text-brand-secondary/40">
              {date}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-display font-medium leading-tight group-hover:text-brand-secondary transition-colors">
            {title}
          </h1>

          <p className="text-base text-brand-secondary/60 leading-relaxed font-light">
            {excerpt}
          </p>

          <div className="flex items-center gap-3 pt-4 border-t border-border-base">
            <div className="w-8 h-8 rounded-full bg-gray-200" />
            <div>
              <p className="font-medium text-xs text-brand-primary">{author}</p>
              <p className="text-[10px] text-brand-secondary/40">{date}</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
