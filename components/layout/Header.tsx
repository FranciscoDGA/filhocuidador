import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-lg tracking-tight">
            ✦ Foks.
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400 transition">
              Home
            </Link>
            <Link href="/features" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400 transition">
              Features
            </Link>
            <Link href="/artigos" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400 transition">
              Trending
            </Link>
            <Link href="/sobre" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400 transition">
              Pages
            </Link>
          </nav>

          {/* Right side - Search, Dark mode, Contact */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" />
              </svg>
            </button>

            <Link
              href="/contato"
              className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded hover:opacity-90 transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}