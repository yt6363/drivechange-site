import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import IndustryNews from "@/components/IndustryNews";

export const metadata: Metadata = { title: "Insights" };

const articles = [
  {
    slug: "ai-strategy-organizational-strategy",
    title: "Why AI Strategy Is Really Organizational Strategy",
    date: "March 2026",
    read: "6 min read",
    summary:
      "The most common mistake organizations make is treating AI as a technology initiative. True AI strategy is organizational strategy. It touches operating models, talent, governance, and culture. Without addressing these dimensions, even the most sophisticated AI investments will fail to deliver their potential.",
    body: [
      "Every organization wants an AI strategy. Few have one that actually works. The reason is simple: most AI strategies focus on technology, when they should focus on the organization.",
      "An effective AI strategy answers questions that go far beyond technology selection. How will AI change our competitive positioning? What decisions should AI inform versus make? How will roles evolve? What governance do we need? These are organizational questions, not technical ones.",
      "The organizations succeeding with AI share a common trait: they treat AI transformation as a business transformation that happens to involve technology, not a technology initiative that happens to affect the business.",
    ],
  },
  {
    slug: "ai-governance-board-level",
    title: "AI Governance Is Becoming a Board-Level Issue",
    date: "February 2026",
    read: "7 min read",
    summary:
      "AI governance is a new fiduciary responsibility for boards. From algorithmic bias to regulatory compliance, AI risks can no longer be delegated to technology teams alone. Boards need frameworks, knowledge, and reporting structures to govern AI effectively.",
    body: [
      "For most of the history of corporate governance, technology was a management concern, not a board concern. AI is changing that equation.",
      "The EU AI Act, evolving regulatory expectations, and high-profile AI failures have made it clear: AI governance is a board-level responsibility. Directors need to understand what AI systems their organizations deploy, what risks those systems introduce, and what oversight mechanisms exist.",
      "The boards that get this right will treat AI governance not as a compliance exercise, but as a strategic capability, one that enables faster, more confident deployment of AI across the enterprise.",
    ],
  },
  {
    slug: "leadership-crisis-ai-transformation",
    title: "The Leadership Crisis of AI Transformation",
    date: "January 2026",
    read: "8 min read",
    summary:
      "We are facing a historic leadership gap. Most executives are expected to lead AI transformation without the frameworks, knowledge, or support they need. This is not an individual failure. It is a systemic readiness problem that organizations must address.",
    body: [
      "Ask any CEO whether AI is a strategic priority and you will hear an emphatic yes. Ask them how they plan to lead their organization through AI transformation, and the answer becomes considerably less clear.",
      "This is not a criticism of individual leaders. It reflects a systemic problem: we are asking executives to lead a transformation unlike any they have experienced, with frameworks designed for a different era.",
      "Addressing this leadership gap requires more than executive education. It requires new mental models for leadership in an AI-enabled world, new governance structures, and new ways of thinking about organizational capability.",
    ],
  },
  {
    slug: "reskilling-human-ai-collaboration",
    title: "Reskilling the Workforce for Human-AI Collaboration",
    date: "December 2025",
    read: "5 min read",
    summary:
      "The challenge is not replacement but collaboration. How do organizations prepare professionals for AI-augmented work? The answer goes beyond technical training to rethinking professional identity itself.",
    body: [
      "The conversation about AI and the workforce has been dominated by fears of replacement. The more pressing challenge is collaboration: how do professionals work effectively alongside AI systems?",
      "Effective reskilling programs address three dimensions: technical skills (data literacy, AI tool proficiency), cognitive skills (critical thinking, judgment in ambiguous situations), and adaptive skills (comfort with ambiguity, continuous learning mindset).",
      "The organizations that get reskilling right will not just train their people to use AI tools. They will help them reimagine what it means to be a professional in their field.",
    ],
  },
  {
    slug: "designing-organizations-machine-intelligence",
    title: "Designing Organizations for the Age of Machine Intelligence",
    date: "November 2025",
    read: "9 min read",
    summary:
      "Traditional organizational structures were designed for human-only workflows. The age of machine intelligence demands new organizational designs that optimize human-machine collaboration, distributed decision-making, and continuous adaptation.",
    body: [
      "Every organization is designed. The question is whether it is designed for the challenges it faces. Most organizations today are still structured for an era of human-only workflows, hierarchical decision-making, and stable, predictable environments.",
      "AI introduces fundamentally different dynamics: decisions that can be made faster than human processing allows, capabilities that cross traditional functional boundaries, and continuous learning that demands organizational agility.",
      "The organizations that thrive in the age of machine intelligence will be those that design for these dynamics rather than retrofit AI into structures designed for a different era.",
    ],
  },
];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        title="Insights"
        subtitle="Perspectives on AI transformation, governance, and the future of organizational leadership."
      />
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-0">
            {articles.map((a, idx) => (
              <ScrollReveal key={a.slug} delay={idx * 80}>
                <article
                  id={a.slug}
                  className="scroll-mt-28 py-16 first:pt-0 border-b border-[var(--border)] last:border-b-0"
                >
                  <div className="flex items-center gap-3 text-sm text-[var(--text-muted)] mb-5">
                    <span>{a.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
                    <span>{a.read}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-5">
                    {a.title}
                  </h2>
                  <p className="text-[var(--accent)] font-medium text-sm mb-8 max-w-3xl leading-relaxed">
                    {a.summary}
                  </p>
                  <div className="space-y-5">
                    {a.body.map((p, i) => (
                      <p
                        key={i}
                        className="text-[var(--text-muted)] leading-relaxed text-[16px]"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <IndustryNews />
    </>
  );
}
