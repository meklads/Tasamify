/** Tasami mark: a quiet canopy over three posts (the umbrella identity). */
export default function TasamiMark({
  size = 40,
  className = '',
  gold = '#C9A24B',
}: {
  size?: number
  className?: string
  gold?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M10 28C10 28 20 12 32 12C44 12 54 28 54 28"
        stroke={gold}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path d="M18 28V50" stroke={gold} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M32 28V46" stroke={gold} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M46 28V50" stroke={gold} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="18" cy="50" r="1.6" fill={gold} />
      <circle cx="32" cy="46" r="1.6" fill={gold} />
      <circle cx="46" cy="50" r="1.6" fill={gold} />
    </svg>
  )
}
