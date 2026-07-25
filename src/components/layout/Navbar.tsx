import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../../lib/LanguageContext'
import { t, tx } from '../../lib/translations'
import TasamiLogo from '../TasamiLogo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const location = useLocation()
  const { lang, setLang, isAr } = useLang()

  const solutionLinks = [
    { label: tx(t.nav.realEstate, lang), href: '/real-estate' },
    { label: tx(t.nav.healthcare, lang), href: '/healthcare' },
    { label: tx(t.nav.ai, lang), href: '/ai-transformation' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setSolutionsOpen(false)
  }, [location])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100"
    >
      <div className="container-xl">
        <div className="flex items-center justify-between h-28 md:h-32">
          {/* Logo */}
          <Link to="/" className="group transition-transform hover:scale-[1.02]" style={{ textDecoration: 'none' }}>
            <TasamiLogo variant="navbar" isAr={isAr} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Solutions dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-teal transition-colors py-2"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
                onClick={() => setSolutionsOpen(!solutionsOpen)}
              >
                {tx(t.nav.solutions, lang)}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={`transition-transform ${solutionsOpen ? 'rotate-180' : ''}`}>
                  <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <div
                className={`absolute top-full ${isAr ? 'right-0' : 'left-1/2 -translate-x-1/2'} pt-3 transition-all duration-200 ${solutionsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 min-w-[220px]">
                  {solutionLinks.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-teal-pale hover:text-teal-deep transition-colors group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-mid opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0"></span>
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {[
              { label: tx(t.nav.portfolio, lang), href: '/portfolio' },
              { label: tx(t.nav.about, lang), href: '/about' },
              { label: tx(t.nav.contact, lang), href: '/contact' },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.href ? 'text-teal font-semibold' : 'text-gray-700 hover:text-teal'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Plans + Lang toggle + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/plans"
              className={`text-sm font-semibold px-4 py-2 rounded-xl border transition-all ${
                location.pathname === '/plans'
                  ? 'bg-teal text-white border-teal shadow-md'
                  : 'border-teal/30 text-teal hover:bg-teal-pale hover:border-teal'
              }`}
            >
              {tx(t.nav.plans, lang)}
            </Link>
            {/* Language Toggle */}
            <div className="lang-toggle">
              <button
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
              >EN</button>
              <button
                className={`lang-btn ${lang === 'ar' ? 'active' : ''}`}
                onClick={() => setLang('ar')}
              >AR</button>
            </div>
            <Link to="/contact" className="btn-primary text-sm py-3 px-6">
              {tx(t.nav.cta, lang)}
            </Link>
          </div>

          {/* Mobile: lang toggle + hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="lang-toggle">
              <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
              <button className={`lang-btn ${lang === 'ar' ? 'active' : ''}`} onClick={() => setLang('ar')}>AR</button>
            </div>
            <button className="p-2 rounded-lg text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
              <div className="w-6 flex flex-col gap-1.5">
                <span className={`h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4 shadow-lg">
          <div className="container-xl flex flex-col gap-1">
            <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-widest">{tx(t.nav.solutions, lang)}</div>
            {solutionLinks.map((child) => (
              <Link key={child.href} to={child.href} className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-teal hover:bg-teal-pale rounded-xl transition-colors">
                {child.label}
              </Link>
            ))}
            <div className="my-2 border-t border-gray-100"></div>
            {[
              { label: tx(t.nav.portfolio, lang), href: '/portfolio' },
              { label: tx(t.nav.about, lang), href: '/about' },
              { label: tx(t.nav.contact, lang), href: '/contact' },
            ].map((link) => (
              <Link key={link.href} to={link.href} className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-teal hover:bg-teal-pale rounded-xl transition-colors">
                {link.label}
              </Link>
            ))}
            <Link to="/plans" className="mx-4 mt-2 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-teal/30 text-teal font-semibold text-sm hover:bg-teal-pale transition-colors">
              {tx(t.nav.plans, lang)}
            </Link>
            <div className="mt-3 px-4">
              <Link to="/contact" className="btn-primary w-full justify-center">{tx(t.nav.cta, lang)}</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
