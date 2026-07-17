import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Saúde Emocional",
    description: "Burnout, ansiedade, depressão e autocuidado",
    href: "/saude-emocional",
    icon: "💭",
  },
  {
    id: 2,
    name: "Cuidados Práticos",
    description: "Mobilidade, higiene, medicamentos e segurança",
    href: "/cuidados-praticos",
    icon: "🏥",
  },
  {
    id: 3,
    name: "Orientação Jurídica",
    description: "Direitos, benefícios e documentação",
    href: "/orientacao-juridica",
    icon: "⚖️",
  },
  {
    id: 4,
    name: "Entendendo a Doença",
    description: "Alzheimer, Parkinson, AVC e outras condições",
    href: "/doencas",
    icon: "🧠",
  },
  {
    id: 5,
    name: "Família e Conflitos",
    description: "Dinâmica familiar, irmãos e relacionamentos",
    href: "/familia",
    icon: "👨‍👩‍👧",
  },
];

export default function CategoriesSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={category.href}>
              <div className="h-full p-6 bg-cream rounded-lg border border-border-light hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-display text-xl font-bold text-text-dark mb-2 group-hover:text-brand-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-text-dark/70 leading-relaxed">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
