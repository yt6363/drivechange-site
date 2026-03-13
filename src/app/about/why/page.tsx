import { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Why Drive Change?" };

export default function WhyPage() {
  return (
    <>
      <PageHero title="Why Drive Change?" />
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/why-drive-change.jpg"
                alt="Why Drive Change"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-[var(--muted)] leading-relaxed">
                In the 15+ years of working for the big consulting firms I
                realized that leaders needed to solve a wide range of complex
                problems by leveraging consulting support that reinforced their
                individual capacity and moved the organization towards
                sustainable change.
              </p>
            </div>
          </div>
          <p className="text-[var(--muted)] leading-relaxed mb-6">
            The challenge was finding the all-round support that would help them
            drive strategic and organizational change in a sea of well-meaning
            domain/subject matter experts pushing their methodologies or
            solutions.
          </p>
          <p className="text-[var(--muted)] leading-relaxed">
            The methods and techniques go beyond the somewhat rigid
            implementation of standardized management consulting frameworks to
            the more personalized and engaged interactions dictated by a world
            that is highly connected and where knowledge no longer remains the
            domain of the few and privileged. There is a strong emphasis on
            leadership (versus management) and innovation (versus tried and
            tested) by creating shared purpose and social networks to drive
            change.
          </p>
        </div>
      </section>
    </>
  );
}
