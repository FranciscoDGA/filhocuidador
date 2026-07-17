const statistics = [
  {
    id: 1,
    number: "11,5 milhões",
    description: "de cuidadores informais no Brasil",
  },
  {
    id: 2,
    number: "70%",
    description: "relatam sinais de esgotamento emocional",
  },
  {
    id: 3,
    number: "Você",
    description: "não está sozinho nessa",
  },
];

export default function StatisticsSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-brand-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {statistics.map((stat) => (
            <div key={stat.id} className="text-center text-white">
              <p className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                {stat.number}
              </p>
              <p className="font-body text-lg text-white/90">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
