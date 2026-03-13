import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = { title: "AI Transformation" };

const sections = [
  {
    title: "Strategy",
    text: "We connect AI investments directly to business outcomes. Moving beyond pilot projects, we help organizations develop enterprise-wide AI strategies that identify high-value use cases, build prioritization frameworks, and align with corporate strategy.",
  },
  {
    title: "Operating Model",
    text: "AI requires operating models that support cross-functional collaboration, data-driven decision-making, and rapid experimentation. We design organizational structures, governance mechanisms, and process frameworks that enable scale.",
  },
  {
    title: "Capability Development",
    text: "AI demands new capabilities at every level, from data literacy for frontline teams to AI fluency for the C-suite. We design tailored programs that equip leaders and teams to work effectively with AI systems.",
  },
  {
    title: "Governance",
    text: "Effective AI governance creates accountability and reduces risk. We help build data management policies, algorithmic oversight processes, and ethical AI standards that enable responsible deployment at scale.",
  },
  {
    title: "Change Management",
    text: "AI transformation requires careful change management to address resistance, build buy-in, and create the cultural conditions for success. We design communication strategies, stakeholder engagement plans, and leadership alignment programs.",
  },
];

export default function AITransformationPage() {
  return (
    <>
      <PageHero
        title="AI Transformation"
        subtitle="AI is not just a technology shift. It fundamentally changes how organizations make decisions, allocate resources, and create value."
      />

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed max-w-3xl mb-20">
              Artificial intelligence fundamentally changes how organizations
              make decisions, allocate resources, and create value. It reshapes
              roles, expertise, and power structures. Leaders who treat AI as
              merely a technology initiative risk missing the deeper
              transformation it demands.
            </p>
          </ScrollReveal>

          <div className="space-y-0 divide-y divide-[var(--border)]">
            {sections.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <div className="py-12 first:pt-0 last:pb-0 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
                  <div className="lg:col-span-4">
                    <span
                      className="text-4xl leading-none tracking-tight text-[var(--accent)]/15"
                      style={{ fontFamily: "var(--font-bebas)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2">
                      <span
                        className="text-2xl sm:text-3xl uppercase tracking-tight"
                        style={{ fontFamily: "var(--font-bebas)" }}
                      >
                        {s.title}
                      </span>
                    </h3>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-[var(--text-muted)] leading-relaxed text-lg">
                      {s.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-24 blue-gradient text-white rounded-2xl p-10 sm:p-14 relative overflow-hidden">
              <div className="relative z-10">
                <div className="divider-accent mb-6" />
                <h3 className="mb-4">
                  <span className="block text-xl sm:text-2xl font-serif italic text-white/50">
                    Ready to define your
                  </span>
                  <span
                    className="block text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
                    style={{ fontFamily: "var(--font-bebas)" }}
                  >
                    AI Transformation Strategy?
                  </span>
                </h3>
                <p className="text-white/45 mb-8 max-w-2xl text-lg">
                  We help organizations move from AI experimentation to
                  enterprise-wide transformation with clear strategy,
                  governance, and change management.
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
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
