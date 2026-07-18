import Link from "next/link";
import Image from "next/image";

export default function FeaturedNewsSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      {/* Main Featured Article (Left 2/3) */}
      <div className="flex-1 lg:w-2/3">
        <div className="mb-6 flex items-center gap-2">
          <h2 className="text-xl font-display font-bold text-gray-900 tracking-wide">Destaque</h2>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>
        
        <article className="group cursor-pointer">
          <Link href="/artigo-destaque">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3 block">Saúde Mental</span>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight mb-4 group-hover:text-gray-700 transition">
              Como Lidar com a Carga Emocional de Cuidar dos Pais Idosos
            </h3>
            <div className="flex items-center gap-4 text-xs text-gray-500 mb-6 font-medium">
              <span>Janeiro 6, 2026</span>
              <span>15 comentários</span>
            </div>
            <div className="relative w-full aspect-video bg-gray-100 mb-6">
              <Image 
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop"
                alt="Cuidador abraçando idoso"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="text-gray-700 font-serif text-lg leading-relaxed md:w-4/5">
              No rápido e expansivo mundo moderno, equilibrar sua própria vida com as demandas de cuidar de um ente querido com demência pode ser um dos maiores desafios que você enfrentará. Descubra estratégias práticas para não perder a si mesmo neste processo.
            </p>
          </Link>
        </article>
      </div>

      {/* Sidebar (Right 1/3) */}
      <div className="lg:w-1/3">
        {/* Tópicos */}
        <div className="mb-10">
          <div className="mb-6 flex items-center gap-2">
            <h2 className="text-xl font-display font-bold text-gray-900 tracking-wide">Tópicos</h2>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/topicos/burocracia" className="relative h-24 bg-gray-100 group overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&auto=format&fit=crop" alt="Burocracia" fill className="object-cover opacity-80 group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <span className="text-white font-bold text-sm uppercase tracking-wide">Burocracia</span>
              </div>
            </Link>
            <Link href="/topicos/alzheimer" className="relative h-24 bg-gray-100 group overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&auto=format&fit=crop" alt="Alzheimer" fill className="object-cover opacity-80 group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <span className="text-white font-bold text-sm uppercase tracking-wide">Alzheimer</span>
              </div>
            </Link>
            <Link href="/topicos/adaptacoes" className="relative h-24 bg-gray-100 group overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1502759683299-cdcd6974244f?w=500&auto=format&fit=crop" alt="Adaptações" fill className="object-cover opacity-80 group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <span className="text-white font-bold text-sm uppercase tracking-wide">Adaptações</span>
              </div>
            </Link>
            <Link href="/topicos/autocuidado" className="relative h-24 bg-gray-100 group overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&auto=format&fit=crop" alt="Autocuidado" fill className="object-cover opacity-80 group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <span className="text-white font-bold text-sm uppercase tracking-wide">Autocuidado</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Em Alta */}
        <div>
          <div className="mb-6 flex items-center gap-2">
            <h2 className="text-xl font-display font-bold text-gray-900 tracking-wide">Em Alta</h2>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          <div className="flex flex-col gap-6">
            <article>
              <Link href="#" className="group">
                <h4 className="text-lg font-display font-bold text-gray-900 leading-tight group-hover:text-gray-600 transition mb-2">
                  Direitos do Idoso: O que você precisa saber sobre benefícios
                </h4>
                <p className="text-sm text-gray-500 font-serif">A burocracia não precisa ser um obstáculo intransponível...</p>
              </Link>
            </article>
            <article>
              <Link href="#" className="group">
                <h4 className="text-lg font-display font-bold text-gray-900 leading-tight group-hover:text-gray-600 transition mb-2">
                  5 dicas para adaptar o banheiro e prevenir quedas
                </h4>
                <p className="text-sm text-gray-500 font-serif">Pequenas mudanças podem garantir a segurança do seu pai...</p>
              </Link>
            </article>
            <article>
              <Link href="#" className="group">
                <h4 className="text-lg font-display font-bold text-gray-900 leading-tight group-hover:text-gray-600 transition mb-2">
                  Quando a culpa bate à porta: Reflexões de uma filha cuidadora
                </h4>
                <p className="text-sm text-gray-500 font-serif">Uma crônica sincera sobre os dias mais difíceis...</p>
              </Link>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
