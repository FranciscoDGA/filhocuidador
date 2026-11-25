import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { getCategoryForFrontmatter, type CategoryDefinition } from "@/lib/categories";
import { renderMarkdownToHtml } from "@/lib/markdown";

export interface ArticleSourceLink {
  label: string;
  url: string;
}

export interface ArticleSummary {
  slug: string;
  title: string;
  excerpt: string;
  categoryTitle: string;
  categorySlug: string;
  rawCategory: string;
  dateISO: string;
  dateLabel: string;
  updatedAtISO?: string;
  updatedAtLabel?: string;
  readTime: number;
  authorVerified?: string;
  reviewerVerified?: string;
  keywords: string[];
  metaDescription: string;
  sources: ArticleSourceLink[];
  editorialNote?: string;
  status: "published" | "draft";
}

export interface ArticleDetail extends ArticleSummary {
  content: string;
  htmlContent: string;
}

export interface SearchIndexItem {
  slug: string;
  title: string;
  excerpt: string;
  categoryTitle: string;
  categorySlug: string;
  dateLabel: string;
  readTime: number;
  keywords: string[];
}

const ARTICLES_DIRECTORY = path.join(process.cwd(), "content", "articles");

const PORTUGUESE_MONTHS: Record<string, number> = {
  janeiro: 1,
  fevereiro: 2,
  marco: 3,
  março: 3,
  abril: 4,
  maio: 5,
  junho: 6,
  julho: 7,
  agosto: 8,
  setembro: 9,
  outubro: 10,
  novembro: 11,
  dezembro: 12,
};

const DISPLAY_MONTHS = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

function parseDateToISO(rawValue: unknown): string {
  if (typeof rawValue !== "string" || !rawValue.trim()) {
    return "2024-07-01";
  }

  const trimmed = rawValue.trim();
  const isoMatch = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (isoMatch) {
    return `${isoMatch[1]}-${isoMatch[2]}-${isoMatch[3]}`;
  }

  // Matches formats such as "3 de agosto, 2024" or "1º de agosto, 2024"
  const ptMatch = trimmed
    .toLowerCase()
    .match(/^(\d{1,2})[ºo]?\s+de\s+([a-zç]+)[,\s]+(\d{4})$/i);

  if (ptMatch) {
    const day = Number(ptMatch[1]);
    const month = PORTUGUESE_MONTHS[ptMatch[2]];
    const year = Number(ptMatch[3]);
    if (day >= 1 && day <= 31 && month >= 1 && month <= 12) {
      const dd = String(day).padStart(2, "0");
      const mm = String(month).padStart(2, "0");
      return `${year}-${mm}-${dd}`;
    }
  }

  return "2024-07-01";
}

export function formatIsoDatePtBr(isoDate: string): string {
  const match = isoDate.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) {
    return isoDate;
  }
  const year = Number(match[1]);
  const monthIdx = Number(match[2]) - 1;
  const day = Number(match[3]);
  const monthName = DISPLAY_MONTHS[monthIdx];
  if (!monthName) {
    return isoDate;
  }
  return `${day} de ${monthName} de ${year}`;
}

function extractVerifiedPerson(value: unknown): string | undefined {
  if (typeof value !== "string") {
    return undefined;
  }
  const trimmed = value.trim();
  if (!trimmed) {
    return undefined;
  }
  const lower = trimmed.toLowerCase();
  if (
    lower.includes("equipe") ||
    lower.includes("redação") ||
    lower.includes("redacao") ||
    lower.includes("admin")
  ) {
    return undefined;
  }
  return trimmed;
}

function estimateReadTime(content: string, rawReadTime: unknown): number {
  if (typeof rawReadTime === "number" && Number.isFinite(rawReadTime) && rawReadTime > 0) {
    return Math.round(rawReadTime);
  }
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(3, Math.ceil(words / 200));
}

function parseSources(rawSources: unknown): ArticleSourceLink[] {
  if (!Array.isArray(rawSources)) {
    return [];
  }
  return rawSources
    .filter(
      (item): item is { label: string; url: string } =>
        Boolean(
          item &&
            typeof item === "object" &&
            typeof (item as { label?: unknown }).label === "string" &&
            typeof (item as { url?: unknown }).url === "string" &&
            (item as { url: string }).url.startsWith("https://")
        )
    )
    .map((item) => ({ label: item.label.trim(), url: item.url.trim() }));
}

function loadAllArticleRecords(): ArticleDetail[] {
  if (!fs.existsSync(ARTICLES_DIRECTORY)) {
    return [];
  }

  const fileNames = fs
    .readdirSync(ARTICLES_DIRECTORY)
    .filter((file) => file.endsWith(".md"))
    .sort();

  const items: ArticleDetail[] = [];

  for (const fileName of fileNames) {
    const filePath = path.join(ARTICLES_DIRECTORY, fileName);
    const rawFile = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(rawFile);

    const status: "published" | "draft" =
      data.status === "draft" ? "draft" : "published";

    const slug =
      typeof data.slug === "string" && data.slug.trim()
        ? data.slug.trim()
        : fileName.replace(/\.md$/, "");

    const rawCategory =
      typeof data.category === "string" && data.category.trim()
        ? data.category.trim()
        : "Saúde Emocional";

    const categoryDef: CategoryDefinition | undefined =
      getCategoryForFrontmatter(rawCategory);

    const dateISO = parseDateToISO(data.date);
    const updatedAtISO = data.updatedAt ? parseDateToISO(data.updatedAt) : undefined;
    const seo = (data.seo as { keywords?: unknown; metaDescription?: unknown } | undefined) || {};

    const keywords = Array.isArray(seo.keywords)
      ? seo.keywords.filter((k): k is string => typeof k === "string" && k.trim().length > 0)
      : [];

    const excerpt =
      typeof data.excerpt === "string" && data.excerpt.trim()
        ? data.excerpt.trim()
        : "Guia informativo para apoio no cuidado diário com pessoas idosas.";

    const metaDescription =
      typeof seo.metaDescription === "string" && seo.metaDescription.trim()
        ? seo.metaDescription.trim()
        : excerpt;

    items.push({
      slug,
      title: typeof data.title === "string" ? data.title.trim() : slug,
      excerpt,
      rawCategory,
      categoryTitle: categoryDef?.title ?? rawCategory,
      categorySlug: categoryDef?.slug ?? "saude-emocional",
      dateISO,
      dateLabel: formatIsoDatePtBr(dateISO),
      updatedAtISO,
      updatedAtLabel: updatedAtISO ? formatIsoDatePtBr(updatedAtISO) : undefined,
      readTime: estimateReadTime(content, data.readTime),
      authorVerified: extractVerifiedPerson(data.author),
      reviewerVerified: extractVerifiedPerson(data.reviewer),
      keywords,
      metaDescription,
      sources: parseSources(data.sources),
      editorialNote:
        typeof data.editorialNote === "string" ? data.editorialNote.trim() : undefined,
      status,
      content,
      htmlContent: renderMarkdownToHtml(content),
    });
  }

  // Sort most recently updated/published first, then alphabetically by title
  return items.sort((a, b) => {
    const dateA = a.updatedAtISO ?? a.dateISO;
    const dateB = b.updatedAtISO ?? b.dateISO;
    if (dateA !== dateB) {
      return dateB.localeCompare(dateA);
    }
    return a.title.localeCompare(b.title, "pt-BR");
  });
}

let cachedRecords: ArticleDetail[] | null = null;

function getRecords(): ArticleDetail[] {
  if (process.env.NODE_ENV === "development") {
    return loadAllArticleRecords();
  }
  if (!cachedRecords) {
    cachedRecords = loadAllArticleRecords();
  }
  return cachedRecords;
}

function toSummary(detail: ArticleDetail): ArticleSummary {
  return {
    slug: detail.slug,
    title: detail.title,
    excerpt: detail.excerpt,
    categoryTitle: detail.categoryTitle,
    categorySlug: detail.categorySlug,
    rawCategory: detail.rawCategory,
    dateISO: detail.dateISO,
    dateLabel: detail.dateLabel,
    updatedAtISO: detail.updatedAtISO,
    updatedAtLabel: detail.updatedAtLabel,
    readTime: detail.readTime,
    authorVerified: detail.authorVerified,
    reviewerVerified: detail.reviewerVerified,
    keywords: detail.keywords,
    metaDescription: detail.metaDescription,
    sources: detail.sources,
    editorialNote: detail.editorialNote,
    status: detail.status,
  };
}

export function getAllPublishedArticles(): ArticleSummary[] {
  return getRecords()
    .filter((item) => item.status === "published")
    .map(toSummary);
}

export function getPublishedArticleBySlug(slug: string): ArticleDetail | undefined {
  const normalizedSlug = slug.trim().toLowerCase();
  return getRecords().find(
    (item) => item.status === "published" && item.slug.toLowerCase() === normalizedSlug
  );
}

export function getPublishedArticlesByCategorySlug(
  categorySlug: string
): ArticleSummary[] {
  const normalized = categorySlug.trim().toLowerCase();
  return getAllPublishedArticles().filter(
    (article) => article.categorySlug === normalized
  );
}

export function getRelatedPublishedArticles(
  currentSlug: string,
  categorySlug: string,
  limit = 3
): ArticleSummary[] {
  const published = getAllPublishedArticles().filter(
    (article) => article.slug !== currentSlug
  );
  const sameCategory = published.filter(
    (article) => article.categorySlug === categorySlug
  );
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  const rest = published.filter(
    (article) => article.categorySlug !== categorySlug
  );
  return [...sameCategory, ...rest].slice(0, limit);
}

export function getSearchIndex(): SearchIndexItem[] {
  return getAllPublishedArticles().map((article) => ({
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    categoryTitle: article.categoryTitle,
    categorySlug: article.categorySlug,
    dateLabel: article.updatedAtLabel ?? article.dateLabel,
    readTime: article.readTime,
    keywords: article.keywords,
  }));
}

export function getDraftArticleCount(): number {
  return getRecords().filter((item) => item.status === "draft").length;
}
