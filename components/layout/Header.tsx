"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import SearchBar from "@/components/SearchBar";

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
              <div className="relative w-10 h-10 group-hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#8c6a4a'}} />
                      <stop offset="100%" style={{stopColor:'#c9a96e'}} />
                    </linearGradient>
                  </defs>
                  {/* Hand shape */}
                  <path d="M50 15 C25 15 15 35 15 55 C15 75 30 90 50 90 C70 90 85 75 85 55 C85 35 75 15 50 15 Z" fill="url(#logoGrad)" opacity="0.9"/>
                  {/* House roof */}
                  <path d="M30 55 L50 30 L70 55 Z" fill="#fafaf8" opacity="0.95"/>
                  {/* House body */}
                  <rect x="35" y="50" width="30" height="25" fill="#fafaf8" opacity="0.95"/>
                  {/* Window */}
                  <rect x="44" y="55" width="12" height="10" fill="url(#logoGrad)" opacity="0.8"/>
                  {/* Family silhouette */}
                  <circle cx="42" cy="48" r="4" fill="#3d3225"/>
                  <circle cx="50" cy="45" r="5" fill="#3d3225"/>
                  <circle cx="58" cy="48" r="4" fill="#3d3225"/>
                  {/* Leaves */}
                  <ellipse cx="75" cy="35" rx="8" ry="4" transform="rotate(-30 75 35)" fill="url(#logoGrad)" opacity="0.7"/>
                  <ellipse cx="80" cy="28" rx="6" ry="3" transform="rotate(-45 80 28)" fill="url(#logoGrad)" opacity="0.5"/>
                </svg>
              </div>
              <div className="hidden sm:block">
                <span className="font-display font-bold text-[15px] tracking-tight text-brand-primary block leading-tight">
                  Filhos <span className="text-brand-accent">Cuidadores</span>
                </span>
                <span className="text-[9px] text-brand-secondary/40 tracking-[0.2em] uppercase font-medium">
                  Portal de Acolhimento
                </span>
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
            <div className="w-48">
              <SearchBar />
            </div>
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
              {/* Mobile Search */}
              <div className="px-3 mb-4">
                <SearchBar />
              </div>
              
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
