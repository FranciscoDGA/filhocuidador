import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-white via-white to-blue-50/50 backdrop-blur-xl border-b border-blue-100/30 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col gap-0.5 group">
          <span className="text-xl font-display bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent font-bold tracking-tight">
            Filho Cuidador
          </span>
          <span className="text-xs text-brand-secondary font-medium leading-tight">
            Você não está sozinho
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-8">
          <li>
            <Link
              href="/"
              className="text-sm text-text-dark/70 hover:text-brand-primary font-medium transition duration-300 relative group"
            >
              Início
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/saude-emocional"
              className="text-sm text-text-dark/70 hover:text-brand-primary font-medium transition duration-300 relative group"
            >
              Saúde Emocional
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/cuidados-praticos"
              className="text-sm text-text-dark/70 hover:text-brand-primary font-medium transition duration-300 relative group"
            >
              Cuidados Práticos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/orientacao-juridica"
              className="text-sm text-text-dark/70 hover:text-brand-primary font-medium transition duration-300 relative group"
            >
              Jurídico
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/sobre"
              className="text-sm text-text-dark/70 hover:text-brand-primary font-medium transition duration-300 relative group"
            >
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
        </ul>

        {/* CTA Button - Desktop */}
        <Link href="#newsletter" className="hidden lg:inline-block px-6 py-2.5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-full text-xs font-bold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition duration-300">
          Newsletter
        </Link>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 text-brand-primary hover:bg-blue-50/50 rounded-lg transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
