import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://boltcreator.online";

  const routes = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.6 },
    { path: "/pricing", priority: 0.7 },
    { path: "/support", priority: 0.6 },
    { path: "/privacy-policy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
    { path: "/cookies-policy", priority: 0.3 },

    // YouTube tools
    { path: "/youtube/ai-thumbnail-generator", priority: 0.9 },
    { path: "/youtube/video-downloader", priority: 0.8 },
    { path: "/youtube/tags-generator", priority: 0.9 },
    { path: "/youtube/tags-extractor", priority: 0.9 },
    { path: "/youtube/keyword-generator", priority: 0.9 },

    // Instagram tools
    { path: "/instagram/keyword-generator", priority: 0.8 },
    { path: "/instagram/tags-generator", priority: 0.8 },

    // Blog pages
    { path: "/youtube-tags-for-gaming", priority: 0.7 },
    { path: "/youtube-thumbnail-size", priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}