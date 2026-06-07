import type { BusinessInfo } from "@/lib/types";

/**
 * SINGLE SOURCE OF TRUTH for all public-page content.
 *
 * ⚠️ PLACEHOLDER DATA — phone, email, license #, and testimonials are invented
 * for the demo and safe to replace with Jose's real details. No component
 * hard-codes copy; everything reads from this object.
 *
 * 📷 IMAGES — the project photos are royalty-free Unsplash stock (free for
 * commercial use) used as temporary, swappable placeholders so the layout
 * looks real. Replace each `image` URL with Jose's own job photos before
 * launch (drop files in /public and reference "/your-photo.jpg").
 *
 * DhanGen roadmap: this object is the seed of the "Ingestion Engine" — later
 * the AI Web Builder will populate this same shape from Jose's Spanish input.
 */

const U = "https://images.unsplash.com";
const img = (id: string, w = 1200) => `${U}/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const business: BusinessInfo = {
  owner: "Jose Frank", // internal
  name: "Jose Frank Painting and Services",
  logo: "/logo.png",
  badgeLine: "Locally owned & operated",
  tagline: "Proudly serving Utah and Salt Lake County for over 10 years",
  heroSubtext:
    "Reliable, detail-obsessed interior and exterior painting that brings your home or business to life — on time and on budget.",
  yearsInBusiness: 10,
  serviceArea: "Utah County & Salt Lake County",

  phone: "(385) 286-9521",
  phoneHref: "+13852869521",
  email: "jose@josefrankpainting.com", // PLACEHOLDER

  address: {
    line1: "", // PLACEHOLDER — add street address if desired
    city: "Draper",
    state: "UT",
    zip: "84020",
  },

  licenseNumber: "Lic. #000000", // PLACEHOLDER

  hours: [
    { days: "Monday – Friday", hours: "7:00 AM – 6:00 PM" },
    { days: "Saturday", hours: "8:00 AM – 2:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ],

  social: [
    { label: "Facebook", href: "#", platform: "facebook" },
    { label: "Instagram", href: "#", platform: "instagram" },
    { label: "Google", href: "#", platform: "google" },
  ],

  nav: [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],

  services: [
    {
      id: "interior",
      title: "Interior Painting",
      description:
        "Walls, ceilings, trim, and accent features finished with clean lines and durable, low-odor paints.",
      icon: "interior",
    },
    {
      id: "exterior",
      title: "Exterior Painting",
      description:
        "Weather-tough coatings for siding, stucco, and trim that protect your property and boost curb appeal.",
      icon: "exterior",
    },
    {
      id: "cabinet",
      title: "Cabinet Refinishing",
      description:
        "Factory-smooth cabinet and door refinishing that gives your kitchen a fresh look for a fraction of replacement.",
      icon: "cabinet",
    },
    {
      id: "drywall",
      title: "Drywall & Repair",
      description:
        "Patching, texture matching, and crack repair so every surface is flawless before the first coat goes on.",
      icon: "drywall",
    },
    {
      id: "deck",
      title: "Deck & Fence Staining",
      description:
        "Protective stains and sealers that revive wood and stand up to Utah's seasons.",
      icon: "deck",
    },
    {
      id: "commercial",
      title: "Commercial Painting",
      description:
        "Offices, retail, and multi-unit projects completed on schedule with minimal disruption to your business.",
      icon: "commercial",
    },
  ],

  portfolio: [
    {
      id: "exterior-repaint",
      title: "Full Exterior Repaint",
      location: "Draper, UT",
      category: "Exterior",
      image: img("photo-1600585154340-be6161a56a0c"),
      imageAlt: "Freshly painted modern two-story home exterior at dusk",
    },
    {
      id: "living-room",
      title: "Open-Concept Living Room",
      location: "Sandy, UT",
      category: "Interior",
      image: img("photo-1600566753086-00f18fb6b3ea"),
      imageAlt: "Bright open-concept living room with freshly painted walls",
    },
    {
      id: "bathroom",
      title: "Bathroom Refresh",
      location: "Lehi, UT",
      category: "Interior",
      image: img("photo-1604709177225-055f99402ea3"),
      imageAlt: "Modern bathroom with crisply painted walls and trim",
    },
    {
      id: "accent-wall",
      title: "Accent Wall & Trim",
      location: "South Jordan, UT",
      category: "Interior",
      image: img("photo-1513694203232-719a280e022f"),
      imageAlt: "Living room with a soft sage-green accent wall",
    },
    {
      id: "interior-refresh",
      title: "Whole-Home Interior",
      location: "Riverton, UT",
      category: "Interior",
      image: img("photo-1493809842364-78817add7ffb"),
      imageAlt: "Sunlit living room after a full interior repaint",
    },
    {
      id: "feature-living",
      title: "Feature Walls & Ceilings",
      location: "Herriman, UT",
      category: "Interior",
      image: img("photo-1618221195710-dd6b41faaea6"),
      imageAlt: "Warm modern living room with painted feature walls",
    },
  ],

  testimonials: [
    {
      id: "t1",
      name: "Milind K.",
      location: "Draper, UT",
      rating: 5,
      quote:
        "I rent houses. I have tried many different painters. But Jose and his crew have always delivered, with flawless quality and attention to detail. Thanks to him, I have been able to quickly turn around and get my houses rented quickly! I couldn't be happier.",
    },
    {
      id: "t2",
      name: "Madhavi M.",
      location: "Mapleton, UT",
      rating: 5,
      quote:
        "Got three quotes and Jose Frank Painting was the most thorough by far. The interior and exterior looks brand new and has held up beautifully.",
    },
    {
      id: "t3",
      name: "Priya K.",
      location: "Lehi, UT",
      rating: 5,
      quote:
        "They refinished our kitchen cabinets and it looks like a brand-new kitchen. Professional communication from the estimate all the way through cleanup.",
    },
    {
      id: "t4",
      name: "Mike & Anna T.",
      location: "South Jordan, UT",
      rating: 5,
      quote:
        "Fair price, no surprises, and incredible attention to detail on the trim work. We've already recommended them to two neighbors.",
    },
  ],
};
