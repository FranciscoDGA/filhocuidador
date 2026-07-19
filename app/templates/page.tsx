import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Templates para Download",
  description: "Templates gratuitos para cuidadores de idosos. Diário de sintomas, plano de alimentação, plano de contingência, plano de autocuidado e modelo de procuração.",
};

const templates = [
  {
    title: "Diário de Sintomas",
    description: "Registro diário para acompanhar a evolução do paciente. Anote sintomas, humor, medicamentos e observações.",
    icon: "📋",
    phase: "Fase 1",
    href: "/templates/diario-sintomas.html",
    format: "HTML (imprimível)",
  },
  {
    title: "Plano de Alimentação",
    description: "Organize as refeições do idoso com segurança. Cardápio semanal, restrições alimentares e controle de hidratação.",
    icon: "🍽️",
    phase: "Fase 2",
    href: "/templates/plano-alimentacao.html",
    format: "HTML (imprimível)",
  },
  {
    title: "Plano de Contingência",
    description: "Plano de ação para situações de crise. O que fazer em emergências, frases úteis e contatos importantes.",
    icon: "🚨",
    phase: "Fase 3",
    href: "/templates/plano-contingencia.html",
    format: "HTML (imprimível)",
  },
  {
    title: "Plano de Autocuidado",
    description: "Cuide de você para continuar cuidando. Checklist diário, atividades semanais e sinais de alerta.",
    icon: "💚",
    phase: "Fase 4",
    href: "/templates/plano-autocuidado.html",
    format: "HTML (imprimível)",
  },
  {
    title: "Modelo de Procuração",
    description: "Modelo simplificado de procuração para representação de idoso. Preencha e imprima.",
    icon: "⚖️",
    phase: "Fase 5",
    href: "/templates/modelo-procuracao.html",
    format: "HTML (imprimível)",
  },
];

export default function TemplatesPage() {
  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-[11px] text-brand-secondary/50">
          <Link href="/" className="hover:text-brand-primary transition">Início</Link>
          <span>/</span>
          <Link href="/metodo" className="hover:text-brand-primary transition">Método</Link>
          <span>/</span>
          <span className="text-brand-primary">Templates</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary/60 mb-4 block">
            Downloads Gratuitos
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-medium text-brand-primary mb-6">
            Templates para Download
          </h1>
          <p className="text-base text-brand-secondary leading-relaxed">
            Templates práticos para organizar os cuidados com o idoso. Imprima e use no dia a dia.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {templates.map((template) => (
            <a
              key={template.title}
              href={template.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-border-base p-6 rounded-[5px] hover:border-brand-accent/40 transition-colors group"
            >
              <div className="text-4xl mb-4">{template.icon}</div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-medium tracking-wider uppercase text-brand-accent">
                  {template.phase}
                </span>
                <span className="text-[10px] text-brand-secondary/40">•</span>
                <span className="text-[10px] text-brand-secondary/40">{template.format}</span>
              </div>
              <h3 className="text-base font-display font-medium text-brand-primary mb-2 group-hover:text-brand-accent transition-colors">
                {template.title}
              </h3>
              <p className="text-xs text-brand-secondary/60 leading-relaxed mb-4">
                {template.description}
              </p>
              <div className="flex items-center gap-2 text-[11px] font-medium text-brand-primary group-hover:text-brand-accent transition-colors">
                <span>Baixar Template</span>
                <span>→</span>
              </div>
            </a>
          ))}
        </div>

        {/* How to Use */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-border-base p-6 lg:p-8 rounded-[5px]">
            <h2 className="text-lg font-display font-medium text-brand-primary mb-4">
              Como Usar os Templates
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-brand-accent/10 flex items-center justify-center text-brand-accent text-xs font-medium shrink-0 rounded-full">1</span>
                <div>
                  <h3 className="text-sm font-medium text-brand-primary mb-1">Clique no Template</h3>
                  <p className="text-xs text-brand-secondary/60">Abra o template em uma nova aba.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-brand-accent/10 flex items-center justify-center text-brand-accent text-xs font-medium shrink-0 rounded-full">2</span>
                <div>
                  <h3 className="text-sm font-medium text-brand-primary mb-1">Preencha os Dados</h3>
                  <p className="text-xs text-brand-secondary/60">Preencha as informações diretamente no navegador.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-brand-accent/10 flex items-center justify-center text-brand-accent text-xs font-medium shrink-0 rounded-full">3</span>
                <div>
                  <h3 className="text-sm font-medium text-brand-primary mb-1">Imprima ou Salve como PDF</h3>
                  <p className="text-xs text-brand-secondary/60">Clique no botão "Imprimir / Salvar PDF" no final da página.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="mt-12 text-center">
          <Link href="/metodo" className="text-sm text-brand-secondary hover:text-brand-primary transition-colors">
            ← Voltar ao Método
          </Link>
        </div>
      </div>
    </main>
  );
}
