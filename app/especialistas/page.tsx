import type { Metadata } from "next";
import Link from "next/link";
import { Scale, Brain, HeartPulse, Users, Stethoscope, Activity, Apple, Syringe } from "lucide-react";

export const metadata: Metadata = {
  title: "Especialistas | Filhos Cuidadores",
  description:
    "Conheça nossos especialistas e como eles ajudam famílias que cuidam de idosos com Alzheimer, Parkinson, AVC e demências.",
};

const specialists = [
  {
    icon: <Stethoscope className="w-6 h-6" />,
    role: "Geriatra / Neurologista",
    description: "Avaliação clínica, diagnóstico, medicação e acompanhamento de idosos com demências e doenças neurodegenerativas.",
    status: "Em processo de seleção",
    statusColor: "text-amber-600",
    available: false,
  },
  {
    icon: <Scale className="w-6 h-6" />,
    role: "Advogado (Direito da Pessoa Idosa)",
    description: "Procuração, curatela, interdição, BPC/LOAS, direitos do idoso, testamento e questões sucessórias.",
    status: "Em processo de seleção",
    statusColor: "text-amber-600",
    available: false,
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    role: "Psicólogo",
    description: "Saúde mental do cuidador: burnout, ansiedade, culpa, luto, comunicação familiar e suporte emocional.",
    status: "Em processo de seleção",
    statusColor: "text-amber-600",
    available: false,
  },
  {
    icon: <Users className="w-6 h-6" />,
    role: "Assistente Social",
    description: "Benefícios sociais, encaminhamentos, acesso a serviços públicos e acompanhamento institucional.",
    status: "Em processo de seleção",
    statusColor: "text-amber-600",
    available: false,
  },
  {
    icon: <Activity className="w-6 h-6" />,
    role: "Fisioterapeuta",
    description: "Mobilidade, prevenção de quedas, exercícios para idosos e reabilitação física.",
    status: "Em processo de seleção",
    statusColor: "text-amber-600",
    available: false,
  },
  {
    icon: <Apple className="w-6 h-6" />,
    role: "Nutricionista",
    description: "Alimentação adequada, disfagia, nutrição do idoso e do cuidador, planos alimentares.",
    status: "Em processo de seleção",
    statusColor: "text-amber-600",
    available: false,
  },
  {
    icon: <Syringe className="w-6 h-6" />,
    role: "Enfermeiro",
    description: "Higiene, medicamentos, curativos, cuidados paliativos e suporte técnico para cuidadores.",
    status: "Em processo de seleção",
    statusColor: "text-amber-600",
    available: false,
  },
];

const benefits = [
  {
    title: "Audiência qualificada",
    description: "Mais de 10 mil cuidadores buscam informações por mês. Seu perfil aparece para quem precisa dos seus serviços.",
  },
  {
    title: "Credibilidade reforçada",
    description: "Aparecer em um portal especializado em cuidados com idosos fortalece sua autoridade profissional.",
  },
  {
    title: "Novos pacientes",
    description: "Cuidadores que encontram um profissional de confiança indicam para toda a família.",
  },
  {
    title: "Conteúdo exclusivo",
    description: "Publique artigos e guias na sua área de expertise, atraindo pacientes orgânicos pelo Google.",
  },
];

export default function EspecialistasPage() {
  return (
    <main className="bg-bg-base min-h-screen">
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 text-center">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary/60 mb-4 block">
            Nossa Equipe
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-brand-primary mb-6 leading-tight">
            Especialistas que cuidam de quem cuida
          </h1>
          <p className="text-lg text-brand-secondary max-w-2xl mx-auto leading-relaxed">
            Contamos com profissionais qualificados para orientar famílias em cada fase do cuidado —
            da saúde emocional às questões jurídicas.
          </p>
        </div>
      </section>

      {/* Em seleção */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <div className="bg-amber-50 border border-amber-200 p-8 mb-12 text-center">
            <div className="w-12 h-12 bg-amber-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="font-display text-xl font-medium text-brand-primary mb-3">
              Estamos cadastrando profissionais
            </h2>
            <p className="text-brand-secondary text-sm max-w-lg mx-auto">
              Estamos selecionando especialistas para compor nossa equipe. Em breve você terá acesso a
              consultas e orientações profissionais diretamente pelo portal.
            </p>
          </div>

          {/* Profissionais */}
          <div className="mb-16">
            <h2 className="font-display text-2xl font-medium text-brand-primary mb-2">
              Nossas especialidades
            </h2>
            <p className="text-brand-secondary text-sm mb-8">
              Conheça os profissionais que estarão disponíveis para orientar sua família.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specialists.map((spec, i) => (
                <div
                  key={i}
                  className="bg-white border border-border-base p-6 hover:border-brand-primary/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                      {spec.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-sm font-medium text-brand-primary mb-1">
                        {spec.role}
                      </h3>
                      <p className="text-brand-secondary text-xs leading-relaxed mb-3">
                        {spec.description}
                      </p>
                      <span className={`text-[11px] font-medium ${spec.statusColor}`}>
                        {spec.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Por que ser especialista */}
          <div className="mb-16">
            <h2 className="font-display text-2xl font-medium text-brand-primary mb-2">
              Por que fazer parte?
            </h2>
            <p className="text-brand-secondary text-sm mb-8">
              Benefícios para profissionais que se juntam ao Filhos Cuidadores.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="bg-white border border-border-base p-6">
                  <h3 className="font-display text-sm font-medium text-brand-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-brand-secondary text-xs leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Formulário para profissionais */}
          <div id="candidatar" className="bg-white border border-border-base p-8 sm:p-10">
            <h2 className="font-display text-2xl font-medium text-brand-primary mb-2">
              Quer fazer parte da equipe?
            </h2>
            <p className="text-brand-secondary text-sm mb-8">
              Preencha o formulário abaixo e entraremos em contato assim que sua especialidade estiver disponível.
            </p>
            <EspecialistaForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function EspecialistaForm() {
  return (
    <form action="/api/submit" method="POST" className="space-y-5">
      <input type="hidden" name="type" value="especialista" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-brand-primary mb-2">Nome completo</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 border border-border-base text-sm text-brand-primary bg-bg-base focus:outline-none focus:border-brand-accent transition-colors"
            placeholder="Dr(a). Maria Silva"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-brand-primary mb-2">E-mail</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-border-base text-sm text-brand-primary bg-bg-base focus:outline-none focus:border-brand-accent transition-colors"
            placeholder="maria@exemplo.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-brand-primary mb-2">Especialidade</label>
          <select
            name="specialty"
            required
            className="w-full px-4 py-3 border border-border-base text-sm text-brand-primary bg-bg-base focus:outline-none focus:border-brand-accent transition-colors"
          >
            <option value="">Selecione...</option>
            <option value="geriatra">Geriatra / Neurologista</option>
            <option value="advogado">Advogado (Direito da Pessoa Idosa)</option>
            <option value="psicologo">Psicólogo</option>
            <option value="assistente-social">Assistente Social</option>
            <option value="fisioterapeuta">Fisioterapeuta</option>
            <option value="nutricionista">Nutricionista</option>
            <option value="enfermeiro">Enfermeiro</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-brand-primary mb-2">Registro profissional (CRM, OAB, CRP...)</label>
          <input
            type="text"
            name="registration"
            className="w-full px-4 py-3 border border-border-base text-sm text-brand-primary bg-bg-base focus:outline-none focus:border-brand-accent transition-colors"
            placeholder="CRM 12345 / SP"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-brand-primary mb-2">LinkedIn ou site profissional</label>
        <input
          type="url"
          name="linkedin"
          className="w-full px-4 py-3 border border-border-base text-sm text-brand-primary bg-bg-base focus:outline-none focus:border-brand-accent transition-colors"
          placeholder="https://linkedin.com/in/mariasilva"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-brand-primary mb-2">Mensagem (opcional)</label>
        <textarea
          name="message"
          rows={3}
          className="w-full px-4 py-3 border border-border-base text-sm text-brand-primary bg-bg-base focus:outline-none focus:border-brand-accent transition-colors resize-none"
          placeholder="Conte um pouco sobre sua experiência com idosos..."
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3 bg-brand-primary text-white text-sm font-medium hover:bg-brand-primary/90 transition-colors"
      >
        Enviar candidatura
      </button>
    </form>
  );
}
