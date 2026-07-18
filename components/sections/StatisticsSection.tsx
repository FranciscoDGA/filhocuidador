export default function StatisticsSection() {
  return (
    <section className="py-20 lg:py-28 bg-bg-base border-t border-border-base">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div className="text-center md:text-left">
            <span className="text-4xl lg:text-5xl font-display font-light text-brand-primary block mb-4">
              11,5M
            </span>
            <p className="text-sm text-brand-secondary leading-relaxed">
              de cuidadores informais no Brasil
            </p>
          </div>
          <div className="text-center md:text-left">
            <span className="text-4xl lg:text-5xl font-display font-light text-brand-primary block mb-4">
              70%
            </span>
            <p className="text-sm text-brand-secondary leading-relaxed">
              relatam sinais de esgotamento emocional
            </p>
          </div>
          <div className="text-center md:text-left">
            <span className="text-4xl lg:text-5xl font-display font-light text-brand-primary block mb-4">
              Você não<br />está sozinho
            </span>
            <p className="text-sm text-brand-secondary leading-relaxed">
              Nossa comunidade entende exatamente pelo que você está passando
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
