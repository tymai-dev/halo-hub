"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function EmailCapture() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("loading");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="space-y-3">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3 sm:flex-row sm:items-center"
        aria-describedby="waitlist-help"
      >
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          className="w-full rounded-2xl border border-white/15 bg-white/[0.08] px-5 py-3.5 text-base text-cloud placeholder:text-cloud/50 transition-colors duration-200 ease-out focus:border-white/40 focus:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-halo/80 motion-reduce:transition-none"
          type="email"
          name="email"
          placeholder="you@email.com"
          required
          autoComplete="email"
        />
        <label htmlFor="role" className="sr-only">
          Role
        </label>
        <select
          id="role"
          name="role"
          className="w-full rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-3.5 text-base text-cloud/80 transition-colors duration-200 ease-out focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-halo/80 sm:w-auto motion-reduce:transition-none"
          defaultValue="family"
        >
          <option value="family">Family</option>
          <option value="donor">Donor</option>
          <option value="helper">Helper</option>
          <option value="other">Other</option>
        </select>
        <button
          className="btn btn-primary sm:self-stretch"
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Joining…" : "Join the pilot"}
        </button>
      </form>
      <p id="waitlist-help" className="sr-only">
        Join the HaloHub pilot waitlist.
      </p>
      <div className="min-h-[1.75rem] text-sm" aria-live="polite" role="status">
        {status === "success" && (
          <p className="flex items-center gap-2 text-emerald-300">
            <span aria-hidden="true" className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-300/70">
              <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 10.5 8.25 14 15 6.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            Thanks! We’ll be in touch soon.
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 text-rose-300">
            <span aria-hidden="true" className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-rose-300/70">
              <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l8 8m0-8-8 8" strokeLinecap="round" />
              </svg>
            </span>
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}
