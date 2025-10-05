"use client";
import { useState } from "react";

type Role = "family" | "donor" | "helper";

function label(r: Role) { return r.charAt(0).toUpperCase() + r.slice(1); }

export default function RoleToggle() {
  const [role, setRole] = useState<Role>("family");
  return (
    <section className="container-narrow mt-10">
      <div className="card">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-lg font-semibold">One account. Switch perspectives.</h2>
          <div className="inline-flex rounded-xl bg-white/10 p-1 border border-white/15">
            {(["family","donor","helper"] as Role[]).map((r) => (
              <button key={r} onClick={() => setRole(r)}
                className={`px-3 py-1.5 text-sm rounded-lg transition ${role===r?"bg-white text-ink":"text-white/80 hover:text-white"}`}
                aria-pressed={role===r}>{label(r)}</button>
            ))}
          </div>
        </div>
        {role === "family" && (
          <div className="space-y-3 text-white/90">
            <p><strong>Dignity-first prompts</strong> surface what truly gives you time back. You approve requests before anything moves.</p>
            <ul className="list-disc pl-5 space-y-1 text-white/80">
              <li>“If dinner were covered tonight, how much time would you gain?”</li>
              <li>“What recurring task steals your week?”</li>
              <li>“What could spark your child’s curiosity off-screen?”</li>
            </ul>
          </div>
        )}
        {role === "donor" && (
          <div className="space-y-3 text-white/90">
            <p>Fund the <strong>mission</strong>. The HALO Engine allocates fairly with public reason codes.</p>
            <ul className="list-disc pl-5 space-y-1 text-white/80">
              <li>See <em>hours reclaimed</em> and <em>projects built</em> — not identities.</li>
              <li>Open, auditable ledger with anonymized recipients.</li>
              <li>Profit caps & reinvestment; mission-locked governance.</li>
            </ul>
          </div>
        )}
        {role === "helper" && (
          <div className="space-y-3 text-white/90">
            <p>Offer skills or time (bike repair, tutoring, gardening). You’ll be matched safely and fairly; ratings build your HALO reputation.</p>
            <ul className="list-disc pl-5 space-y-1 text-white/80">
              <li>Progressive verification for trust.</li>
              <li>Proof-of-service + random audits; no exploitation.</li>
              <li>Earn non-speculative HALO credits for impact.</li>
            </ul>
          </div>
        )}
        <p className="mt-6 text-white/70 text-sm">Change what helps you today — and help someone else tomorrow. That’s the HALO loop.</p>
      </div>
    </section>
  );
}
