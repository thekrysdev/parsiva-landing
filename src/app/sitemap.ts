import type { MetadataRoute } from "next"

const INDUSTRIES = ["immobilien", "handwerk", "kanzleien", "logistik", "steuerberatung"] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    {
      url: "https://parsiva.de",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://parsiva.de/demo",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...INDUSTRIES.map((slug) => ({
      url: `https://parsiva.de/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]
}
