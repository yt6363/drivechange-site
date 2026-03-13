import Link from "next/link";
import Image from "next/image";
import Recommendations from "@/components/Recommendations";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    title: "AI Transformation Strategy",
    description:
      "Enterprise-wide roadmaps that connect AI investments directly to business outcomes. Move from experimentation to scalable transformation.",
    href: "/ai-transformation",
  },
  {
    title: "AI Governance Frameworks",
    description:
      "Policies, oversight structures, and accountability systems that enable responsible, secure, and scalable AI deployment.",
    href: "/ai-governance",
  },
  {
    title: "Executive AI Education",
    description:
      "Board and C-suite AI literacy programs that equip leadership with the knowledge to govern AI strategically.",
    href: "/about",
  },
  {
    title: "Organizational Change for AI",
    description:
      "Workforce transformation, role redesign, and change management programs that prepare organizations for AI-enabled work.",
    href: "/organizational-change",
  },
  {
    title: "AI Risk & Responsibility",
    description:
      "Bias auditing, ethical frameworks, and regulatory readiness. Navigate the evolving compliance landscape with confidence.",
    href: "/ai-governance",
  },
  {
    title: "AI Operating Model Design",
    description:
      "Structures that enable scalable AI deployment: centers of excellence, cross-functional teams, and governance mechanisms.",
    href: "/ai-transformation",
  },
];

const struggles = [
  "Unclear strategy linking AI to business outcomes",
  "Fragmented data across organizational silos",
  "Absence of governance frameworks",
  "Workforce capability and readiness gaps",
  "Leadership misalignment on AI\u2019s role",
];

const insights = [
  {
    title: "Why AI Strategy Is Really Organizational Strategy",
    date: "March 2026",
    read: "6 min read",
    slug: "ai-strategy-organizational-strategy",
    preview:
      "The most common mistake organizations make is treating AI as a technology initiative.",
  },
  {
    title: "AI Governance Is Becoming a Board-Level Issue",
    date: "February 2026",
    read: "7 min read",
    slug: "ai-governance-board-level",
  },
  {
    title: "The Leadership Crisis of AI Transformation",
    date: "January 2026",
    read: "8 min read",
    slug: "leadership-crisis-ai-transformation",
  },
];

const clients = [
  { name: "Accenture", file: "Accenture-Logo.jpg" },
  { name: "IBM", file: "ibm-logo.jpg" },
  { name: "Google", file: "google-logo.jpg" },
  { name: "United Airlines", file: "UAL-Logo.jpg" },
  { name: "Kraft", file: "kraft-logo.jpg" },
  { name: "Sears", file: "sears-logo.jpg" },
  { name: "American Family Insurance", file: "amfam_logo.png" },
  { name: "Aon", file: "aon_logo_2.png" },
  { name: "NORC", file: "norc.png" },
  { name: "Lufthansa", file: "Lufthansa-Logo-image.png" },
];

const pillars = [
  {
    first: "AI",
    rest: "Strategy",
    text: "Define how AI creates competitive advantage across your organization. Move from experimentation to enterprise-wide transformation.",
    href: "/ai-transformation",
  },
  {
    first: "AI",
    rest: "Governance",
    text: "Ensure responsible, secure, and scalable deployment of AI. Build frameworks that enable trust, accountability, and regulatory readiness.",
    href: "/ai-governance",
  },
  {
    first: "Organizational",
    rest: "Transformation",
    text: "Prepare leaders, teams, and institutions for AI-enabled work. The human side determines success or failure.",
    href: "/organizational-change",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="min-h-[92vh] flex items-center relative pt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 w-full">
          <div className="max-w-5xl">
            <p
              className="text-sm font-medium text-[var(--accent)] tracking-[0.25em] uppercase mb-8"
              style={{
                animation:
                  "slideUp 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both",
              }}
            >
              AI Advisory &amp; Transformation
            </p>

            <h1 className="mb-10">
              {/* "AI" — massive condensed */}
              <span className="hero-word block">
                <span
                  className="text-[clamp(5rem,13vw,11rem)] leading-[0.82] tracking-tight"
                  style={{
                    animationDelay: "0.25s",
                    fontFamily: "var(--font-bebas)",
                  }}
                >
                  AI
                </span>
              </span>
              {/* "Transformation" — elegant serif italic */}
              <span className="hero-word block -mt-1 sm:-mt-3">
                <span
                  className="text-[clamp(2.5rem,5.5vw,4.8rem)] font-serif italic text-[var(--accent)] leading-[1.05]"
                  style={{ animationDelay: "0.4s" }}
                >
                  Transformation
                </span>
              </span>
              {/* "requires more than" — small body */}
              <span className="hero-word block mt-4 sm:mt-6 mb-3 sm:mb-4">
                <span
                  className="text-lg sm:text-xl text-[var(--text-muted)]"
                  style={{ animationDelay: "0.55s" }}
                >
                  requires more than
                </span>
              </span>
              {/* "Technology." — massive condensed */}
              <span className="hero-word block">
                <span
                  className="text-[clamp(5rem,13vw,11rem)] leading-[0.82] tracking-tight"
                  style={{
                    animationDelay: "0.7s",
                    fontFamily: "var(--font-bebas)",
                  }}
                >
                  Technology.
                </span>
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl text-[var(--text-muted)] max-w-2xl leading-relaxed"
              style={{
                animation:
                  "slideUp 0.85s 0.9s cubic-bezier(0.16,1,0.3,1) both",
              }}
            >
              We help boards and C-suite leaders design the strategy,
              governance, and organizational capabilities required to succeed in
              the age of AI.
            </p>

            <div
              className="flex flex-wrap items-center gap-5 mt-10"
              style={{
                animation:
                  "slideUp 0.85s 1.05s cubic-bezier(0.16,1,0.3,1) both",
              }}
            >
              <Link
                href="/ai-transformation"
                className="btn-primary inline-flex items-center gap-2.5 bg-[var(--accent)] text-white px-7 py-3.5 rounded-full font-medium text-sm tracking-wide hover:bg-[var(--accent-hover)] transition-colors"
              >
                Explore Our Approach
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
              <Link
                href="/about"
                className="link-animated text-sm font-medium text-[var(--text)] py-3.5"
              >
                Meet the Founder
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Three Pillars — no cards, pure typography ─── */}
      <section className="py-24 sm:py-32 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <p className="text-sm font-medium text-[var(--accent)] tracking-[0.2em] uppercase mb-3">
              What We Do
            </p>
            <h2 className="mb-20">
              <span className="block text-xl sm:text-2xl font-serif italic text-[var(--text-muted)]">
                Three Dimensions of
              </span>
              <span
                className="block text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.92]"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                AI Transformation
              </span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.first + p.rest} delay={i * 130}>
                <Link href={p.href} className="group block relative">
                  {/* Giant background number */}
                  <span
                    className="text-[9rem] sm:text-[11rem] leading-none tracking-tighter absolute -top-8 -left-1 select-none transition-colors duration-500 group-hover:text-[var(--accent)]/10"
                    style={{
                      fontFamily: "var(--font-bebas)",
                      color: "rgba(7,183,237,0.08)",
                    }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative pt-24">
                    <h3 className="mb-4">
                      <span
                        className="block text-3xl sm:text-4xl uppercase tracking-tight group-hover:text-[var(--accent)] transition-colors"
                        style={{ fontFamily: "var(--font-bebas)" }}
                      >
                        {p.first}
                      </span>
                      <span className="block text-xl sm:text-2xl font-serif italic text-[var(--text-secondary)] -mt-0.5">
                        {p.rest}
                      </span>
                    </h3>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5 max-w-sm">
                      {p.text}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[var(--accent)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                      Explore
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Organizations Struggle ─── */}
      <section className="py-24 sm:py-32 blue-gradient text-[var(--text-on-blue)] relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <p className="text-sm font-medium text-[var(--accent)] tracking-[0.2em] uppercase mb-4">
                The Challenge
              </p>
              <h2 className="mb-8">
                <span className="block text-xl sm:text-2xl font-serif italic text-white/40">
                  Why Organizations
                </span>
                <span
                  className="block text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.92] text-white"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  Struggle with AI
                </span>
              </h2>
              <p className="text-[var(--text-on-blue-muted)] text-lg leading-relaxed max-w-lg">
                Most organizations approach AI as a technology initiative. The
                ones that succeed treat it as an organizational transformation
                that touches strategy, talent, governance, and culture.
              </p>
            </ScrollReveal>

            <div className="space-y-1">
              {struggles.map((item, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="flex items-start gap-5 py-5 border-l-2 border-white/15 pl-6 hover:border-white transition-colors group">
                    <span
                      className="text-white/30 text-2xl leading-none select-none"
                      style={{ fontFamily: "var(--font-bebas)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[var(--text-on-blue)] text-sm font-medium group-hover:text-white transition-colors">
                      {item}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services — no cards, editorial grid ─── */}
      <section className="py-24 sm:py-32 bg-[var(--bg-alt)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <p className="text-sm font-medium text-[var(--accent)] tracking-[0.2em] uppercase mb-3">
              Our Services
            </p>
            <h2 className="mb-16">
              <span
                className="text-5xl sm:text-6xl lg:text-7xl tracking-tight"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                HOW{" "}
              </span>
              <span className="text-3xl sm:text-4xl font-serif italic text-[var(--text-secondary)]">
                We Help
              </span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.title} delay={i * 70}>
                <Link href={svc.href} className="group block">
                  <span
                    className="text-4xl leading-none tracking-tight text-[var(--accent)]/15 group-hover:text-[var(--accent)]/35 transition-colors"
                    style={{ fontFamily: "var(--font-bebas)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-start justify-between mt-3 mb-3">
                    <h3 className="text-[15px] font-semibold group-hover:text-[var(--accent)] transition-colors pr-4">
                      {svc.title}
                    </h3>
                    <svg
                      className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </div>
                  <div className="h-px bg-[var(--border)] mb-4 group-hover:bg-[var(--accent)] transition-colors duration-300" />
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                    {svc.description}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Insights — featured first ─── */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-sm font-medium text-[var(--accent)] tracking-[0.2em] uppercase mb-3">
                  Latest Thinking
                </p>
                <h2>
                  <span className="block text-xl sm:text-2xl font-serif italic text-[var(--text-muted)]">
                    Latest
                  </span>
                  <span
                    className="block text-5xl sm:text-6xl tracking-tight leading-[0.92]"
                    style={{ fontFamily: "var(--font-bebas)" }}
                  >
                    Insights
                  </span>
                </h2>
              </div>
              <Link
                href="/insights"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:gap-3 transition-all"
              >
                View all
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

          <div className="divide-y divide-[var(--border)]">
            {insights.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 100}>
                <Link
                  href={`/insights#${post.slug}`}
                  className="group flex items-center justify-between py-8"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-sm text-[var(--text-muted)] mb-3">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
                      <span>{post.read}</span>
                    </div>
                    <h3
                      className={`font-serif group-hover:text-[var(--accent)] transition-colors ${
                        i === 0
                          ? "text-3xl sm:text-4xl"
                          : "text-xl sm:text-2xl"
                      }`}
                    >
                      {post.title}
                    </h3>
                    {i === 0 && "preview" in post && (
                      <p className="text-[var(--text-muted)] mt-3 max-w-xl text-sm leading-relaxed">
                        {post.preview}
                      </p>
                    )}
                  </div>
                  <svg
                    className="w-6 h-6 text-[var(--border)] group-hover:text-[var(--accent)] transition-all duration-300 group-hover:translate-x-2 flex-shrink-0 ml-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Recommendations ─── */}
      <Recommendations />

      {/* ─── Client Logos Marquee ─── */}
      <section className="py-16 border-y border-[var(--border)] overflow-hidden">
        <p className="text-xs font-medium text-[var(--text-muted)] tracking-[0.2em] uppercase text-center mb-10">
          Trusted By
        </p>
        <div className="relative">
          <div className="marquee-track flex items-center gap-20 whitespace-nowrap">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="relative w-28 h-12 flex-shrink-0 grayscale opacity-25 hover:opacity-60 hover:grayscale-0 transition-all duration-500"
              >
                <Image
                  src={`/images/clients/${client.file}`}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-28 sm:py-36">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-sm font-medium text-[var(--accent)] tracking-[0.2em] uppercase mb-6">
              Let&apos;s Talk
            </p>
            <h2 className="mb-8">
              <span className="block text-2xl sm:text-3xl font-serif italic text-[var(--text-muted)]">
                Ready to Lead
              </span>
              <span
                className="block text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.92]"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                AI Transformation?
              </span>
            </h2>
            <p className="text-[var(--text-muted)] text-lg leading-relaxed max-w-2xl mx-auto mb-12">
              Whether you&apos;re defining your AI strategy, building governance
              frameworks, or preparing your organization for AI-driven change.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2.5 bg-[var(--accent)] text-white px-8 py-4 rounded-full font-medium text-sm tracking-wide hover:bg-[var(--accent-hover)] transition-colors"
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
