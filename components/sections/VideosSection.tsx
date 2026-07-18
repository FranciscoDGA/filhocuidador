import Link from "next/link";

const videos = [
  {
    title: "Como Lidar com Agressividade em Alzheimer",
    specialist: "Dra. Renata Menezes — Psicóloga",
    duration: "8:32",
    embedId: "kMzJ3EOqT0w",
    category: "Comportamento",
  },
  {
    title: "5 Sinais de Burnout no Cuidador",
    specialist: "Dra. Renata Menezes — Psicóloga",
    duration: "6:15",
    embedId: "nSXRZkB9cXw",
    category: "Saúde Mental",
  },
  {
    title: "Como Organizar a Medicação do Idoso",
    specialist: "Equipe Filho Cuidador",
    duration: "5:40",
    embedId: "YHnQhJvYQaM",
    category: "Cuidados Práticos",
  },
];

export default function VideosSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-y border-border-base">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14">
          <div>
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary mb-4 block">
              Vídeos Curtos
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-medium text-brand-primary">
              Vídeos para Cuidadores
            </h2>
          </div>
          <Link
            href="/videos"
            className="mt-4 sm:mt-0 inline-flex items-center text-[13px] font-medium tracking-wide uppercase text-brand-primary border-b border-brand-primary/20 hover:border-brand-primary/60 pb-1 transition-colors"
          >
            Ver todos
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <div key={i} className="bg-bg-card border border-border-base overflow-hidden group">
              <div className="relative w-full aspect-video bg-gray-100">
                <iframe
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-medium tracking-wider uppercase text-brand-accent">
                    {video.category}
                  </span>
                  <span className="text-[10px] text-brand-secondary/40">•</span>
                  <span className="text-[10px] text-brand-secondary/40">{video.duration}</span>
                </div>
                <h3 className="text-sm font-display font-medium text-brand-primary mb-1 leading-snug">
                  {video.title}
                </h3>
                <p className="text-[11px] text-brand-secondary/50">
                  {video.specialist}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
