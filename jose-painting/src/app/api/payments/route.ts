import { NextResponse } from "next/server";

/**
 * DhanGen Payments — Stripe (US) / UPI · Razorpay (India) (STUB).
 *
 * Future contract:
 *   POST /api/payments           -> create a Stripe Checkout session / payment link
 *   (separate webhook route will confirm payment and trigger the review flywheel)
 *
 * Region is selected per provider config (USD/Stripe vs INR/UPI). See
 * webpage_generator.md §4 "Payment Integrations & Geographic Constraints".
 */
export async function POST() {
  return NextResponse.json(
    { status: "not_implemented", feature: "payments" },
    { status: 501 },
  );
}
