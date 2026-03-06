import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://boltcreator.online";
  const routes = [
    "",
    "/about",
    "/pricing",
    "/support",
    "/privacy-policy",
    "/terms",
    "/cookies-policy",
    "/youtube/ai-thumbnail-generator",
    "/youtube/video-downloader",
    "/youtube/tags-generator",
    "/youtube/tags-extractor",
    "/youtube/keyword-generator",
    "/instagram/keyword-generator",
    "/instagram/tags-generator",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: route === "" ? 1 : 0.8,
  }));
}
