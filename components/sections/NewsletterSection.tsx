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
    <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-brand-secondary/5">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg border border-border-light p-8 sm:p-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-dark mb-4 text-center">
            Receba apoio toda semana
          </h2>

          <p className="font-body text-lg text-text-dark/70 text-center mb-8">
            Dicas práticas, orientações e um lembrete de que você também importa.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg bg-cream border border-border-light focus:outline-none focus:ring-2 focus:ring-brand-primary text-text-dark placeholder:text-text-dark/40"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-brand-primary text-white rounded-lg font-medium hover:opacity-90 transition duration-200 whitespace-nowrap"
            >
              Quero receber
            </button>
          </form>

          {submitted && (
            <p className="text-center mt-4 text-brand-secondary font-medium">
              ✓ Obrigado! Verifique seu email para confirmar a inscrição.
            </p>
          )}

          <p className="text-xs text-text-dark/50 text-center mt-6">
            Sem spam. Apenas orientação e acolhimento.
          </p>
        </div>
      </div>
    </section>
  );
}
