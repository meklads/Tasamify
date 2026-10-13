import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { business, groupCompanies } from "@/config/business";
import { PageHero } from "@/components/brand/PageHero";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("aboutTitle"),
    description: t("aboutDescription"),
    alternates: {
      canonical: `${business.brand.domain}/${locale}/about`,
      languages: {
        ar: `${business.brand.domain}/ar/about`,
        en: `${business.brand.domain}/en/about`,
        "x-default": `${business.brand.domain}/ar/about`,
      },
    },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const home = await getTranslations("home");
  const isAr = locale === "ar";

  return (
    <>
      <PageHero kicker={t("kicker")} title={t("title")} lede={t("body")} />
      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="prose-hold m-0">{t("body2")}</p>
            <p className="prose-hold mt-6 m-0">{t("body3")}</p>
          </div>
          <aside className="lg:col-span-5">
            <p className="section-kicker mb-4">{home("companiesKicker")}</p>
            <ul className="m-0 grid gap-5 p-0">
              {groupCompanies.map((company) => (
                <li key={company.id} className="list-none border-s-2 ps-4" style={{ borderColor: "var(--gold)" }}>
                  <p className="eyebrow m-0">{isAr ? company.verbAr : company.verbEn}</p>
                  <h2 className="display mt-1 text-xl">{isAr ? company.nameAr : company.nameEn}</h2>
                  <p className="mt-1 text-slate m-0">{isAr ? company.roleAr : company.roleEn}</p>
                </li>
              ))}
            </ul>
            <Link href="/ai" className="btn btn-primary mt-8">
              {home("ctaPrimary")}
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
