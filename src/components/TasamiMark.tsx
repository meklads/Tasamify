/** Tasami mark — a quiet canopy over four posts (the umbrella identity). */
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
        d="M8 28C8 28 18 12 32 12C46 12 56 28 56 28"
        stroke={gold}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path d="M16 28V50" stroke={gold} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M27 28V46" stroke={gold} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M37 28V46" stroke={gold} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M48 28V50" stroke={gold} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="50" r="1.6" fill={gold} />
      <circle cx="27" cy="46" r="1.6" fill={gold} />
      <circle cx="37" cy="46" r="1.6" fill={gold} />
      <circle cx="48" cy="50" r="1.6" fill={gold} />
    </svg>
  )
}
