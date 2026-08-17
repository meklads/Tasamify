import { useState, type FormEvent } from 'react'
import { useLang } from '../lib/LanguageContext'
import { t, tx, brandSites, groupCompanies } from '../lib/translations'
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

function VisitLink({ href, label }: { href: string; label: string }) {
  const { isAr } = useLang()
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="house-cta">
      <span>{label}</span>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden style={{ transform: isAr ? 'scaleX(-1)' : undefined }}>
        <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}

function CompanyBand({
  id,
  href,
  src,
  alt,
  stage,
  accent,
  verb,
  name,
  role,
  lead,
  market,
  children,
}: {
  id: string
  href: string
  src: string
  alt: string
  stage: 'dark' | 'light'
  accent: string
  verb: string
  name: string
  role: string
  lead: string
  market: string
  children?: React.ReactNode
}) {
  const { lang } = useLang()
  return (
    <article id={id} className="house-band" style={{ ['--house-accent' as string]: accent }}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`house-stage house-stage--${stage}`}
      >
        <img src={src} alt={alt} decoding="async" />
      </a>
      <div className="house-copy">
        <p className="house-index">{verb}</p>
        <h3 className="house-name">{name}</h3>
        <p className="house-role">{role}</p>
        <p className="house-lead">{lead}</p>
        <p className="house-market">
          <span>{tx(t.brands.marketLabel, lang)}</span>
          {market}
        </p>
        <p className="house-caps-label">{tx(t.brands.capsLabel, lang)}</p>
        {children}
        <VisitLink href={href} label={tx(t.brands.visit, lang)} />
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
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,162,75,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,75,0.55) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
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
            <div className="gold-rule mx-auto mt-7 md:mt-9 mb-6 md:mb-8" />
            <p className="hero-subhead mt-0 mb-0">{tx(t.hero.subhead, lang)}</p>
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
                <div className="gold-rule mb-5" />
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
            <div className="gold-rule mb-5" />
            <p className="section-kicker mb-3 md:mb-4">{tx(t.brands.kicker, lang)}</p>
            <h2 className="section-title m-0 mb-10 md:mb-16">{tx(t.brands.title, lang)}</h2>
          </Reveal>

          <div className="flex flex-col gap-5 md:gap-6">
            {groupCompanies.map((c, i) => (
              <Reveal key={c.id} delay={`reveal-delay-${i + 1}`}>
                <CompanyBand
                  id={c.id}
                  href={c.href}
                  src={logos[c.id]}
                  alt={c.alt}
                  stage={c.stage}
                  accent={c.accent}
                  verb={tx(c.verb, lang)}
                  name={tx(c.name, lang)}
                  role={tx(c.role, lang)}
                  lead={tx(c.lead, lang)}
                  market={tx(c.market, lang)}
                >
                  {c.id === 'bees-motion' ? (
                    <ul className="house-tracks">
                      <li>
                        <span>{tx(t.brands.bmCreative, lang)}</span>
                        {tx(t.brands.bmCreativeD, lang)}
                      </li>
                      <li>
                        <span>{tx(t.brands.bmAi, lang)}</span>
                        {tx(t.brands.bmAiD, lang)}
                      </li>
                    </ul>
                  ) : (
                    <>
                      <ul className="house-points">
                        {(c.id === 'graphics-house'
                          ? [tx(t.brands.ghB1, lang), tx(t.brands.ghB2, lang), tx(t.brands.ghB3, lang)]
                          : [tx(t.brands.tuB1, lang), tx(t.brands.tuB2, lang), tx(t.brands.tuB3, lang)]
                        ).map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      {c.id === 'graphics-house' && (
                        <p className="house-stats">
                          <span>{tx(t.brands.ghStat1, lang)}</span>
                          <span>{tx(t.brands.ghStat2, lang)}</span>
                          <span>{tx(t.brands.ghStat3, lang)}</span>
                        </p>
                      )}
                    </>
                  )}
                </CompanyBand>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 md:mt-16">
            <div id="platforms" className="anchor-target">
              <p className="section-kicker mb-5">{tx(t.platforms.kicker, lang)}</p>
              <a href={brandSites.ruwaq} target="_blank" rel="noopener noreferrer" className="platform-strip">
                <div className="min-w-0">
                  <p className="text-[17px] font-medium text-navy m-0 mb-1">{tx(t.platforms.ruwaqName, lang)}</p>
                  <p className="text-[14px] leading-relaxed text-navy/50 m-0">{tx(t.platforms.ruwaqDesc, lang)}</p>
                </div>
                <span className="platform-strip-link" style={{ letterSpacing: isAr ? 0 : '0.04em' }}>
                  {tx(t.platforms.ruwaqLink, lang)}
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="together" className="anchor-target section-y" style={{ background: '#10182A' }}>
        <div className="container-xl">
          <Reveal>
            <div className="gold-rule mb-5" />
            <p className="section-kicker mb-4 md:mb-5" style={{ color: '#C9A24B' }}>
              {tx(t.together.kicker, lang)}
            </p>
            <h2 className="section-title section-title-light m-0 mb-5 md:mb-6">{tx(t.together.title, lang)}</h2>
            <p
              className="max-w-3xl mb-12 md:mb-20 text-[16px] md:text-[18px] leading-[1.9] font-light m-0"
              style={{ color: 'rgba(246,243,236,0.68)' }}
            >
              {tx(t.together.body, lang)}
            </p>
          </Reveal>

          <Reveal delay="reveal-delay-1">
            <ol className="arch-pillars">
              {groupCompanies.map((c) => (
                <li key={c.id} className="journey-step">
                  <p className="journey-num m-0 mb-4" style={{ color: c.accent }}>
                    {tx(c.verb, lang)}
                  </p>
                  <p className="font-display text-cream text-[1.4rem] md:text-[1.55rem] leading-snug m-0 mb-2 font-medium">
                    {tx(c.name, lang)}
                  </p>
                  <p className="text-[13px] m-0" style={{ color: c.accent }}>
                    {tx(c.role, lang)}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="anchor-target section-y">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <div className="gold-rule mb-5" />
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
                    <span
                      className="flex items-center justify-center h-14 w-[7.75rem] flex-shrink-0 px-2"
                      style={{ background: c.stage === 'dark' ? '#10182A' : '#F3F0E8' }}
                    >
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
