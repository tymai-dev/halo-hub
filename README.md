# HaloHub — Minimal Landing (Next.js + Tailwind)

Single-account model: any user can receive help, donate money, or offer skills. The landing page communicates the model and captures early access signups.

## Quickstart

```bash
pnpm i   # or npm i / yarn
pnpm dev # or npm run dev
```

## Deploy (Vercel)

1. Create a new project and import this repo.
2. Add **Environment Variables** (optional for emails/database):
   - `RESEND_API_KEY` = your API key (optional, enables transactional emails)
   - `ADMIN_EMAIL` = hello@halohub.com (or your admin inbox)
   - `SUPABASE_URL` = project URL (e.g., `https://xyzcompany.supabase.co`)
   - `SUPABASE_SERVICE_ROLE_KEY` = service role key used for server-side inserts
3. Deploy. If `RESEND_API_KEY` is not set, the waitlist form still works (no-op server email).

### Optional: Capture signups in Supabase

1. In your Supabase project, create a `signups` table:

   ```sql
   create table if not exists public.signups (
     id uuid primary key default gen_random_uuid(),
     email text not null,
     role text not null,
     source text,
     created_at timestamptz not null default now()
   );
   ```

2. Keep Row Level Security enabled and add a policy that allows inserts from the service role key (default behaviour).
3. Add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` to your Vercel project (or use an anon key if your policies allow it).
4. Submissions to `/api/subscribe` will be inserted into the `signups` table alongside email delivery via Resend (if configured).

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
