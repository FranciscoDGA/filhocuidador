import Link from "next/link";

export default function TermosPage() {
  return (
    <main className="bg-cream min-h-screen py-16 sm:py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-text-dark/70">
          <Link href="/" className="hover:text-brand-primary transition">
            Início
          </Link>
          <span>/</span>
          <span className="text-text-dark font-medium">Termos de Uso</span>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-text-dark mb-8 leading-tight">
            Termos de Uso
          </h1>

          <h2 className="font-display text-2xl font-bold text-text-dark mt-8 mb-4">
            1. Aceitação dos Termos
          </h2>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            Ao acessar e usar o Filho Cuidador, você concorda em cumprir estes termos de uso. Se não concorda com qualquer parte desses termos, você não pode usar este site.
          </p>

          <h2 className="font-display text-2xl font-bold text-text-dark mt-8 mb-4">
            2. Isenção de Responsabilidade Médica
          </h2>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            <strong>IMPORTANTE:</strong> O conteúdo deste site é fornecido apenas para fins informativos. Nenhum conteúdo deste site constitui aconselhamento médico profissional.
          </p>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            Se você ou seu pai precisam de atendimento médico, consulte um profissional de saúde qualificado. Não substitua o aconselhamento de um médico por informações neste site.
          </p>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            Em caso de emergência, chame o SAMU (192) ou procure a emergência mais próxima.
          </p>

          <h2 className="font-display text-2xl font-bold text-text-dark mt-8 mb-4">
            3. Limitação de Responsabilidade
          </h2>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            O Filho Cuidador não será responsável por:
          </p>

          <ul className="list-disc list-inside text-text-dark/80 space-y-2 mb-6">
            <li>Erros ou omissões no conteúdo</li>
            <li>Danos resultantes do uso ou impossibilidade de uso do site</li>
            <li>Ações de terceiros</li>
            <li>Perda de dados ou informações</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-text-dark mt-8 mb-4">
            4. Direitos de Autor
          </h2>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            Todo o conteúdo do Filho Cuidador é protegido por direitos autorais. Você pode visualizar e imprimir artigos para uso pessoal, mas não pode reproduzir, distribuir ou modificar o conteúdo sem permissão explícita.
          </p>

          <h2 className="font-display text-2xl font-bold text-text-dark mt-8 mb-4">
            5. Links Externos
          </h2>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            O Filho Cuidador pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo desses sites e não endossamos necessariamente suas políticas ou práticas.
          </p>

          <h2 className="font-display text-2xl font-bold text-text-dark mt-8 mb-4">
            6. Conduta do Usuário
          </h2>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            Você concorda em não usar este site para:
          </p>

          <ul className="list-disc list-inside text-text-dark/80 space-y-2 mb-6">
            <li>Conteúdo ilegal ou prejudicial</li>
            <li>Assédio ou discriminação</li>
            <li>Spam ou conteúdo comercial não autorizado</li>
            <li>Qualquer atividade que viole direitos de terceiros</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-text-dark mt-8 mb-4">
            7. Modificações dos Termos
          </h2>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            Reservamos o direito de modificar estes termos a qualquer momento. Alterações serão publicadas nesta página, e seu uso continuado do site implica aceitação das alterações.
          </p>

          <h2 className="font-display text-2xl font-bold text-text-dark mt-8 mb-4">
            8. Lei Aplicável
          </h2>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            Estes termos são regidos pela lei brasileira, e qualquer disputa será resolvida nos tribunais competentes do Brasil.
          </p>

          <h2 className="font-display text-2xl font-bold text-text-dark mt-8 mb-4">
            9. Contato
          </h2>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            Se você tiver dúvidas sobre estes termos, entre em contato conosco em <a href="mailto:esesdec@gmail.com" className="text-brand-primary hover:text-brand-accent transition">esesdec@gmail.com</a>.
          </p>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            <strong>Última atualização:</strong> 17 de julho de 2024
          </p>
        </div>
      </div>
    </main>
  );
}
