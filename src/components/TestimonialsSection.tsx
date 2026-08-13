import { Quote } from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio";
import type { Testimonial } from "../types/portfolio";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initial = testimonial.name.trim().charAt(0).toUpperCase();

  return (
    <div className="mx-3 flex w-[320px] shrink-0 flex-col rounded-2xl border border-border bg-card p-6 sm:w-[380px]">
      <Quote size={22} className="mb-4 text-accent-magenta" strokeWidth={1.5} />
      <p className="prose-wrap flex-1 text-sm italic leading-relaxed text-white/85">“{testimonial.quote}”</p>
      <div className="mt-6 flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-black"
          style={{ backgroundColor: testimonial.avatarColour }}
        >
          {initial}
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-white">{testimonial.name}</p>
          <p className="text-xs text-muted">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const { testimonials } = usePortfolio();

  if (testimonials.length === 0) return null;

  const loop = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-surface py-24 md:py-32">
      <div className="mx-auto mb-14 max-w-4xl px-6">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted">Testimonials</p>
        <h2 className="font-kanit text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
          What people say
        </h2>
      </div>

      <div className="marquee-track">
        {loop.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
