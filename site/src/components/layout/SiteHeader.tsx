import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { business, whatsappHref } from "@/config/business";

export async function SiteHeader() {
  const t = await getTranslations("nav");
  const common = await getTranslations("common");
  const locale = await getLocale();
  const other = locale === "ar" ? "en" : "ar";

  const links = [
    { href: "/ai", label: t("ai") },
    { href: "/companies", label: t("companies") },
    { href: "/insights", label: t("insights") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-mist/95 backdrop-blur">
      <div className="container-page flex flex-wrap items-center gap-3 py-3 md:gap-5">
        <Link href="/" className="font-display text-lg font-semibold text-petrol no-underline">
          {locale === "ar" ? business.brand.groupNameAr : business.brand.groupName}
        </Link>
        <nav className="ms-auto flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-ink">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="no-underline hover:text-petrol">
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappHref(business.whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-slate hover:text-petrol"
          >
            {common("whatsapp")}
          </a>
          <Link href="/" locale={other} className="no-underline text-slate hover:text-petrol">
            {t("language")}
          </Link>
          <Link href="/ai/diagnosis" className="btn btn-primary text-sm">
            {t("book")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
