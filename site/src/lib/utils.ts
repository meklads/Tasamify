export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/** Numeric formatting for calculator estimates (not service pricing). */
export function formatEstimate(amount: number, locale: string): string {
  return new Intl.NumberFormat(locale === "ar" ? "ar-SA" : "en-US", {
    maximumFractionDigits: 0,
  }).format(amount);
}
