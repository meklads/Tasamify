import { useLang } from '../../lib/LanguageContext'
import { t, tx, brandSites } from '../../lib/translations'
import TasamiLogo from '../TasamiLogo'

export default function Footer() {
  const { lang, isAr } = useLang()

  const sites = [
    { label: tx(t.brands.ghName, lang), href: brandSites.graphicsHouse },
    { label: tx(t.brands.tuName, lang), href: brandSites.turriva },
    { label: tx(t.brands.bmName, lang), href: brandSites.beesMotion },
  ]

  return (
    <footer style={{ background: '#10182A', borderTop: '1px solid rgba(201, 162, 75, 0.28)' }}>
      <div className="container-xl py-8 md:py-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <TasamiLogo variant="footer" isAr={isAr} />
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {sites.map((site) => (
                <a
                  key={site.href}
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-cream/75 hover:text-gold transition-colors"
                  style={{ textDecoration: 'none' }}
                >
                  {site.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t border-white/10 pt-5">
            <p className="text-[13px] text-cream/70 m-0">{tx(t.footer.copy, lang)}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
