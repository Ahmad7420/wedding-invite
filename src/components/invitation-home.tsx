"use client";

import { useEffect, useState } from "react";
import { InvitationDetailsSection } from "@/components/invitation-details-section";
import { InvitationHeroSection } from "@/components/invitation-hero-section";
import { InvitationLocationRsvpSection } from "@/components/invitation-location-rsvp-section";
import { InvitationOpeningOverlay } from "@/components/invitation-opening-overlay";
import { WeddingRingsSection } from "@/components/wedding-rings/wedding-rings-section";

export function InvitationHome() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (!isOpened) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpened]);

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
    <div className="relative isolate overflow-x-clip">
      <InvitationOpeningOverlay isOpened={isOpened} onOpen={() => setIsOpened(true)} />
      <WeddingRingsSection />

      <main
        className={`relative z-10 transition-opacity duration-700 ${
          isOpened ? "opacity-100" : "opacity-40"
        }`}
      >
        <InvitationHeroSection />
        <InvitationDetailsSection />
        <InvitationLocationRsvpSection />
        <footer aria-hidden="true" className="h-[24svh] min-h-40" />
      </main>
    </div>
  );
}
