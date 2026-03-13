import Link from "next/link";
import Image from "next/image";
import Recommendations from "@/components/Recommendations";
import AINewsDialog from "@/components/AINewsDialog";

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
  "Leadership misalignment on AI's role",
];

const insights = [
  {
    title: "Why AI Strategy Is Really Organizational Strategy",
    date: "March 2026",
    read: "6 min read",
    slug: "ai-strategy-organizational-strategy",
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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--navy)] text-white py-24 sm:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy)] via-[var(--navy-light)] to-[var(--navy)]" />
        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="divider-gold mb-8" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] max-w-4xl">
            AI Transformation Requires More Than Technology
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed">
            Organizations are rushing to adopt AI. Few are prepared for the
            transformation it demands. Drive Change helps leaders design the
            strategy, governance, and organizational capabilities required to
            succeed in the age of AI.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/ai-transformation"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--navy)] px-8 py-3 rounded-sm font-semibold text-sm tracking-wide transition-colors"
            >
              Explore AI Transformation
            </Link>
            <AINewsDialog />
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 sm:py-28 bg-[var(--warm-white)]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-xs font-semibold text-[var(--gold-dark)] uppercase tracking-[0.2em] mb-4">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Three Pillars of AI Transformation
          </h2>
          <div className="divider-gold mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                label: "AI Strategy",
                text: "Define how AI creates competitive advantage across your organization. Move from experimentation to enterprise-wide transformation.",
                href: "/ai-transformation",
              },
              {
                label: "AI Governance",
                text: "Ensure responsible, secure, and scalable deployment of AI. Build frameworks that enable trust, accountability, and regulatory readiness.",
                href: "/ai-governance",
              },
              {
                label: "Organizational Transformation",
                text: "Prepare leaders, teams, and institutions for AI-enabled work. The human side determines success or failure.",
                href: "/organizational-change",
              },
            ].map((pillar) => (
              <Link
                key={pillar.label}
                href={pillar.href}
                className="group"
              >
                <div className="h-0.5 w-8 bg-[var(--gold)] mb-6 group-hover:w-16 transition-all" />
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--gold-dark)] transition-colors">
                  {pillar.label}
                </h3>
                <p className="text-[var(--slate)] text-sm leading-relaxed">
                  {pillar.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Organizations Struggle */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold text-[var(--gold-dark)] uppercase tracking-[0.2em] mb-4">
                The Challenge
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Why Organizations Struggle with AI
              </h2>
              <div className="divider-gold mb-8" />
              <p className="text-[var(--slate)] leading-relaxed">
                Most organizations approach AI as a technology initiative. The
                ones that succeed treat it as an organizational transformation
                that touches strategy, talent, governance, and culture.
              </p>
            </div>
            <div className="space-y-4">
              {struggles.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-[var(--muted-bg)] rounded-sm p-5"
                >
                  <span className="text-[var(--gold)] font-bold text-lg leading-none mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[var(--foreground)] text-sm font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-28 bg-[var(--warm-white)]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-xs font-semibold text-[var(--gold-dark)] uppercase tracking-[0.2em] mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            How We Help
          </h2>
          <div className="divider-gold mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="group bg-white border border-[var(--border)] rounded-sm p-6 hover:border-[var(--gold)]/40 hover:shadow-sm transition-all"
              >
                <h3 className="text-base font-semibold mb-3 group-hover:text-[var(--gold-dark)] transition-colors">
                  {svc.title}
                </h3>
                <p className="text-[var(--slate)] text-sm leading-relaxed">
                  {svc.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold text-[var(--gold-dark)] uppercase tracking-[0.2em] mb-4">
                Latest Thinking
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">Insights</h2>
            </div>
            <Link
              href="/insights"
              className="hidden sm:block text-sm font-medium text-[var(--gold-dark)] hover:text-[var(--gold)] transition-colors"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="divider-gold mb-12" />

          <div className="space-y-0 divide-y divide-[var(--border)]">
            {insights.map((post) => (
              <Link
                key={post.slug}
                href={`/insights#${post.slug}`}
                className="flex items-start justify-between py-6 group"
              >
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-[var(--gold-dark)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[var(--slate)] mt-1">
                    {post.date} &middot; {post.read}
                  </p>
                </div>
                <span className="text-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <Recommendations />

      {/* Clients */}
      <section className="py-20 sm:py-24 bg-[var(--warm-white)]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-xs font-semibold text-[var(--gold-dark)] uppercase tracking-[0.2em] mb-4 text-center">
            Trusted By
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-8 items-center justify-items-center mt-8">
            {[
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
            ].map((client) => (
              <div
                key={client.name}
                className="relative w-24 h-14 sm:w-28 sm:h-16 grayscale opacity-40 hover:opacity-70 hover:grayscale-0 transition-all"
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

      {/* CTA */}
      <section className="bg-[var(--navy)] text-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="divider-gold mx-auto mb-8" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Lead AI Transformation?
          </h2>
          <p className="text-white/70 mb-10 text-lg leading-relaxed">
            Whether you are defining your AI strategy, building governance
            frameworks, or preparing your organization for AI-driven change,
            we can help.
          </p>
          <Link
            href="/contact"
            className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--navy)] px-8 py-3 rounded-sm font-semibold text-sm tracking-wide transition-colors inline-block"
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
