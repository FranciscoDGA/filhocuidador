"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";

const navItems = [
  { label: "Método", href: "/metodo" },
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
    <header className="sticky top-0 z-50 bg-bg-card/90 backdrop-blur-xl border-b border-border-base/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-[72px]">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-10 w-auto group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/images/logo.png" 
                  alt="Filhos Cuidadores - Portal de Acolhimento"
                  className="h-10 w-auto"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="text-brand-secondary hover:text-brand-primary hover:bg-brand-primary/5 text-[11px] font-medium tracking-wide uppercase px-3 py-2 rounded-md transition-all"
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
                className="flex items-center gap-1 text-brand-secondary hover:text-brand-primary hover:bg-brand-primary/5 text-[11px] font-medium tracking-wide uppercase px-3 py-2 rounded-md transition-all"
              >
                Recursos
                <ChevronDown className={`w-3 h-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <div 
                  className="absolute top-full right-0 w-80 bg-bg-card border border-border-base shadow-lg py-2 mt-1 rounded-lg"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="px-4 py-2 border-b border-border-light mb-1">
                    <span className="text-[10px] font-medium tracking-wider uppercase text-brand-secondary/40">Recursos</span>
                  </div>
                  {recursosItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 hover:bg-brand-accent/5 transition-colors rounded-md mx-1"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span className="text-sm text-brand-primary block font-medium">{item.label}</span>
                      <span className="text-[10px] text-brand-secondary/50">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link 
              href="/contato" 
              className="text-[11px] font-medium tracking-wide uppercase text-brand-secondary/60 hover:text-brand-primary transition-colors"
            >
              Contato
            </Link>
            <Link 
              href="/artigos" 
              className="text-[11px] font-medium tracking-wide uppercase bg-brand-primary text-white hover:bg-brand-primary/90 px-5 py-2 rounded-md transition-all"
            >
              Artigos
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-brand-primary p-2"
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
              <p className="text-[10px] font-medium tracking-wider uppercase text-brand-secondary/40 mb-2 mt-2 px-3">Navegação</p>
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  onClick={() => setMobileOpen(false)}
                  className="text-brand-secondary hover:text-brand-primary hover:bg-brand-primary/5 text-sm font-medium transition-all py-2.5 px-3 rounded-md"
                >
                  {item.label}
                </Link>
              ))}
              <p className="text-[10px] font-medium tracking-wider uppercase text-brand-secondary/40 mb-2 mt-4 px-3">Recursos</p>
              {recursosItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  onClick={() => setMobileOpen(false)}
                  className="text-brand-secondary/70 hover:text-brand-primary text-sm font-medium transition-all py-2.5 px-3 rounded-md"
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-border-base mt-4 pt-4 px-3 space-y-2">
                <Link 
                  href="/contato" 
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-brand-secondary text-center py-2.5"
                >
                  Contato
                </Link>
                <Link 
                  href="/artigos" 
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-brand-primary bg-brand-primary text-white text-center py-2.5 rounded-md"
                >
                  Artigos
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
