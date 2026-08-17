import { useLang } from '../lib/LanguageContext'

export default function LangToggle({ light = false }: { light?: boolean }) {
  const { lang, setLang } = useLang()
  return (
    <div className={`lang-toggle ${light ? 'light' : ''}`} role="group" aria-label="Language">
      <button
        type="button"
        className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        aria-label="English"
      >
        EN
      </button>
      <button
        type="button"
        className={`lang-btn ${lang === 'ar' ? 'active' : ''}`}
        onClick={() => setLang('ar')}
        aria-pressed={lang === 'ar'}
        aria-label="العربية"
        style={{ fontFamily: '"Cairo", sans-serif', letterSpacing: 0 }}
      >
        عربي
      </button>
    </div>
  )
}
