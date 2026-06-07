"use client";

import { Button } from "@/components/ui/Button";
import { ClockIcon } from "@/components/ui/icons";

/**
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │ DhanGen Block A — INSTANT BOOKING WIDGET (placeholder / integration seam) │
 * └─────────────────────────────────────────────────────────────────────────┘
 *
 * This is intentionally a STUB. It renders the visual slot where the real
 * scheduling experience will live and defines the clean interface the future
 * backend attaches to. Nothing here calls a server yet.
 *
 * When Block A is built, this component will:
 *   1. Fetch open time slots from `/api/booking` (see src/app/api/booking/route.ts).
 *   2. Let the customer pick a slot + describe the job (English).
 *   3. POST the booking; the middleware translates the job description to
 *      Spanish and pushes a WhatsApp alert to Jose (Block B).
 *
 * Props are kept minimal so swapping the stub for the real widget is a
 * one-line change in Contact.tsx.
 */
export interface BookingWidgetProps {
  /** Where booking requests will be sent once wired up. */
  endpoint?: string;
  /** Provider timezone for slot display. */
  timezone?: string;
}

export function BookingWidget({
  endpoint = "/api/booking",
  timezone = "America/Phoenix",
}: BookingWidgetProps) {
  return (
    <div
      className="rounded-xl border-2 border-dashed border-brand-200 bg-brand-50 p-6"
      data-booking-endpoint={endpoint}
      data-timezone={timezone}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-white">
          <ClockIcon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-display text-lg font-semibold text-brand-800">
            Book Online
          </h3>
          <p className="text-sm text-brand-500">Real-time scheduling — coming soon</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-brand-600">
        Soon you&apos;ll be able to pick an open time slot and book your free
        estimate instantly. For now, send us a message or give us a call and
        we&apos;ll get you on the calendar.
      </p>
      <div className="mt-4">
        <Button size="md" variant="secondary" disabled>
          Choose a time (coming soon)
        </Button>
      </div>
    </div>
  );
}
