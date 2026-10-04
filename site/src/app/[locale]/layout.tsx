import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { IBM_Plex_Sans_Arabic, Readex_Pro, Source_Sans_3 } from "next/font/google";
import { routing } from "@/i18n/routing";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { JsonLd } from "@/components/seo/JsonLd";
import { business } from "@/config/business";
import "../globals.css";

const readex = Readex_Pro({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-latin",
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

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${readex.variable} ${plexArabic.variable} ${sourceSans.variable}`}
    >
      <body className="font-body antialiased">
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
