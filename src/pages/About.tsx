import { Link } from 'react-router-dom'
import { useLang } from '../lib/LanguageContext'
import { t, tx } from '../lib/translations'

export default function About() {
  const { lang } = useLang()
  return (
    <div className="bg-white">
      <section className="pt-44 pb-20 bg-hero-gradient">
        <div className="container-xl">
          <div className="max-w-3xl">
            <div className="tag mb-5">{tx(t.about.tag, lang)}</div>
            <h1 className="hero-title text-gray-900 mb-6">{tx(t.about.title1, lang)}<br/><span className="gradient-text">{tx(t.about.title2, lang)}</span></h1>
            <p className="subtitle text-gray-500 max-w-2xl">{tx(t.about.sub, lang)}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <div className="tag mb-5">{tx(t.about.storyTag, lang)}</div>
              <h2 className="section-title text-gray-900 mb-7">{tx(t.about.storyTitle1, lang)} <span className="gradient-text">{tx(t.about.storyTitle2, lang)}</span></h2>
              <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                {[tx(t.about.p1,lang), tx(t.about.p2,lang), tx(t.about.p3,lang), tx(t.about.p4,lang)].map((p,i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-5 mb-8">
                {[
                  { value: lang==='ar'?'+١٥':'15+', label: lang==='ar'?'سنة خبرة تنفيذية':'Years of Execution', icon: '📅' },
                  { value: lang==='ar'?'+٢٠٠':'200+', label: lang==='ar'?'مشروع منفّذ':'Projects Delivered', icon: '🏗' },
                  { value: lang==='ar'?'+٤٠':'40+', label: lang==='ar'?'عميل مؤسسي':'Enterprise Clients', icon: '🤝' },
                  { value: '3', label: lang==='ar'?'دول خليجية نشطة':'Gulf Countries Active', icon: '🌍' },
                ].map((s) => (
                  <div key={s.label} className="premium-card p-7">
                    <div className="text-3xl mb-3">{s.icon}</div>
                    <div className="stat-number gradient-text text-4xl mb-1">{s.value}</div>
                    <div className="text-sm text-gray-500 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl p-7" style={{ background: 'var(--teal-pale)', border: '1px solid rgba(26,138,148,0.2)' }}>
                <div className="text-4xl mb-4" style={{ color: 'var(--teal-light)' }}>"</div>
                <p className="text-gray-700 text-lg leading-relaxed font-medium italic mb-4">{tx(t.about.quote, lang)}</p>
                <div className="text-sm font-semibold" style={{ color: 'var(--teal-deep)' }}>{tx(t.about.quoteBy, lang)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--gray-warm)' }}>
        <div className="container-xl">
          <div className="text-center mb-14">
            <div className="tag mb-4">{tx(t.about.valTag, lang)}</div>
            <h2 className="section-title text-gray-900">{tx(t.about.valTitle, lang)}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {[
              { icon:'🔨', title:tx(t.about.v1T,lang), desc:tx(t.about.v1D,lang) },
              { icon:'🧠', title:tx(t.about.v2T,lang), desc:tx(t.about.v2D,lang) },
              { icon:'📐', title:tx(t.about.v3T,lang), desc:tx(t.about.v3D,lang) },
              { icon:'🌱', title:tx(t.about.v4T,lang), desc:tx(t.about.v4D,lang) },
              { icon:'📊', title:tx(t.about.v5T,lang), desc:tx(t.about.v5D,lang) },
              { icon:'🤝', title:tx(t.about.v6T,lang), desc:tx(t.about.v6D,lang) },
            ].map((item) => (
              <div key={item.title} className="premium-card p-7">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="tag mb-5">{tx(t.about.journeyTag, lang)}</div>
              <h2 className="section-title text-gray-900 mb-10">{tx(t.about.journeyTitle1, lang)} <span className="gradient-text">{tx(t.about.journeyTitle2, lang)}</span></h2>
              {[
                { year: lang==='ar'?'١٠':'\'10', title: lang==='ar'?'تأسيس جرافيكس هاوي':'Graphics Howi Founded', desc: lang==='ar'?'تأسست في الرياض مع التركيز على إنتاج النماذج المعمارية وبيئات المعارض.':'Established in Riyadh with a focus on architectural model production and exhibition environments.' },
                { year: lang==='ar'?'١٤':'\'14', title: lang==='ar'?'أول معرض واسع النطاق':'First Large-Scale Exhibition', desc: lang==='ar'?'صممنا ونفّذنا أول بيئة معرض غامرة بمساحة +٢٠٠٠م² لجهة حكومية سعودية.':'Designed and delivered the first 2,000m²+ immersive exhibition environment for a Saudi government entity.' },
                { year: lang==='ar'?'١٧':'\'17', title: lang==='ar'?'دمج التكنولوجيا التفاعلية':'Interactive Technology Integration', desc: lang==='ar'?'إطلاق أولى تركيبات الشاشات التفاعلية وأنظمة اللمس لمراكز مبيعات العقارات.':'Launched first interactive display and touch system installations for real estate sales centers.' },
                { year: lang==='ar'?'٢٠':'\'20', title: lang==='ar'?'التوسع في الرعاية الصحية':'Smart Healthcare Expansion', desc: lang==='ar'?'دخلنا قطاع الرعاية الصحية بأنظمة تجربة مرضى منتشرة في المستشفيات الكبرى.':'Entered the healthcare sector with patient experience systems deployed across major hospitals.' },
                { year: lang==='ar'?'٢٣':'\'23', title: lang==='ar'?'إطلاق أنظمة الذكاء الاصطناعي':'AI Systems Launch', desc: lang==='ar'?'أولى أنظمة الذكاء الاصطناعي وأكشاك المحادثة تُنشر في البيئات المؤسسية.':'First AI agent and conversational AI kiosk systems deployed in enterprise environments.' },
                { year: lang==='ar'?'٢٥':'\'25', title: lang==='ar'?'تسامي: المنصة':'Tasami: The Platform', desc: lang==='ar'?'تسامي تُطلق منصة ذكاء التجربة الموحّدة التي تدمج ١٥ عاماً من التنفيذ مع الذكاء الاصطناعي.':'Tasami launches as the unified Experience Intelligence platform integrating 15 years of execution with AI.' },
              ].map((item, i, arr) => (
                <div key={item.year} className="flex gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-md" style={{ background: 'linear-gradient(135deg, var(--teal-deep), var(--teal-mid))', color: 'white' }}>{item.year}</div>
                    {i < arr.length-1 && <div className="w-px flex-1 mt-2" style={{ background: 'linear-gradient(to bottom, var(--teal-mid), transparent)', minHeight: '48px' }}></div>}
                  </div>
                  <div className="pb-10">
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="tag mb-5">{tx(t.about.capTag, lang)}</div>
              <h2 className="section-title text-gray-900 mb-8">{tx(t.about.capTitle1, lang)} <span className="gradient-text">{tx(t.about.capTitle2, lang)}</span></h2>
              <div className="space-y-3">
                {[
                  { label: lang==='ar'?'إنتاج النماذج المعمارية':'Architectural Model Production', level: 98 },
                  { label: lang==='ar'?'تنفيذ المعارض':'Exhibition Execution', level: 97 },
                  { label: lang==='ar'?'أنظمة التكنولوجيا التفاعلية':'Interactive Technology Systems', level: 92 },
                  { label: lang==='ar'?'دمج الذكاء الاصطناعي':'AI Integration & Agents', level: 90 },
                  { label: lang==='ar'?'التصميم المكاني وتجربة المستخدم':'Spatial & Experience Design', level: 95 },
                  { label: lang==='ar'?'أنظمة تجربة الرعاية الصحية':'Healthcare Experience Systems', level: 88 },
                  { label: lang==='ar'?'تصميم مراكز مبيعات العقارات':'Real Estate Sales Center Design', level: 96 },
                  { label: lang==='ar'?'منصات تحليل البيانات':'Data Analytics Platforms', level: 85 },
                ].map((c) => (
                  <div key={c.label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-gray-700">{c.label}</span>
                      <span style={{ color: 'var(--teal-deep)' }} className="font-semibold">{c.level}%</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--gray-soft)' }}>
                      <div className="h-full rounded-full" style={{ width: `${c.level}%`, background: 'linear-gradient(90deg, var(--teal-deep), var(--teal-light))' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--gray-warm)' }}>
        <div className="container-xl">
          <div className="text-center mb-14">
            <div className="tag mb-4">{tx(t.about.teamTag, lang)}</div>
            <h2 className="section-title text-gray-900">{tx(t.about.teamTitle1, lang)} <span className="gradient-text">{tx(t.about.teamTitle2, lang)}</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { nameEn:'Ahmad Al-Rashidi', nameAr:'أحمد الراشدي', roleEn:'Founder & CEO', roleAr:'المؤسس والرئيس التنفيذي', bg:'bg-gradient-to-br from-teal-700 to-teal-500' },
              { nameEn:'Nour El-Amin', nameAr:'نور الأمين', roleEn:'Chief Experience Officer', roleAr:'مدير تجربة العملاء', bg:'bg-gradient-to-br from-blue-700 to-cyan-600' },
              { nameEn:'Khalid Al-Zahrani', nameAr:'خالد الزهراني', roleEn:'Head of AI Systems', roleAr:'رئيس أنظمة الذكاء الاصطناعي', bg:'bg-gradient-to-br from-slate-700 to-teal-600' },
              { nameEn:'Sara Al-Dosari', nameAr:'سارة الدوسري', roleEn:'Creative Director', roleAr:'المدير الإبداعي', bg:'bg-gradient-to-br from-teal-800 to-emerald-600' },
            ].map((m) => {
              const name = lang==='ar'?m.nameAr:m.nameEn
              const role = lang==='ar'?m.roleAr:m.roleEn
              return (
                <div key={m.nameEn} className="premium-card p-6 text-center">
                  <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl ${m.bg}`}>
                    {lang==='ar'?m.nameAr[0]:m.nameEn.split(' ').map((n:string)=>n[0]).join('')}
                  </div>
                  <div className="font-bold text-gray-900">{name}</div>
                  <div className="text-sm text-gray-500 mt-1">{role}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-teal-gradient relative overflow-hidden">
        <div className="container-xl relative z-10 text-center">
          <h2 className="section-title text-white mb-5">{tx(t.about.ctaTitle, lang)}</h2>
          <p className="subtitle text-white/75 max-w-xl mx-auto mb-10">{tx(t.about.ctaSub, lang)}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="px-10 py-4 bg-white rounded-full font-semibold text-sm hover:shadow-xl hover:-translate-y-1 transition-all" style={{ color: 'var(--teal-deep)' }}>{tx(t.about.ctaBtn, lang)}</Link>
            <Link to="/portfolio" className="px-10 py-4 bg-white/15 rounded-full font-semibold text-sm text-white border border-white/30 hover:bg-white/25 transition-all">{tx(t.about.exploreWork, lang)}</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
