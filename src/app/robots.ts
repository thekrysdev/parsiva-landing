import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://parsiva.de/sitemap.xml",
    host: "https://parsiva.de",
  }
}
