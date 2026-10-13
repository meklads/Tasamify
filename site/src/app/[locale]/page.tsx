import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { business, groupCompanies } from "@/config/business";
import { TasamiLogo } from "@/components/brand/TasamiLogo";
import { CompanyGrid } from "@/components/brand/CompanyGrid";

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
    twitter: {
      card: "summary",
      title: t("homeTitle"),
      description: t("homeDescription"),
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const ai = await getTranslations("ai");
  const isAr = locale === "ar";
  const methodKeys = ["diagnose", "prototype", "build", "support"] as const;

  return (
    <>
      <section className="hero-stage">
        <div className="container-page hero-stage-inner">
          <p className="hero-kicker mb-8 md:mb-10">{t("kicker")}</p>
          <div className="m-0 flex flex-col items-center">
            <TasamiLogo
              variant="hero"
              alt={isAr ? business.brand.groupNameAr : business.brand.groupName}
              priority
            />
            <span className="hero-group">{t("groupWord")}</span>
          </div>
          <h1 className="hero-subhead">{t("title")}</h1>
          <p className="hero-support mx-auto">{t("body")}</p>
          <div className="hero-actions">
            <Link href="/ai" className="btn hero-cta--solid">
              {t("ctaPrimary")}
            </Link>
            <Link href="/companies" className="btn hero-cta--ghost">
              {t("ctaSecondary")}
            </Link>
          </div>
          <nav className="arch-nav" aria-label={t("companiesTitle")}>
            {groupCompanies.map((company) => (
              <a key={company.id} href={`#${company.id}`} className="arch-nav-item">
                <span className="arch-nav-name">{isAr ? company.nameAr : company.nameEn}</span>
                <span className="arch-nav-verb">{isAr ? company.verbAr : company.verbEn}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-5">
            <p className="section-kicker mb-4">{t("storyKicker")}</p>
            <h2 className="section-title m-0">{t("storyTitle")}</h2>
          </div>
          <div className="lg:col-span-7 lg:pt-10">
            <p className="prose-hold m-0 mb-6">{t("storyBody")}</p>
            <p className="prose-hold m-0 mb-8">{t("storyBody2")}</p>
            <Link href="/about" className="house-cta">
              {t("storyMore")}
            </Link>
          </div>
        </div>
      </section>

      <section id="companies" className="pb-16 md:pb-28">
        <div className="container-page">
          <p className="section-kicker mb-4">{t("companiesKicker")}</p>
          <h2 className="section-title m-0 mb-4">{t("companiesTitle")}</h2>
          <p className="lede mb-10 md:mb-14">{t("companiesBody")}</p>
          <CompanyGrid locale={locale} visitLabel={t("visit")} />
        </div>
      </section>

      <section className="band-navy section-y">
        <div className="container-page">
          <p className="hero-kicker mb-4">{t("aiKicker")}</p>
          <h2 className="section-title m-0 text-[#f6f3ec]">{t("aiBandTitle")}</h2>
          <p className="mt-5 max-w-3xl text-[16px] md:text-[18px] leading-[1.9] font-light m-0" style={{ color: "rgba(246,243,236,0.68)" }}>
            {t("aiBandBody")}
          </p>
          <ol className="method-grid mt-12">
            {methodKeys.map((key, index) => (
              <li key={key}>
                <p className="method-num" dir="ltr">{`0${index + 1}`}</p>
                <h3 className="method-title">{ai(`method.${key}.title`)}</h3>
                <p className="method-body">{ai(`method.${key}.body`)}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/ai/diagnosis" className="btn btn-on-petrol">
              {t("aiBandCta")}
            </Link>
            <Link href="/ai" className="btn btn-ghost-on-petrol">
              {t("ctaPrimary")}
            </Link>
          </div>
        </div>
      </section>

      <section className="band-navy pb-20 md:pb-28">
        <div className="container-page">
          <p className="hero-kicker mb-4">{t("umbrellaKicker")}</p>
          <h2 className="section-title m-0 mb-5 text-[#f6f3ec]">{t("umbrellaTitle")}</h2>
          <p className="max-w-3xl mb-10 md:mb-14 text-[16px] md:text-[18px] leading-[1.9] font-light m-0" style={{ color: "rgba(246,243,236,0.68)" }}>
            {t("umbrellaBody")}
          </p>
          <figure className="group-structure-figure m-0">
            <Image
              src="/Tasami Group.png"
              alt={isAr ? "هيكل مجموعة تسامي: جرافيكس هاوس وبيز موشن وتوريفا" : "Tasami Group structure: Graphics House, Bees Motion, and Turriva"}
              width={1536}
              height={1024}
              className="group-structure-img"
            />
          </figure>
        </div>
      </section>
    </>
  );
}
