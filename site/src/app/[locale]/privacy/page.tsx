import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { business } from "@/config/business";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("privacyTitle"),
    description: t("privacyDescription"),
    alternates: {
      canonical: `${business.brand.domain}/${locale}/privacy`,
      languages: {
        ar: `${business.brand.domain}/ar/privacy`,
        en: `${business.brand.domain}/en/privacy`,
        "x-default": `${business.brand.domain}/ar/privacy`,
      },
    },
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");

  return (
    <section className="section-y">
      <div className="container-page max-w-3xl">
        <h1 className="display text-4xl">{t("title")}</h1>
        <p className="lede mt-5">{t("body")}</p>
        <p className="lede mt-4">{t("body2")}</p>
      </div>
    </section>
  );
}
