import type { Metadata } from "next";
import "./globals.css";

import DarkModeToggle from "@/components/DarkModeToggle";

export const metadata: Metadata = {
  metadataBase: new URL("https://halohub.com"),
  title: "HaloHub — Give families back their time",
  description:
    "A trust network where people and ethical AI direct money, time, and skills to the next most helpful thing — transparently and safely.",
  openGraph: {
    title: "HaloHub — Give families back their time",
    description:
      "Open, fair, safe help for families — one account for giving and receiving. Join the HALO Engine beta waitlist.",
    url: "https://halohub.com",
    siteName: "HaloHub",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "HaloHub" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HaloHub — Give families back their time",
    description: "See how the HALO Engine returns hours to families and communities.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-slate-50 text-slate-900 antialiased dark:bg-ink dark:text-cloud">
      <body className="flex min-h-screen flex-col font-sans">
        <header className="py-8 md:py-10">
          <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <a
              href="/"
              className="flex items-center gap-3 text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-cloud/80 dark:hover:text-cloud"
            >
              <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/70 bg-white shadow-[0_20px_45px_-30px_rgba(15,23,42,0.4)] dark:border-white/10 dark:bg-white/[0.06]">
                <span
                  className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(245,158,11,0.9),rgba(15,23,42,0.2))] opacity-80 blur-xl"
                  aria-hidden="true"
                />
                <span className="relative block h-4 w-4 rounded-full border border-white/50 bg-white/90" aria-hidden="true" />
              </span>
              <span className="text-lg tracking-tight">HaloHub</span>
            </a>
            <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-cloud/80">
              <a className="link-inline" href="/trust-safety">
                Trust &amp; Safety
              </a>
              <a className="link-inline" href="/transparency">
                Transparency
              </a>
              <a className="btn btn-primary" href="#waitlist">
                Join the pilot
              </a>
              <DarkModeToggle />
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="py-12">
          <div className="container-page flex flex-col gap-4 text-sm text-slate-600 dark:text-cloud/60 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} HaloHub. Purpose-built, transparent, safe.</p>
            <div className="flex flex-wrap items-center gap-4">
              <a className="link-inline" href="/trust-safety">
                Ethics &amp; Safety
              </a>
              <a className="link-inline" href="/transparency">
                Transparency Log
              </a>
              <a className="link-inline" href="mailto:hello@halohub.com">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
