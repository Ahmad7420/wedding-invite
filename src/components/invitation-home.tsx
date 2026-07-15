"use client";

import { useEffect, useState } from "react";
import { InvitationDetailsSection } from "@/components/invitation-details-section";
import { InvitationHeroSection } from "@/components/invitation-hero-section";
import { InvitationLocationRsvpSection } from "@/components/invitation-location-rsvp-section";
import { InvitationOpeningOverlay } from "@/components/invitation-opening-overlay";

export function InvitationHome() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (!isOpened) {
      return;
    }

    const revealed = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !revealed.has(entry.target)) {
            entry.target.classList.add("is-visible");
            revealed.add(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    const elements = document.querySelectorAll("[data-reveal]");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [isOpened]);

  return (
    <div className="relative overflow-x-hidden">
      <InvitationOpeningOverlay isOpened={isOpened} onOpen={() => setIsOpened(true)} />

      <main
        className={`transition-opacity duration-700 ${isOpened ? "opacity-100" : "opacity-40"}`}
      >
        <InvitationHeroSection />
        <InvitationDetailsSection />
        <InvitationLocationRsvpSection />
      </main>
    </div>
  );
}
