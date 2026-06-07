import type { SVGProps } from "react";
import type { ServiceIcon } from "@/lib/types";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = (props: IconProps) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

/* ---------- UI glyphs ---------- */

export const PhoneIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7A2 2 0 0 1 22 16.9z" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const MapPinIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

export const ClockIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15 14" />
  </svg>
);

export const StarIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.8 5.9 20.5l1.4-6.8L2.2 9l6.9-.7L12 2z" />
  </svg>
);

export const ShieldIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

/* ---------- Social icons (filled) ---------- */

export const FacebookIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
  </svg>
);

export const InstagramIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </svg>
);

export const GoogleIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M21.8 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.5a4.7 4.7 0 0 1-2 3.1v2.6h3.2c1.9-1.7 3-4.3 3-7.5z" />
    <path d="M12 22c2.7 0 5-.9 6.7-2.4l-3.2-2.6c-.9.6-2 1-3.5 1-2.7 0-5-1.8-5.8-4.3H2.9v2.7A10 10 0 0 0 12 22z" />
    <path d="M6.2 13.7a6 6 0 0 1 0-3.8V7.2H2.9a10 10 0 0 0 0 9z" />
    <path d="M12 6.1c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 0 0 2.9 7.2l3.3 2.7C7 7.9 9.3 6.1 12 6.1z" />
  </svg>
);

export const socialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  google: GoogleIcon,
};

/* ---------- Service icons ---------- */

const InteriorIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M3 21V8l9-5 9 5v13" />
    <path d="M9 21v-6h6v6" />
  </svg>
);

const ExteriorIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M3 21h18" />
    <path d="M5 21V7l7-4 7 4v14" />
    <rect x="9" y="12" width="6" height="9" />
    <line x1="8" y1="8" x2="8" y2="8" />
  </svg>
);

const CabinetIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="9" y1="8" x2="9" y2="10" />
    <line x1="15" y1="8" x2="15" y2="10" />
  </svg>
);

const DrywallIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <rect x="3" y="3" width="18" height="18" rx="1" />
    <path d="M3 9h18M9 3v6M15 9v6M3 15h18" />
  </svg>
);

const DeckIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M3 10h18M3 14h18M3 18h18" />
    <path d="M6 6l-1 12M18 6l1 12M12 6v12" />
  </svg>
);

const CommercialIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <rect x="3" y="3" width="8" height="18" />
    <rect x="13" y="8" width="8" height="13" />
    <path d="M6 7h2M6 11h2M6 15h2M16 12h2M16 16h2" />
  </svg>
);

const serviceIconMap: Record<ServiceIcon, (p: IconProps) => React.ReactElement> = {
  interior: InteriorIcon,
  exterior: ExteriorIcon,
  cabinet: CabinetIcon,
  drywall: DrywallIcon,
  deck: DeckIcon,
  commercial: CommercialIcon,
};

export function ServiceGlyph({
  name,
  className,
}: {
  name: ServiceIcon;
  className?: string;
}) {
  const Cmp = serviceIconMap[name];
  return <Cmp className={className} />;
}
