import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg-base/80 backdrop-blur-xl border-b border-border-base/50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="flex items-center gap-3">
              <span className="font-display font-semibold text-lg tracking-tight text-brand-primary">
                Filho Cuidador
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-brand-secondary hover:text-brand-primary text-[13px] font-medium tracking-wide uppercase transition-colors">
              Início
            </Link>
            <Link href="/saude-emocional" className="text-brand-secondary hover:text-brand-primary text-[13px] font-medium tracking-wide uppercase transition-colors">
              Saúde Emocional
            </Link>
            <Link href="/cuidados-praticos" className="text-brand-secondary hover:text-brand-primary text-[13px] font-medium tracking-wide uppercase transition-colors">
              Cuidados
            </Link>
            <Link href="/sobre" className="text-brand-secondary hover:text-brand-primary text-[13px] font-medium tracking-wide uppercase transition-colors">
              Sobre
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/login" className="text-brand-secondary hover:text-brand-primary text-[13px] font-medium tracking-wide uppercase transition-colors">
              Entrar
            </Link>
            <Link href="/comunidade" className="text-[13px] font-medium tracking-wide uppercase text-brand-primary border border-brand-primary/20 hover:bg-brand-primary hover:text-white px-5 py-2 transition-all duration-300">
              Comunidade
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button className="text-brand-primary">
              <span className="sr-only">Abrir menu</span>
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
