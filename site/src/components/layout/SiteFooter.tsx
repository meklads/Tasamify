import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { business, groupCompanies, whatsappHref } from "@/config/business";
import { TasamiLogo } from "@/components/brand/TasamiLogo";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");
  const common = await getTranslations("common");
  const locale = await getLocale();
  const isAr = locale === "ar";

  return (
    <footer className="site-footer">
      <div className="container-page section-y grid gap-10 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
        <div>
          <TasamiLogo variant="footer" alt={isAr ? business.brand.groupNameAr : business.brand.groupName} />
          <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed m-0" style={{ color: "rgba(246,243,236,0.68)" }}>
            {t("tagline")}
          </p>
          <a
            href={whatsappHref(business.whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block font-medium"
            dir="ltr"
          >
            {common("whatsapp")}: {business.contact.whatsappDisplay}
          </a>
        </div>
        <div>
          <p className="hero-kicker mb-4">{t("companies")}</p>
          <ul className="m-0 grid gap-2 p-0">
            {groupCompanies.map((company) => (
              <li key={company.id} className="list-none">
                <a href={company.href} target="_blank" rel="noopener noreferrer">
                  {isAr ? company.nameAr : company.nameEn}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="hero-kicker mb-4">{t("group")}</p>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/ai">{nav("ai")}</Link>
            <Link href="/companies">{nav("companies")}</Link>
            <Link href="/ai/diagnosis">{nav("diagnosis")}</Link>
            <Link href="/about">{nav("about")}</Link>
            <Link href="/contact">{nav("contact")}</Link>
            <Link href="/privacy">{nav("privacy")}</Link>
          </div>
        </div>
      </div>
      <div className="container-page border-t border-white/10 py-4 text-sm" style={{ color: "rgba(246,243,236,0.45)" }}>
        © {new Date().getFullYear()} {business.brand.groupName}. {t("rights")}
      </div>
    </footer>
  );
}
