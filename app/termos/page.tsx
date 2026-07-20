import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Filhos Cuidadores",
  description: "Leia os termos de uso do Filhos Cuidadores. Condições gerais, isenção de responsabilidade médica e direitos autorais.",
  alternates: {
    canonical: "https://filhocuidador.com.br/termos",
  },
  openGraph: {
    title: "Termos de Uso | Filhos Cuidadores",
    description: "Leia os termos de uso do Filhos Cuidadores.",
    url: "https://filhocuidador.com.br/termos",
    siteName: "Filhos Cuidadores",
    locale: "pt_BR",
    type: "website",
  },
};

export default function TermosPage() {
  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <div className="mb-8 flex items-center gap-2 text-[11px] text-brand-secondary/50">
          <Link href="/" className="hover:text-brand-primary transition">Início</Link>
          <span>/</span>
          <span className="text-brand-primary">Termos de Uso</span>
        </div>

        <div className="prose prose-sm max-w-none">
          <h1 className="text-3xl sm:text-4xl font-display font-medium text-brand-primary mb-8 leading-tight">
            Termos de Uso
          </h1>

          <h2 className="font-display text-xl font-medium text-brand-primary mt-8 mb-4">
            1. Aceitação dos Termos
          </h2>

          <p className="text-sm text-brand-secondary leading-relaxed mb-6">
            Ao acessar e usar o Filhos Cuidadores, você concorda em cumprir estes termos de uso. Se não concorda com qualquer parte desses termos, você não pode usar este site.
          </p>

          <h2 className="font-display text-xl font-medium text-brand-primary mt-8 mb-4">
            2. Isenção de Responsabilidade Médica
          </h2>

          <p className="text-sm text-brand-secondary leading-relaxed mb-6">
            <strong>IMPORTANTE:</strong> O conteúdo deste site é fornecido apenas para fins informativos. Nenhum conteúdo deste site constitui aconselhamento médico profissional.
          </p>

          <p className="text-sm text-brand-secondary leading-relaxed mb-6">
            Se você ou seu pai precisam de atendimento médico, consulte um profissional de saúde qualificado. Não substitua o aconselhamento de um médico por informações neste site.
          </p>

          <p className="text-sm text-brand-secondary leading-relaxed mb-6">
            Em caso de emergência, chame o SAMU (192) ou procure a emergência mais próxima.
          </p>

          <h2 className="font-display text-xl font-medium text-brand-primary mt-8 mb-4">
            3. Limitação de Responsabilidade
          </h2>

          <p className="text-sm text-brand-secondary leading-relaxed mb-6">
            O Filhos Cuidadores não será responsável por:
          </p>

          <ul className="list-disc list-inside text-sm text-brand-secondary space-y-2 mb-6">
            <li>Erros ou omissões no conteúdo</li>
            <li>Danos resultantes do uso ou impossibilidade de uso do site</li>
            <li>Ações de terceiros</li>
            <li>Perda de dados ou informações</li>
          </ul>

          <h2 className="font-display text-xl font-medium text-brand-primary mt-8 mb-4">
            4. Direitos de Autor
          </h2>

          <p className="text-sm text-brand-secondary leading-relaxed mb-6">
            Todo o conteúdo do Filhos Cuidadores é protegido por direitos autorais. Você pode visualizar e imprimir artigos para uso pessoal, mas não pode reproduzir, distribuir ou modificar o conteúdo sem permissão explícita.
          </p>

          <h2 className="font-display text-xl font-medium text-brand-primary mt-8 mb-4">
            5. Links Externos
          </h2>

          <p className="text-sm text-brand-secondary leading-relaxed mb-6">
            O Filhos Cuidadores pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo desses sites e não endossamos necessariamente suas políticas ou práticas.
          </p>

          <h2 className="font-display text-xl font-medium text-brand-primary mt-8 mb-4">
            6. Conduta do Usuário
          </h2>

          <p className="text-sm text-brand-secondary leading-relaxed mb-6">
            Você concorda em não usar este site para:
          </p>

          <ul className="list-disc list-inside text-sm text-brand-secondary space-y-2 mb-6">
            <li>Conteúdo ilegal ou prejudicial</li>
            <li>Assédio ou discriminação</li>
            <li>Spam ou conteúdo comercial não autorizado</li>
            <li>Qualquer atividade que viole direitos de terceiros</li>
          </ul>

          <h2 className="font-display text-xl font-medium text-brand-primary mt-8 mb-4">
            7. Modificações dos Termos
          </h2>

          <p className="text-sm text-brand-secondary leading-relaxed mb-6">
            Reservamos o direito de modificar estes termos a qualquer momento. Alterações serão publicadas nesta página, e seu uso continuado do site implica aceitação das alterações.
          </p>

          <h2 className="font-display text-xl font-medium text-brand-primary mt-8 mb-4">
            8. Lei Aplicável
          </h2>

          <p className="text-sm text-brand-secondary leading-relaxed mb-6">
            Estes termos são regidos pela lei brasileira, e qualquer disputa será resolvida nos tribunais competentes do Brasil.
          </p>

          <h2 className="font-display text-xl font-medium text-brand-primary mt-8 mb-4">
            9. Contato
          </h2>

          <p className="text-sm text-brand-secondary leading-relaxed mb-6">
            Se você tiver dúvidas sobre estes termos, entre em contato conosco em <a href="mailto:esesdec@gmail.com" className="text-brand-primary hover:text-brand-accent transition">esesdec@gmail.com</a>.
          </p>

          <p className="text-sm text-brand-secondary leading-relaxed mb-6">
            <strong>Última atualização:</strong> 18 de julho de 2026
          </p>
        </div>
      </div>
    </main>
  );
}
