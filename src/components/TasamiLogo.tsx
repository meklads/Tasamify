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
  const markSize = compact ? 22 : 26

  return (
    <div
      className={`inline-flex items-center gap-2.5 select-none ${className}`}
      aria-label={isAr ? 'مجموعة تسامي' : 'Tasami Group'}
    >
      <TasamiMark size={markSize} className="flex-shrink-0" />
      <span
        className={`font-display leading-none whitespace-nowrap ${compact ? 'text-[1.15rem]' : 'text-[1.05rem] sm:text-[1.2rem] md:text-[1.35rem]'}`}
        style={{
          color: '#F6F3EC',
          fontWeight: isAr ? 700 : 500,
          letterSpacing: isAr ? 0 : '-0.02em',
        }}
      >
        {isAr ? 'مجموعة تسامي' : 'Tasami Group'}
      </span>
    </div>
  )
}
