import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Saúde Emocional",
    description: "Burnout, ansiedade, depressão",
    href: "/saude-emocional",
  },
  {
    id: 2,
    name: "Cuidados Práticos",
    description: "Mobilidade, higiene, medicamentos",
    href: "/cuidados-praticos",
  },
  {
    id: 3,
    name: "Jurídico",
    description: "Direitos, benefícios, documentação",
    href: "/orientacao-juridica",
  },
  {
    id: 4,
    name: "Doenças",
    description: "Alzheimer, Parkinson, AVC",
    href: "/doencas",
  },
  {
    id: 5,
    name: "Família",
    description: "Dinâmica familiar, relacionamentos",
    href: "/familia",
  },
];

export default function CategoriesSection() {
  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={category.href}>
              <div className="group cursor-pointer">
                <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
                  <h3 className="font-display text-lg font-semibold text-text-dark mb-2 group-hover:text-text-dark/80 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-text-dark/60 leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <div className="mt-3 flex items-center text-sm font-semibold text-text-dark/70 group-hover:text-text-dark transition-colors">
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
