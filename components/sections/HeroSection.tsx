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
              <svg className="w-20 h-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
