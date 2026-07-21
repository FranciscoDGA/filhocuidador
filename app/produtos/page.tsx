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
    cta: "Em Breve",
    href: "#",
    badge: "Em Breve",
    image: "/images/products/Guia Juridico do Cuidador.png",
    features: ["Modelo de procuração", "Guia de interdição", "Direitos previdenciários", "Atualizações gratuitas"],
    disabled: true,
  },
  {
    title: "Curso: Agressividade em Alzheimer",
    description: "10 módulos com técnicas práticas para lidar com episódios de agressividade e confusão.",
    price: "R$ 297",
    cta: "Em Breve",
    href: "#",
    badge: "Em Breve",
    image: "/images/products/Curso Online Agressividade em Alzheimer.png",
    features: ["10 módulos em vídeo", "Suporte por email", "Certificado", "Garantia de 7 dias"],
    disabled: true,
  },
  {
    title: "Kit do Cuidador Completo",
    description: "Guia + templates + checklists + acesso ao grupo exclusivo de cuidadores.",
    price: "R$ 197",
    cta: "Em Breve",
    href: "#",
    badge: "Em Breve",
    image: "/images/products/Kit Cuidador Completo.png",
    features: ["Guia do cuidador", "Templates editáveis", "Checklists práticos", "Grupo exclusivo"],
    disabled: true,
  },
];

const services = [
  {
    title: "Consultoria Jurídica Online",
    description: "30 minutos com advogado especializado em direito do idoso. Tire suas dúvidas sobre procuração, interdição e benefícios.",
    price: "R$ 200",
    cta: "Em Breve",
    href: "#",
    disabled: true,
  },
  {
    title: "Consulta com Geriatra",
    description: "30 minutos com geriatra para esclarecer dúvidas sobre o diagnóstico e tratamento do seu familiar.",
    price: "R$ 300",
    cta: "Em Breve",
    href: "#",
    disabled: true,
  },
];

const affiliates = [
  {
    category: "Fraldas Geriátricas",
    items: [
      { name: "Tena Slip", description: "Fralda descartável com alta absorção", link: "https://meli.la/2rBa7S5" },
      { name: "Bigfral", description: "Fralda econômica para uso diário", link: "https://meli.la/1rfC7h6" },
      { name: "Fralda Noturna Extra", description: "Proteção prolongada para a noite", link: "#" },
      { name: "Fralda Descartável Adulto", description: "Prática e confortável para uso diurno", link: "#" },
    ],
  },
  {
    category: "Mobilidade",
    items: [
      { name: "Cadeira de Rodas Dobrável", description: "Manual, leve e fácil de transportar", link: "https://meli.la/2CXpzqG" },
      { name: "Andador com Rodas", description: "Dobrável e estável para segurança", link: "https://meli.la/2HpLJTt" },
      { name: "Barras de Apoio", description: "Fixação na parede para banheiro e escadas", link: "#" },
      { name: "Cadeira de Banho", description: "Banho seguro para idosos com mobilidade reduzida", link: "#" },
    ],
  },
  {
    category: "Segurança",
    items: [
      { name: "Botão de Pânico SOS", description: "Emergência portátil 24h para idosos", link: "https://meli.la/2TwQhQq" },
      { name: "Câmera de Monitoramento", description: "Acompanhamento à distância do idoso", link: "https://meli.la/1JJ7fTo" },
      { name: "Sensor de Porta", description: "Alerta quando portas são abertas", link: "#" },
      { name: "Tapete Antiderrapante", description: "Prevenção de quedas no banheiro", link: "#" },
    ],
  },
  {
    category: "Higiene e Cuidados",
    items: [
      { name: "Sabonete Antisséptico", description: "Higiene suave para pele sensível", link: "#" },
      { name: "Creme para Assaduras", description: "Proteção e alívio para pele irritada", link: "#" },
      { name: "Shampoo Seco", description: "Higiene sem necessidade de água", link: "#" },
      { name: "Luvas Descartáveis", description: "Para procedimentos de higiene e medicação", link: "#" },
    ],
  },
  {
    category: "Alimentação",
    items: [
      { name: "Espessante para Líquidos", description: "Engolir líquidos com segurança (disfagia)", link: "#" },
      { name: "Panela Elétrica", description: "Cozinha fácil e segura para o cuidador", link: "#" },
      { name: "Talheres Adaptados", description: "Empunhadura grossa para tremores", link: "#" },
      { name: "Copo com Tampa", description: "Evita derramamentos e facilita a hidratação", link: "#" },
    ],
  },
  {
    category: "Conforto e Bem-estar",
    items: [
      { name: "Colchão Anti-escaras", description: "Distribuição de pressão para imobilizados", link: "#" },
      { name: "Travesseiro Ergonômico", description: "Suporte cervical e postural", link: "#" },
      { name: "Manta Térmica", description: "Aquecimento sem risco de queimadura", link: "#" },
      { name: "Calçado Adaptado", description: "Velcro e solado antiderrapante", link: "#" },
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
            <p className="text-sm text-brand-secondary/60 mt-2">
              Estamos preparando estes conteúdos. Cadastre-se na newsletter para ser o primeiro a saber quando lançarmos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.title} className="bg-white border border-border-base flex flex-col rounded-[5px] overflow-hidden opacity-80">
                <div className="relative aspect-[4/3] bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover grayscale-[30%]"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-medium tracking-wider uppercase bg-gray-500 text-white px-3 py-1">
                    {product.badge}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
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
                  <span className="block text-center px-6 py-3 bg-gray-300 text-gray-500 text-[13px] font-medium tracking-wide uppercase cursor-not-allowed rounded-[5px]">
                    {product.cta}
                  </span>
                </div>
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
            <p className="text-sm text-brand-secondary/60 mt-2">
              Estamos preparando estes serviços. Em breve disponíveis para agendamento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white border border-border-base p-6 rounded-[5px] opacity-80">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-sm font-display font-medium text-brand-primary">
                    {service.title}
                  </h3>
                  <span className="text-[10px] font-medium tracking-wider uppercase bg-gray-500 text-white px-2 py-0.5">
                    Em Breve
                  </span>
                </div>
                <p className="text-xs text-brand-secondary/60 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-base font-display font-medium text-brand-primary">
                    {service.price}
                  </span>
                  <span className="text-[11px] font-medium tracking-wide uppercase text-gray-400 border border-gray-200 px-5 py-2 cursor-not-allowed rounded-[5px]">
                    {service.cta}
                  </span>
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
              Produtos que testamos e aprovamos para facilitar o cuidado. Clique no produto e confira no Mercado Livre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {affiliates.map((category) => (
              <div key={category.category} className="bg-white border border-border-base p-6 rounded-[5px]">
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
