import React from "react";

const teamMembers = [
  {
    name: "Syed Z. Sayeedi",
    role: "DDS · Implant & Comprehensive Care",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    description: "Leads implant and restorative cases with a focus on precision robotics and lasting outcomes.",
  },
  {
    name: "Manmeet Virk",
    role: "DDS · Family Dentistry",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    description: "Guides patients through preventive and restorative care with a calm, detail-driven approach.",
  },
  {
    name: "Laiba Sayeedi",
    role: "RDH · Preventive Care",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
    description: "Helps patients maintain healthy gums and confident smiles through tailored hygiene care.",
  },
];

export default function DentalTeamSection() {
  return (
    <section id="team" className="section-pad bg-atmosphere">
      <div className="container-site">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Our clinicians</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] text-[var(--ink)] text-balance">
            Meet the team behind your care
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
            Experienced clinicians who combine advanced training with a genuinely personal chairside manner.
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {teamMembers.map((member, index) => (
            <article key={member.name} className={`reveal reveal-delay-${(index % 3) + 1} group`}>
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5">
                <h3 className="font-display text-2xl text-[var(--ink)]">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
                  {member.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}