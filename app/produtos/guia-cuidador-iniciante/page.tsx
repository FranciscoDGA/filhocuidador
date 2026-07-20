import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guia do Cuidador Iniciante",
  description: "O manual definitivo para quem acabou de descobrir que um pai ou mãe tem Alzheimer. 50 páginas com dicas práticas, checklist e template de rotina.",
};

const benefits = [
  {
    icon: "📋",
    title: "Checklist: Primeiras 24h",
    description: "O que fazer nas primeiras 24 horas após o diagnóstico. Passo a passo sem pânico.",
  },
  {
    icon: "🧠",
    title: "As 7 Fases do Alzheimer",
    description: "Entenda o que esperar em cada fase e como se preparar emocionalmente.",
  },
  {
    icon: "🏠",
    title: "Adaptação do Lar",
    description: "Como tornar sua casa segura para um idoso com demência. Lista completa de adaptações.",
  },
  {
    icon: "❌",
    title: "10 Erros Comuns",
    description: "Os erros que todo cuidador iniciante comete e como evitá-los desde o início.",
  },
  {
    icon: "📅",
    title: "Template de Rotina Diária",
    description: "Planilha editável para organizar medicamentos, refeições e atividades.",
  },
  {
    icon: "💊",
    title: "Guia de Medicamentos",
    description: "Entenda os principais medicamentos para Alzheimer e como administrá-los.",
  },
];

const bonuses = [
  {
    title: "Checklist: Adaptação da Casa",
    value: "R$ 27",
    description: "Lista completa de adaptações para tornar sua casa segura.",
  },
  {
    title: "Guia: Melhor Fralda Geriátrica",
    value: "R$ 19",
    description: "Comparativo de marcas, tamanhos e como escolher a ideal.",
  },
  {
    title: "Acesso ao Grupo no Facebook",
    value: "R$ 500",
    description: "Comunidade exclusiva com outros cuidadores e especialistas.",
  },
];

const testimonials = [
  {
    name: "Ana Paula Souza",
    city: "São Paulo, SP",
    text: "Esse guia me salvou. Quando minha mãe foi diagnosticada, eu não sabia nada. Aqui encontrei tudo que precisava organizado e fácil de entender.",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    city: "Rio de Janeiro, RJ",
    text: "O checklist das primeiras 24h me deu direção. Sabia exatamente o que fazer sem entrar em pânico. Vale cada centavo.",
    rating: 5,
  },
  {
    name: "Fernanda Lima",
    city: "Belo Horizonte, MG",
    text: "O template de rotina diária organizou minha vida. Antes eu esquecia medicamentos, agora tudo está no controle.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "O guia é digital ou físico?",
    a: "É um guia digital em PDF. Você recebe imediatamente após a compra e pode ler no celular, tablet ou computador.",
  },
  {
    q: "Posso imprimir o guia?",
    a: "Sim! O guia foi formatado para impressão caso você prefira ter uma cópia física.",
  },
  {
    q: "Tem garantia?",
    a: "Sim! Garantia de 7 dias. Se não gostar, devolvemos 100% do seu dinheiro.",
  },
  {
    q: "O guia substitui orientação médica?",
    a: "Não. O guia é um complemento educativo. Sempre consulte um médico para diagnósticos e tratamentos.",
  },
];

export default function GuiaCuidadorIniciantePage() {
  return (
    <main className="bg-bg-base min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/60 mb-4 block">
              Guia Digital
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium mb-6 leading-tight">
              Guia do Cuidador Iniciante
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              O Manual Definitivo para Quem Acabou de Descobrir que um Pai ou Mãe tem Alzheimer
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-white/70">4.9/5 (237 avaliações)</span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <span className="text-4xl font-display font-medium">R$ 47</span>
              <span className="text-sm text-white/60">ou 2x de R$ 24,50</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-display font-medium text-brand-primary mb-6 text-center">
              Você está sentindo isso agora?
            </h2>
            <div className="space-y-4">
              {[
                "O diagnóstico de Alzheimer acabou de ser confirmado e você não sabe o que fazer",
                "Sente medo, culpa e incerteza sobre o futuro",
                "Não sabe quais adaptações fazer em casa",
                "Está perdido com tantas informações contradatórias na internet",
                "Preocupa-se com a segurança do seu pai ou mãe",
                "Não consegue organizar a rotina de cuidados",
              ].map((problem, i) => (
                <div key={i} className="flex items-start gap-3 bg-white border border-border-base p-4 rounded-[5px]">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span className="text-sm text-brand-secondary">{problem}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-brand-secondary mt-8">
              Se você se identificou com algum desses pontos, <strong className="text-brand-primary">o Guia do Cuidador Iniciante foi feito para você.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-20 bg-white border-y border-border-base">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-display font-medium text-brand-primary mb-12 text-center">
            O que você vai aprender
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-bg-base border border-border-base p-6 rounded-[5px]">
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

      {/* Bonuses Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-accent mb-4 block">
                Bônus Exclusivos
              </span>
              <h2 className="text-2xl lg:text-3xl font-display font-medium text-brand-primary">
                + R$ 546 em bônus grátis
              </h2>
            </div>
            <div className="space-y-4">
              {bonuses.map((bonus) => (
                <div key={bonus.title} className="bg-white border border-brand-accent/30 p-6 rounded-[5px]">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-base font-display font-medium text-brand-primary mb-1">
                        🎁 {bonus.title}
                      </h3>
                      <p className="text-xs text-brand-secondary/60">{bonus.description}</p>
                    </div>
                    <span className="text-sm font-medium text-brand-accent whitespace-nowrap ml-4">
                      {bonus.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-16 lg:py-20 bg-brand-primary text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-display font-medium mb-6">
              Invista no seu conhecimento
            </h2>
            <p className="text-white/80 mb-8">
              O Guia do Cuidador Iniciante + 3 Bônus Exclusivos por apenas:
            </p>
            <div className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-5xl font-display font-medium">R$ 47</span>
              </div>
              <span className="text-sm text-white/60">ou 2x de R$ 24,50 no cartão</span>
            </div>
            <div className="bg-white/10 p-6 rounded-[5px] mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm font-medium">Garantia de 7 dias</span>
              </div>
              <p className="text-xs text-white/70">
                Se não gostar do guia, devolvemos 100% do seu dinheiro. Sem perguntas.
              </p>
            </div>
            <a
              href="#"
              className="inline-block px-12 py-4 bg-white text-brand-primary text-[15px] font-medium tracking-wide uppercase hover:bg-white/90 transition-colors rounded-[5px]"
            >
              COMPRAR AGORA
            </a>
            <p className="text-xs text-white/50 mt-4">
              Pagamento seguro via Hotmart • Acesso imediato
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-display font-medium text-brand-primary mb-12 text-center">
            O que dizem nossos leitores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-border-base p-6 rounded-[5px]">
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
                <div>
                  <p className="text-[11px] font-medium text-brand-primary">{t.name}</p>
                  <p className="text-[10px] text-brand-secondary/40">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-white border-y border-border-base">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-display font-medium text-brand-primary mb-8 text-center">
              Perguntas Frequentes
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-bg-base border border-border-base p-6 rounded-[5px]">
                  <h3 className="text-sm font-display font-medium text-brand-primary mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-xs text-brand-secondary/60 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-display font-medium text-brand-primary mb-4">
              Não espere mais
            </h2>
            <p className="text-sm text-brand-secondary mb-8">
              Cada dia sem conhecimento é um dia mais difícil para você e seu familiar. Comece agora a cuidar melhor.
            </p>
            <a
              href="#"
              className="inline-block px-12 py-4 bg-brand-primary text-white text-[15px] font-medium tracking-wide uppercase hover:bg-brand-primary/90 transition-colors rounded-[5px]"
            >
              COMPRAR GUIA - R$ 47
            </a>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="pb-12 text-center">
        <Link href="/" className="text-sm text-brand-secondary hover:text-brand-primary transition-colors">
          ← Voltar para o Filhos Cuidadores
        </Link>
      </div>
    </main>
  );
}
