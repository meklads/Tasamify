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
      logo: 'https://tasamify.com/favicon.svg',
      subOrganization: groupCompanies.map((c) => ({
        '@type': 'Organization',
        name: c.alt,
        url: c.href,
        parentOrganization: {
          '@type': 'Organization',
          name: 'Tasami Group',
          url: 'https://tasamify.com/',
        },
      })),
      knowsAbout:
        lang === 'ar'
          ? [
              'شركات متخصصة',
              'تجارب إبداعية وبصرية',
              'تسويق رقمي',
              'إنتاج إبداعي',
              'تنفيذ فراغي',
              'تسليم ميداني',
              'التقنية والذكاء الاصطناعي',
              'تجارب ذكية',
            ]
          : [
              'Specialized companies',
              'Creative and visual experiences',
              'Digital marketing',
              'Creative production',
              'Spatial execution',
              'Physical delivery',
              'Technology and AI',
              'Smart experiences',
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
