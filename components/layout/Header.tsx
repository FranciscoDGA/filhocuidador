import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Filho Cuidador
        </Link>

        <ul className="hidden md:flex gap-8">
          <li>
            <Link
              href="/artigos"
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition"
            >
              Artigos
            </Link>
          </li>
          <li>
            <Link
              href="/recursos"
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition"
            >
              Recursos
            </Link>
          </li>
          <li>
            <Link
              href="/comunidade"
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition"
            >
              Comunidade
            </Link>
          </li>
        </ul>

        <button className="md:hidden text-gray-700 dark:text-gray-300">☰</button>
      </nav>
    </header>
  );
}
