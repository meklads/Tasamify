import { useState, type FormEvent } from 'react'
import { useLang } from '../lib/LanguageContext'
import { t, tx, brandSites } from '../lib/translations'
import { useReveal } from '../hooks/useReveal'
import TasamiMark from '../components/TasamiMark'
import graphicsHouseLogo from '../assets/brands/graphics-house.png'
import turrivaLogo from '../assets/brands/turriva.png'
import beesMotionLogo from '../assets/brands/bees-motion.png'

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

function HouseWell({
  src,
  href,
  alt,
  dark = false,
}: {
  src: string
  href: string
  alt: string
  dark?: boolean
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="house-well group/logo"
      style={{ background: dark ? '#10182A' : '#F3F0E8' }}
    >
      <img
        src={src}
        alt={alt}
        className="max-h-[92px] sm:max-h-[112px] lg:max-h-[124px] max-w-[86%] w-auto h-auto object-contain transition-transform duration-500 group-hover/logo:scale-[1.04]"
        decoding="async"
      />
    </a>
  )
}

function VisitLink({ href, color, label }: { href: string; color: string; label: string }) {
  const { isAr } = useLang()
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="visit-link mt-auto pt-6"
      style={{ color }}
    >
      <span>{label}</span>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden style={{ transform: isAr ? 'scaleX(-1)' : undefined }}>
        <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
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
    return (
      <p className="prose-hold m-0 max-w-md">{tx(t.contact.success, lang)}</p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
      <label className="block">
        <span className="text-[11px] tracking-[0.14em] uppercase text-navy/45">{tx(t.contact.name, lang)}</span>
        <input
          required
          className={field}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
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
        <input
          type="email"
          className={field}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </label>
      <label className="block">
        <span className="text-[11px] tracking-[0.14em] uppercase text-navy/45">{tx(t.contact.brand, lang)}</span>
        <select
          className={`${field} bg-cream`}
          value={form.brand}
          onChange={(e) => setForm({ ...form, brand: e.target.value })}
        >
          <option value="">{tx(t.contact.brandAny, lang)}</option>
          <option value="graphics-house">{tx(t.brands.ghName, lang)}</option>
          <option value="turriva">{tx(t.brands.tuName, lang)}</option>
          <option value="bees-motion">{tx(t.brands.bmName, lang)}</option>
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

  const houses = [
    { name: tx(t.brands.ghName, lang), href: brandSites.graphicsHouse },
    { name: tx(t.brands.tuName, lang), href: brandSites.turriva },
    { name: tx(t.brands.bmName, lang), href: brandSites.beesMotion },
  ]

  const stages = [
    { n: '01', label: tx(t.together.s1, lang), brand: tx(t.together.s1Brand, lang), color: '#7A52B8' },
    { n: '02', label: tx(t.together.s2, lang), brand: tx(t.together.s2Brand, lang), color: '#E08A3C' },
    { n: '03', label: tx(t.together.s3, lang), brand: tx(t.together.s3Brand, lang), color: '#1E9AA6' },
    { n: '04', label: tx(t.together.s4, lang), brand: tx(t.together.s4Brand, lang), color: '#14707A' },
  ]

  return (
    <div id="top" className="bg-cream">
      {/* HERO */}
      <section
        className="relative min-h-[88svh] flex items-center overflow-hidden"
        style={{ background: '#10182A' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 50% 100%, rgba(201,162,75,0.16) 0%, transparent 58%)',
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
            <h1 className="wordmark m-0">{tx(t.hero.wordmark, lang)}</h1>
            <div className="gold-rule mx-auto mt-7 md:mt-9 mb-6 md:mb-8" />
            <p className="hero-subhead mt-0 mb-0">{tx(t.hero.subhead, lang)}</p>
            <p className="hero-support mt-5 md:mt-7 mb-0 mx-auto">{tx(t.hero.support, lang)}</p>

            <nav className="house-nav mt-10 md:mt-14" aria-label={tx(t.brands.kicker, lang)}>
              {houses.map((house, i) => (
                <span key={house.href} className="contents">
                  {i > 0 && <span className="house-nav-dot" aria-hidden />}
                  <a href={house.href} target="_blank" rel="noopener noreferrer" className="house-nav-link">
                    {house.name}
                  </a>
                </span>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* ABOUT */}
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

      {/* HOUSES */}
      <section id="brands" className="anchor-target pb-10 md:pb-28">
        <div className="container-xl">
          <Reveal>
            <div className="gold-rule mb-5" />
            <p className="section-kicker mb-3 md:mb-4">{tx(t.brands.kicker, lang)}</p>
            <h2 className="section-title m-0 mb-8 md:mb-14">{tx(t.brands.title, lang)}</h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
            {/* Graphics House */}
            <Reveal delay="reveal-delay-1">
              <article className="brand-card h-full flex flex-col overflow-hidden">
                <HouseWell
                  src={graphicsHouseLogo}
                  href={brandSites.graphicsHouse}
                  alt="Graphics House"
                  dark
                />
                <div className="flex flex-col flex-1 p-7 md:p-8">
                  <h3 className="font-display text-[1.75rem] md:text-[1.95rem] font-medium text-navy mt-0 mb-1 leading-tight">
                    {tx(t.brands.ghName, lang)}
                  </h3>
                  <p className="text-[12px] sm:text-[13px] tracking-[0.08em] uppercase m-0 mb-5" style={{ color: '#7A52B8' }}>
                    {tx(t.brands.ghRole, lang)}
                  </p>
                  <p className="text-[15px] leading-relaxed text-navy/70 m-0 mb-5">
                    {tx(t.brands.ghLead, lang)}
                  </p>
                  <ul className="m-0 p-0 list-none space-y-2.5">
                    {[tx(t.brands.ghB1, lang), tx(t.brands.ghB2, lang), tx(t.brands.ghB3, lang)].map((item) => (
                      <li key={item} className="flex gap-3 text-[14px] text-navy/80 leading-snug">
                        <span className="mt-2 h-px w-3 flex-shrink-0" style={{ background: '#7A52B8' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="house-stats mt-6">
                    <span>{tx(t.brands.ghStat1, lang)}</span>
                    <span>{tx(t.brands.ghStat2, lang)}</span>
                    <span>{tx(t.brands.ghStat3, lang)}</span>
                  </div>
                  <VisitLink href={brandSites.graphicsHouse} color="#5B3B8C" label={tx(t.brands.visit, lang)} />
                </div>
              </article>
            </Reveal>

            {/* Turriva */}
            <Reveal delay="reveal-delay-2">
              <article className="brand-card h-full flex flex-col overflow-hidden">
                <HouseWell
                  src={turrivaLogo}
                  href={brandSites.turriva}
                  alt="Turriva"
                />
                <div className="flex flex-col flex-1 p-7 md:p-8">
                  <h3 className="font-display text-[1.75rem] md:text-[1.95rem] font-medium text-navy mt-0 mb-1 leading-tight">
                    {tx(t.brands.tuName, lang)}
                  </h3>
                  <p className="text-[12px] sm:text-[13px] tracking-[0.08em] uppercase m-0 mb-5" style={{ color: '#B5651D' }}>
                    {tx(t.brands.tuRole, lang)}
                  </p>
                  <p className="text-[15px] leading-relaxed text-navy/70 m-0 mb-5">
                    {tx(t.brands.tuLead, lang)}
                  </p>
                  <ul className="m-0 p-0 list-none space-y-2.5 flex-1">
                    {[tx(t.brands.tuB1, lang), tx(t.brands.tuB2, lang), tx(t.brands.tuB3, lang)].map((item) => (
                      <li key={item} className="flex gap-3 text-[14px] text-navy/80 leading-snug">
                        <span className="mt-2 h-px w-3 flex-shrink-0" style={{ background: '#E08A3C' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <VisitLink href={brandSites.turriva} color="#B5651D" label={tx(t.brands.visit, lang)} />
                </div>
              </article>
            </Reveal>

            {/* Bees Motion */}
            <Reveal delay="reveal-delay-3">
              <article className="brand-card h-full flex flex-col overflow-hidden">
                <HouseWell
                  src={beesMotionLogo}
                  href={brandSites.beesMotion}
                  alt="Bees Motion"
                />
                <div className="flex flex-col flex-1 p-7 md:p-8">
                  <h3 className="font-display text-[1.75rem] md:text-[1.95rem] font-medium text-navy mt-0 mb-1 leading-tight">
                    {tx(t.brands.bmName, lang)}
                  </h3>
                  <p className="text-[13px] leading-snug m-0 mb-5" style={{ color: '#14707A' }}>
                    {tx(t.brands.bmRole, lang)}
                  </p>
                  <p className="text-[15px] leading-relaxed text-navy/70 m-0 mb-6">
                    {tx(t.brands.bmBody, lang)}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px flex-1" style={{ background: 'rgba(20,112,122,0.18)' }}>
                    <div className="bg-paper p-4">
                      <p className="text-[11px] tracking-[0.16em] uppercase m-0 mb-2" style={{ color: '#14707A' }}>
                        {tx(t.brands.bmCreative, lang)}
                      </p>
                      <p className="text-[13px] leading-relaxed text-navy/70 m-0">
                        {tx(t.brands.bmCreativeD, lang)}
                      </p>
                    </div>
                    <div className="bg-paper p-4">
                      <p className="text-[11px] tracking-[0.16em] uppercase m-0 mb-2" style={{ color: '#14707A' }}>
                        {tx(t.brands.bmAi, lang)}
                      </p>
                      <p className="text-[13px] leading-relaxed text-navy/70 m-0">
                        {tx(t.brands.bmAiD, lang)}
                      </p>
                    </div>
                  </div>
                  <VisitLink href={brandSites.beesMotion} color="#14707A" label={tx(t.brands.visit, lang)} />
                </div>
              </article>
            </Reveal>
          </div>

          <Reveal className="mt-10 md:mt-16">
            <div id="platforms" className="anchor-target">
              <p className="section-kicker mb-4 md:mb-5">{tx(t.platforms.kicker, lang)}</p>
              <a
                href={brandSites.ruwaq}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-5 min-h-[44px] no-underline"
                style={{ borderTop: '1px solid rgba(16,24,42,0.1)', borderBottom: '1px solid rgba(16,24,42,0.1)' }}
              >
                <div className="min-w-0">
                  <p className="text-[16px] font-medium text-navy m-0 mb-1">{tx(t.platforms.ruwaqName, lang)}</p>
                  <p className="text-[14px] leading-relaxed text-navy/50 m-0">
                    {tx(t.platforms.ruwaqDesc, lang)}
                  </p>
                </div>
                <span className="text-[13px] text-navy/40 flex-shrink-0" style={{ letterSpacing: isAr ? 0 : '0.04em' }}>
                  {tx(t.platforms.ruwaqLink, lang)}
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="together" className="anchor-target section-y" style={{ background: '#10182A' }}>
        <div className="container-xl">
          <Reveal>
            <div className="gold-rule mb-5" />
            <p className="section-kicker mb-4 md:mb-5" style={{ color: '#C9A24B' }}>
              {tx(t.together.kicker, lang)}
            </p>
            <h2 className="section-title section-title-light m-0 mb-5 md:mb-6">{tx(t.together.title, lang)}</h2>
            <p className="max-w-3xl mb-12 md:mb-20 text-[16px] md:text-[18px] leading-[1.9] font-light m-0" style={{ color: 'rgba(246,243,236,0.68)' }}>
              {tx(t.together.body, lang)}
            </p>
          </Reveal>

          <Reveal delay="reveal-delay-1">
            <ol className="relative m-0 p-0 list-none grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8">
              {stages.map((stage) => (
                <li key={stage.n} className="journey-step">
                  <p className="journey-num m-0 mb-4" style={{ color: stage.color }}>
                    {stage.n}
                  </p>
                  <p className="font-display text-cream text-[1.4rem] md:text-[1.55rem] leading-snug m-0 mb-2 font-medium">
                    {stage.label}
                  </p>
                  <p className="text-[13px] m-0" style={{ color: stage.color }}>
                    {stage.brand}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="anchor-target section-y">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <div className="gold-rule mb-5" />
              <p className="section-kicker mb-4 md:mb-5">{tx(t.contact.kicker, lang)}</p>
              <h2 className="section-title m-0 mb-5 md:mb-7">{tx(t.contact.title, lang)}</h2>
              <p className="prose-hold m-0 mb-9 md:mb-11">{tx(t.contact.body, lang)}</p>
              <div className="flex flex-col gap-4">
                {[
                  { name: tx(t.brands.ghName, lang), href: brandSites.graphicsHouse, src: graphicsHouseLogo, dark: true },
                  { name: tx(t.brands.tuName, lang), href: brandSites.turriva, src: turrivaLogo, dark: false },
                  { name: tx(t.brands.bmName, lang), href: brandSites.beesMotion, src: beesMotionLogo, dark: false },
                ].map((b) => (
                  <a
                    key={b.href}
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 no-underline group min-h-[56px]"
                  >
                    <span
                      className="flex items-center justify-center h-14 w-[7.75rem] flex-shrink-0 px-2"
                      style={{ background: b.dark ? '#10182A' : '#F3F0E8' }}
                    >
                      <img src={b.src} alt="" className="max-h-9 max-w-full w-auto object-contain" />
                    </span>
                    <span className="visit-link m-0 pt-0" style={{ color: 'var(--ink)' }}>
                      <span>{b.name}</span>
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
