import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { business } from "@/config/business";

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
  const isAr = locale === "ar";

  return (
    <section className="section-y">
      <div className="container-page">
        <h1 className="display text-4xl">{t("title")}</h1>
        <p className="lede mt-4">{t("intro")}</p>
        <ul className="mt-10 grid gap-8 p-0 md:grid-cols-3">
          {business.companies.map((c) => (
            <li key={c.id} className="list-none border-t-2 border-petrol pt-5">
              {"verbEn" in c && c.verbEn ? (
                <p className="eyebrow m-0">{isAr ? c.verbAr : c.verbEn}</p>
              ) : null}
              <h2 className="display text-2xl m-0">{isAr ? c.nameAr : c.nameEn}</h2>
              <p className="mt-3 text-slate m-0">{isAr ? c.roleAr : c.roleEn}</p>
              {"audienceEn" in c && c.audienceEn ? (
                <p className="mt-2 text-slate m-0">{isAr ? c.audienceAr : c.audienceEn}</p>
              ) : null}
              {"leadEn" in c && c.leadEn ? (
                <p className="mt-2 text-slate m-0">{isAr ? c.leadAr : c.leadEn}</p>
              ) : null}
              {c.href.startsWith("/") ? (
                <Link href={c.href} className="btn btn-secondary mt-5">
                  {t("talk")}
                </Link>
              ) : (
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-5">
                  {t("visit")}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
