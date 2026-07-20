"use client";

import { useState } from "react";
import Link from "next/link";

const testimonials = [
  {
    name: "Fernanda Souza",
    city: "São Paulo, SP",
    text: "Esse site me salvou. Quando minha mãe foi diagnosticada com Alzheimer, eu não sabia nada. Aqui encontrei tudo que precisava. Obrigada por existirem.",
    rating: 5,
  },
  {
    name: "Ricardo Mendes",
    city: "Rio de Janeiro, RJ",
    text: "O quiz de burnout me fez perceber que eu estava no limite. Procurei ajuda a tempo. Sem esse site, provavelmente teria surtado.",
    rating: 5,
  },
  {
    name: "Patricia Lima",
    city: "Belo Horizonte, MG",
    text: "Os kits de emergência são incríveis. Baixei o kit jurídico e descobri que minha mãe tinha direito a BPC. R$ 1.200 por mês que não sabia que existia.",
    rating: 5,
  },
  {
    name: "Marcos Oliveira",
    city: "Curitiba, PR",
    text: "Os diários de cuidadores me fazem sentir que não estou sozinho. Ler histórias de outras pessoas que passam pela mesma coisa é muito reconfortante.",
    rating: 5,
  },
  {
    name: "Ana Beatriz Santos",
    city: "Salvador, BA",
    text: "A seção jurídica me orientou sobre procuração e curatela. Sem isso, eu teria feito tudo errado. Conteúdo de qualidade.",
    rating: 5,
  },
  {
    name: "José Carlos Pereira",
    city: "Porto Alegre, RS",
    text: "Cuido do meu pai há 3 anos. Esse site é meu primeiro acesso quando tenho dúvidas. Confiável, prático e humano.",
    rating: 5,
  },
];

export default function DepoimentosPage() {
  const [formData, setFormData] = useState({ name: "", city: "", text: "", rating: 5 });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "testimonial", data: formData }),
      });
      const json = await res.json();
      if (json.error) throw new Error(json.error);
      setSubmitted(true);
      setFormData({ name: "", city: "", text: "", rating: 5 });
    } catch {
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="mb-8 flex items-center gap-2 text-[11px] text-brand-secondary/50">
          <Link href="/" className="hover:text-brand-primary transition">Início</Link>
          <span>/</span>
          <span className="text-brand-primary">Depoimentos</span>
        </div>

        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary/60 mb-4 block">
            O que dizem sobre nós
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-brand-primary mb-6 leading-tight">
            Depoimentos
          </h1>
          <p className="text-base text-brand-secondary leading-relaxed">
            O que outros cuidadores dizem sobre o Filhos Cuidadores. Histórias reais de quem encontrou ajuda aqui.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-white border border-border-base p-5 text-center">
            <p className="text-2xl font-display font-medium text-brand-primary mb-1">49+</p>
            <p className="text-[10px] text-brand-secondary/40 uppercase tracking-wider">Artigos Publicados</p>
          </div>
          <div className="bg-white border border-border-base p-5 text-center">
            <p className="text-2xl font-display font-medium text-brand-primary mb-1">6</p>
            <p className="text-[10px] text-brand-secondary/40 uppercase tracking-wider">Especialistas</p>
          </div>
          <div className="bg-white border border-border-base p-5 text-center">
            <p className="text-2xl font-display font-medium text-brand-primary mb-1">5.0K+</p>
            <p className="text-[10px] text-brand-secondary/40 uppercase tracking-wider">Leitores</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-border-base p-6">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-brand-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-brand-secondary leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center">
                  <span className="text-[10px] font-medium text-brand-primary">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-brand-primary">{t.name}</p>
                  <p className="text-[10px] text-brand-secondary/40">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Formulário */}
        <div className="bg-white border border-border-base p-6 lg:p-8">
          <h2 className="text-lg font-display font-medium text-brand-primary mb-6">
            Deixe Seu Depoimento
          </h2>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-sm font-display font-medium text-brand-primary mb-2">
                Depoimento enviado!
              </h3>
              <p className="text-xs text-brand-secondary/60 mb-4">
                Obrigado por compartilhar sua experiência.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-[11px] font-medium tracking-wide uppercase text-brand-primary border-b border-brand-primary/20 hover:border-brand-primary/60 pb-0.5 transition-colors"
              >
                Enviar outro depoimento
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-medium text-brand-secondary/60 block mb-1.5">Nome</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 border border-border-base text-sm text-brand-primary focus:outline-none focus:border-brand-primary/30 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-brand-secondary/60 block mb-1.5">Cidade</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-2.5 border border-border-base text-sm text-brand-primary focus:outline-none focus:border-brand-primary/30 transition-colors"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-[11px] font-medium text-brand-secondary/60 block mb-1.5">Nota</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                    >
                      <svg
                        className={`w-6 h-6 transition-colors ${star <= formData.rating ? "text-brand-accent" : "text-brand-secondary/20"}`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-[11px] font-medium text-brand-secondary/60 block mb-1.5">Seu Depoimento</label>
                <textarea
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2.5 border border-border-base text-sm text-brand-primary focus:outline-none focus:border-brand-primary/30 transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-brand-primary text-white text-[13px] font-medium tracking-wide uppercase hover:bg-brand-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Enviando..." : "Enviar Depoimento"}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
