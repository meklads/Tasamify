import Image from "next/image";

export function TasamiLogo({
  variant = "navbar",
  alt,
  priority = false,
}: {
  variant?: "navbar" | "footer" | "hero";
  alt: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/tasami-logo.png"
      alt={alt}
      width={variant === "hero" ? 520 : 180}
      height={variant === "hero" ? 92 : 32}
      className={`tasami-logo tasami-logo--${variant}`}
      priority={priority}
    />
  );
}
