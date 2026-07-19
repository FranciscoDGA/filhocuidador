import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Como Lidar com Pai com Alzheimer Agressivo",
  description: "Ebook completo com estratégias práticas para lidar com episódios de agressividade em pais com Alzheimer. Cuidado, fé e compaixão para famílias em meio à tempestade.",
};

const benefits = [
  {
    icon: "🛡️",
    title: "Técnicas de Contenção Pacífica",
    description: "Como acalmar seu pai sem usar força, sem gritar, sem se machucar. Métodos comprovados por especialistas.",
  },
  {
    icon: "🧠",
    title: "Entender o Por Trás da Agressividade",
    description: "Por que seu pai fica agressivo? Não é ele, é a doença. Entender isso muda tudo na sua relação.",
  },
  {
    icon: "💪",
    title: "Como Reagir em Cada Situação",
    description: "Script exato do que falar quando ele grita, bate, xinga ou ameaça. Palavras que funcionam.",
  },
  {
    icon: "🏠",
    title: "Adaptações que Reduzem Conflitos",
    description: "Mudanças simples em casa que diminuem 80% dos episódios de agressividade.",
  },
  {
    icon: "❤️",
    title: "Cuidar de Você Também",
    description: "Como não adoecer cuidando. Sinais de burnout e como se proteger emocionalmente.",
  },
  {
    icon: "🙏",
    title: "O Poder da Fé no Cuidado",
    description: "Como a espiritualidade pode ser um porto seguro para você e sua família nessa tempestade.",
  },
];

const chapters = [
  "Por que o Alzheimer causa agressividade",
  "As 7 fases da agressividade e como reconhecer cada uma",
  "Script exato: o que falar em cada situação de crise",
  "Técnicas de contenção pacífica (sem usar força)",
  "Adaptações na casa que reduzem conflitos",
  "Como lidar com recusas (banho, comida, remédio)",
  "O papel da medicação e quando interferir",
  "Cuidando do cuidador: como não adoecer",
  "O poder da fé e da espiritualidade no cuidado",
  "Checklist: plano de ação para emergências",
];

const testimonials = [
  {
    name: "Maria Fernanda",
    city: "São Paulo, SP",
    text: "Meu pai começou a me bater e eu não sabia o que fazer. Esse ebook me ensinou técnicas que funcionam. Hoje consigo acalmá-lo sem machucá-lo. Salvou nossa relação.",
    rating: 5,
  },
  {
    name: "Roberto Carlos",
    city: "Belo Horizonte, MG",
    text: "Achei que era só falta de respeito. Quando entendi que era a doença, tudo mudou. O capítulo sobre as fases da agressividade me fez chorar de alívio.",
    rating: 5,
  },
  {
    name: "Ana Paula",
    city: "Rio de Janeiro, RJ",
    text: "O script do que falar em cada situação é ouro. Imprimo e levo para casa da minha mãe. É como ter um especialista do meu lado 24 horas.",
    rating: 5,
  },
  {
    name: "João Pedro",
    city: "Curitiba, PR",
    text: "Minha mãe recusava banho e eu ficava desesperado. Com as técnicas do ebook, ela agora aceita sem gritar. Valeu cada centavo.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "O ebook é físico ou digital?",
    a: "É um ebook digital em PDF. Você recebe o acesso imediatamente após a compra e pode ler no celular, tablet ou computador.",
  },
  {
    q: "Tem garantia?",
    a: "Sim! Garantia de 7 dias. Se não gostar, devolvemos 100% do seu dinheiro. Sem perguntas.",
  },
  {
    q: "O ebook substitui orientação médica?",
    a: "Não. O ebook é um complemento educativo. Sempre consulte um médico para diagnósticos e tratamentos.",
  },
  {
    q: "Posso imprimir o ebook?",
    a: "Sim! O ebook foi formatado para impressão caso você prefira ter uma cópia física.",
  },
  {
    q: "Para quem é este ebook?",
    a: "Para filhos, esposas, esposos ou qualquer pessoa que cuide de um idoso com Alzheimer e esteja enfrentando episódios de agressividade.",
  },
];

export default function EbookAgressividadePage() {
  return (
    <main className="bg-bg-base min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/60 mb-4 block">
              Ebook Digital
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium mb-6 leading-tight">
              Como Lidar com Pai com<br />
              <span className="text-brand-accent">Alzheimer Agressivo</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
              Cuidado, fé e compaixão para famílias em meio à tempestade
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-white/70">4.9/5 (127 avaliações)</span>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-display font-medium">R$ 47</span>
              <span className="text-sm text-white/60 ml-2">ou 2x de R$ 24,50</span>
            </div>
            <a
              href="https://pay.hotmart.com/D106798180B"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 bg-white text-brand-primary text-[15px] font-medium tracking-wide uppercase hover:bg-white/90 transition-colors rounded-[5px]"
            >
              COMPRAR AGORA
            </a>
            <p className="text-xs text-white/50 mt-4">
              Acesso imediato • Pagamento seguro via Hotmart
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-display font-medium text-brand-primary mb-6 text-center">
              Você está vivendo isso agora?
            </h2>
            <div className="space-y-4">
              {[
                "Seu pai grita, xinga ou ameaça você sem motivo aparente",
                "Ele recusa banho, comida ou remédio com violência",
                "Você tem medo de ficar sozinho com ele",
                "Sua família não entende o que você está passando",
                "Você se sente culpado por ter raiva do seu próprio pai",
                "Não sabe mais o que fazer e está no limite do desespero",
              ].map((problem, i) => (
                <div key={i} className="flex items-start gap-3 bg-white border border-border-base p-4 rounded-[5px]">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span className="text-sm text-brand-secondary">{problem}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-brand-secondary mt-8">
              Se você se identificou com algum desses pontos, <strong className="text-brand-primary">este ebook foi escrito para você.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 lg:py-20 bg-white border-y border-border-base">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-accent mb-4 block">
              A Solução
            </span>
            <h2 className="text-2xl lg:text-3xl font-display font-medium text-brand-primary mb-4">
              Um guia prático e humano para essa tempestade
            </h2>
            <p className="text-sm text-brand-secondary leading-relaxed">
              Este não é um livro de medicalês. É um guia escrito por quem entende o que acontece nos bastidores de uma casa onde o Alzheimer entrou sem ser convidado. Com linguagem simples, técnicas comprovadas e o poder da fé.
            </p>
          </div>

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

      {/* What You'll Learn */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-display font-medium text-brand-primary mb-8 text-center">
              O que você vai aprender
            </h2>
            <div className="bg-white border border-border-base p-6 lg:p-8 rounded-[5px]">
              <ol className="space-y-4">
                {chapters.map((chapter, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-brand-accent/10 flex items-center justify-center text-brand-accent text-sm font-medium shrink-0 rounded-[5px]">
                      {i + 1}
                    </span>
                    <span className="text-sm text-brand-secondary leading-relaxed pt-1">
                      {chapter}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-16 lg:py-20 bg-white border-y border-border-base">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-display font-medium text-brand-primary mb-8 text-center">
              Quem escreveu
            </h2>
            <div className="bg-bg-base border border-border-base p-6 lg:p-8 rounded-[5px]">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 bg-brand-primary/10 flex items-center justify-center text-brand-primary text-3xl font-display shrink-0 rounded-full">
                  PG
                </div>
                <div>
                  <h3 className="text-lg font-display font-medium text-brand-primary mb-2">
                    Pr. Francisco G. Alves
                  </h3>
                  <p className="text-sm text-brand-secondary leading-relaxed mb-4">
                    Pastor, cuidador e especialista em cuidados com idosos. Vivenciou na prática o desafio de cuidar de um familiar com Alzheimer e transformou essa experiência em conhecimento para ajudar outras famílias.
                  </p>
                  <p className="text-sm text-brand-secondary leading-relaxed">
                    &ldquo;Cuidar não é fácil, mas você não precisa fazer isso sozinho. Este ebook é o companheiro que eu gostava de ter tido no início da minha jornada.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-16 lg:py-20 bg-brand-primary text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-display font-medium mb-6">
              Invista na sua paz e na do seu pai
            </h2>
            <p className="text-white/80 mb-8">
              O ebook completo + garantia de 7 dias por apenas:
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
                Se não gostar do ebook, devolvemos 100% do seu dinheiro. Sem perguntas.
              </p>
            </div>
            <a
              href="https://pay.hotmart.com/D106798180B"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 bg-white text-brand-primary text-[15px] font-medium tracking-wide uppercase hover:bg-white/90 transition-colors rounded-[5px]"
            >
              COMPRAR AGORA - R$ 47
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
            O que dizem quem já comprou
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
              Cada dia sem saber como lidar é um dia mais difícil para você e seu pai. Comece agora a cuidar melhor.
            </p>
            <a
              href="https://pay.hotmart.com/D106798180B"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 bg-brand-primary text-white text-[15px] font-medium tracking-wide uppercase hover:bg-brand-primary/90 transition-colors rounded-[5px]"
            >
              COMPRAR EBOOK - R$ 47
            </a>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="pb-12 text-center">
        <Link href="/" className="text-sm text-brand-secondary hover:text-brand-primary transition-colors">
          ← Voltar para o Filho Cuidador
        </Link>
      </div>
    </main>
  );
}
