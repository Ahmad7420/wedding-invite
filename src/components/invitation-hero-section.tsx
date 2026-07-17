import type { CSSProperties } from "react";
import { couples, eventMoments } from "@/components/invitation-content";

export function InvitationHeroSection() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden px-5 pb-16 pt-24 sm:px-8 lg:px-12">
      <div className="absolute inset-x-0 top-0 -z-10 h-112 bg-[radial-gradient(circle_at_top,rgba(255,250,241,0.62),rgba(242,231,211,0.2)_45%,transparent_72%)]" />
      <div className="absolute -left-12 top-20 -z-10 h-36 w-36 rounded-full bg-[#dec58a]/35 blur-3xl" />
      <div className="absolute right-0 top-56 -z-10 h-44 w-44 rounded-full bg-[#742b3f]/12 blur-3xl" />

      <div className="mx-auto w-full max-w-5xl">
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
                Mr. Abdul Rahiman &amp; Mrs. Sajida Abdul Rahiman
              </p>
              <p className="text-sm uppercase tracking-[0.26em] text-[#9a783e]">
                request the honor of your presence
              </p>
            </div>
            <div className="space-y-6">
              <h1 className="sr-only">
                Ahmad and Shahda, Aslam and Shahadhiya Nikah invitation
              </h1>
              {couples.map((couple, index) => (
                <div key={couple.bride}>
                  {index > 0 && (
                    <p className="mb-5 text-xs uppercase tracking-[0.42em] text-[#9a783e]">
                      and
                    </p>
                  )}
                  <h2 className="font-display text-4xl leading-[0.92] text-[#531d2d] sm:text-6xl lg:text-7xl">
                    <span className="block">{couple.groom}</span>
                    <span
                      aria-hidden="true"
                      lang="ar"
                      className="my-2 block font-serif text-lg leading-none text-[#c3a05a] sm:my-3 sm:text-2xl"
                    >
                      و
                    </span>
                    <span className="sr-only">and</span>
                    <span className="block">{couple.bride}</span>
                  </h2>
                  <div className="mt-4 space-y-1.5">
                    <p className="text-[0.65rem] uppercase tracking-[0.32em] text-[#9a783e]">
                      Daughter of
                    </p>
                    <p className="text-sm tracking-[0.08em] text-[#6d5a50] sm:text-base">
                      {couple.brideParents}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mx-auto max-w-xl text-base leading-8 text-[#6d5a50] sm:text-lg">
              With gratitude to Allah, we invite you to join us in celebrating these blessed
              nikah unions with love, prayer, and joy.
            </p>
          </div>

          <div className="soft-divider mx-auto max-w-xl" />

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {eventMoments.map((item, index) => (
              <article
                key={item.label}
                data-reveal
                style={{ "--reveal-delay": `${index * 110}ms` } as CSSProperties}
                className="royal-card glass-panel rounded-4xl p-5 text-center"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-[#9a783e]">{item.label}</p>
                <h2 className="mt-3 font-display text-3xl text-[#531d2d]">{item.detail}</h2>
                {"location" in item && (
                  <p className="mt-1.5 text-xs uppercase tracking-[0.2em] text-[#9a783e]">
                    {item.location}
                  </p>
                )}
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
      </div>
    </section>
  );
}
