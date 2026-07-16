import { ASMonogramSeal } from "@/components/as-monogram-seal";
import { EntranceGoldConstellation } from "@/components/entrance-gold-constellation";
import { basmalaText } from "@/components/invitation-content";
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
        isOpened ? "pointer-events-none opacity-0 delay-[1050ms]" : "opacity-100 delay-0"
      }`}
    >
      <div className="royal-entrance-background absolute inset-0" />

      <div
        className={`royal-door royal-door-left absolute inset-y-0 left-0 w-1/2 origin-left border-r border-[#c3a05a]/20 shadow-[18px_0_50px_rgba(62,20,33,0.3)] transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-0 ${
          isOpened ? "-translate-x-full" : "translate-x-0"
        }`}
      />
      <div
        className={`royal-door royal-door-right absolute inset-y-0 right-0 w-1/2 origin-right border-l border-[#c3a05a]/20 shadow-[-18px_0_50px_rgba(62,20,33,0.34)] transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-0 ${
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
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#c3a05a]/75" />
            <span className="h-1.5 w-1.5 rotate-45 border border-[#dec58a]" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#c3a05a]/75" />
          </div>

          <div className="space-y-2 sm:space-y-3">
            <p className="font-display text-[1.75rem] leading-none text-[#dec58a] sm:text-[2.35rem]">
              Ahmad <span className="text-[#fffaf1]">&amp;</span> Shahda
            </p>
            <p className="text-[0.55rem] uppercase tracking-[0.4em] text-[#f2e7d3]/72">and</p>
            <p className="font-display text-[1.75rem] leading-none text-[#dec58a] sm:text-[2.35rem]">
              Aslam <span className="text-[#fffaf1]">&amp;</span> Shahdiya
            </p>
          </div>

          <p className="mt-4 text-[0.62rem] uppercase tracking-[0.24em] text-[#f2e7d3]/82 sm:mt-6 sm:text-xs sm:tracking-[0.3em]">
            Saturday, 24 October 2026
          </p>

          <button
            type="button"
            onClick={onOpen}
            aria-label="Open invitation"
            tabIndex={isOpened ? -1 : 0}
            className="group relative mt-5 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dec58a] focus-visible:ring-offset-4 focus-visible:ring-offset-[#531d2d] sm:mt-7"
          >
            <span className="royal-seal-aura absolute inset-1 rounded-full" />
            <ASMonogramSeal className="opening-seal relative h-24 w-24 sm:h-32 sm:w-32" />
          </button>
        </div>
      </div>
    </div>
  );
}
