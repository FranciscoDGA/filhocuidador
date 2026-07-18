import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comunidade Filho Cuidador",
  description: "Junte-se a milhares de filhos cuidadores. Grupo no Facebook, newsletter semanal e encontros virtuais.",
};

const platforms = [
  {
    name: "Grupo no Facebook",
    description: "Mais de 2.000 cuidadores trocando experiências, dicas e apoio diário.",
    cta: "Entrar no Grupo",
    href: "https://facebook.com/groups/filhocuidador",
    members: "2.000+ membros",
  },
  {
    name: "Newsletter Semanal",
    description: "Dica da semana, depoimento de cuidador e recursos úteis direto no seu email.",
    cta: "Inscrever-se Grátis",
    href: "#newsletter",
    members: "5.000+ inscritos",
  },
  {
    name: "Canal no YouTube",
    description: "Vídeos curtos com dicas práticas, entrevistas com especialistas e histórias reais.",
    cta: "Inscrever-se",
    href: "https://youtube.com/@filhocuidador",
    members: "1.000+ inscritos",
  },
];

const events = [
  {
    title: "Live: Como Lidar com Agressividade",
    specialist: "Dra. Renata Menezes — Psicóloga",
    date: "Todo terceiro sábado do mês",
    time: "10h",
    platform: "YouTube + Facebook",
  },
  {
    title: "Roda de Conversa: Cuidadores",
    specialist: "Grupo de cuidadores experientes",
    date: "Toda segunda-feira",
    time: "20h",
    platform: "Zoom",
  },
];

export default function ComunidadePage() {
  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-[11px] text-brand-secondary/50">
          <Link href="/" className="hover:text-brand-primary transition">Início</Link>
          <span>/</span>
          <span className="text-brand-primary">Comunidade</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary/60 mb-4 block">
            Conecte-se
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-brand-primary mb-6 leading-tight">
            Comunidade Filho Cuidador
          </h1>
          <p className="text-base text-brand-secondary leading-relaxed">
            Você não precisa carregar isso sozinho. Junte-se a milhares de filhos que cuidam e estão passando pela mesma coisa.
          </p>
        </div>

        {/* Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {platforms.map((platform) => (
            <div key={platform.name} className="bg-white border border-border-base p-6">
              <h3 className="text-sm font-display font-medium text-brand-primary mb-2">
                {platform.name}
              </h3>
              <p className="text-xs text-brand-secondary/60 leading-relaxed mb-4">
                {platform.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-brand-secondary/40">
                  {platform.members}
                </span>
                <Link
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-medium tracking-wide uppercase text-brand-primary border-b border-brand-primary/20 hover:border-brand-primary/60 pb-0.5 transition-colors"
                >
                  {platform.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Events */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary/60 mb-3 block">
              Próximos Eventos
            </span>
            <h2 className="text-xl lg:text-2xl font-display font-medium text-brand-primary">
              Encontros e Lives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event) => (
              <div key={event.title} className="bg-white border border-border-base p-6">
                <h3 className="text-sm font-display font-medium text-brand-primary mb-2">
                  {event.title}
                </h3>
                <p className="text-xs text-brand-accent mb-3">
                  {event.specialist}
                </p>
                <div className="flex flex-wrap gap-4 text-[11px] text-brand-secondary/50">
                  <span>{event.date}</span>
                  <span>•</span>
                  <span>{event.time}</span>
                  <span>•</span>
                  <span>{event.platform}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-primary text-white p-8 lg:p-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-display font-medium mb-4">
            Não fique sozinho nessa
          </h2>
          <p className="text-sm text-white/60 mb-8 max-w-xl mx-auto">
            Junte-se à comunidade e receba apoio de quem entende o que você está passando.
          </p>
          <Link
            href="https://facebook.com/groups/filhocuidador"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-white text-brand-primary text-[13px] font-medium tracking-wide uppercase hover:bg-white/90 transition-colors"
          >
            Entrar no Grupo Grátis
          </Link>
        </div>
      </div>
    </main>
  );
}
