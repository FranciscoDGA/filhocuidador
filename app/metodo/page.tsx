import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O Método Filho Cuidador",
  description: "O primeiro método completo do Brasil para filhos que cuidam de pais com Alzheimer, Parkinson, AVC e demências. 5 fases, ferramentas práticas e certificação.",
};

const phases = [
  {
    number: "01",
    title: "Diagnóstico e Aceitação",
    subtitle: "O primeiro passo é o mais difícil",
    description: "Entenda o diagnóstico, processe as emoções e comece a jornada com clareza e fé.",
    color: "bg-blue-500",
    tools: [
      { type: "Guia", name: "Como Aceitar o Diagnóstico de Alzheimer do Meu Pai" },
      { type: "Quiz", name: "Qual o Estágio do Alzheimer do Meu Pai?" },
      { type: "Template", name: "Diário de Sintomas" },
    ],
    articles: ["alzheimer-guia-pratico-cuidador", "minha-mae-nao-me-reconhece-mais-alzheimer"],
  },
  {
    number: "02",
    title: "Cuidados Diários",
    subtitle: "Rotinas que salvam vidas",
    description: "Aprenda as técnicas essenciais de higiene, alimentação, medicação e segurança no dia a dia.",
    color: "bg-green-500",
    tools: [
      { type: "Guia", name: "Como Adaptar Sua Casa para um Idoso com Demência" },
      { type: "Checklist", name: "Rotina Diária de Cuidados" },
      { type: "Template", name: "Plano de Alimentação" },
    ],
    articles: ["higiene-banho-seguro-idoso", "alimentacao-disfagia-idoso", "prevencao-quedas-casa-guia-pratico"],
  },
  {
    number: "03",
    title: "Desafios Comportamentais",
    subtitle: "Quando a doença se manifesta",
    description: "Estratégias comprovadas para lidar com agressividade, confusão, recusas e comportamentos difíceis.",
    color: "bg-orange-500",
    tools: [
      { type: "Guia", name: "Como Lidar com Agressividade em Alzheimer" },
      { type: "Checklist", name: "O que Fazer em uma Crise" },
      { type: "Template", name: "Plano de Contingência" },
    ],
    articles: ["como-lidar-pai-alzheimer-agressivo", "pai-alzheimer-nao-quer-tomar-banho", "comunicacao-idoso-demencia"],
  },
  {
    number: "04",
    title: "Saúde do Cuidador",
    subtitle: "Cuidar de quem cuida",
    description: "Reconheça sinais de burnout, ansiedade e depressão. Aprenda a se cuidar para continuar cuidando.",
    color: "bg-red-500",
    tools: [
      { type: "Guia", name: "Como Evitar o Burnout do Cuidador" },
      { type: "Quiz", name: "Você Está com Burnout?" },
      { type: "Template", name: "Plano de Autocuidado" },
    ],
    articles: ["burnout-cuidador-sinais-alerta", "ansiedade-cuidador-tecnicas-alivio", "autocuidado-self-care-cuidador"],
  },
  {
    number: "05",
    title: "Aspectos Jurídicos e Financeiros",
    subtitle: "Proteja sua família",
    description: "Entenda seus direitos, benefícios, procuração, curatela e como organizar as finanças do cuidado.",
    color: "bg-purple-500",
    tools: [
      { type: "Guia", name: "Direitos do Cuidador de Idoso no Brasil" },
      { type: "Calculadora", name: "Quanto Custa Cuidar de um Idoso?" },
      { type: "Template", name: "Modelo de Procuração" },
    ],
    articles: ["direitos-idoso-estatuto-lei", "bpc-loas-guia-completo", "procuracao-idoso-modelo-passo-passo"],
  },
];

const stats = [
  { number: "5", label: "Fases do Método" },
  { number: "15", label: "Ferramentas Exclusivas" },
  { number: "58", label: "Artigos de Apoio" },
  { number: "100%", label: "Gratuito" },
];

export default function MetodoFilhoCuidadorPage() {
  return (
    <main className="bg-bg-base min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/60 mb-4 block">
              Método Proprietário
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium mb-6 leading-tight">
              O Método Filho Cuidador
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
              O primeiro método completo do Brasil para filhos que cuidam de pais com Alzheimer, Parkinson, AVC e demências. Uma jornada guiada em 5 fases.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl lg:text-3xl font-display font-medium mb-1">
                    {stat.number}
                  </div>
                  <div className="text-[11px] text-white/50 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-display font-medium text-brand-primary mb-4">
              Como Funciona o Método
            </h2>
            <p className="text-sm text-brand-secondary leading-relaxed">
              Cada fase foi desenhada para te guiar de forma prática e humana. Não é teoria - são ferramentas reais para o dia a dia.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {phases.map((phase) => (
              <div key={phase.number} className="bg-white border border-border-base rounded-[5px] overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 ${phase.color} flex items-center justify-center text-white text-xl font-display font-medium shrink-0 rounded-[5px]`}>
                      {phase.number}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-display font-medium text-brand-primary mb-1">
                        {phase.title}
                      </h3>
                      <p className="text-xs text-brand-accent mb-3">{phase.subtitle}</p>
                      <p className="text-sm text-brand-secondary leading-relaxed mb-4">
                        {phase.description}
                      </p>

                      {/* Tools */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                        {phase.tools.map((tool) => (
                          <div key={tool.name} className="bg-bg-base border border-border-base p-3 rounded-[5px]">
                            <span className="text-[10px] font-medium tracking-wider uppercase text-brand-accent block mb-1">
                              {tool.type}
                            </span>
                            <span className="text-xs text-brand-primary font-medium">
                              {tool.name}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Related Articles */}
                      <div className="flex flex-wrap gap-2">
                        {phase.articles.map((slug) => (
                          <Link
                            key={slug}
                            href={`/artigos/${slug}`}
                            className="text-[11px] text-brand-secondary/50 hover:text-brand-primary border border-border-base px-3 py-1 rounded-[5px] transition-colors"
                          >
                            Ver artigo →
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Overview */}
      <section className="py-16 lg:py-20 bg-white border-y border-border-base">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-display font-medium text-brand-primary mb-4">
              Ferramentas Exclusivas
            </h2>
            <p className="text-sm text-brand-secondary leading-relaxed">
              Cada fase inclui guias, checklists e templates prontos para usar. Tudo gratuito.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "📚",
                title: "Guias Práticos",
                count: "5 guias completos",
                description: "Conteúdo aprofundado sobre cada fase do cuidado. Linguagem simples e humana.",
              },
              {
                icon: "✅",
                title: "Checklists e Quizzes",
                count: "5 ferramentas interativas",
                description: "Quiz de estágio, checklist de crise, checklist de rotina e mais.",
              },
              {
                icon: "📋",
                title: "Templates Editáveis",
                count: "5 templates prontos",
                description: "Diário de sintomas, plano de alimentação, plano de contingência e mais.",
              },
            ].map((tool) => (
              <div key={tool.title} className="bg-bg-base border border-border-base p-6 rounded-[5px] text-center">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-base font-display font-medium text-brand-primary mb-1">
                  {tool.title}
                </h3>
                <p className="text-xs text-brand-accent mb-3">{tool.count}</p>
                <p className="text-xs text-brand-secondary/60 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-brand-primary/[0.03] border border-border-base p-8 lg:p-12 rounded-[5px]">
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">🎓</div>
                <h2 className="text-2xl font-display font-medium text-brand-primary mb-4">
                  Certificado de Cuidador Especializado
                </h2>
                <p className="text-sm text-brand-secondary leading-relaxed">
                  Ao completar todas as 5 fases do método, você receberá um certificado digital reconhecido que comprova sua dedicação e conhecimento no cuidado de idosos.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-brand-accent mt-0.5">✓</span>
                    <div>
                      <h3 className="text-sm font-medium text-brand-primary mb-1">100% Online</h3>
                      <p className="text-xs text-brand-secondary/60">Complete no seu ritmo, de qualquer lugar.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-brand-accent mt-0.5">✓</span>
                    <div>
                      <h3 className="text-sm font-medium text-brand-primary mb-1">Sem Custo</h3>
                      <p className="text-xs text-brand-secondary/60">O método e o certificado são totalmente gratuitos.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-brand-accent mt-0.5">✓</span>
                    <div>
                      <h3 className="text-sm font-medium text-brand-primary mb-1">Digital</h3>
                      <p className="text-xs text-brand-secondary/60">Receba o certificado em PDF pronto para imprimir.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-border-base p-6 rounded-[5px]">
                  <div className="border-2 border-dashed border-brand-accent/30 p-6 text-center rounded-[5px]">
                    <div className="text-xs text-brand-secondary/40 mb-2">Certificado de Exemplo</div>
                    <div className="text-lg font-display font-medium text-brand-primary mb-1">
                      Certificado de Cuidador Especializado
                    </div>
                    <div className="text-xs text-brand-secondary/60">
                      Concedido a: Nome do Cuidador
                    </div>
                    <div className="text-[10px] text-brand-secondary/40 mt-2">
                      Filho Cuidador • 2026
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-brand-primary text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-display font-medium mb-6">
              Comece sua jornada agora
            </h2>
            <p className="text-white/80 mb-8">
              Escolha a fase em que você está e comece a transformar seu cuidado.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/metodo/fase-1"
                className="px-8 py-3 bg-white text-brand-primary text-[13px] font-medium tracking-wide uppercase hover:bg-white/90 transition-colors rounded-[5px]"
              >
                Começar pela Fase 1
              </Link>
              <Link
                href="/metodo/certificado"
                className="px-8 py-3 border border-white/30 text-white text-[13px] font-medium tracking-wide uppercase hover:bg-white/10 transition-colors rounded-[5px]"
              >
                Ver Certificado
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back */}
      <div className="pb-12 text-center pt-8">
        <Link href="/" className="text-sm text-brand-secondary hover:text-brand-primary transition-colors">
          ← Voltar para o Filho Cuidador
        </Link>
      </div>
    </main>
  );
}
