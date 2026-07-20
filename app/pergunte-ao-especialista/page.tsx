import Link from "next/link";
import type { Metadata } from "next";
import QuestionForm from "@/components/forms/QuestionForm";

export const metadata: Metadata = {
  title: "Pergunte ao Especialista",
  description: "Envie sua dúvida e nossos especialistas respondem. Perguntas frequentes sobre Alzheimer, demência, jurídico e cuidados.",
};

const faqData = [
  {
    q: "Minha mãe não quer tomar remédio. O que faço?",
    a: "Essa é uma das dúvidas mais comuns. Primeiro, verifique se o medicamento pode ser diluído em alimento ou líquido. Converse com o médico sobre alternativas (spray, injetável). Nunca force — isso pode gerar trauma. Tente criar uma rotina: sempre no mesmo horário, com algo que ela goste.",
    specialist: "Dra. Patricia Tura — Neurologista",
    category: "Medicação",
  },
  {
    q: "Meu pai fica agressivo à noite. É normal?",
    a: "Sim, é muito comum. Chama-se 'sundowning' — a confusão mental piora ao final do dia. Mantenha a casa bem iluminada, evite estimulação à noite, e crie uma rotina de sono relaxante. Se a agressividade persistir, converse com o neurologista sobre ajuste de medicação.",
    specialist: "Dra. Renata Menezes — Psicóloga",
    category: "Comportamento",
  },
  {
    q: "Preciso de procuração para cuidar do meu pai. Como faço?",
    a: "A procuração deve ser feita em cartório, com o idoso presente e lúcido. Se ele não tem mais lucidez, será necessário um processo de curatela judicial. Consulte um advogado especializado em Direito do Idoso. Não adie — é mais fácil fazer enquanto o idoso ainda tem lucidez.",
    specialist: "Dr. Fernando Amato — Advogado",
    category: "Jurídico",
  },
  {
    q: "Estou me sentindo culpado por ter raiva do idoso. Isso é normal?",
    a: "Completamente normal. Raiva não significa que você não ama. Significa que você está sobrecarregado. Cuidador que não admite raiva está reprimindo emoções que podem explodir depois. Busque um psicólogo. Grupos de apoio também ajudam muito.",
    specialist: "Dra. Renata Menezes — Psicóloga",
    category: "Emocional",
  },
  {
    q: "Meu idoso se perde em casa. Como tornar o ambiente seguro?",
    a: "Instale fechaduras que ele não consiga abrir, retire tapetes soltos, coloque barras de apoio no banheiro, use travas em armárias com produtos perigosos, e considere um monitor de movimento. Também é importante manter itens pessoais sempre no mesmo lugar.",
    specialist: "Equipe Filhos Cuidadores",
    category: "Segurança",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function PergunteEspecialistaPage() {
  const categories = ["Todas", ...Array.from(new Set(faqData.map((f) => f.category)))];

  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="mb-8 flex items-center gap-2 text-[11px] text-brand-secondary/50">
          <Link href="/" className="hover:text-brand-primary transition">Início</Link>
          <span>/</span>
          <span className="text-brand-primary">Pergunte ao Especialista</span>
        </div>

        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary/60 mb-4 block">
            Tire Suas Dúvidas
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-brand-primary mb-6 leading-tight">
            Pergunte ao Especialista
          </h1>
          <p className="text-base text-brand-secondary leading-relaxed">
            Envie sua dúvida e nossos especialistas respondem. Veja também as perguntas mais frequentes de outros cuidadores.
          </p>
        </div>

        {/* Formulário */}
        <div className="bg-white border border-border-base p-6 lg:p-8 mb-12">
          <h2 className="text-lg font-display font-medium text-brand-primary mb-6">
            Envie Sua Pergunta
          </h2>
          <QuestionForm />
        </div>

        {/* Perguntas frequentes */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-display font-medium text-brand-primary">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((item, i) => (
              <div key={i} className="bg-white border border-border-base p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[10px] font-medium tracking-wider uppercase text-brand-accent bg-brand-accent/10 px-2 py-1 shrink-0">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-sm font-display font-medium text-brand-primary mb-3">
                  {item.q}
                </h3>
                <p className="text-xs text-brand-secondary/60 leading-relaxed mb-3">
                  {item.a}
                </p>
                <p className="text-[10px] text-brand-secondary/40 italic">
                  — {item.specialist}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
