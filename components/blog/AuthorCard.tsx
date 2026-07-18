interface AuthorCardProps {
  name: string;
  role: string;
  bio: string;
  articleCount?: number;
}

export default function AuthorCard({
  name,
  role,
  bio,
  articleCount = 0,
}: AuthorCardProps) {
  return (
    <div className="flex items-start gap-4 p-5 border border-border-base hover:border-brand-primary/20 transition-colors">
      <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />
      <div className="flex-1">
        <h4 className="font-display font-medium text-sm text-brand-primary">{name}</h4>
        <p className="text-[11px] text-brand-secondary/50 mb-2">{role}</p>
        <p className="text-xs text-brand-secondary/60 leading-relaxed mb-2 font-light">
          {bio}
        </p>
        {articleCount > 0 && (
          <p className="text-[10px] text-brand-secondary/40">
            {articleCount} artigos publicados
          </p>
        )}
      </div>
    </div>
  );
}
