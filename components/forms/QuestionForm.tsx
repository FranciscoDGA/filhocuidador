"use client";

import { useState } from "react";

export default function QuestionForm() {
  const [formData, setFormData] = useState({ name: "", email: "", question: "", category: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "question", data: formData }),
      });
      const json = await res.json();
      if (json.error) throw new Error(json.error);
      setSubmitted(true);
      setFormData({ name: "", email: "", question: "", category: "" });
    } catch {
      alert("Erro ao enviar. Tente novamente.");
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
          Pergunta enviada!
        </h3>
        <p className="text-xs text-brand-secondary/60 mb-4">
          Responderemos em até 48 horas por email.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-[11px] font-medium tracking-wide uppercase text-brand-primary border-b border-brand-primary/20 hover:border-brand-primary/60 pb-0.5 transition-colors"
        >
          Enviar outra pergunta
        </button>
      </div>
    );
  }

  return (
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
          <label className="text-[11px] font-medium text-brand-secondary/60 block mb-1.5">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 border border-border-base text-sm text-brand-primary focus:outline-none focus:border-brand-primary/30 transition-colors"
            required
          />
        </div>
      </div>
      <div>
        <label className="text-[11px] font-medium text-brand-secondary/60 block mb-1.5">Categoria</label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="w-full px-4 py-2.5 border border-border-base text-sm text-brand-primary focus:outline-none focus:border-brand-primary/30 transition-colors bg-white"
        >
          <option value="">Selecione</option>
          <option value="Medicação">Medicação</option>
          <option value="Comportamento">Comportamento</option>
          <option value="Jurídico">Jurídico</option>
          <option value="Emocional">Emocional</option>
          <option value="Segurança">Segurança</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Outro">Outro</option>
        </select>
      </div>
      <div>
        <label className="text-[11px] font-medium text-brand-secondary/60 block mb-1.5">Sua Pergunta</label>
        <textarea
          value={formData.question}
          onChange={(e) => setFormData({ ...formData, question: e.target.value })}
          rows={5}
          className="w-full px-4 py-2.5 border border-border-base text-sm text-brand-primary focus:outline-none focus:border-brand-primary/30 transition-colors resize-none"
          required
        />
      </div>
      <button
        type="submit"
        className="px-8 py-3 bg-brand-primary text-white text-[13px] font-medium tracking-wide uppercase hover:bg-brand-primary/90 transition-colors"
      >
        Enviar Pergunta
      </button>
    </form>
  );
}
