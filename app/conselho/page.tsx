import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosso Conselho Consultivo",
  description: "Conheça os especialistas que revisam e aprovam todo o conteúdo do Filhos Cuidadores. Geriatras, neurologistas, advogados e cuidadores reais.",
};

const advisors = [
  {
    name: "Dr. Alexandre Kalache",
    role: "Geriatra e Gerontólogo",
    bio: "Ex-coordenador do Programa de Envelhecimento da OMS. Referência mundial em envelhecimento ativo. Mais de 40 anos de experiência em saúde pública.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop",
    credentials: "CRM-SP | Ex-OMS",
    specialties: ["Envelhecimento", "Saúde Pública"],
  },
  {
    name: "Dra. Patricia Tura",
    role: "Neurologista — Especialista em Alzheimer",
    bio: "Neurologista pelo Hospital Albert Einstein. Especialista em demências e distúrbios cognitivos. Atua com foco na comunicação com famílias.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=400&auto=format&fit=crop",
    credentials: "CRM-SP | Einstein",
    specialties: ["Alzheimer", "Demências"],
  },
  {
    name: "Dr. Fernando Amato",
    role: "Advogado — Direito do Idoso",
    bio: "Especialista em Direito da Saúde e Direito do Idoso. Autor de artigos sobre interdição, curatela e direitos previdenciários de idosos.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
    credentials: "OAB-SP",
    specialties: ["Direito do Idoso", "Previdenciário"],
  },
  {
    name: "Dra. Renata Menezes",
    role: "Psicóloga — Saúde Mental do Cuidador",
    bio: "Psicóloga clínica com especialização em luto antecipado e burnout de cuidadores. Coordenadora de grupo de apoio para familiares.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop",
    credentials: "CRP-SP",
    specialties: ["Burnout", "Luto Antecipado"],
  },
  {
    name: "Ana Carolina Ribeiro",
    role: "Filha Cuidadora — Depoimento",
    bio: "Cuidou da mãe com Alzheimer por 8 anos. Compartilha sua jornada para ajudar outros filhos que vivem a mesma realidade.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop",
    credentials: "Cuidadora Real",
    specialties: ["Experiência Prática"],
  },
  {
    name: "Marcos Oliveira",
    role: "Filhos Cuidadores — Depoimento",
    bio: "Cuidou do pai com Parkinson por 5 anos enquanto trabalhava e criava filhos. Sabe na prática o que é conciliar tudo.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop",
    credentials: "Cuidador Real",
    specialties: ["Cuidador Solo"],
  },
];

export default function ConselhoPage() {
  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-[11px] text-brand-secondary/50">
          <Link href="/" className="hover:text-brand-primary transition">Início</Link>
          <span>/</span>
          <span className="text-brand-primary">Conselho Consultivo</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary/60 mb-4 block">
            Nossa Equipe
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-brand-primary mb-6 leading-tight">
            Conselho Consultivo
          </h1>
          <p className="text-base text-brand-secondary leading-relaxed">
            Todo conteúdo do Filhos Cuidadores é revisado por especialistas. Nosso conselho garante informações precisas, seguras e atualizadas para quem cuida.
          </p>
        </div>

        {/* Selo de Confiança */}
        <div className="bg-white border border-border-base p-6 lg:p-8 mb-12 lg:mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-16 h-16 border-2 border-brand-primary flex items-center justify-center shrink-0">
              <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-display font-medium text-brand-primary mb-1">
                Site Aprovado por Especialistas
              </h3>
              <p className="text-xs text-brand-secondary/60 leading-relaxed">
                Todo conteúdo é revisado por profissionais qualificados antes da publicação. Informação segura e confiável.
              </p>
            </div>
          </div>
        </div>

        {/* Advisors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advisors.map((advisor) => (
            <div key={advisor.name} className="bg-white border border-border-base p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-display font-medium text-brand-primary">
                    {advisor.name}
                  </h3>
                  <p className="text-[11px] text-brand-accent font-medium">
                    {advisor.role}
                  </p>
                  <p className="text-[10px] text-brand-secondary/40 mt-1">
                    {advisor.credentials}
                  </p>
                </div>
              </div>
              <p className="text-xs text-brand-secondary/60 leading-relaxed mb-4">
                {advisor.bio}
              </p>
              <div className="flex flex-wrap gap-2">
                {advisor.specialties.map((spec) => (
                  <span
                    key={spec}
                    className="text-[10px] text-brand-secondary/50 border border-border-base px-2 py-1"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-sm text-brand-secondary mb-4">
            Quer fazer parte do conselho ou indicar um especialista?
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center text-[13px] font-medium tracking-wide uppercase text-brand-primary border-b border-brand-primary/20 hover:border-brand-primary/60 pb-1 transition-colors"
          >
            Entre em contato
          </Link>
        </div>
      </div>
    </main>
  );
}
