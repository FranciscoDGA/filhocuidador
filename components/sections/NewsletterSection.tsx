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
    <section id="newsletter" className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-light text-text-dark mb-4">
            Receba apoio
            <span className="block font-semibold">toda semana</span>
          </h2>

          <p className="font-body text-lg text-text-dark/70">
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
            className="flex-1 px-4 py-3.5 rounded-full bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-text-dark text-text-dark placeholder:text-text-dark/40 text-sm transition-all"
          />
          <button
            type="submit"
            className="px-7 py-3.5 bg-text-dark text-white rounded-full font-semibold hover:bg-text-dark/90 transition duration-300 whitespace-nowrap text-sm"
          >
            Inscrever
          </button>
        </form>

        {submitted && (
          <p className="text-center mt-6 text-text-dark/70 font-medium text-sm">
            ✓ Obrigado! Verifique seu email para confirmar.
          </p>
        )}

        <p className="text-xs text-text-dark/50 text-center mt-8">
          Sem spam. Apenas conteúdo relevante e acolhimento.
        </p>
      </div>
    </section>
  );
}
