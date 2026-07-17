import { ASMonogramSeal } from "@/components/as-monogram-seal";
import { EntranceGoldConstellation } from "@/components/entrance-gold-constellation";
import { basmalaText, couples } from "@/components/invitation-content";
import { RoyalArchFrame } from "@/components/royal-arch-frame";

type InvitationOpeningOverlayProps = {
  isOpened: boolean;
  onOpen: () => void;
};

export function InvitationOpeningOverlay({
  isOpened,
  onOpen,
}: InvitationOpeningOverlayProps) {
  return (
    <div
      aria-hidden={isOpened}
      className={`pointer-events-auto fixed inset-0 z-50 transition-opacity duration-500 motion-reduce:delay-0 motion-reduce:duration-0 ${
        isOpened ? "pointer-events-none opacity-0 delay-1050" : "opacity-100 delay-0"
      }`}
    >
      <div className="royal-entrance-background absolute inset-0" />

      <div
        className={`royal-door royal-door-left absolute inset-y-0 left-0 w-1/2 origin-left border-r border-[#c3a05a]/20 shadow-[18px_0_50px_rgba(62,20,33,0.3)] transition-transform duration-1400 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-0 ${
          isOpened ? "-translate-x-full" : "translate-x-0"
        }`}
      />
      <div
        className={`royal-door royal-door-right absolute inset-y-0 right-0 w-1/2 origin-right border-l border-[#c3a05a]/20 shadow-[-18px_0_50px_rgba(62,20,33,0.34)] transition-transform duration-1400 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-0 ${
          isOpened ? "translate-x-full" : "translate-x-0"
        }`}
      />

      <div className="absolute inset-3 z-10 sm:inset-7">
        <RoyalArchFrame isOpening={isOpened} />
      </div>

      <EntranceGoldConstellation isOpening={isOpened} />

      <div
        className={`relative z-20 flex min-h-svh items-center justify-center px-10 py-7 text-center transition duration-500 motion-reduce:duration-0 sm:px-14 sm:py-10 ${
          isOpened ? "scale-[0.97] opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <div className="flex w-full max-w-lg flex-col items-center text-[#fffaf1]">
          <p className="text-[0.62rem] uppercase tracking-[0.46em] text-[#dec58a] sm:text-xs">
            Nikah invitation
          </p>

          <p
            lang="ar"
            dir="rtl"
            className="mt-4 text-[1.45rem] leading-[1.8] text-[#fffaf1] sm:mt-6 sm:text-[2rem]"
          >
            {basmalaText}
          </p>

          <p className="mt-2 max-w-sm text-[0.58rem] uppercase leading-5 tracking-[0.2em] text-[#f2e7d3]/82 sm:mt-3 sm:text-xs sm:tracking-[0.25em]">
            In the name of Allah, the Most Compassionate, the Most Merciful
          </p>

          <div className="my-4 flex items-center gap-3 sm:my-6">
            <span className="h-px w-12 bg-linear-to-r from-transparent to-[#c3a05a]/75" />
            <span className="h-1.5 w-1.5 rotate-45 border border-[#dec58a]" />
            <span className="h-px w-12 bg-linear-to-l from-transparent to-[#c3a05a]/75" />
          </div>

          <div className="opening-couples space-y-2 sm:space-y-3">
            {couples.map((couple, index) => (
              <div key={couple.bride}>
                {index > 0 && (
                  <p className="mb-2 text-[0.5rem] uppercase tracking-[0.4em] text-[#f2e7d3]/72 sm:mb-3 sm:text-[0.55rem]">
                    and
                  </p>
                )}
                <div className="opening-couple">
                  <p className="font-display text-[1.45rem] leading-[0.94] text-[#dec58a] sm:text-[2rem]">
                    <span className="block">{couple.groom}</span>
                    <span
                      aria-hidden="true"
                      lang="ar"
                      className="my-0.5 block font-serif text-[0.72rem] leading-none text-[#f2e7d3]/75 sm:my-1 sm:text-base"
                    >
                      و
                    </span>
                    <span className="sr-only">and</span>
                    <span className="block">{couple.bride}</span>
                  </p>
                  <div className="mt-1.5 sm:mt-2">
                    <p className="text-[0.42rem] uppercase tracking-[0.3em] text-[#dec58a]/78 sm:text-[0.5rem]">
                      Daughter of
                    </p>
                    <p className="mt-0.5 text-[0.56rem] leading-4 tracking-[0.08em] text-[#f2e7d3]/78 sm:text-[0.66rem]">
                      {couple.brideParents}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-3 text-[0.58rem] uppercase tracking-[0.22em] text-[#f2e7d3]/82 sm:mt-5 sm:text-xs sm:tracking-[0.3em]">
            Saturday, 24 October 2026
          </p>

          <button
            type="button"
            onClick={onOpen}
            aria-label="View invitation"
            tabIndex={isOpened ? -1 : 0}
            className="opening-seal-button group relative mt-3 flex cursor-pointer touch-manipulation select-none flex-col items-center rounded-4xl px-3 pb-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dec58a] focus-visible:ring-offset-4 focus-visible:ring-offset-[#531d2d] sm:mt-5"
          >
            <span className="opening-seal-visual relative block h-24 w-24 sm:h-32 sm:w-32">
              <span className="opening-seal-intro-ring absolute inset-1 rounded-full" />
              <span className="royal-seal-aura absolute inset-1 rounded-full" />
              <ASMonogramSeal className="opening-seal relative h-full w-full" />
            </span>
            <span className="opening-seal-caption mt-2 text-[0.52rem] uppercase tracking-[0.32em] text-[#f3dda7] sm:mt-3 sm:text-[0.62rem]">
              View invitation
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
