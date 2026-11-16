import { calendarDescription, calendarEnd, calendarStart, calendarTitle, weddingVenue } from "@/components/invitation-content";

export const dynamic = "force-static";

function escapeText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\r?\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

// Fold on UTF-8 byte boundaries to keep calendar files compatible with RFC 5545.
function foldLine(line: string) {
  const encoder = new TextEncoder();
  let result = "";
  let length = 0;
  for (const character of line) {
    const bytes = encoder.encode(character).length;
    if (length + bytes > 75) { result += "\r\n "; length = 1; }
    result += character;
    length += bytes;
  }
  return result;
}

export function GET() {
  const calendar = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Habeeb and Riza//Wedding Invitation//EN",
    "CALSCALE:GREGORIAN", "METHOD:PUBLISH", "BEGIN:VEVENT",
    "UID:habeeb-riza-20261128@wedding-invite", "DTSTAMP:20261116T000000Z",
    `DTSTART:${calendarStart}`, `DTEND:${calendarEnd}`,
    `SUMMARY:${escapeText(calendarTitle)}`, `DESCRIPTION:${escapeText(calendarDescription)}`,
    `LOCATION:${escapeText(weddingVenue)}`, "END:VEVENT", "END:VCALENDAR",
  ].map(foldLine).join("\r\n");
  return new Response(`${calendar}\r\n`, { headers: {
    "Content-Type": "text/calendar; charset=utf-8",
    "Content-Disposition": 'attachment; filename="habeeb-riza-invitation.ics"',
    "Cache-Control": "public, max-age=86400",
  } });
}
