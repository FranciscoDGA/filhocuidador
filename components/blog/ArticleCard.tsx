import Link from "next/link";

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  image?: string;
  date: string;
}

export default function ArticleCard({
  slug,
  title,
  excerpt,
  category,
  readTime,
  image,
  date,
}: ArticleCardProps) {
  return (
    <Link href={`/artigos/${slug}`}>
      <article className="group cursor-pointer">
        {image && (
          <div className="relative h-56 w-full mb-5 overflow-hidden bg-gray-100">
            <img
              src={image}
              alt={title}
              width={600}
              height={400}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        )}

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-medium text-brand-accent tracking-[0.15em] uppercase">
              {category}
            </span>
            <span className="text-[10px] text-brand-secondary/40">
              {readTime} min
            </span>
          </div>

          <h3 className="text-lg font-display font-medium leading-snug group-hover:text-brand-secondary transition-colors">
            {title}
          </h3>

          <p className="text-sm text-brand-secondary/60 leading-relaxed font-light">
            {excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-border-base">
            <time className="text-xs text-brand-secondary/40">
              {date}
            </time>
            <span className="text-xs font-medium text-brand-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Ler
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
