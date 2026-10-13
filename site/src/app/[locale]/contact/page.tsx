import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { business, groupCompanies, whatsappHref } from "@/config/business";
import { PageHero } from "@/components/brand/PageHero";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
    alternates: {
      canonical: `${business.brand.domain}/${locale}/contact`,
      languages: {
        ar: `${business.brand.domain}/ar/contact`,
        en: `${business.brand.domain}/en/contact`,
        "x-default": `${business.brand.domain}/ar/contact`,
      },
    },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const isAr = locale === "ar";

  return (
    <>
      <PageHero kicker={t("kicker")} title={t("title")} lede={t("routeQuestion")} />
      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="prose-hold mb-8">{t("body")}</p>
            <ul className="mt-0 grid gap-6 p-0">
              <li className="list-none">
                <span className="eyebrow">{t("email")}</span>
                <a className="mt-1 block text-lg font-semibold text-navy" href={`mailto:${business.contact.email}`}>
                  {business.contact.email}
                </a>
              </li>
              <li className="list-none">
                <span className="eyebrow">{t("phone")}</span>
                <a className="mt-1 block text-lg font-semibold text-navy" href={`tel:${business.contact.telephone}`} dir="ltr">
                  {business.contact.whatsappDisplay}
                </a>
              </li>
              <li className="list-none">
                <span className="eyebrow">{t("whatsapp")}</span>
                <a
                  className="mt-1 block text-lg font-semibold text-navy"
                  href={whatsappHref(business.whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  dir="ltr"
                >
                  {business.contact.whatsappDisplay}
                </a>
              </li>
            </ul>
            <Link href="/ai/diagnosis" className="btn btn-primary mt-8">
              {t("book")}
            </Link>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="section-kicker mb-5">{t("route")}</p>
            <div className="grid gap-4">
              {groupCompanies.map((company) => (
                <a
                  key={company.id}
                  href={company.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 no-underline min-h-14"
                >
                  <span className={`contact-logo contact-logo--${company.tone}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={company.logo} alt="" className="max-h-9 max-w-full w-auto object-contain" />
                  </span>
                  <span className="house-cta m-0">
                    <span>{isAr ? company.nameAr : company.nameEn}</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden style={{ transform: isAr ? "scaleX(-1)" : undefined }}>
                      <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              ))}
              <Link href="/ai" className="house-cta">
                <span>{t("aiOption")}</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden style={{ transform: isAr ? "scaleX(-1)" : undefined }}>
                  <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
