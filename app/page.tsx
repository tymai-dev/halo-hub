import RoleToggle from "@/components/RoleToggle";
import EmailCapture from "@/components/EmailCapture";

export default function Home() {
  return (
    <>
      <section className="container-narrow pt-14 pb-6">
        <div className="card relative overflow-hidden">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-halo/20 to-coral/10 blur-3xl" aria-hidden="true"/>
          <div className="relative">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">Give families back their time.</h1>
            <p className="mt-4 text-white/80 text-lg max-w-2xl">
              HaloHub is a trust network where people and ethical AI direct money, time, and skills to what helps most — openly and safely.
              One account can give and receive. Switch perspectives any time.
            </p>
            <div id="waitlist" className="mt-4">
              <EmailCapture />
            </div>
            <p className="mt-2 text-xs text-white/60">We use minimal, privacy-respecting email. No spam. Opt out anytime.</p>
          </div>
        </div>
      </section>

      <section className="container-narrow grid sm:grid-cols-3 gap-4 mt-4">
        <div className="card">
          <h3 className="font-semibold">Dignity-first</h3>
          <p className="text-white/80 mt-2">Reflective prompts → well-formed requests you approve. No begging, no popularity contests.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">Fair & transparent</h3>
          <p className="text-white/80 mt-2">Donations are pooled and allocated by the HALO Engine with public reason codes and an open ledger.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">Safe skills</h3>
          <p className="text-white/80 mt-2">Helpers offer time or expertise with safeguards, ratings, and progressive verification.</p>
        </div>
      </section>

      <RoleToggle />

      <section className="container-narrow mt-10 mb-8">
        <div className="card">
          <h2 className="text-lg font-semibold">Trust, safety, and receipts for impact</h2>
          <ul className="list-disc pl-5 mt-3 text-white/80 space-y-1">
            <li>Open algorithms with human-readable reason codes.</li>
            <li>Append-only public impact ledger (anonymized recipients).</li>
            <li>Community Safety Council, incident log, and profit caps.</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a className="btn" href="/trust-safety">Trust & Safety</a>
            <a className="btn" href="/transparency">Transparency Log</a>
          </div>
        </div>
      </section>
    </>
  );
}
