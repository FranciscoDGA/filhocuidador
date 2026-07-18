"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckSquare, Square } from "lucide-react";

const sections = [
  {
    title: "Diagnóstico e Documentos",
    items: [
      "Obter laudo médico com diagnóstico confirmado",
      "Solicitaratestado de necessidade de dependência",
      "Reunir exames anteriores e laudos",
      "Organizar documentos de identidade do idoso",
      "Verificar situação do CPF e certidões",
    ],
  },
  {
    title: "Financeiro e Jurídico",
    items: [
      "Verificar direito a BPC/LOAS",
      "Avaliar necessidade de procuração",
      "Consultar advogado sobre interdição/curatela",
      "Verificar aposentadoria e benefícios",
      "Organizar contas e despesas mensais",
    ],
  },
  {
    title: "Saúde e Cuidados",
    items: [
      "Agendar consulta com geriatra/neurologista",
      "Listar todos os medicamentos em uso",
      " Criar rotina de medicação organizada",
      "Avaliar necessidade de cuidador profissional",
      "Instalar barras de apoio no banheiro",
    ],
  },
  {
    title: "Casa e Segurança",
    items: [
      "Retirar tapetes soltos do chão",
      "Instalar iluminação de emergência",
      "Trancar armárias com produtos perigosos",
      "Colocar travas nas janelas",
      "Manter telefone de emergência acessível",
    ],
  },
  {
    title: "Rede de Apoio",
    items: [
      "Informar vizinhos e portaria",
      "Trocar contatos com outros cuidadores",
      "Pesquisar grupos de apoio na região",
      "Definir quem ajuda em emergências",
      "Conversar abertamente com a família",
    ],
  },
];

export default function ChecklistDiagnostico() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const totalItems = sections.reduce((acc, s) => acc + s.items.length, 0);
  const checkedCount = Object.values(checked).filter(Boolean).length;
  const progress = totalItems > 0 ? (checkedCount / totalItems) * 100 : 0;

  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6">
        <div className="mb-8 flex items-center gap-2 text-[11px] text-brand-secondary/50">
          <Link href="/" className="hover:text-brand-primary transition">Início</Link>
          <span>/</span>
          <Link href="/ferramentas" className="hover:text-brand-primary transition">Ferramentas</Link>
          <span>/</span>
          <span className="text-brand-primary">Checklist Diagnóstico</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-display font-medium text-brand-primary mb-3">
          Checklist: Primeiras 24h
        </h1>
        <p className="text-sm text-brand-secondary mb-8">
          O que fazer nas primeiras 24h após o diagnóstico de demência no familiar. Marque cada item conforme completa.
        </p>

        {/* Progress */}
        <div className="bg-white border border-border-base p-5 mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-brand-secondary/60">
              {checkedCount} de {totalItems} itens concluídos
            </span>
            <span className="text-xs font-medium text-brand-primary">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full h-2 bg-border-base overflow-hidden">
            <div
              className="h-full bg-brand-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.title} className="bg-white border border-border-base p-6">
              <h2 className="text-sm font-display font-medium text-brand-primary mb-4">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.items.map((item, i) => {
                  const key = `${section.title}-${i}`;
                  const isChecked = checked[key] || false;
                  return (
                    <button
                      key={key}
                      onClick={() => toggle(key)}
                      className="flex items-start gap-3 text-left w-full group"
                    >
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                      ) : (
                        <Square className="w-4 h-4 text-brand-secondary/30 shrink-0 mt-0.5 group-hover:text-brand-secondary/50 transition-colors" />
                      )}
                      <span className={`text-sm transition-colors ${isChecked ? "text-brand-secondary/40 line-through" : "text-brand-secondary"}`}>
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {checkedCount === totalItems && (
          <div className="mt-8 bg-green-50 border border-green-200 p-6 text-center">
            <p className="text-sm font-medium text-green-800 mb-2">
              Parabéns! Você completou todo o checklist.
            </p>
            <p className="text-xs text-green-700">
              Você deu os primeiros passos. Continue organizando e buscando apoio.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
