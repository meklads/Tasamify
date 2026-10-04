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
- WhatsApp SSOT in `business.ts`: `whatsappIntl` `966502786513`, display `+966 50 278 6513`, link `https://wa.me/966502786513`, JSON-LD `telephone` `+966502786513`. No hardcoded numbers in components.
- Predefined WhatsApp `?text=` messages live in `business.whatsappMessages` (general / service / calculator).
- **No public service prices.** Commercial decision: pricing only after free diagnosis; UI shows estimated duration only; no JSON-LD `offers` / `price` / `priceRange`.
- Optional diagnosis form field `budget` options and service durations editable in `business.ts`.
- Diagnosis email includes `Source page:` from submitted `pathname`.
- Keep company links to live sites; Turriva points to `https://www.turriva.com/en` (working entry).

## Deploy assumption

Root `package.json` / `nixpacks.toml` / `Dockerfile` build from `site/` so Coolify serves Next.js without removing old Vite sources.

- Coolify may still use Nixpacks. Root `npm install` alone installs zero app deps → root `postinstall` / build script installs `site/` with `--include=dev`.
- After Nixpacks build succeeds, Coolify must **not** wrap with `nginx:alpine` + `/app/dist` (that is Vite static mode). **Is it a static site? = OFF**, Port **3000**, clear custom Nginx config.
- Preferred: Build Pack = **Dockerfile**, Base Directory = `/` or `/site`.
- Next.js uses `output: "standalone"` for the Docker image path.
