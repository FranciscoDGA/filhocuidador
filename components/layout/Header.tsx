import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">Filho Cuidador.</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm text-gray-900 font-medium hover:text-gray-600 transition">
              Início
            </Link>
            <Link href="/artigos" className="text-sm text-gray-900 font-medium hover:text-gray-600 transition">
              Artigos
            </Link>
            <Link href="/categorias" className="text-sm text-gray-900 font-medium hover:text-gray-600 transition flex items-center gap-1">
              Categorias
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            <Link href="/sobre" className="text-sm text-gray-900 font-medium hover:text-gray-600 transition">
              Sobre
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-5">
            <button className="text-gray-700 hover:text-black transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <button className="hidden sm:block text-gray-700 hover:text-black transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            </button>
            <Link href="/contato" className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition">
              Contato →
            </Link>
            
            {/* Mobile menu button */}
            <button className="lg:hidden p-2 text-gray-900 -mr-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
