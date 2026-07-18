import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg-base/95 backdrop-blur-sm shadow-sm border-b border-border-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo Area */}
          <Link href="/" className="flex flex-col">
            <span className="text-3xl font-display font-bold text-brand-primary tracking-tight leading-none">
              Filho Cuidador
            </span>
            <span className="text-xs font-body font-medium text-brand-accent mt-1 tracking-wide">
              Você não está sozinho nessa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link href="/" className="text-sm font-medium text-text-base hover:text-brand-primary transition-colors">
              Início
            </Link>
            <Link href="/saude-emocional" className="text-sm font-medium text-text-base hover:text-brand-primary transition-colors">
              Saúde Emocional
            </Link>
            <Link href="/cuidados-praticos" className="text-sm font-medium text-text-base hover:text-brand-primary transition-colors">
              Cuidados Práticos
            </Link>
            <Link href="/orientacao-juridica" className="text-sm font-medium text-text-base hover:text-brand-primary transition-colors">
              Orientação Jurídica
            </Link>
            <Link href="/sobre" className="text-sm font-medium text-text-base hover:text-brand-primary transition-colors">
              Sobre
            </Link>
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link 
              href="#newsletter" 
              className="hidden sm:inline-flex px-5 py-2.5 bg-brand-primary hover:bg-brand-primary/90 text-white text-sm font-semibold rounded-full shadow-sm transition-all"
            >
              Receber apoio
            </Link>
            <button className="lg:hidden p-2 text-text-base hover:text-brand-primary transition-colors">
              <Menu size={24} />
            </button>
          </div>
          
        </div>
      </div>
    </header>
  );
}
