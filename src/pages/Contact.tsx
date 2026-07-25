import { useState } from 'react'
import { useLang } from '../lib/LanguageContext'
import { t, tx } from '../lib/translations'

function InfoCard({ icon, label, value, sub }: { icon: React.ReactNode; label: string; value: string; sub?: string }) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-2xl" style={{ background: 'white', border: '1px solid var(--gray-soft)' }}>
      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--teal-pale)' }}>
        {icon}
      </div>
      <div>
        <div className="text-xs text-gray-400 mb-0.5">{label}</div>
        <div className="font-semibold text-gray-900 text-sm">{value}</div>
        {sub && <div className="text-xs text-gray-400 mt-0.5">{sub}</div>}
      </div>
    </div>
  )
}

export default function Contact() {
  const { lang, isAr } = useLang()
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const serviceOptions = (t.contact.services[lang] as string[])

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-44 pb-20" style={{ background: 'linear-gradient(135deg, #f4fbfc 0%, #e8f7f9 50%, #f7f9fc 100%)' }}>
        <div className="container-xl text-center">
          <div className="tag mb-5">{tx(t.contact.tag, lang)}</div>
          <h1 className="hero-title text-gray-900 mb-6 max-w-3xl mx-auto">
            {tx(t.contact.title1, lang)} <span className="gradient-text">{tx(t.contact.title2, lang)}</span>
          </h1>
          <p className="subtitle text-gray-500 max-w-xl mx-auto">
            {tx(t.contact.sub, lang)}
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">

            {/* Left: info */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <h2 className="section-title text-gray-900 mb-3">
                  {tx(t.contact.infoTitle, lang)}
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  {tx(t.contact.infoDesc, lang)}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <InfoCard
                  icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2C7.24 2 5 4.24 5 7c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5Zm0 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="var(--teal-deep)"/></svg>}
                  label={tx(t.contact.locLabel, lang)}
                  value={tx(t.contact.locVal, lang)}
                  sub={isAr ? 'نخدم منطقة الخليج بالكامل' : 'Serving across the GCC region'}
                />
                <InfoCard
                  icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2.5 5.5A1.5 1.5 0 0 1 4 4h12a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 16 16H4a1.5 1.5 0 0 1-1.5-1.5v-9Zm1.5 0v.8l6 3.6 6-3.6V5.5H4Zm0 2.2v6.8h12V7.7l-6 3.6-6-3.6Z" fill="var(--teal-deep)"/></svg>}
                  label={tx(t.contact.emailLabel, lang)}
                  value="info@tasamify.com"
                  sub={isAr ? 'نرد خلال ٢٤ ساعة' : 'We reply within 24 hours'}
                />
                <InfoCard
                  icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6.6 2.3A1 1 0 0 0 5.5 2H3a1 1 0 0 0-1 1.1C2.5 11.8 8.2 17.5 16.9 18a1 1 0 0 0 1.1-1v-2.5a1 1 0 0 0-.8-1l-2.5-.5a1 1 0 0 0-1 .4l-1 1.3a12.1 12.1 0 0 1-5.4-5.4l1.3-1a1 1 0 0 0 .4-1l-.5-2.5a1 1 0 0 0-.9-.8Z" fill="var(--teal-deep)"/></svg>}
                  label={tx(t.contact.phoneLabel, lang)}
                  value="+966 11 XXX XXXX"
                  sub={isAr ? 'الأحد – الخميس، ٩ص – ٦م' : 'Sun – Thu, 9 AM – 6 PM'}
                />
              </div>

              {/* What happens next */}
              <div className="premium-card p-6 mt-2">
                <h4 className="font-semibold text-gray-900 mb-4">{tx(t.contact.nextTitle, lang)}</h4>
                <div className="space-y-3">
                  {[
                    tx(t.contact.next1, lang),
                    tx(t.contact.next2, lang),
                    tx(t.contact.next3, lang),
                    tx(t.contact.next4, lang),
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold" style={{ background: 'var(--teal-pale)', color: 'var(--teal-deep)' }}>
                        {i + 1}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="premium-card p-12 text-center h-full flex flex-col items-center justify-center gap-5">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'var(--teal-pale)' }}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M8 16l6 6 10-12" stroke="var(--teal-deep)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{tx(t.contact.successTitle, lang)}</h3>
                  <p className="text-gray-500 max-w-sm">{tx(t.contact.successDesc, lang)}</p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', company: '', phone: '', service: '', message: '' }) }}
                    className="btn-outline mt-2"
                  >
                    {tx(t.contact.sendAnother, lang)}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="premium-card p-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">{tx(t.contact.fName, lang)} *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                        style={{ borderColor: 'var(--gray-soft)', fontFamily: 'inherit' }}
                        placeholder={tx(t.contact.fNameP, lang)}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">{tx(t.contact.fEmail, lang)} *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                        style={{ borderColor: 'var(--gray-soft)', fontFamily: 'inherit' }}
                        placeholder={tx(t.contact.fEmailP, lang)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">{tx(t.contact.fCompany, lang)}</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={e => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                        style={{ borderColor: 'var(--gray-soft)', fontFamily: 'inherit' }}
                        placeholder={tx(t.contact.fCompanyP, lang)}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">{tx(t.contact.fPhone, lang)}</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                        style={{ borderColor: 'var(--gray-soft)', fontFamily: 'inherit', direction: 'ltr' }}
                        placeholder={tx(t.contact.fPhoneP, lang)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">{tx(t.contact.fService, lang)}</label>
                    <select
                      value={form.service}
                      onChange={e => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all bg-white"
                      style={{ borderColor: 'var(--gray-soft)', fontFamily: 'inherit' }}
                    >
                      <option value="">{tx(t.contact.fServiceP, lang)}</option>
                      {serviceOptions.map((s: string) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">{tx(t.contact.fMsg, lang)} *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all resize-none"
                      style={{ borderColor: 'var(--gray-soft)', fontFamily: 'inherit' }}
                      placeholder={tx(t.contact.fMsgP, lang)}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
                    {tx(t.contact.submitBtn, lang)}
                  </button>

                  <p className="text-xs text-center text-gray-400">{tx(t.contact.privacy, lang)}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
