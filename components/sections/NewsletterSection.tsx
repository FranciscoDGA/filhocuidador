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
    <section id="newsletter" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
          Newsletter
        </h2>
        <p className="text-gray-500 font-serif text-sm mb-6">
          Receba dicas práticas e um lembrete de que você não está sozinho toda semana.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col mb-4">
          <label htmlFor="email" className="text-sm font-bold text-gray-900 mb-2">Email address</label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              id="email"
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-black text-white font-bold text-sm hover:bg-gray-800 transition uppercase tracking-widest whitespace-nowrap"
            >
              Sign Up
            </button>
          </div>
        </form>

        {submitted && (
          <p className="text-green-600 font-bold text-sm">
            ✓ Obrigado! Verifique seu email.
          </p>
        )}
      </div>
    </section>
  );
}
