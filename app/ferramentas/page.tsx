import Link from "next/link";
import type { Metadata } from "next";
import { FileText, Calculator, CheckSquare, HelpCircle, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Ferramentas para Cuidadores",
  description: "Quizzes, checklists, calculadoras e templates práticos para filhos que cuidam de pais com demência.",
};

const tools = [
  {
    title: "Você Está com Burnout?",
    description: "Quiz interativo para identificar sinais de esgotamento emocional no cuidador.",
    icon: <HelpCircle className="w-6 h-6" />,
    href: "/ferramentas/quiz-burnout",
    type: "Quiz",
    free: true,
  },
  {
    title: "Checklist: Primeiras 24h",
    description: "O que fazer nas primeiras 24h após o diagnóstico de demência no familiar.",
    icon: <CheckSquare className="w-6 h-6" />,
    href: "/ferramentas/checklist-diagnostico",
    type: "Checklist",
    free: true,
  },
  {
    title: "Plano de Cuidados Diário",
    description: "Template editável para organizar a rotina de cuidados do idoso.",
    icon: <FileText className="w-6 h-6" />,
    href: "/templates",
    type: "Template",
    free: false,
  },
  {
    title: "Calculadora de Custos",
    description: "Estime quanto custa cuidar de um idoso com Alzheimer por mês.",
    icon: <Calculator className="w-6 h-6" />,
    href: "/ferramentas/calculadora-custos",
    type: "Calculadora",
    free: true,
  },
  {
    title: "Kit: Agressividade",
    description: "10 técnicas práticas + lista de contatos de emergência para episódios de agressividade.",
    icon: <Download className="w-6 h-6" />,
    href: "/artigos/como-lidar-pai-alzheimer-agressivo",
    type: "Kit",
    free: false,
  },
  {
    title: "Checklist: Casa Segura",
    description: "Como adaptar sua casa para um idoso com demência — cômodo por cômodo.",
    icon: <CheckSquare className="w-6 h-6" />,
    href: "/artigos/seguranca-lar-idosos-guia-completo",
    type: "Checklist",
    free: true,
  },
];

export default function FerramentasPage() {
  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-[11px] text-brand-secondary/50">
          <Link href="/" className="hover:text-brand-primary transition">Início</Link>
          <span>/</span>
          <span className="text-brand-primary">Ferramentas</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary/60 mb-4 block">
            Recursos Práticos
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-brand-primary mb-6 leading-tight">
            Ferramentas para Cuidadores
          </h1>
          <p className="text-base text-brand-secondary leading-relaxed">
            Quizzes, checklists, calculadoras e templates para facilitar o dia a dia de quem cuida. Ferramentas práticas, sem enrolação.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link key={tool.title} href={tool.href}>
              <div className="group bg-white border border-border-base p-6 h-full hover:border-brand-primary/20 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 border border-border-base flex items-center justify-center text-brand-secondary group-hover:text-brand-primary transition-colors">
                    {tool.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-medium tracking-wider uppercase text-brand-secondary/40">
                      {tool.type}
                    </span>
                    {tool.free && (
                      <span className="text-[10px] font-medium tracking-wider uppercase text-green-600 bg-green-50 px-2 py-0.5">
                        Grátis
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="text-sm font-display font-medium text-brand-primary mb-2">
                  {tool.title}
                </h3>
                <p className="text-xs text-brand-secondary/60 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 lg:mt-16 bg-white border border-border-base p-8 text-center">
          <h3 className="text-lg font-display font-medium text-brand-primary mb-3">
            Precisa de algo específico?
          </h3>
          <p className="text-sm text-brand-secondary mb-6 max-w-xl mx-auto">
            Estamos sempre criando novas ferramentas. Sugira o que seria útil para você.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center text-[13px] font-medium tracking-wide uppercase text-brand-primary border-b border-brand-primary/20 hover:border-brand-primary/60 pb-1 transition-colors"
          >
            Sugira uma ferramenta
          </Link>
        </div>
      </div>
    </main>
  );
}
