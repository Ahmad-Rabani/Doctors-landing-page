import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "The implant process felt clear from day one. Dr. Sayeedi explained every step, and the result looks completely natural.",
    name: "Michael Rodriguez",
    location: "Union City, CA",
  },
  {
    quote:
      "I was nervous about All-on-X, but the team made me feel safe. Comfortable visits, beautiful outcome, zero regret.",
    name: "Emily Thompson",
    location: "Hayward, CA",
  },
  {
    quote:
      "Professional, modern, and genuinely kind. Scheduling is easy and every visit respects your time.",
    name: "Sophie Carter",
    location: "Newark, CA",
  },
  {
    quote:
      "Cutting-edge tech without the cold clinic feel. Noble Dental Care got the balance exactly right for our family.",
    name: "James Bennett",
    location: "Fremont, CA",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const active = testimonials[current];

  const prev = () => setCurrent((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((i) => (i + 1) % testimonials.length);

  return (
    <section id="reviews" className="section-pad bg-atmosphere">
      <div className="container-site">
        <div className="reveal text-center">
          <p className="eyebrow">Patient stories</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.1] text-[var(--ink)] text-balance">
            What our patients say
          </h2>
        </div>

        <div className="reveal reveal-delay-1 mx-auto mt-14 max-w-3xl text-center">
          <svg
            className="mx-auto h-10 w-10 text-[var(--brand)]/40"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>
          <blockquote
            key={current}
            className="mt-6 font-display text-[clamp(1.35rem,3vw,2.15rem)] leading-snug text-[var(--ink)] text-balance"
            style={{ animation: "hero-rise 0.55s ease both" }}
          >
            “{active.quote}”
          </blockquote>
          <div className="mt-8">
            <p className="text-base font-semibold text-[var(--ink)]">{active.name}</p>
            <p className="mt-1 text-sm text-[var(--ink-muted)]">{active.location}</p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            className="flex h-11 w-11 items-center justify-center border border-[var(--line)] text-[var(--ink)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
            aria-label="Previous review"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                className={`h-1.5 transition-all ${
                  index === current ? "w-8 bg-[var(--brand)]" : "w-1.5 bg-[var(--brand)]/25"
                }`}
                aria-label={`Show review ${index + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="flex h-11 w-11 items-center justify-center border border-[var(--line)] text-[var(--ink)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
            aria-label="Next review"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}