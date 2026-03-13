import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Drive Change"
        subtitle="Helping leaders drive change from ideation through implementation."
      />
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-[var(--muted)] leading-relaxed mb-6">
            We live in a time of unprecedented change. Leaders are grappling
            with an economic downturn, not experienced by current generations,
            and its impact on their companies and personal lives. Drive Change
            helps leaders drive change from ideation through implementation,
            using methods and frameworks that bring transparency to a process
            that often emphasizes individual charisma and intuition.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">
            Who is the audience?
          </h2>
          <p className="text-[var(--muted)] leading-relaxed mb-6">
            Services are designed for executives who strive to transform their
            organization into industry leaders and drive change programs. A
            change program could result from process modification, introduction
            of new technology, response to market forces, merger or acquisition,
            promotions, lateral moves, organizational re-alignment, etc. If you
            are currently engaged or preparing for change, Drive Change can
            help.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">How do we work?</h2>
          <p className="text-[var(--muted)] leading-relaxed mb-6">
            Organizational skills are developed through structured methods,
            frameworks and mentoring. Projects are usually staffed with 1-2
            skilled practitioners working closely with management and team
            members. The goal is to leave behind as much learning as possible
            and de-mystify practices. We lead the engagement or serve as coaches
            and mentors. Many engagements are completed in 4-6 week timeframes.
          </p>
          <p className="text-[var(--muted)] leading-relaxed mb-6">
            Shama Patel, Drive Change&apos;s founder is engaged on all projects
            and draws upon the skills and experience of professionals in her
            networks, as required. See Shama&apos;s background at{" "}
            <Link
              href="/profile"
              className="text-[var(--primary)] font-medium hover:text-[var(--accent)]"
            >
              Profile
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">
            What does a typical engagement look like?
          </h2>
          <p className="text-[var(--muted)] leading-relaxed">
            While each engagement is tailored to the client, many are
            combinations of &ldquo;out-of-the-box&rdquo; offerings that allow
            the client to pick and choose from a range of options. Change is not
            and cannot be rigid, it requires the ability to think and act
            fluidly in a dynamic environment. Likewise, our offerings are fluid,
            yet based on a solid foundation of experience, structure, tools and
            techniques. We share many of our frameworks to ensure a common
            understanding of what will be accomplished and how it fits with the
            client&apos;s objectives.
          </p>
        </div>
      </section>
    </>
  );
}
