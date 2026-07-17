"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrar com backend/Supabase
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="newsletter" className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-blue-50/50 to-green-50/30"></div>
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-gradient-to-br from-brand-primary/10 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-dark mb-4">
            Receba apoio
            <span className="block bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              toda semana
            </span>
          </h2>

          <p className="font-body text-lg text-text-light font-medium">
            Dicas práticas e um lembrete de que você não está sozinho.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-3.5 rounded-full bg-white border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary text-text-dark placeholder:text-text-light text-sm transition-all shadow-lg shadow-blue-500/10"
          />
          <button
            type="submit"
            className="px-8 py-3.5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-full font-bold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 whitespace-nowrap text-sm"
          >
            Inscrever
          </button>
        </form>

        {submitted && (
          <p className="text-center mt-6 text-brand-primary font-bold text-sm animate-pulse">
            ✓ Obrigado! Verifique seu email para confirmar.
          </p>
        )}

        <p className="text-xs text-text-light text-center mt-8 font-medium">
          Sem spam. Apenas conteúdo relevante e acolhimento.
        </p>
      </div>
    </section>
  );
}
