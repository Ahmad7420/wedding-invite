"use client";

import { useEffect, useState } from "react";
import { weddingDateIso } from "@/components/invitation-content";

type CountdownValue = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const targetTime = new Date(weddingDateIso).getTime();

function getCountdown(): CountdownValue | null {
  const difference = targetTime - Date.now();

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
  };
}

const units = [
  ["days", "Days"],
  ["hours", "Hours"],
  ["minutes", "Minutes"],
  ["seconds", "Seconds"],
] as const;

export function WeddingCountdown() {
  const [countdown, setCountdown] = useState<CountdownValue | null | undefined>(undefined);

  useEffect(() => {
    const update = () => setCountdown(getCountdown());
    update();

    const timer = window.setInterval(update, 1_000);
    return () => window.clearInterval(timer);
  }, []);

  if (countdown === null) {
    return (
      <p className="font-display text-3xl text-[#f3dda7] sm:text-4xl">
        Today is the blessed day
      </p>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4" aria-label="Countdown to the Nikah">
      {units.map(([key, label]) => (
        <div key={key} className="royal-countdown-unit rounded-2xl px-2 py-3 text-center sm:px-4 sm:py-4">
          <span className="block font-display text-2xl tabular-nums text-[#f3dda7] sm:text-4xl">
            {countdown ? String(countdown[key]).padStart(2, "0") : "--"}
          </span>
          <span className="mt-1 block text-[0.48rem] uppercase tracking-[0.18em] text-[#f2e7d3]/68 sm:text-[0.62rem]">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
