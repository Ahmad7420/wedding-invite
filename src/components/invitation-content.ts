export const venueMapUrl = "https://maps.app.goo.gl/efXB1gLecqgZvr8X7?g_st=iw";

export const weddingDateIso = "2026-11-28T10:30:00+05:30";
export const weddingEndIso = "2026-11-28T14:00:00+05:30";
export const weddingDateLabel = "Saturday, 28 November 2026";
export const weddingVenue = "Hajmus Convention Centre, 7th Mile, Taliparamba";
export const calendarStart = "20261128T050000Z";
export const calendarEnd = "20261128T083000Z";
export const calendarTitle = "Habeebul Rahiman & Riza Sajil — Nikah & Reception";
export const calendarDescription = "Join us as we begin our life together. Nikah at 10:30 AM IST; reception from 12:00 PM to 2:00 PM IST.";

const googleCalendarDetails = new URLSearchParams({
  action: "TEMPLATE",
  text: calendarTitle,
  dates: `${calendarStart}/${calendarEnd}`,
  details: calendarDescription,
  location: weddingVenue,
});

export const googleCalendarUrl = `https://calendar.google.com/calendar/render?${googleCalendarDetails.toString()}`;

export const basmalaText =
  "\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0647\u0650 \u0627\u0644\u0631\u064e\u0651\u062d\u0652\u0645\u0670\u0646\u0650 \u0627\u0644\u0631\u064e\u0651\u062d\u0650\u064a\u0652\u0645\u0650";

export const couples = [
  {
    groom: "Habeebul Rahiman",
    bride: "Riza Sajil",
    brideParents: "Sajil Cheriyandi & Ramseena Sajil",
  },
] as const;

export const eventMoments = [
  {
    label: "Nikah Ceremony",
    detail: weddingDateLabel,
    supporting: "Join us for our Nikah at 10:30 AM, followed by our reception from noon to 2:00 PM.",
  },
  {
    label: "Venue",
    detail: "Hajmus Convention Centre",
    location: "7th Mile, Taliparamba",
    supporting: "Tap the location section below to open directions in Google Maps.",
  },
] as const;

