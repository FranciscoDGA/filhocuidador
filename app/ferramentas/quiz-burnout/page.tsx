"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  { q: "Você se sente exausto(a) mesmo depois de dormir?", a: ["Nunca", "Às vezes", "Frequentemente", "Sempre"] },
  { q: "Sente que não consegue mais lidar com as situações do dia a dia?", a: ["Nunca", "Às vezes", "Frequentemente", "Sempre"] },
  { q: "Perdeu o interesse por atividades que antes gostava?", a: ["Nunca", "Às vezes", "Frequentemente", "Sempre"] },
  { q: "Sente irritação constante com o(ido) cuidado(a)?", a: ["Nunca", "Às vezes", "Frequentemente", "Sempre"] },
  { q: "Tem dificuldade para dormir ou dorme demais?", a: ["Nunca", "Às vezes", "Frequentemente", "Sempre"] },
  { q: "Sente culpa por não estar fazendo o suficiente?", a: ["Nunca", "Às vezes", "Frequentemente", "Sempre"] },
  { q: "Isolou-se de amigos e familiares?", a: ["Nunca", "Às vezes", "Frequentemente", "Sempre"] },
  { q: "Sente que sua saúde está piorando?", a: ["Nunca", "Às vezes", "Frequentemente", "Sempre"] },
  { q: "Chora sem motivo aparente?", a: ["Nunca", "Às vezes", "Frequentemente", "Sempre"] },
  { q: "Pensa em desistir do cuidado?", a: ["Nunca", "Às vezes", "Frequentemente", "Sempre"] },
];

const results = [
  { range: [0, 10], label: "Baixo Risco", color: "text-green-700 bg-green-50", msg: "Você parece estar lidando bem. Continue cuidando de si mesmo(a) e busque apoio preventivo." },
  { range: [11, 20], label: "Risco Moderado", color: "text-yellow-700 bg-yellow-50", msg: "Alguns sinais de esgotamento. Considere buscar apoio profissional e compartilhar responsabilidades." },
  { range: [21, 30], label: "Risco Alto", color: "text-orange-700 bg-orange-50", msg: "Muitos sinais de burnout. Procure ajuda profissional urgentemente. Você não precisa carregar isso sozinho(a)." },
  { range: [31, 40], label: "Risco Muito Alto", color: "text-red-700 bg-red-50", msg: "Esgotamento severo detectado. Procure um psicólogo ou médico imediatamente. Ligue 188 (CVV) se precisar conversar." },
];

export default function QuizBurnout() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const total = answers.reduce((a, b) => a + b, 0);
  const result = results.find((r) => total >= r.range[0] && total <= r.range[1]) || results[0];

  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6">
        <div className="mb-8 flex items-center gap-2 text-[11px] text-brand-secondary/50">
          <Link href="/" className="hover:text-brand-primary transition">Início</Link>
          <span>/</span>
          <Link href="/ferramentas" className="hover:text-brand-primary transition">Ferramentas</Link>
          <span>/</span>
          <span className="text-brand-primary">Quiz Burnout</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-display font-medium text-brand-primary mb-3">
          Você Está com Burnout?
        </h1>
        <p className="text-sm text-brand-secondary mb-10">
          Responda 10 perguntas rápidas e descubra seu nível de esgotamento emocional.
        </p>

        {!finished ? (
          <div className="bg-white border border-border-base p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[11px] text-brand-secondary/40">
                Pergunta {current + 1} de {questions.length}
              </span>
              <div className="w-32 h-1 bg-border-base overflow-hidden">
                <div
                  className="h-full bg-brand-primary transition-all duration-500"
                  style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <h2 className="text-lg font-display font-medium text-brand-primary mb-6">
              {questions[current].q}
            </h2>

            <div className="space-y-3">
              {questions[current].a.map((answer, i) => (
                <button
                  key={answer}
                  onClick={() => handleAnswer(i)}
                  className="w-full text-left px-5 py-3 border border-border-base hover:border-brand-primary/30 text-sm text-brand-secondary hover:text-brand-primary transition-colors rounded-[5px]"
                >
                  {answer}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white border border-border-base p-6 lg:p-8 text-center">
            <div className={`inline-block px-4 py-2 text-sm font-medium mb-4 ${result.color}`}>
              {result.label}
            </div>
            <p className="text-2xl font-display font-medium text-brand-primary mb-2">
              {total} / 30 pontos
            </p>
            <p className="text-sm text-brand-secondary leading-relaxed mb-8 max-w-md mx-auto">
              {result.msg}
            </p>

            <div className="border-t border-border-base pt-6 space-y-3">
              <Link
                href="/categorias/saude-emocional"
                className="block w-full px-6 py-3 bg-brand-primary text-white text-[13px] font-medium tracking-wide uppercase hover:bg-brand-primary/90 transition-colors"
              >
                Ler Artigos sobre Saúde do Cuidador
              </Link>
              <button
                onClick={() => { setCurrent(0); setAnswers([]); setFinished(false); }}
                className="block w-full px-6 py-3 border border-border-base text-brand-secondary text-[13px] font-medium tracking-wide uppercase hover:border-brand-primary/30 transition-colors rounded-[5px]"
              >
                Refazer Quiz
              </button>
            </div>
          </div>
        )}

        <p className="text-[10px] text-brand-secondary/40 mt-6 text-center">
          Este quiz é informativo e não substitui avaliação profissional.
        </p>
      </div>
    </main>
  );
}
