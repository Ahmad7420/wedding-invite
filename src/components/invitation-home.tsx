"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { ASMonogramSeal } from "@/components/as-monogram-seal";

const venueMapUrl = "https://maps.app.goo.gl/1E1NHYBQRskuKB9L9";

const eventMoments = [
  {
    label: "Nikah Ceremony",
    detail: "Saturday, 24 October 2026",
    supporting: "A gentle welcome, dua, and the nikah gathering with close family.",
  },
  {
    label: "Reception Dinner",
    detail: "Immediately after the ceremony",
    supporting: "A warm evening of food, blessings, and celebration together.",
  },
  {
    label: "Venue",
    detail: "Hill View Resort Pazhayangadi, Kannur",
    supporting: "Tap the location section below to open directions in Google Maps.",
  },
];

const promises = [
  "A gentle welcome that opens with warmth, grace, and intention.",
  "Mobile-first sections with soft spacing and clear details for every guest.",
  "A symbolic rings moment that brings two paths into one union as you scroll.",
];

const schedule = [
  { time: "5:30 PM", title: "Guests arrive", text: "Welcome drinks, florals, and a soft instrumental arrival." },
  { time: "6:15 PM", title: "Nikah begins", text: "The ceremony, khutbah, and the official acceptance." },
  { time: "7:00 PM", title: "Dinner and duas", text: "A shared meal, blessings, and family photographs." },
];

export function InvitationHome() {
  const [isOpened, setIsOpened] = useState(false);
  const [ringProgress, setRingProgress] = useState(0);

  useEffect(() => {
    if (!isOpened) {
      return;
    }

    const revealed = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !revealed.has(entry.target)) {
            entry.target.classList.add("is-visible");
            revealed.add(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    const elements = document.querySelectorAll("[data-reveal]");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [isOpened]);

  useEffect(() => {
    if (!isOpened) {
      return;
    }

    const onScroll = () => {
      const section = document.getElementById("union-section");

      if (!section) {
        return;
      }

      const bounds = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const travelled = viewportHeight - bounds.top;
      const distance = viewportHeight + bounds.height;
      const progress = Math.min(Math.max(travelled / distance, 0), 1);

      setRingProgress(progress);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpened]);

  const calendarLabel = "Add to Calendar after date is confirmed";

  const ringStyle = (direction: "left" | "right"): CSSProperties => {
    const shift = (1 - ringProgress) * 78;
    const rotation = (1 - ringProgress) * 14 * (direction === "left" ? -1 : 1);
    const x = direction === "left" ? -shift : shift;

    return {
      transform: `translate(${x}px, ${-48 * (1 - ringProgress)}px) rotate(${rotation}deg)`,
      opacity: 0.65 + ringProgress * 0.35,
    };
  };

  return (
    <div className="relative overflow-x-hidden">
      <OpeningOverlay isOpened={isOpened} onOpen={() => setIsOpened(true)} />

      <main
        className={`transition-opacity duration-700 ${isOpened ? "opacity-100" : "opacity-40"}`}
      >
        <section className="relative isolate min-h-screen overflow-hidden px-5 pb-16 pt-24 sm:px-8 lg:px-12">
          <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),rgba(255,248,251,0.35)_45%,transparent_72%)]" />
          <div className="absolute -left-12 top-20 -z-10 h-36 w-36 rounded-full bg-[#ffdbe8]/70 blur-3xl" />
          <div className="absolute right-0 top-56 -z-10 h-44 w-44 rounded-full bg-[#f9d8c8]/55 blur-3xl" />

          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div data-reveal className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#a75d78]">
                <span className="ornament-dot" />
                In the name of Allah
                <span className="ornament-dot" />
              </div>

              <div className="space-y-5">
                <p className="font-display text-2xl text-[#9b6076] sm:text-3xl">
                  Together with their families
                </p>
                <h1 className="font-display text-6xl leading-none text-[#6a3f4f] sm:text-7xl lg:text-8xl">
                  Ahmad
                  <span className="mx-3 inline-block text-[#d887a7]">&</span>
                  Shahda
                </h1>
                <p className="max-w-xl text-base leading-8 text-[#6f5360] sm:text-lg">
                  With gratitude to Allah, we invite you to share in our nikah and celebrate this
                  blessed beginning with love, prayer, and joy.
                </p>
              </div>

              <div className="soft-divider max-w-xl" />

              <div className="grid gap-4 sm:grid-cols-2">
                {eventMoments.map((item, index) => (
                  <article
                    key={item.label}
                    data-reveal
                    style={{ "--reveal-delay": `${index * 110}ms` } as CSSProperties}
                    className="glass-panel rounded-[2rem] p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-[#b2748d]">
                      {item.label}
                    </p>
                    <h2 className="mt-3 font-display text-3xl text-[#744556]">{item.detail}</h2>
                    <p className="mt-3 text-sm leading-7 text-[#70545f]">{item.supporting}</p>
                  </article>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#details"
                  className="rose-button inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold tracking-[0.18em] uppercase"
                >
                  Explore invitation
                </a>
                <a
                  href="#rsvp"
                  className="outline-button inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold tracking-[0.18em] uppercase text-[#7e5362]"
                >
                  RSVP section
                </a>
              </div>
            </div>

            <div data-reveal className="relative mx-auto w-full max-w-md">
              <div className="glass-panel rounded-[2.5rem] p-4">
                <div className="rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.74),rgba(255,240,246,0.82))] p-6 sm:p-8">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-[#b2748d]">
                    <span>Nikah invitation</span>
                    <span>First look</span>
                  </div>

                  <div className="mt-8 rounded-[1.8rem] bg-[radial-gradient(circle_at_top,#fffdfa_0%,#ffe5ee_48%,#ffd8e6_100%)] px-6 py-9 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.64)]">
                    <div className="mx-auto mb-5 flex w-fit items-center gap-2">
                      <span className="ornament-dot" />
                      <span className="ornament-dot" />
                      <span className="ornament-dot" />
                    </div>
                    <p className="font-display text-4xl text-[#7a4b5c] sm:text-5xl">
                      Save the Date
                    </p>
                    <p className="mt-3 text-sm uppercase tracking-[0.28em] text-[#b26c8b]">
                      Saturday, 24 October 2026 · Kannur
                    </p>
                    <div className="mx-auto mt-8 h-px w-24 bg-[#d8a1b9]/70" />
                    <p className="mt-8 text-sm leading-7 text-[#755867]">
                      We would be honored by your presence as we gather with family and loved ones
                      for a beautiful evening of nikah, duas, and celebration.
                    </p>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {promises.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 rounded-2xl bg-white/70 px-4 py-3 text-sm leading-6 text-[#705460]"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#d887a7]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="details" className="px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div data-reveal className="glass-panel rounded-[2.25rem] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[#b2748d]">Design direction</p>
              <h2 className="mt-4 font-display text-5xl text-[#6e4353]">Pastel, ceremonial, and warm.</h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-[#6e5560]">
                Soft tones, graceful detail, and gentle movement create an invitation experience
                that feels intimate, elegant, and easy to follow on every screen.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {schedule.map((item, index) => (
                <article
                  key={item.title}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 120}ms` } as CSSProperties}
                  className="glass-panel rounded-[2rem] p-6"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-[#b2748d]">{item.time}</p>
                  <h3 className="mt-3 font-display text-3xl text-[#744556]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#70545f]">{item.text}</p>
                </article>
              ))}
              <article
                data-reveal
                style={{ "--reveal-delay": "360ms" } as CSSProperties}
                className="glass-panel rounded-[2rem] p-6 sm:col-span-2"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-[#b2748d]">Guest note</p>
                <p className="mt-3 text-base leading-8 text-[#70545f]">
                  Please keep us in your duas, and kindly use the RSVP section below to share your
                  response with us.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="union-section" className="px-5 py-18 sm:px-8 lg:px-12">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 rounded-[2.7rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,236,243,0.82))] p-6 shadow-[0_28px_90px_rgba(158,95,119,0.12)] sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div data-reveal className="max-w-xl space-y-5">
              <p className="text-xs uppercase tracking-[0.3em] text-[#b2748d]">Symbolic scroll moment</p>
              <h2 className="font-display text-5xl text-[#6d4352] sm:text-6xl">Two stories, one union.</h2>
              <p className="text-base leading-8 text-[#6f5560]">
                As guests move down the page, the rings drift from separate paths into an
                overlapping union. It gives your scroll a clear emotional beat instead of motion for
                motion&apos;s sake.
              </p>
              <p className="text-sm uppercase tracking-[0.22em] text-[#ab7086]">
                Scroll through this section and the rings settle together.
              </p>
            </div>

            <div data-reveal className="mx-auto flex w-full max-w-xl items-center justify-center">
              <div className="relative flex h-[19rem] w-full items-center justify-center sm:h-[22rem]">
                <div className="ring-shell" style={ringStyle("left")} />
                <div className="ring-shell absolute" style={ringStyle("right")} />
                <div className="absolute bottom-6 rounded-full bg-white/75 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#ab7086]">
                  Union progress {Math.round(ringProgress * 100)}%
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1fr_0.95fr]">
            <article data-reveal className="glass-panel rounded-[2.25rem] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[#b2748d]">Location</p>
              <h2 className="mt-4 font-display text-5xl text-[#6e4353]">
                Hill View Resort Pazhayangadi, Kannur
              </h2>
              <p className="mt-4 max-w-lg text-base leading-8 text-[#6e5560]">
                Tap below to open the venue directly in Google Maps for directions and arrival
                guidance.
              </p>
              <div className="mt-8 rounded-[2rem] border border-dashed border-[#dcb2c2] bg-white/70 p-5">
                <p className="text-sm uppercase tracking-[0.22em] text-[#b2748d]">Venue details</p>
                <p className="mt-3 text-sm leading-7 text-[#70545f]">
                  Hill View Resort Pazhayangadi, Kannur
                </p>
              </div>
              <a
                href={venueMapUrl}
                target="_blank"
                rel="noreferrer"
                className="rose-button mt-6 inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold uppercase tracking-[0.18em]"
              >
                Open in Google Maps
              </a>
            </article>

            <article id="rsvp" data-reveal className="glass-panel rounded-[2.25rem] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[#b2748d]">RSVP</p>
              <h2 className="mt-4 font-display text-5xl text-[#6e4353]">Kindly respond</h2>
              <form className="mt-6 space-y-4">
                <label className="block">
                  <span className="mb-2 block text-sm text-[#7a5a67]">Guest name</span>
                  <input
                    type="text"
                    placeholder="Enter guest name"
                    className="w-full rounded-2xl border border-white/70 bg-white/85 px-4 py-3 text-[#5d3f4a] outline-none transition focus:border-[#d887a7] focus:ring-2 focus:ring-[#f5d4e1]"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-[#7a5a67]">Will you attend?</span>
                  <select className="w-full rounded-2xl border border-white/70 bg-white/85 px-4 py-3 text-[#5d3f4a] outline-none transition focus:border-[#d887a7] focus:ring-2 focus:ring-[#f5d4e1]">
                    <option>Joyfully attending</option>
                    <option>Sending prayers from afar</option>
                  </select>
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-[#7a5a67]">Message for the couple</span>
                  <textarea
                    rows={4}
                    placeholder="A short dua or note"
                    className="w-full rounded-2xl border border-white/70 bg-white/85 px-4 py-3 text-[#5d3f4a] outline-none transition focus:border-[#d887a7] focus:ring-2 focus:ring-[#f5d4e1]"
                  />
                </label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    className="rose-button inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold tracking-[0.18em] uppercase"
                  >
                    Submit RSVP
                  </button>
                  <button
                    type="button"
                    className="outline-button inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold tracking-[0.16em] uppercase text-[#7e5362]"
                  >
                    {calendarLabel}
                  </button>
                </div>
              </form>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

function OpeningOverlay({
  isOpened,
  onOpen,
}: {
  isOpened: boolean;
  onOpen: () => void;
}) {
  return (
    <div
      className={`pointer-events-auto fixed inset-0 z-50 transition-opacity duration-700 ${
        isOpened ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#fff8fb_0%,#ffe7ef_34%,#f2bfd0_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.36),rgba(255,255,255,0))]" />

      <div
        className={`absolute inset-y-0 left-0 w-1/2 origin-left bg-[linear-gradient(180deg,#f4bfce_0%,#d887a7_100%)] shadow-[18px_0_50px_rgba(138,73,96,0.22)] transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpened ? "-translate-x-full" : "translate-x-0"
        }`}
      />
      <div
        className={`absolute inset-y-0 right-0 w-1/2 origin-right bg-[linear-gradient(180deg,#d887a7_0%,#b75a7f_100%)] shadow-[-18px_0_50px_rgba(138,73,96,0.22)] transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpened ? "translate-x-full" : "translate-x-0"
        }`}
      />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-5">
        <div className="opening-panel max-w-md rounded-[2rem] px-6 py-10 text-center text-white sm:px-8 sm:py-12">
          <p className="text-[0.68rem] uppercase tracking-[0.4em] text-white/72">Nikah invitation</p>
          <p
            lang="ar"
            dir="rtl"
            className="mt-6 text-[1.9rem] leading-[1.9] text-white sm:text-[2.35rem]"
          >
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/78 sm:text-sm">
            In the name of Allah, the Most Compassionate, the Most Merciful
          </p>
          <p className="mt-4 text-sm leading-7 text-white/86 sm:text-base">
            We are delighted to welcome you to our nikah invitation. Tap the seal to enter and
            view the celebration details.
          </p>
          <button
            type="button"
            onClick={onOpen}
            aria-label="Open invitation"
            className="group mx-auto mt-8 flex flex-col items-center gap-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#c97f9b]"
          >
            <ASMonogramSeal className="opening-seal h-34 w-34 sm:h-40 sm:w-40" />
            <span className="text-[0.7rem] uppercase tracking-[0.34em] text-white/78 transition group-hover:text-white">
              Tap the seal
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
