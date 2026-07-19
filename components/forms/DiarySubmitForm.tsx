"use client";

import { useState } from "react";

export default function DiarySubmitForm() {
  const [formData, setFormData] = useState({ name: "", city: "", age: 0, story: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "diary", data: formData }),
      });
      const json = await res.json();
      if (json.error) throw new Error(json.error);
      setSubmitted(true);
      setFormData({ name: "", city: "", age: 0, story: "", email: "" });
    } catch {
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-12 h-12 bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-sm font-display font-medium text-brand-primary mb-2">
          História enviada!
        </h3>
        <p className="text-xs text-brand-secondary/60 mb-4">
          Obrigado por compartilhar. Publicaremos após revisão.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-[11px] font-medium tracking-wide uppercase text-brand-primary border-b border-brand-primary/20 hover:border-brand-primary/60 pb-0.5 transition-colors"
        >
          Enviar outra história
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
        <div>
          <label className="text-[11px] font-medium text-brand-secondary/60 block mb-1.5">Idade</label>
          <input
            type="number"
            value={formData.age || ""}
            onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) || 0 })}
            className="w-full px-4 py-2.5 border border-border-base text-sm text-brand-primary focus:outline-none focus:border-brand-primary/30 transition-colors"
            required
          />
        </div>
      </div>
      <div>
        <label className="text-[11px] font-medium text-brand-secondary/60 block mb-1.5">Email (não será publicado)</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2.5 border border-border-base text-sm text-brand-primary focus:outline-none focus:border-brand-primary/30 transition-colors"
          required
        />
      </div>
      <div>
        <label className="text-[11px] font-medium text-brand-secondary/60 block mb-1.5">Sua História</label>
        <textarea
          value={formData.story}
          onChange={(e) => setFormData({ ...formData, story: e.target.value })}
          rows={6}
          className="w-full px-4 py-2.5 border border-border-base text-sm text-brand-primary focus:outline-none focus:border-brand-primary/30 transition-colors resize-none"
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="px-8 py-3 bg-brand-primary text-white text-[13px] font-medium tracking-wide uppercase hover:bg-brand-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Enviando..." : "Enviar Minha História"}
      </button>
    </form>
  );
}
