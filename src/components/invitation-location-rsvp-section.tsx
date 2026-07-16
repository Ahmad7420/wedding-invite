import { calendarLabel, venueMapUrl } from "@/components/invitation-content";

export function InvitationLocationRsvpSection() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1fr_0.95fr]">
        <article data-reveal className="glass-panel rounded-[2.25rem] p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-[#9a783e]">Location</p>
          <h2 className="mt-4 font-display text-5xl text-[#531d2d]">
            Hill View Resort Pazhayangadi, Kannur
          </h2>
          <p className="mt-4 max-w-lg text-base leading-8 text-[#6d5a50]">
            Tap below to open the venue directly in Google Maps for directions and arrival
            guidance.
          </p>
          <div className="mt-8 rounded-4xl border border-dashed border-[#c3a05a]/55 bg-[#fffaf1]/28 p-5 shadow-[inset_0_1px_0_rgba(255,250,241,0.3)] backdrop-blur-[1px]">
            <p className="text-sm uppercase tracking-[0.22em] text-[#9a783e]">Venue details</p>
            <p className="mt-3 text-sm leading-7 text-[#6d5a50]">
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
          <p className="text-xs uppercase tracking-[0.28em] text-[#9a783e]">RSVP</p>
          <h2 className="mt-4 font-display text-5xl text-[#531d2d]">Kindly respond</h2>
          <form className="mt-6 space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm text-[#6d5a50]">Guest name</span>
              <input
                type="text"
                placeholder="Enter guest name"
                className="w-full rounded-2xl border border-[#c3a05a]/35 bg-[#fffaf1]/90 px-4 py-3 text-[#30251f] outline-none transition focus:border-[#742b3f] focus:ring-2 focus:ring-[#dec58a]/55"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-[#6d5a50]">Will you attend?</span>
              <select className="w-full rounded-2xl border border-[#c3a05a]/35 bg-[#fffaf1]/90 px-4 py-3 text-[#30251f] outline-none transition focus:border-[#742b3f] focus:ring-2 focus:ring-[#dec58a]/55">
                <option>Joyfully attending</option>
                <option>Sending prayers from afar</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-[#6d5a50]">Message for the couple</span>
              <textarea
                rows={4}
                placeholder="A short dua or note"
                className="w-full rounded-2xl border border-[#c3a05a]/35 bg-[#fffaf1]/90 px-4 py-3 text-[#30251f] outline-none transition focus:border-[#742b3f] focus:ring-2 focus:ring-[#dec58a]/55"
              />
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="rose-button inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold uppercase tracking-[0.18em]"
              >
                Submit RSVP
              </button>
              <button
                type="button"
                className="outline-button inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#531d2d]"
              >
                {calendarLabel}
              </button>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
}
