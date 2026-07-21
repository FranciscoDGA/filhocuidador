import Link from "next/link";
import type { Metadata } from "next";
import SpecialistForm from "@/components/forms/SpecialistForm";

export const metadata: Metadata = {
  title: "Seja Especialista",
  description:
    "Junte-se à equipe de especialistas do Filhos Cuidadores. Atenda famílias que cuidam de pais com demência via WhatsApp, e-mail ou videochamada.",
};

const benefits = [
  {
    icon: "👥",
    title: "Pacientes Qualificados",
    description:
      "Mais de 10 mil cuidadores buscam orientação por mês. Seu perfil aparece para quem precisa dos seus serviços.",
  },
  {
    icon: "📰",
    title: "Artigos com Seu Nome",
    description:
      "Publique artigos técnicos no portal. Fortaleça sua autoridade e apareça no Google.",
  },
  {
    icon: "🕐",
    title: "Flexibilidade Total",
    description:
      "Você define seus horários, valores e forma de atendimento. Sem compromisso mínimo.",
  },
  {
    icon: "💰",
    title: "Sem Custos",
    description:
      "Não cobramos nada para você participar. A divulgação é gratuita.",
  },
  {
    icon: "🤝",
    title: "Confiança Prévia",
    description:
      "Pacientes que chegam pelo portal já confiam no conteúdo. Conversion rate muito maior.",
  },
  {
    icon: "📱",
    title: "Múltiplos Canais",
    description:
      "Atenda por WhatsApp, e-mail, Telegram, videochamada — como preferir.",
  },
];

const steps = [
  {
    step: "1",
    title: "Preencha o Formulário",
    description:
      "Informe seus dados, especialidade e como prefere atender.",
  },
  {
    step: "2",
    title: "Análise e Aprovação",
    description:
      "Verificamos seu perfil e credenciais em até 48 horas.",
  },
  {
    step: "3",
    title: "Publicação do Perfil",
    description:
      "Seu perfil aparece na página de especialistas do portal.",
  },
  {
    step: "4",
    title: "Receba Pacientes",
    description:
      "Famílias interessadas entram em contato diretamente com você.",
  },
];

const specialties = [
  {
    name: "Geriatra / Neurologista",
    description:
      "Avaliação clínica, diagnóstico, medicação e acompanhamento de idosos com demências.",
    icon: "🩺",
  },
  {
    name: "Advogado (Direito do Idoso)",
    description:
      "Procuração, curatela, interdição, BPC/LOAS, direitos do idoso e testamento.",
    icon: "⚖️",
  },
  {
    name: "Psicólogo",
    description:
      "Saúde mental do cuidador, burnout, ansiedade, culpa, luto e apoio emocional.",
    icon: "🧠",
  },
  {
    name: "Assistente Social",
    description:
      "Benefícios sociais, encaminhamentos, acesso a serviços e acolhimento institucional.",
    icon: "🤲",
  },
  {
    name: "Fisioterapeuta",
    description:
      "Mobilidade, prevenção de quedas, exercícios para idosos e reabilitação física.",
    icon: "🏃",
  },
  {
    name: "Nutricionista",
    description:
      "Alimentação adequada, disfagia, nutrição do idoso e do cuidador, planos alimentares.",
    icon: "🥗",
  },
  {
    name: "Enfermeiro",
    description:
      "Higiene, medicações, curativos, cuidados paliativos e suporte técnico para cuidadores.",
    icon: "💊",
  },
];

const faq = [
  {
    question: "Preciso pagar para participar?",
    answer:
      "Não. A participação é totalmente gratuita. Não cobramos taxas, mensalidades ou comissões.",
  },
  {
    question: "Como são enviados os pacientes?",
    answer:
      "Famílias que leem nosso conteúdo preenchem o formulário de contato e são direcionadas ao especialista mais adequado. Você recebe o contato por WhatsApp, e-mail ou como preferir.",
  },
  {
    question: "Preciso atender presencialmente?",
    answer:
      "Não necessariamente. Muitos especialistas atendem por videochamada, WhatsApp ou e-mail. Você define a modalidade.",
  },
  {
    question: "Qual o volume mínimo de atendimentos?",
    answer:
      "Não há mínimo. Você pode atender 1 pessoa por mês ou 50. A flexibilidade é total.",
  },
  {
    question: "Como funciona a publicação de artigos?",
    answer:
      "Você envia um artigo técnico (ou nós ajudamos a produzir) e publicamos com seu nome, credenciais e link para seu consultório. Isso gera autoridade e pacientes orgânicos.",
  },
  {
    question: "Posso definir meus valores?",
    answer:
      "Sim. Você define seus honorários. O portal não interfere em valores.",
  },
  {
    question: "Preciso de algum documento específico?",
    answer:
      "Sim, verificamos registro profissional (CRM, OAB, CRP, CRESS, etc.) para garantir credibilidade do portal.",
  },
];

export default function SejaEspecialistaPage() {
  return (
    <main className="bg-bg-base min-h-screen">
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary/60 mb-4 block">
              Nossa Equipe
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-brand-primary mb-6 leading-tight">
              Seja um Especialista Filhos Cuidadores
            </h1>
            <p className="text-base text-brand-secondary leading-relaxed mb-8">
              Junte-se a profissionais que ajudam famílias a cuidar de pais com
              Alzheimer, Parkinson e outras demências. Divulgação gratuita,
              pacientes qualificados e flexibilidade total.
            </p>
            <a
              href="#formulario"
              className="inline-block px-8 py-4 bg-brand-primary text-white text-[13px] font-medium tracking-wide uppercase hover:bg-brand-primary/90 transition-colors"
            >
              Quero Fazer Parte
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-y border-border-base">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-display font-medium text-brand-primary mb-2">
                10k+
              </div>
              <div className="text-xs text-brand-secondary/60">
                Visitantes/mês
              </div>
            </div>
            <div>
              <div className="text-3xl font-display font-medium text-brand-primary mb-2">
                62
              </div>
              <div className="text-xs text-brand-secondary/60">
                Artigos publicados
              </div>
            </div>
            <div>
              <div className="text-3xl font-display font-medium text-brand-primary mb-2">
                5
              </div>
              <div className="text-xs text-brand-secondary/60">
                Clusters de conteúdo
              </div>
            </div>
            <div>
              <div className="text-3xl font-display font-medium text-brand-primary mb-2">
                7
              </div>
              <div className="text-xs text-brand-secondary/60">
                Especialidades
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl lg:text-3xl font-display font-medium text-brand-primary mb-4">
              Por que fazer parte?
            </h2>
            <p className="text-sm text-brand-secondary">
              Benefícios reais para profissionais que se juntam ao Filhos
              Cuidadores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white border border-border-base p-6 rounded-[5px]"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-base font-display font-medium text-brand-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs text-brand-secondary/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 lg:py-20 bg-white border-y border-border-base">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl lg:text-3xl font-display font-medium text-brand-primary mb-4">
              Como funciona?
            </h2>
            <p className="text-sm text-brand-secondary">
              Simples, rápido e sem burocracia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-display font-medium">
                  {step.step}
                </div>
                <h3 className="text-sm font-display font-medium text-brand-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-brand-secondary/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl lg:text-3xl font-display font-medium text-brand-primary mb-4">
              Quem procuramos?
            </h2>
            <p className="text-sm text-brand-secondary">
              Profissionais qualificados que querem ajudar famílias em momento
              de cuidado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty) => (
              <div
                key={specialty.name}
                className="bg-white border border-border-base p-6 rounded-[5px]"
              >
                <div className="text-3xl mb-4">{specialty.icon}</div>
                <h3 className="text-base font-display font-medium text-brand-primary mb-2">
                  {specialty.name}
                </h3>
                <p className="text-xs text-brand-secondary/60 leading-relaxed">
                  {specialty.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-white border-y border-border-base">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl lg:text-3xl font-display font-medium text-brand-primary mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="max-w-3xl space-y-6">
            {faq.map((item) => (
              <div
                key={item.question}
                className="bg-bg-base border border-border-base p-6 rounded-[5px]"
              >
                <h3 className="text-sm font-display font-medium text-brand-primary mb-3">
                  {item.question}
                </h3>
                <p className="text-xs text-brand-secondary/60 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="formulario" className="py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-display font-medium text-brand-primary mb-4">
                Quer fazer parte da equipe?
              </h2>
              <p className="text-sm text-brand-secondary">
                Preencha o formulário abaixo e entraremos em contato assim que sua
                especialidade estiver disponível.
              </p>
            </div>

            <SpecialistForm />
          </div>
        </div>
      </section>
    </main>
  );
}
