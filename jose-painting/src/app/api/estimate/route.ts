import { NextResponse } from "next/server";

/**
 * CRM lead intake (STUB) — receives the free-estimate form submission.
 *
 * Future contract:
 *   POST /api/estimate  { name, phone, email, project }
 *     1. Persist the lead (PostgreSQL `leads` table).
 *     2. Translate the English `project` text -> Spanish via the Translation Engine.
 *     3. Push a native-language alert to Jose (WhatsApp / Block B).
 *
 * Wire EstimateForm.handleSubmit to POST here when the backend exists.
 */
export async function POST() {
  return NextResponse.json(
    { status: "not_implemented", feature: "lead_intake" },
    { status: 501 },
  );
}
