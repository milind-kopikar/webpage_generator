import { Container } from "@/components/ui/Container";
import { ArrowRightIcon } from "@/components/ui/icons";

const cards = [
  {
    title: "Learn About Us",
    description: "Locally owned, fully insured, and obsessed with the details.",
    href: "#about",
  },
  {
    title: "See Our Portfolio",
    description: "Browse real before-and-after transformations.",
    href: "#portfolio",
  },
  {
    title: "Free Consultation",
    description: "Schedule a no-pressure estimate at your convenience.",
    href: "#contact",
  },
];

/** Three quick-entry cards directly under the hero (mirrors the reference site). */
export function CtaBand() {
  return (
    <section className="relative z-10 -mt-px bg-white">
      <Container>
        <div className="grid gap-4 py-8 sm:grid-cols-3 sm:gap-6 sm:py-10">
          {cards.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="group flex flex-col rounded-xl border border-brand-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent-300 hover:shadow-md"
            >
              <h3 className="font-display text-lg font-semibold text-brand-800">
                {c.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-brand-600">{c.description}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600">
                Get started
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
