import { Link } from 'react-router-dom'
import { useLang } from '../../lib/LanguageContext'
import { t, tx } from '../../lib/translations'
import TasamiLogo from '../TasamiLogo'

export default function Footer() {
  const { lang, isAr } = useLang()

  const footerLinks = {
    [tx(t.footer.solutions, lang)]: [
      { label: tx(t.nav.realEstate, lang), href: '/real-estate' },
      { label: tx(t.nav.healthcare, lang), href: '/healthcare' },
      { label: tx(t.nav.ai, lang), href: '/ai-transformation' },
    ],
    [tx(t.footer.company, lang)]: [
      { label: tx(t.footer.aboutLink, lang), href: '/about' },
      { label: tx(t.nav.portfolio, lang), href: '/portfolio' },
      { label: tx(t.nav.contact, lang), href: '/contact' },
    ],
    [tx(t.footer.connect, lang)]: [
      { label: tx(t.footer.linkedin, lang), href: '#' },
      { label: tx(t.footer.instagram, lang), href: '#' },
      { label: tx(t.footer.twitter, lang), href: '#' },
    ],
  }

  return (
    <footer className="bg-gray-950 text-white">
      <div className="container-xl py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <TasamiLogo variant="footer" isAr={isAr} />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
              {tx(t.footer.desc, lang)}
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
              <span className="text-xs text-gray-400">{tx(t.footer.available, lang)}</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">{category}</div>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            {tx(t.footer.copy, lang).replace('{year}', String(new Date().getFullYear()))}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-gray-500">{tx(t.footer.location, lang)}</span>
            <span className="text-xs text-gray-600">|</span>
            <a href="mailto:info@tasamify.com" className="text-xs text-gray-400 hover:text-white transition-colors">
              info@tasamify.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
