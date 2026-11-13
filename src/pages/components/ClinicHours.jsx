import React from "react";

const scheduleData = [
  { day: "Monday", hours: "9:00am – 6:00pm", closed: false },
  { day: "Tuesday", hours: "9:00am – 6:00pm", closed: false },
  { day: "Wednesday", hours: "9:00am – 6:00pm", closed: false },
  { day: "Thursday", hours: "9:00am – 6:00pm", closed: false },
  { day: "Friday", hours: "Closed", closed: true },
  { day: "Saturday", hours: "9:00am – 3:00pm", closed: false },
  { day: "Sunday", hours: "Closed", closed: true },
];

export default function ClinicHoursSection() {
  return (
    <section className="section-pad bg-[var(--paper)]">
      <div className="container-site">
        <div className="reveal mx-auto max-w-2xl">
          <div className="text-center">
            <p className="eyebrow">Plan your visit</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.2rem)] text-[var(--ink)]">
              Clinic hours
            </h2>
          </div>

          <ul className="mt-10 border-y border-[var(--line)]">
            {scheduleData.map((item) => (
              <li
                key={item.day}
                className="flex items-center justify-between gap-4 border-b border-[var(--line)] py-4 last:border-b-0"
              >
                <span className="text-base font-medium text-[var(--ink)] sm:text-lg">{item.day}</span>
                <span
                  className={`text-base sm:text-lg ${
                    item.closed ? "text-red-700/80" : "text-[var(--brand)]"
                  }`}
                >
                  {item.hours}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center">
            <p className="text-sm text-[var(--ink-muted)]">
              Hours may vary during holidays. Please call ahead to confirm.
            </p>
            <a
              href="tel:5104932130"
              className="mt-5 inline-flex items-center gap-2 border-2 border-[var(--brand)] px-6 py-3 text-sm font-semibold text-[var(--brand)] transition hover:bg-[var(--brand)] hover:text-white"
            >
              Call to schedule
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}