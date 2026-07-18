"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Diagnóstico", href: "/categorias/entendendo-a-doenca" },
  { label: "Cuidados Diários", href: "/categorias/cuidados-praticos" },
  { label: "Desafios", href: "/categorias/familia" },
  { label: "Saúde do Cuidador", href: "/categorias/saude-emocional" },
  { label: "Recursos", href: "/ferramentas" },
];

const secondaryItems = [
  { label: "Diários", href: "/diarios" },
  { label: "Pergunte", href: "/pergunte-ao-especialista" },
  { label: "Kits", href: "/kits" },
  { label: "Vídeos", href: "/videos" },
  { label: "Depoimentos", href: "/depoimentos" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg-base/80 backdrop-blur-xl border-b border-border-base/50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="font-display font-semibold text-base lg:text-lg tracking-tight text-brand-primary">
                Filho Cuidador
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="text-brand-secondary hover:text-brand-primary text-[11px] font-medium tracking-wide uppercase transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <span className="text-border-base">|</span>
            {secondaryItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="text-brand-secondary/60 hover:text-brand-primary text-[11px] font-medium tracking-wide uppercase transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link 
              href="/artigos" 
              className="text-[11px] font-medium tracking-wide uppercase text-brand-primary border border-brand-primary/20 hover:bg-brand-primary hover:text-white px-5 py-2 transition-all duration-300"
            >
              Artigos
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-brand-primary"
            >
              <span className="sr-only">Abrir menu</span>
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border-base py-4">
            <nav className="flex flex-col space-y-1">
              <p className="text-[10px] font-medium tracking-wider uppercase text-brand-secondary/40 mb-2 mt-2">Jornada</p>
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  onClick={() => setMobileOpen(false)}
                  className="text-brand-secondary hover:text-brand-primary text-sm font-medium transition-colors py-2"
                >
                  {item.label}
                </Link>
              ))}
              <p className="text-[10px] font-medium tracking-wider uppercase text-brand-secondary/40 mb-2 mt-4">Mais</p>
              {secondaryItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  onClick={() => setMobileOpen(false)}
                  className="text-brand-secondary/70 hover:text-brand-primary text-sm font-medium transition-colors py-2"
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="/artigos" 
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-brand-primary border border-brand-primary/20 hover:bg-brand-primary hover:text-white px-5 py-2.5 transition-all duration-300 text-center mt-4"
              >
                Todos os Artigos
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
