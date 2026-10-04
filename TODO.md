# TODO

## Numbers to replace (`[أدخل الرقم الحقيقي]`)

- Case study: Automated real-estate developer outreach — metric placeholder on `/ai` and `/ai/case-studies`
- Case study: DotForLife content automation — metric placeholder on `/ai` and `/ai/case-studies`
- Case study: Cinematic YouTube AI pipeline — metric placeholder on `/ai` and `/ai/case-studies`

## Legal / compliance

- Review PDPL privacy wording on `/ai` trust section and `/privacy` (marked in copy)

## Commercial config

- Confirm WhatsApp display formatting stays correct in `site/src/config/business.ts`
- Confirm diagnosis inbox email and Resend sender domain
- Confirm service duration ranges in `business.ts`

## Deploy

- In Coolify: Build Pack = **Dockerfile**, Port Exposes = **3000**, turn off “Is it a static site?”
- Set `RESEND_API_KEY` and `RESEND_FROM` in production env
- If keeping Nixpacks and pull fails on `ghcr.io/railwayapp/nixpacks`: `docker logout ghcr.io` on the VPS / refresh GitHub token
