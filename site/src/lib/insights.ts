import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export type InsightMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  locale: "ar" | "en";
  file: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content/insights");

function readAll(): InsightMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
      const { data } = matter(raw);
      return {
        slug: String(data.slug ?? file.replace(/\.(ar|en)\.mdx?$/, "").replace(/\.mdx?$/, "")),
        title: String(data.title ?? ""),
        description: String(data.description ?? ""),
        date: String(data.date ?? ""),
        locale: (data.locale === "en" ? "en" : "ar") as "ar" | "en",
        file,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getInsights(locale: "ar" | "en"): InsightMeta[] {
  const all = readAll();
  const localized = all.filter((item) => item.locale === locale);
  return localized.length ? localized : all.filter((item) => item.locale === "ar");
}

export function getInsight(slug: string, locale: "ar" | "en") {
  const all = readAll();
  const match =
    all.find((item) => item.slug === slug && item.locale === locale) ||
    all.find((item) => item.slug === slug && item.locale === "ar");
  if (!match) return null;
  const raw = fs.readFileSync(path.join(CONTENT_DIR, match.file), "utf8");
  const { content } = matter(raw);
  return {
    meta: match,
    html: marked.parse(content, { async: false }) as string,
  };
}
