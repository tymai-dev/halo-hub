"use client";
import { useState } from "react";

export default function EmailCapture() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (res.ok) { setStatus("success"); form.reset(); } else { setStatus("error"); }
    } catch { setStatus("error"); }
  }

  return (
    <form onSubmit={onSubmit} className="w-full sm:flex gap-3 mt-4" aria-describedby="signup-desc">
      <input className="flex-1 rounded-xl px-4 py-3 bg-white/10 border border-white/15 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-halo"
        type="email" name="email" placeholder="you@email.com" required aria-label="Email address" />
      <select className="mt-3 sm:mt-0 rounded-xl px-3 py-3 bg-white/10 border border-white/15" name="role" aria-label="Role">
        <option value="family">Family</option>
        <option value="donor">Donor</option>
        <option value="helper">Helper</option>
        <option value="other">Other</option>
      </select>
      <button className="mt-3 sm:mt-0 btn btn-primary" type="submit" disabled={status==="loading"}>
        {status === "loading" ? "Joining…" : "Join the pilot"}
      </button>
      <p id="signup-desc" className="sr-only">Join the HaloHub pilot waitlist.</p>
      {status === "success" && <p className="mt-3 text-emerald-300">Thanks! We’ll be in touch soon.</p>}
      {status === "error" && <p className="mt-3 text-rose-300">Something went wrong. Please try again.</p>}
    </form>
  );
}
