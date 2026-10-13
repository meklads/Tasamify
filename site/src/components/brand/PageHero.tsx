import type { ReactNode } from "react";

export function PageHero({
  kicker,
  title,
  lede,
  children,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="container-page">
        {kicker ? <p className="hero-kicker">{kicker}</p> : null}
        <h1 className="page-hero-title">{title}</h1>
        {lede ? <p className="page-hero-lede">{lede}</p> : null}
        {children}
      </div>
    </section>
  );
}
