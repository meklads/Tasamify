import { Link } from 'react-router-dom'
import turrivaMotif from '../assets/turriva-motif.png'
import { useLang } from '../lib/LanguageContext'
import { t, tx } from '../lib/translations'

function HeroVisual() {
  const { lang, isAr } = useLang()
  return (
    <div className="relative w-full h-[520px] rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d5c63 0%, #1a8a94 50%, #2ab5c2 100%)' }}>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
        backgroundSize: '48px 48px'
      }}></div>
      <div className="absolute top-12 left-10 right-10">
        <div className="rounded-2xl p-5 mb-4" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.2)' }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-white/60 text-xs font-medium mb-1">{tx(t.dash.platform, lang)}</div>
              <div className="text-white font-bold text-lg">{tx(t.dash.project, lang)}</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-white/70 text-xs">{tx(t.dash.live, lang)}</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: tx(t.dash.daily, lang), value: '1,240', delta: '+18%' },
              { label: tx(t.dash.engage, lang), value: '84.7%', delta: '+6%' },
              { label: tx(t.dash.conv, lang), value: '23.1%', delta: '+11%' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <div className="text-white/50 text-xs mb-1">{s.label}</div>
                <div className="text-white font-bold text-lg leading-tight">{s.value}</div>
                <div className="text-emerald-300 text-xs font-semibold mt-1">{s.delta}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <div className="text-white/60 text-xs mb-2">Interactive Touchpoints</div>
            <div className="flex gap-2 mb-3">
              {[tx(t.dash.lobby,lang), tx(t.dash.gallery,lang), tx(t.dash.vr,lang), tx(t.dash.info,lang)].map((tab, i) => (
                <div key={tab} className={`flex-1 rounded-lg py-1.5 text-center text-xs font-medium ${i === 1 ? 'bg-white/25 text-white' : 'text-white/50'}`}>{tab}</div>
              ))}
            </div>
            <div className="space-y-1.5">
              {[
                { label: tx(t.dash.dwell, lang), val: 72 },
                { label: tx(t.dash.interactions, lang), val: 89 },
              ].map((m) => (
                <div key={m.label}>
                  <div className="flex justify-between text-xs text-white/60 mb-1"><span>{m.label}</span><span>{m.val}%</span></div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${m.val}%`, background: 'linear-gradient(90deg, #2ab5c2, #00c4cc)' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <div className="text-white/60 text-xs mb-2">{tx(t.dash.aiAgent, lang)}</div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.2)' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="6" r="3" fill="white" opacity="0.9"/><path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="white" strokeWidth="1.5" opacity="0.7" fill="none"/></svg>
              </div>
              <div>
                <div className="text-white text-xs font-semibold">{tx(t.dash.aiAgent, lang)}</div>
                <div className="text-white/50 text-xs">{tx(t.dash.responding, lang)}</div>
              </div>
            </div>
            <div className="space-y-2">
              {[tx(t.dash.q1,lang), tx(t.dash.q2,lang), tx(t.dash.q3,lang)].map((txt, i) => (
                <div key={txt} className="rounded-lg px-3 py-1.5 text-xs" style={{ background: i === 0 ? 'rgba(42,181,194,0.3)' : 'rgba(255,255,255,0.08)' }}>
                  <span className="text-white/80">{txt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20" style={{ background: 'linear-gradient(to top, rgba(13,92,99,0.8), transparent)' }}></div>
    </div>
  )
}

function ServiceCard({ icon, title, subtitle, href, features }: {
  icon: React.ReactNode; title: string; subtitle: string; href: string; features: string[]
}) {
  const { lang } = useLang()
  return (
    <Link to={href} className="premium-card block group p-8 hover:no-underline">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, var(--teal-pale) 0%, rgba(42,181,194,0.15) 100%)' }}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal transition-colors">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">{subtitle}</p>
      <ul className="space-y-2 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--teal-mid)' }}></span>
            {f}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--teal-deep)' }}>
        {tx(t.home.exploreBtn2, lang)}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform" style={{ transform: 'var(--icon-flip, none)' }}>
          <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </Link>
  )
}

function CaseStudyCard({ title, category, tag, stats, color }: {
  title: string; category: string; tag: string; stats: { label: string; value: string }[]; color: string
}) {
  return (
    <div className="premium-card overflow-hidden group">
      <div className={`h-52 relative flex items-end p-6 ${color}`}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.4) 0%, transparent 60%)' }}></div>
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white mb-2 backdrop-blur-sm">{tag}</span>
          <h4 className="text-white font-bold text-lg leading-snug">{title}</h4>
        </div>
      </div>
      <div className="p-6">
        <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-4">{category}</div>
        <div className="grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl p-3" style={{ background: 'var(--gray-warm)' }}>
              <div className="text-lg font-bold" style={{ color: 'var(--teal-deep)' }}>{s.value}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const { lang } = useLang()

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="bg-hero-gradient pt-44 pb-20 relative overflow-hidden">
        <img src={turrivaMotif} aria-hidden="true" alt="" className="absolute pointer-events-none select-none" style={{ width: 520, opacity: 0.06, top: -60, right: -80, transform: 'rotate(-8deg)', zIndex: 0 }} />
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up">
              <div className="tag mb-6">{tx(t.home.heroTag, lang)}</div>
              <h1 className="hero-title text-gray-900 mb-6">
                {tx(t.home.heroTitle1, lang)}{' '}
                <span className="gradient-text">{tx(t.home.heroTitle2, lang)}</span>
              </h1>
              <p className="subtitle text-gray-500 mb-10 max-w-lg">{tx(t.home.heroSub, lang)}</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/real-estate" className="btn-primary">
                  {tx(t.home.exploreBtn, lang)}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link to="/contact" className="btn-outline">{tx(t.home.consultBtn, lang)}</Link>
              </div>
              <div className="flex flex-wrap gap-8 mt-12 pt-10 border-t border-gray-100">
                {[
                  { value: tx(t.home.stat1Val, lang), label: tx(t.home.stat1Label, lang) },
                  { value: tx(t.home.stat2Val, lang), label: tx(t.home.stat2Label, lang) },
                  { value: tx(t.home.stat3Val, lang), label: tx(t.home.stat3Label, lang) },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="stat-number gradient-text">{s.value}</div>
                    <div className="text-xs text-gray-500 font-medium mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-in-up-delay-2"><HeroVisual /></div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-14 border-y border-gray-100 bg-white">
        <div className="container-xl">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{tx(t.home.trustedBy, lang)}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {['Muslim World League', 'Hilton Hotels', 'International Medical Center', 'Vision 2030', 'Saudi Government'].map((client) => (
              <div key={client} className="text-gray-300 font-semibold text-sm tracking-wide hover:text-gray-500 transition-colors cursor-default">{client}</div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-section-gradient relative overflow-hidden">
        <img src={turrivaMotif} aria-hidden="true" alt="" className="absolute pointer-events-none select-none" style={{ width: 380, opacity: 0.05, bottom: -60, left: -60, transform: 'rotate(180deg)', zIndex: 0 }} />
        <div className="container-xl">
          <div className="text-center mb-16">
            <div className="tag mb-4">{tx(t.home.servicesTag, lang)}</div>
            <h2 className="section-title text-gray-900 mb-5">
              {tx(t.home.servicesTitle1, lang)} <span className="gradient-text">{tx(t.home.servicesTitle2, lang)}</span>
            </h2>
            <p className="subtitle text-gray-500 max-w-2xl mx-auto">{tx(t.home.servicesSub, lang)}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              href="/real-estate"
              icon={<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4L26 11V24H2V11L14 4Z" stroke="var(--teal-deep)" strokeWidth="1.5" fill="none"/><rect x="10" y="16" width="8" height="8" rx="1" stroke="var(--teal-deep)" strokeWidth="1.5" fill="none"/><path d="M7 11h2M19 11h2M14 8v2" stroke="var(--teal-mid)" strokeWidth="1.5" strokeLinecap="round"/></svg>}
              title={tx(t.home.s1Title, lang)}
              subtitle={tx(t.home.s1Sub, lang)}
              features={[tx(t.home.s1F1,lang), tx(t.home.s1F2,lang), tx(t.home.s1F3,lang), tx(t.home.s1F4,lang)]}
            />
            <ServiceCard
              href="/healthcare"
              icon={<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="3" width="22" height="22" rx="4" stroke="var(--teal-deep)" strokeWidth="1.5" fill="none"/><path d="M14 8V20M8 14H20" stroke="var(--teal-mid)" strokeWidth="2" strokeLinecap="round"/></svg>}
              title={tx(t.home.s2Title, lang)}
              subtitle={tx(t.home.s2Sub, lang)}
              features={[tx(t.home.s2F1,lang), tx(t.home.s2F2,lang), tx(t.home.s2F3,lang), tx(t.home.s2F4,lang)]}
            />
            <ServiceCard
              href="/ai-transformation"
              icon={<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="5" stroke="var(--teal-deep)" strokeWidth="1.5" fill="none"/><path d="M14 4V7M14 21V24M4 14H7M21 14H24M6.7 6.7l2.1 2.1M19.2 19.2l2.1 2.1M6.7 21.3l2.1-2.1M19.2 8.8l2.1-2.1" stroke="var(--teal-mid)" strokeWidth="1.5" strokeLinecap="round"/></svg>}
              title={tx(t.home.s3Title, lang)}
              subtitle={tx(t.home.s3Sub, lang)}
              features={[tx(t.home.s3F1,lang), tx(t.home.s3F2,lang), tx(t.home.s3F3,lang), tx(t.home.s3F4,lang)]}
            />
          </div>
        </div>
      </section>


      {/* FEATURED PROJECT PROOF */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-2xl overflow-hidden flex items-center justify-center" style={{ height: '260px', background: 'linear-gradient(135deg, #0d5c63 0%, #1a8a94 100%)' }}>
                <div className="text-center text-white/50">
                  <div className="text-5xl mb-3">🏛</div>
                  <div className="text-sm font-medium tracking-widest uppercase">Exhibition — Muslim World League</div>
                </div>
              </div>
              {[
                { icon: '🗺', label: 'Architectural Model' },
                { icon: '📱', label: 'Interactive Screens' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl flex items-center justify-center" style={{ height: '150px', background: 'linear-gradient(135deg, #1a8a94 0%, #2ab5c2 100%)' }}>
                  <div className="text-center text-white/60">
                    <div className="text-3xl mb-1">{item.icon}</div>
                    <div className="text-xs font-medium">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Text */}
            <div>
              <div className="tag mb-5">{lang === 'ar' ? 'تنفيذ حقيقي' : 'Real Implementation'}</div>
              <h2 className="section-title text-gray-900 mb-4">
                {lang === 'ar' ? 'معرض رابطة العالم الإسلامي' : 'Muslim World League'}{' '}
                <span className="gradient-text">{lang === 'ar' ? '— مكة المكرمة' : 'Exhibition'}</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                {lang === 'ar'
                  ? 'معرض تفاعلي متكامل يجمع بين النماذج المعمارية وأنظمة العرض الرقمي والذكاء الاصطناعي وتفاعل الزوار في الوقت الفعلي.'
                  : 'A fully integrated interactive exhibition combining architectural models, digital systems, AI visualization, and real-time visitor interaction.'}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: '50,000+', label: lang === 'ar' ? 'زائر' : 'Visitors' },
                  { value: '12', label: lang === 'ar' ? 'منطقة تفاعلية' : 'Interactive Zones' },
                  { value: '97%', label: lang === 'ar' ? 'رضا الزوار' : 'Visitor Satisfaction' },
                  { value: '6', label: lang === 'ar' ? 'أنظمة متكاملة' : 'Integrated Systems' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl p-4" style={{ background: 'var(--gray-warm)' }}>
                    <div className="text-2xl font-bold gradient-text">{s.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <Link to="/case-study/muslim-world-league" className="btn-primary">
                {lang === 'ar' ? 'عرض دراسة الحالة الكاملة' : 'View Full Case Study'}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="tag mb-5">{tx(t.home.ecoTag, lang)}</div>
              <h2 className="section-title text-gray-900 mb-6">
                {tx(t.home.ecoTitle1, lang)} <span className="gradient-text">{tx(t.home.ecoTitle2, lang)}</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">{tx(t.home.ecoDesc, lang)}</p>
              <div className="space-y-4">
                {[
                  { label: tx(t.home.ecoL1, lang), desc: tx(t.home.ecoL1d, lang) },
                  { label: tx(t.home.ecoL2, lang), desc: tx(t.home.ecoL2d, lang) },
                  { label: tx(t.home.ecoL3, lang), desc: tx(t.home.ecoL3d, lang) },
                  { label: tx(t.home.ecoL4, lang), desc: tx(t.home.ecoL4d, lang) },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl hover:bg-teal-pale/50 transition-colors">
                    <div className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0" style={{ background: 'var(--teal-mid)' }}></div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{item.label}</div>
                      <div className="text-gray-500 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Ecosystem diagram */}
            <div className="relative h-[480px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full" style={{ background: 'radial-gradient(circle, var(--teal-pale) 0%, transparent 70%)' }}></div>
              </div>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 480 480" fill="none">
                <circle cx="240" cy="240" r="140" stroke="var(--teal-light)" strokeWidth="1" strokeDasharray="6 6" opacity="0.3"/>
                <circle cx="240" cy="240" r="90" stroke="var(--teal-mid)" strokeWidth="1" strokeDasharray="4 4" opacity="0.2"/>
                {[[240,100],[380,240],[240,380],[100,240]].map(([x,y], i) => (
                  <line key={i} x1="240" y1="240" x2={x} y2={y} stroke="var(--teal-mid)" strokeWidth="1" opacity="0.2"/>
                ))}
              </svg>
              <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                <div className="w-28 h-28 rounded-full flex items-center justify-center shadow-2xl"
                  style={{ background: 'linear-gradient(135deg, var(--teal-deep) 0%, var(--teal-mid) 100%)' }}>
                  <div className="text-white font-bold text-sm text-center leading-tight">
                    {lang === 'ar' ? 'تسامي\nالمركزي' : 'TASAMI\nCORE'}
                  </div>
                </div>
              </div>
              {[
                { label: tx(t.home.ecoL1,lang), x: 50, y: 8 },
                { label: tx(t.home.ecoL3,lang), x: 92, y: 50 },
                { label: tx(t.home.ecoL4,lang), x: 50, y: 90 },
                { label: tx(t.home.ecoL2,lang), x: 8, y: 50 },
              ].map((dot) => (
                <div key={dot.label} className="absolute flex flex-col items-center gap-2" style={{ left: `${dot.x}%`, top: `${dot.y}%`, transform: 'translate(-50%, -50%)' }}>
                  <div className="w-24 h-24 rounded-full flex items-center justify-center text-center font-semibold text-white shadow-xl text-xs px-2"
                    style={{ background: 'linear-gradient(135deg, var(--teal-deep) 0%, var(--teal-mid) 100%)' }}>
                    {dot.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section-padding relative overflow-hidden" style={{ background: 'var(--gray-warm)' }}>
        <img src={turrivaMotif} aria-hidden="true" alt="" className="absolute pointer-events-none select-none" style={{ width: 340, opacity: 0.07, top: 40, right: -50, transform: 'rotate(12deg)', zIndex: 0 }} />
        <div className="container-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="tag mb-4">{tx(t.home.workTag, lang)}</div>
              <h2 className="section-title text-gray-900">
                {tx(t.home.workTitle1, lang)} <span className="gradient-text">{tx(t.home.workTitle2, lang)}</span>
              </h2>
            </div>
            <Link to="/portfolio" className="btn-outline flex-shrink-0">{tx(t.home.viewAll, lang)}</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CaseStudyCard
              title="Muslim World League Global Exhibition"
              category={tx(t.home.cs1Cat, lang)}
              tag={lang === 'ar' ? 'معرض' : 'Exhibition'}
              stats={[
                { label: tx(t.home.cs1Stat1L, lang), value: '50,000+' },
                { label: tx(t.home.cs1Stat2L, lang), value: '12' },
              ]}
              color="bg-gradient-to-br from-teal-800 to-teal-600"
            />
            <CaseStudyCard
              title="International Medical Center"
              category={tx(t.home.cs2Cat, lang)}
              tag={lang === 'ar' ? 'رعاية صحية' : 'Healthcare'}
              stats={[
                { label: tx(t.home.cs2Stat1L, lang), value: '97%' },
                { label: tx(t.home.cs2Stat2L, lang), value: '-42%' },
              ]}
              color="bg-gradient-to-br from-blue-800 to-cyan-600"
            />
            <CaseStudyCard
              title="Hilton Jeddah — Real Estate Center"
              category={tx(t.home.cs3Cat, lang)}
              tag={lang === 'ar' ? 'عقارات' : 'Real Estate'}
              stats={[
                { label: tx(t.home.cs3Stat1L, lang), value: '+68%' },
                { label: tx(t.home.cs3Stat2L, lang), value: '+85%' },
              ]}
              color="bg-gradient-to-br from-slate-700 to-teal-700"
            />
          </div>
        </div>
      </section>

      {/* WHY TASAMI */}
      <section className="section-padding bg-white relative overflow-hidden">
        <img src={turrivaMotif} aria-hidden="true" alt="" className="absolute pointer-events-none select-none" style={{ width: 300, opacity: 0.05, bottom: -40, left: -40, transform: 'rotate(-20deg)', zIndex: 0 }} />
        <div className="container-xl">
          <div className="text-center mb-16">
            <div className="tag mb-4">{tx(t.home.whyTag, lang)}</div>
            <h2 className="section-title text-gray-900">
              {tx(t.home.whyTitle1, lang)} <span className="gradient-text">{tx(t.home.whyTitle2, lang)}</span>
            </h2>
            <p className="subtitle text-gray-500 max-w-2xl mx-auto mt-4">{tx(t.home.whySub, lang)}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏛', title: tx(t.home.why1T, lang), desc: tx(t.home.why1D, lang) },
              { icon: '🤖', title: tx(t.home.why2T, lang), desc: tx(t.home.why2D, lang) },
              { icon: '📊', title: tx(t.home.why3T, lang), desc: tx(t.home.why3D, lang) },
              { icon: '🌍', title: tx(t.home.why4T, lang), desc: tx(t.home.why4D, lang) },
            ].map((item) => (
              <div key={item.title} className="premium-card p-7 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-teal-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
        <div className="geometric-circle w-96 h-96 opacity-10" style={{ top: '-80px', right: '-80px', background: 'white' }}></div>
        <img src={turrivaMotif} aria-hidden="true" alt="" className="absolute pointer-events-none select-none" style={{ width: 420, opacity: 0.12, bottom: -80, left: -60, transform: 'rotate(15deg) scaleX(-1)', zIndex: 1 }} />
        <div className="container-xl relative z-10 text-center">
          <h2 className="section-title text-white mb-6">{tx(t.home.ctaTitle, lang)}</h2>
          <p className="subtitle text-white/75 max-w-xl mx-auto mb-10">{tx(t.home.ctaSub, lang)}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="px-10 py-4 bg-white rounded-full font-semibold text-sm hover:shadow-xl hover:-translate-y-1 transition-all" style={{ color: 'var(--teal-deep)' }}>
              {tx(t.home.ctaBtn, lang)}
            </Link>
            <Link to="/portfolio" className="px-10 py-4 bg-white/15 rounded-full font-semibold text-sm text-white border border-white/30 hover:bg-white/25 transition-all">
              {tx(t.home.viewWork, lang)}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
