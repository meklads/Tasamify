# Tasami Group site (Next.js)

Next.js App Router site for [tasamify.com](https://www.tasamify.com) with Tasami AI as the primary commercial arm.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- next-intl (`/ar` default, `/en`)
- Resend for diagnosis form email
- MDX/Markdown insights under `content/insights`

## Run locally

```bash
cd site
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (redirects to `/ar`).

## Environment

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | production | Send diagnosis emails |
| `RESEND_FROM` | optional | Verified Resend from-address |

Without `RESEND_API_KEY`, `/api/diagnosis` still validates and logs the payload (useful for local testing).

## Edit commercial values

Durations, WhatsApp number, budget options, and company links: `src/config/business.ts` (no public service prices)

All UI copy: `messages/ar.json` and `messages/en.json`

## Build

```bash
cd site
npm run build
npm run start
```

## Coolify

1. Build Pack: **Dockerfile** (root `Dockerfile`)
2. Ports Exposes: **3000**
3. Disable “Is it a static site?” (legacy Vite/nginx)
4. Env: `RESEND_API_KEY`, `RESEND_FROM` (optional locally)

## Notes

- The previous Vite SPA remains in the repo root for reference; production deploy builds from `site/`.
- Assumptions are recorded in `/DECISIONS.md`. Open metrics/legal items are in `/TODO.md`.
