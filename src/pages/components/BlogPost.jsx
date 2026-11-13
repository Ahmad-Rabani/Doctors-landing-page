import React from "react";

const blogPosts = [
  {
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80",
    category: "Implants",
    title: "What to expect before your first implant consult",
    description: "A simple guide to imaging, timelines, and the questions worth asking early.",
    date: "April 12, 2025",
  },
  {
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80",
    category: "Prevention",
    title: "How routine hygiene visits protect long-term smile health",
    description: "Small habits and regular cleanings that keep restorative work looking its best.",
    date: "March 28, 2025",
  },
  {
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80",
    category: "Technology",
    title: "Why robotic guidance changes implant confidence",
    description: "How Yomi supports more precise placement and a smoother recovery path.",
    date: "March 8, 2025",
  },
];

export default function BlogPostsSection() {
  return (
    <section id="blogs" className="section-pad bg-[var(--paper)]">
      <div className="container-site">
        <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">From the clinic</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.1] text-[var(--ink)] text-balance">
              Insights for healthier smiles
            </h2>
          </div>
          <a
            href="#contact"
            className="text-sm font-semibold text-[var(--brand)] underline-offset-4 hover:underline"
          >
            Ask our team a question
          </a>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article key={post.title} className={`reveal reveal-delay-${(index % 3) + 1} group`}>
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
                  <span>{post.category}</span>
                  <span className="h-px w-6 bg-[var(--brand)]/30" />
                  <span className="normal-case tracking-normal text-[var(--ink-muted)]">{post.date}</span>
                </div>
                <h3 className="mt-3 font-display text-xl leading-snug text-[var(--ink)] sm:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}