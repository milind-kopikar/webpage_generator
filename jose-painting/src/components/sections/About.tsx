import { business } from "@/content/business";
import { Section } from "@/components/ui/Section";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { CheckIcon } from "@/components/ui/icons";

const highlights = [
  "Locally owned & operated",
  "Licensed & fully insured",
  "Clean, on-time, on-budget work",
  "Free, no-pressure estimates",
];

export function About() {
  return (
    <Section id="about" background="bg-brand-50">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <PlaceholderImage
            src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1000&q=80"
            alt="Freshly painted, clean interior space"
            aspect="aspect-[4/3]"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent-600">
            About {business.name}
          </p>
          <h2 className="font-display text-3xl font-bold text-brand-800 sm:text-4xl">
            Quality you can see, service you can trust
          </h2>
          <p className="mt-4 text-lg text-brand-600">
            For over {business.yearsInBusiness} years, {business.name} has helped
            homeowners and businesses across {business.serviceArea} protect and
            beautify their properties. We treat every project like it&apos;s our own
            home — careful prep, premium materials, and a spotless finish.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-brand-700">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
