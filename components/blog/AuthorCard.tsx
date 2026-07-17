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
    <div className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex-shrink-0" />
      <div className="flex-1">
        <h4 className="font-semibold text-sm">{name}</h4>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{role}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
          {bio}
        </p>
        {articleCount > 0 && (
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {articleCount} artigos publicados
          </p>
        )}
      </div>
    </div>
  );
}
