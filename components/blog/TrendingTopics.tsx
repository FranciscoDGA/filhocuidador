import Link from "next/link";

interface Topic {
  name: string;
  count: number;
  slug: string;
}

interface TrendingTopicsProps {
  topics: Topic[];
}

export default function TrendingTopics({ topics }: TrendingTopicsProps) {
  return (
    <section className="mb-16">
      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
        Trending Topics
      </h3>
      <div className="flex flex-wrap gap-3">
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/artigos?category=${topic.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            <span className="text-sm font-medium">{topic.name}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {topic.count}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
