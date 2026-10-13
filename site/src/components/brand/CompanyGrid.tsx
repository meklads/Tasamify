import { groupCompanies } from "@/config/business";

export function CompanyGrid({
  locale,
  visitLabel,
}: {
  locale: string;
  visitLabel: string;
}) {
  const isAr = locale === "ar";

  return (
    <div className="company-grid">
      {groupCompanies.map((company) => (
        <article key={company.id} id={company.id} className={`company-plate company-plate--${company.tone}`}>
          <a
            href={company.href}
            target="_blank"
            rel="noopener noreferrer"
            className="company-logo-well"
          >
            {/* Logos must render as provided artwork. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={company.logo} alt={isAr ? company.nameAr : company.nameEn} />
          </a>
          <div className="company-body">
            <p className="company-verb">{isAr ? company.verbAr : company.verbEn}</p>
            <h3 className="company-name">{isAr ? company.nameAr : company.nameEn}</h3>
            <p className="company-role">{isAr ? company.roleAr : company.roleEn}</p>
            <p className="company-market">{isAr ? company.marketAr : company.marketEn}</p>
            <p className="company-lead">{isAr ? company.leadAr : company.leadEn}</p>
            <a href={company.href} target="_blank" rel="noopener noreferrer" className="house-cta house-cta--light">
              <span>{visitLabel}</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden style={{ transform: isAr ? "scaleX(-1)" : undefined }}>
                <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
