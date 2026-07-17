import Link from "next/link";
import Image from "next/image";

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
          <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-2 py-1 rounded-full">
              {category}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {readTime} min
            </span>
          </div>

          <h3 className="text-2xl font-bold leading-tight group-hover:opacity-75 transition-opacity">
            {title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
            <time className="text-sm text-gray-500 dark:text-gray-400">
              {date}
            </time>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
              Read →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
