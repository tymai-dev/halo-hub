"use client";

import { useId, useMemo, useRef, useState } from "react";

type Role = "family" | "donor" | "helper";

type RoleContent = {
  id: Role;
  label: string;
  intro: string;
  points: string[];
};

const roles: RoleContent[] = [
  {
    id: "family",
    label: "Family",
    intro:
      "Dignity-first prompts surface what truly gives you time back. You decide what goes live before anything moves.",
    points: [
      "“If dinner were covered tonight, how much time would you gain?”",
      "“What recurring task steals your week?”",
      "“What could spark your child’s curiosity off-screen?”",
    ],
  },
  {
    id: "donor",
    label: "Donor",
    intro: "Fund the mission. The HALO Engine allocates fairly with public, human-readable reason codes.",
    points: [
      "See hours reclaimed and projects built — not identities.",
      "Open, auditable ledger with anonymized recipients.",
      "Profit caps and reinvestment; mission-locked governance.",
    ],
  },
  {
    id: "helper",
    label: "Helper",
    intro:
      "Offer skills or time — from tutoring to bike repair. Matching stays safe, fair, and reputation-driven.",
    points: [
      "Progressive verification builds trust.",
      "Proof-of-service with random audits prevents exploitation.",
      "Earn non-speculative HALO credits for impact.",
    ],
  },
];

export default function RoleToggle() {
  const [activeRole, setActiveRole] = useState<Role>("family");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const tablistId = useId();
  const panelBaseId = useId();

  const activeIndex = useMemo(() => roles.findIndex((role) => role.id === activeRole), [activeRole]);
  const thumbStyle = useMemo(
    () => ({
      width: `calc((100% - 0.5rem) / ${roles.length})`,
      transform: `translateX(${activeIndex * 100}%)`,
    }),
    [activeIndex]
  );

  function focusTab(index: number) {
    tabRefs.current[index]?.focus();
    setActiveRole(roles[index]?.id ?? "family");
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number, role: Role) {
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowUp": {
        event.preventDefault();
        const next = (index - 1 + roles.length) % roles.length;
        focusTab(next);
        break;
      }
      case "ArrowRight":
      case "ArrowDown": {
        event.preventDefault();
        const next = (index + 1) % roles.length;
        focusTab(next);
        break;
      }
      case "Home": {
        event.preventDefault();
        focusTab(0);
        break;
      }
      case "End": {
        event.preventDefault();
        focusTab(roles.length - 1);
        break;
      }
      case "Enter":
      case " ": {
        event.preventDefault();
        setActiveRole(role);
        break;
      }
      default:
        break;
    }
  }

  const activeContent = roles[activeIndex];

  return (
    <div className="container-page">
      <div className="card-surface space-y-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-cloud">One account. Switch perspectives.</h2>
            <p className="text-base text-cloud/70">
              Change what helps you today — and help someone else tomorrow. That’s the HALO loop.
            </p>
          </div>
          <div
            role="tablist"
            aria-label="Select a HaloHub perspective"
            className="relative isolate grid grid-cols-3 gap-0 rounded-full border border-white/12 bg-white/[0.06] p-1 text-sm shadow-inner shadow-black/20"
            id={tablistId}
          >
            <span
              className="pointer-events-none absolute inset-y-1 left-1 rounded-full bg-cloud text-ink shadow-[0_18px_45px_-30px_rgba(241,245,249,0.85)] transition-transform duration-300 ease-out motion-reduce:transition-none"
              style={thumbStyle}
              aria-hidden="true"
            />
            {roles.map((role, index) => {
              const isActive = role.id === activeRole;
              return (
                <button
                  key={role.id}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  id={`${tablistId}-${role.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`${panelBaseId}-${role.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveRole(role.id)}
                  onKeyDown={(event) => handleKeyDown(event, index, role.id)}
                  className={`relative z-10 flex min-h-[2.75rem] items-center justify-center rounded-full px-5 py-3 font-medium transition-colors duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-halo motion-reduce:transition-none ${
                    isActive ? "text-ink" : "text-cloud/70 hover:text-cloud"
                  }`}
                >
                  {role.label}
                </button>
              );
            })}
          </div>
        </div>
        <div
          role="tabpanel"
          id={`${panelBaseId}-${activeContent.id}`}
          aria-labelledby={`${tablistId}-${activeContent.id}`}
          className="space-y-6 rounded-3xl border border-white/[0.08] bg-white/[0.04] p-8 text-base text-cloud/80 shadow-[0_18px_48px_-36px_rgba(15,23,42,0.9)]"
        >
          <p className="text-lg text-cloud/90">{activeContent.intro}</p>
          <ul className="space-y-2.5">
            {activeContent.points.map((point) => (
              <li key={point} className="flex gap-3 text-cloud/75">
                <span className="mt-1 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-cloud/60" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-cloud/60">
          Currently viewing: {activeContent.label} perspective.
        </p>
      </div>
      <span className="sr-only" aria-live="polite">
        {`Showing ${activeContent.label} perspective`}
      </span>
    </div>
  );
}
