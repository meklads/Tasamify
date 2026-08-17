import { useLang } from '../../lib/LanguageContext'
import { t, tx, brandSites } from '../../lib/translations'
import TasamiMark from '../TasamiMark'

export default function Footer() {
  const { lang, isAr } = useLang()

  const sites = [
    { label: '3dgraphicshouse.com', href: brandSites.graphicsHouse },
    { label: 'turriva.com', href: brandSites.turriva },
    { label: 'beesmotion.com', href: brandSites.beesMotion },
  ]

  return (
    <footer style={{ background: '#10182A', borderTop: '1px solid rgba(201, 162, 75, 0.22)' }}>
      <div className="container-xl py-6 md:py-7">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <TasamiMark size={22} />
            <p className="text-[13px] text-cream/70 m-0">{tx(t.footer.copy, lang)}</p>
          </div>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {sites.map((site) => (
              <a
                key={site.href}
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-cream/60 hover:text-gold transition-colors"
                style={{ textDecoration: 'none', fontFamily: isAr ? 'inherit' : undefined }}
              >
                {site.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
