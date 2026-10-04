import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { business, whatsappHref } from "@/config/business";

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

  return (
    <section className="section-y">
      <div className="container-page max-w-2xl">
        <h1 className="display text-4xl">{t("title")}</h1>
        <p className="lede mt-4">{t("body")}</p>
        <ul className="mt-8 grid gap-4 p-0">
          <li className="list-none">
            <span className="eyebrow">{t("email")}</span>
            <a className="mt-1 block text-lg text-petrol font-semibold" href={`mailto:${business.contact.email}`}>
              {business.contact.email}
            </a>
          </li>
          <li className="list-none">
            <span className="eyebrow">{t("phone")}</span>
            <a className="mt-1 block text-lg text-petrol font-semibold" href={`tel:${business.contact.telephone}`} dir="ltr">
              {business.contact.whatsappDisplay}
            </a>
          </li>
          <li className="list-none">
            <span className="eyebrow">{t("whatsapp")}</span>
            <a
              className="mt-1 block text-lg text-petrol font-semibold"
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
    </section>
  );
}
