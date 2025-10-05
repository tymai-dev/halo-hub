export const dynamic = "force-static";

export default function TrustSafety() {
  return (
    <section className="section">
      <div className="container-page max-w-3xl space-y-12">
        <header className="space-y-3">
          <p className="text-sm text-cloud/50">Updated October 5, 2025</p>
          <h1 className="text-4xl font-semibold tracking-tight text-cloud">Trust &amp; Safety</h1>
          <p className="text-lg leading-relaxed text-cloud/75">
            We bake safety, fairness, and transparency into HaloHub’s DNA. Policies stay concise, auditable, and accountable to
            the community.
          </p>
        </header>
        <article className="space-y-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 text-base leading-relaxed text-cloud/80 shadow-[0_25px_60px_-40px_rgba(15,23,42,0.8)]">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-cloud">Safety guardrails</h2>
            <p>
              The HALO Engine remains explainable by design. Every allocation publishes a reason code that humans can read and
              audit. Families review requests before anything is shared.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-cloud">Community oversight</h2>
            <p>
              We maintain a privacy-preserving public impact ledger and empower a Community Safety Council to review incidents,
              publish findings, and require remediation. Progressive verification prevents gaming.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-cloud">Mission lock</h2>
            <p>
              HaloHub operates with profit caps and reinvestment mandates so incentives stay aligned with the families we serve.
              Full policies will be published and versioned as we open the pilot.
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}
