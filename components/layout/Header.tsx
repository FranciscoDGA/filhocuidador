"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { CloseIcon, MenuIcon, MoonIcon, SearchIcon, SunIcon } from "@/components/ui/Icons";
import type { SearchIndexItem } from "@/lib/articles";
import type { CategoryDefinition } from "@/lib/categories";
import { MAIN_NAV_LINKS, SITE_INFO } from "@/lib/site";

interface HeaderProps {
  searchIndex?: SearchIndexItem[];
  categories?: CategoryDefinition[];
}

const THEME_STORAGE_KEY = "filho-cuidador-theme";
const THEME_EVENT = "filho-cuidador-theme-change";

function subscribeTheme(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }
  window.addEventListener(THEME_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(THEME_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function getThemeSnapshot(): "light" | "dark" {
  if (typeof document === "undefined") {
    return "light";
  }
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function getThemeServerSnapshot(): "light" | "dark" {
  return "light";
}

function normalizeSearch(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export default function Header({ searchIndex = [], categories = [] }: HeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getThemeServerSnapshot
  );

  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!searchOpen) {
      return;
    }
    const timer = window.setTimeout(() => {
      searchInputRef.current?.focus();
    }, 30);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.style.colorScheme = nextTheme;
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Ignore storage failures in restricted contexts
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  const searchResults = useMemo(() => {
    const normalizedQuery = normalizeSearch(query);
    if (!normalizedQuery) {
      return [];
    }

    return searchIndex
      .filter((item) => {
        const haystack = normalizeSearch(
          `${item.title} ${item.excerpt} ${item.categoryTitle} ${item.keywords.join(" ")}`
        );
        return haystack.includes(normalizedQuery);
      })
      .slice(0, 8);
  }, [query, searchIndex]);

  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-surface-page/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-lg sm:text-xl font-bold tracking-tight text-ink-strong shrink-0 min-h-[44px] inline-flex items-center"
        >
          {SITE_INFO.name}
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-6 text-sm"
        >
          {MAIN_NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink-muted hover:text-ink-strong font-medium transition-colors py-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              setSearchOpen((prev) => !prev);
            }}
            aria-label={searchOpen ? "Fechar busca" : "Buscar artigos publicados"}
            aria-expanded={searchOpen}
            aria-controls="painel-busca-portal"
            className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-lg text-ink-muted hover:text-ink-strong hover:bg-surface-subtle transition-colors"
          >
            {searchOpen ? (
              <CloseIcon className="w-5 h-5" aria-hidden="true" />
            ) : (
              <SearchIcon className="w-5 h-5" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              isDark ? "Ativar tema claro" : "Ativar tema escuro"
            }
            aria-pressed={isDark}
            className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-lg text-ink-muted hover:text-ink-strong hover:bg-surface-subtle transition-colors"
          >
            {isDark ? (
              <SunIcon className="w-5 h-5" aria-hidden="true" />
            ) : (
              <MoonIcon className="w-5 h-5" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              setSearchOpen(false);
              setMobileMenuOpen((prev) => !prev);
            }}
            aria-label={
              mobileMenuOpen
                ? "Fechar menu de navegação"
                : "Abrir menu de navegação"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="menu-navegacao-mobile"
            className="md:hidden min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-lg text-ink-muted hover:text-ink-strong hover:bg-surface-subtle transition-colors"
          >
            {mobileMenuOpen ? (
              <CloseIcon className="w-5 h-5" aria-hidden="true" />
            ) : (
              <MenuIcon className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div
          id="painel-busca-portal"
          role="region"
          aria-label="Busca de artigos"
          className="border-t border-border-subtle bg-surface-card shadow-lg"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <label htmlFor="campo-busca-header" className="sr-only">
                  Buscar entre artigos publicados
                </label>
                <SearchIcon
                  className="w-4 h-4 text-ink-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  id="campo-busca-header"
                  ref={searchInputRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Digite um tema (ex: Alzheimer, BPC, quedas, burnout, sono)..."
                  className="w-full min-h-[44px] pl-10 pr-4 py-2.5 rounded-lg border border-border-strong bg-surface-page text-sm text-ink-strong placeholder:text-ink-muted"
                />
              </div>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="min-h-[44px] px-4 py-2 rounded-lg border border-border-subtle text-sm font-medium text-ink-muted hover:text-ink-strong"
              >
                Fechar
              </button>
            </div>

            {query.trim().length > 0 && (
              <div className="mt-4" aria-live="polite">
                {searchResults.length > 0 ? (
                  <div>
                    <p className="text-xs font-semibold text-ink-muted mb-3">
                      {searchResults.length}{" "}
                      {searchResults.length === 1
                        ? "resultado encontrado"
                        : "resultados encontrados"}
                    </p>
                    <ul className="divide-y divide-border-subtle border border-border-subtle rounded-lg bg-surface-page">
                      {searchResults.map((result) => (
                        <li key={result.slug}>
                          <Link
                            href={`/artigos/${result.slug}`}
                            onClick={() => setSearchOpen(false)}
                            className="block p-3.5 hover:bg-surface-subtle transition-colors"
                          >
                            <div className="flex items-center justify-between gap-2 text-xs text-ink-muted mb-1">
                              <span className="font-semibold uppercase tracking-wider">
                                {result.categoryTitle}
                              </span>
                              <span>{result.readTime} min</span>
                            </div>
                            <p className="font-serif text-base font-bold text-ink-strong">
                              {result.title}
                            </p>
                            <p className="text-xs text-ink-muted line-clamp-1 mt-0.5">
                              {result.excerpt}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="text-sm text-ink-muted py-3">
                    Nenhum artigo publicado encontrado para “{query}”. Tente outra
                    palavra-chave ou{" "}
                    <Link
                      href="/artigos"
                      onClick={() => setSearchOpen(false)}
                      className="underline font-semibold text-ink-strong"
                    >
                      veja todos os artigos
                    </Link>
                    .
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {mobileMenuOpen && (
        <nav
          id="menu-navegacao-mobile"
          aria-label="Navegação mobile"
          className="md:hidden border-t border-border-subtle bg-surface-card"
        >
          <div className="px-4 py-4 space-y-4">
            <ul className="space-y-1">
              {MAIN_NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center min-h-[44px] px-3 rounded-lg text-sm font-semibold text-ink-strong hover:bg-surface-subtle"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="border-t border-border-subtle pt-4">
              <p className="px-3 text-xs font-bold uppercase tracking-wider text-ink-muted mb-2">
                Categorias
              </p>
              <ul className="space-y-1">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/${cat.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center min-h-[44px] px-3 rounded-lg text-sm text-ink-body hover:text-ink-strong hover:bg-surface-subtle"
                    >
                      {cat.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
