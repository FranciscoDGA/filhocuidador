import Link from "next/link";
import { HeartPulse, Home, Scale, Brain, Users } from "lucide-react";

export default function CategoryGridSection() {
  const categories = [
    {
      name: "Saúde Emocional",
      icon: <HeartPulse className="w-6 h-6" />,
      href: "/categorias/saude-emocional",
    },
    {
      name: "Cuidados Práticos",
      icon: <Home className="w-6 h-6" />,
      href: "/categorias/cuidados-praticos",
    },
    {
      name: "Orientação Jurídica",
      icon: <Scale className="w-6 h-6" />,
      href: "/categorias/orientacao-juridica",
    },
    {
      name: "Entendendo a Doença",
      icon: <Brain className="w-6 h-6" />,
      href: "/categorias/entendendo-a-doenca",
    },
    {
      name: "Família e Conflitos",
      icon: <Users className="w-6 h-6" />,
      href: "/categorias/familia-e-conflitos",
    },
  ];

  return (
    <section className="py-20 bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, index) => (
            <Link
              key={index}
              href={cat.href}
              className="group flex flex-col items-center justify-center p-6 bg-white border border-border-base rounded-2xl hover:shadow-lg hover:-translate-y-1 hover:border-[#C47B5A] transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                {cat.icon}
              </div>
              <h3 className="text-sm font-semibold text-text-base">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
