export default function HeroSection() {
  return (
    <section className="w-full pt-16 pb-12 bg-white">
      {/* Massive Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tight leading-none border-b-2 border-gray-100 pb-8">
          Pensando com Calma
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Content Left */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-600 mb-6">
                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                Acolhimento
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Um espaço seguro para quem cuida
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Existem lugares que não estão nos mapas — como o coração de quem cuida. Aqui, reduzimos o ruído para focar no que importa: você.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-1.5 rounded-full border border-gray-200 text-xs text-gray-600 hover:border-gray-400 cursor-pointer transition">paciência</span>
              <span className="px-4 py-1.5 rounded-full border border-gray-200 text-xs text-gray-600 hover:border-gray-400 cursor-pointer transition">resiliência</span>
              <span className="px-4 py-1.5 rounded-full border border-gray-200 text-xs text-gray-600 hover:border-gray-400 cursor-pointer transition">amor</span>
              <span className="px-4 py-1.5 rounded-full border border-gray-200 text-xs text-gray-600 hover:border-gray-400 cursor-pointer transition">cuidado</span>
            </div>
          </div>

          {/* Image Right */}
          <div className="lg:col-span-8">
            <div className="relative w-full aspect-video md:aspect-[21/9] bg-gray-100 rounded-3xl overflow-hidden shadow-sm flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1518152006812-edab27b069fa?w=1200&q=80" 
                alt="Pensando com calma"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
