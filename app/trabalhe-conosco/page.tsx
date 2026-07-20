"use client";

import Link from "next/link";
import { useState } from "react";

const partnerTypes = [
  {
    icon: "🏥",
    title: "Clínicas de Home Care",
    description: "Indicamos clínicas especializadas para leitores que precisam de cuidados profissionais em domicílio.",
    commission: "R$ 200–500 por lead",
    details: [
      "Leitores qualificados com necessidade real",
      "Levantamento de dados completo antes da indicação",
      "Relatório mensal de leads enviados",
      "Destaque na página de parceiros",
    ],
  },
  {
    icon: "⚖️",
    title: "Advogados Especializados",
    description: "Indicamos advogados para interdição, procuração, direitos do idoso e questões jurídicas.",
    commission: "R$ 100–300 por consulta",
    details: [
      "Público com demanda jurídica urgente",
      "Artigos educativos que geram autoridade",
      "Formulário de contato direto no site",
      "Menção em newsletters semanais",
    ],
  },
  {
    icon: "🩺",
    title: "Planos de Saúde",
    description: "Indicamos planos de saúde para idosos com coberturas adequadas.",
    commission: "R$ 50–200 por cadastro",
    details: [
      "Comparativo de planos na página de parceiros",
      "Artigo patrocinado sobre planos para idosos",
      "Links de afiliados nos artigos relevantes",
      "Promoção em redes sociais",
    ],
  },
  {
    icon: "💊",
    title: "Farmácias e Produtos",
    description: "Indicamos farmácias e produtos para cuidados com idosos (fraldas, medicamentos, equipamentos).",
    commission: "5–15% por venda",
    details: [
      "Links de afiliados em artigos de produto",
      "Comparativos e reviews de produtos",
      "Cupons de desconto exclusivos para leitores",
      "Artigos patrocinados sobre produtos",
    ],
  },
  {
    icon: "🛡️",
    title: "Seguros para Idosos",
    description: "Indicamos seguros de vida e saúde adequados para a faixa etária.",
    commission: "R$ 100–300 por lead",
    details: [
      "Artigo educativo sobre seguros para idosos",
      "Calculadora de custos no site",
      "Formulário de cotação integrado",
      "Newsletter segmentada para leads",
    ],
  },
];

const stats = [
  { number: "62", label: "Artigos publicados" },
  { number: "7", label: "Especialidades cobertas" },
  { number: "5", label: "Clusters temáticos" },
  { number: "100%", label: "Foco em cuidadores" },
];

const testimonials = [
  {
    name: "Em breve",
    role: "Depoimentos de parceiros",
    text: "Assim que firmarmos nossas primeiras parcerias, os depoimentos aparecerão aqui. Seja o primeiro a transformar a experiência em resultado.",
  },
];

export default function TrabalheConoscoPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          data: {
            name: formData.get("name"),
            email: formData.get("email"),
            subject: `Parceria: ${formData.get("partnerType")} - ${formData.get("company")}`,
            message: formData.get("message"),
          },
        }),
      });

      if (!res.ok) throw new Error("Erro ao enviar");

      setSubmitted(true);
      form.reset();
    } catch {
      setError("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-[11px] text-brand-secondary/50">
          <Link href="/" className="hover:text-brand-primary transition">Início</Link>
          <span>/</span>
          <span className="text-brand-primary">Trabalhe Conosco</span>
        </div>

        {/* Hero */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary/60 mb-4 block">
            Parcerias B2B
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-brand-primary mb-6 leading-tight">
            Trabalhe Conosco
          </h1>
          <p className="text-base text-brand-secondary leading-relaxed mb-8">
            Seja um parceiro do <strong className="text-brand-primary">Filhos Cuidadores</strong> e alcance milhares de filhos cuidadores que buscam profissionais e serviços de qualidade para seus pais.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl lg:text-3xl font-display font-medium text-brand-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-[11px] text-brand-secondary/50 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Partner */}
        <div className="mb-16 lg:mb-20">
          <div className="bg-white border border-border-base p-8 lg:p-12 rounded-[5px]">
            <h2 className="text-xl lg:text-2xl font-display font-medium text-brand-primary mb-8">
              Por que ser nosso parceiro?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-0.5">✓</span>
                  <div>
                    <h3 className="text-sm font-medium text-brand-primary mb-1">Público Qualificado</h3>
                    <p className="text-xs text-brand-secondary/60">Nossos leitores são filhos cuidadores que buscam soluções reais para seus pais.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-0.5">✓</span>
                  <div>
                    <h3 className="text-sm font-medium text-brand-primary mb-1">Tráfego Orgânico</h3>
                    <p className="text-xs text-brand-secondary/60">Conteúdo otimizado para Google. Leitores que chegam pelo SEO têm intenção real de busca.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-0.5">✓</span>
                  <div>
                    <h3 className="text-sm font-medium text-brand-primary mb-1">Autoridade</h3>
                    <p className="text-xs text-brand-secondary/60">Portal em crescimento com conteúdo revisado por especialistas e SEO otimizado para o nicho.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-0.5">✓</span>
                  <div>
                    <h3 className="text-sm font-medium text-brand-primary mb-1">Público Engajado</h3>
                    <p className="text-xs text-brand-secondary/60">Leitores que chegam buscando soluções reais — filhos cuidadores com necessidade imediata de ajuda.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Types */}
        <div className="mb-16 lg:mb-20">
          <h2 className="text-xl lg:text-2xl font-display font-medium text-brand-primary mb-8">
            Tipos de Parceria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerTypes.map((partner) => (
              <div key={partner.title} className="bg-white border border-border-base p-6 rounded-[5px]">
                <div className="text-3xl mb-4">{partner.icon}</div>
                <h3 className="text-base font-display font-medium text-brand-primary mb-2">
                  {partner.title}
                </h3>
                <p className="text-xs text-brand-secondary/60 mb-4 leading-relaxed">
                  {partner.description}
                </p>
                <div className="bg-brand-accent/10 px-4 py-2 mb-4 rounded-[5px]">
                  <span className="text-sm font-medium text-brand-accent">{partner.commission}</span>
                </div>
                <ul className="space-y-2">
                  {partner.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-xs text-brand-secondary/60">
                      <span className="text-brand-accent mt-0.5">→</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16 lg:mb-20">
          <h2 className="text-xl lg:text-2xl font-display font-medium text-brand-primary mb-8">
            O que dizem nossos parceiros
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-border-base p-6 rounded-[5px]">
                <p className="text-sm text-brand-secondary leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-medium text-brand-primary">{t.name}</p>
                  <p className="text-xs text-brand-secondary/40">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Packages */}
        <div className="mb-16 lg:mb-20">
          <h2 className="text-xl lg:text-2xl font-display font-medium text-brand-primary mb-8">
            Pacotes de Publicidade
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Básico",
                price: "R$ 1.000",
                period: "/mês",
                features: [
                  "1 banner no header (728x90)",
                  "1 menção em newsletter",
                  "1 post no Instagram",
                ],
              },
              {
                name: "Premium",
                price: "R$ 3.000",
                period: "/mês",
                features: [
                  "1 banner header + 1 sidebar",
                  "2 menções em newsletter",
                  "2 posts + 1 Reel Instagram",
                  "1 artigo patrocinado",
                ],
                popular: true,
              },
              {
                name: "Gold",
                price: "R$ 5.000",
                period: "/mês",
                features: [
                  "2 banners (header + sidebar)",
                  "4 menções em newsletter",
                  "4 posts + 2 Reels Instagram",
                  "2 artigos patrocinados",
                  "1 live com especialista",
                ],
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`bg-white border p-6 rounded-[5px] ${
                  pkg.popular ? "border-brand-accent" : "border-border-base"
                }`}
              >
                {pkg.popular && (
                  <span className="text-[10px] font-medium tracking-wider uppercase text-brand-accent mb-4 block">
                    Mais Popular
                  </span>
                )}
                <h3 className="text-lg font-display font-medium text-brand-primary mb-2">
                  {pkg.name}
                </h3>
                <div className="mb-6">
                  <span className="text-3xl font-display font-medium text-brand-primary">{pkg.price}</span>
                  <span className="text-sm text-brand-secondary/40">{pkg.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs text-brand-secondary/60">
                      <span className="text-brand-accent mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contato"
                  className={`block text-center px-6 py-3 text-[13px] font-medium tracking-wide uppercase transition-colors rounded-[5px] ${
                    pkg.popular
                      ? "bg-brand-primary text-white hover:bg-brand-primary/90"
                      : "border border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-white"
                  }`}
                >
                  Começar Agora
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div id="contato" className="mb-16 lg:mb-20">
          <div className="bg-white border border-border-base p-8 lg:p-12 rounded-[5px]">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-xl lg:text-2xl font-display font-medium text-brand-primary mb-4 text-center">
                Entre em Contato
              </h2>
              <p className="text-sm text-brand-secondary text-center mb-8">
                Preencha o formulário abaixo e entraremos em contato em até 24 horas.
              </p>

              {submitted && (
                <div className="bg-green-50 border border-green-200 p-5 mb-6">
                  <p className="text-sm text-green-800">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </p>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border border-red-200 p-5 mb-6">
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-medium text-brand-secondary/60 mb-2 uppercase tracking-wider">
                      Nome
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-bg-base border border-border-base text-sm text-brand-primary focus:outline-none focus:border-brand-accent transition-colors rounded-[5px]"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-brand-secondary/60 mb-2 uppercase tracking-wider">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="w-full px-4 py-3 bg-bg-base border border-border-base text-sm text-brand-primary focus:outline-none focus:border-brand-accent transition-colors rounded-[5px]"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-medium text-brand-secondary/60 mb-2 uppercase tracking-wider">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-bg-base border border-border-base text-sm text-brand-primary focus:outline-none focus:border-brand-accent transition-colors rounded-[5px]"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-brand-secondary/60 mb-2 uppercase tracking-wider">
                      Tipo de Parceria
                    </label>
                    <select
                      name="partnerType"
                      className="w-full px-4 py-3 bg-bg-base border border-border-base text-sm text-brand-primary focus:outline-none focus:border-brand-accent transition-colors rounded-[5px]"
                    >
                      <option>Clínica de Home Care</option>
                      <option>Advogado</option>
                      <option>Plano de Saúde</option>
                      <option>Farmácia/Produtos</option>
                      <option>Seguro</option>
                      <option>Publicidade</option>
                      <option>Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-brand-secondary/60 mb-2 uppercase tracking-wider">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-bg-base border border-border-base text-sm text-brand-primary focus:outline-none focus:border-brand-accent transition-colors resize-none rounded-[5px]"
                    placeholder="Conte mais sobre seu interesse em ser parceiro..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-brand-primary text-white text-[13px] font-medium tracking-wide uppercase hover:bg-brand-primary/90 transition-colors rounded-[5px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Enviando..." : "Enviar Mensagem"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16 lg:mb-20">
          <h2 className="text-xl lg:text-2xl font-display font-medium text-brand-primary mb-8">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Qual o perfil do público do Filhos Cuidadores?",
                a: "Nossos leitores são filhos (35-55 anos) que cuidam de pais com Alzheimer, Parkinson, AVC ou outras demências. Buscam soluções práticas e profissionais de confiança.",
              },
              {
                q: "Como funciona a medição de leads?",
                a: "Utilizamos formulários de contato, tracking de clicks em links de afiliados e UTM parameters. Você recebe um relatório mensal com todos os leads gerados.",
              },
              {
                q: "Qual o prazo para começar a receber leads?",
                a: "Após a aprovação da parceria, começamos a divulgação imediatamente. O volume de leads cresce conforme o site cresce no Google.",
              },
              {
                q: "Posso cancelar a qualquer momento?",
                a: "Sim. Não trabalhamos com fidelidade. Você pode cancelar a parceria a qualquer momento com aviso prévio de 30 dias.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white border border-border-base p-6 rounded-[5px]">
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

        {/* CTA */}
        <div className="text-center">
          <div className="bg-brand-primary/[0.03] border border-border-base p-8 lg:p-12 rounded-[5px]">
            <h2 className="text-xl lg:text-2xl font-display font-medium text-brand-primary mb-4">
              Pronto para ser nosso parceiro?
            </h2>
            <p className="text-sm text-brand-secondary mb-6 max-w-lg mx-auto">
              Seja um dos primeiros parceiros do Filhos Cuidadores e cresça conosco.
            </p>
            <Link
              href="#contato"
              className="inline-block px-8 py-3 bg-brand-primary text-white text-[13px] font-medium tracking-wide uppercase hover:bg-brand-primary/90 transition-colors rounded-[5px]"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
