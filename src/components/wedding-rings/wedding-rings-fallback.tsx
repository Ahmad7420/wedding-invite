type WeddingRingsFallbackProps = {
  status?: "loading" | "unavailable" | "reduced-motion";
};

export function WeddingRingsFallback({
  status = "loading",
}: WeddingRingsFallbackProps) {
  const isLoading = status === "loading";

  return (
    <>
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-0 z-0 overflow-hidden ${
          isLoading ? "opacity-60" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 [perspective:700px]">
          <div
            className={`absolute h-18 w-18 rounded-full border-[6px] border-[#c3a05a]/70 shadow-[inset_0_0_7px_rgba(255,245,213,0.72),0_10px_24px_rgba(83,29,45,0.14)] sm:h-24 sm:w-24 sm:border-[8px] ${
              isLoading
                ? "left-[4vw] top-[5svh] [transform:rotateY(45deg)_rotateZ(-20deg)]"
                : "bottom-[7svh] left-[calc(50%-4.2rem)] [transform:rotateY(48deg)_rotateZ(-27deg)] sm:left-[calc(50%-5.8rem)]"
            }`}
          />
          <div
            className={`absolute h-18 w-18 rounded-full border-[6px] border-[#a97f35]/70 shadow-[inset_0_0_7px_rgba(255,245,213,0.72),0_10px_24px_rgba(83,29,45,0.14)] sm:h-24 sm:w-24 sm:border-[8px] ${
              isLoading
                ? "right-[4vw] top-[5svh] [transform:rotateY(-45deg)_rotateZ(20deg)]"
                : "bottom-[7svh] right-[calc(50%-4.2rem)] [transform:rotateY(-48deg)_rotateZ(27deg)] sm:right-[calc(50%-5.8rem)]"
            }`}
          />
        </div>
      </div>
      <span className="sr-only">Two joined old-gold wedding rings.</span>
    </>
  );
}
