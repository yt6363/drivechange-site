import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = { title: "AI Governance" };

const pillars = [
  {
    label: "Oversight",
    text: "Board-level and executive oversight structures that provide strategic direction and accountability for AI initiatives across the organization.",
  },
  {
    label: "Policy",
    text: "Comprehensive AI policies covering data usage, algorithmic transparency, privacy, intellectual property, and responsible deployment standards.",
  },
  {
    label: "Monitoring",
    text: "Ongoing monitoring and auditing systems that detect bias, drift, and performance degradation before they become organizational risks.",
  },
  {
    label: "Accountability",
    text: "Clear accountability structures with identified owners, escalation paths, and remediation protocols for every AI system in production.",
  },
];

const topics = [
  {
    title: "Risk Management",
    text: "AI introduces novel risks: algorithmic bias, data privacy violations, reputational damage, and regulatory non-compliance. We help build structured frameworks for identification, assessment, and mitigation of AI-specific risks.",
  },
  {
    title: "Accountability & Transparency",
    text: "Clear accountability for AI outcomes and transparency in AI-driven decision-making are essential for building trust with stakeholders, customers, and regulators.",
  },
  {
    title: "Bias & Fairness",
    text: "AI systems can perpetuate and amplify existing biases. We help establish bias detection, testing, and mitigation processes throughout the AI lifecycle.",
  },
  {
    title: "Regulatory Readiness",
    text: "The regulatory landscape is evolving rapidly, from the EU AI Act to sector-specific requirements. We help build adaptable, forward-looking compliance frameworks.",
  },
  {
    title: "Board Oversight",
    text: "We prepare boards to understand and oversee AI risks and opportunities, providing the knowledge, frameworks, and reporting structures needed for governance at the highest level.",
  },
];

export default function AIGovernancePage() {
  return (
    <>
      <PageHero
        title="AI Governance"
        subtitle="Governance is not a constraint on AI innovation. It is the foundation for trust, scale, and sustainability."
      />

      {/* Pillars — no cards, typographic layout */}
      <section className="py-20 sm:py-28 bg-[var(--bg-alt)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <p className="text-sm font-medium text-[var(--accent)] tracking-[0.2em] uppercase mb-3">
              Framework
            </p>
            <h2 className="mb-16">
              <span className="block text-xl sm:text-2xl font-serif italic text-[var(--text-muted)]">
                Four Pillars of
              </span>
              <span
                className="block text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.92]"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                AI Governance
              </span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-16">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.label} delay={i * 100}>
                <div className="relative">
                  <span
                    className="text-[7rem] sm:text-[8rem] leading-none tracking-tighter absolute -top-4 -left-1 select-none"
                    style={{
                      fontFamily: "var(--font-bebas)",
                      color: "rgba(7,183,237,0.09)",
                    }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative pt-14">
                    <h3 className="mb-3">
                      <span
                        className="text-2xl sm:text-3xl uppercase tracking-tight"
                        style={{ fontFamily: "var(--font-bebas)" }}
                      >
                        {p.label}
                      </span>
                    </h3>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-md">
                      {p.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <p className="text-sm font-medium text-[var(--accent)] tracking-[0.2em] uppercase mb-3">
              Key Areas
            </p>
            <h2 className="mb-14">
              <span className="block text-xl sm:text-2xl font-serif italic text-[var(--text-muted)]">
                Governance
              </span>
              <span
                className="block text-4xl sm:text-5xl tracking-tight leading-[0.92]"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                Topics
              </span>
            </h2>
          </ScrollReveal>

          <div className="space-y-10">
            {topics.map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 80}>
                <div className="border-l-2 border-[var(--accent)] pl-8 hover:pl-10 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3">{t.title}</h3>
                  <p className="text-[var(--text-muted)] leading-relaxed max-w-3xl">
                    {t.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-20 text-center">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 bg-[var(--accent)] text-white px-7 py-3.5 rounded-full font-medium text-sm tracking-wide hover:bg-[var(--accent-hover)] transition-colors"
              >
                Discuss Governance Frameworks
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
