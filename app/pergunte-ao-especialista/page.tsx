"use client";

import { useState } from "react";
import Link from "next/link";

const faqData = [
  {
    q: "Minha mãe não quer tomar remédio. O que faço?",
    a: "Essa é uma das dúvidas mais comuns. Primeiro, verifique se o medicamento pode ser diluído em alimento ou líquido. converse com o médico sobre alternativas (spray, injetável). Nunca force — isso pode gerar trauma. Tente criar uma rotina: sempre no mesmo horário, com algo que ela goste.",
    specialist: "Dra. Patricia Tura — Neurologista",
    category: "Medicação",
  },
  {
    q: "Meu pai fica agressivo à noite. É normal?",
    a: "Sim, é muito comum. Chama-se 'sundowning' — a confusão mental piora ao final do dia. Mantenha a casa bem iluminada, evite estimulação à noite, e crie uma rotina de sono relaxante. Se a agressividade persistir, converse com o neurologista sobre ajuste de medicação.",
    specialist: "Dra. Renata Menezes — Psicóloga",
    category: "Comportamento",
  },
  {
    q: "Preciso de procuração para cuidar do meu pai. Como faço?",
    a: "A procuração deve ser feita em cartório, com o idoso presente e lúcido. Se ele não tem mais lucidez, será necessário um processo de curatela judicial. Consulte um advogado especializado em Direito do Idoso. Não adie — é mais fácil fazer enquanto o idoso ainda tem lucidez.",
    specialist: "Dr. Fernando Amato — Advogado",
    category: "Jurídico",
  },
  {
    q: "Estou me sentindo culpado por ter raiva do idoso. Isso é normal?",
    a: "Completamente normal. Raiva não significa que você não ama. Significa que você está sobrecarregado. Cuidador que não admite raiva está reprimindo emoções que podem explodir depois. Busque um psicólogo. Groupos de apoio também ajudam muito.",
    specialist: "Dra. Renata Menezes — Psicóloga",
    category: "Emocional",
  },
  {
    q: "Meu idoso se perde em casa. Como tornar o ambiente seguro?",
    a: "Instale fechaduras que ele não consiga abrir, retire tapetes soltos, coloque barras de apoio no banheiro, use travas em armárias com produtos perigosos, e considere um monitor de movimento. Também é importante manter itens pessoais sempre no mesmo lugar.",
    specialist: "Equipe Filho Cuidador",
    category: "Segurança",
  },
];

export default function PergunteEspecialistaPage() {
  const [formData, setFormData] = useState({ name: "", email: "", question: "", category: "" });
  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const categories = ["Todas", ...Array.from(new Set(faqData.map((f) => f.category)))];

  const filtered = selectedCategory === "Todas"
    ? faqData
    : faqData.filter((f) => f.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", question: "", category: "" });
  };

  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="mb-8 flex items-center gap-2 text-[11px] text-brand-secondary/50">
          <Link href="/" className="hover:text-brand-primary transition">Início</Link>
          <span>/</span>
          <span className="text-brand-primary">Pergunte ao Especialista</span>
        </div>

        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary/60 mb-4 block">
            Tire Suas Dúvidas
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-brand-primary mb-6 leading-tight">
            Pergunte ao Especialista
          </h1>
          <p className="text-base text-brand-secondary leading-relaxed">
            Envie sua dúvida e nossos especialistas respondem. Veja também as perguntas mais frequentes de outros cuidadores.
          </p>
        </div>

        {/* Formulário */}
        <div className="bg-white border border-border-base p-6 lg:p-8 mb-12">
          <h2 className="text-lg font-display font-medium text-brand-primary mb-6">
            Envie Sua Pergunta
          </h2>

          {submitted ? (
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
          ) : (
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
          )}
        </div>

        {/* Perguntas frequentes */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-display font-medium text-brand-primary">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[11px] font-medium tracking-wide uppercase px-4 py-2 border transition-colors ${
                  selectedCategory === cat
                    ? "bg-brand-primary text-white border-brand-primary"
                    : "border-border-base text-brand-secondary hover:border-brand-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map((item, i) => (
              <div key={i} className="bg-white border border-border-base p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[10px] font-medium tracking-wider uppercase text-brand-accent bg-brand-accent/10 px-2 py-1 shrink-0">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-sm font-display font-medium text-brand-primary mb-3">
                  {item.q}
                </h3>
                <p className="text-xs text-brand-secondary/60 leading-relaxed mb-3">
                  {item.a}
                </p>
                <p className="text-[10px] text-brand-secondary/40 italic">
                  — {item.specialist}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
