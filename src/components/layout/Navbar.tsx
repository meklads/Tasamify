import { useState } from 'react'
import { useLang } from '../../lib/LanguageContext'
import { t, tx } from '../../lib/translations'
import TasamiLogo from '../TasamiLogo'
import LangToggle from '../LangToggle'

const links = [
  { key: 'about' as const, href: '#about' },
  { key: 'brands' as const, href: '#brands' },
  { key: 'together' as const, href: '#together' },
  { key: 'contact' as const, href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, isAr } = useLang()

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: '#10182A',
        borderBottom: '1px solid rgba(201, 162, 75, 0.28)',
      }}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          <a href="#top" className="hover:opacity-90 transition-opacity" style={{ textDecoration: 'none' }}>
            <TasamiLogo variant="navbar" isAr={isAr} />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-cream/80 hover:text-gold transition-colors"
                style={{ textDecoration: 'none', letterSpacing: isAr ? 0 : '0.04em' }}
              >
                {tx(t.nav[link.key], lang)}
              </a>
            ))}
            <LangToggle />
          </nav>

          <div className="lg:hidden flex items-center gap-3">
            <LangToggle />
            <button
              type="button"
              className="p-2 text-cream"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span className={`h-px bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`h-px bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-px bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-gold/20" style={{ background: '#10182A' }}>
          <div className="container-xl py-3 flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-cream/80 hover:text-gold text-sm"
                style={{ textDecoration: 'none' }}
              >
                {tx(t.nav[link.key], lang)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
