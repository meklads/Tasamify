import type { ReactNode } from "react";
import { Cairo } from "next/font/google";
import "../globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
});


export const metadata = {
  title: "قيد التحديث | مجموعة تسامي",
  robots: { index: false, follow: false },
};

export default function ComingSoonLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={cairo.className}
      style={{ ["--font-display" as string]: "inherit", ["--font-body" as string]: "inherit" }}
    >
      <body className="antialiased" style={{ background: "#10182A", color: "#f6f3ec" }}>
        {children}
      </body>
    </html>
  );
}
