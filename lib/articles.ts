import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
  image?: string;
  seo?: {
    keywords?: string[];
    metaDescription?: string;
  }
}

const contentDirectory = path.join(process.cwd(), 'content/articles');

// Optimize Unsplash URLs - reduces image size significantly
function optimizeImageUrl(url: string): string {
  if (!url) return url;
  // Only optimize Unsplash URLs
  if (url.includes('images.unsplash.com')) {
    // Remove existing query params and add optimization
    const baseUrl = url.split('?')[0];
    return `${baseUrl}?w=400&h=300&fit=crop&q=60&auto=format`;
  }
  return url;
}

// Utility to parse dates in format "7 de agosto, 2024" or standard JS dates to sort them.
function parsePortugueseDate(dateString: string): number {
  const months: { [key: string]: number } = {
    'janeiro': 0, 'fevereiro': 1, 'março': 2, 'abril': 3, 'maio': 4, 'junho': 5,
    'julho': 6, 'agosto': 7, 'setembro': 8, 'outubro': 9, 'novembro': 10, 'dezembro': 11,
    'jan': 0, 'fev': 1, 'mar': 2, 'abr': 3, 'mai': 4, 'jun': 5,
    'jul': 6, 'ago': 7, 'set': 8, 'out': 9, 'nov': 10, 'dez': 11
  };
  
  try {
    const parts = dateString.toLowerCase().replace(',', '').split(' ');
    if (parts.length >= 3) {
      let day = parseInt(parts[0]);
      let monthPart = parts.find(p => months[p] !== undefined) || 'janeiro';
      let month = months[monthPart];
      let year = parseInt(parts[parts.length - 1]);
      return new Date(year, month, day).getTime();
    }
  } catch (e) {
    return 0; // Fallback
  }
  return new Date(dateString).getTime() || 0;
}

const monthNames = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

function formatDatePT(dateString: string): string {
  if (!dateString || dateString === 'Data Desconhecida') return dateString;
  // Already in Portuguese format like "7 de agosto, 2024"
  if (dateString.includes(' de ')) return dateString;
  // ISO format: 2024-07-25
  try {
    const d = new Date(dateString + 'T00:00:00');
    if (isNaN(d.getTime())) return dateString;
    return `${d.getDate()} de ${monthNames[d.getMonth()]}, ${d.getFullYear()}`;
  } catch {
    return dateString;
  }
}

export function getAllArticles(): Article[] {
  // Check if directory exists
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  // Get file names under /content/articles
  const fileNames = fs.readdirSync(contentDirectory);
  
  const allArticlesData = fileNames.filter(fileName => fileName.endsWith('.md')).map((fileName, index) => {
    // Remove ".md" from file name to get slug if not provided in frontmatter
    const fallbackSlug = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      id: index + 1,
      slug: matterResult.data.slug || fallbackSlug,
      title: matterResult.data.title || fallbackSlug,
      excerpt: matterResult.data.excerpt || '',
      content: matterResult.content, // Raw markdown for now, parsed in getArticleBySlug
      category: matterResult.data.category || 'Geral',
      author: matterResult.data.author || 'Equipe Filhos Cuidadores',
      date: formatDatePT(matterResult.data.date || 'Data Desconhecida'),
      readTime: matterResult.data.readTime || 5,
      image: optimizeImageUrl(matterResult.data.image || ''),
      seo: matterResult.data.seo || {},
    };
  });
  
  // Sort articles by date (descending)
  return allArticlesData.sort((a, b) => {
    const dateA = parsePortugueseDate(a.date);
    const dateB = parsePortugueseDate(b.date);
    return dateB - dateA;
  });
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  const allArticles = getAllArticles();
  const article = allArticles.find(a => a.slug === slug);
  
  if (!article) return undefined;
  
  // Convert markdown to HTML
  const processedContent = await remark()
    .use(html)
    .process(article.content);
    
  const contentHtml = processedContent.toString();
  
  return {
    ...article,
    content: contentHtml
  };
}
