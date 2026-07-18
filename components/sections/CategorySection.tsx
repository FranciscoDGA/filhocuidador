import Link from "next/link";
import Image from "next/image";

interface CategorySectionProps {
  title: string;
  categorySlug: string;
  layout?: "light" | "dark";
}

export default function CategorySection({ title, categorySlug, layout = "light" }: CategorySectionProps) {
  const isDark = layout === "dark";
  
  return (
    <div className={isDark ? "bg-black text-white p-8 md:p-12 -mx-4 sm:-mx-6 lg:-mx-8 rounded-none md:rounded-xl" : ""}>
      <div className="mb-8 flex items-center gap-4">
        <h2 className={`text-2xl md:text-3xl font-display font-bold ${isDark ? 'text-white' : 'text-gray-900'} tracking-wide`}>
          {title}
        </h2>
        <Link href={`/categorias/${categorySlug}`} className={`text-sm ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-black'} flex items-center gap-1 transition`}>
          Ver todos
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Article 1 */}
        <article className="group">
          <Link href="#">
            <div className="relative w-full aspect-[4/3] bg-gray-100 mb-4 overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=500&auto=format&fit=crop" alt="Article img" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h4 className={`text-lg font-display font-bold leading-tight mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Organizando a Rotina: Dicas práticas para não enlouquecer
            </h4>
            <p className={`text-sm font-serif ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Um guia passo a passo para estruturar o dia a dia do cuidado sem abrir mão do seu tempo.
            </p>
          </Link>
        </article>

        {/* Article 2 */}
        <article className="group">
          <Link href="#">
            <div className="relative w-full aspect-[4/3] bg-gray-100 mb-4 overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1527613426496-22879509df63?w=500&auto=format&fit=crop" alt="Article img" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h4 className={`text-lg font-display font-bold leading-tight mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Alimentação do idoso com Alzheimer: Desafios comuns
            </h4>
            <p className={`text-sm font-serif ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Como lidar com a recusa alimentar e garantir que eles recebam os nutrientes necessários.
            </p>
          </Link>
        </article>

        {/* Article 3 */}
        <article className="group">
          <Link href="#">
            <div className="relative w-full aspect-[4/3] bg-gray-100 mb-4 overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=500&auto=format&fit=crop" alt="Article img" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h4 className={`text-lg font-display font-bold leading-tight mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Delegando tarefas: Como pedir ajuda a outros familiares
            </h4>
            <p className={`text-sm font-serif ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Estratégias de comunicação para evitar atritos e dividir a responsabilidade.
            </p>
          </Link>
        </article>

        {/* Article 4 */}
        <article className="group">
          <Link href="#">
            <div className="relative w-full aspect-[4/3] bg-gray-100 mb-4 overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&auto=format&fit=crop" alt="Article img" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h4 className={`text-lg font-display font-bold leading-tight mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              O que fazer quando eles não querem tomar banho?
            </h4>
            <p className={`text-sm font-serif ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Entenda os motivos por trás dessa recusa e como contornar a situação com empatia.
            </p>
          </Link>
        </article>
      </div>
    </div>
  );
}
