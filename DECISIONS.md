# Decisions & Assumptions

## Discovery (5 lines)

1. Current app: Vite 5.4 + React 19 + React Router 7 + TypeScript (not Next.js).
2. Styling: Tailwind CSS 3.4.1 + custom CSS in `src/index.css`.
3. Hosting path: Nixpacks build → static `dist/` served by nginx SPA on Coolify.
4. Existing content: Tasami Group umbrella + Graphics House / Bees Motion / Turriva.
5. Decision: keep Vite sources; ship new Next.js 15 App Router app in `site/` and point deploy scripts there.

## Product assumptions

- Default locale is **Arabic (`/ar`)**; English is `/en`. Bare `/` redirects to `/ar`.
- “Tasami AI” is a **fourth commercial arm** under Tasami Group, not a separate legal entity page yet.
- Primary CTA: free diagnosis booking; secondary: WhatsApp from `src/config/business.ts`.
- Case-study metrics are placeholders `[أدخل الرقم الحقيقي]` until real numbers are supplied (tracked in `TODO.md`).
- PDPL trust copy needs legal review (TODO).
- Contact email delivery uses **Resend**; without `RESEND_API_KEY` the API validates and returns success in a “accepted / queued locally” mode for local dev.
- Rate limit for diagnosis API is **in-memory per process** (fine for single-instance Coolify; swap to Redis later if multi-instance).
- Insights are MDX files under `site/content/insights/*.mdx`.
- Design tokens follow the brief literally (Petrol / Mist / Ink / Slate / Amber / Line). No cream/terracotta or neon dark themes.
- Fonts: Readex Pro (headings) + IBM Plex Sans Arabic (body) via `next/font/google`.
- WhatsApp number placeholder: set in `business.ts` as `+966500000000` until the real number is confirmed.
- Diagnosis pricing “from” values are editorial starting prices in SAR, editable in `business.ts`.
- Keep company links to live sites; Turriva points to `https://www.turriva.com/en` (working entry).

## Deploy assumption

Root `package.json` / `nixpacks.toml` will build and start from `site/` so Coolify serves the Next.js app without removing the old Vite sources.
