import type { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  /** Anchor id for in-page nav (e.g. "services"). */
  id?: string;
  /** Optional eyebrow label shown above the heading. */
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  /** Tailwind background utility, e.g. "bg-brand-50". */
  background?: string;
  className?: string;
}

/** Standard section wrapper: consistent vertical rhythm + optional heading block. */
export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  background = "bg-white",
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-16 sm:py-20 lg:py-24 ${background} ${className}`}>
      <Container>
        {(eyebrow || title || subtitle) && (
          <div className="mx-auto mb-12 max-w-2xl text-center">
            {eyebrow && (
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent-600">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-bold text-brand-800 sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-brand-600">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
