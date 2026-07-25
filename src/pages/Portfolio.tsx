import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../lib/LanguageContext'
import { t, tx } from '../lib/translations'

const projectsData = [
  { id:1, titleEn:'Muslim World League — Global Exhibition', titleAr:'رابطة العالم الإسلامي — معرض عالمي', catEn:'Exhibition', catAr:'معارض', industryEn:'Government', industryAr:'حكومي', locationEn:'Makkah, Saudi Arabia', locationAr:'مكة المكرمة، المملكة العربية السعودية', color:'from-teal-900 to-teal-700', problemEn:'The Muslim World League needed a world-class exhibition environment to showcase Islamic heritage and organizational impact to global delegates and dignitaries.', problemAr:'احتاجت رابطة العالم الإسلامي إلى بيئة معرض عالمية المستوى لعرض التراث الإسلامي وأثر المنظمة للمندوبين والوفود الدولية.', solutionEn:'We designed and executed a fully immersive 3,000m² exhibition with interactive digital heritage displays, multilingual AI guides, and cinematic spatial storytelling.', solutionAr:'صممنا ونفّذنا معرضاً غامراً بالكامل بمساحة ٣٠٠٠م² مع شاشات تراث رقمية تفاعلية ومرشدين ذكاء اصطناعي متعددي اللغات وسرد مكاني سينمائي.', tech:['Interactive Displays','Multilingual AI','Spatial Design','3D Content'], results:[{v:'50,000+',lEn:'Total Visitors',lAr:'إجمالي الزوار'},{v:'12',lEn:'Interactive Zones',lAr:'منطقة تفاعلية'},{v:'98%',lEn:'Delegate Satisfaction',lAr:'رضا المندوبين'},{v:'3,000m²',lEn:'Experience Area',lAr:'مساحة التجربة'}] },
  { id:2, titleEn:'Hilton Jeddah — Luxury Real Estate Sales Center', titleAr:'هيلتون جدة — مركز مبيعات عقاري فاخر', catEn:'Real Estate', catAr:'عقارات', industryEn:'Real Estate', industryAr:'عقارات', locationEn:'Jeddah, Saudi Arabia', locationAr:'جدة، المملكة العربية السعودية', color:'from-slate-800 to-teal-700', problemEn:'A premium real estate developer required a sales environment that matched the luxury positioning of their waterfront project and delivered measurable conversion results.', problemAr:'احتاج مطور عقاري متميز إلى بيئة مبيعات تتناسب مع المكانة الفاخرة لمشروعه الواجهة البحرية وتحقق نتائج تحويل قابلة للقياس.', solutionEn:'Tasami created a fully intelligent sales center with an interactive architectural model, touch-screen unit selectors, AI sales assistant, and a 180° panoramic display system.', solutionAr:'أنشأت تسامي مركز مبيعات ذكياً متكاملاً مع نموذج معماري تفاعلي ومحددات وحدات باللمس ومساعد مبيعات ذكي اصطناعي ونظام عرض بانورامي ١٨٠ درجة.', tech:['AI Sales Agent','Interactive Models','180° Display','Touch Systems','CRM Integration'], results:[{v:'+68%',lEn:'Lead Conversion',lAr:'تحويل العملاء'},{v:'+85%',lEn:'Dwell Time',lAr:'مدة المكوث'},{v:'3.2×',lEn:'Buyer Engagement',lAr:'تفاعل المشتري'},{v:'92%',lEn:'Client Satisfaction',lAr:'رضا العميل'}] },
  { id:3, titleEn:'International Medical Center — Smart Hospital', titleAr:'المركز الطبي الدولي — مستشفى ذكي', catEn:'Healthcare', catAr:'رعاية صحية', industryEn:'Healthcare', industryAr:'رعاية صحية', locationEn:'Riyadh, Saudi Arabia', locationAr:'الرياض، المملكة العربية السعودية', color:'from-blue-900 to-cyan-700', problemEn:'One of Saudi Arabia\'s leading hospitals sought to reduce patient anxiety, improve wayfinding, and deliver measurable patient satisfaction improvements across all departments.', problemAr:'سعى أحد أبرز مستشفيات المملكة العربية السعودية إلى تقليل قلق المرضى وتحسين التنقل وتحقيق تحسينات ملموسة في رضا المرضى عبر جميع الأقسام.', solutionEn:'We deployed a comprehensive smart patient experience system including AI-powered wayfinding, smart reception kiosks, patient education displays, and a live experience analytics platform.', solutionAr:'نشرنا نظاماً شاملاً لتجربة المريض الذكية يشمل التنقل بالذكاء الاصطناعي وأكشاك استقبال ذكية وشاشات تثقيف المرضى ومنصة تحليلات تجربة مباشرة.', tech:['AI Wayfinding','Smart Kiosks','Patient Education','Experience Analytics','Bilingual AI'], results:[{v:'97%',lEn:'Patient Satisfaction',lAr:'رضا المرضى'},{v:'–42%',lEn:'Waiting Stress',lAr:'توتر الانتظار'},{v:'+61%',lEn:'Education Retention',lAr:'استيعاب التثقيف'},{v:'99.1%',lEn:'Wayfinding Accuracy',lAr:'دقة الإرشاد'}] },
  { id:4, titleEn:'Vision 2030 Innovation Pavilion', titleAr:'جناح الابتكار لرؤية ٢٠٣٠', catEn:'Exhibition', catAr:'معارض', industryEn:'Government', industryAr:'حكومي', locationEn:'Riyadh, Saudi Arabia', locationAr:'الرياض، المملكة العربية السعودية', color:'from-emerald-900 to-teal-600', problemEn:'A government innovation department needed a flagship pavilion to demonstrate Saudi Arabia\'s technological progress to international investors and media.', problemAr:'احتاجت وزارة الابتكار إلى جناح رائد يُظهر التقدم التكنولوجي للمملكة للمستثمرين الدوليين ووسائل الإعلام.', solutionEn:'An 800m² immersive experience center with interactive timelines, AI-powered information kiosks, holographic demonstrations, and a real-time national KPI dashboard.', solutionAr:'مركز تجربة غامر بمساحة ٨٠٠م² مع خطوط زمنية تفاعلية وأكشاك معلومات ذكية وعروض هولوغرافية ولوحة KPI وطنية في الوقت الفعلي.', tech:['Holographic Displays','AI Kiosks','Data Visualization','Interactive Walls'], results:[{v:'200+',lEn:'VIP Delegates',lAr:'وفد VIP'},{v:'8',lEn:'Experience Zones',lAr:'منطقة تجربة'},{v:'4K',lEn:'Display Resolution',lAr:'دقة العرض'},{v:'800m²',lEn:'Pavilion Size',lAr:'مساحة الجناح'}] },
  { id:5, titleEn:'Corporate HQ AI Experience Center', titleAr:'مركز تجربة ذكاء اصطناعي للمقر الرئيسي', catEn:'AI Systems', catAr:'أنظمة ذكاء اصطناعي', industryEn:'Enterprise', industryAr:'مؤسسي', locationEn:'Riyadh, Saudi Arabia', locationAr:'الرياض، المملكة العربية السعودية', color:'from-indigo-900 to-teal-700', problemEn:'A leading enterprise needed a flagship AI demonstration environment to showcase their transformation initiatives to clients, partners, and the board.', problemAr:'احتاجت شركة رائدة إلى بيئة عرض ذكاء اصطناعي رئيسية لإظهار مبادرات التحول للعملاء والشركاء ومجلس الإدارة.', solutionEn:'We built a 600m² AI experience center featuring an intelligent interactive wall, AI demo stations, voice-activated knowledge assistant, and a live enterprise operations dashboard.', solutionAr:'بنينا مركز تجربة ذكاء اصطناعي بمساحة ٦٠٠م² يضم جداراً تفاعلياً ذكياً ومحطات عرض ذكاء اصطناعي ومساعد معرفة صوتي ولوحة عمليات مؤسسية مباشرة.', tech:['Interactive Wall','Voice AI','Enterprise Dashboard','Ambient Intelligence'], results:[{v:'600m²',lEn:'Experience Space',lAr:'فضاء التجربة'},{v:'5',lEn:'AI Demo Stations',lAr:'محطة عرض ذكاء'},{v:'24/7',lEn:'Operational',lAr:'تشغيل مستمر'},{v:'100%',lEn:'Board Approval',lAr:'موافقة المجلس'}] },
  { id:6, titleEn:'Healthcare Group — Medical Exhibition', titleAr:'مجموعة طبية — معرض طبي', catEn:'Healthcare', catAr:'رعاية صحية', industryEn:'Healthcare', industryAr:'رعاية صحية', locationEn:'Jeddah, Saudi Arabia', locationAr:'جدة، المملكة العربية السعودية', color:'from-cyan-900 to-blue-700', problemEn:'A national healthcare group needed an annual conference presence that communicated medical innovation while remaining accessible and engaging to a broad professional audience.', problemAr:'احتاجت مجموعة رعاية صحية وطنية إلى حضور مؤتمري سنوي يوصل الابتكار الطبي بطريقة شاملة وجذابة.', solutionEn:'An award-winning medical exhibition booth with 3D procedure animations, AI consultation demos, interactive case study displays, and a premium branded spatial environment.', solutionAr:'جناح معرض طبي حائز على جوائز مع رسوم متحركة ثلاثية الأبعاد وعروض استشارة ذكية وشاشات دراسة حالة تفاعلية وبيئة مكانية فاخرة.', tech:['3D Medical Animation','AI Consultation Demo','Interactive Displays','Spatial Branding'], results:[{v:'1,200+',lEn:'Booth Visitors',lAr:'زوار الجناح'},{v:'3rd',lEn:'Best Exhibition Award',lAr:'جائزة أفضل معرض'},{v:'+40%',lEn:'Leads vs Prior Year',lAr:'عملاء محتملون'},{v:'96%',lEn:'Visitor Rating',lAr:'تقييم الزوار'}] },
]

function ProjectCard({ project, lang, onClick }: { project: typeof projectsData[0]; lang: string; onClick: () => void }) {
  const title = lang === 'ar' ? project.titleAr : project.titleEn
  const cat = lang === 'ar' ? project.catAr : project.catEn
  const industry = lang === 'ar' ? project.industryAr : project.industryEn
  const location = lang === 'ar' ? project.locationAr : project.locationEn
  return (
    <div className="premium-card overflow-hidden cursor-pointer group" onClick={onClick}>
      <div className={`h-56 bg-gradient-to-br ${project.color} relative flex items-end p-6`}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 60%)' }}></div>
        <div>
          <div className="flex gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">{cat}</span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80 backdrop-blur-sm">{industry}</span>
          </div>
          <h3 className="text-white font-bold text-lg leading-snug">{title}</h3>
          <div className="text-white/60 text-xs mt-1">{location}</div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-2">{lang==='ar'?project.problemAr:project.problemEn}</p>
        <div className="grid grid-cols-2 gap-3 mb-5">
          {project.results.slice(0,2).map((r) => (
            <div key={r.v} className="rounded-xl p-3" style={{ background: 'var(--gray-warm)' }}>
              <div className="font-bold text-lg" style={{ color: 'var(--teal-deep)' }}>{r.v}</div>
              <div className="text-xs text-gray-500">{lang==='ar'?r.lAr:r.lEn}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: 'var(--teal-deep)' }}>
          {lang==='ar'?'اطّلع على دراسة الحالة':'View Case Study'}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7H11M7 3L11 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </div>
      </div>
    </div>
  )
}

function CaseStudyModal({ project, lang, onClose }: { project: typeof projectsData[0]; lang: string; onClose: () => void }) {
  const title = lang === 'ar' ? project.titleAr : project.titleEn
  const location = lang === 'ar' ? project.locationAr : project.locationEn
  const cat = lang === 'ar' ? project.catAr : project.catEn
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className={`h-72 bg-gradient-to-br ${project.color} relative p-8 flex flex-col justify-end rounded-t-3xl`}>
          <div className="absolute inset-0 opacity-20 rounded-t-3xl" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5) 0%, transparent 60%)' }}></div>
          <button onClick={onClose} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
          <div className="flex gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">{cat}</span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80">{location}</span>
          </div>
          <h2 className="text-white font-bold text-2xl leading-snug">{title}</h2>
        </div>
        <div className="p-8">
          {[
            { label: lang==='ar'?'التحدي':'The Challenge', content: lang==='ar'?project.problemAr:project.problemEn },
            { label: lang==='ar'?'الحل':'Our Solution', content: lang==='ar'?project.solutionAr:project.solutionEn },
          ].map((s) => (
            <div key={s.label} className="mb-7">
              <div className="flex items-center gap-3 mb-3"><div className="teal-divider"></div><h4 className="font-semibold text-gray-900">{s.label}</h4></div>
              <p className="text-gray-600 leading-relaxed">{s.content}</p>
            </div>
          ))}
          <div className="mb-7">
            <div className="flex items-center gap-3 mb-3"><div className="teal-divider"></div><h4 className="font-semibold text-gray-900">{lang==='ar'?'التقنيات المستخدمة':'Technologies Used'}</h4></div>
            <div className="flex flex-wrap gap-2">{project.tech.map((t) => (<span key={t} className="tag">{t}</span>))}</div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4"><div className="teal-divider"></div><h4 className="font-semibold text-gray-900">{lang==='ar'?'النتائج والأثر':'Results & Impact'}</h4></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.results.map((r) => (
                <div key={r.v} className="premium-card p-5 text-center">
                  <div className="stat-number gradient-text text-3xl mb-1">{r.v}</div>
                  <div className="text-xs text-gray-500">{lang==='ar'?r.lAr:r.lEn}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center">
            <Link to="/contact" onClick={onClose} className="btn-primary">{lang==='ar'?'ابدأ مشروعاً مماثلاً':'Start a Similar Project'}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const { lang } = useLang()
  const categories = tx(t.port.filterCats, lang) as unknown as string[]
  const [filter, setFilter] = useState(categories[0])
  const [selected, setSelected] = useState<typeof projectsData[0] | null>(null)

  const catMap: Record<string,string> = { 'Exhibition':'معارض','Real Estate':'عقارات','Healthcare':'رعاية صحية','AI Systems':'أنظمة ذكاء اصطناعي' }
  const filtered = (filter === categories[0])
    ? projectsData
    : projectsData.filter((p) => (lang==='ar' ? p.catAr : p.catEn) === filter || (lang==='en' && catMap[p.catEn] === filter))

  return (
    <div className="bg-white">
      <section className="pt-44 pb-16" style={{ background: 'var(--gray-warm)' }}>
        <div className="container-xl text-center">
          <div className="tag mb-5">{tx(t.port.tag, lang)}</div>
          <h1 className="hero-title text-gray-900 mb-5">{tx(t.port.title1, lang)} <span className="gradient-text">{tx(t.port.title2, lang)}</span></h1>
          <p className="subtitle text-gray-500 max-w-2xl mx-auto">{tx(t.port.sub, lang)}</p>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {categories.map((c: string) => (
              <button key={c} onClick={() => setFilter(c)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${filter===c ? 'bg-teal-gradient text-white shadow-lg' : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-mid hover:text-teal'}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} lang={lang} onClick={() => setSelected(project)} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-teal-gradient">
        <div className="container-xl text-center">
          <h2 className="section-title text-white mb-5">{tx(t.port.ctaTitle, lang)}</h2>
          <p className="subtitle text-white/75 max-w-xl mx-auto mb-8">{tx(t.port.ctaSub, lang)}</p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-white rounded-full font-semibold text-sm hover:shadow-xl hover:-translate-y-1 transition-all" style={{ color: 'var(--teal-deep)' }}>{tx(t.port.ctaBtn, lang)}</Link>
        </div>
      </section>

      {selected && <CaseStudyModal project={selected} lang={lang} onClose={() => setSelected(null)} />}
    </div>
  )
}
