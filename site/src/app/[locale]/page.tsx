import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { business } from "@/config/business";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const path = locale === "ar" ? "/ar" : "/en";
  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
    alternates: {
      canonical: `${business.brand.domain}${path}`,
      languages: {
        ar: `${business.brand.domain}/ar`,
        en: `${business.brand.domain}/en`,
        "x-default": `${business.brand.domain}/ar`,
      },
    },
    openGraph: {
      title: t("homeTitle"),
      description: t("homeDescription"),
      url: `${business.brand.domain}${path}`,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const isAr = locale === "ar";

  return (
    <>
      <section className="section-y">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">{t("kicker")}</p>
          <h1 className="display mt-4 text-4xl md:text-5xl">{t("title")}</h1>
          <p className="lede mt-5 text-body">{t("body")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/ai" className="btn btn-primary">
              {t("ctaPrimary")}
            </Link>
            <Link href="/companies" className="btn btn-secondary">
              {t("ctaSecondary")}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-petrol text-white">
        <div className="container-page section-y grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <h2 className="display text-3xl text-white m-0">{t("aiBandTitle")}</h2>
            <p className="mt-4 max-w-measure text-[1.05rem] leading-relaxed text-white/75 m-0">{t("aiBandBody")}</p>
            <Link href="/ai/diagnosis" className="btn btn-on-petrol mt-7">
              {t("aiBandCta")}
            </Link>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white p-2">
            <Image
              src="/Tasami Group.png"
              alt={isAr ? "هيكل مجموعة تسامي" : "Tasami Group structure"}
              width={1536}
              height={1024}
              className="h-auto w-full rounded-xl"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <h2 className="display text-3xl">{t("companiesTitle")}</h2>
          <p className="lede mt-3">{t("companiesBody")}</p>
          <ul className="mt-10 grid gap-6 p-0 md:grid-cols-3">
            {business.companies.map((company) => (
              <li key={company.id} className="list-none border-s-2 border-petrol ps-4">
                <h3 className="display text-xl m-0">{isAr ? company.nameAr : company.nameEn}</h3>
                <p className="mt-2 text-slate m-0">{isAr ? company.roleAr : company.roleEn}</p>
                <a href={company.href} className="mt-4 inline-block text-petrol font-semibold" target="_blank" rel="noopener noreferrer">
                  {company.href.replace(/^https?:\/\//, "")}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
