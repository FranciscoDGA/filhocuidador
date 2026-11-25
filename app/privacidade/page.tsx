import type { Metadata } from "next";
import Link from "next/link";
import { SITE_INFO } from "@/lib/site";

export const metadata: Metadata = {
  title: `Política de Privacidade | ${SITE_INFO.name}`,
  description:
    "Como o Filho Cuidador trata dados técnicos de navegação, preferência de tema e comunicações via e-mail.",
  alternates: {
    canonical: "/privacidade",
  },
  openGraph: {
    title: `Política de Privacidade | ${SITE_INFO.name}`,
    description:
      "Informações transparentes sobre privacidade, ausência de contas/cookies de rastreio e hospedagem na Vercel.",
    url: "/privacidade",
    type: "website",
  },
};

export default function PrivacidadePage() {
  return (
    <main id="conteudo-principal" className="min-h-screen bg-surface-page py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 pb-8 border-b border-border-subtle">
          <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-2">
            Transparência e LGPD
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-strong mb-3">
            Política de Privacidade
          </h1>
          <p className="text-sm text-ink-muted">
            Última revisão: 24 de novembro de 2026
          </p>
        </header>

        <div className="space-y-8 text-base text-ink-body leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl font-bold text-ink-strong mb-3">
              1. Escopo atual do portal e dados coletados
            </h2>
            <p className="mb-3">
              O portal <strong>{SITE_INFO.name}</strong> funciona atualmente como uma
              biblioteca informativa de acesso aberto.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
              <li>
                <strong>Sem contas, login ou newsletter ativos:</strong> não solicitamos
                cadastro nem operamos formulário de newsletter ativo nesta versão.
              </li>
              <li>
                <strong>Armazenamento local do tema:</strong> quando você alterna entre o
                modo claro e escuro, apenas uma preferência visual (chave{" "}
                <code>filho-cuidador-theme</code>) fica gravada no{" "}
                <code>localStorage</code> do seu navegador, sem identificação pessoal.
              </li>
              <li>
                <strong>Contato por e-mail:</strong> a página{" "}
                <Link href="/contato" className="underline text-ink-strong">
                  Contato
                </Link>{" "}
                valida campos localmente e prepara um atalho para o seu aplicativo de
                e-mail encaminhar mensagem para{" "}
                <a
                  href={`mailto:${SITE_INFO.contactEmail}`}
                  className="underline text-ink-strong"
                >
                  {SITE_INFO.contactEmail}
                </a>
                . O servidor web do portal não armazena essa mensagem em banco de dados.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-ink-strong mb-3">
              2. Infraestrutura de hospedagem e registros técnicos
            </h2>
            <p>
              As páginas são entregues por meio da plataforma de hospedagem{" "}
              <strong>Vercel</strong>, que pode registrar dados técnicos padrão de
              requisições HTTP (como endereço IP, data/hora de acesso, rota solicitada e
              agente de navegador) estritamente para operação, entrega de rede e segurança
              da aplicação.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-ink-strong mb-3">
              3. Cuidados com dados sensíveis e de terceiros idosos
            </h2>
            <p>
              Solicitamos que <strong>nunca envie dados pessoais sensíveis</strong>{" "}
              (como laudos clínicos, diagnósticos, receituários, número de CPF ou dados
              bancários seus ou da pessoa idosa) por mensagens eletrônicas não solicitadas.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-ink-strong mb-3">
              4. Atualizações desta política
            </h2>
            <p>
              Caso recursos futuros passem a coletar dados diretamente no site (como
              envio de formulário por backend, banco de dados ou boletim por e-mail com
              opt-in), esta política será atualizada previamente para informar finalidade,
              operadores, base legal na LGPD e canal de cancelamento ou exclusão.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-ink-strong mb-3">
              5. Contato sobre privacidade
            </h2>
            <p>
              Para solicitações ou dúvidas relacionadas à privacidade, utilize o canal
              informado na página de{" "}
              <Link href="/contato" className="underline text-ink-strong font-medium">
                Contato
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
