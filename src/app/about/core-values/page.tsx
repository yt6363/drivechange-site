import { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Core Values" };

const values = [
  "Change is inevitable, leaders are not",
  "Embrace change or it will embrace you",
  "Do unto others as you would have done unto you",
  'Leaders must "be" the change',
  "Leaders accept what cannot be changed",
  "Destinations are transitory, journeys remain forever",
  "We do business with people we like",
];

export default function CoreValuesPage() {
  return (
    <>
      <PageHero title="Our Core Values" />
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-[var(--muted)] leading-relaxed mb-10">
            At Drive Change, our methods, work practices and management
            philosophy is based on a set of core values that revolve around
            corporate and personal responsibility:
          </p>
          <div className="space-y-4">
            {values.map((value, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-[var(--muted-bg)] rounded-lg p-5"
              >
                <span className="text-[var(--accent)] font-bold text-lg mt-0.5">
                  {i + 1}
                </span>
                <p className="text-[var(--foreground)] font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
