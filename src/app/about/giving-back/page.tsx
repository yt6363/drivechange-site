import { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Giving Back" };

const causes = [
  {
    title: "Environment and Health",
    orgs: [
      "Nature Conservancy",
      "Environmental Defense Fund (EDF)",
      "National Resource Defense (NRDC)",
      "Partners in Health",
    ],
  },
  {
    title: "Local Communities",
    orgs: [
      "Chicago Food Depository",
      "Oak Park River Forest Food Pantry",
      "Chicago Art Institute",
      "Spende Zeit Dusseldorf",
    ],
  },
  {
    title: "Human & Animal Rights",
    orgs: [
      "American Civil Liberties (ACLU)",
      "India Development Services (Pravah)",
      "Ethical Treatment of Animals (PETA)",
      "Non Human Rights Project",
    ],
  },
];

export default function GivingBackPage() {
  return (
    <>
      <PageHero
        title="To Give is to Receive"
        subtitle="We are committed to contributing to our community."
      />
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-[var(--muted)] leading-relaxed mb-12">
            At Drive Change, we are committed to contributing to our community.
            We provide both financial support and pro-bono services to
            non-profits committed to fostering cross-cultural understanding and
            improving the human condition. A portion of our revenues support the
            following causes and organizations:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {causes.map((cause) => (
              <div
                key={cause.title}
                className="bg-[var(--muted-bg)] rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-4">{cause.title}</h3>
                <ul className="space-y-2">
                  {cause.orgs.map((org) => (
                    <li
                      key={org}
                      className="flex items-start gap-2 text-sm text-[var(--muted)]"
                    >
                      <span className="text-[var(--accent)] mt-1 text-xs">
                        &#9679;
                      </span>
                      {org}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-12 text-[var(--muted)] text-center">
            If you are a non-profit interested in our pro-bono service, please{" "}
            <a
              href="/contact"
              className="text-[var(--primary)] font-medium hover:text-[var(--accent)]"
            >
              contact us
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
