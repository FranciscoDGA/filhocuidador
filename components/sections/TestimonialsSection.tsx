import Link from "next/link";

const testimonials = [
  {
    name: "Fernanda Souza",
    city: "São Paulo, SP",
    text: "Esse site me salvou. Quando minha mãe foi diagnosticada com Alzheimer, eu não sabia nada. Aqui encontrei tudo que precisava.",
    rating: 5,
  },
  {
    name: "Ricardo Mendes",
    city: "Rio de Janeiro, RJ",
    text: "O quiz de burnout me fez perceber que eu estava no limite. Procurei ajuda a tempo. Sem esse site, provavelmente teria surtado.",
    rating: 5,
  },
  {
    name: "Patricia Lima",
    city: "Belo Horizonte, MG",
    text: "Os kits de emergência são incríveis. Baixei o kit jurídico e descobri que minha mãe tinha direito a BPC. R$ 1.200 por mês.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-bg-base">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14">
          <div>
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary mb-4 block">
              O que dizem sobre nós
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-medium text-brand-primary">
              Depoimentos
            </h2>
          </div>
          <Link
            href="/depoimentos"
            className="mt-4 sm:mt-0 inline-flex items-center text-[13px] font-medium tracking-wide uppercase text-brand-primary border-b border-brand-primary/20 hover:border-brand-primary/60 pb-1 transition-colors"
          >
            Ver todos
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-border-base p-6 rounded-[5px]">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-brand-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-brand-secondary leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center">
                  <span className="text-[10px] font-medium text-brand-primary">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-brand-primary">{t.name}</p>
                  <p className="text-[10px] text-brand-secondary/40">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
