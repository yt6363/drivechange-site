import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

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
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed max-w-3xl mb-20">
              AI transformation changes how teams collaborate, how
              professionals define their expertise, and how leaders exercise
              judgment. Organizations that neglect the human dimension risk not
              only failed implementations, but lasting damage to engagement,
              trust, and institutional capability.
            </p>
          </ScrollReveal>

          <div className="space-y-0 divide-y divide-[var(--border)]">
            {topics.map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 80}>
                <div className="py-12 first:pt-0 last:pb-0">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
                    <div className="lg:col-span-4">
                      <span
                        className="text-4xl leading-none tracking-tight text-[var(--accent)]/15"
                        style={{ fontFamily: "var(--font-bebas)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-semibold mt-2">
                        {t.title}
                      </h3>
                    </div>
                    <div className="lg:col-span-8">
                      <p className="text-[var(--text-muted)] leading-relaxed text-lg">
                        {t.text}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-20 bg-[var(--bg-alt)] rounded-2xl p-10 sm:p-14">
              <div className="divider-accent mb-6" />
              <h3 className="mb-4">
                <span className="block text-xl sm:text-2xl font-serif italic text-[var(--text-muted)]">
                  Preparing your organization
                </span>
                <span
                  className="block text-3xl sm:text-4xl tracking-tight"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  For AI?
                </span>
              </h3>
              <p className="text-[var(--text-muted)] mb-8 max-w-2xl text-lg">
                We design change programs that respect the complexity of human
                adaptation while driving the organizational transformation AI
                demands.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 bg-[var(--accent)] text-white px-7 py-3.5 rounded-full font-medium text-sm tracking-wide hover:bg-[var(--accent-hover)] transition-colors"
              >
                Let&apos;s Talk
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
