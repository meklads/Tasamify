import type { CSSProperties, ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Cairo, Cormorant_Garamond, Outfit } from "next/font/google";
import { routing } from "@/i18n/routing";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { JsonLd } from "@/components/seo/JsonLd";
import { business } from "@/config/business";
import "../globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "ar" | "en")) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "common" });
  const dir = locale === "ar" ? "rtl" : "ltr";
  const displayVar = locale === "ar" ? cairo.variable : cormorant.variable;
  const bodyVar = locale === "ar" ? cairo.variable : outfit.variable;

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${cairo.variable} ${outfit.variable} ${cormorant.variable}`}
      style={
        {
          "--font-display": locale === "ar" ? "var(--font-cairo)" : "var(--font-cormorant)",
          "--font-body": locale === "ar" ? "var(--font-cairo)" : "var(--font-outfit)",
        } as CSSProperties
      }
    >
      <body className={`${displayVar} ${bodyVar} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@type": "Organization",
              name: business.brand.groupName,
              alternateName: business.brand.groupNameAr,
              url: business.brand.domain,
              email: business.contact.email,
              telephone: business.contact.telephone,
              subOrganization: business.companies.map((c) => ({
                "@type": "Organization",
                name: c.nameEn,
                url: c.href,
              })),
              makesOffer: {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: business.tasamiAi.roleEn,
                  alternateName: business.tasamiAi.roleAr,
                  url: `${business.brand.domain}/ar/ai`,
                },
              },
            }}
          />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <WhatsAppFloat label={t("whatsapp")} message={business.whatsappMessages.general} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
