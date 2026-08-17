import { useLang } from '../../lib/LanguageContext'
import { t, tx, groupCompanies } from '../../lib/translations'
import TasamiMark from '../TasamiMark'

export default function Footer() {
  const { lang } = useLang()

  return (
    <footer style={{ background: '#10182A', borderTop: '1px solid rgba(201, 162, 75, 0.22)' }}>
      <div className="container-xl py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-5 flex items-start gap-3">
            <TasamiMark size={24} />
            <div>
              <p className="text-[15px] text-cream m-0 mb-1 font-medium">{tx(t.footer.brand, lang)}</p>
              <p className="text-[13px] text-cream/50 m-0">{tx(t.footer.copy, lang)}</p>
            </div>
          </div>
          <div className="md:col-span-7 md:text-end">
            <p className="section-kicker mb-4" style={{ color: '#C9A24B' }}>
              {tx(t.footer.companies, lang)}
            </p>
            <nav className="flex flex-col sm:flex-row sm:flex-wrap md:justify-end gap-x-6 gap-y-1">
              {groupCompanies.map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-cream/75 hover:text-gold transition-colors py-2 min-h-[44px] inline-flex items-center"
                  style={{ textDecoration: 'none' }}
                >
                  {tx(c.name, lang)}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
