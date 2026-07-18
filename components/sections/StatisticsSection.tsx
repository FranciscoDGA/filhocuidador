export default function StatisticsSection() {
  return (
    <section className="py-20 bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          <div className="flex flex-col items-center justify-center pt-8 md:pt-0 first:pt-0">
            <span className="text-5xl lg:text-6xl font-display font-bold mb-4">11,5M</span>
            <p className="text-base font-medium text-white/90">
              de cuidadores informais no Brasil.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <span className="text-5xl lg:text-6xl font-display font-bold mb-4">70%</span>
            <p className="text-base font-medium text-white/90">
              relatam sinais de esgotamento emocional.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <span className="text-3xl lg:text-4xl font-display font-bold mb-4">Você não está sozinho</span>
            <p className="text-base font-medium text-white/90">
              Nossa comunidade entende exatamente pelo que você está passando.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
