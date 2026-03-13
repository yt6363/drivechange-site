import { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you."
      />
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-1">
                    Shama Patel
                  </h3>
                  <p className="text-[var(--muted)]">Managing Director</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:shama.patel@drivechange.biz"
                    className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors"
                  >
                    shama.patel@drivechange.biz
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-1">
                    Phone
                  </h3>
                  <a
                    href="tel:+18479150870"
                    className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors"
                  >
                    +1 (847) 915-0870
                  </a>
                </div>
              </div>

              <div className="mt-12 bg-[var(--muted-bg)] rounded-lg p-6">
                <h3 className="font-semibold mb-2">About Drive Change LLP</h3>
                <p className="text-sm text-[var(--muted)]">
                  Drive Change LLP is a registered business entity in Illinois,
                  USA and has both business and liability insurance.
                </p>
              </div>
            </div>

            <div className="bg-[var(--muted-bg)] rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[var(--primary)] text-white py-3 rounded-md font-semibold hover:bg-[var(--primary-light)] transition-colors"
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
