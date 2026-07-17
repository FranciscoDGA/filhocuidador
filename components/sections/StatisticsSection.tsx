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
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statistics.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="mb-4">
                <p className="text-4xl md:text-5xl font-bold text-brand-primary mb-2">
                  {stat.number}
                </p>
              </div>
              <p className="text-lg text-gray-700 font-semibold">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
