import { useEffect } from 'react'
import { useLang } from '../lib/LanguageContext'
import { t, tx, groupCompanies } from '../lib/translations'

export default function GroupSchema() {
  const { lang } = useLang()

  useEffect(() => {
    const existing = document.getElementById('tasami-org-schema')
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Tasami Group',
      alternateName: ['مجموعة تسامي', 'Tasami'],
      url: 'https://tasamify.com/',
      description: tx(t.seo.description, lang),
      logo: 'https://tasamify.com/tasami-logo.png',
      subOrganization: groupCompanies.map((c) => ({
        '@type': 'Organization',
        name: c.alt,
        url: c.homeHref,
        parentOrganization: {
          '@type': 'Organization',
          name: 'Tasami Group',
          url: 'https://tasamify.com/',
        },
      })),
      knowsAbout:
        lang === 'ar'
          ? [
              'نظام الإطلاق البصري العقاري',
              'إنتاج إبداعي بالذكاء الاصطناعي',
              'التنفيذ الميداني والداخلي',
              'جرافيكس هاوس',
              'بيز موشن',
              'توريفا',
            ]
          : [
              'Real Estate Visual Launch System',
              'AI Creative Production',
              'Physical and interior execution',
              'Graphics House',
              'Bees Motion',
              'Turriva',
            ],
    }

    const script = existing ?? document.createElement('script')
    script.id = 'tasami-org-schema'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(data)
    if (!existing) document.head.appendChild(script)
  }, [lang])

  return null
}
