import Layout from "@/components/layout/Layout";
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

interface ArticleParams {
  params: {
    slug: string;
  };
}

// Read markdown file
function getArticle(slug: string) {
  const articlesDir = path.join(process.cwd(), "content/articles");
  const filePath = path.join(articlesDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const { data, content: body } = matter(content);

  return { data, body };
}

export async function generateMetadata({
  params,
}: ArticleParams): Promise<Metadata> {
  const article = getArticle(params.slug);

  if (!article) {
    return {
      title: "Artigo não encontrado",
    };
  }

  return {
    title: `${article.data.title} | Filho Cuidador`,
    description: article.data.excerpt,
    openGraph: {
      title: article.data.title,
      description: article.data.excerpt,
      type: "article",
    },
  };
}

export default function ArticlePage({ params }: ArticleParams) {
  const article = getArticle(params.slug);

  if (!article) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
          <Link href="/artigos" className="text-blue-600 hover:text-blue-800">
            ← Voltar para artigos
          </Link>
        </div>
      </Layout>
    );
  }

  const { data, body } = article;

  // Simple markdown to HTML conversion
  const htmlContent = body
    .split("\n")
    .map((line: string) => {
      if (line.startsWith("## ")) {
        return `<h2 class="text-2xl font-bold mt-6 mb-3">${line.replace("## ", "")}</h2>`;
      }
      if (line.startsWith("### ")) {
        return `<h3 class="text-xl font-bold mt-4 mb-2">${line.replace("### ", "")}</h3>`;
      }
      if (line.startsWith("- ")) {
        return `<li class="ml-6 mb-2">${line.replace("- ", "")}</li>`;
      }
      if (line.startsWith("> ")) {
        return `<blockquote class="border-l-4 border-blue-600 pl-4 py-2 my-4 bg-blue-50">${line.replace("> ", "")}</blockquote>`;
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return `<strong>${line.replace(/\*\*/g, "")}</strong>`;
      }
      if (line === "") return "";
      return `<p class="mb-4">${line}</p>`;
    })
    .join("\n");

  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/artigos" className="text-blue-600 hover:text-blue-800 mb-6 block">
          ← Voltar para artigos
        </Link>

        <header className="mb-8">
          <div className="flex gap-2 mb-4">
            <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded">
              {data.category}
            </span>
            <span className="text-sm text-gray-500">{data.readTime} min de leitura</span>
          </div>

          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>

          <div className="flex items-center justify-between text-gray-600 border-t border-b py-4">
            <div>
              <p className="font-semibold">{data.author}</p>
              <time>{data.date}</time>
            </div>
          </div>
        </header>

        <div
          className="prose prose-lg max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* Disclaimer */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-8">
          <p className="text-sm text-gray-700">
            <strong>Disclaimer:</strong> Este conteúdo é informativo. Consulte sempre um profissional de saúde.
          </p>
        </div>

        {/* Share */}
        <div className="mt-12 pt-8 border-t">
          <p className="text-gray-600 mb-4">Compartilhe este artigo:</p>
          <div className="flex gap-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://filhocuidador.com.br/artigos/${data.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=https://filhocuidador.com.br/artigos/${data.slug}&text=${encodeURIComponent(data.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              Twitter
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`Confira este artigo: ${data.title} - https://filhocuidador.com.br/artigos/${data.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </article>
    </Layout>
  );
}
