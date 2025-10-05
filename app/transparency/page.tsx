export const dynamic = "force-static";

export default function Transparency() {
  return (
    <section className="section">
      <div className="container-page max-w-3xl space-y-12">
        <header className="space-y-3">
          <p className="text-sm text-cloud/50">Log opened October 5, 2025</p>
          <h1 className="text-4xl font-semibold tracking-tight text-cloud">Transparency Log</h1>
          <p className="text-lg leading-relaxed text-cloud/75">
            We record incidents, fixes, and algorithm updates with redactions only when needed for privacy. Every entry includes
            a reason code so anyone can trace impact.
          </p>
        </header>
        <article className="space-y-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 text-base leading-relaxed text-cloud/80 shadow-[0_25px_60px_-40px_rgba(15,23,42,0.8)]">
          <header className="flex flex-wrap items-center gap-3 text-sm text-cloud/60">
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">2025-10-05</span>
            <span>Policy</span>
          </header>
          <h2 className="text-2xl font-semibold tracking-tight text-cloud">Launched public log and governance stubs</h2>
          <p>
            We’ll expand this ledger with impact summaries, algorithm changes, and safety council decisions. Each update ships
            with rationale, mitigation steps, and how we measured follow-up.
          </p>
        </article>
      </div>
    </section>
  );
}
