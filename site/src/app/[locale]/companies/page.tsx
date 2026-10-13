import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { business } from "@/config/business";
import { PageHero } from "@/components/brand/PageHero";
import { CompanyGrid } from "@/components/brand/CompanyGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("companiesTitle"),
    description: t("companiesDescription"),
    alternates: {
      canonical: `${business.brand.domain}/${locale}/companies`,
      languages: {
        ar: `${business.brand.domain}/ar/companies`,
        en: `${business.brand.domain}/en/companies`,
        "x-default": `${business.brand.domain}/ar/companies`,
      },
    },
  };
}

export default async function CompaniesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("companiesPage");

  return (
    <>
      <PageHero kicker={t("kicker")} title={t("title")} lede={t("intro")} />
      <section className="section-y">
        <div className="container-page">
          <CompanyGrid locale={locale} visitLabel={t("visit")} />
        </div>
      </section>
      <section className="band-navy section-y">
        <div className="container-page max-w-3xl">
          <p className="hero-kicker mb-4">{locale === "ar" ? business.brand.aiNameAr : business.brand.aiName}</p>
          <h2 className="section-title m-0 text-[#f6f3ec]">{t("aiTitle")}</h2>
          <p className="mt-5 m-0 text-[16px] md:text-[18px] leading-[1.9] font-light" style={{ color: "rgba(246,243,236,0.68)" }}>
            {t("aiBody")}
          </p>
          <Link href="/ai" className="btn btn-on-petrol mt-8">
            {t("aiCta")}
          </Link>
        </div>
      </section>
    </>
  );
}
