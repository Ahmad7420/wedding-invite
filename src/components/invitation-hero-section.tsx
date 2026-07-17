import type { CSSProperties } from "react";
import { eventMoments, promises } from "@/components/invitation-content";

export function InvitationHeroSection() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden px-5 pb-16 pt-24 sm:px-8 lg:px-12">
      <div className="absolute inset-x-0 top-0 -z-10 h-112 bg-[radial-gradient(circle_at_top,rgba(255,250,241,0.62),rgba(242,231,211,0.2)_45%,transparent_72%)]" />
      <div className="absolute -left-12 top-20 -z-10 h-36 w-36 rounded-full bg-[#dec58a]/35 blur-3xl" />
      <div className="absolute right-0 top-56 -z-10 h-44 w-44 rounded-full bg-[#742b3f]/12 blur-3xl" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div data-reveal className="space-y-6 text-center">
          <div className="mx-auto flex w-fit items-center justify-center gap-3 rounded-full border border-[#c3a05a]/35 bg-[#fffaf1]/80 px-4 py-2 text-center text-xs uppercase tracking-[0.28em] text-[#9a783e]">
            <span className="ornament-dot" />
            In the name of Allah
            <span className="ornament-dot" />
          </div>

          <div className="space-y-5">
            <p className="font-display text-2xl text-[#742b3f] sm:text-3xl">
              Together with their beloved parents
            </p>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.26em] text-[#531d2d] sm:text-base">
                Mr. Abdul Rahiman P &amp; Mrs. Sajida Abdul Rahiman
              </p>
              <p className="text-sm uppercase tracking-[0.26em] text-[#9a783e]">
                request the honor of your presence
              </p>
            </div>
            <div className="space-y-4">
              <h1 className="font-display text-4xl leading-none text-[#531d2d] sm:text-6xl lg:text-7xl">
                Ahmad
                <span className="mx-3 inline-block text-[#c3a05a]">&amp;</span>
                Shahda
              </h1>
              <p className="text-xs uppercase tracking-[0.42em] text-[#9a783e]">and</p>
              <h2 className="font-display text-4xl leading-none text-[#531d2d] sm:text-6xl lg:text-7xl">
                Aslam
                <span className="mx-3 inline-block text-[#c3a05a]">&amp;</span>
                Shahadiya
              </h2>
            </div>
            <p className="mx-auto max-w-xl text-base leading-8 text-[#6d5a50] sm:text-lg">
              With gratitude to Allah, we invite you to join us in celebrating these blessed
              nikah unions with love, prayer, and joy.
            </p>
          </div>

          <div className="soft-divider mx-auto max-w-xl" />

          <div className="grid gap-4 sm:grid-cols-2">
            {eventMoments.map((item, index) => (
              <article
                key={item.label}
                data-reveal
                style={{ "--reveal-delay": `${index * 110}ms` } as CSSProperties}
                className="glass-panel rounded-4xl p-5 text-center"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-[#9a783e]">{item.label}</p>
                <h2 className="mt-3 font-display text-3xl text-[#531d2d]">{item.detail}</h2>
                <p className="mt-3 text-sm leading-7 text-[#6d5a50]">{item.supporting}</p>
              </article>
            ))}
          </div>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#details"
              className="rose-button inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold uppercase tracking-[0.18em]"
            >
              Explore invitation
            </a>
            <a
              href="#rsvp"
              className="outline-button inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#531d2d]"
            >
              RSVP section
            </a>
          </div>
        </div>

        <div data-reveal className="relative mx-auto w-full max-w-md">
          <div className="glass-panel rounded-[2.5rem] p-4">
            <div className="rounded-4xl border border-[#c3a05a]/30 bg-[linear-gradient(180deg,rgba(255,250,241,0.32),rgba(242,231,211,0.34))] p-6 shadow-[inset_0_1px_0_rgba(255,250,241,0.32)] backdrop-blur-[2px] sm:p-8">
              <div className="flex items-center justify-center gap-4 text-center text-xs uppercase tracking-[0.24em] text-[#9a783e]">
                <span>Nikah invitation</span>
                <span>First look</span>
              </div>

              <div className="mt-8 rounded-[1.8rem] bg-[radial-gradient(circle_at_top,rgba(255,250,241,0.35)_0%,rgba(242,231,211,0.3)_48%,rgba(232,214,183,0.35)_100%)] px-6 py-9 text-center shadow-[inset_0_0_0_1px_rgba(195,160,90,0.24)] backdrop-blur-[2px]">
                <div className="mx-auto mb-5 flex w-fit items-center gap-2">
                  <span className="ornament-dot" />
                  <span className="ornament-dot" />
                  <span className="ornament-dot" />
                </div>
                <p className="font-display text-4xl text-[#531d2d] sm:text-5xl">Save the Date</p>
                <p className="mt-3 text-sm uppercase tracking-[0.28em] text-[#9a783e]">
                  Saturday, 24 October 2026 - Kannur
                </p>
                <div className="mx-auto mt-8 h-px w-24 bg-[#c3a05a]/70" />
                <p className="mt-8 text-sm leading-7 text-[#6d5a50]">
                  We would be honored by your presence as we gather with family and loved ones for
                  a beautiful evening of nikah, duas, and celebration.
                </p>
              </div>

              <ul className="mt-6 space-y-3">
                {promises.map((item) => (
                  <li
                    key={item}
                    className="flex justify-center gap-3 rounded-2xl border border-[#c3a05a]/15 bg-[#fffaf1]/28 px-4 py-3 text-center text-sm leading-6 text-[#6d5a50] backdrop-blur-[1px]"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#c3a05a]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
