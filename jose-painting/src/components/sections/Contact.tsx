import { business } from "@/content/business";
import { Section } from "@/components/ui/Section";
import { EstimateForm } from "./EstimateForm";
import { BookingWidget } from "@/components/integrations/BookingWidget";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "@/components/ui/icons";

export function Contact() {
  const { address } = business;
  return (
    <Section
      id="contact"
      eyebrow="Get In Touch"
      title="Let's Bring Your Project to Life"
      subtitle="Request a free estimate or reach out directly — we'd love to help."
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left: contact details + booking seam */}
        <div className="space-y-6">
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-medium text-brand-500">Call or text</p>
                <a
                  href={`tel:${business.phoneHref}`}
                  className="text-lg font-semibold text-brand-800 hover:text-accent-600"
                >
                  {business.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <MailIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-medium text-brand-500">Email</p>
                <a
                  href={`mailto:${business.email}`}
                  className="text-lg font-semibold text-brand-800 hover:text-accent-600"
                >
                  {business.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <MapPinIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-medium text-brand-500">Service area</p>
                <p className="text-lg font-semibold text-brand-800">
                  {address.city}, {address.state} &amp; {business.serviceArea}
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <ClockIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-medium text-brand-500">Hours</p>
                <ul className="text-brand-800">
                  {business.hours.map((h) => (
                    <li key={h.days} className="text-sm">
                      <span className="font-semibold">{h.days}:</span> {h.hours}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>

          {/* DhanGen Block A seam */}
          <BookingWidget />
        </div>

        {/* Right: estimate form */}
        <div>
          <EstimateForm />
        </div>
      </div>
    </Section>
  );
}
