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
          <div className="relative h-96 w-full mb-6 overflow-hidden rounded-lg bg-gray-100">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-950 dark:text-blue-400 px-3 py-1 rounded-full">
              {category}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {date}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight group-hover:opacity-75 transition-opacity">
            {title}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {excerpt}
          </p>

          <div className="flex items-center gap-2 pt-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
            <div>
              <p className="font-medium text-sm">{author}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{date}</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
