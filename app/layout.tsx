import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HaloHub — Give families back their time",
  description: "A trust network where people and ethical AI direct money, time, and skills to the next most helpful thing — transparently and safely.",
  openGraph: {
    title: "HaloHub",
    description: "Open, fair, safe help for families — one account for giving and receiving.",
    url: "https://halohub.com",
    siteName: "HaloHub",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "HaloHub" }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "HaloHub",
    description: "Give families back their time.",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="container-narrow py-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
              <defs>
                <radialGradient id="haloGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#F97316" />
                </radialGradient>
              </defs>
              <circle cx="12" cy="12" r="10" fill="url(#haloGrad)" opacity="0.9" />
              <circle cx="12" cy="12" r="5" fill="none" stroke="white" strokeOpacity="0.6" />
            </svg>
            <span className="text-xl font-semibold">HaloHub</span>
          </a>
          <nav className="flex items-center gap-4 text-sm text-white/80">
            <a className="hover:text-white" href="/trust-safety">Trust & Safety</a>
            <a className="hover:text-white" href="/transparency">Transparency</a>
            <a className="btn" href="#waitlist">Get early access</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="container-narrow py-10 text-white/60 text-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} HaloHub. Mission-driven. Open by default.</p>
            <div className="flex gap-4">
              <a className="link" href="/trust-safety">Ethics & Safety</a>
              <a className="link" href="/transparency">Transparency Log</a>
              <a className="link" href="mailto:hello@halohub.com">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
