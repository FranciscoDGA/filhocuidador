"use client";

import { useState } from "react";
import Link from "next/link";

const items = [
  { label: "Fraldas geriátricas", price: 280, unit: "mês", note: "Pack c/ 14 unidades, ~2/mês" },
  { label: "Remédios (complemento)", price: 500, unit: "mês", note: "Varia conforme medicação" },
  { label: "Cuidador diurno (12h)", price: 3200, unit: "mês", note: "CLT, inclusive encargos" },
  { label: "Cuidador noturno (12h)", price: 3500, unit: "mês", note: "CLT + adicional noturno" },
  { label: "Enfermeiro (plantão)", price: 250, unit: "plantão", note: "Técnico de enfermagem" },
  { label: "Fisioterapia", price: 200, unit: "sessão", note: "Duração ~50min" },
  { label: "Transporte adaptado", price: 500, unit: "mês", note: "Van adaptada ou Uber Health" },
  { label: "Alimentação especial", price: 400, unit: "mês", note: "Dieta hipercalórica, disfagia" },
  { label: "Cama hospitalar (aluguel)", price: 450, unit: "mês", note: "Elétrica com colchão antiescaras" },
  { label: "Adequação do lar", price: 2500, unit: "único", note: "Barras, rampas, banheiro adaptado" },
];

export default function CalculadoraCustos() {
  const [selected, setSelected] = useState<Record<number, { qty: number; enabled: boolean }>>({});

  const toggle = (index: number) => {
    setSelected((prev) => ({
      ...prev,
      [index]: {
        qty: prev[index]?.qty || 1,
        enabled: !prev[index]?.enabled,
      },
    }));
  };

  const setQty = (index: number, qty: number) => {
    setSelected((prev) => ({
      ...prev,
      [index]: { ...prev[index], qty: Math.max(1, qty) },
    }));
  };

  const total = items.reduce((acc, item, i) => {
    const s = selected[i];
    if (s?.enabled) return acc + item.price * s.qty;
    return acc;
  }, 0);

  const monthlyTotal = items.reduce((acc, item, i) => {
    const s = selected[i];
    if (!s?.enabled) return acc;
    if (item.unit === "único") return acc;
    return acc + item.price * s.qty;
  }, 0);

  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6">
        <div className="mb-8 flex items-center gap-2 text-[11px] text-brand-secondary/50">
          <Link href="/" className="hover:text-brand-primary transition">Início</Link>
          <span>/</span>
          <Link href="/ferramentas" className="hover:text-brand-primary transition">Ferramentas</Link>
          <span>/</span>
          <span className="text-brand-primary">Calculadora de Custos</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-display font-medium text-brand-primary mb-3">
          Calculadora de Custos
        </h1>
        <p className="text-sm text-brand-secondary mb-10">
          Estime quanto custa cuidar de um idoso com demência por mês. Marque os itens necessários.
        </p>

        <div className="space-y-3 mb-10">
          {items.map((item, i) => {
            const s = selected[i];
            const isEnabled = s?.enabled || false;
            return (
              <div
                key={item.label}
                className={`bg-white border p-5 transition-colors ${isEnabled ? "border-brand-primary/20" : "border-border-base"}`}
              >
                <div className="flex items-center justify-between">
                  <button onClick={() => toggle(i)} className="flex items-center gap-3 text-left flex-1">
                    <div className={`w-5 h-5 border flex items-center justify-center transition-colors ${isEnabled ? "bg-brand-primary border-brand-primary" : "border-brand-secondary/30"}`}>
                      {isEnabled && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm text-brand-primary">{item.label}</span>
                  </button>
                  <div className="flex items-center gap-3">
                    {isEnabled && (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setQty(i, (s?.qty || 1) - 1)}
                          className="w-7 h-7 border border-border-base flex items-center justify-center text-brand-secondary hover:border-brand-primary/30 transition-colors text-sm rounded-[5px]"
                        >
                          -
                        </button>
                        <span className="text-sm text-brand-primary w-6 text-center font-medium">
                          {s?.qty || 1}
                        </span>
                        <button
                          onClick={() => setQty(i, (s?.qty || 1) + 1)}
                          className="w-7 h-7 border border-border-base flex items-center justify-center text-brand-secondary hover:border-brand-primary/30 transition-colors text-sm rounded-[5px]"
                        >
                          +
                        </button>
                      </div>
                    )}
                    <span className="text-sm text-brand-secondary/60 w-24 text-right">
                      R$ {(item.price * (isEnabled ? s?.qty || 1 : 0)).toLocaleString("pt-BR")}
                      <span className="text-[10px]">/{item.unit}</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="bg-brand-primary text-white p-6 lg:p-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-white/60">Total Mensal Estimado</span>
            <span className="text-2xl font-display font-medium">
              R$ {monthlyTotal.toLocaleString("pt-BR")}
            </span>
          </div>
          <p className="text-xs text-white/40">
            * Valores estimados. Custos reais variam por região e necessidade.
          </p>
        </div>

        <div className="mt-8 bg-white border border-border-base p-6">
          <h3 className="text-sm font-display font-medium text-brand-primary mb-2">
            Precisa de ajuda com custos?
          </h3>
          <p className="text-xs text-brand-secondary/60 leading-relaxed mb-4">
            Existem benefícios governamentais que podem ajudar: BPC/LOAS, auxílio-doença, isenção de imposto de renda para idosos.
          </p>
          <Link
            href="/categorias/questoes-juridicas"
            className="inline-flex items-center text-[11px] font-medium tracking-wide uppercase text-brand-primary border-b border-brand-primary/20 hover:border-brand-primary/60 pb-0.5 transition-colors"
          >
            Ver artigos jurídicos
          </Link>
        </div>

        <p className="text-[10px] text-brand-secondary/40 mt-6 leading-relaxed">
          * Valores de referência para 2026, com base em tabelas de mercado (CuidadosConecta, RepousoCuidador, Cronoshare).
          Custos reais variam por região, grau de dependência e regime de contratação.
        </p>
      </div>
    </main>
  );
}
