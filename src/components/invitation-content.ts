export const venueMapUrl = "https://maps.app.goo.gl/6gGd5SeHoyF2b1Mb8";

export const weddingDateIso = "2026-10-24T16:30:00+05:30";
export const weddingDateLabel = "Saturday, 24 October 2026";
export const weddingVenue = "WEDBRIGHT EVENT CENTRE, Payyanur";

const googleCalendarDetails = new URLSearchParams({
  action: "TEMPLATE",
  text: "Ahmad & Shahda · Aslam & Shahadhiya — Nikah Invitation",
  dates: "20261024T100000Z/20261024T120000Z",
  details: "Join us for two blessed nikah unions at 4:30 PM.",
  location: weddingVenue,
});

export const googleCalendarUrl = `https://calendar.google.com/calendar/render?${googleCalendarDetails.toString()}`;

export const basmalaText =
  "\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0647\u0650 \u0627\u0644\u0631\u064e\u0651\u062d\u0652\u0645\u0670\u0646\u0650 \u0627\u0644\u0631\u064e\u0651\u062d\u0650\u064a\u0652\u0645\u0650";

export const couples = [
  {
    groom: "Ahmad",
    bride: "Shahda",
    brideParents: "Mr. Shabnaz & Mrs. Femina Beegam",
  },
  {
    groom: "Aslam",
    bride: "Shahadhiya",
    brideParents: "Mr. Sameer & Mrs. Suhara",
  },
] as const;

export const eventMoments = [
  {
    label: "Nikah Ceremony",
    detail: "Saturday, 24 October 2026",
    supporting: "A gentle welcome, dua, and the nikah gathering with close family.",
  },
  {
    label: "Venue",
    detail: "WEDBRIGHT EVENT CENTRE",
    location: "Payyanur",
    supporting: "Tap the location section below to open directions in Google Maps.",
  },
] as const;

