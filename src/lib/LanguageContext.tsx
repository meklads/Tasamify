import { createContext, useContext, useState, useEffect } from 'react'
import { t, tx, type Lang } from './translations'

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
  } else {
    root.style.setProperty('--font-body', '"Outfit", sans-serif')
    root.style.setProperty('--font-display', '"Cormorant Garamond", serif')
  }
  document.title = tx(t.seo.title, l)
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', tx(t.seo.description, l))
  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.setAttribute('content', tx(t.seo.title, l))
  const ogDesc = document.querySelector('meta[property="og:description"]')
  if (ogDesc) ogDesc.setAttribute('content', tx(t.seo.description, l))
  const ogLocale = document.querySelector('meta[property="og:locale"]')
  if (ogLocale) ogLocale.setAttribute('content', l === 'ar' ? 'ar_SA' : 'en_US')
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
