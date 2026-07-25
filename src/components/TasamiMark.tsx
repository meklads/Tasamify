/** Tasami icon mark — circuit nodes converging to cyan glow */
export default function TasamiMark({
  size = 48,
  className = '',
}: {
  size?: number
  className?: string
}) {
  const id = `tasami-glow-${size}`
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 105 115"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      aria-hidden
    >
      <defs>
        <radialGradient id={id} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#00b8ee" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#00b8ee" stopOpacity="0" />
        </radialGradient>
      </defs>

      <path d="M 10 16 C 10 60 55 65 55 95" stroke="#1a5acc" strokeWidth="1.15" strokeLinecap="round" opacity="0.75" />
      <path d="M 25 16 C 25 58 55 65 55 95" stroke="#1a68d4" strokeWidth="1.15" strokeLinecap="round" opacity="0.80" />
      <path d="M 40 16 C 40 56 55 65 55 95" stroke="#1a88e0" strokeWidth="1.20" strokeLinecap="round" opacity="0.85" />
      <path d="M 55 16 C 55 55 55 65 55 95" stroke="#00a8dc" strokeWidth="1.25" strokeLinecap="round" opacity="0.90" />
      <path d="M 18 32 C 18 62 55 68 55 95" stroke="#1a5acc" strokeWidth="1.10" strokeLinecap="round" opacity="0.70" />
      <path d="M 33 32 C 33 61 55 68 55 95" stroke="#1a78d8" strokeWidth="1.10" strokeLinecap="round" opacity="0.78" />
      <path d="M 48 32 C 48 60 55 68 55 95" stroke="#00b0e4" strokeWidth="1.15" strokeLinecap="round" opacity="0.85" />

      <line x1="10" y1="16" x2="25" y2="16" stroke="#1a3888" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="25" y1="16" x2="40" y2="16" stroke="#1a5aaa" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="40" y1="16" x2="55" y2="16" stroke="#1a78c4" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="18" y1="32" x2="33" y2="32" stroke="#1a4898" strokeWidth="1.25" strokeLinecap="round" />
      <line x1="33" y1="32" x2="48" y2="32" stroke="#1a68b8" strokeWidth="1.25" strokeLinecap="round" />
      <line x1="10" y1="16" x2="18" y2="32" stroke="#1a3070" strokeWidth="1.05" strokeLinecap="round" opacity="0.65" />
      <line x1="25" y1="16" x2="18" y2="32" stroke="#1a3878" strokeWidth="1.05" strokeLinecap="round" opacity="0.60" />
      <line x1="25" y1="16" x2="33" y2="32" stroke="#1a5098" strokeWidth="1.05" strokeLinecap="round" opacity="0.60" />

      <circle cx="55" cy="95" r="18" fill={`url(#${id})`} />
      <circle cx="55" cy="95" r="10" fill="#00c0f0" opacity="0.18" />
      <circle cx="10" cy="16" r="5.0" fill="#111e5a" />
      <circle cx="25" cy="16" r="4.5" fill="#1a3480" />
      <circle cx="40" cy="16" r="4.0" fill="#1a58a8" />
      <circle cx="55" cy="16" r="3.5" fill="#1a78c8" />
      <circle cx="18" cy="32" r="4.0" fill="#152870" />
      <circle cx="33" cy="32" r="3.5" fill="#1a4898" />
      <circle cx="48" cy="32" r="3.0" fill="#1a68b8" />
      <circle cx="55" cy="95" r="7.5" fill="#00a8e0" />
      <circle cx="55" cy="95" r="5.0" fill="#00c8f8" />
      <circle cx="55" cy="95" r="2.5" fill="white" opacity="0.90" />
    </svg>
  )
}
