import type { MetadataRoute } from "next";
import { business } from "@/config/business";
import { getInsights } from "@/lib/insights";

const locales = ["ar", "en"] as const;

const staticPaths = [
  "",
  "/ai",
  "/ai/diagnosis",
  "/ai/case-studies",
  "/insights",
  "/companies",
  "/about",
  "/contact",
  "/privacy",
  ...business.serviceSlugs.map((slug) => `/ai/services/${slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${business.brand.domain}/${locale}${path}`,
        lastModified: now,
        alternates: {
          languages: {
            ar: `${business.brand.domain}/ar${path}`,
            en: `${business.brand.domain}/en${path}`,
            "x-default": `${business.brand.domain}/ar${path}`,
          },
        },
      });
    }
    for (const insight of getInsights(locale)) {
      entries.push({
        url: `${business.brand.domain}/${locale}/insights/${insight.slug}`,
        lastModified: now,
      });
    }
  }

  return entries;
}
