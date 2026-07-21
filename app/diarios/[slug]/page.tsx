import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const diaries = [
  {
    slug: "ana-maria-o-dia-a-dia-com-mae-alzheimer",
    title: "O Dia a Dia com a Mãe que Já Não Me Reconhece",
    author: "Ana Maria, 42 anos",
    city: "São Paulo, SP",
    date: "15 Jul 2026",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&auto=format&fit=crop",
    content: `
      <p>Há dois anos, minha mãe foi diagnosticada com Alzheimer. No início, eram só esquecimentos pequenos — esquecia o nome de um vizinho, repetia perguntas. Eu achava que era idade.</p>
      <p>Quando o diagnóstico veio, meu mundo desabou. Eu era filha única, e a responsabilidade caiu toda sobre mim. Meus tios moram em outro estado. Meu pai faleceu há 10 anos. Era eu e ela.</p>
      <p>Hoje, dois anos depois, ela não sabe meu nome. Me olha e vê uma estranha. Mas quando eu sento ao lado dela e seguro sua mão, ela sorri. Esse sorriso é o que me faz continuar.</p>
      <h2>O Dia a Dia</h2>
      <p>Nosso dia começa às 6h. Eu preparo o café dela — sempre no mesmo xícara, sempre no mesmo lugar. Rotina é tudo para quem tem Alzheimer. Se algo muda, ela fica agitada.</p>
      <p>Depois do café, ajudá-la a se vestir é uma batalha. Ela quer usar as mesmas roupas de sempre. Se eu troco, ela fica confusa. Aprendi a comprar várias cópias do mesmo modelo.</p>
      <p>A parte mais difícil é quando ela não me reconhece. Olha para mim com medo. Pergunta quem eu sou. Eu respondo com paciência: "Sou a Ana, sua filha." Às vezes ela acredita. Às vezes não.</p>
      <h2>O Que Aprendi</h2>
      <p>Aprendi que paciência não é uma virtude — é uma necessidade. Aprendi que não posso fazer tudo sozinha. Comecei a terapia há seis meses. Me salva.</p>
      <p>Aprendi que pedir ajuda não é fraqueza. Contratei uma cuidadora para ficar com ela enquanto eu trabalho. Custa caro, mas sem isso eu não sobreviveria.</p>
      <p>E aprendi que amor não precisa de memória. Minha mãe pode não saber meu nome, mas o corpo dela lembra o meu. Quando eu abraço ela, ela relaxa. Isso é tudo que importa.</p>
      <h2>Para Outros Cuidadores</h2>
      <p>Se você está cuidando de alguém com Alzheimer: não se isolate. Procure um grupo de apoio. Converse com um psicólogo. Aceite ajuda quando oferecerem.</p>
      <p>E lembre-se: você não está falhando. Está fazendo o melhor que pode. E isso é suficiente.</p>
    `,
  },
  {
    slug: "carlos-cuidar-do-pai-sozinho",
    title: "Cuidar do Pai Sozinho: Um Filho, Um Sacrifício",
    author: "Carlos, 38 anos",
    city: "Rio de Janeiro, RJ",
    date: "10 Jul 2026",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&auto=format&fit=crop",
    content: `
      <p>Meu pai tem Parkinson há 12 anos. No início, era só um tremor na mão. Hoje, ele não consegue mais andar sozinho. E moramos juntos.</p>
      <p>Sou o filho caçula. Tenho dois irmãos mais velhos que moram em Minas Gerais. Eles ligam uma vez por mês, perguntam como está, e desligam. Nunca vêm.</p>
      <p>Eu trabalho home office como programador. Acordo às 6h, ajudo meu pai a tomar banho, almoço com ele, trabalho o dia todo, e à noite cuido da medicação e da janta. Todos os dias. Há um ano.</p>
      <h2>O Que Ninguém Te Conta</h2>
      <p>Ninguém te conta que o cuidador se isola. Meus amigos pararam de me convidar para sair. Eu não tenho mais vida social. Meu namoro acabou porque eu não tinha tempo.</p>
      <p>Ninguém te conta que o cuidador sente culpa. Culpa por não fazer o suficiente. Culpa por ter raiva. Culpa por desejar, em momentos ruins, que isso tudo acabe.</p>
      <p>E ninguém te conta que o cuidador também adoce. Eu desenvolvi ansiedade e insônia. Meu médico disse que estou no limite.</p>
      <h2>O Que Me Mantém</h2>
      <p>Meu pai. Quando ele está bem, ele me conta histórias da infância. Sobre como trabalhava na fábrica, como conheceu minha mãe, como me levou para pescar quando eu tinha 5 anos.</p>
      <p>Nesses momentos, ele volta a ser o pai de sempre. E eu lembro por que estou fazendo tudo isso.</p>
      <h2>Meu Pedido</h2>
      <p>Se você tem irmãos que não ajudam: fale com eles. Não brigue, não acuse. Explique a situação. Se não ajudarem, busque apoio profissional. Você não pode carregar isso sozinho.</p>
    `,
  },
  {
    slug: "mariana-quando-a-familia-nao-ajuda",
    title: "Quando a Família Não Ajuda: A Solidão do Cuidador",
    author: "Mariana, 45 anos",
    city: "Belo Horizonte, MG",
    date: "5 Jul 2026",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&auto=format&fit=crop",
    content: `
      <p>Minha mãe tem demência vascular. Depois de um derrame, ela perdeu a capacidade de falar e caminhar. Eu sou a única filha que ficou em Belo Horizonte. Meus irmãos estão em Brasília e em Portugal.</p>
      <p>Quando o derrame aconteceu, todos vieram. Ficaram uma semana, choraram, e foram embora. Eu fiquei. Com a mãe, com as contas, com tudo.</p>
      <h2>A Raiva</h2>
      <p>Nos primeiros meses, eu sentia uma raiva enorme dos meus irmãos. Ligavam para "saber como estava a mãe", mas na verdade queriam saber se eu precisava de dinheiro. Como se dinheiro resolvesse tudo.</p>
      <p>Eu não queria dinheiro. Queria ajuda. Queria que viessem pelo menos uma vez por mês para eu poder dormir uma noite inteira. Queria que entendessem que eu estava morrendo por dentro.</p>
      <h2>A Aceitação</h2>
      <p>Há um ano, comecei a terapia. Minha psicóloga me ajudou a entender que eu não posso controlar as escolhas dos outros. Posso controlar as minhas.</p>
      <p>Parei de esperar ajuda dos irmãos. Comecei a contratar o que precisava. Contratei uma cuidadora para o período noturno. Pago do meu bolso. É caro, mas me salva.</p>
      <h2>O Que Minha Mãe Me Ensina</h2>
      <p>Minha mãe não fala, mas ela entende. Quando eu chego do trabalho e sento ao lado dela, ela segura minha mão com força. Olha nos meus olhos. E eu sei que ela quer dizer "obrigada".</p>
      <p>Esse gesto vale mais que qualquer ajuda que meus irmãos poderiam dar.</p>
    `,
  },
  {
    slug: "pedro-o-burnout-que-ninguem-ve",
    title: "O Burnout que Ninguém Vê: Minha História",
    author: "Pedro, 40 anos",
    city: "Curitiba, PR",
    date: "28 Jun 2026",
    readTime: 9,
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&auto=format&fit=crop",
    content: `
      <p>Eu era uma pessoa normal. Trabalhava, saía com amigos, praticava corrida. Até o dia em que meu pai foi diagnosticado com demência frontotemporal.</p>
      <p>Os sintomas começaram aos poucos. Primeiro, mudanças de humor. Depois, agressividade. Depois, ele esqueceu como usar o celular. E minha mãe, que já estava frágil, não conseguia mais lidar.</p>
      <p>Mudei-me para a casa deles. Trabalho home office. Acordo às 6h, preparo tudo para eles, trabalho das 8h às 18h, e à noite cuido deles. Todos os dias. Há 14 meses.</p>
      <h2>O Burnout</h2>
      <p>Há três meses, meu médico me diagnósticou com burnout. Eu não dormia mais, tinha dores no corpo, estava sempre irritado. Chorava sem motivo.</p>
      <p>O pior era a culpa. Eu sentia culpa por estar doente. "Tem gente pior", eu dizia para mim mesmo. "Meu pai que está realmente doente, não eu."</p>
      <p>Mas burnout não é frescura. É o corpo dizendo: "chega". E eu estava no limite.</p>
      <h2>A Recuperação</h2>
      <p>Comecei a terapia. Comecei a aceitar ajuda. Contratei uma cuidadora para ficar com meu pai enquanto eu cuido de mim.</p>
      <p>Aprendi que eu não posso ajudar ninguém se eu estiver destruído. Cuidar de si mesmo não é egoísmo — é sobrevivência.</p>
      <h2>Para Outros Cuidadores</h2>
      <p>Se você está se sentindo esgotado, não espere chegar ao limite. Procure ajuda agora. Fale com um médico, um psicólogo, um amigo. Não guarde tudo para si.</p>
      <p>Você não é um herói por aguentar tudo. Você é um ser humano que precisa de cuidado também.</p>
    `,
  },
  {
    slug: "juliana-o-dia-em-que-desisti-e-voltei",
    title: "O Dia em que Desisti e Voltei",
    author: "Juliana, 36 anos",
    city: "Salvador, BA",
    date: "20 Jun 2026",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&auto=format&fit=crop",
    content: `
      <p>Há seis meses, eu quase intern minha mãe em um asilo. Eu não aguentava mais. Ela acordava à noite gritando, não tomava remédio, não comia. Eu estava destruída.</p>
      <p>Liguei para um asilo, marquei visita. Fui lá, vi os quartos, conversei com a responsável. Tudo parecia bom. Voltei para casa decidida.</p>
      <h2>A Noite em que Tudo Mudou</h2>
      <p>Naquela noite, depois de jantar, minha mãe sentou no sofá ao lado de mim. Ela estava calada, como sempre. De repente, me abraçou. Um abraço forte, consciente.</p>
      <p>E sussurrou no meu ouvido: "Obrigada, filha."</p>
      <p>Foram duas palavras. Duas palavras que ela não dizia há meses. E naquele momento, eu soube que não podia desistir.</p>
      <p>Chorei muito. Ela ficou me abraçando, sem entender por que eu chorava. Mas eu sabia. Era o universo me dizendo: "Calma. Ela ainda está aí."</p>
      <h2>O Que Fiz de Diferente</h2>
      <p>Naquele mês, mudei tudo. Contratei uma cuidadora para o período da noite. Comecei a terapia. Busquei um grupo de apoio no WhatsApp.</p>
      <p>Aprendi que eu não precisava ser perfeita. Precisava ser suficiente. E que pedir ajuda não era desistir — era continuar de um jeito mais inteligente.</p>
      <h2>Para Você</h2>
      <p>Se você está pensando em desistir: tudo bem sentir isso. Não é fraqueza. É humanidade. Mas antes de desistir, tente uma coisa: peça ajuda. Uma vez. Só uma.</p>
      <p>E se precisar conversar, minha história está aqui. Você não está sozinho(a).</p>
    `,
  },
  {
    slug: "roberto-o-avv-que-mudou-tudo",
    title: "O AVC que Mudou Tudo: De Filho a Cuidador",
    author: "Roberto, 50 anos",
    city: "Porto Alegre, RS",
    date: "15 Jun 2026",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&auto=format&fit=crop",
    content: `
      <p>Meu pai tinha 75 anos quando sofreu um AVC. Em uma manhã de terça-feira, ele estava tomando café, rindo de uma piada minha. Naquela noite, ele não conseguia mais falar.</p>
      <p>O médico disse que a recuperação seria longa. Mas na verdade, não houve recuperação. Meu pai perdeu a fala, perdeu a mobilidade do lado esquerdo, e precisava de ajuda para tudo.</p>
      <p>Eu nunca tinha cuidado de ninguém. Sou engenheiro, trabalhava em obra. Nunca tinha nem trocado uma fralda. E de repente, tudo isso caiu sobre mim.</p>
      <h2>A Curva de Aprendizado</h2>
      <p>Nos primeiros meses, foi um caos. Eu errava a medicação, não sabia como dar banho, não sabia como levantar ele da cama. Tive que aprender tudo do zero.</p>
      <p>YouTube foi meu professor. Pesquisei "como cuidar de idoso acamado", "como dar banho em idoso", "como prevenir escaras". Aprendi na raça.</p>
      <h2>O Que Ninguém Me Preparou</h2>
      <p>Ninguém me preparou para ver meu pai — aquele homem forte que me ensinou a jogar futebol — depender de mim para ir ao banheiro. Para mim, isso foi o mais difícil.</p>
      <p>E ninguém me preparou para a solidão. Meus amigos não entendiam. Meus irmãos moram longe. Eu ficava trancado em casa, sem ninguém para conversar.</p>
      <h2>O Que Me Salva</h2>
      <p>Um dia, meu pai me olhou e sorriu. Foi um sorriso pequeno, quase imperceptível. Mas eu vi. E soube que ele ainda estava ali, dentro daquele corpo que não respondia mais.</p>
      <p>Esse sorriso me faz continuar todos os dias.</p>
    `,
  },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const diary = diaries.find((d) => d.slug === slug);
  if (!diary) return {};

  return {
    title: `${diary.title} | Diários de Cuidadores`,
    description: diary.content.replace(/<[^>]*>/g, "").slice(0, 160),
  };
}

export function generateStaticParams() {
  return diaries.map((d) => ({ slug: d.slug }));
}

export default async function DiarioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const diary = diaries.find((d) => d.slug === slug);

  if (!diary) notFound();

  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <div className="mb-8 flex items-center gap-2 text-[11px] text-brand-secondary/50">
          <Link href="/" className="hover:text-brand-primary transition">Início</Link>
          <span>/</span>
          <Link href="/diarios" className="hover:text-brand-primary transition">Diários</Link>
          <span>/</span>
          <span className="text-brand-primary">{diary.title}</span>
        </div>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-2 text-[10px] text-brand-secondary/40 mb-4">
              <span>{diary.date}</span>
              <span>•</span>
              <span>{diary.readTime} min de leitura</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-medium text-brand-primary leading-tight mb-4">
              {diary.title}
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                <span className="text-sm font-medium text-brand-primary">{diary.author.charAt(0)}</span>
              </div>
              <div>
                <p className="text-sm font-medium text-brand-primary">{diary.author}</p>
                <p className="text-[11px] text-brand-secondary/40">{diary.city}</p>
              </div>
            </div>
          </header>

          {diary.image && (
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-[5px] mb-10">
              <Image src={diary.image} alt={diary.title} fill className="object-cover" />
            </div>
          )}

          <div className="prose prose-lg prose-gray max-w-none text-brand-primary/90 leading-[1.8] font-body mb-12">
            <div dangerouslySetInnerHTML={{ __html: diary.content }} />
          </div>

          <div className="border-y border-border-base py-6 flex flex-col sm:flex-row items-center gap-4 justify-between mb-10">
            <p className="text-xs font-medium text-brand-secondary">Essa história te ajudou? Compartilhe:</p>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(diary.title + " - https://filhoscuidadores.com.br/diarios/" + diary.slug)}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-[#25D366] text-white text-xs font-medium hover:bg-[#20bd5a] transition"
              >
                WhatsApp
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://filhoscuidadores.com.br/diarios/${diary.slug}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-[#1877F2] text-white text-xs font-medium hover:bg-[#166fe5] transition"
              >
                Facebook
              </a>
            </div>
          </div>

          <div className="bg-brand-primary/[0.03] border border-border-base p-6 text-center">
            <h3 className="text-sm font-display font-medium text-brand-primary mb-2">
              Você também é cuidador(a)?
            </h3>
            <p className="text-xs text-brand-secondary/60 mb-4">
              Sua história pode inspirar milhares de outras pessoas.
            </p>
            <Link
              href="/depoimentos"
              className="inline-flex items-center text-[11px] font-medium tracking-wide uppercase text-brand-primary border-b border-brand-primary/20 hover:border-brand-primary/60 pb-0.5 transition-colors"
            >
              Compartilhe sua história
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
