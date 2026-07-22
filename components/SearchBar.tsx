"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SearchResult {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Search when typing (min 3 chars)
  useEffect(() => {
    if (query.length < 3) {
      setResults([]);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(true);
      fetch(`/api/search?q=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(data => {
          setResults(data.results || []);
          setIsOpen(true);
        })
        .catch(() => setResults([]))
        .finally(() => setLoading(false));
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/artigos?q=${encodeURIComponent(query.trim())}`);
      setIsOpen(false);
      setQuery("");
    }
  }

  function handleSelect(slug: string) {
    router.push(`/artigos/${slug}`);
    setIsOpen(false);
    setQuery("");
  }

  return (
    <div ref={containerRef} className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 3 && setIsOpen(true)}
          placeholder="Buscar artigos..."
          className="w-full pl-9 pr-4 py-2 bg-transparent border border-border-base text-sm text-brand-primary placeholder:text-brand-secondary/40 focus:outline-none focus:border-brand-primary/30 transition-colors rounded-[5px]"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-secondary/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        {loading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="w-4 h-4 border-2 border-brand-primary/30 border-t-brand-primary rounded-full animate-spin" />
          </div>
        )}
      </form>

      {/* Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-border-base rounded-[5px] shadow-lg max-h-80 overflow-y-auto z-50">
          {results.map((result) => (
            <button
              key={result.slug}
              onClick={() => handleSelect(result.slug)}
              className="w-full text-left px-4 py-3 hover:bg-brand-primary/5 transition-colors border-b border-border-base last:border-0"
            >
              <div className="flex items-start gap-3">
                <span className="text-[10px] font-medium tracking-wide uppercase text-brand-primary/60 bg-brand-primary/10 px-2 py-0.5 rounded shrink-0">
                  {result.category}
                </span>
                <div className="min-w-0">
                  <h4 className="text-sm font-medium text-brand-primary truncate">{result.title}</h4>
                  <p className="text-xs text-brand-secondary/60 truncate mt-0.5">{result.excerpt}</p>
                </div>
              </div>
            </button>
          ))}
          <button
            onClick={handleSubmit}
            className="w-full text-center px-4 py-3 text-xs font-medium text-brand-primary hover:bg-brand-primary/5 transition-colors"
          >
            Ver todos os resultados para &quot;{query}&quot;
          </button>
        </div>
      )}

      {isOpen && query.length >= 3 && results.length === 0 && !loading && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-border-base rounded-[5px] shadow-lg p-4 text-center">
          <p className="text-sm text-brand-secondary/60">Nenhum resultado encontrado</p>
        </div>
      )}
    </div>
  );
}
