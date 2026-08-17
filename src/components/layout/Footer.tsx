import { useLang } from '../../lib/LanguageContext'
import { t, tx, brandSites } from '../../lib/translations'
import TasamiLogo from '../TasamiLogo'
import LangToggle from '../LangToggle'

export default function Footer() {
  const { lang, isAr } = useLang()

  const sites = [
    { label: tx(t.brands.ghName, lang), href: brandSites.graphicsHouse },
    { label: tx(t.brands.tuName, lang), href: brandSites.turriva },
    { label: tx(t.brands.bmName, lang), href: brandSites.beesMotion },
  ]

  return (
    <footer style={{ background: '#10182A' }}>
      <div className="container-xl py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <TasamiLogo variant="footer" isAr={isAr} />

          <nav className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {sites.map((site) => (
              <a
                key={site.href}
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-cream/55 hover:text-gold transition-colors"
                style={{ textDecoration: 'none' }}
              >
                {site.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <p className="text-[12px] text-cream/40 m-0">{tx(t.footer.copy, lang)}</p>
            <LangToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
