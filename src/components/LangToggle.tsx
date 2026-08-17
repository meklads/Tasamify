import { useLang } from '../lib/LanguageContext'

export default function LangToggle({ light = false }: { light?: boolean }) {
  const { lang, setLang } = useLang()
  return (
    <div className={`lang-toggle ${light ? 'light' : ''}`}>
      <button
        type="button"
        className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        className={`lang-btn ${lang === 'ar' ? 'active' : ''}`}
        onClick={() => setLang('ar')}
        aria-pressed={lang === 'ar'}
      >
        AR
      </button>
    </div>
  )
}
