"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="newsletter" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Receba apoio toda semana
        </h2>
        <p className="text-gray-300 mb-8">
          Dicas práticas e um lembrete de que você não está sozinho.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-brand-primary text-white font-bold hover:bg-blue-700 transition whitespace-nowrap"
          >
            Inscrever
          </button>
        </form>

        {submitted && (
          <p className="text-brand-primary font-bold text-sm">
            ✓ Obrigado! Verifique seu email para confirmar.
          </p>
        )}

        <p className="text-xs text-gray-500 mt-4">
          Sem spam. Apenas conteúdo relevante e acolhimento.
        </p>
      </div>
    </section>
  );
}
