import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Organizational Change" };

const topics = [
  {
    title: "Workforce Reskilling",
    text: "AI redefines tasks, not just automates them. We design reskilling programs that build data literacy, AI collaboration skills, and critical thinking, equipping professionals with competencies that complement machine intelligence.",
  },
  {
    title: "New Professional Identities",
    text: "AI is redefining what it means to be a professional in nearly every field. We help organizations redefine career pathways and role archetypes, supporting the transition as professionals navigate evolving identities.",
  },
  {
    title: "Decision Authority Shifts",
    text: "AI changes who makes decisions and how. We help redesign decision frameworks: when human judgment takes precedence, when AI informs decisions, and when systems can act autonomously.",
  },
  {
    title: "Leadership in AI-Enabled Organizations",
    text: "Leading in the age of AI requires a new kind of leadership, one that balances technological ambition with human empathy, drives innovation while managing disruption, and fosters trust in systems not yet fully understood.",
  },
  {
    title: "Culture & Change Readiness",
    text: "Culture determines whether AI transformation succeeds or fails. We assess change readiness, design cultural interventions, and build change management programs that create the conditions for AI to thrive.",
  },
];

export default function OrganizationalChangePage() {
  return (
    <>
      <PageHero
        title="Organizational Change"
        subtitle="AI transformation is fundamentally about people. Technology transforms organizations, but people determine outcomes."
      />

      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16">
            <p className="text-lg text-[var(--slate)] leading-relaxed">
              AI transformation changes how teams collaborate, how professionals
              define their expertise, and how leaders exercise judgment.
              Organizations that neglect the human dimension risk not only failed
              implementations, but lasting damage to engagement, trust, and
              institutional capability.
            </p>
          </div>

          <div className="space-y-0 divide-y divide-[var(--border)]">
            {topics.map((t, i) => (
              <div key={t.title} className="py-10 first:pt-0 last:pb-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-4">
                    <span className="text-xs text-[var(--gold-dark)] font-semibold tracking-wider">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-semibold mt-1">{t.title}</h3>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-[var(--slate)] leading-relaxed">{t.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-[var(--muted-bg)] rounded-sm p-10 sm:p-14">
            <div className="divider-gold mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              Preparing your organization for AI?
            </h3>
            <p className="text-[var(--slate)] mb-8 max-w-2xl">
              We design change programs that respect the complexity of human
              adaptation while driving the organizational transformation AI
              demands.
            </p>
            <Link
              href="/contact"
              className="bg-[var(--navy)] hover:bg-[var(--navy-light)] text-white px-8 py-3 rounded-sm font-semibold text-sm tracking-wide transition-colors inline-block"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
