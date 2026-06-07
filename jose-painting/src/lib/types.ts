/**
 * Domain types for the public site.
 *
 * DhanGen note: the public face is English-only for Phase 1. Fields that will
 * eventually carry the provider's native language (e.g. service titles &
 * descriptions authored in Spanish, then auto-translated) are typed as plain
 * `string` today but are intended to widen to a `Localized` shape later:
 *
 *   export type Localized = { en: string; native?: string };
 *
 * Because every component reads these values through the `business` config
 * (never hard-codes copy), swapping `string` -> `Localized` + a small accessor
 * is a non-breaking change for the rendering layer.
 */

export interface NavLink {
  label: string;
  /** In-page anchor (e.g. "#services") or a route. */
  href: string;
}

export type ServiceIcon =
  | "interior"
  | "exterior"
  | "cabinet"
  | "drywall"
  | "deck"
  | "commercial";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
}

export interface PortfolioItem {
  id: string;
  title: string;
  location: string;
  category: string;
  /** Real image URL; when absent a styled placeholder slot renders. */
  image?: string;
  imageAlt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  /** 1-5 */
  rating: number;
  quote: string;
}

export interface BusinessHours {
  days: string;
  hours: string;
}

export interface SocialLink {
  label: string;
  href: string;
  /** Matches an icon key rendered in the UI. */
  platform: "facebook" | "instagram" | "google";
}

export interface BusinessInfo {
  /** Internal-only owner name (not surfaced prominently on the English page). */
  owner: string;
  name: string;
  /** Path to the logo in /public. */
  logo: string;
  /** Decorative eyebrow line shown in the hero/footer. */
  badgeLine: string;
  tagline: string;
  /** Short marketing sentence under the hero tagline. */
  heroSubtext: string;
  yearsInBusiness: number;
  serviceArea: string;
  phone: string;
  /** E.164-ish digits for tel: links, e.g. "+16025550142". */
  phoneHref: string;
  email: string;
  address: {
    line1: string;
    city: string;
    state: string;
    zip: string;
  };
  licenseNumber: string;
  hours: BusinessHours[];
  social: SocialLink[];
  nav: NavLink[];
  services: Service[];
  portfolio: PortfolioItem[];
  testimonials: Testimonial[];
}
