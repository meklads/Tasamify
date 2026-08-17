import { useState, type FormEvent } from 'react'
import { useLang } from '../lib/LanguageContext'
import { t, tx, groupCompanies } from '../lib/translations'
import { useReveal } from '../hooks/useReveal'
import TasamiMark from '../components/TasamiMark'
import graphicsHouseLogo from '../assets/brands/graphics-house.png'
import turrivaLogo from '../assets/brands/turriva.png'
import beesMotionLogo from '../assets/brands/bees-motion.png'

const logos = {
  'graphics-house': graphicsHouseLogo,
  'bees-motion': beesMotionLogo,
  turriva: turrivaLogo,
} as const

function Reveal({
  children,
  className = '',
  delay,
}: {
  children: React.ReactNode
  className?: string
  delay?: string
}) {
  const { ref, className: revealClass } = useReveal(delay)
  return (
    <div ref={ref} className={`${revealClass} ${className}`}>
      {children}
    </div>
  )
}

function VisitLink({ href, label, light = false }: { href: string; label: string; light?: boolean }) {
  const { isAr } = useLang()
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`house-cta ${light ? 'house-cta--light' : ''}`}>
      <span>{label}</span>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden style={{ transform: isAr ? 'scaleX(-1)' : undefined }}>
        <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}

function CompanyPlate({
  id,
  href,
  src,
  alt,
  tone,
  verb,
  name,
  role,
  market,
  lead,
}: {
  id: string
  href: string
  src: string
  alt: string
  tone: 'gh' | 'bm' | 'tu'
  verb: string
  name: string
  role: string
  market: string
  lead: string
}) {
  const { lang } = useLang()
  return (
    <article id={id} className={`company-plate company-plate--${tone}`}>
      <a href={href} target="_blank" rel="noopener noreferrer" className="company-logo-well">
        <img src={src} alt={alt} decoding="async" />
      </a>
      <div className="company-body">
        <p className="company-verb">{verb}</p>
        <h3 className="company-name">{name}</h3>
        <p className="company-role">{role}</p>
        <p className="company-market">{market}</p>
        <p className="company-lead">{lead}</p>
        <VisitLink href={href} label={tx(t.brands.visit, lang)} light />
      </div>
    </article>
  )
}

function ContactForm() {
  const { lang } = useLang()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', brand: '', message: '' })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const field =
    'w-full bg-transparent border-0 border-b border-navy/20 px-0 py-3.5 text-[15px] text-navy outline-none focus:border-gold transition-colors min-h-[44px]'

  if (sent) {
    return <p className="prose-hold m-0 max-w-md">{tx(t.contact.success, lang)}</p>
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
      <label className="block">
        <span className="text-[11px] tracking-[0.14em] uppercase text-navy/45">{tx(t.contact.name, lang)}</span>
        <input required className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      </label>
      <label className="block">
        <span className="text-[11px] tracking-[0.14em] uppercase text-navy/45">{tx(t.contact.phone, lang)}</span>
        <input
          required
          type="tel"
          className={field}
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          style={{ direction: 'ltr' }}
        />
      </label>
      <label className="block">
        <span className="text-[11px] tracking-[0.14em] uppercase text-navy/45">{tx(t.contact.email, lang)}</span>
        <input type="email" className={field} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      </label>
      <label className="block">
        <span className="text-[11px] tracking-[0.14em] uppercase text-navy/45">{tx(t.contact.brand, lang)}</span>
        <select className={`${field} bg-cream`} value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })}>
          <option value="">{tx(t.contact.brandAny, lang)}</option>
          {groupCompanies.map((c) => (
            <option key={c.id} value={c.id}>
              {tx(c.name, lang)}
            </option>
          ))}
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className="text-[11px] tracking-[0.14em] uppercase text-navy/45">{tx(t.contact.message, lang)}</span>
        <textarea
          required
          rows={3}
          className={`${field} resize-none min-h-[88px]`}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="mt-1 min-h-[48px] px-10 py-3 text-[13px] font-medium tracking-[0.12em] uppercase border border-navy text-navy hover:bg-navy hover:text-cream transition-colors"
        >
          {tx(t.contact.send, lang)}
        </button>
      </div>
    </form>
  )
}

export default function Home() {
  const { lang, isAr } = useLang()

  return (
    <div id="top" className="bg-cream">
      <section className="relative min-h-[88svh] flex items-center overflow-hidden" style={{ background: '#10182A' }}>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 55% at 50% 100%, rgba(201,162,75,0.16) 0%, transparent 58%)',
          }}
        />

        <div className="container-xl relative z-10 w-full pt-24 pb-14 md:pt-28 md:pb-20">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <p className="hero-kicker mb-6 md:mb-8">{tx(t.hero.kicker, lang)}</p>
            <TasamiMark size={52} className="mb-5 md:mb-7 opacity-90" />
            <h1 className="m-0 flex flex-col items-center">
              <span className="wordmark">{tx(t.hero.wordmark, lang)}</span>
              <span className="hero-group">{tx(t.hero.group, lang)}</span>
            </h1>
            <p className="hero-subhead mt-8 md:mt-10 mb-0">{tx(t.hero.subhead, lang)}</p>
            <p className="hero-support mt-5 md:mt-7 mb-0 mx-auto">{tx(t.hero.support, lang)}</p>

            <nav className="arch-nav" aria-label={tx(t.brands.kicker, lang)}>
              {groupCompanies.map((c) => (
                <a key={c.id} href={c.href} target="_blank" rel="noopener noreferrer" className="arch-nav-item">
                  <span className="arch-nav-name">{tx(c.name, lang)}</span>
                  <span className="arch-nav-verb">{tx(c.verb, lang)}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section id="about" className="anchor-target section-y">
        <div className="container-xl">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 lg:items-start">
              <div className="lg:col-span-5">
                <p className="section-kicker mb-4 md:mb-6">{tx(t.about.kicker, lang)}</p>
                <h2 className="section-title m-0">{tx(t.about.title, lang)}</h2>
              </div>
              <div className="lg:col-span-7 lg:pt-11">
                <p className="prose-hold m-0">{tx(t.about.body, lang)}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="companies" className="anchor-target pb-12 md:pb-28">
        <div className="container-xl">
          <Reveal>
            <p className="section-kicker mb-3 md:mb-4">{tx(t.brands.kicker, lang)}</p>
            <h2 className="section-title m-0 mb-10 md:mb-14">{tx(t.brands.title, lang)}</h2>
          </Reveal>

          <div className="company-grid">
            {groupCompanies.map((c, i) => (
              <Reveal key={c.id} delay={`reveal-delay-${i + 1}`}>
                <CompanyPlate
                  id={c.id}
                  href={c.href}
                  src={logos[c.id]}
                  alt={c.alt}
                  tone={c.tone}
                  verb={tx(c.verb, lang)}
                  name={tx(c.name, lang)}
                  role={tx(c.role, lang)}
                  market={tx(c.market, lang)}
                  lead={tx(c.lead, lang)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="together" className="anchor-target section-y" style={{ background: '#10182A' }}>
        <div className="container-xl">
          <Reveal>
            <p className="section-kicker mb-4 md:mb-5" style={{ color: '#C9A24B' }}>
              {tx(t.together.kicker, lang)}
            </p>
            <h2 className="section-title section-title-light m-0 mb-5 md:mb-6">{tx(t.together.title, lang)}</h2>
            <p
              className="max-w-3xl mb-12 md:mb-16 text-[16px] md:text-[18px] leading-[1.9] font-light m-0"
              style={{ color: 'rgba(246,243,236,0.68)' }}
            >
              {tx(t.together.body, lang)}
            </p>
          </Reveal>

          <Reveal delay="reveal-delay-1">
            <div className="arch-tree">
              <p className="arch-tree-parent">{tx(t.hero.kicker, lang)}</p>
              <span className="arch-tree-down" aria-hidden>
                ↓
              </span>
              <p className="arch-tree-layer">{tx(t.together.specialized, lang)}</p>
              <ol className="arch-pillars">
                {groupCompanies.map((c) => (
                  <li key={c.id} className="journey-step">
                    <p className="journey-num m-0 mb-3">{tx(c.verb, lang)}</p>
                    <p className="font-display text-cream text-[1.4rem] md:text-[1.55rem] leading-snug m-0 mb-2 font-medium">
                      {tx(c.name, lang)}
                    </p>
                    <p className="text-[13px] m-0 mb-1" style={{ color: 'rgba(246,243,236,0.72)' }}>
                      {tx(c.role, lang)}
                    </p>
                    <p className="text-[12px] m-0" style={{ color: 'rgba(246,243,236,0.45)' }}>
                      {tx(c.market, lang)}
                    </p>
                  </li>
                ))}
              </ol>
              <span className="arch-tree-down" aria-hidden>
                ↓
              </span>
              <p className="arch-tree-layer">{tx(t.together.complementary, lang)}</p>
            </div>
          </Reveal>

          <Reveal className="mt-12 md:mt-16" delay="reveal-delay-2">
            <p className="section-kicker mb-4 md:mb-5" style={{ color: '#C9A24B' }}>
              {tx(t.caps.kicker, lang)}
            </p>
            <h2 className="section-title section-title-light m-0 mb-5 md:mb-6">{tx(t.caps.title, lang)}</h2>
            <p
              className="max-w-3xl m-0 text-[16px] md:text-[18px] leading-[1.9] font-light"
              style={{ color: 'rgba(246,243,236,0.68)' }}
            >
              {tx(t.caps.body, lang)}
            </p>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="anchor-target section-y">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <p className="section-kicker mb-4 md:mb-5">{tx(t.contact.kicker, lang)}</p>
              <h2 className="section-title m-0 mb-5 md:mb-7">{tx(t.contact.title, lang)}</h2>
              <p className="prose-hold m-0 mb-9 md:mb-11">{tx(t.contact.body, lang)}</p>
              <div className="flex flex-col gap-4">
                {groupCompanies.map((c) => (
                  <a
                    key={c.href}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 no-underline group min-h-[56px]"
                  >
                    <span className={`contact-logo contact-logo--${c.tone}`}>
                      <img src={logos[c.id]} alt="" className="max-h-9 max-w-full w-auto object-contain" />
                    </span>
                    <span className="house-cta m-0" style={{ color: 'var(--ink)' }}>
                      <span>{tx(c.name, lang)}</span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden style={{ transform: isAr ? 'scaleX(-1)' : undefined }}>
                        <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:col-start-7" delay="reveal-delay-2">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
