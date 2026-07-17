import { RoyalGeometricPattern } from "@/components/royal-geometric-pattern";
import { WeddingCountdown } from "@/components/wedding-countdown";

export function RoyalDateSection() {
  return (
    <section className="royal-chapter relative isolate overflow-hidden px-5 py-20 text-center sm:px-8 sm:py-24">
      <RoyalGeometricPattern className="royal-pattern absolute inset-0 -z-10 h-full w-full text-[#dec58a] opacity-[0.08]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-[radial-gradient(circle_at_top,rgba(243,221,167,0.16),transparent_72%)]" />

      <div data-reveal className="mx-auto max-w-4xl">
        <p className="text-[0.65rem] uppercase tracking-[0.48em] text-[#dec58a] sm:text-xs">
          Save the date
        </p>
        <h2 className="mt-5 font-display text-5xl leading-none text-[#fffaf1] sm:text-7xl">
          24 <span aria-hidden="true">&middot;</span> 10 <span aria-hidden="true">&middot;</span> 2026
        </h2>
        <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#f2e7d3]/75 sm:text-sm">
          Two blessed unions <span aria-hidden="true">&middot;</span> Hill View Resort{" "}
          <span aria-hidden="true">&middot;</span> Kannur
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
