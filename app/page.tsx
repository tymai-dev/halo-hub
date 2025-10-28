"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";

import RoleToggle from "@/components/RoleToggle";

const features = [
  {
    title: "Dignity-first requests",
    description:
      "Reflective prompts help families articulate what returns hours to their week — without having to plead in public.",
    icon: "/icons/dignity.svg",
    accent: "from-rose-200/80 to-rose-500/20",
  },
  {
    title: "Fair, open allocation",
    description:
      "The HALO Engine pools donations and applies human-readable reason codes so you can see why every decision was made.",
    icon: "/icons/fair-allocation.svg",
    accent: "from-sky-200/80 to-sky-500/20",
  },
  {
    title: "Safety with real receipts",
    description:
      "Helpers earn trust through progressive verification, service proofs, and shared safety oversight.",
    icon: "/icons/safety-receipts.svg",
    accent: "from-emerald-200/80 to-emerald-500/20",
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

const demoStages = [
  {
    title: "Contribution logged",
    detail: "Your time drain is encrypted, tagged, and acknowledged — no names, just impact goals.",
  },
  {
    title: "Fair allocation",
    detail: "HALO Engine matches trusted helpers, budgets hours, and cites reason code RA-204 for transparency.",
  },
  {
    title: "Confirmation shared",
    detail: "A Safety Receipt verifies service completion and opens a thank-you loop for the community.",
  },
];

const trustBadges = ["Powered by Ethical AI", "Blockchain Verified", "Human Safety Council"];

const TOTAL_PIONEERS = 1000;

export default function Home() {
  const [signupCount, setSignupCount] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const [demoPrompt, setDemoPrompt] = useState("");
  const [receiptPrompt, setReceiptPrompt] = useState("");
  const [receiptVisible, setReceiptVisible] = useState(false);
  const [stageIndex, setStageIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setSignupCount(384);
    }, 500);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!receiptVisible) {
      return;
    }

    setStageIndex(0);
    const totalStages = demoStages.length;
    const interval = window.setInterval(() => {
      setStageIndex((current) => {
        if (current >= totalStages - 1) {
          window.clearInterval(interval);
          return current;
        }
        return current + 1;
      });
    }, 1600);

    return () => window.clearInterval(interval);
  }, [receiptVisible, animationKey]);

  const pioneersNumber = Math.min((signupCount ?? 0) + 1, TOTAL_PIONEERS);
  const spotsRemaining = Math.max(TOTAL_PIONEERS - (signupCount ?? 0), 0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) {
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Subscription failed");
      }

      setStatus("success");
      setStatusMessage("Thanks! You just moved us one pioneer closer to liftoff.");
      setEmail("");
      setSignupCount((count) => {
        const base = count ?? 384;
        return Math.min(base + 1, TOTAL_PIONEERS);
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    }
  }

  function handleDemoSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!demoPrompt.trim()) {
      return;
    }
    setReceiptPrompt(demoPrompt.trim());
    setReceiptVisible(true);
    setAnimationKey((value) => value + 1);
  }

  return (
    <>
      <section className="section pb-16 pt-20 md:pt-28">
        <div className="container-page relative">
          <div className="halo-orb" aria-hidden="true" />
          <div className="relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-8">
              <span className="badge">HALO Engine beta</span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 dark:text-cloud md:text-5xl">
                  Give families back their time with accountable kindness.
                </h1>
                <p className="text-lg leading-relaxed text-slate-600 dark:text-cloud/70 md:text-xl">
                  HaloHub is the trust network where people and ethical AI direct money, time, and skills to the next most helpful thing — openly and safely. One account can give and receive. Switch perspectives any time.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-cloud/60">
                <a className="link-inline" href="/trust-safety">
                  Explore our Trust &amp; Safety commitments
                </a>
                <span aria-hidden="true">•</span>
                <a className="link-inline" href="/transparency">
                  Read the transparency log
                </a>
              </div>
              <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-cloud/50">
                {trustBadges.map((badge) => (
                  <div
                    key={badge}
                    className="rounded-full border border-slate-200/70 px-4 py-2 dark:border-white/15"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>
            <div id="waitlist" className="mx-auto w-full max-w-md">
              <div className="card-surface space-y-6">
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-cloud">
                    Join the HALO beta waitlist
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-cloud/70">
                    Early pioneers help train fairness, safety, and joy into the network.
                  </p>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <label htmlFor="waitlist-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="waitlist-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full rounded-2xl border border-slate-200/70 bg-white/80 px-5 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-halo/70 dark:border-white/15 dark:bg-white/[0.08] dark:text-cloud dark:placeholder:text-cloud/50 dark:focus:border-white/30"
                    placeholder="you@email.com"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary w-full justify-center"
                    disabled={status === "loading"}
                  >
                    {status === "loading"
                      ? "Joining crew…"
                      : `Join Beta Waitlist - Be Pioneer #${pioneersNumber.toLocaleString()} of ${TOTAL_PIONEERS.toLocaleString()}`}
                  </button>
                </form>
                <div className="min-h-[1.5rem] text-sm text-slate-500 dark:text-cloud/60" role="status" aria-live="polite">
                  {statusMessage}
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-sm text-slate-600 dark:border-white/15 dark:bg-white/[0.06] dark:text-cloud/70">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-cloud">
                      {signupCount === null ? "Syncing ledger…" : `${signupCount.toLocaleString()} pioneers`}
                    </p>
                    <p>helping us test transparent kindness</p>
                  </div>
                  <span className="text-xs uppercase tracking-widest text-slate-400 dark:text-cloud/40">
                    {spotsRemaining.toLocaleString()} spots left
                  </span>
                </div>
              </div>
              <p className="mt-4 text-center text-xs text-slate-500 dark:text-cloud/60">
                We send minimal, privacy-respecting email. Opt out anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-[0_25px_60px_-45px_rgba(15,23,42,0.35)] dark:border-white/15 dark:bg-white/[0.04]">
            <div className="grid gap-8 p-8 md:grid-cols-[1fr_1.2fr] md:p-12">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-cloud">See kindness in action</h2>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-cloud/70">
                  A 15-second dive into how the HALO Engine allocates transparent, accountable aid — from request to receipt.
                </p>
              </div>
              <div className="aspect-video overflow-hidden rounded-2xl border border-slate-200/60 shadow-inner dark:border-white/10">
                <iframe
                  title="HALO Engine overview"
                  src="https://www.youtube.com/embed/9No-FiEInLA?rel=0&start=0&end=15"
                  className="h-full w-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group h-full rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white to-white/30 p-8 shadow-[0_20px_55px_-45px_rgba(15,23,42,0.45)] transition duration-200 ease-out hover:-translate-y-1 hover:shadow-lift dark:border-white/15 dark:from-white/[0.05] dark:to-white/[0.02]"
              >
                <div className="flex flex-col gap-6">
                  <span className={`inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${feature.accent} shadow-[0_12px_35px_-20px_rgba(15,23,42,0.45)]`}>
                    <Image src={feature.icon} alt="" width={48} height={48} className="h-12 w-12" />
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-cloud">
                      {feature.title}
                    </h3>
                    <p className="text-base leading-relaxed text-slate-600 dark:text-cloud/70">{feature.description}</p>
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
        <div className="container-page space-y-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-cloud">
                Ask HALO for a receipt of time returned
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-cloud/70">
                Try the prompt families use to safely surface their biggest time drains. HALO converts it into a transparent receipt everyone can follow.
              </p>
              <form className="space-y-4" onSubmit={handleDemoSubmit}>
                <label htmlFor="demo-prompt" className="text-sm font-medium text-slate-600 dark:text-cloud/70">
                  What steals your time?
                </label>
                <input
                  id="demo-prompt"
                  type="text"
                  value={demoPrompt}
                  onChange={(event) => setDemoPrompt(event.target.value)}
                  placeholder="Example: Coordinating after-school pickups for three kids"
                  className="w-full rounded-2xl border border-slate-200/70 bg-white/80 px-5 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-halo/60 dark:border-white/15 dark:bg-white/[0.08] dark:text-cloud dark:placeholder:text-cloud/50"
                />
                <button type="submit" className="btn btn-primary w-full sm:w-auto">
                  Generate a HALO Receipt
                </button>
              </form>
            </div>
            <div className="space-y-4">
              <div className="rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_25px_55px_-45px_rgba(15,23,42,0.5)] dark:border-white/15 dark:bg-white/[0.06]">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 dark:text-cloud/40">
                  <span>HALO Receipt</span>
                  <span>Beta preview</span>
                </div>
                <div className="mt-4 space-y-3">
                  <p className="text-sm text-slate-600 dark:text-cloud/70">
                    {receiptVisible ? `Time thief: ${receiptPrompt}` : "Describe your time thief to preview our safety receipt."}
                  </p>
                  <div className="space-y-3">
                    {demoStages.map((stage, index) => {
                      const isComplete = stageIndex > index;
                      const isActive = stageIndex === index;
                      return (
                        <div
                          key={stage.title}
                          className={`flex items-start gap-3 rounded-2xl border px-4 py-3 transition ${
                            isComplete
                              ? "border-emerald-400/70 bg-emerald-50/70 dark:border-emerald-300/60 dark:bg-emerald-500/10"
                              : isActive
                              ? "border-halo/60 bg-amber-50/80 dark:border-amber-300/60 dark:bg-amber-500/10"
                              : "border-slate-200/70 bg-white/60 dark:border-white/15 dark:bg-white/[0.04]"
                          }`}
                        >
                          <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-200/70 bg-white text-xs font-semibold text-slate-500 dark:border-white/15 dark:bg-white/[0.08] dark:text-cloud/70">
                            {isComplete ? (
                              <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 10.5 8.25 14 15 6.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            ) : isActive ? (
                              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 animate-spin" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <path d="M12 4v4" strokeLinecap="round" />
                                <path d="M12 16v4" strokeLinecap="round" opacity="0.4" />
                                <path d="m7.05 7.05 2.83 2.83" strokeLinecap="round" />
                                <path d="m14.12 14.12 2.83 2.83" strokeLinecap="round" opacity="0.4" />
                                <path d="M4 12h4" strokeLinecap="round" opacity="0.4" />
                                <path d="m16 12h4" strokeLinecap="round" />
                              </svg>
                            ) : (
                              <span className="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-white/30" />
                            )}
                          </span>
                          <div>
                            <p className="font-semibold text-slate-900 dark:text-cloud">{stage.title}</p>
                            <p className="text-sm text-slate-600 dark:text-cloud/70">{stage.detail}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-cloud/60">
                This preview simulates the live Safety Receipt HALO generates as requests move through contribution → allocation → confirmation.
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {receipts.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-3xl border border-slate-200/70 bg-white/70 p-6 text-base text-slate-600 shadow-[0_20px_55px_-45px_rgba(15,23,42,0.45)] dark:border-white/15 dark:bg-white/[0.05] dark:text-cloud/70"
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
