import { useLang } from '../../lib/LanguageContext'
import { t, tx } from '../../lib/translations'
import TasamiLogo from '../TasamiLogo'
import LangToggle from '../LangToggle'

const links = [
  { key: 'brands' as const, href: '#brands' },
  { key: 'contact' as const, href: '#contact' },
]

export default function Navbar() {
  const { lang, isAr } = useLang()

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: '#10182A',
        borderBottom: '1px solid rgba(201, 162, 75, 0.22)',
      }}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between h-[60px] md:h-16 gap-3">
          <a href="#top" className="flex-shrink-0 min-w-0 hover:opacity-90 transition-opacity" style={{ textDecoration: 'none' }}>
            <TasamiLogo variant="navbar" isAr={isAr} />
          </a>

          <div className="flex items-center gap-3 sm:gap-6 flex-shrink-0">
            <nav className="flex items-center gap-3 sm:gap-7">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[12px] sm:text-[13px] font-medium text-cream/75 hover:text-gold transition-colors py-2 min-h-[44px] inline-flex items-center"
                  style={{ textDecoration: 'none', letterSpacing: isAr ? 0 : '0.08em' }}
                >
                  {tx(t.nav[link.key], lang)}
                </a>
              ))}
            </nav>
            <LangToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
