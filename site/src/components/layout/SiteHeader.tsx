"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { business, whatsappHref } from "@/config/business";
import { TasamiLogo } from "@/components/brand/TasamiLogo";

export function SiteHeader() {
  const t = useTranslations("nav");
  const common = useTranslations("common");
  const locale = useLocale();
  const other = locale === "ar" ? "en" : "ar";
  const [open, setOpen] = useState(false);
  const brandAlt = locale === "ar" ? business.brand.groupNameAr : business.brand.groupName;

  const links = [
    { href: "/ai", label: t("ai") },
    { href: "/companies", label: t("companies") },
    { href: "/insights", label: t("insights") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ] as const;

  return (
    <header className={`site-header${open ? " is-open" : ""}`}>
      <div className="container-page site-header-inner">
        <Link href="/" className="inline-flex no-underline" onClick={() => setOpen(false)}>
          <TasamiLogo variant="navbar" alt={brandAlt} priority />
        </Link>
        <nav className="site-nav" aria-label={brandAlt}>
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <a href={whatsappHref(business.whatsappMessages.general)} target="_blank" rel="noopener noreferrer">
            {common("whatsapp")}
          </a>
          <Link href="/" locale={other}>
            {t("language")}
          </Link>
        </nav>
        <Link href="/ai/diagnosis" className="btn btn-primary text-sm header-cta" onClick={() => setOpen(false)}>
          {t("book")}
        </Link>
        <button type="button" className="nav-toggle" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((v) => !v)}>
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
            <path d={open ? "M1 1L17 11M17 1L1 11" : "M0 1H18M0 6H18M0 11H18"} stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </button>
      </div>
      <nav id="mobile-nav" className="container-page site-nav-mobile">
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <a href={whatsappHref(business.whatsappMessages.general)} target="_blank" rel="noopener noreferrer">
          {common("whatsapp")}
        </a>
        <Link href="/" locale={other} onClick={() => setOpen(false)}>
          {t("language")}
        </Link>
        <Link href="/ai/diagnosis" className="btn btn-primary mt-2 self-start" onClick={() => setOpen(false)}>
          {t("book")}
        </Link>
      </nav>
    </header>
  );
}
