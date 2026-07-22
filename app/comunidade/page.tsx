import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comunidade | Filhos Cuidadores",
  description: "Conecte-se com outros filhos cuidadores. Grupos no WhatsApp, Telegram, Facebook e encontros virtuais.",
};

const groups = [
  {
    name: "Grupo no WhatsApp",
    description: "Conversas diretas, troca de experiências e apoio rápido entre cuidadores. Ideal para quem precisa de ajuda no dia a dia.",
    cta: "Entrar no Grupo",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    status: "Em breve",
    statusColor: "text-amber-600",
  },
  {
    name: "Grupo no Telegram",
    description: "Canal com dicas rápidas, artigos novos e discussões mais aprofundadas sobre cuidados com idosos.",
    cta: "Entrar no Canal",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
    status: "Em breve",
    statusColor: "text-amber-600",
  },
  {
    name: "Grupo no Facebook",
    description: "Comunidade aberta para troca de experiências, dicas e apoio entre cuidadores de idosos.",
    cta: "Em Breve",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    status: "Em breve",
    statusColor: "text-amber-600",
  },
  {
    name: "Newsletter Semanal",
    description: "Dica da semana, depoimento de cuidador e recursos úteis direto no seu email.",
    cta: "Inscrever-se Grátis",
    href: "#newsletter",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    status: "Grátis",
    statusColor: "text-green-600",
  },
];

const rules = [
  "Respeito acima de tudo — cada cuidador tem sua jornada",
  "Sem spam, sem vendas, sem links suspeitos",
  "Dúvidas são bem-vindas, sem julgamentos",
  "Proibido substituir orientação médica ou jurídica",
];

export default function ComunidadePage() {
  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
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
            Comunidade Filhos Cuidadores
          </h1>
          <p className="text-base text-brand-secondary leading-relaxed">
            Você não precisa carregar isso sozinho. Conecte-se com outros filhos que cuidam e estão passando pela mesma coisa.
          </p>
        </div>

        {/* Groups */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary/60 mb-3 block">
              Nossos Canais
            </span>
            <h2 className="text-xl lg:text-2xl font-display font-medium text-brand-primary">
              Onde conversar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {groups.map((group) => (
              <div key={group.name} className="bg-white border border-border-base p-6 rounded-[5px]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0 rounded-[5px]">
                    {group.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-display font-medium text-brand-primary">
                        {group.name}
                      </h3>
                      <span className={`text-[10px] font-medium ${group.statusColor}`}>
                        {group.status}
                      </span>
                    </div>
                    <p className="text-xs text-brand-secondary/60 leading-relaxed mb-4">
                      {group.description}
                    </p>
                    <Link
                      href={group.href}
                      target={group.href.startsWith("http") ? "_blank" : undefined}
                      rel={group.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center text-[11px] font-medium tracking-wide uppercase text-brand-primary border-b border-brand-primary/20 hover:border-brand-primary/60 pb-0.5 transition-colors"
                    >
                      {group.cta}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regras */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary/60 mb-3 block">
              Regras da Comunidade
            </span>
            <h2 className="text-xl lg:text-2xl font-display font-medium text-brand-primary">
              Como funciona
            </h2>
          </div>

          <div className="bg-white border border-border-base p-6 rounded-[5px]">
            <ul className="space-y-3">
              {rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-brand-secondary">
                  <span className="text-brand-accent mt-0.5">✓</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-primary text-white p-8 lg:p-12 text-center rounded-[5px]">
          <h2 className="text-2xl lg:text-3xl font-display font-medium mb-4">
            Junte-se à comunidade
          </h2>
          <p className="text-sm text-white/60 mb-8 max-w-xl mx-auto">
            Escolha o canal que preferir e comece a conversar com outros cuidadores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://facebook.com/groups/filhocuidador"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-brand-primary text-[13px] font-medium tracking-wide uppercase hover:bg-white/90 transition-colors rounded-[5px]"
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white text-[13px] font-medium tracking-wide uppercase hover:bg-white/20 transition-colors rounded-[5px]"
            >
              WhatsApp
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white text-[13px] font-medium tracking-wide uppercase hover:bg-white/20 transition-colors rounded-[5px]"
            >
              Telegram
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
