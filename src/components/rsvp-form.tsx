"use client";

import { useState, type FormEvent } from "react";

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export function RsvpForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "We could not send your response just now.");
      }

      form.reset();
      setStatus("success");
      setFeedback(result.message || "JazakAllah khair. Your response has been received.");
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error ? error.message : "We could not send your response just now."
      );
    }
  }

  return (
    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
      <label className="sr-only" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm text-[#6d5a50]">Guest name</span>
        <input
          required
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Enter guest name"
          className="royal-input w-full rounded-2xl px-4 py-3 text-[#30251f] outline-none"
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-[1fr_8rem]">
        <label className="block">
          <span className="mb-2 block text-sm text-[#6d5a50]">Will you attend?</span>
          <select
            required
            name="attendance"
            defaultValue="attending"
            className="royal-input w-full rounded-2xl px-4 py-3 text-[#30251f] outline-none"
          >
            <option value="attending">Joyfully attending</option>
            <option value="not-attending">Sending prayers from afar</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-[#6d5a50]">Guests</span>
          <select
            name="guestCount"
            defaultValue="1"
            className="royal-input w-full rounded-2xl px-4 py-3 text-[#30251f] outline-none"
          >
            {Array.from({ length: 10 }, (_, index) => index + 1).map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm text-[#6d5a50]">Phone or email (optional)</span>
        <input
          name="contact"
          type="text"
          autoComplete="email"
          placeholder="For any RSVP follow-up"
          className="royal-input w-full rounded-2xl px-4 py-3 text-[#30251f] outline-none"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm text-[#6d5a50]">Message for the families</span>
        <textarea
          name="message"
          rows={4}
          maxLength={600}
          placeholder="A short dua or note"
          className="royal-input w-full resize-y rounded-2xl px-4 py-3 text-[#30251f] outline-none"
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rose-button inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-full px-6 text-sm font-semibold uppercase tracking-[0.18em] transition disabled:cursor-wait disabled:opacity-65 sm:w-auto"
      >
        {status === "submitting" ? "Sending response..." : "Submit RSVP"}
      </button>

      {feedback && (
        <p
          role="status"
          className={`rounded-2xl border px-4 py-3 text-sm leading-6 ${
            status === "success"
              ? "border-[#71865e]/30 bg-[#eaf0e4]/70 text-[#4f6640]"
              : "border-[#742b3f]/25 bg-[#f7e9e8]/70 text-[#742b3f]"
          }`}
        >
          {feedback}
        </p>
      )}
    </form>
  );
}
