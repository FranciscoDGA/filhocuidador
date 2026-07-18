import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vídeos para Cuidadores",
  description: "Vídeos curtos com dicas práticas, entrevistas com especialistas e histórias reais de cuidadores.",
};

const videos = [
  {
    title: "Como Lidar com Agressividade em Alzheimer",
    specialist: "Dra. Renata Menezes — Psicóloga",
    duration: "8:32",
    views: "2.4K",
    embedId: "dQw4w9WgXcQ",
    category: "Comportamento",
  },
  {
    title: "5 Sinais de Burnout no Cuidador",
    specialist: "Dra. Renata Menezes — Psicóloga",
    duration: "6:15",
    views: "1.8K",
    embedId: "dQw4w9WgXcQ",
    category: "Saúde Mental",
  },
  {
    title: "Como Organizar a Medicação do Idoso",
    specialist: "Equipe Filho Cuidador",
    duration: "5:40",
    views: "3.1K",
    embedId: "dQw4w9WgXcQ",
    category: "Cuidados Práticos",
  },
  {
    title: "Direitos do Cuidador: BPC e LOAS",
    specialist: "Dr. Fernando Amato — Advogado",
    duration: "10:20",
    views: "4.2K",
    embedId: "dQw4w9WgXcQ",
    category: "Jurídico",
  },
  {
    title: "Alzheimer: O Que Esperar em Cada Estágio",
    specialist: "Dra. Patricia Tura — Neurologista",
    duration: "12:05",
    views: "5.6K",
    embedId: "dQw4w9WgXcQ",
    category: "Entendendo a Doença",
  },
  {
    title: "Como Falar com o Idoso que Não Responde",
    specialist: "Dra. Renata Menezes — Psicóloga",
    duration: "7:45",
    views: "2.9K",
    embedId: "dQw4w9WgXcQ",
    category: "Comunicação",
  },
];

const categories = ["Todos", "Comportamento", "Saúde Mental", "Cuidados Práticos", "Jurídico", "Entendendo a Doença", "Comunicação"];

export default function VideosPage() {
  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[11px] text-brand-secondary/50">
          <Link href="/" className="hover:text-brand-primary transition">Início</Link>
          <span>/</span>
          <span className="text-brand-primary">Vídeos</span>
        </div>

        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary/60 mb-4 block">
            Vídeos Curtos
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-brand-primary mb-6 leading-tight">
            Vídeos para Cuidadores
          </h1>
          <p className="text-base text-brand-secondary leading-relaxed">
            Dicas práticas em vídeo para quem não tem tempo de ler. Curtos, diretos e úteis.
          </p>
        </div>

        {/* Canal CTA */}
        <div className="bg-brand-primary text-white p-6 lg:p-8 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-display font-medium mb-1">
              Inscreva-se no Canal
            </h2>
            <p className="text-sm text-white/60">
              Novos vídeos toda semana. Não perca nenhum.
            </p>
          </div>
          <a
            href="https://youtube.com/@filhocuidador"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-brand-primary text-[13px] font-medium tracking-wide uppercase hover:bg-white/90 transition-colors shrink-0"
          >
            Inscrever-se no YouTube
          </a>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <div key={i} className="bg-white border border-border-base overflow-hidden group">
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
                  <span className="text-[10px] text-brand-secondary/40">•</span>
                  <span className="text-[10px] text-brand-secondary/40">{video.views} views</span>
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

        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-sm text-brand-secondary mb-4">
            Quer sugestão de algum vídeo?
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center text-[13px] font-medium tracking-wide uppercase text-brand-primary border-b border-brand-primary/20 hover:border-brand-primary/60 pb-1 transition-colors"
          >
            Sugira um tema
          </Link>
        </div>
      </div>
    </main>
  );
}
