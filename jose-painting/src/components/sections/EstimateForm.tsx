"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";

/**
 * Free-estimate request form.
 *
 * INTERIM EMAIL DELIVERY (no backend required):
 * The form posts directly to FormSubmit.co, which emails the submission —
 * including any uploaded photos as attachments — to ESTIMATE_RECIPIENT.
 *   • One-time setup: the FIRST submission triggers a confirmation email to
 *     that address. Click "Activate Form" in it once; all later submissions
 *     then arrive automatically.
 *   • To change who receives leads, edit ESTIMATE_RECIPIENT below.
 *
 * DhanGen seam: this is a stand-in for the real pipeline. When the CRM backend
 * exists, point `action` at /api/estimate instead (src/app/api/estimate/route.ts)
 * so submissions are persisted, the English job text is translated to Spanish,
 * and Jose is alerted by email — and eventually by SMS/WhatsApp to his phone.
 */
const ESTIMATE_RECIPIENT = "milindkopi@gmail.com"; // TODO: change to Jose's email
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/${ESTIMATE_RECIPIENT}`;

const fieldClass =
  "w-full rounded-lg border border-brand-200 bg-white px-4 py-3 text-brand-900 placeholder:text-brand-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30";

export function EstimateForm() {
  // FormSubmit needs an absolute URL to redirect to after submit. Compute it on
  // the client so it works in any environment (localhost, preview, production).
  const [nextUrl, setNextUrl] = useState("");
  useEffect(() => {
    setNextUrl(`${window.location.origin}/thank-you`);
  }, []);

  return (
    <form
      action={FORMSUBMIT_ENDPOINT}
      method="POST"
      encType="multipart/form-data"
      className="rounded-xl border border-brand-100 bg-white p-6 shadow-sm sm:p-8"
    >
      {/* FormSubmit configuration (hidden) */}
      <input type="hidden" name="_subject" value="New estimate request — Jose Franco Painting" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      {nextUrl && <input type="hidden" name="_next" value={nextUrl} />}
      {/* Honeypot to deter spam bots */}
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <h3 className="font-display text-xl font-semibold text-brand-800">
        Request a Free Estimate
      </h3>
      <p className="mt-1 text-sm text-brand-500">
        Tell us about your project and we&apos;ll get right back to you.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-brand-700">
            Name
          </label>
          <input id="name" name="name" type="text" required className={fieldClass} placeholder="Your name" />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-brand-700">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required className={fieldClass} placeholder="(385) 000-0000" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-brand-700">
            Email
          </label>
          <input id="email" name="email" type="email" className={fieldClass} placeholder="you@example.com" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="project" className="mb-1 block text-sm font-medium text-brand-700">
            Project details
          </label>
          <textarea
            id="project"
            name="project"
            rows={4}
            required
            className={fieldClass}
            placeholder="e.g. Repaint the interior of a 3-bedroom home, walls and ceilings."
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="attachment" className="mb-1 block text-sm font-medium text-brand-700">
            Photos <span className="font-normal text-brand-400">(optional)</span>
          </label>
          <input
            id="attachment"
            name="attachment"
            type="file"
            accept="image/*"
            multiple
            className="block w-full cursor-pointer rounded-lg border border-brand-200 bg-white text-sm text-brand-600 file:mr-4 file:cursor-pointer file:border-0 file:bg-brand-50 file:px-4 file:py-3 file:text-sm file:font-semibold file:text-brand-700 hover:file:bg-brand-100"
          />
          <p className="mt-1 text-xs text-brand-400">
            Share photos of the space or surfaces you&apos;d like painted.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <Button type="submit" size="lg" variant="primary" className="w-full sm:w-auto">
          Send Request
          <ArrowRightIcon className="h-5 w-5" />
        </Button>
      </div>
    </form>
  );
}
