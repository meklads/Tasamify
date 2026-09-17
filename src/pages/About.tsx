import { useLang } from '../lib/LanguageContext'
import { t, tx } from '../lib/translations'
import { useReveal } from '../hooks/useReveal'

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

export default function About() {
  const { lang } = useLang()
  const goals = [
    { n: t.aboutPage.g1n, title: t.aboutPage.g1t, body: t.aboutPage.g1 },
    { n: t.aboutPage.g2n, title: t.aboutPage.g2t, body: t.aboutPage.g2 },
    { n: t.aboutPage.g3n, title: t.aboutPage.g3t, body: t.aboutPage.g3 },
  ]

  return (
    <div className="bg-cream">
      <section className="relative overflow-hidden" style={{ background: '#10182A' }}>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 55% at 50% 100%, rgba(201,162,75,0.16) 0%, transparent 58%)',
          }}
        />
        <div className="container-xl relative z-10 pt-28 pb-16 md:pt-32 md:pb-24">
          <p className="hero-kicker mb-5 md:mb-6">{tx(t.aboutPage.kicker, lang)}</p>
          <h1 className="section-title section-title-light m-0 max-w-3xl">{tx(t.aboutPage.title, lang)}</h1>
          <p className="hero-support mt-6 md:mt-8 mb-0" style={{ maxWidth: '36rem' }}>
            {tx(t.aboutPage.lead, lang)}
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-xl">
          <div className="purpose-grid">
            <Reveal>
              <h2 className="section-title m-0 mb-5 md:mb-6">{tx(t.aboutPage.visionKicker, lang)}</h2>
              <p className="prose-hold m-0">{tx(t.aboutPage.vision, lang)}</p>
            </Reveal>
            <Reveal delay="reveal-delay-1">
              <h2 className="section-title m-0 mb-5 md:mb-6">{tx(t.aboutPage.missionKicker, lang)}</h2>
              <p className="prose-hold m-0">{tx(t.aboutPage.mission, lang)}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y" style={{ background: '#10182A' }}>
        <div className="container-xl">
          <Reveal>
            <p className="section-kicker mb-4 md:mb-5" style={{ color: '#C9A24B' }}>
              {tx(t.aboutPage.goalsKicker, lang)}
            </p>
            <h2 className="section-title section-title-light m-0 mb-10 md:mb-14">{tx(t.aboutPage.goalsTitle, lang)}</h2>
          </Reveal>
          <ol className="purpose-list">
            {goals.map((g, i) => (
              <Reveal key={g.n.en} delay={`reveal-delay-${i + 1}`}>
                <li className="purpose-item">
                  <p className="purpose-num m-0 mb-3">{tx(g.n, lang)}</p>
                  <h3 className="font-display text-cream text-[1.35rem] md:text-[1.5rem] leading-snug m-0 mb-3 font-medium">
                    {tx(g.title, lang)}
                  </h3>
                  <p className="m-0 text-[16px] leading-[1.85] font-light" style={{ color: 'rgba(246,243,236,0.68)' }}>
                    {tx(g.body, lang)}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y">
        <div className="container-xl">
          <Reveal>
            <p className="section-kicker mb-4 md:mb-6">{tx(t.about.kicker, lang)}</p>
            <h2 className="section-title m-0 mb-6 md:mb-8 max-w-2xl">{tx(t.about.title, lang)}</h2>
            <p className="prose-hold m-0 mb-5 max-w-3xl">{tx(t.about.body, lang)}</p>
            <p className="prose-hold m-0 mb-10 md:mb-12 max-w-3xl">{tx(t.about.body2, lang)}</p>
            <a href="/#companies" className="house-cta">
              {tx(t.aboutPage.cta, lang)}
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
