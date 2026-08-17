import { useState, type FormEvent } from 'react'
import { useLang } from '../lib/LanguageContext'
import { t, tx, brandSites } from '../lib/translations'
import { useReveal } from '../hooks/useReveal'
import TasamiMark from '../components/TasamiMark'

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

function BrandIcon({ kind }: { kind: 'gh' | 'tu' | 'bm' }) {
  const stroke = kind === 'gh' ? '#7A52B8' : kind === 'tu' ? '#E08A3C' : '#1E9AA6'
  if (kind === 'gh') {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="4" y="8" width="20" height="14" stroke={stroke} strokeWidth="1.4" />
        <path d="M4 8L14 3L24 8" stroke={stroke} strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M14 12V22" stroke={stroke} strokeWidth="1.2" />
      </svg>
    )
  }
  if (kind === 'tu') {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M5 21L14 6L23 21" stroke={stroke} strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M9.5 21V14H18.5V21" stroke={stroke} strokeWidth="1.4" />
      </svg>
    )
  }
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="10" cy="14" r="5.5" stroke={stroke} strokeWidth="1.4" />
      <circle cx="18" cy="14" r="5.5" stroke={stroke} strokeWidth="1.4" />
    </svg>
  )
}

function VisitLink({ href, color, label }: { href: string; color: string; label: string }) {
  const { isAr } = useLang()
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="visit-link mt-8"
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
  const [form, setForm] = useState({ name: '', email: '', brand: '', message: '' })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const field =
    'w-full bg-transparent border-0 border-b border-navy/20 px-0 py-3 text-sm text-navy outline-none focus:border-gold transition-colors'

  if (sent) {
    return (
      <p className="prose-hold m-0 max-w-md">{tx(t.contact.success, lang)}</p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
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
        <span className="text-[11px] tracking-[0.14em] uppercase text-navy/45">{tx(t.contact.email, lang)}</span>
        <input
          required
          type="email"
          className={field}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </label>
      <label className="block sm:col-span-2">
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
          className={`${field} resize-none`}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="mt-2 px-8 py-3 text-[13px] font-medium tracking-[0.12em] uppercase border border-navy text-navy hover:bg-navy hover:text-cream transition-colors"
        >
          {tx(t.contact.send, lang)}
        </button>
      </div>
    </form>
  )
}

export default function Home() {
  const { lang, isAr } = useLang()

  const stages = [
    { label: tx(t.together.s1, lang), brand: tx(t.together.s1Brand, lang), color: '#7A52B8' },
    { label: tx(t.together.s2, lang), brand: tx(t.together.s2Brand, lang), color: '#E08A3C' },
    { label: tx(t.together.s3, lang), brand: tx(t.together.s3Brand, lang), color: '#1E9AA6' },
    { label: tx(t.together.s4, lang), brand: tx(t.together.s4Brand, lang), color: '#14707A' },
  ]

  return (
    <div id="top" className="bg-cream">
      {/* HERO */}
      <section
        className="relative min-h-[100svh] flex items-end overflow-hidden"
        style={{ background: '#10182A' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% 115%, rgba(201,162,75,0.14) 0%, transparent 60%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,162,75,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,75,0.5) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />

        <div className="container-xl relative z-10 w-full pt-32 pb-20 md:pb-28">
          <div className="max-w-4xl">
            <TasamiMark size={48} className="mb-10 opacity-90" />
            <h1 className="wordmark m-0">{tx(t.hero.wordmark, lang)}</h1>
            <p className="hero-subhead mt-8 mb-0">{tx(t.hero.subhead, lang)}</p>
            <p className="hero-support mt-8 mb-0">{tx(t.hero.support, lang)}</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="anchor-target py-24 md:py-32">
        <div className="container-xl">
          <Reveal>
            <div className="gold-rule mb-6" />
            <p className="section-kicker mb-10">{tx(t.about.kicker, lang)}</p>
            <p className="prose-hold max-w-3xl m-0">{tx(t.about.body, lang)}</p>
          </Reveal>
        </div>
      </section>

      {/* BRANDS */}
      <section id="brands" className="anchor-target pb-24 md:pb-32">
        <div className="container-xl">
          <Reveal>
            <div className="gold-rule mb-6" />
            <p className="section-kicker mb-14">{tx(t.brands.kicker, lang)}</p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Graphics House */}
            <Reveal delay="reveal-delay-1">
              <article className="brand-card h-full flex flex-col p-8 md:p-9">
                <div
                  className="h-[3px] w-12 mb-8"
                  style={{ background: 'linear-gradient(90deg, #5B3B8C, #7A52B8)' }}
                />
                <BrandIcon kind="gh" />
                <h3 className="font-display text-[1.85rem] font-medium text-navy mt-5 mb-1 leading-tight">
                  {tx(t.brands.ghName, lang)}
                </h3>
                <p className="text-[13px] tracking-[0.08em] uppercase m-0 mb-6" style={{ color: '#7A52B8' }}>
                  {tx(t.brands.ghRole, lang)}
                </p>
                <p className="text-[15px] leading-relaxed text-navy/70 m-0 mb-5">
                  {tx(t.brands.ghLead, lang)}
                </p>
                <ul className="m-0 p-0 list-none space-y-2.5 flex-1">
                  {[tx(t.brands.ghB1, lang), tx(t.brands.ghB2, lang), tx(t.brands.ghB3, lang)].map((item) => (
                    <li key={item} className="flex gap-3 text-[14px] text-navy/80 leading-snug">
                      <span className="mt-2 h-px w-3 flex-shrink-0" style={{ background: '#7A52B8' }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[13px] text-navy/50 mt-6 mb-0">{tx(t.brands.ghClose, lang)}</p>
                <VisitLink href={brandSites.graphicsHouse} color="#5B3B8C" label={tx(t.brands.visit, lang)} />
              </article>
            </Reveal>

            {/* Turriva */}
            <Reveal delay="reveal-delay-2">
              <article className="brand-card h-full flex flex-col p-8 md:p-9">
                <div
                  className="h-[3px] w-12 mb-8"
                  style={{ background: 'linear-gradient(90deg, #B5651D, #E08A3C)' }}
                />
                <BrandIcon kind="tu" />
                <h3 className="font-display text-[1.85rem] font-medium text-navy mt-5 mb-1 leading-tight">
                  {tx(t.brands.tuName, lang)}
                </h3>
                <p className="text-[13px] tracking-[0.08em] uppercase m-0 mb-6" style={{ color: '#B5651D' }}>
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
              </article>
            </Reveal>

            {/* Bees Motion */}
            <Reveal delay="reveal-delay-3">
              <article className="brand-card h-full flex flex-col p-8 md:p-9">
                <div
                  className="h-[3px] w-12 mb-8"
                  style={{ background: 'linear-gradient(90deg, #14707A, #1E9AA6)' }}
                />
                <BrandIcon kind="bm" />
                <h3 className="font-display text-[1.85rem] font-medium text-navy mt-5 mb-1 leading-tight">
                  {tx(t.brands.bmName, lang)}
                </h3>
                <p className="text-[13px] tracking-[0.08em] uppercase m-0 mb-6" style={{ color: '#14707A' }}>
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
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="together" className="anchor-target py-24 md:py-32" style={{ background: '#10182A' }}>
        <div className="container-xl">
          <Reveal>
            <div className="gold-rule mb-6" />
            <p className="section-kicker mb-10" style={{ color: '#C9A24B' }}>
              {tx(t.together.kicker, lang)}
            </p>
            <p className="max-w-3xl mb-16 md:mb-20 text-[17px] md:text-[19px] leading-[1.85] font-light m-0" style={{ color: 'rgba(246,243,236,0.72)' }}>
              {tx(t.together.body, lang)}
            </p>
          </Reveal>

          <Reveal delay="reveal-delay-1">
            <div className="relative">
              <div
                className="hidden md:block absolute top-[11px] start-[12px] end-[12px] h-px"
                style={{ background: 'linear-gradient(to inline-end, #7A52B8, #E08A3C, #1E9AA6, #14707A)' }}
              />
              <div
                className="md:hidden absolute top-3 bottom-3 w-px"
                style={{
                  insetInlineStart: '11px',
                  background: 'linear-gradient(180deg, #7A52B8, #E08A3C, #1E9AA6, #14707A)',
                }}
              />
              <ol className="relative m-0 p-0 list-none grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
                {stages.map((stage) => (
                  <li key={stage.label} className="flex md:flex-col gap-5 md:gap-0">
                    <span
                      className="relative z-[1] mt-0.5 md:mt-0 w-[22px] h-[22px] rounded-full flex-shrink-0 border-2"
                      style={{ borderColor: stage.color, background: '#10182A' }}
                    />
                    <div className="md:mt-6">
                      <p className="font-display text-cream text-[1.35rem] md:text-[1.5rem] leading-snug m-0 mb-2 font-medium">
                        {stage.label}
                      </p>
                      <p className="text-[12px] m-0" style={{ color: stage.color }}>
                        {stage.brand}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="anchor-target py-24 md:py-32">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <Reveal className="lg:col-span-5">
              <div className="gold-rule mb-6" />
              <p className="section-kicker mb-10">{tx(t.contact.kicker, lang)}</p>
              <p className="prose-hold m-0 mb-10">{tx(t.contact.body, lang)}</p>
              <div className="flex flex-col gap-4">
                {[
                  { name: tx(t.brands.ghName, lang), href: brandSites.graphicsHouse, color: '#5B3B8C' },
                  { name: tx(t.brands.tuName, lang), href: brandSites.turriva, color: '#B5651D' },
                  { name: tx(t.brands.bmName, lang), href: brandSites.beesMotion, color: '#14707A' },
                ].map((b) => (
                  <a
                    key={b.href}
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-link"
                    style={{ color: b.color, textDecoration: 'none' }}
                  >
                    <span>{b.name}</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden style={{ transform: isAr ? 'scaleX(-1)' : undefined }}>
                      <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
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
