import { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Shama Patel - Founder" };

const experience = [
  {
    title: "Managing Director and Founder at Drive Change",
    period: "February 2009 - Present",
    description:
      "Help business leaders drive large scale transformation from ideation through implementation, using structured methods and frameworks. Engagements range from strategy definition and cross-functional alignment; governance and organization design; facilitation and conflict resolution; leadership and team development; and executive coaching and mentoring across a wide variety of industries.",
  },
  {
    title: "Associate Partner at Accenture",
    period: "September 2004 - February 2009",
    description:
      "Led large engagement teams to help drive strategic and organizational change for client companies. Developed and led large programs with budgets ranging from $30 to $150M, consistently delivering projects on time and under budget.",
  },
  {
    title: "Senior Manager at Accenture",
    period: "1997 - 2004",
    description:
      "Led cross-functional teams in strategy development, organization design, and change management across multiple industries including airlines, retail, and technology.",
  },
];

export default function ProfilePage() {
  return (
    <>
      <PageHero title="Shama Patel" subtitle="Founder, Drive Change" />
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="/images/Shama-Patel-Photo.jpg"
                alt="Shama Patel"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-[var(--muted)] leading-relaxed mb-4">
                Shama Patel is the Founder of Drive Change with over 20 years
                experience advising executives at Fortune 500, midsize and
                non-profit organizations bringing a broad range of experiences
                and methodologies that are tailored to fit the situation.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                Her philosophy for driving change is grounded in values driven
                and motivational leadership and she takes great pride in helping
                teams identify and develop their potential to own their future.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                Her counsel is both philosophical and pragmatic, providing
                access to a broad range of strategic frameworks, templates,
                roadmaps and situational advice tailored to meet diverse
                conditions and create learnings that last a lifetime.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                Shama maintains a professional presence in the{" "}
                <strong>United States and Europe</strong> and is authorized to
                work at either location. She is a{" "}
                <strong>
                  native English speaker with a basic knowledge of German
                </strong>
                , which she continues to improve.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-8">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((exp) => (
              <div
                key={exp.title}
                className="border-l-4 border-[var(--primary)] pl-6"
              >
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-sm text-[var(--accent)] mb-2">
                  {exp.period}
                </p>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[var(--muted-bg)] rounded-lg p-6">
            <p className="text-[var(--muted)] text-sm">
              Shama is an avid traveller and an amateur photographer. You can
              view her photo stories at{" "}
              <a
                href="https://shama202.exposure.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary)] font-medium hover:text-[var(--accent)]"
              >
                My Photo Stories
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
