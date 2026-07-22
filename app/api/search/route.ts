import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  content: string;
}

function parseArticleFile(filePath: string, slug: string): Article | null {
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const lines = raw.split("\n");
    
    let title = "";
    let excerpt = "";
    let category = "";
    let contentLines: string[] = [];
    let inFrontmatter = false;

    for (const line of lines) {
      if (line.trim() === "---") {
        inFrontmatter = !inFrontmatter;
        continue;
      }
      
      if (inFrontmatter) {
        if (line.startsWith("title:")) title = line.replace("title:", "").trim().replace(/"/g, "");
        if (line.startsWith("excerpt:")) excerpt = line.replace("excerpt:", "").trim().replace(/"/g, "");
        if (line.startsWith("category:")) category = line.replace("category:", "").trim().replace(/"/g, "");
      } else {
        contentLines.push(line);
      }
    }

    if (!title) return null;

    return {
      slug,
      title,
      excerpt: excerpt || contentLines.join(" ").substring(0, 160),
      category: category || "Geral",
      content: contentLines.join(" "),
    };
  } catch {
    return null;
  }
}

function getAllArticles(): Article[] {
  const articlesDir = path.join(process.cwd(), "content", "articles");
  const categories = ["entendendo-a-doenca", "cuidados-praticos", "saude-emocional", "juridico", "familia"];
  const articles: Article[] = [];

  for (const category of categories) {
    const categoryDir = path.join(articlesDir, category);
    if (!fs.existsSync(categoryDir)) continue;

    const files = fs.readdirSync(categoryDir).filter(f => f.endsWith(".md"));
    for (const file of files) {
      const slug = file.replace(".md", "");
      const article = parseArticleFile(path.join(categoryDir, file), slug);
      if (article) {
        if (!article.category || article.category === "Geral") {
          article.category = category;
        }
        articles.push(article);
      }
    }
  }

  return articles;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.toLowerCase() || "";

  if (query.length < 3) {
    return NextResponse.json({ results: [] });
  }

  const articles = getAllArticles();
  
  const results = articles
    .filter(article => {
      const searchText = `${article.title} ${article.excerpt} ${article.content} ${article.category}`.toLowerCase();
      return searchText.includes(query);
    })
    .map(article => ({
      slug: article.slug,
      title: article.title,
      excerpt: article.excerpt.substring(0, 120),
      category: article.category,
    }))
    .slice(0, 8);

  return NextResponse.json({ results });
}
