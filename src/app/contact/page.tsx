import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = { title: "Contact" };

const reasons = [
  "You\u2019re defining or refining your AI strategy",
  "Your board needs AI governance frameworks",
  "You\u2019re preparing your organization for AI-driven change",
  "Your leadership team needs AI education",
  "You want a strategic partner, not a vendor",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Start the conversation about your AI transformation."
      />
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left - Why reach out */}
            <ScrollReveal>
              <div>
                <p className="text-sm font-medium text-[var(--accent)] tracking-[0.2em] uppercase mb-4">
                  Why Reach Out
                </p>
                <h2 className="text-2xl sm:text-3xl mb-6">
                  We can help if...
                </h2>
                <div className="divider-accent mb-8" />

                <ul className="space-y-4 mb-12">
                  {reasons.map((r, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-[var(--accent)] font-serif text-lg leading-none mt-0.5 select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[var(--text-muted)] text-sm">
                        {r}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-5 border-t border-[var(--border)] pt-8">
                  <div>
                    <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
                      Founder
                    </p>
                    <p className="font-semibold">Shama Patel</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:shama.patel@drivechange.biz"
                      className="text-[var(--text)] font-medium hover:text-[var(--accent)] transition-colors"
                    >
                      shama.patel@drivechange.biz
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
                      LinkedIn
                    </p>
                    <a
                      href="https://www.linkedin.com/in/shamadriveschange/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text)] font-medium hover:text-[var(--accent)] transition-colors"
                    >
                      linkedin.com/in/shamadriveschange
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Form */}
            <ScrollReveal delay={150}>
              <div className="bg-[var(--bg-alt)] rounded-2xl p-8 sm:p-10">
                <h2 className="text-2xl sm:text-3xl mb-8">Send a Message</h2>
                <form className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] bg-white text-sm transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="org"
                      className="block text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-2"
                    >
                      Organization
                    </label>
                    <input
                      type="text"
                      id="org"
                      className="w-full px-4 py-3 border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] bg-white text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] bg-white text-sm transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="challenge"
                      className="block text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-2"
                    >
                      Primary Challenge
                    </label>
                    <select
                      id="challenge"
                      className="w-full px-4 py-3 border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] bg-white text-sm text-[var(--text-secondary)] transition-all"
                    >
                      <option value="">Select a topic</option>
                      <option>AI Transformation Strategy</option>
                      <option>AI Governance</option>
                      <option>Organizational Change</option>
                      <option>Executive AI Education</option>
                      <option>AI Risk &amp; Responsibility</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] bg-white text-sm resize-none transition-all"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full bg-[var(--accent)] text-white py-3.5 rounded-full font-medium text-sm tracking-wide hover:bg-[var(--accent-hover)] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
