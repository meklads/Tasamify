import { createContext, useContext, useState, useEffect } from 'react'
import type { Lang } from './translations'

interface LanguageContextType {
  lang: Lang
  setLang: (l: Lang) => void
  isAr: boolean
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  isAr: false,
})

function isLang(value: string | null): value is Lang {
  return value === 'ar' || value === 'en'
}

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en'
  const fromQuery = new URLSearchParams(window.location.search).get('lang')
  if (isLang(fromQuery)) return fromQuery
  const saved = window.localStorage.getItem('tasami-lang')
  return isLang(saved) ? saved : 'en'
}

function applyLang(l: Lang) {
  const root = document.documentElement
  root.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr')
  root.setAttribute('lang', l)
  if (l === 'ar') {
    root.style.setProperty('--font-body', '"Cairo", sans-serif')
    root.style.setProperty('--font-display', '"Cairo", sans-serif')
    document.title = 'تسامي | الهوية الجامعة لثلاث علامات متخصصة'
  } else {
    root.style.setProperty('--font-body', '"Outfit", sans-serif')
    root.style.setProperty('--font-display', '"Cormorant Garamond", serif')
    document.title = 'Tasami | The identity above three specialist brands'
  }
  const meta = document.querySelector('meta[name="description"]')
  if (meta) {
    meta.setAttribute(
      'content',
      l === 'ar'
        ? 'تسامي — مجموعة فوق جرافيكس هاوس وتوريفا وبيزموشن. هوية جامعة لا تبيع ولا تنافس دورها.'
        : 'Tasami — the group above Graphics House, Turriva, and Bees Motion. An identity that unifies, and never competes.',
    )
  }
}

function persistLang(l: Lang) {
  window.localStorage.setItem('tasami-lang', l)
  const url = new URL(window.location.href)
  url.searchParams.set('lang', l)
  window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang)

  const setLang = (l: Lang) => {
    setLangState(l)
    persistLang(l)
    applyLang(l)
  }

  useEffect(() => {
    applyLang(lang)
    persistLang(lang)
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, isAr: lang === 'ar' }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
