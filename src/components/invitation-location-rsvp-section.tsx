import {
  googleCalendarUrl,
  venueMapUrl,
  weddingDateLabel,
} from "@/components/invitation-content";
import { RoyalGeometricPattern } from "@/components/royal-geometric-pattern";
import { RsvpForm } from "@/components/rsvp-form";

function LocationPinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-11 w-11" fill="none">
      <path
        d="M24 43S37 31.4 37 19A13 13 0 0 0 11 19c0 12.4 13 24 13 24Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="24" cy="19" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M17 8.5c2-1.6 4.2-2.4 7-2.5" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

export function InvitationLocationRsvpSection() {
  return (
    <section className="relative isolate overflow-hidden px-5 py-18 sm:px-8 lg:px-12">
      <RoyalGeometricPattern className="royal-pattern absolute inset-0 -z-10 h-full w-full text-[#742b3f] opacity-[0.028]" />

      <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1fr_0.95fr]">
        <article data-reveal className="royal-card glass-panel relative rounded-[2.25rem] p-6 sm:p-8">
          <a
            href={venueMapUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Hill View Resort in Google Maps"
            className="absolute inset-0 z-0 rounded-[2.25rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#742b3f]"
          />

          <div className="pointer-events-none relative z-10">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#9a783e]">Location</p>
                <h2 className="mt-4 font-display text-4xl leading-tight text-[#531d2d] sm:text-[2.6rem]">
                  Hill View Resort
                </h2>
              </div>
              <span className="mt-1 text-[#b18c43]">
                <LocationPinIcon />
              </span>
            </div>

            <p className="mt-4 max-w-lg text-base leading-8 text-[#6d5a50]">
              Open the venue in Google Maps for directions and arrival guidance.
            </p>

            <div className="mt-8 rounded-4xl border border-[#c3a05a]/38 bg-[#fffaf1]/28 p-5 shadow-[inset_0_1px_0_rgba(255,250,241,0.34)] backdrop-blur-[2px]">
              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-[#9a783e]">
                Venue details
              </p>
              <p className="mt-3 font-display text-2xl text-[#531d2d]">Hill View Resort</p>
              <p className="mt-1 text-[0.62rem] uppercase tracking-[0.18em] text-[#9a783e]">
                Pazhayangadi, Kannur
              </p>
              <div className="my-4 h-px bg-linear-to-r from-[#c3a05a]/40 to-transparent" />
              <p className="text-sm font-medium text-[#531d2d]">{weddingDateLabel}</p>
              <p className="mt-1 text-sm text-[#6d5a50]">
                Guests arrive 3:30 PM <span aria-hidden="true">&middot;</span> Nikah 4:00 PM
              </p>
            </div>

            <span className="rose-button mt-6 inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold uppercase tracking-[0.18em]">
              Open in Google Maps
            </span>
          </div>

          <div className="relative z-20 mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noreferrer"
              className="outline-button inline-flex min-h-11 items-center justify-center rounded-full px-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#531d2d] transition hover:border-[#b18c43] hover:bg-[#fffaf1]"
            >
              Google Calendar
            </a>
            <a
              href="/calendar.ics"
              download
              className="outline-button inline-flex min-h-11 items-center justify-center rounded-full px-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#531d2d] transition hover:border-[#b18c43] hover:bg-[#fffaf1]"
            >
              Apple / Outlook
            </a>
          </div>
        </article>

        <article id="rsvp" data-reveal className="royal-card glass-panel rounded-[2.25rem] p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-[#9a783e]">RSVP</p>
          <h2 className="mt-4 font-display text-5xl text-[#531d2d]">Kindly respond</h2>
          <p className="mt-3 text-sm leading-7 text-[#6d5a50]">
            Please share your response so the families can prepare to welcome you.
          </p>
          <RsvpForm />
        </article>
      </div>
    </section>
  );
}
