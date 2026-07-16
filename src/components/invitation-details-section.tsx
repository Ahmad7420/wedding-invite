import type { CSSProperties } from "react";
import { schedule } from "@/components/invitation-content";

export function InvitationDetailsSection() {
  return (
    <section id="details" className="px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-reveal className="glass-panel rounded-[2.25rem] p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-[#9a783e]">Design direction</p>
          <h2 className="mt-4 font-display text-5xl text-[#531d2d]">
            Pastel, ceremonial, and warm.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-8 text-[#6d5a50]">
            Soft tones, graceful detail, and gentle movement create an invitation experience that
            feels intimate, elegant, and easy to follow on every screen.
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
              <p className="text-xs uppercase tracking-[0.24em] text-[#9a783e]">{item.time}</p>
              <h3 className="mt-3 font-display text-3xl text-[#531d2d]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#6d5a50]">{item.text}</p>
            </article>
          ))}
          <article
            data-reveal
            style={{ "--reveal-delay": "360ms" } as CSSProperties}
            className="glass-panel rounded-[2rem] p-6 sm:col-span-2"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-[#9a783e]">Guest note</p>
            <p className="mt-3 text-base leading-8 text-[#6d5a50]">
              Please keep us in your duas, and kindly use the RSVP section below to share your
              response with us.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
