import React, { useState } from "react";

const fieldClass =
  "w-full border border-[var(--line)] bg-[var(--paper)] px-4 py-3.5 text-sm text-[var(--ink)] outline-none transition placeholder:text-[var(--ink-muted)]/70 focus:border-[var(--brand)] focus:bg-white";

export default function AppointmentContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    communication: "Text",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Appointment request submitted successfully!");
  };

  return (
    <section id="contact" className="section-pad bg-atmosphere">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="reveal bg-atmosphere-deep p-8 text-white sm:p-10 lg:p-12">
            <p className="eyebrow text-[var(--accent-soft)]">Visit us</p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.5vw,3rem)] leading-[1.1] text-balance">
              Ready for outstanding dental care near you?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75">
              Contact Noble Dental Care today—our team will help you find the right visit for your needs.
            </p>

            <div className="mt-10 space-y-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">Address</p>
                <p className="mt-2 text-base leading-relaxed">
                  34603 Alvarado-Niles Rd
                  <br />
                  Union City, CA 94587
                </p>
                <p className="mt-2 text-sm text-white/65">Also serving Newark & Hayward</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">Phone</p>
                <a href="tel:5104932130" className="mt-2 block text-2xl font-semibold hover:text-[var(--accent-soft)]">
                  (510) 493-2130
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">Online</p>
                <a
                  href="https://nobledentalcares.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-base text-white/85 underline-offset-4 hover:underline"
                >
                  nobledentalcares.com
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="reveal reveal-delay-1 border border-[var(--line)] bg-white p-8 sm:p-10 lg:p-12">
            <p className="eyebrow">Appointment</p>
            <h3 className="mt-3 font-display text-3xl text-[var(--ink)]">Request a visit</h3>
            <p className="mt-3 text-sm text-[var(--ink-muted)]">
              Share a few details and we will follow up to confirm your preferred time.
            </p>

            <div className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
                    Preferred date
                  </span>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className={fieldClass}
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
                    Best way to reach you
                  </span>
                  <select
                    name="communication"
                    value={formData.communication}
                    onChange={handleChange}
                    className={fieldClass}
                  >
                    <option>Text</option>
                    <option>Phone</option>
                    <option>Email</option>
                  </select>
                </label>
              </div>

              <textarea
                name="reason"
                placeholder="Reason for your visit"
                value={formData.reason}
                onChange={handleChange}
                rows={4}
                className={`${fieldClass} resize-none`}
              />

              <button
                type="submit"
                className="w-full bg-[var(--brand)] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[var(--brand-deep)] sm:w-auto"
              >
                Submit appointment request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}