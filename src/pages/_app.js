import { useEffect } from "react";
import { Fraunces, Outfit } from "next/font/google";
import "@/styles/globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
    );

    const observeAll = () => {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach((node) => {
        observer.observe(node);
      });
    };

    observeAll();
    const timeout = window.setTimeout(observeAll, 400);

    return () => {
      window.clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`${fraunces.variable} ${outfit.variable} font-sans antialiased`}>
      <Component {...pageProps} />
    </div>
  );
}