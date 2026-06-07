import { business } from "@/content/business";
import { Section } from "@/components/ui/Section";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Button } from "@/components/ui/Button";

export function Portfolio() {
  return (
    <Section
      id="portfolio"
      eyebrow="Our Work"
      title="Recent Projects"
      subtitle="A look at homes and businesses we've transformed across the valley."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {business.portfolio.map((item) => (
          <figure
            key={item.id}
            className="group overflow-hidden rounded-xl border border-brand-100 bg-white shadow-sm transition-all hover:shadow-md"
          >
            <div className="overflow-hidden">
              <PlaceholderImage
                src={item.image}
                alt={item.imageAlt}
                badge={item.category}
                aspect="aspect-[4/3]"
                className="rounded-none transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <figcaption className="p-4">
              <h3 className="font-display text-lg font-semibold text-brand-800">
                {item.title}
              </h3>
              <p className="text-sm text-brand-500">{item.location}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button href="#contact" variant="secondary" size="lg">
          Start Your Project
        </Button>
      </div>
    </Section>
  );
}
