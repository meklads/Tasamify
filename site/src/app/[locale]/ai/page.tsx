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
      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <h1 className="display text-4xl md:text-5xl">{t("heroTitle")}</h1>
            <p className="lede mt-5 text-body">{t("heroSubtitle")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/ai/diagnosis" className="btn btn-primary">
                {t("ctaPrimary")}
              </Link>
              <a href="#how-it-works" className="btn btn-secondary">
                {t("ctaSecondary")}
              </a>
            </div>
          </div>
          <div id="how-it-works">
            <HeroFlow label={t("flowLabel")} steps={steps} replayLabel={common("replay")} />
          </div>
        </div>
      </section>

      <section className="section-y border-t border-line">
        <div className="container-page">
          <h2 className="display text-3xl">{t("servicesTitle")}</h2>
          <p className="lede mt-3">{t("servicesBody")}</p>
          <ul className="mt-10 grid gap-8 p-0 md:grid-cols-2">
            {business.serviceSlugs.map((slug) => (
              <li key={slug} className="list-none border-b border-line pb-6">
                <h3 className="display text-2xl m-0">{services(`${slug}.name`)}</h3>
                <p className="mt-2 text-slate m-0">{services(`${slug}.summary`)}</p>
                <p className="mt-3 text-sm text-ink m-0">
                  {common("estimatedDuration")}: {serviceDuration(slug as ServiceSlug, locale)}
                </p>
                <Link href={`/ai/services/${slug}`} className="mt-4 inline-block font-semibold text-petrol">
                  {common("learnMore")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page">
          <h2 className="display text-3xl">{t("methodTitle")}</h2>
          <p className="lede mt-3">{t("methodIntro")}</p>
          <ol className="mt-10 grid gap-6 p-0 md:grid-cols-4">
            {methodKeys.map((key, index) => (
              <li key={key} className="list-none">
                <p className="text-sm font-semibold text-amber m-0">{index + 1}</p>
                <h3 className="display mt-2 text-xl">{t(`method.${key}.title`)}</h3>
                <p className="mt-2 text-slate m-0">{t(`method.${key}.body`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <h2 className="display text-3xl">{t("casesTitle")}</h2>
          <p className="lede mt-3">{t("casesBody")}</p>
          <ul className="mt-8 grid gap-6 p-0 md:grid-cols-3">
            {(cases.raw("items") as Array<{ id: string; title: string; body: string; metric: string }>).map((item) => (
              <li key={item.id} className="list-none surface-card p-5">
                <h3 className="display text-xl m-0">{item.title}</h3>
                <p className="mt-3 text-slate m-0">{item.body}</p>
                <p className="mt-4 text-sm font-semibold text-petrol m-0">{item.metric}</p>
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
          <h2 className="display text-3xl">{t("trustTitle")}</h2>
          <ul className="mt-6 grid gap-3 p-0">
            <li className="list-none text-ink">{t("trustYears", { years: business.trust.yearsExperience })}</li>
            <li className="list-none text-ink">{t("trustCompanies", { count: business.trust.companiesCount })}</li>
          </ul>
          <h3 className="display mt-10 text-2xl">{t("privacyTitle")}</h3>
          <p className="lede mt-3">{t("privacyBody")}</p>
          <p className="mt-2 text-sm text-slate">{t("privacyTodo")}</p>
        </div>
      </section>

      <section className="section-y bg-white border-t border-line">
        <div className="container-page max-w-3xl">
          <h2 className="display text-3xl">{t("pricingTitle")}</h2>
          <p className="lede mt-4">{t("pricingBody")}</p>
          <Link href="/ai/diagnosis" className="btn btn-primary mt-8">
            {t("ctaPrimary")}
          </Link>
        </div>
      </section>
    </>
  );
}
