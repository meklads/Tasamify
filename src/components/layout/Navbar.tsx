import { useEffect, useRef, useState } from 'react'
import { useLang } from '../../lib/LanguageContext'
import { t, tx, groupCompanies } from '../../lib/translations'
import TasamiLogo from '../TasamiLogo'
import LangToggle from '../LangToggle'

export default function Navbar() {
  const { lang, isAr } = useLang()
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

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
              <div className={`nav-drop ${open ? 'is-open' : ''}`} ref={menuRef}>
                <button
                  type="button"
                  className="nav-link"
                  aria-expanded={open}
                  aria-haspopup="true"
                  onClick={() => setOpen((v) => !v)}
                  style={{ letterSpacing: isAr ? 0 : '0.08em' }}
                >
                  {tx(t.nav.companies, lang)}
                </button>
                <div className="nav-drop-panel" role="menu">
                  <a href="#companies" className="nav-drop-link" role="menuitem" onClick={() => setOpen(false)}>
                    {tx(t.brands.kicker, lang)}
                  </a>
                  {groupCompanies.map((c) => (
                    <a
                      key={c.id}
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-drop-link"
                      role="menuitem"
                      onClick={() => setOpen(false)}
                    >
                      <span>{tx(c.name, lang)}</span>
                      <span className="nav-drop-verb">{tx(c.verb, lang)}</span>
                    </a>
                  ))}
                </div>
              </div>
              <a
                href="#contact"
                className="nav-link"
                style={{ letterSpacing: isAr ? 0 : '0.08em' }}
              >
                {tx(t.nav.contact, lang)}
              </a>
            </nav>
            <LangToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
