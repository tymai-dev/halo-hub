import RoleToggle from "@/components/RoleToggle";
import EmailCapture from "@/components/EmailCapture";

const features = [
  {
    title: "Dignity-first requests",
    description:
      "Reflective prompts help families articulate what returns hours to their week — without having to plead in public.",
    icon: (
      <svg viewBox="0 0 32 32" className="h-9 w-9 text-cloud/80" aria-hidden="true">
        <path
          d="M9 11.5c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5c0 1.8-.73 3.43-1.91 4.61-1.18 1.18-1.91 2.81-1.91 4.61"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M16 25.5v.01"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Fair, open allocation",
    description:
      "The HALO Engine pools donations and applies human-readable reason codes so you can see why every decision was made.",
    icon: (
      <svg viewBox="0 0 32 32" className="h-9 w-9 text-cloud/80" aria-hidden="true">
        <path
          d="M8.5 22.5h15M8.5 16h15M8.5 9.5h15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 12.5c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Safety with real receipts",
    description:
      "Helpers earn trust through progressive verification, service proofs, and shared safety oversight.",
    icon: (
      <svg viewBox="0 0 32 32" className="h-9 w-9 text-cloud/80" aria-hidden="true">
        <path
          d="M16 5.5 7 10v6c0 6.22 4.07 11.89 9 13.5 4.93-1.61 9-7.28 9-13.5v-6l-9-4.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="m12.75 16.25 2.25 2.25 4.25-4.25"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const receipts = [
  "Open algorithms with human-readable reason codes",
  "Append-only impact ledger with privacy by design",
  "Community Safety Council and published incident log",
  "Progressive verification with anti-gaming audits",
  "Profit caps and reinvestment mandate",
  "External reviews and quarterly transparency notes",
];

export default function Home() {
  return (
    <>
      <section className="section relative overflow-hidden">
        <div className="container-page">
          <div className="card-surface relative isolate overflow-hidden">
            <div className="halo-orb" aria-hidden="true" />
            <div className="relative flex flex-col gap-10">
              <div className="max-w-2xl space-y-6">
                <h1 className="text-balance text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.05] tracking-tight">
                  Give families back their time.
                </h1>
                <p className="text-lg text-cloud/80 md:text-xl">
                  HaloHub is the trust network where people and ethical AI direct money, time, and skills to what helps most —
                  openly and safely. One account can give and receive. Switch perspectives any time.
                </p>
              </div>
              <div className="space-y-4">
                <div id="waitlist">
                  <EmailCapture />
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-cloud/70">
                  <a className="link-inline" href="/trust-safety">
                    Explore our Trust &amp; Safety commitments
                  </a>
                  <span className="text-cloud/40">or</span>
                  <a className="link-inline text-cloud/70" href="/transparency">
                    Read the transparency log
                  </a>
                </div>
                <p className="text-sm text-cloud/50">
                  We send minimal, privacy-respecting email. Opt out anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="surface-panel h-full">
                <div className="flex flex-col gap-6">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                    {feature.icon}
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold tracking-tight text-cloud">
                      {feature.title}
                    </h3>
                    <p className="text-base leading-relaxed text-cloud/75">{feature.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <RoleToggle />
      </section>

      <section className="section pt-0">
        <div className="container-page space-y-10">
          <div className="flex flex-wrap items-center gap-4">
            <h2 className="text-3xl font-semibold tracking-tight text-cloud">Trust, safety, and receipts for impact</h2>
            <span className="badge">Reason codes = receipts for impact</span>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {receipts.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 text-base text-cloud/80"
              >
                <span
                  className="mt-1 inline-flex h-3 w-3 flex-none items-center justify-center rounded-full border border-halo/60 bg-halo/40 shadow-[0_0_12px_rgba(245,158,11,0.6)]"
                  aria-hidden="true"
                />
                <p className="leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a className="btn" href="/trust-safety">
              Trust &amp; Safety
            </a>
            <a className="btn" href="/transparency">
              Transparency Log
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
