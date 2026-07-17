import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-border-light shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-lg sm:text-xl font-bold font-display text-brand-primary tracking-tight">
            Filho Cuidador
          </span>
          <span className="text-xs text-brand-secondary font-body">
            Você não está sozinho nessa
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">
          <li>
            <Link
              href="/inicio"
              className="text-sm font-medium text-text-dark hover:text-brand-primary transition duration-200"
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              href="/saude-emocional"
              className="text-sm font-medium text-text-dark hover:text-brand-primary transition duration-200"
            >
              Saúde Emocional
            </Link>
          </li>
          <li>
            <Link
              href="/cuidados-praticos"
              className="text-sm font-medium text-text-dark hover:text-brand-primary transition duration-200"
            >
              Cuidados Práticos
            </Link>
          </li>
          <li>
            <Link
              href="/orientacao-juridica"
              className="text-sm font-medium text-text-dark hover:text-brand-primary transition duration-200"
            >
              Orientação Jurídica
            </Link>
          </li>
          <li>
            <Link
              href="/sobre"
              className="text-sm font-medium text-text-dark hover:text-brand-primary transition duration-200"
            >
              Sobre
            </Link>
          </li>
        </ul>

        {/* CTA Button - Desktop */}
        <button className="hidden md:inline-block px-6 py-2 bg-brand-accent text-white rounded-lg text-sm font-medium hover:opacity-90 transition">
          Receber Apoio
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-text-dark hover:bg-border-light rounded transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
