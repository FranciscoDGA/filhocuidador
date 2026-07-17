import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-xs text-gray-600 border-b border-gray-100">
          <span>Apoiando cuidadores informais no Brasil</span>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Buscar..."
              className="px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:border-brand-primary"
            />
            <Link href="#newsletter" className="text-gray-600 hover:text-brand-primary font-medium">
              Inscrever
            </Link>
          </div>
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-gray-900">Filho Cuidador</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm text-gray-700 hover:text-brand-primary font-medium transition">
              Início
            </Link>
            <Link href="/artigos" className="text-sm text-gray-700 hover:text-brand-primary font-medium transition">
              Artigos
            </Link>
            <Link href="/saude-emocional" className="text-sm text-gray-700 hover:text-brand-primary font-medium transition">
              Saúde Emocional
            </Link>
            <Link href="/cuidados-praticos" className="text-sm text-gray-700 hover:text-brand-primary font-medium transition">
              Cuidados Práticos
            </Link>
            <Link href="/orientacao-juridica" className="text-sm text-gray-700 hover:text-brand-primary font-medium transition">
              Jurídico
            </Link>
            <Link href="/sobre" className="text-sm text-gray-700 hover:text-brand-primary font-medium transition">
              Sobre
            </Link>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            <a href="#" className="w-5 h-5 rounded-full bg-gray-300 hover:bg-gray-400 transition flex-shrink-0"></a>
            <a href="#" className="w-5 h-5 rounded-full bg-gray-300 hover:bg-gray-400 transition flex-shrink-0"></a>
            <a href="#" className="w-5 h-5 rounded-full bg-gray-300 hover:bg-gray-400 transition flex-shrink-0"></a>
            <a href="#" className="w-5 h-5 rounded-full bg-gray-300 hover:bg-gray-400 transition flex-shrink-0"></a>
            <a href="#" className="w-5 h-5 rounded-full bg-gray-300 hover:bg-gray-400 transition flex-shrink-0"></a>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
