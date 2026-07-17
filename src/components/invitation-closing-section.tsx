import { RoyalGeometricPattern } from "@/components/royal-geometric-pattern";

const closingDua =
  "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ";

export function InvitationClosingSection() {
  return (
    <section className="royal-chapter relative isolate overflow-hidden px-5 py-20 text-center sm:px-8 sm:py-24">
      <RoyalGeometricPattern className="royal-pattern absolute inset-0 -z-10 h-full w-full text-[#dec58a] opacity-[0.075]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-[radial-gradient(circle_at_top,rgba(243,221,167,0.16),transparent_72%)]" />

      <div data-reveal className="mx-auto max-w-3xl">
        <p className="text-[0.65rem] uppercase tracking-[0.42em] text-[#dec58a]">
          With prayers and gratitude
        </p>
        <p
          lang="ar"
          dir="rtl"
          className="mt-8 font-serif text-3xl leading-[2] text-[#fffaf1] sm:text-4xl"
        >
          {closingDua}
        </p>
        <div className="mx-auto my-7 h-px max-w-xs bg-linear-to-r from-transparent via-[#c3a05a]/70 to-transparent" />
        <p className="mx-auto max-w-2xl font-display text-xl leading-9 text-[#f2e7d3]/88 sm:text-2xl">
          May Allah bless you both, shower His blessings upon you, and unite you in goodness.
        </p>
        <p className="mt-8 text-xs uppercase tracking-[0.34em] text-[#dec58a]/82">
          Ahmad &amp; Shahda <span aria-hidden="true">&middot;</span> Aslam &amp; Shahadhiya
        </p>
        <p className="mt-3 text-[0.62rem] uppercase tracking-[0.3em] text-[#f2e7d3]/58">
          24 October 2026
        </p>
      </div>
    </section>
  );
}
