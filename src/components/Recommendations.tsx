"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const recommendations = [
  {
    name: "Sonam Khanna",
    title: "Product Marketing Manager | Ex-Nestle, Home Depot",
    image: "/images/sonam-khanna.jpeg",
    quote:
      "Shama has been an exceptional mentor and life coach. Her remarkable ability to actively listen, ask thought-provoking questions, and provide tailored guidance has consistently challenged and encouraged me to step outside my comfort zone.",
  },
  {
    name: "Ryan Deutsch",
    title: "Chief Customer Officer",
    image: "/images/ryan-deutsch.jpeg",
    quote:
      "Her ability to understand the intersection between process and people was uncanny. I brought Shama into every company I have joined to help develop cross functional processes and accelerate growth. Her impact has been material and immediate.",
  },
  {
    name: "Heather Zdan",
    title: "VP Marketing at Cigars International",
    image: "/images/heather-zdan.jpeg",
    quote:
      "Shama was a welcomed and much needed consultant. Her ability to assess the situation and define the path forward, while building team collaboration, was invaluable. She knows how to get individuals working together and is focused on delivering results.",
  },
];

export default function Recommendations() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % recommendations.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const rec = recommendations[active];

  return (
    <section className="bg-[var(--navy)] text-white py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <p className="text-xs font-semibold text-[var(--gold)] uppercase tracking-[0.2em] mb-4">
          LinkedIn Recommendations
        </p>
        <div className="divider-gold mx-auto mb-12" />

        <div className="min-h-[280px] flex flex-col items-center justify-center">
          <blockquote className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-3xl italic mb-10">
            &ldquo;{rec.quote}&rdquo;
          </blockquote>

          <div className="flex items-center gap-4">
            <Image
              src={rec.image}
              alt={rec.name}
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-semibold text-white">{rec.name}</p>
              <p className="text-sm text-white/50">{rec.title}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {recommendations.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === active ? "bg-[var(--gold)] w-6" : "bg-white/30"
              }`}
              aria-label={`Show recommendation ${i + 1}`}
            />
          ))}
        </div>

        <a
          href="https://www.linkedin.com/in/shamadriveschange/details/recommendations/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 text-sm text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors"
        >
          View all recommendations on LinkedIn &rarr;
        </a>
      </div>
    </section>
  );
}
