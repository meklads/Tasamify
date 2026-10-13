import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { business, serviceDuration, type ServiceSlug } from "@/config/business";
import { HeroFlow } from "@/components/ai/HeroFlow";
import { JsonLd } from "@/components/seo/JsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("aiTitle"),
    description: t("aiDescription"),
    alternates: {
      canonical: `${business.brand.domain}/${locale}/ai`,
      languages: {
        ar: `${business.brand.domain}/ar/ai`,
        en: `${business.brand.domain}/en/ai`,
        "x-default": `${business.brand.domain}/ar/ai`,
      },
    },
  };
}

export default async function AiPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ai");
  const common = await getTranslations("common");
  const services = await getTranslations("services");
  const cases = await getTranslations("cases");

  const steps = [
    { key: "whatsapp", label: t("flowSteps.whatsapp") },
    { key: "classify", label: t("flowSteps.classify") },
    { key: "crm", label: t("flowSteps.crm") },
    { key: "meeting", label: t("flowSteps.meeting") },
  ];

  const methodKeys = ["diagnose", "prototype", "build", "support"] as const;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${business.brand.domain}/${locale}` },
            { "@type": "ListItem", position: 2, name: "Tasami AI", item: `${business.brand.domain}/${locale}/ai` },
          ],
        }}
      />
      <section className="page-hero">
        <div className="container-page">
          <p className="hero-kicker mb-4">{locale === "ar" ? business.brand.aiNameAr : business.brand.aiName}</p>
          <h1 className="page-hero-title m-0 max-w-none">{t("heroTitle")}</h1>
          <p className="page-hero-lede">{t("heroSubtitle")}</p>
          <p className="page-hero-lede mt-3">{t("audience")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/ai/diagnosis" className="btn btn-on-petrol">
              {t("ctaPrimary")}
            </Link>
            <a href="#how-it-works" className="btn btn-ghost-on-petrol">
              {t("ctaSecondary")}
            </a>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="section-y">
        <div className="container-page">
          <HeroFlow label={t("flowLabel")} steps={steps} replayLabel={common("replay")} />
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <p className="section-kicker mb-4">{t("servicesKicker")}</p>
          <h2 className="section-title m-0">{t("servicesTitle")}</h2>
          <p className="lede mt-3">{t("servicesBody")}</p>
          <ul className="mt-10 grid gap-8 p-0 md:grid-cols-2">
            {business.serviceSlugs.map((slug) => (
              <li key={slug} className="list-none border-b border-line pb-6">
                <h3 className="display text-2xl m-0">{services(`${slug}.name`)}</h3>
                <p className="mt-2 text-slate m-0">{services(`${slug}.summary`)}</p>
                <p className="mt-3 text-sm text-ink m-0">
                  {common("estimatedDuration")}: {serviceDuration(slug as ServiceSlug, locale)}
                </p>
                <Link href={`/ai/services/${slug}`} className="house-cta mt-4">
                  {common("learnMore")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band-navy section-y">
        <div className="container-page">
          <p className="hero-kicker mb-4">{t("methodKicker")}</p>
          <h2 className="section-title m-0 text-[#f6f3ec]">{t("methodTitle")}</h2>
          <p className="mt-4 max-w-3xl m-0 text-[16px] md:text-[18px] leading-[1.9] font-light" style={{ color: "rgba(246,243,236,0.68)" }}>
            {t("methodIntro")}
          </p>
          <ol className="method-grid mt-10">
            {methodKeys.map((key, index) => (
              <li key={key}>
                <p className="method-num" dir="ltr">{`0${index + 1}`}</p>
                <h3 className="method-title">{t(`method.${key}.title`)}</h3>
                <p className="method-body">{t(`method.${key}.body`)}</p>
                <p className="method-deliver">{t(`method.${key}.deliver`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <h2 className="section-title m-0">{t("casesTitle")}</h2>
          <p className="lede mt-3">{t("casesBody")}</p>
          <ul className="mt-8 grid gap-6 p-0 md:grid-cols-3">
            {(cases.raw("items") as Array<{ id: string; title: string; body: string; metric: string }>).map((item) => (
              <li key={item.id} className="list-none surface-card p-5">
                <h3 className="display text-xl m-0">{item.title}</h3>
                <p className="mt-3 text-slate m-0">{item.body}</p>
                <p className="mt-4 text-sm font-semibold text-gold m-0">{item.metric}</p>
              </li>
            ))}
          </ul>
          <Link href="/ai/case-studies" className="btn btn-secondary mt-8">
            {common("learnMore")}
          </Link>
        </div>
      </section>

      <section className="section-y border-t border-line">
        <div className="container-page max-w-3xl">
          <h2 className="section-title m-0">{t("trustTitle")}</h2>
          <ul className="mt-6 grid gap-3 p-0">
            <li className="list-none text-ink">{t("trustYears", { years: business.trust.yearsExperience })}</li>
            <li className="list-none text-ink">{t("trustCompanies", { count: business.trust.companiesCount })}</li>
          </ul>
          <h3 className="display mt-10 text-2xl">{t("privacyTitle")}</h3>
          <p className="lede mt-3">{t("privacyBody")}</p>
        </div>
      </section>

      <section className="band-navy section-y">
        <div className="container-page max-w-3xl">
          <h2 className="section-title m-0 text-[#f6f3ec]">{t("pricingTitle")}</h2>
          <p className="mt-4 m-0 text-[16px] md:text-[18px] leading-[1.9] font-light" style={{ color: "rgba(246,243,236,0.68)" }}>
            {t("pricingBody")}
          </p>
          <Link href="/ai/diagnosis" className="btn btn-on-petrol mt-8">
            {t("ctaPrimary")}
          </Link>
        </div>
      </section>
    </>
  );
}
