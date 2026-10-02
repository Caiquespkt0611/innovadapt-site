import type { MetadataRoute } from "next";
import { produtos } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://innovadapt.com.br",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...produtos.map((p) => ({
      url: `https://innovadapt.com.br/${p.slug}`,
      lastModified: new Date("2026-10-02"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: "https://innovadapt.com.br/termos",
      lastModified: new Date("2026-09-17"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://innovadapt.com.br/privacidade",
      lastModified: new Date("2026-09-10"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
