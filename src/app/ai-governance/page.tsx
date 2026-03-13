import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

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

      <section className="py-20 sm:py-28 bg-[var(--warm-white)]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-xs font-semibold text-[var(--gold-dark)] uppercase tracking-[0.2em] mb-4">
            Framework
          </p>
          <h2 className="text-3xl font-bold mb-6">Four Pillars of AI Governance</h2>
          <div className="divider-gold mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {pillars.map((p, i) => (
              <div key={p.label} className="bg-white border border-[var(--border)] rounded-sm p-6">
                <span className="text-xs text-[var(--gold-dark)] font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-3">{p.label}</h3>
                <p className="text-[var(--slate)] text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-xs font-semibold text-[var(--gold-dark)] uppercase tracking-[0.2em] mb-4">
            Key Areas
          </p>
          <h2 className="text-3xl font-bold mb-6">Governance Topics</h2>
          <div className="divider-gold mb-12" />

          <div className="space-y-12">
            {topics.map((t) => (
              <div key={t.title} className="border-l-2 border-[var(--gold)] pl-8">
                <h3 className="text-xl font-semibold mb-3">{t.title}</h3>
                <p className="text-[var(--slate)] leading-relaxed max-w-3xl">{t.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              href="/contact"
              className="bg-[var(--navy)] hover:bg-[var(--navy-light)] text-white px-8 py-3 rounded-sm font-semibold text-sm tracking-wide transition-colors inline-block"
            >
              Discuss Governance Frameworks
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
