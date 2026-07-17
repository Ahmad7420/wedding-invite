export function SectionDivider() {
  return (
    <div aria-hidden="true" className="mx-auto flex w-full max-w-md items-center gap-4 px-8 py-3">
      <span className="h-px flex-1 bg-linear-to-r from-transparent to-[#c3a05a]/55" />
      <svg viewBox="0 0 36 36" className="h-7 w-7 text-[#c3a05a]" fill="none">
        <path d="M18 2L22 12L34 18L22 24L18 34L14 24L2 18L14 12Z" stroke="currentColor" />
        <path d="M18 10L21 15L26 18L21 21L18 26L15 21L10 18L15 15Z" fill="currentColor" fillOpacity="0.45" />
        <circle cx="18" cy="18" r="2" fill="currentColor" />
      </svg>
      <span className="h-px flex-1 bg-linear-to-l from-transparent to-[#c3a05a]/55" />
    </div>
  );
}
