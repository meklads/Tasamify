import { Link } from 'react-router-dom'
import { useLang } from '../lib/LanguageContext'

function ImgPlaceholder({ icon, label, height = 240 }: { icon: string; label: string; height?: number }) {
  return (
    <div className="rounded-2xl flex flex-col items-center justify-center gap-3 w-full overflow-hidden"
      style={{ height, background: 'linear-gradient(135deg, #0d5c63 0%, #1a8a94 60%, #2ab5c2 100%)' }}>
      <div className="text-5xl opacity-60">{icon}</div>
      <div className="text-white/50 text-xs font-medium tracking-widest uppercase text-center px-6">{label}</div>
    </div>
  )
}

function VideoPlaceholder({ label }: { label: string }) {
  return (
    <div className="rounded-2xl flex flex-col items-center justify-center gap-4 w-full relative overflow-hidden"
      style={{ height: 420, background: 'linear-gradient(135deg, #0a3d42 0%, #0d5c63 60%, #1a8a94 100%)' }}>
      <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M12 8L26 16L12 24V8Z" fill="white" opacity="0.8"/>
        </svg>
      </div>
      <div className="text-white/50 text-sm font-medium tracking-widest uppercase">{label}</div>
    </div>
  )
}

export default function CaseStudy() {
  const { isAr } = useLang()
  const ar = isAr

  return (
    <div className="bg-white" dir={ar ? 'rtl' : 'ltr'}>

      {/* ── HERO ── */}
      <section className="pt-44 pb-20" style={{ background: 'linear-gradient(160deg, #f0fafa 0%, #ffffff 60%)' }}>
        <div className="container-xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Link to="/portfolio" className="text-sm text-gray-400 hover:text-teal transition-colors flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              {ar ? 'أعمالنا' : 'Portfolio'}
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-sm text-gray-500">{ar ? 'رابطة العالم الإسلامي' : 'Muslim World League'}</span>
          </div>
          <div className="tag mb-6">{ar ? 'دراسة حالة' : 'Case Study'}</div>
          <h1 className="hero-title text-gray-900 mb-6 max-w-4xl">
            {ar ? 'تجربة معرض تفاعلي متكامل —' : 'Interactive Exhibition Experience —'}{' '}
            <span className="gradient-text">{ar ? 'رابطة العالم الإسلامي' : 'Muslim World League'}</span>
          </h1>
          <p className="subtitle text-gray-500 max-w-3xl mb-10">
            {ar
              ? 'معرض تفاعلي متكامل يجمع بين النماذج المعمارية الدقيقة وأنظمة العرض الرقمي وتقنيات الذكاء الاصطناعي وتفاعل الزوار في الوقت الفعلي — نُفّذ في مكة المكرمة.'
              : 'A fully integrated interactive exhibition combining high-precision architectural models, digital display systems, AI technologies, and real-time visitor interaction — executed in Makkah Al-Mukarramah.'}
          </p>
          <div className="flex flex-wrap gap-6">
            {[
              { label: ar ? 'العميل' : 'Client', val: ar ? 'رابطة العالم الإسلامي' : 'Muslim World League' },
              { label: ar ? 'القطاع' : 'Sector', val: ar ? 'معرض ومؤسسة دولية' : 'Exhibition & International Institution' },
              { label: ar ? 'الموقع' : 'Location', val: ar ? 'مكة المكرمة، المملكة العربية السعودية' : 'Makkah, Saudi Arabia' },
            ].map((m) => (
              <div key={m.label} className="rounded-xl px-5 py-3" style={{ background: 'var(--gray-warm)' }}>
                <div className="text-xs text-gray-400 mb-1">{m.label}</div>
                <div className="font-semibold text-gray-900 text-sm">{m.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY METRICS ── */}
      <section className="py-14 border-y border-gray-100 bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: '50,000+', label: ar ? 'زائر' : 'Visitors' },
              { val: '12', label: ar ? 'منطقة تفاعلية' : 'Interactive Zones' },
              { val: '97%', label: ar ? 'رضا الزوار' : 'Visitor Satisfaction' },
              { val: '6', label: ar ? 'أنظمة متكاملة' : 'Integrated Systems' },
            ].map((s) => (
              <div key={s.label} className="text-center p-5 rounded-2xl" style={{ background: 'var(--gray-warm)' }}>
                <div className="text-3xl font-bold gradient-text mb-1">{s.val}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="section-padding bg-white">
        <div className="container-xl max-w-3xl">
          <div className="tag mb-5">{ar ? 'نظرة عامة' : 'Overview'}</div>
          <h2 className="section-title text-gray-900 mb-6">
            {ar ? 'المشروع' : 'The'}{' '}
            <span className="gradient-text">{ar ? 'والسياق' : 'Project & Context'}</span>
          </h2>
          <div className="prose-custom space-y-4">
            <p className="text-gray-600 text-lg leading-relaxed">
              {ar
                ? 'كُلّفت تسامي (تحت مظلة جرافيكس هاوي) بتصميم وتنفيذ معرض تجربة تفاعلية متكاملة لرابطة العالم الإسلامي. كان الهدف إيصال الرسالة العالمية للرابطة لزوار من خلفيات متنوعة عبر بيئة غامرة تجمع بين المادي والرقمي.'
                : 'Tasami (under Graphics House) was commissioned to design and execute a fully integrated interactive experience exhibition for the Muslim World League. The goal was to communicate the League\'s global message to visitors from diverse backgrounds through an immersive environment combining physical and digital elements.'}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {ar
                ? 'المشروع يُجسّد منهجية تسامي الكاملة: تصميم مكاني احترافي + تقنية تفاعلية + ذكاء اصطناعي + تحليلات التجربة — كل ذلك في بيئة واحدة متكاملة.'
                : 'This project embodies the full Tasami methodology: professional spatial design + interactive technology + AI + experience analytics — all in one integrated environment.'}
            </p>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="section-padding" style={{ background: 'var(--gray-warm)' }}>
        <div className="container-xl">
          <div className="tag mb-6">{ar ? 'معرض الصور' : 'Project Gallery'}</div>
          <h2 className="section-title text-gray-900 mb-10">
            {ar ? 'توثيق بصري' : 'Visual'}{' '}
            <span className="gradient-text">{ar ? 'للمشروع' : 'Documentation'}</span>
          </h2>
          {/* Hero image */}
          <ImgPlaceholder icon="🏛" label={ar ? 'مدخل المعرض — لقطة واسعة' : 'Exhibition Entry — Wide Shot'} height={480} />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {[
              { icon: '🗺', label: ar ? 'النموذج المعماري ثلاثي الأبعاد' : '3D Architectural Model' },
              { icon: '📺', label: ar ? 'شاشات العرض التفاعلية' : 'Interactive Display Screens' },
              { icon: '📱', label: ar ? 'نظام التابلت للتفاعل' : 'Tablet Interaction System' },
              { icon: '🖼', label: ar ? 'جدار الموزاييك الرقمي' : 'Digital Mosaic Wall' },
              { icon: '🤖', label: ar ? 'نظام عرض الذكاء الاصطناعي' : 'AI Display System' },
              { icon: '🌐', label: ar ? 'منطقة التجربة الغامرة' : 'Immersive Experience Zone' },
            ].map((item) => (
              <ImgPlaceholder key={item.label} icon={item.icon} label={item.label} height={200} />
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <section className="section-padding bg-white">
        <div className="container-xl max-w-4xl">
          <div className="text-center mb-10">
            <div className="tag mb-4">{ar ? 'فيديو المشروع' : 'Project Video'}</div>
            <h2 className="section-title text-gray-900">
              {ar ? 'جولة داخل' : 'Walkthrough'}{' '}
              <span className="gradient-text">{ar ? 'المعرض' : 'the Exhibition'}</span>
            </h2>
          </div>
          <VideoPlaceholder label={ar ? 'جولة فيديو في المعرض — قيد الإضافة' : 'Exhibition Walkthrough Video — Coming Soon'} />
        </div>
      </section>

      {/* ── SYSTEMS BREAKDOWN ── */}
      <section className="section-padding" style={{ background: 'linear-gradient(160deg, #f0fafa 0%, #ffffff 100%)' }}>
        <div className="container-xl">
          <div className="text-center mb-14">
            <div className="tag mb-4">{ar ? 'تفصيل الأنظمة' : 'Systems Breakdown'}</div>
            <h2 className="section-title text-gray-900">
              {ar ? 'الأنظمة المتكاملة' : 'Integrated'}{' '}
              <span className="gradient-text">{ar ? 'في المشروع' : 'Systems'}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: '01', icon: '🏗', title: ar ? 'النموذج المادي المعماري' : 'Physical Architectural Model',
                points: ar
                  ? ['نموذج دقيق بمقياس 1:100', 'إضاءة LED متكاملة وذكية', 'عناصر متحركة تفاعلية', 'مواد بريميوم عالية الجودة']
                  : ['Precision scale model 1:100', 'Integrated smart LED lighting', 'Interactive moving elements', 'High-quality premium materials'],
              },
              {
                num: '02', icon: '💻', title: ar ? 'الطبقة الرقمية التفاعلية' : 'Interactive Digital Layer',
                points: ar
                  ? ['12 شاشة تفاعلية عالية الدقة', 'أنظمة تحكم باللمس بالعربية والإنجليزية', 'محتوى مرئي 4K مخصص', 'واجهات متزامنة متعددة']
                  : ['12 high-resolution interactive screens', 'Touch control systems in Arabic and English', 'Custom 4K visual content', 'Multiple synchronized interfaces'],
              },
              {
                num: '03', icon: '🤖', title: ar ? 'نظام الذكاء الاصطناعي' : 'AI System',
                points: ar
                  ? ['مساعد ذكاء اصطناعي يتحدث العربية', 'تصور ثلاثي الأبعاد بالذكاء الاصطناعي', 'تحليل سلوك الزوار في الوقت الحقيقي', 'توصيات محتوى ذكية']
                  : ['Arabic-speaking AI assistant', 'AI-powered 3D visualization', 'Real-time visitor behavior analysis', 'Intelligent content recommendations'],
              },
              {
                num: '04', icon: '📊', title: ar ? 'نظام التفاعل والبيانات' : 'Interaction & Data System',
                points: ar
                  ? ['تتبع مسار الزوار في المعرض', 'لوحة تحكم بيانات لحظية للإدارة', 'تقارير المشاركة والتفاعل', 'أنظمة تغذية راجعة فورية']
                  : ['Visitor path tracking in the exhibition', 'Real-time data dashboard for management', 'Engagement and interaction reports', 'Instant feedback systems'],
              },
            ].map((sys) => (
              <div key={sys.num} className="premium-card p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="text-3xl">{sys.icon}</div>
                  <div>
                    <div className="text-xs font-bold text-teal tracking-widest">{sys.num}</div>
                    <h3 className="font-bold text-gray-900">{sys.title}</h3>
                  </div>
                </div>
                <ul className="space-y-2">
                  {sys.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--teal-mid)' }}></span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="section-padding" style={{ background: 'var(--gray-warm)' }}>
        <div className="container-xl">
          <div className="text-center mb-14">
            <div className="tag mb-4">{ar ? 'النتائج' : 'Results'}</div>
            <h2 className="section-title text-gray-900">
              {ar ? 'الأثر الحقيقي' : 'Real-World'}{' '}
              <span className="gradient-text">{ar ? 'للمشروع' : 'Impact'}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '👥',
                title: ar ? 'أرقام الزوار والتفاعل' : 'Visitor & Engagement Numbers',
                stats: [
                  { val: '50,000+', label: ar ? 'إجمالي الزوار' : 'Total Visitors' },
                  { val: '89%', label: ar ? 'معدل التفاعل' : 'Engagement Rate' },
                  { val: '12 min', label: ar ? 'متوسط وقت الإقامة' : 'Avg. Dwell Time' },
                ],
              },
              {
                icon: '⏱',
                title: ar ? 'جدول التنفيذ' : 'Execution Timeline',
                stats: [
                  { val: '14', label: ar ? 'أسبوع من التصميم للتسليم' : 'Weeks Design to Delivery' },
                  { val: '0', label: ar ? 'تأخير في الجدول الزمني' : 'Timeline Delays' },
                  { val: '6', label: ar ? 'أنظمة سُلّمت في الوقت المحدد' : 'Systems Delivered On Time' },
                ],
              },
              {
                icon: '📊',
                title: ar ? 'إحصائيات التفاعل التقني' : 'Technical Interaction Stats',
                stats: [
                  { val: '97%', label: ar ? 'رضا الزوار' : 'Visitor Satisfaction' },
                  { val: '280k+', label: ar ? 'تفاعل على الشاشات' : 'Screen Interactions' },
                  { val: '99.8%', label: ar ? 'وقت تشغيل الأنظمة' : 'System Uptime' },
                ],
              },
            ].map((block) => (
              <div key={block.title} className="premium-card p-7">
                <div className="text-3xl mb-4">{block.icon}</div>
                <h3 className="font-bold text-gray-900 mb-5 text-sm">{block.title}</h3>
                <div className="space-y-4">
                  {block.stats.map((s) => (
                    <div key={s.label} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-sm text-gray-500">{s.label}</span>
                      <span className="font-bold gradient-text">{s.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-teal-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        <div className="container-xl relative z-10 text-center">
          <h2 className="section-title text-white mb-5">
            {ar ? 'أريد تنفيذ مشروع مماثل' : 'Build a Similar Experience'}
          </h2>
          <p className="subtitle text-white/75 max-w-xl mx-auto mb-10">
            {ar
              ? 'لدينا الخبرة والفريق لتنفيذ مشاريع التجارب الذكية بنفس المستوى وأعلى.'
              : 'We have the expertise and team to execute smart experience projects at the same level and beyond.'}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="px-10 py-4 bg-white rounded-full font-semibold text-sm hover:shadow-xl hover:-translate-y-1 transition-all" style={{ color: 'var(--teal-deep)' }}>
              {ar ? 'تحدث مع فريقنا' : 'Talk to Our Team'}
            </Link>
            <Link to="/portfolio" className="px-10 py-4 bg-white/15 rounded-full font-semibold text-sm text-white border border-white/30 hover:bg-white/25 transition-all">
              {ar ? 'مشاريع أخرى' : 'View More Projects'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
