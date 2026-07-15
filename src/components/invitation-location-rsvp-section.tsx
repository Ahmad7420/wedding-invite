import { calendarLabel, venueMapUrl } from "@/components/invitation-content";

export function InvitationLocationRsvpSection() {
  return (
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
          <div className="mt-8 rounded-4xl border border-dashed border-[#dcb2c2] bg-white/70 p-5">
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
                className="rose-button inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold uppercase tracking-[0.18em]"
              >
                Submit RSVP
              </button>
              <button
                type="button"
                className="outline-button inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#7e5362]"
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
