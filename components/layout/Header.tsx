"use client";

import Link from "next/link";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const navItems = [
  { label: "Método", href: "/metodo" },
  { label: "Artigos", href: "/artigos" },
  { label: "Especialistas", href: "/especialistas" },
  { label: "Comunidade", href: "/comunidade" },
];

const categoriasItems = [
  { label: "Entendendo a Doença", href: "/categorias/entendendo-a-doenca" },
  { label: "Cuidados Práticos", href: "/categorias/cuidados-praticos" },
  { label: "Saúde do Cuidador", href: "/categorias/saude-emocional" },
  { label: "Questões Jurídicas", href: "/categorias/juridico" },
  { label: "Família e Conflitos", href: "/categorias/familia" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/artigos?q=${encodeURIComponent(searchQuery.trim())}`;
      setSearchOpen(false);
      setSearchQuery("");
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-base/40">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative w-9 h-9 lg:w-10 lg:h-10 group-hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#8c6a4a'}} />
                    <stop offset="100%" style={{stopColor:'#c9a96e'}} />
                  </linearGradient>
                </defs>
                <path d="M50 15 C25 15 15 35 15 55 C15 75 30 90 50 90 C70 90 85 75 85 55 C85 35 75 15 50 15 Z" fill="url(#logoGrad)" opacity="0.9"/>
                <path d="M30 55 L50 30 L70 55 Z" fill="#fafaf8" opacity="0.95"/>
                <rect x="35" y="50" width="30" height="25" fill="#fafaf8" opacity="0.95"/>
                <rect x="44" y="55" width="12" height="10" fill="url(#logoGrad)" opacity="0.8"/>
                <circle cx="42" cy="48" r="4" fill="#3d3225"/>
                <circle cx="50" cy="45" r="5" fill="#3d3225"/>
                <circle cx="58" cy="48" r="4" fill="#3d3225"/>
                <ellipse cx="75" cy="35" rx="8" ry="4" transform="rotate(-30 75 35)" fill="url(#logoGrad)" opacity="0.7"/>
                <ellipse cx="80" cy="28" rx="6" ry="3" transform="rotate(-45 80 28)" fill="url(#logoGrad)" opacity="0.5"/>
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-[15px] tracking-tight text-brand-primary block leading-tight">
                Filhos <span className="text-brand-accent">Cuidadores</span>
              </span>
              <span className="text-[8px] text-brand-secondary/40 tracking-[0.15em] uppercase font-medium">
                Portal de Acolhimento
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="text-brand-secondary hover:text-brand-primary text-[12px] font-medium tracking-wide px-3 py-2 transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Categorias Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-brand-secondary hover:text-brand-primary text-[12px] font-medium tracking-wide px-3 py-2 transition-colors"
              >
                Categorias
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <div 
                  className="absolute top-full left-0 w-64 bg-white border border-border-base shadow-lg py-2 mt-0 rounded-lg"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {categoriasItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-[13px] text-brand-secondary hover:text-brand-primary hover:bg-brand-primary/5 transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-9 h-9 flex items-center justify-center text-brand-secondary/60 hover:text-brand-primary hover:bg-brand-primary/5 rounded-full transition-colors"
              aria-label="Buscar"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Search Bar (expandable) */}
            {searchOpen && (
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar artigos..."
                  className="w-56 pl-9 pr-3 py-2 bg-gray-50 border border-border-base text-[13px] text-brand-primary placeholder:text-brand-secondary/40 focus:outline-none focus:ring-1 focus:ring-brand-primary/20 focus:border-brand-primary/30 transition-all rounded-full"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brand-secondary/40" />
              </form>
            )}

            {/* Divider */}
            <div className="w-px h-5 bg-border-base mx-1" />

            {/* CTA Button */}
            <Link 
              href="/contato" 
              className="text-[12px] font-medium tracking-wide text-brand-secondary/60 hover:text-brand-primary px-3 py-2 transition-colors"
            >
              Contato
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-9 h-9 flex items-center justify-center text-brand-secondary/60"
              aria-label="Buscar"
            >
              <Search className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-brand-primary p-2"
            >
              <span className="sr-only">Abrir menu</span>
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="lg:hidden pb-4 border-t border-border-base pt-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar artigos..."
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-border-base text-[13px] text-brand-primary placeholder:text-brand-secondary/40 focus:outline-none focus:ring-1 focus:ring-brand-primary/20 focus:border-brand-primary/30 rounded-[5px]"
                autoFocus
              />
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-secondary/40" />
            </form>
          </div>
        )}

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
              <p className="text-[10px] font-medium tracking-wider uppercase text-brand-secondary/40 mb-2 mt-4 px-3">Categorias</p>
              {categoriasItems.map((item) => (
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
                  Ver Artigos
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
