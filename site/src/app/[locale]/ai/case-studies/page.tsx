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
    title: t("caseStudiesTitle"),
    description: t("caseStudiesDescription"),
    alternates: {
      canonical: `${business.brand.domain}/${locale}/ai/case-studies`,
      languages: {
        ar: `${business.brand.domain}/ar/ai/case-studies`,
        en: `${business.brand.domain}/en/ai/case-studies`,
        "x-default": `${business.brand.domain}/ar/ai/case-studies`,
      },
    },
  };
}

export default async function CaseStudiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("cases");
  const ai = await getTranslations("ai");
  const items = t.raw("items") as Array<{ id: string; title: string; body: string; metric: string }>;

  return (
    <section className="section-y">
      <div className="container-page">
        <h1 className="display text-4xl">{t("title")}</h1>
        <p className="lede mt-4">{t("intro")}</p>
        <ul className="mt-10 grid gap-6 p-0 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.id} className="list-none surface-card p-6">
              <h2 className="display text-2xl m-0">{item.title}</h2>
              <p className="mt-3 text-slate m-0">{item.body}</p>
              <p className="mt-5 font-semibold text-petrol m-0">{item.metric}</p>
            </li>
          ))}
        </ul>
        <Link href="/ai/diagnosis" className="btn btn-primary mt-10">
          {ai("ctaPrimary")}
        </Link>
      </div>
    </section>
  );
}
