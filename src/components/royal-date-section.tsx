import type { CSSProperties } from "react";
import { RoyalGeometricPattern } from "@/components/royal-geometric-pattern";
import { WeddingCountdown } from "@/components/wedding-countdown";

export function RoyalDateSection() {
  return (
    <section className="royal-chapter relative isolate overflow-hidden px-5 py-20 text-center sm:px-8 sm:py-24">
      <RoyalGeometricPattern className="royal-pattern absolute inset-0 -z-10 h-full w-full text-[#dec58a] opacity-[0.08]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-[radial-gradient(circle_at_top,rgba(243,221,167,0.16),transparent_72%)]" />

      <div data-reveal className="mx-auto max-w-4xl">
        <p className="text-[0.65rem] uppercase tracking-[0.42em] text-[#f3dda7] sm:text-xs">
          A Quranic reflection
        </p>
        <p data-reveal lang="ar" dir="rtl" style={{ "--reveal-delay": "120ms" } as CSSProperties} className="quranic-arabic-glow mx-auto mt-5 max-w-3xl font-serif text-2xl leading-[2] text-[#fffaf1] sm:text-3xl">
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً
        </p>
        <p data-reveal style={{ "--reveal-delay": "620ms" } as CSSProperties} className="mx-auto mt-4 max-w-2xl font-display text-lg leading-8 text-[#fffaf1]/90 sm:text-xl">
          And among His signs is that He created for you spouses from among yourselves so that you
          may find comfort in them, and He placed between you affection and mercy.
        </p>
        <p data-reveal style={{ "--reveal-delay": "980ms" } as CSSProperties} className="mt-3 text-xs uppercase tracking-[0.28em] text-[#f3dda7]/90">Surah Ar-Rum (30:21)</p>
        <div className="mx-auto my-9 h-px max-w-sm bg-linear-to-r from-transparent via-[#c3a05a]/75 to-transparent" />
        <p className="text-[0.65rem] uppercase tracking-[0.48em] text-[#dec58a] sm:text-xs">
          Save the date
        </p>
        <h2 className="mt-5 font-display text-5xl leading-none text-[#fffaf1] sm:text-7xl">
          <span data-reveal style={{ "--reveal-delay": "120ms" } as CSSProperties}>24</span> <span aria-hidden="true">&middot;</span> <span data-reveal style={{ "--reveal-delay": "260ms" } as CSSProperties}>10</span> <span aria-hidden="true">&middot;</span> <span data-reveal style={{ "--reveal-delay": "400ms" } as CSSProperties} className="date-year-glow">2026</span>
        </h2>
        <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#f2e7d3]/75 sm:text-sm">
          Two blessed unions <span aria-hidden="true">&middot;</span> WEDBRIGHT EVENT CENTRE{" "}
          <span aria-hidden="true">&middot;</span> Payyanur
        </p>

        <div className="mx-auto my-9 h-px max-w-sm bg-linear-to-r from-transparent via-[#c3a05a]/75 to-transparent" />

        <WeddingCountdown />
        <p className="mt-5 text-[0.6rem] uppercase tracking-[0.34em] text-[#dec58a]/78 sm:text-xs">
          Until the Nikah
        </p>
      </div>
    </section>
  );
}
