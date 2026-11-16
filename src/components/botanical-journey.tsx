"use client";
import { useEffect, useRef } from "react";
export function OliveSprig({ className = "" }: { className?: string }) {
  return <svg className={className} aria-hidden="true" viewBox="0 0 200 400" fill="none"><path d="M101 382C70 292 149 173 97 24" stroke="currentColor" strokeWidth="1.6" />{Array.from({ length: 9 }, (_, i) => { const y = 65 + i * 32; const x = 107 + Math.sin(i * .6) * 12; return <g key={i}><path d={`M${x} ${y + 26}Q${x - 62} ${y + 9} ${x - 53} ${y - 28}Q${x - 6} ${y - 20} ${x} ${y + 26}`} fill="currentColor" opacity={.48 + (i % 3) * .13} /><path d={`M${x} ${y + 38}Q${x + 61} ${y + 7} ${x + 47} ${y - 24}Q${x + 3} ${y - 9} ${x} ${y + 38}`} fill="currentColor" opacity={.38 + (i % 3) * .13} /></g>; })}</svg>;
}
export function BotanicalJourney() {
  const left = useRef<HTMLDivElement>(null);
  const right = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const closing = document.querySelector(".closing-monogram");
      if (!closing || !left.current || !right.current) return;
      const rect = closing.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)));
      const join = Math.min(1, Math.max(0, (innerHeight * .95 - rect.top) / (innerHeight * .55)));
      const edge = innerWidth < 600 ? 5 : 32;
      const height = innerWidth < 600 ? 140 : 230;
      const x = edge + (innerWidth / 2 - 105 - edge) * join;
      const y = innerHeight * (.25 + progress * .35) * (1 - join) + (rect.top + rect.height / 2 - height / 2) * join;
      for (const [element, direction] of [[left.current, 1], [right.current, -1]] as const) {
        element.style.transform = `translate3d(${direction * x}px, ${y}px, 0) rotate(${direction * (-18 + join * 45)}deg)`;
        element.style.opacity = String(.2 + join * .6);
      }
    };
    const change = () => { if (!preference.matches && !frame) frame = requestAnimationFrame(update); };
    change();
    addEventListener("scroll", change, { passive: true }); addEventListener("resize", change); preference.addEventListener("change", change);
    return () => { cancelAnimationFrame(frame); removeEventListener("scroll", change); removeEventListener("resize", change); preference.removeEventListener("change", change); };
  }, []);
  return <div className="botanical-journey" aria-hidden="true"><div ref={left} className="travel-sprig travel-left"><OliveSprig /></div><div ref={right} className="travel-sprig travel-right"><OliveSprig /></div></div>;
}
