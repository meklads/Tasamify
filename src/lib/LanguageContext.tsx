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
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en'
    return window.localStorage.getItem('tasami-lang') === 'ar' ? 'ar' : 'en'
  })

  const setLang = (l: Lang) => {
    setLangState(l)
    window.localStorage.setItem('tasami-lang', l)
    applyLang(l)
  }

  useEffect(() => {
    applyLang(lang)
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
