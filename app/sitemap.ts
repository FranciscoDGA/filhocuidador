import type { MetadataRoute } from "next";
import { getAllPublishedArticles } from "@/lib/articles";
import { CATEGORIES } from "@/lib/categories";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const articles = getAllPublishedArticles();
  const latestArticleDate = articles[0]
    ? new Date(`${articles[0].updatedAtISO ?? articles[0].dateISO}T12:00:00Z`)
    : new Date("2026-11-24T12:00:00Z");

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: latestArticleDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/artigos`,
      lastModified: latestArticleDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/categorias`,
      lastModified: latestArticleDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/sobre`,
      lastModified: new Date("2026-11-24T12:00:00Z"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contato`,
      lastModified: new Date("2026-11-24T12:00:00Z"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/privacidade`,
      lastModified: new Date("2026-11-24T12:00:00Z"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/termos`,
      lastModified: new Date("2026-11-24T12:00:00Z"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${siteUrl}/${cat.slug}`,
    lastModified: latestArticleDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteUrl}/artigos/${article.slug}`,
    lastModified: new Date(`${article.updatedAtISO ?? article.dateISO}T12:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes];
}
