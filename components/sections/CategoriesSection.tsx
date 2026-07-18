import Link from "next/link";
import { HeartPulse, Home, Scale, Brain, Users } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Saúde Emocional",
    description: "Burnout, ansiedade, depressão",
    href: "/saude-emocional",
    icon: <HeartPulse className="w-5 h-5" />,
  },
  {
    id: 2,
    name: "Cuidados Práticos",
    description: "Mobilidade, higiene, medicamentos",
    href: "/cuidados-praticos",
    icon: <Home className="w-5 h-5" />,
  },
  {
    id: 3,
    name: "Jurídico",
    description: "Direitos, benefícios, documentação",
    href: "/orientacao-juridica",
    icon: <Scale className="w-5 h-5" />,
  },
  {
    id: 4,
    name: "Doenças",
    description: "Alzheimer, Parkinson, AVC",
    href: "/doencas",
    icon: <Brain className="w-5 h-5" />,
  },
  {
    id: 5,
    name: "Família",
    description: "Dinâmica familiar, relacionamentos",
    href: "/familia",
    icon: <Users className="w-5 h-5" />,
  },
];

export default function CategoriesSection() {
  return (
    <section className="w-full py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-bg-base border-t border-border-base">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-14">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary mb-4 block">
            Conteúdo
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-brand-primary">
            Explore por Categoria
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link key={category.id} href={category.href}>
              <div className="group cursor-pointer p-6 border border-border-base hover:border-brand-primary/20 transition-all duration-300">
                <div className="w-10 h-10 border border-border-base group-hover:border-brand-primary/30 flex items-center justify-center mb-5 text-brand-secondary group-hover:text-brand-primary transition-colors">
                  {category.icon}
                </div>
                <h3 className="font-display text-sm font-medium text-brand-primary mb-2">
                  {category.name}
                </h3>
                <p className="text-xs text-brand-secondary/60 leading-relaxed">
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
