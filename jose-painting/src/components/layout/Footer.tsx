import Image from "next/image";
import { business } from "@/content/business";
import { Container } from "@/components/ui/Container";
import { socialIcons, PhoneIcon, MailIcon, MapPinIcon } from "@/components/ui/icons";

export function Footer() {
  const { address } = business;
  return (
    <footer className="bg-brand-900 text-brand-100">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="inline-flex rounded-lg bg-white p-3">
              <Image
                src={business.logo}
                alt={business.name}
                width={300}
                height={158}
                className="h-12 w-auto"
              />
            </span>
            <p className="mt-4 max-w-xs text-sm text-brand-200">
              {business.tagline}.
            </p>
            <p className="mt-3 text-xs text-brand-300">
              Licensed &amp; Insured · {business.licenseNumber}
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2">
              {business.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-brand-200">
              <li className="flex items-start gap-2">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <span>
                  {address.line1 && (
                    <>
                      {address.line1}
                      <br />
                    </>
                  )}
                  {address.city}, {address.state} {address.zip}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${business.phoneHref}`}
                  className="flex items-center gap-2 hover:text-white"
                >
                  <PhoneIcon className="h-4 w-4 text-accent-400" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-2 hover:text-white"
                >
                  <MailIcon className="h-4 w-4 text-accent-400" />
                  {business.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours + social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Hours
            </h3>
            <ul className="mt-4 space-y-1.5 text-sm text-brand-200">
              {business.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-3">
                  <span>{h.days}</span>
                  <span className="text-brand-300">{h.hours}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex gap-3">
              {business.social.map((s) => {
                const Icon = socialIcons[s.platform];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-800 text-brand-100 transition-colors hover:bg-accent-500 hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-brand-800 py-6 text-xs text-brand-300 sm:flex-row">
          <p>
            © {business.name}. Serving {business.serviceArea}.
          </p>
          <p>Built with the DhanGen platform.</p>
        </div>
      </Container>
    </footer>
  );
}
