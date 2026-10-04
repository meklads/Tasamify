# Tasamify / Tasami Group

Production site lives in **`site/`** (Next.js App Router).

The previous Vite SPA sources remain in the repo root for reference and are not deleted.

## Quick start

```bash
cd site
cp .env.example .env.local
npm install
npm run dev
```

From repo root:

```bash
npm run dev
npm run build
npm run start
```

## Coolify (required settings)

Next.js is a **Node server**, not a static Vite/`dist` site.

In **Configuration → General**:

| Setting | Value |
|---|---|
| Build Pack | `Nixpacks` or `Dockerfile` |
| Is it a static site? | **OFF** (critical) |
| Ports Exposes | `3000` |
| Base Directory | `/` |
| Install Command | `npm install` (ok) |
| Build Command | `npm run build` (ok) |
| Start Command | `npm run start` |

If **Is it a static site?** is ON, Coolify wraps the build in `nginx:alpine`, copies `/app/dist`, and fails — that path is the old Vite SPA.

Also clear any **custom Nginx configuration** left from the Vite era.

## Docs

- `site/README.md` — runbook and env vars
- `DECISIONS.md` — assumptions
- `TODO.md` — real metrics + legal review items
