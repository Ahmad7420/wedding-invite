export const dynamic = "force-static";

export function GET() {
  const calendar = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Nikah Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:nikah-20261024@wedding-invite",
    "DTSTAMP:20260717T000000Z",
    "DTSTART:20261024T110000Z",
    "DTEND:20261024T130000Z",
    "SUMMARY:Ahmad & Shahda / Aslam & Shahadhiya - Nikah",
    "DESCRIPTION:The Nikah begins at 4:30 PM.",
    "LOCATION:WEDBRIGHT EVENT CENTRE\\, Payyanur\\, Kannur\\, Kerala 670307",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return new Response(`${calendar}\r\n`, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="nikah-invitation.ics"',
      "Cache-Control": "public, max-age=86400",
    },
  });
}
