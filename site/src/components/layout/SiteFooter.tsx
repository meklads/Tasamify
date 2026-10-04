import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { business, whatsappHref } from "@/config/business";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");
  const common = await getTranslations("common");

  return (
    <footer className="border-t border-line bg-white">
      <div className="container-page section-y grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-display text-xl font-semibold text-petrol m-0">{business.brand.groupName}</p>
          <p className="lede mt-3">{t("tagline")}</p>
          <a
            href={whatsappHref(business.whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block font-semibold text-petrol"
          >
            {common("whatsapp")}: {business.contact.whatsappDisplay}
          </a>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link href="/ai">{nav("ai")}</Link>
          <Link href="/companies">{nav("companies")}</Link>
          <Link href="/ai/diagnosis">{nav("diagnosis")}</Link>
          <Link href="/privacy">{nav("privacy")}</Link>
          <Link href="/contact">{nav("contact")}</Link>
        </div>
      </div>
      <div className="container-page border-t border-line py-4 text-sm text-slate">
        © {new Date().getFullYear()} {business.brand.groupName}. {t("rights")}
      </div>
    </footer>
  );
}
