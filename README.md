# HaloHub — Minimal Landing (Next.js + Tailwind)

Single-account model: any user can receive help, donate money, or offer skills. The landing page communicates the model and captures early access signups.

## Quickstart

```bash
pnpm i   # or npm i / yarn
pnpm dev # or npm run dev
```

## Deploy (Vercel)

1. Create a new project and import this repo.
2. Add **Environment Variables** (optional for emails):
   - `RESEND_API_KEY` = your API key (optional, enables transactional emails)
   - `ADMIN_EMAIL` = hello@halohub.com (or your admin inbox)
3. Deploy. If `RESEND_API_KEY` is not set, the waitlist form still works (no-op server email).

### Continuous deployment from `master`

Merges to `master` automatically build and deploy via GitHub Actions. Configure the following
repository secrets so the workflow can authenticate with Vercel:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Once the secrets are set, every push to `master` will run `npm run build`, create a production
bundle with `vercel build`, and deploy it with `vercel deploy --prod`, ensuring the live site is
updated immediately after PRs are merged.

## Project Structure

- `app/` — App Router pages and API route
- `components/` — Role switcher and email capture
- `public/` — favicon and OG image
- `app/api/subscribe/route.ts` — serverless handler (uses Resend if configured)

## Ethical defaults

- No cookies for analytics by default.
- Minimal data (email + role) collected on signup.
- Clear copy about safety, transparency, and pooled allocation.

---

© 2025 HaloHub. Mission-driven. Open by default.
