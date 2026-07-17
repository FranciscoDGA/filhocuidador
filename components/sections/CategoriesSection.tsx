import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Saúde Emocional",
    description: "Burnout, ansiedade, depressão",
    href: "/saude-emocional",
    gradient: "from-blue-500/20 to-cyan-500/20",
    icon: "💭",
  },
  {
    id: 2,
    name: "Cuidados Práticos",
    description: "Mobilidade, higiene, medicamentos",
    href: "/cuidados-praticos",
    gradient: "from-green-500/20 to-emerald-500/20",
    icon: "🏥",
  },
  {
    id: 3,
    name: "Jurídico",
    description: "Direitos, benefícios, documentação",
    href: "/orientacao-juridica",
    gradient: "from-amber-500/20 to-orange-500/20",
    icon: "⚖️",
  },
  {
    id: 4,
    name: "Doenças",
    description: "Alzheimer, Parkinson, AVC",
    href: "/doencas",
    gradient: "from-purple-500/20 to-pink-500/20",
    icon: "🧠",
  },
  {
    id: 5,
    name: "Família",
    description: "Dinâmica familiar, relacionamentos",
    href: "/familia",
    gradient: "from-red-500/20 to-rose-500/20",
    icon: "👨‍👩‍👧",
  },
];

export default function CategoriesSection() {
  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-4xl font-bold text-text-dark mb-4">
            Explore por Categoria
          </h2>
          <p className="text-text-light text-lg">Encontre conteúdo relevante para suas necessidades</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={category.href}>
              <div className="group cursor-pointer h-full">
                <div className={`p-6 bg-gradient-to-br ${category.gradient} rounded-2xl border border-white/50 hover:border-brand-primary/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 backdrop-blur-sm h-full flex flex-col`}>
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-display text-lg font-bold text-text-dark mb-2 group-hover:text-brand-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed flex-grow">
                    {category.description}
                  </p>
                </div>
                <div className="mt-3 flex items-center text-sm font-bold text-brand-primary group-hover:text-brand-secondary transition-colors">
                  Explorar
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
