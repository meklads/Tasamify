import TasamiMark from './TasamiMark'

type TasamiLogoProps = {
  variant?: 'navbar' | 'footer'
  isAr?: boolean
  className?: string
}

export default function TasamiLogo({
  variant = 'navbar',
  isAr = false,
  className = '',
}: TasamiLogoProps) {
  const compact = variant === 'footer'
  const markSize = compact ? 28 : 34

  return (
    <div
      className={`inline-flex items-center gap-2.5 select-none ${className}`}
      aria-label={isAr ? 'تسامي' : 'Tasami'}
    >
      <TasamiMark size={markSize} className="flex-shrink-0" />
      <span
        className={`font-display leading-none ${compact ? 'text-[1.35rem]' : 'text-[1.55rem] md:text-[1.7rem]'}`}
        style={{
          color: '#F6F3EC',
          fontWeight: isAr ? 700 : 500,
          letterSpacing: isAr ? 0 : '-0.02em',
        }}
      >
        {isAr ? 'تسامي' : 'Tasami'}
      </span>
    </div>
  )
}
