import Link from "next/link";
import { HeartPulse, Home, Scale, Brain, Users } from "lucide-react";

export default function CategoryGridSection() {
  const categories = [
    {
      name: "Saúde Emocional",
      icon: <HeartPulse className="w-5 h-5" />,
      href: "/categorias/saude-emocional",
    },
    {
      name: "Cuidados Práticos",
      icon: <Home className="w-5 h-5" />,
      href: "/categorias/cuidados-praticos",
    },
    {
      name: "Orientação Jurídica",
      icon: <Scale className="w-5 h-5" />,
      href: "/categorias/orientacao-juridica",
    },
    {
      name: "Entendendo a Doença",
      icon: <Brain className="w-5 h-5" />,
      href: "/categorias/entendendo-a-doenca",
    },
    {
      name: "Família e Conflitos",
      icon: <Users className="w-5 h-5" />,
      href: "/categorias/familia-e-conflitos",
    },
  ];

  return (
    <section className="pt-8 pb-16 bg-bg-base">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {categories.map((cat, index) => (
            <Link
              key={index}
              href={cat.href}
              className="group flex flex-col items-center justify-center p-5 border border-border-base hover:border-brand-primary/20 transition-all duration-300 text-center"
            >
              <div className="w-10 h-10 border border-border-base group-hover:border-brand-primary/30 flex items-center justify-center mb-4 text-brand-secondary group-hover:text-brand-primary transition-colors">
                {cat.icon}
              </div>
              <h3 className="text-xs font-medium text-brand-primary">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
