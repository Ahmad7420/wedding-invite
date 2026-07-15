import { ASMonogramSeal } from "@/components/as-monogram-seal";
import { basmalaText } from "@/components/invitation-content";

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
          <p className="text-[0.68rem] uppercase tracking-[0.4em] text-white/72">
            Nikah invitation
          </p>
          <p
            lang="ar"
            dir="rtl"
            className="mt-6 text-[1.9rem] leading-[1.9] text-white sm:text-[2.35rem]"
          >
            {basmalaText}
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
