import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificado de Cuidador Especializado",
  description: "Complete as 5 fases do Método Filho Cuidador e receba seu certificado digital de Cuidador Especializado.",
};

const requirements = [
  {
    phase: "01",
    title: "Diagnóstico e Aceitação",
    completed: true,
  },
  {
    phase: "02",
    title: "Cuidados Diários",
    completed: true,
  },
  {
    phase: "03",
    title: "Desafios Comportamentais",
    completed: true,
  },
  {
    phase: "04",
    title: "Saúde do Cuidador",
    completed: true,
  },
  {
    phase: "05",
    title: "Aspectos Jurídicos e Financeiros",
    completed: true,
  },
];

const benefits = [
  {
    icon: "🎓",
    title: "Reconhecimento",
    description: "Comprove sua dedicação e conhecimento no cuidado de idosos.",
  },
  {
    icon: "📄",
    title: "Certificado Digital",
    description: "Receba um certificado em PDF pronto para imprimir e enramar.",
  },
  {
    icon: "✅",
    title: "100% Gratuito",
    description: "Não há custo para completar o método e receber o certificado.",
  },
  {
    icon: "🌐",
    title: "Online",
    description: "Complete no seu ritmo, de qualquer lugar do Brasil.",
  },
];

export default function CertificadoPage() {
  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-[11px] text-brand-secondary/50">
          <Link href="/" className="hover:text-brand-primary transition">Início</Link>
          <span>/</span>
          <Link href="/metodo" className="hover:text-brand-primary transition">Método</Link>
          <span>/</span>
          <span className="text-brand-primary">Certificado</span>
        </div>

        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-6xl mb-6">🎓</div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-brand-primary mb-6">
            Certificado de Cuidador Especializado
          </h1>
          <p className="text-base text-brand-secondary leading-relaxed">
            Complete as 5 fases do Método Filho Cuidador e receba seu certificado digital que comprova sua dedicação e conhecimento.
          </p>
        </div>

        {/* Certificate Preview */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white border border-border-base p-8 lg:p-12 rounded-[5px]">
            <div className="border-2 border-dashed border-brand-accent/30 p-8 lg:p-12 text-center rounded-[5px]">
              <div className="text-[10px] tracking-[0.3em] uppercase text-brand-secondary/40 mb-4">
                Filho Cuidador
              </div>
              <div className="text-3xl lg:text-4xl font-display font-medium text-brand-primary mb-4">
                Certificado de Cuidador Especializado
              </div>
              <div className="w-24 h-[1px] bg-brand-accent mx-auto mb-4" />
              <div className="text-sm text-brand-secondary mb-2">
                Concedido a
              </div>
              <div className="text-2xl font-display font-medium text-brand-primary mb-6 border-b border-brand-accent/30 pb-2 inline-block px-8">
                Nome do Cuidador
              </div>
              <div className="text-xs text-brand-secondary/60 leading-relaxed max-w-lg mx-auto mb-6">
                Por ter completado com sucesso as 5 fases do Método Filho Cuidador, demonstrando conhecimento e dedicação no cuidado de idosos com Alzheimer, Parkinson, AVC e demências.
              </div>
              <div className="flex items-center justify-center gap-8 text-xs text-brand-secondary/40">
                <div>
                  <div className="font-display text-brand-primary">Pr. Francisco G. Alves</div>
                  <div>Diretor Editorial</div>
                </div>
                <div>
                  <div className="font-display text-brand-primary">Filho Cuidador</div>
                  <div>2026</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-xl lg:text-2xl font-display font-medium text-brand-primary mb-8 text-center">
            Requisitos para o Certificado
          </h2>
          <p className="text-sm text-brand-secondary text-center mb-8">
            Complete todas as 5 fases do método para receber seu certificado. Cada fase inclui leitura dos guias e conclusão das ferramentas.
          </p>

          <div className="space-y-4">
            {requirements.map((req) => (
              <div key={req.phase} className="bg-white border border-border-base p-5 rounded-[5px]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-accent/10 flex items-center justify-center text-brand-accent font-display font-medium shrink-0 rounded-[5px]">
                    {req.phase}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm font-display font-medium text-brand-primary">
                      {req.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-brand-secondary/40">Completo</span>
                    <div className="w-6 h-6 bg-green-500 flex items-center justify-center rounded-full">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-xl lg:text-2xl font-display font-medium text-brand-primary mb-8 text-center">
            Benefícios do Certificado
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white border border-border-base p-6 rounded-[5px]">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-sm font-display font-medium text-brand-primary mb-1">
                  {benefit.title}
                </h3>
                <p className="text-xs text-brand-secondary/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-brand-primary/[0.03] border border-border-base p-8 lg:p-12 rounded-[5px]">
            <h2 className="text-xl lg:text-2xl font-display font-medium text-brand-primary mb-4">
              Comece Agora
            </h2>
            <p className="text-sm text-brand-secondary mb-6">
              Comece pela Fase 1 e avance no seu próprio ritmo. Quando completar as 5 fases, seu certificado estará pronto.
            </p>
            <Link
              href="/metodo/fase-1"
              className="inline-block px-8 py-3 bg-brand-primary text-white text-[13px] font-medium tracking-wide uppercase hover:bg-brand-primary/90 transition-colors rounded-[5px]"
            >
              Começar Fase 1
            </Link>
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
