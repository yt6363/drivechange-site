import { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Contact" };

const reasons = [
  "You're defining or refining your AI strategy",
  "Your board needs AI governance frameworks",
  "You're preparing your organization for AI-driven change",
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
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Why reach out */}
            <div>
              <p className="text-xs font-semibold text-[var(--gold-dark)] uppercase tracking-[0.2em] mb-4">
                Why Reach Out
              </p>
              <h2 className="text-2xl font-bold mb-6">We can help if...</h2>
              <div className="divider-gold mb-8" />

              <ul className="space-y-4 mb-12">
                {reasons.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[var(--gold)] font-bold text-sm mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[var(--slate)] text-sm">{r}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-5 border-t border-[var(--border)] pt-8">
                <div>
                  <p className="text-xs text-[var(--slate)] uppercase tracking-wider mb-1">
                    Founder
                  </p>
                  <p className="font-semibold">Shama Patel</p>
                </div>
                <div>
                  <p className="text-xs text-[var(--slate)] uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:shama.patel@drivechange.biz"
                    className="text-[var(--navy)] font-medium hover:text-[var(--gold-dark)] transition-colors"
                  >
                    shama.patel@drivechange.biz
                  </a>
                </div>
                <div>
                  <p className="text-xs text-[var(--slate)] uppercase tracking-wider mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+18479150870"
                    className="text-[var(--navy)] font-medium hover:text-[var(--gold-dark)] transition-colors"
                  >
                    +1 (847) 915-0870
                  </a>
                </div>
                <div>
                  <p className="text-xs text-[var(--slate)] uppercase tracking-wider mb-1">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/shamadriveschange/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--navy)] font-medium hover:text-[var(--gold-dark)] transition-colors"
                  >
                    linkedin.com/in/shamadriveschange
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-[var(--muted-bg)] rounded-sm p-8 sm:p-10">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[var(--charcoal)] uppercase tracking-wider mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2.5 border border-[var(--border)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/50 focus:border-[var(--gold)] bg-white text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="org" className="block text-xs font-semibold text-[var(--charcoal)] uppercase tracking-wider mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="org"
                    className="w-full px-4 py-2.5 border border-[var(--border)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/50 focus:border-[var(--gold)] bg-white text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[var(--charcoal)] uppercase tracking-wider mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2.5 border border-[var(--border)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/50 focus:border-[var(--gold)] bg-white text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="challenge" className="block text-xs font-semibold text-[var(--charcoal)] uppercase tracking-wider mb-2">
                    Primary Challenge
                  </label>
                  <select
                    id="challenge"
                    className="w-full px-4 py-2.5 border border-[var(--border)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/50 focus:border-[var(--gold)] bg-white text-sm text-[var(--charcoal)]"
                  >
                    <option value="">Select a topic</option>
                    <option>AI Transformation Strategy</option>
                    <option>AI Governance</option>
                    <option>Organizational Change</option>
                    <option>Executive AI Education</option>
                    <option>AI Risk & Responsibility</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[var(--charcoal)] uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2.5 border border-[var(--border)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/50 focus:border-[var(--gold)] bg-white text-sm resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[var(--navy)] text-white py-3 rounded-sm font-semibold text-sm tracking-wide hover:bg-[var(--navy-light)] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
