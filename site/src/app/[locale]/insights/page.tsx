import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { business } from "@/config/business";
import { getInsights } from "@/lib/insights";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("insightsTitle"),
    description: t("insightsDescription"),
    alternates: {
      canonical: `${business.brand.domain}/${locale}/insights`,
      languages: {
        ar: `${business.brand.domain}/ar/insights`,
        en: `${business.brand.domain}/en/insights`,
        "x-default": `${business.brand.domain}/ar/insights`,
      },
    },
  };
}

export default async function InsightsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("insights");
  const items = getInsights(locale as "ar" | "en");

  return (
    <>
      <section className="page-hero">
        <div className="container-page">
          <h1 className="page-hero-title">{t("title")}</h1>
          <p className="page-hero-lede">{t("intro")}</p>
        </div>
      </section>
      <section className="section-y">
        <div className="container-page">
          <ul className="mt-0 grid gap-6 p-0">
            {items.map((item) => (
              <li key={item.slug} className="list-none border-b border-line pb-6">
                <h2 className="display text-2xl m-0">{item.title}</h2>
                <p className="mt-2 text-slate m-0">{item.description}</p>
                <Link href={`/insights/${item.slug}`} className="house-cta mt-4">
                  {t("read")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
