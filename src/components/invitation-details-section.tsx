import type { CSSProperties } from "react";
import { schedule } from "@/components/invitation-content";
import { RoyalGeometricPattern } from "@/components/royal-geometric-pattern";

export function InvitationDetailsSection() {
  return (
    <section id="details" className="relative isolate overflow-hidden px-5 py-20 sm:px-8 lg:px-12">
      <RoyalGeometricPattern className="royal-pattern absolute inset-0 -z-10 h-full w-full text-[#742b3f] opacity-[0.035]" />

      <div className="mx-auto w-full max-w-5xl">
        <header data-reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-[#9a783e]">Order of the day</p>
          <h2 className="mt-4 font-display text-5xl text-[#531d2d] sm:text-6xl">
            The Nikah ceremony
          </h2>
          <p className="mt-4 text-base leading-8 text-[#6d5a50]">
            A simple afternoon of welcome, prayer, acceptance, and blessings shared together.
          </p>
        </header>

        <div className="relative mt-12">
          <div className="absolute bottom-4 left-[1.15rem] top-4 w-px bg-linear-to-b from-transparent via-[#c3a05a]/65 to-transparent md:bottom-auto md:left-12 md:right-12 md:top-[1.15rem] md:h-px md:w-auto md:bg-linear-to-r" />

          <ol className="grid gap-6 md:grid-cols-2 md:gap-10">
            {schedule.map((item, index) => (
              <li
                key={item.title}
                data-reveal
                style={{ "--reveal-delay": `${index * 140}ms` } as CSSProperties}
                className="relative pl-14 md:pl-0 md:pt-14"
              >
                <span className="absolute left-2 top-5 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-[#c3a05a]/70 bg-[#fbf5e9] shadow-[0_0_0_6px_rgba(195,160,90,0.1)] md:left-1/2 md:top-2 md:-translate-x-1/2">
                  <span className="h-2 w-2 rounded-full bg-[#742b3f]" />
                </span>

                <article className="royal-card glass-panel rounded-[2rem] p-6 text-left md:text-center">
                  <p className="text-xs uppercase tracking-[0.26em] text-[#9a783e]">{item.time}</p>
                  <h3 className="mt-3 font-display text-3xl text-[#531d2d]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#6d5a50]">{item.text}</p>
                </article>
              </li>
            ))}
          </ol>
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
