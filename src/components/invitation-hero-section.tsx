import { couples } from "@/components/invitation-content";

export function InvitationHeroSection() {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-20 pt-24 sm:px-8 sm:py-28 lg:px-12">
      <div className="absolute inset-x-0 top-0 -z-10 h-112 bg-[radial-gradient(circle_at_top,rgba(255,250,241,0.62),rgba(242,231,211,0.2)_45%,transparent_72%)]" />
      <div className="absolute -left-12 top-20 -z-10 h-36 w-36 rounded-full bg-[#dec58a]/35 blur-3xl" />
      <div className="absolute right-0 top-56 -z-10 h-44 w-44 rounded-full bg-[#742b3f]/12 blur-3xl" />

      <div className="mx-auto w-full max-w-5xl">
        <div data-reveal className="space-y-10 text-center">
          <div className="mx-auto flex w-fit items-center justify-center gap-3 rounded-full border border-[#c3a05a]/35 bg-[#fffaf1]/80 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#9a783e]">
            <span className="ornament-dot" />
            In the name of Allah
            <span className="ornament-dot" />
          </div>

          <div className="mx-auto max-w-2xl space-y-5">
            <p className="font-display text-3xl text-[#742b3f] sm:text-4xl">
              A Blessed Family Celebration
            </p>
            <p className="text-base leading-8 text-[#6d5a50] sm:text-lg">
              With the blessings of their parents,
              <br />
              <span className="font-medium text-[#531d2d]">
                Mr. Abdul Rahiman and Mrs. Sajida Abdul Rahiman,
              </span>
              <br />
              we joyfully invite you to witness the Nikah ceremonies of their sons.
            </p>
          </div>

          <div className="soft-divider mx-auto max-w-xl" />

          <div className="mx-auto max-w-4xl">
            <p className="text-xs uppercase tracking-[0.36em] text-[#9a783e]">
              Two Journeys, One Blessed Celebration
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {couples.map((couple) => (
                <article
                  key={couple.bride}
                  data-reveal
                  className="royal-card glass-panel rounded-4xl p-7 text-center sm:p-9"
                >
                  <span aria-hidden="true" className="gold-shower">
                    <i /><i /><i /><i /><i /><i />
                  </span>
                  <h1 className="font-display text-4xl text-[#531d2d] sm:text-5xl">
                    {couple.groom} <span className="text-[#c3a05a]">&amp;</span> {couple.bride}
                  </h1>
                  <div className="mt-6 space-y-2 text-sm leading-7 text-[#6d5a50]">
                    <p>
                      <span className="font-medium text-[#531d2d]">{couple.groom}</span>, son of
                      <br />
                      Mr. Abdul Rahiman and Mrs. Sajida Abdul Rahiman,
                    </p>
                    <p>with</p>
                    <p>
                      <span className="font-medium text-[#531d2d]">{couple.bride}</span>, daughter
                      of
                      <br />
                      {couple.brideParents}.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-2xl space-y-4">
            <p className="font-display text-2xl text-[#742b3f] sm:text-3xl">
              Together With the Blessings of Our Families
            </p>
            <p className="text-base leading-8 text-[#6d5a50] sm:text-lg">
              Two brothers begin new chapters in their lives, as two families come together in
              love, faith, and companionship.
            </p>
          </div>

          <div className="flex justify-center">
            <a
              href="#details"
              className="rose-button inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold uppercase tracking-[0.18em]"
            >
              View Nikah details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
