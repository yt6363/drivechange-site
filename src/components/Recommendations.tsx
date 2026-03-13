"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const recommendations = [
  {
    name: "Sonam Khanna",
    title: "Product Marketing Manager | Ex-Nestle, Home Depot",
    image: "/images/sonam-khanna.jpeg",
    quote:
      "Shama has been an exceptional mentor and life coach right from the start. She consistently challenged and encouraged me to step outside my comfort zone, empowering me to make bold decisions and take calculated risks. Her coaching has significantly boosted my confidence and self-assurance.",
  },
  {
    name: "Ryan Deutsch",
    title: "Chief Customer Officer",
    image: "/images/ryan-deutsch.jpeg",
    quote:
      "Her ability to understand the intersection between process and people was uncanny and immediately filled a critical blind spot for me as a Divisional Vice President. I have brought Shama into every company I have joined to help develop cross functional processes and accelerate growth. Her impact has been material and immediate.",
  },
  {
    name: "Heather Zdan",
    title: "VP Marketing at Cigars International",
    image: "/images/heather-zdan.jpeg",
    quote:
      "Shama was a welcomed and much needed consultant to our team. Her ability to assess the situation and define the path forward, while building team collaboration is what makes her successful. She knows how to get individuals working together and is focused on delivering results.",
  },
  {
    name: "Bethany Harrington",
    title: "AI-First Growth Strategist | M.B.A.",
    image: "/images/bethany-harrington.jpeg",
    quote:
      "Shama facilitated our annual strategic planning process, setting us up to exceed our goals. Her interactive and highly engaging workshops gave a huge boost to productivity and improved team dynamics. Shama is skilled at asking the tough questions that help teams discover the best in themselves.",
  },
  {
    name: "Vijitha Kaduwela",
    title: "Partner, Data, Analytics & AI",
    image: "/images/vijitha-kaduwela.jpeg",
    quote:
      "We initially hired Shama to help shape our product positioning and sales presentation which resulted in new contracts and customers. Her expertise in strategy development, business planning, and executive presentation are invaluable to us as a growing, entrepreneurial company who otherwise would have required an entire team of experts.",
  },
  {
    name: "Shub A.",
    title: "Founder, AI Trust Lab @ USC | 10+ AI Patents",
    image: "/images/shub-a.jpeg",
    quote:
      "Shama is a well-respected leader known for her ability to drive complex changes within an organization. She brings an entirely different perspective to management challenges. At first, her advice can seem counter intuitive, however, rest assured, it\u2019s targeted to treat the cause and not the symptom.",
  },
  {
    name: "Thomas Van Dam",
    title: "Business Director, United Airlines",
    image: "/images/thomas-van-dam.jpeg",
    quote:
      "Shama did an exceptional job leading the business team in a major enterprise transformation program within United Airlines. She well understood the business and technology complexity of the change and was comprehensive and strategic in identifying and aligning critical stakeholder groups and senior executives.",
  },
  {
    name: "Adriana L. Cowdin",
    title: "Author & Entrepreneur | Featured in Forbes, NYT",
    image: "/images/adriana-cowdin.jpeg",
    quote:
      "Within the first 180 days, we improved customer problem resolution time 2x, improved CSAT 50% and piloted a new hybrid position. One of the Top 20 things the team listed that they love about SHC was \u201CShama Workshops.\u201D She\u2019s a powerhouse!",
  },
  {
    name: "Jacey Silverberg",
    title: "Marketing Technology Leader",
    image: "/images/jacey-silverberg.jpeg",
    quote:
      "Shama demonstrates the unique ability to quickly understand people, skill sets, challenges, demands, and needs within your business environment. Shama has the uncanny ability to show people and organizations how to bring out the best in themselves both personally and professionally.",
  },
];

export default function Recommendations() {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (index === active) return;
      setTransitioning(true);
      setTimeout(() => {
        setActive(index);
        setTransitioning(false);
      }, 280);
    },
    [active],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((active + 1) % recommendations.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [active, goTo]);

  const rec = recommendations[active];

  return (
    <section className="py-24 sm:py-32 blue-gradient relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <p className="text-sm font-medium text-[var(--accent)] tracking-[0.2em] uppercase mb-16 text-center">
          What People Say
        </p>

        <div
          className={`transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            transitioning
              ? "opacity-0 translate-y-3"
              : "opacity-100 translate-y-0"
          }`}
        >
          {/* Quotation mark */}
          <div
            className="text-[120px] leading-none mb-[-50px] ml-[-6px] select-none"
            style={{ color: "rgba(7, 183, 237, 0.30)" }}
            aria-hidden="true"
          >
            &ldquo;
          </div>

          <blockquote
            className="text-2xl sm:text-3xl lg:text-[2.2rem] text-white leading-[1.35] mb-12 max-w-4xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            {rec.quote}
          </blockquote>

          <div className="flex items-center gap-4">
            {rec.image ? (
              <Image
                src={rec.image}
                alt={rec.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/60 text-sm font-semibold">
                {rec.name.split(" ").map((n) => n[0]).join("")}
              </div>
            )}
            <div>
              <p className="font-medium text-white text-sm">{rec.name}</p>
              <p className="text-sm text-white/35">{rec.title}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-5 mt-14">
          <button
            onClick={() =>
              goTo((active - 1 + recommendations.length) % recommendations.length)
            }
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/50 transition-all"
            aria-label="Previous recommendation"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {recommendations.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-[3px] rounded-full transition-all duration-500 ${
                  i === active
                    ? "bg-white w-8"
                    : "bg-white/15 w-4 hover:bg-white/30"
                }`}
                aria-label={`Show recommendation ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() =>
              goTo((active + 1) % recommendations.length)
            }
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/50 transition-all"
            aria-label="Next recommendation"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
