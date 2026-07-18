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
      <h3 className="text-[11px] font-medium text-brand-secondary/40 uppercase tracking-widest mb-4">
        Tópicos
      </h3>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/artigos?category=${topic.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2 border border-border-base hover:border-brand-primary/20 transition-colors text-xs font-medium text-brand-secondary"
          >
            <span>{topic.name}</span>
            <span className="text-brand-secondary/40">
              {topic.count}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
