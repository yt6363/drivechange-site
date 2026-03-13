import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

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
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16">
            <p className="text-lg text-[var(--slate)] leading-relaxed">
              Artificial intelligence fundamentally changes how organizations
              make decisions, allocate resources, and create value. It reshapes
              roles, expertise, and power structures. Leaders who treat AI as
              merely a technology initiative risk missing the deeper
              transformation it demands.
            </p>
          </div>

          <div className="space-y-16">
            {sections.map((s, i) => (
              <div key={s.title} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4">
                  <span className="text-xs text-[var(--gold-dark)] font-semibold tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-bold mt-2">{s.title}</h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-[var(--slate)] leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-12 border-t border-[var(--border)]">
            <div className="bg-[var(--navy)] text-white rounded-sm p-10 sm:p-14">
              <div className="divider-gold mb-6" style={{ background: "var(--gold)" }} />
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to define your AI transformation strategy?
              </h3>
              <p className="text-white/70 mb-8 max-w-2xl">
                We help organizations move from AI experimentation to
                enterprise-wide transformation with clear strategy, governance,
                and change management.
              </p>
              <Link
                href="/contact"
                className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--navy)] px-8 py-3 rounded-sm font-semibold text-sm tracking-wide transition-colors inline-block"
              >
                Start the Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
