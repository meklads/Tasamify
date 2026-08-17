import { useLang } from '../../lib/LanguageContext'
import { t, tx, brandSites } from '../../lib/translations'
import TasamiMark from '../TasamiMark'

export default function Footer() {
  const { lang } = useLang()

  const sites = [
    { name: tx(t.brands.ghName, lang), href: brandSites.graphicsHouse },
    { name: tx(t.brands.tuName, lang), href: brandSites.turriva },
    { name: tx(t.brands.bmName, lang), href: brandSites.beesMotion },
  ]

  return (
    <footer style={{ background: '#10182A', borderTop: '1px solid rgba(201, 162, 75, 0.22)' }}>
      <div className="container-xl py-8 md:py-9">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <TasamiMark size={24} />
            <p className="text-[13px] text-cream/70 m-0">{tx(t.footer.copy, lang)}</p>
          </div>
          <nav className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {sites.map((site, i) => (
              <span key={site.href} className="contents">
                {i > 0 && <span className="text-gold/40 px-1 hidden sm:inline" aria-hidden>·</span>}
                <a
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-cream/70 hover:text-gold transition-colors py-2 px-1 min-h-[44px] inline-flex items-center"
                  style={{ textDecoration: 'none' }}
                >
                  {site.name}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
