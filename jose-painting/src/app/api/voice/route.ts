import { NextResponse } from "next/server";

/**
 * DhanGen Block C — AI Voice Sales & Receptionist Bot (STUB).
 *
 * Future contract (webhook target for Vapi / Retell AI / Synthflow):
 *   POST /api/voice              -> call events, function-calling for availability,
 *                                   booking confirmation, and post-call triage.
 *
 * After a call, a translated native-language summary is sent to Jose via
 * WhatsApp. See webpage_generator.md §Block C.
 */
export async function POST() {
  return NextResponse.json(
    { status: "not_implemented", block: "C", feature: "voice_receptionist" },
    { status: 501 },
  );
}
