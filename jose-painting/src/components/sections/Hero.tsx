import Image from "next/image";
import { business } from "@/content/business";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=2000&q=80";

/**
 * Full-bleed photo hero with a dark overlay and centered text — mirrors the
 * reference site's treatment. Swap HERO_IMAGE for one of Jose's own photos
 * (or a /public path) when available.
 */
export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[clamp(380px,52vh,540px)] items-center text-white">
      {/* Background photo */}
      <Image
        src={HERO_IMAGE}
        alt="Painter rolling fresh paint onto an interior wall"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      {/* Overlay for legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-900/80 via-brand-900/65 to-brand-900/80" />

      <Container>
        <div className="mx-auto max-w-3xl py-12 text-center sm:py-16">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-accent-300 sm:text-xs">
            ✦&nbsp;&nbsp;{business.badgeLine}&nbsp;&nbsp;✦
          </p>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {business.tagline}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-brand-50/90 sm:text-lg">
            {business.heroSubtext}
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#contact" size="lg" variant="primary">
              Get a Free Estimate
              <ArrowRightIcon className="h-5 w-5" />
            </Button>
            <Button href="#portfolio" size="lg" variant="outline">
              View Our Work
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
