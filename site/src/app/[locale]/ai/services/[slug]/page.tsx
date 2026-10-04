import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { business, serviceDuration, whatsappHref, type ServiceSlug } from "@/config/business";
import { JsonLd } from "@/components/seo/JsonLd";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    business.serviceSlugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!business.serviceSlugs.includes(slug as ServiceSlug)) return {};
  const services = await getTranslations({ locale, namespace: "services" });
  const title = services(`${slug}.name`);
  const description = services(`${slug}.summary`);
  return {
    title: `${title} | Tasami AI`,
    description,
    alternates: {
      canonical: `${business.brand.domain}/${locale}/ai/services/${slug}`,
      languages: {
        ar: `${business.brand.domain}/ar/ai/services/${slug}`,
        en: `${business.brand.domain}/en/ai/services/${slug}`,
        "x-default": `${business.brand.domain}/ar/ai/services/${slug}`,
      },
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  if (!business.serviceSlugs.includes(slug as ServiceSlug)) notFound();
  setRequestLocale(locale);
  const services = await getTranslations("services");
  const common = await getTranslations("common");
  const ai = await getTranslations("ai");
  const page = await getTranslations("servicePage");
  const faqs = services.raw(`${slug}.faqs`) as Array<{ q: string; a: string }>;
  const serviceName = services(`${slug}.name`);

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: serviceName,
            description: services(`${slug}.summary`),
            provider: {
              "@type": "Organization",
              name: business.brand.aiName,
              telephone: business.contact.telephone,
            },
            areaServed: "SA",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />
      <article className="section-y">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">{business.brand.aiName}</p>
          <h1 className="display mt-3 text-4xl">{serviceName}</h1>
          <p className="lede mt-4">{services(`${slug}.summary`)}</p>

          <h2 className="display mt-12 text-2xl">{page("problem")}</h2>
          <p className="lede mt-3">{services(`${slug}.problem`)}</p>

          <h2 className="display mt-10 text-2xl">{page("build")}</h2>
          <p className="lede mt-3">{services(`${slug}.build`)}</p>

          <h2 className="display mt-10 text-2xl">{page("deliver")}</h2>
          <p className="lede mt-3">{services(`${slug}.deliver`)}</p>

          <h2 className="display mt-10 text-2xl">{page("duration")}</h2>
          <p className="lede mt-3">{serviceDuration(slug as ServiceSlug, locale)}</p>

          <h2 className="display mt-12 text-2xl">{page("faq")}</h2>
          <dl className="mt-6 grid gap-5">
            {faqs.map((f) => (
              <div key={f.q}>
                <dt className="font-semibold text-ink">{f.q}</dt>
                <dd className="mt-1 text-slate m-0">{f.a}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/ai/diagnosis" className="btn btn-primary">
              {ai("ctaPrimary")}
            </Link>
            <a
              href={whatsappHref(business.whatsappMessages.service(serviceName))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              {common("whatsapp")}
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
