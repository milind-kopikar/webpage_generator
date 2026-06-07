import { NextResponse } from "next/server";

/**
 * DhanGen Block B — WhatsApp Business Orchestration Gateway (STUB).
 *
 * Future contract:
 *   GET  /api/whatsapp/webhook   -> Meta webhook verification (hub.challenge)
 *   POST /api/whatsapp/webhook   -> inbound messages / voice notes from Jose
 *
 * Inbound voice notes ("Trabajo terminado, cobré $200") are transcribed +
 * translated and turned into an itemized English invoice with a payment link.
 * See webpage_generator.md §Block B "Voice-to-Invoice Magic".
 */
export async function GET() {
  return NextResponse.json(
    { status: "not_implemented", block: "B", feature: "whatsapp" },
    { status: 501 },
  );
}

export async function POST() {
  return NextResponse.json(
    { status: "not_implemented", block: "B", feature: "whatsapp" },
    { status: 501 },
  );
}
