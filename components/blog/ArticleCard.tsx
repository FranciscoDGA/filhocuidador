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
    <article className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded">
            {category}
          </span>
          <span className="text-sm text-gray-500">{readTime} min de leitura</span>
        </div>

        <h3 className="text-xl font-bold mb-2">
          <Link href={`/artigos/${slug}`} className="hover:text-blue-600">
            {title}
          </Link>
        </h3>

        <p className="text-gray-600 mb-4">{excerpt}</p>

        <div className="flex items-center justify-between">
          <time className="text-sm text-gray-500">{date}</time>
          <Link
            href={`/artigos/${slug}`}
            className="text-blue-600 font-semibold hover:text-blue-800"
          >
            Leia mais →
          </Link>
        </div>
      </div>
    </article>
  );
}
