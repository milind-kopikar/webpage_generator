import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-500 disabled:opacity-60 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  // Warm terracotta — primary calls to action (estimate, schedule).
  primary: "bg-accent-500 text-white hover:bg-accent-600 shadow-sm",
  // Brand navy — secondary actions.
  secondary: "bg-brand-600 text-white hover:bg-brand-700 shadow-sm",
  // Outlined — used on photographic / dark backgrounds.
  outline:
    "border-2 border-white/80 text-white hover:bg-white hover:text-brand-800",
  ghost: "text-brand-700 hover:bg-brand-50",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm min-h-[40px]",
  md: "px-5 py-2.5 text-base min-h-[44px]", // 44px = comfortable touch target
  lg: "px-7 py-3.5 text-lg min-h-[52px]",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type AsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type AsLink = CommonProps & {
  href: string;
  /** Set for external links. */
  external?: boolean;
};

export type ButtonProps = AsButton | AsLink;

/**
 * Polymorphic button: renders an <a> when `href` is provided, otherwise a
 * <button>. Keeps every CTA on the site visually consistent.
 */
export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className = "", children } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { external, href } = props;
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as AsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
