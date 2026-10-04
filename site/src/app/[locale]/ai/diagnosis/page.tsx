import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { business } from "@/config/business";
import { SavingsCalculator } from "@/components/ai/SavingsCalculator";
import { DiagnosisForm } from "@/components/ai/DiagnosisForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("diagnosisTitle"),
    description: t("diagnosisDescription"),
    alternates: {
      canonical: `${business.brand.domain}/${locale}/ai/diagnosis`,
      languages: {
        ar: `${business.brand.domain}/ar/ai/diagnosis`,
        en: `${business.brand.domain}/en/ai/diagnosis`,
        "x-default": `${business.brand.domain}/ar/ai/diagnosis`,
      },
    },
  };
}

export default async function DiagnosisPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("diagnosis");
  const common = await getTranslations("common");
  const ai = await getTranslations("ai");

  return (
    <section className="section-y">
      <div className="container-page">
        <h1 className="display text-4xl max-w-measure">{t("title")}</h1>
        <p className="lede mt-4">{t("intro")}</p>
        <p className="lede mt-3 text-sm">{t("pricingNote")}</p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
          <SavingsCalculator
            locale={locale}
            labels={{
              title: t("calculatorTitle"),
              employees: t("employees"),
              weeklyHours: t("weeklyHours"),
              hourlyCost: t("hourlyCost"),
              sector: t("sector"),
              monthlySave: t("monthlySave"),
              yearlySave: t("yearlySave"),
              estimateNote: common("estimateNote"),
              whatsappQuote: common("whatsappQuote"),
              orBookForm: common("orBookForm"),
              sectors: t.raw("sectors") as Record<string, string>,
            }}
          />
          <DiagnosisForm
            locale={locale}
            labels={{
              formTitle: t("formTitle"),
              name: t("name"),
              company: t("company"),
              sector: t("sector"),
              companySize: t("companySize"),
              phone: t("phone"),
              challenge: t("challenge"),
              budget: t("budget"),
              budgetOptional: t("budgetOptional"),
              submit: common("submit"),
              sending: common("sending"),
              success: common("success"),
              error: common("error"),
              sectors: t.raw("sectors") as Record<string, string>,
              sizes: t.raw("sizes") as Record<string, string>,
            }}
          />
        </div>
        <div className="mt-12 max-w-measure">
          <h2 className="display text-2xl">{ai("pricingTitle")}</h2>
          <p className="lede mt-3">{t("pricingNote")}</p>
        </div>
      </div>
    </section>
  );
}
