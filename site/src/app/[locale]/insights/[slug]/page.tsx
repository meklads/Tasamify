import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { business } from "@/config/business";
import { getInsight, getInsights } from "@/lib/insights";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getInsights(locale).map((item) => ({ locale, slug: item.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getInsight(slug, locale as "ar" | "en");
  if (!article) return {};
  return {
    title: article.meta.title,
    description: article.meta.description,
    alternates: {
      canonical: `${business.brand.domain}/${locale}/insights/${slug}`,
      languages: {
        ar: `${business.brand.domain}/ar/insights/${slug}`,
        en: `${business.brand.domain}/en/insights/${slug}`,
        "x-default": `${business.brand.domain}/ar/insights/${slug}`,
      },
    },
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const article = getInsight(slug, locale as "ar" | "en");
  if (!article) notFound();

  return (
    <article className="section-y">
      <div className="container-page max-w-3xl">
        <p className="eyebrow">{article.meta.date}</p>
        <h1 className="display mt-3 text-4xl">{article.meta.title}</h1>
        <p className="lede mt-4">{article.meta.description}</p>
        <div
          className="prose-measure mt-10 space-y-4 text-body text-ink [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_ol]:ps-5 [&_ul]:ps-5"
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </div>
    </article>
  );
}
