import TasamiMark from './TasamiMark'

type TasamiLogoProps = {
  /** Navbar uses larger wordmark; footer uses compact layout */
  variant?: 'navbar' | 'footer'
  isAr?: boolean
  className?: string
}

/**
 * Tasami wordmark — icon + typography (company name: Tasami / تسامي)
 */
export default function TasamiLogo({
  variant = 'navbar',
  isAr = false,
  className = '',
}: TasamiLogoProps) {
  const compact = variant === 'footer'
  const onDark = variant === 'footer'
  const markSize = compact ? 40 : 52

  const taglineEn = 'SMART EXPERIENCES'
  const taglineAr = 'تجارب ذكية'
  const nameClass = onDark ? 'text-white' : 'text-[#0c1a4a]'

  return (
    <div
      className={`inline-flex items-center gap-3 select-none ${className}`}
      aria-label={isAr ? 'تسامي' : 'Tasami'}
    >
      <TasamiMark size={markSize} className="flex-shrink-0" />

      <div className="flex flex-col justify-center leading-none">
        {isAr ? (
          <>
            <span
              className={`font-extrabold ${nameClass} ${compact ? 'text-xl' : 'text-2xl md:text-[1.65rem]'}`}
              style={{ fontFamily: "'Tajawal', sans-serif", letterSpacing: '-0.02em' }}
            >
              تسامي
            </span>
            <span
              className={`mt-1 font-medium ${onDark ? 'text-gray-400' : 'text-teal-mid'} ${compact ? 'text-[10px]' : 'text-xs'}`}
              style={{ fontFamily: "'Tajawal', sans-serif" }}
            >
              {taglineAr}
            </span>
          </>
        ) : (
          <>
            <span
              className={`font-extrabold tracking-tight ${nameClass} ${compact ? 'text-lg' : 'text-2xl md:text-[1.75rem]'}`}
              style={{ fontFamily: "'Manrope', sans-serif", letterSpacing: '-0.03em' }}
            >
              TAS
              <span
                className="inline-block align-baseline"
                style={{
                  fontWeight: 800,
                  marginLeft: '-0.06em',
                  marginRight: '-0.04em',
                }}
                aria-hidden
              >
                Λ
              </span>
              MI
            </span>
            <span
              className={`mt-1.5 font-semibold uppercase ${onDark ? 'text-teal-mid' : 'text-[#1a88e0]'} ${compact ? 'text-[9px] tracking-[0.14em]' : 'text-[10px] md:text-[11px] tracking-[0.22em]'}`}
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              {taglineEn}
            </span>
          </>
        )}
      </div>
    </div>
  )
}
