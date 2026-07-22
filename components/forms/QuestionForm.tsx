"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "5511999999999"; // Substitua pelo seu número

export default function QuestionForm() {
  const [formData, setFormData] = useState({ name: "", email: "", question: "", category: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Monta a mensagem para WhatsApp
    const categoryText = formData.category ? `Categoria: ${formData.category}` : "";
    const message = `Olá! Tenho uma pergunta sobre cuidados com idosos.

*Nome:* ${formData.name}
*Email:* ${formData.email}
${categoryText ? `*${categoryText}*` : ""}

*Pergunta:*
${formData.question}`;

    // URL do WhatsApp com a mensagem codificada
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    // Abre o WhatsApp em nova aba
    window.open(whatsappUrl, "_blank");

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-[5px] p-4 mb-4">
        <p className="text-xs text-blue-700">
          <strong>Como funciona:</strong> Preencha sua pergunta abaixo e clique em "Enviar". Você será redirecionado(a) para o WhatsApp com sua pergunta pronta para enviar. Assim responds mais rápido!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-[11px] font-medium text-brand-secondary/60 block mb-1.5">Nome</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2.5 border border-border-base text-sm text-brand-primary focus:outline-none focus:border-brand-primary/30 transition-colors rounded-[5px]"
            required
          />
        </div>
        <div>
          <label className="text-[11px] font-medium text-brand-secondary/60 block mb-1.5">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 border border-border-base text-sm text-brand-primary focus:outline-none focus:border-brand-primary/30 transition-colors rounded-[5px]"
            required
          />
        </div>
      </div>
      <div>
        <label className="text-[11px] font-medium text-brand-secondary/60 block mb-1.5">Categoria</label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="w-full px-4 py-2.5 border border-border-base text-sm text-brand-primary focus:outline-none focus:border-brand-primary/30 transition-colors bg-white rounded-[5px]"
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
          className="w-full px-4 py-2.5 border border-border-base text-sm text-brand-primary focus:outline-none focus:border-brand-primary/30 transition-colors resize-none rounded-[5px]"
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto px-8 py-3 bg-green-600 text-white text-[13px] font-medium tracking-wide uppercase hover:bg-green-700 transition-colors rounded-[5px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        {loading ? "Abrindo WhatsApp..." : "Enviar pelo WhatsApp"}
      </button>
    </form>
  );
}
