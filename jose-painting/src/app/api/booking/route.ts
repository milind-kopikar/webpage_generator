import { NextResponse } from "next/server";

/**
 * DhanGen Block A — Appointment / Scheduling Engine (STUB).
 *
 * Future contract:
 *   GET  /api/booking            -> available time slots for the provider calendar
 *   POST /api/booking            -> create a booking request
 *
 * On POST, the customer's English job description should be passed through the
 * Translation Engine and a native-language (Spanish) WhatsApp alert dispatched
 * to Jose. See webpage_generator.md §Block A "Asymmetric CRM Data Stream".
 *
 * Not implemented yet — returns 501 so the seam is observable but inert.
 */
export async function GET() {
  return NextResponse.json(
    { status: "not_implemented", block: "A", feature: "scheduling" },
    { status: 501 },
  );
}

export async function POST() {
  return NextResponse.json(
    { status: "not_implemented", block: "A", feature: "scheduling" },
    { status: 501 },
  );
}
