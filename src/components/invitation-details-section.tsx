import type { CSSProperties } from "react";
import { RoyalGeometricPattern } from "@/components/royal-geometric-pattern";

export function InvitationDetailsSection() {
  return (
    <section id="details" className="relative isolate overflow-hidden px-5 py-20 sm:px-8 lg:px-12">
      <RoyalGeometricPattern className="royal-pattern absolute inset-0 -z-10 h-full w-full text-[#742b3f] opacity-[0.035]" />

      <div className="mx-auto w-full max-w-5xl">
        <header data-reveal className="mx-auto max-w-2xl text-center">
          <h2 className="mt-4 font-display text-5xl text-[#531d2d] sm:text-6xl">
            The Nikah ceremony
          </h2>
          <p className="mt-4 text-base leading-8 text-[#6d5a50]">
            A simple afternoon of welcome, prayer, acceptance, and blessings shared together.
          </p>
        </header>

        <div data-reveal className="royal-card glass-panel mx-auto mt-12 max-w-3xl rounded-[2rem] p-6 text-center sm:p-8">
            <h3 data-reveal style={{ "--reveal-delay": "120ms" } as CSSProperties} className="font-display text-3xl text-[#531d2d]">Nikah Ceremony</h3>
            <div className="mt-6 space-y-3 text-base leading-7 text-[#6d5a50]">
            <p data-reveal style={{ "--reveal-delay": "300ms" } as CSSProperties}>Saturday, 24 October 2026</p>
            <p data-reveal style={{ "--reveal-delay": "460ms" } as CSSProperties} className="font-semibold text-[#531d2d]">04:30 PM</p>
            <p data-reveal style={{ "--reveal-delay": "620ms" } as CSSProperties} className="font-display text-2xl text-[#531d2d]">WEDBRIGHT EVENT CENTRE</p>
            <p data-reveal style={{ "--reveal-delay": "780ms" } as CSSProperties}>Payyanur, Kannur, Kerala 670307</p>
          </div>
          <a
            href="#location"
            data-reveal
            style={{ "--reveal-delay": "940ms" } as CSSProperties}
            className="rose-button mt-6 inline-flex min-h-11 items-center justify-center rounded-full px-6 text-xs font-semibold uppercase tracking-[0.16em]"
          >
            View location
          </a>
        </div>

        <aside data-reveal className="royal-card glass-panel mx-auto mt-8 max-w-3xl rounded-[2rem] p-6 text-center sm:p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-[#9a783e]">A note for our guests</p>
          <p className="mt-3 text-base leading-8 text-[#6d5a50]">
            Your presence and prayers will make this blessed gathering even more meaningful to
            both families.
          </p>
        </aside>
      </div>
    </section>
  );
}
