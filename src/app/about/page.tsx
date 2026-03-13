import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Recommendations from "@/components/Recommendations";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = { title: "About" };

const philosophy = [
  {
    first: "Strategy",
    rest: "Before Technology",
    text: "AI transformation must be driven by strategic intent, not technological enthusiasm. We begin with clarity on what the organization needs, not what technology can do.",
  },
  {
    first: "Governance",
    rest: "as Enabler",
    text: "Governance is not a constraint on innovation. It is the foundation for trust, scale, and sustainability. Well-designed frameworks enable organizations to move faster, not slower.",
  },
  {
    first: "People",
    rest: "at the Center",
    text: "Technology transforms organizations, but people determine outcomes. We design change programs that respect the complexity of human adaptation.",
  },
  {
    first: "Insight",
    rest: "Over Prescription",
    text: "We bring frameworks and experience, not cookie-cutter solutions. Every engagement is tailored to the organization\u2019s unique context, culture, and ambition.",
  },
];

const expertise = [
  "AI Transformation Strategy",
  "AI Governance & Risk",
  "Organizational Change Management",
  "Executive AI Education",
  "Workforce Transformation",
  "Board Advisory on AI",
];

const experience = [
  {
    role: "Founder & Managing Director",
    company: "Drive Change",
    period: "2009 \u2013 Present",
    description:
      "Advising boards, C-suite executives, and senior leadership teams on AI transformation strategy, governance, and organizational change. Designing transformation programs that are ambitious, responsible, and grounded in organizational reality.",
  },
  {
    role: "Associate Partner",
    company: "Accenture",
    period: "2004 \u2013 2009",
    description:
      "Led large engagement teams driving strategic and organizational change for Fortune 500 clients. Managed programs with budgets ranging from $30M to $150M, consistently delivering on time and under budget.",
  },
  {
    role: "Senior Manager",
    company: "Accenture",
    period: "1997 \u2013 2004",
    description:
      "Led cross-functional teams in strategy development, organization design, and change management across airlines, retail, and technology sectors.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Drive Change"
        subtitle="A boutique AI advisory firm helping organizations navigate the most consequential transformation of our time."
      />

      {/* Founder Bio */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <ScrollReveal>
              <div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src="/images/Shama-Patel-Photo.jpg"
                    alt="Shama Patel, Founder"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/shamadriveschange/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn Profile
                  </a>
                  <a
                    href="mailto:shama.patel@drivechange.biz"
                    className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                  >
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    shama.patel@drivechange.biz
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <div className="lg:col-span-2">
              <ScrollReveal>
                <p className="text-sm font-medium text-[var(--accent)] tracking-[0.2em] uppercase mb-4">
                  Founder
                </p>
                <h2 className="mb-6">
                  <span
                    className="text-4xl sm:text-5xl tracking-tight"
                    style={{ fontFamily: "var(--font-bebas)" }}
                  >
                    SHAMA{" "}
                  </span>
                  <span className="text-3xl sm:text-4xl font-serif italic text-[var(--text-secondary)]">
                    Patel
                  </span>
                </h2>
                <div className="divider-accent mb-8" />
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="space-y-5 text-[var(--text-muted)] leading-relaxed text-[16px]">
                  <p>
                    Shama Patel is a senior strategic advisor with decades of
                    experience in complex transformation. Her background spans
                    management consulting, organizational development, and
                    technology strategy at some of the world&apos;s most
                    demanding organizations.
                  </p>
                  <p>
                    She works with boards, C-suite executives, and senior
                    leadership teams to design AI transformation strategies that
                    are ambitious, responsible, and grounded in organizational
                    reality. Her philosophy balances strategic rigor with a deep
                    understanding of human dynamics.
                  </p>
                  <p>
                    Before founding Drive Change, Shama was an Associate Partner
                    at Accenture where she led large-scale transformation
                    programs for Fortune 500 companies. She has worked with
                    leaders across airlines, retail, technology, insurance, and
                    non-profit sectors on both sides of the Atlantic.
                  </p>
                  <p>
                    Shama maintains a professional presence in the{" "}
                    <strong>United States and Europe</strong> and is a{" "}
                    <strong>
                      native English speaker with working knowledge of German
                    </strong>
                    . She is an avid photographer whose travels inform her global
                    perspective on organizational culture.
                  </p>
                </div>
              </ScrollReveal>

              {/* Expertise */}
              <ScrollReveal delay={200}>
                <div className="mt-10">
                  <p className="text-sm font-medium text-[var(--accent)] tracking-[0.2em] uppercase mb-4">
                    Areas of Expertise
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {expertise.map((e) => (
                      <span
                        key={e}
                        className="bg-[var(--bg-alt)] text-[var(--text-secondary)] text-xs font-medium px-3.5 py-2 rounded-full"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20 sm:py-28 bg-[var(--bg-alt)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <p className="text-sm font-medium text-[var(--accent)] tracking-[0.2em] uppercase mb-3">
              Career
            </p>
            <h2 className="mb-14">
              <span className="block text-xl sm:text-2xl font-serif italic text-[var(--text-muted)]">
                Professional
              </span>
              <span
                className="block text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.92]"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                Experience
              </span>
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <ScrollReveal key={exp.role} delay={i * 100}>
                <div className="border-l-2 border-[var(--accent)] pl-8 hover:pl-10 transition-all duration-300">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-sm text-[var(--accent)] font-medium mt-1 mb-3">
                    {exp.company} &middot; {exp.period}
                  </p>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-3xl">
                    {exp.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Philosophy — NO CARDS, pure typography */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <p className="text-sm font-medium text-[var(--accent)] tracking-[0.2em] uppercase mb-3">
              Our Approach
            </p>
            <h2 className="mb-20">
              <span className="block text-xl sm:text-2xl font-serif italic text-[var(--text-muted)]">
                Consulting
              </span>
              <span
                className="block text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.92]"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                Philosophy
              </span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            {philosophy.map((p, i) => (
              <ScrollReveal key={p.first} delay={i * 100}>
                <div className="relative">
                  {/* Giant background number */}
                  <span
                    className="text-[8rem] sm:text-[10rem] leading-none tracking-tighter absolute -top-6 -left-2 select-none"
                    style={{
                      fontFamily: "var(--font-bebas)",
                      color: "rgba(7,183,237,0.08)",
                    }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative pt-16">
                    <h3 className="mb-4">
                      <span
                        className="text-2xl sm:text-3xl uppercase tracking-tight"
                        style={{ fontFamily: "var(--font-bebas)" }}
                      >
                        {p.first}
                      </span>{" "}
                      <span className="text-lg sm:text-xl font-serif italic text-[var(--text-secondary)]">
                        {p.rest}
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

      {/* Recommendations */}
      <Recommendations />

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-[var(--bg-alt)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="mb-6">
              <span className="block text-xl sm:text-2xl font-serif italic text-[var(--text-muted)]">
                Want a strategic partner,
              </span>
              <span
                className="block text-4xl sm:text-5xl tracking-tight leading-[0.92]"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                Not a vendor?
              </span>
            </h2>
            <p className="text-[var(--text-muted)] mb-10 text-lg leading-relaxed">
              We bring decades of transformation experience to help you navigate
              AI with clarity, confidence, and organizational readiness.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 bg-[var(--accent)] text-white px-7 py-3.5 rounded-full font-medium text-sm tracking-wide hover:bg-[var(--accent-hover)] transition-colors"
            >
              Start the Conversation
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
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
