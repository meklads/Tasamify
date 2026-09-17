import tasamiLogo from '../assets/tasami-logo.png'

type TasamiLogoProps = {
  variant?: 'navbar' | 'footer' | 'hero'
  isAr?: boolean
  className?: string
}

export default function TasamiLogo({
  variant = 'navbar',
  isAr = false,
  className = '',
}: TasamiLogoProps) {
  return (
    <img
      src={tasamiLogo}
      alt={isAr ? 'مجموعة تسامي' : 'Tasami Group'}
      className={`tasami-logo tasami-logo--${variant} ${className}`.trim()}
      decoding="async"
    />
  )
}
