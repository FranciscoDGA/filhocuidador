"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";

const navItems = [
  { label: "Diagnóstico", href: "/categorias/entendendo-a-doenca" },
  { label: "Cuidados Diários", href: "/categorias/cuidados-praticos" },
  { label: "Desafios", href: "/categorias/familia" },
  { label: "Saúde do Cuidador", href: "/categorias/saude-emocional" },
];

const recursosItems = [
  { label: "Artigos", href: "/artigos", desc: "Todo o conteúdo" },
  { label: "Diários de Cuidadores", href: "/diarios", desc: "Histórias reais" },
  { label: "Pergunte ao Especialista", href: "/pergunte-ao-especialista", desc: "Tire suas dúvidas" },
  { label: "Kits de Emergência", href: "/kits", desc: "Guias para baixar" },
  { label: "Ferramentas", href: "/ferramentas", desc: "Quiz, checklists, calculadoras" },
  { label: "Vídeos", href: "/videos", desc: "Dicas em vídeo" },
  { label: "Depoimentos", href: "/depoimentos", desc: "O que dizem sobre nós" },
  { label: "Comunidade", href: "/comunidade", desc: "Grupo e newsletter" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

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
          <nav className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="text-brand-secondary hover:text-brand-primary text-[11px] font-medium tracking-wide uppercase transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Recursos Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-brand-secondary hover:text-brand-primary text-[11px] font-medium tracking-wide uppercase transition-colors"
              >
                Recursos
                <ChevronDown className={`w-3 h-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <div 
                  className="absolute top-full right-0 w-72 bg-white border border-border-base shadow-lg py-2 mt-0"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {recursosItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-5 py-2.5 hover:bg-brand-primary/[0.03] transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span className="text-sm text-brand-primary block">{item.label}</span>
                      <span className="text-[10px] text-brand-secondary/50">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link 
              href="/contato" 
              className="text-[11px] font-medium tracking-wide uppercase text-brand-secondary/60 hover:text-brand-primary transition-colors"
            >
              Contato
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
              <p className="text-[10px] font-medium tracking-wider uppercase text-brand-secondary/40 mb-2 mt-2">Navegação</p>
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
              <p className="text-[10px] font-medium tracking-wider uppercase text-brand-secondary/40 mb-2 mt-4">Recursos</p>
              {recursosItems.map((item) => (
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
                href="/contato" 
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-brand-primary border border-brand-primary/20 hover:bg-brand-primary hover:text-white px-5 py-2.5 transition-all duration-300 text-center mt-4"
              >
                Contato
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
