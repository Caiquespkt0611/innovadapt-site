import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://innovadapt.com.br",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://innovadapt.com.br/privacidade",
      lastModified: new Date("2026-09-10"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
