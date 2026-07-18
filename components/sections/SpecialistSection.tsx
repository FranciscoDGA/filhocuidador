import Link from "next/link";

const faqs = [
  {
    q: "Minha mãe não quer tomar remédio. O que faço?",
    a: "Verifique se o medicamento pode ser diluído. Converse com o médico sobre alternativas (spray, injetável). Nunca force — crie uma rotina.",
    specialist: "Dra. Patricia Tura — Neurologista",
    category: "Medicação",
  },
  {
    q: "Meu pai fica agressivo à noite. É normal?",
    a: "Sim, é o 'sundowning'. Mantenha a casa iluminada, evite estimulação à noite e crie uma rotina de sono relaxante.",
    specialist: "Dra. Renata Menezes — Psicóloga",
    category: "Comportamento",
  },
  {
    q: "Estou me sentindo culpado por ter raiva. Isso é normal?",
    a: "Completamente normal. Raiva não significa que você não ama. Significa que você está sobrecarregado. Busque um psicólogo.",
    specialist: "Dra. Renata Menezes — Psicóloga",
    category: "Emocional",
  },
];

export default function SpecialistSection() {
  return (
    <section className="py-20 lg:py-28 bg-bg-base">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14">
          <div>
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary mb-4 block">
              Tire Suas Dúvidas
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-medium text-brand-primary">
              Pergunte ao Especialista
            </h2>
          </div>
          <Link
            href="/pergunte-ao-especialista"
            className="mt-4 sm:mt-0 inline-flex items-center text-[13px] font-medium tracking-wide uppercase text-brand-primary border-b border-brand-primary/20 hover:border-brand-primary/60 pb-1 transition-colors"
          >
            Ver todas
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-border-base p-6">
              <span className="text-[10px] font-medium tracking-wider uppercase text-brand-accent mb-3 block">
                {faq.category}
              </span>
              <h3 className="text-sm font-display font-medium text-brand-primary mb-3 leading-snug">
                &ldquo;{faq.q}&rdquo;
              </h3>
              <p className="text-xs text-brand-secondary/50 leading-relaxed mb-4">
                {faq.a}
              </p>
              <p className="text-[11px] text-brand-secondary/40 italic">
                — {faq.specialist}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/pergunte-ao-especialista"
            className="inline-flex items-center gap-2 px-8 py-3 bg-brand-primary text-white text-[13px] font-medium tracking-wide uppercase hover:bg-brand-primary/90 transition-colors"
          >
            Enviar sua pergunta
          </Link>
        </div>
      </div>
    </section>
  );
}
