import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col gap-0.5">
          <span className="text-lg font-display text-text-dark tracking-tight font-semibold">
            Filho Cuidador
          </span>
          <span className="text-xs text-text-dark/50 font-body leading-tight">
            Você não está sozinho
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-12">
          <li>
            <Link
              href="/"
              className="text-sm text-text-dark/70 hover:text-text-dark transition duration-300 font-medium"
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              href="/saude-emocional"
              className="text-sm text-text-dark/70 hover:text-text-dark transition duration-300 font-medium"
            >
              Saúde Emocional
            </Link>
          </li>
          <li>
            <Link
              href="/cuidados-praticos"
              className="text-sm text-text-dark/70 hover:text-text-dark transition duration-300 font-medium"
            >
              Cuidados Práticos
            </Link>
          </li>
          <li>
            <Link
              href="/orientacao-juridica"
              className="text-sm text-text-dark/70 hover:text-text-dark transition duration-300 font-medium"
            >
              Jurídico
            </Link>
          </li>
          <li>
            <Link
              href="/sobre"
              className="text-sm text-text-dark/70 hover:text-text-dark transition duration-300 font-medium"
            >
              Sobre
            </Link>
          </li>
        </ul>

        {/* CTA Button - Desktop */}
        <Link href="#newsletter" className="hidden lg:inline-block px-5 py-2.5 bg-text-dark text-white rounded-full text-xs font-semibold hover:bg-text-dark/90 transition duration-300">
          Newsletter
        </Link>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 text-text-dark hover:bg-gray-50 rounded-lg transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
