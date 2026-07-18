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
    <section id="newsletter" className="w-full py-28 px-4 sm:px-6 lg:px-8 bg-[#7A9E7E] text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
          Receba apoio toda semana no seu email
        </h2>
        <p className="text-base sm:text-lg text-white/90 font-body mb-10">
          Dicas práticas, orientações e um lembrete de que você também importa.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-4 bg-white text-text-base placeholder:text-text-base/50 rounded-full focus:outline-none focus:ring-4 focus:ring-white/20 transition-shadow"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-text-base hover:bg-black text-white font-semibold rounded-full transition-colors whitespace-nowrap"
          >
            Quero receber
          </button>
        </form>

        {submitted && (
          <p className="font-semibold text-sm mt-4 bg-white/20 inline-block px-4 py-2 rounded-full">
            ✓ Obrigado! Verifique seu email para confirmar.
          </p>
        )}
      </div>
    </section>
  );
}
