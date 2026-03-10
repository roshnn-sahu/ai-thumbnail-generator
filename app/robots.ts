import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://boltcreator.online/sitemap.xml",
    host: "https://boltcreator.online",
  };
}