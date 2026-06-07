import { business } from "@/content/business";
import { Section } from "@/components/ui/Section";
import { ServiceGlyph } from "@/components/ui/icons";

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="What We Do"
      title="Professional Painting Services"
      subtitle="From a single accent wall to a full commercial repaint, we deliver a flawless finish every time."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {business.services.map((service) => (
          <article
            key={service.id}
            className="group rounded-xl border border-brand-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent-200 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-accent-500 group-hover:text-white">
              <ServiceGlyph name={service.icon} className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-brand-800">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-600">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
