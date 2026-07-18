import Link from "next/link";

export default function Header() {
  const currentDate = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date());

  return (
    <header className="bg-white">
      {/* Top Bar */}
      <div className="border-b border-gray-200 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-xs text-gray-500 font-medium uppercase tracking-wider">
          <div className="flex items-center gap-4">
            <span className="capitalize">{currentDate}</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <Link href="#" className="hover:text-black transition-colors">Facebook</Link>
              <Link href="#" className="hover:text-black transition-colors">Instagram</Link>
              <Link href="#" className="hover:text-black transition-colors">YouTube</Link>
            </div>
            <Link href="#newsletter" className="hover:text-black transition-colors border-l border-gray-300 pl-6">
              Assine a Newsletter
            </Link>
          </div>
        </div>
      </div>

      {/* Main Logo Area */}
      <div className="py-8 md:py-12 text-center">
        <Link href="/" className="inline-block">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 tracking-tight">
            Filho Cuidador.
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-500 font-serif italic">
            O único portal que fala com você, não sobre o seu pai.
          </p>
        </Link>
      </div>

      {/* Navigation Bar */}
      <div className="border-y border-gray-200 sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-14 relative">
            {/* Mobile menu button (left) */}
            <button className="md:hidden absolute left-0 p-2 text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>

            {/* Main Nav */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-12">
              <Link href="/" className="text-sm text-gray-900 font-bold hover:text-gray-600 transition uppercase tracking-wide">
                Início
              </Link>
              <Link href="/dicas" className="text-sm text-gray-900 font-bold hover:text-gray-600 transition uppercase tracking-wide">
                Dicas Práticas
              </Link>
              <Link href="/saude-mental" className="text-sm text-gray-900 font-bold hover:text-gray-600 transition uppercase tracking-wide">
                Saúde Mental
              </Link>
              <Link href="/burocracia" className="text-sm text-gray-900 font-bold hover:text-gray-600 transition uppercase tracking-wide">
                Burocracia
              </Link>
              <Link href="/historias" className="text-sm text-gray-900 font-bold hover:text-gray-600 transition uppercase tracking-wide">
                Histórias Reais
              </Link>
            </nav>

            {/* Right Search (absolute on mobile, right on desktop) */}
            <button className="absolute right-0 md:absolute md:right-0 text-gray-700 hover:text-black transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
