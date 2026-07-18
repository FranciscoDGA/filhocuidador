"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", data: { email } }),
      });
      const json = await res.json();
      if (json.error) throw new Error(json.error);
      setSubmitted(true);
      setEmail("");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Erro desconhecido";
      alert("Erro: " + msg);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <p className="text-xs mt-4 text-white/50">
        Obrigado! Verifique seu email para confirmar.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Seu email"
        className="w-full sm:flex-1 px-5 py-3 bg-transparent border border-white/15 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-white/40 transition-colors rounded-[5px]"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto px-8 py-3 bg-white text-brand-primary text-sm font-medium hover:bg-white/90 transition-colors disabled:opacity-50 rounded-[5px]"
      >
        {loading ? "..." : "Inscrever-se"}
      </button>
    </form>
  );
}
