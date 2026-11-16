"use client";

import { useEffect, useState } from "react";
import { weddingDateIso, weddingEndIso } from "@/components/invitation-content";

type CountdownValue = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const targetTime = new Date(weddingDateIso).getTime();

function getCountdown(): CountdownValue | "celebrating" | "past" {
  const difference = targetTime - Date.now();

  if (difference <= 0) {
    return Date.now() <= new Date(weddingEndIso).getTime() ? "celebrating" : "past";
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
  const [countdown, setCountdown] = useState<CountdownValue | "celebrating" | "past" | undefined>(undefined);

  useEffect(() => {
    const update = () => setCountdown(getCountdown());
    update();

    const timer = window.setInterval(update, 1_000);
    return () => window.clearInterval(timer);
  }, []);

  if (typeof countdown === "string") {
    return (
      <p className="countdown-message">
        {countdown === "celebrating" ? "Our celebration is here" : "A beautiful beginning, treasured always"}
      </p>
    );
  }

  return (
    <div className="countdown" role="timer" aria-label="Countdown to the Nikah">
      {units.map(([key, label]) => (
        <div key={key} className="countdown-unit">
          <strong>
            {countdown ? String(countdown[key]).padStart(2, "0") : "--"}
          </strong>
          <span>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
