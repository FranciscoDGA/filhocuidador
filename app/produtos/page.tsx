import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produtos e Serviços",
  description: "Guias, cursos e consultorias para filhos que cuidam de pais com demência. Economize tempo e dinheiro com conteúdo especializado.",
};

const products = [
  {
    title: "Guia Jurídico do Cuidador",
    description: "Modelos de procuração, interdição, direitos do cuidador e passo a passo para cada situação jurídica.",
    price: "R$ 97",
    cta: "Baixar Agora",
    href: "#",
    badge: "Mais Vendido",
    features: ["Modelo de procuração", "Guia de interdição", "Direitos previdenciários", "Atualizações gratuitas"],
  },
  {
    title: "Curso: Agressividade em Alzheimer",
    description: "10 módulos com técnicas práticas para lidar com episódios de agressividade e confusão.",
    price: "R$ 297",
    cta: "Matricular-se",
    href: "#",
    badge: "Novo",
    features: ["10 módulos em vídeo", "Suporte por email", "Certificado", "Garantia de 7 dias"],
  },
  {
    title: "Kit do Cuidador Completo",
    description: "Guia + templates + checklists + acesso ao grupo exclusivo de cuidadores.",
    price: "R$ 197",
    cta: "Adquirir Kit",
    href: "#",
    badge: "Completo",
    features: ["Guia do cuidador", "Templates editáveis", "Checklists práticos", "Grupo exclusivo"],
  },
];

const services = [
  {
    title: "Consultoria Jurídica Online",
    description: "30 minutos com advogado especializado em direito do idoso. Tire suas dúvidas sobre procuração, interdição e benefícios.",
    price: "R$ 200",
    cta: "Agendar",
    href: "#",
  },
  {
    title: "Consulta com Geriatra",
    description: "30 minutos com geriatra para esclarecer dúvidas sobre o diagnóstico e tratamento do seu familiar.",
    price: "R$ 300",
    cta: "Agendar",
    href: "#",
  },
];

const affiliates = [
  {
    category: "Fraldas Geriátricas",
    items: [
      { name: "Tena Slip", description: "Fralda descartável com alta absorção", link: "#" },
      { name: "Prev궨", description: "Fralda econômica para uso diário", link: "#" },
    ],
  },
  {
    category: "Mobilidade",
    items: [
      { name: "Cadeira de Rodas Leve", description: "Dobrável e fácil de transportar", link: "#" },
      { name: "Andador com Rodas", description: "Estável e ajustável", link: "#" },
    ],
  },
  {
    category: "Segurança",
    items: [
      { name: "Monitor de Movimento", description: "Alerta quando o idoso se levanta", link: "#" },
      { name: "Botão de Emergência", description: "SOS portátil 24h", link: "#" },
    ],
  },
];

export default function ProdutosPage() {
  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-[11px] text-brand-secondary/50">
          <Link href="/" className="hover:text-brand-primary transition">Início</Link>
          <span>/</span>
          <span className="text-brand-primary">Produtos e Serviços</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary/60 mb-4 block">
            Loja
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-brand-primary mb-6 leading-tight">
            Produtos e Serviços
          </h1>
          <p className="text-base text-brand-secondary leading-relaxed">
            Conteúdo especializado para facilitar sua jornada como cuidador. Guias práticos, cursos e consultoria com especialistas.
          </p>
        </div>

        {/* Products */}
        <div className="mb-16 lg:mb-20">
          <div className="mb-8">
            <h2 className="text-xl lg:text-2xl font-display font-medium text-brand-primary">
              Guias e Cursos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.title} className="bg-white border border-border-base p-6 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-medium tracking-wider uppercase text-brand-secondary/40">
                    {product.badge}
                  </span>
                  <span className="text-lg font-display font-medium text-brand-primary">
                    {product.price}
                  </span>
                </div>
                <h3 className="text-base font-display font-medium text-brand-primary mb-2">
                  {product.title}
                </h3>
                <p className="text-xs text-brand-secondary/60 leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-brand-secondary/60">
                      <svg className="w-3 h-3 text-brand-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={product.href}
                  className="block text-center px-6 py-3 bg-brand-primary text-white text-[13px] font-medium tracking-wide uppercase hover:bg-brand-primary/90 transition-colors"
                >
                  {product.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-16 lg:mb-20">
          <div className="mb-8">
            <h2 className="text-xl lg:text-2xl font-display font-medium text-brand-primary">
              Consultoria
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white border border-border-base p-6">
                <h3 className="text-sm font-display font-medium text-brand-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-brand-secondary/60 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-base font-display font-medium text-brand-primary">
                    {service.price}
                  </span>
                  <Link
                    href={service.href}
                    className="text-[11px] font-medium tracking-wide uppercase text-brand-primary border border-brand-primary/20 hover:bg-brand-primary hover:text-white px-5 py-2 transition-all duration-300"
                  >
                    {service.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Affiliates */}
        <div>
          <div className="mb-8">
            <h2 className="text-xl lg:text-2xl font-display font-medium text-brand-primary">
              Produtos Recomendados
            </h2>
            <p className="text-sm text-brand-secondary mt-2">
              Produtos que testamos e aprovamos para facilitar o cuidado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {affiliates.map((category) => (
              <div key={category.category} className="bg-white border border-border-base p-6">
                <h3 className="text-xs font-medium tracking-wider uppercase text-brand-secondary/40 mb-4">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <h4 className="text-sm font-display font-medium text-brand-primary group-hover:text-brand-secondary transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-brand-secondary/50">
                        {item.description}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
