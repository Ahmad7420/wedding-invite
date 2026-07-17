import { NextResponse } from "next/server";

type RsvpPayload = {
  name?: unknown;
  attendance?: unknown;
  guestCount?: unknown;
  contact?: unknown;
  message?: unknown;
  website?: unknown;
};

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let body: RsvpPayload;

  try {
    body = (await request.json()) as RsvpPayload;
  } catch {
    return NextResponse.json({ message: "Please submit the RSVP form again." }, { status: 400 });
  }

  if (clean(body.website, 100)) {
    return NextResponse.json({ message: "Your response has been received." });
  }

  const name = clean(body.name, 100);
  const attendance = clean(body.attendance, 20);
  const guestCount = Number.parseInt(clean(body.guestCount, 2), 10);
  const contact = clean(body.contact, 120);
  const message = clean(body.message, 600);

  if (!name || !["attending", "not-attending"].includes(attendance)) {
    return NextResponse.json(
      { message: "Please add your name and attendance response." },
      { status: 400 }
    );
  }

  if (!Number.isInteger(guestCount) || guestCount < 1 || guestCount > 10) {
    return NextResponse.json({ message: "Please select a valid guest count." }, { status: 400 });
  }

  const webhookUrl = process.env.RSVP_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { message: "Online RSVP is being prepared. Please contact the family directly for now." },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        attendance,
        guestCount,
        contact,
        message,
        submittedAt: new Date().toISOString(),
        source: "nikah-invitation",
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`RSVP webhook returned ${response.status}`);
    }
  } catch (error) {
    console.error("RSVP submission failed", error);
    return NextResponse.json(
      { message: "We could not send your response. Please try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ message: "JazakAllah khair. Your response has been received." });
}
