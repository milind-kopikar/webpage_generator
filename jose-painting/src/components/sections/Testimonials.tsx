import { business } from "@/content/business";
import { Section } from "@/components/ui/Section";
import { StarIcon } from "@/components/ui/icons";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-accent-500" : "text-brand-200"}`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      background="bg-brand-50"
      eyebrow="Testimonials"
      title="What Our Customers Say"
      subtitle="We earn most of our work through referrals and repeat customers."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {business.testimonials.map((t) => (
          <blockquote
            key={t.id}
            className="flex flex-col rounded-xl border border-brand-100 bg-white p-6 shadow-sm"
          >
            <Stars rating={t.rating} />
            <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-700">
              “{t.quote}”
            </p>
            <footer className="mt-5 border-t border-brand-100 pt-4">
              <p className="font-semibold text-brand-800">{t.name}</p>
              <p className="text-sm text-brand-500">{t.location}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
