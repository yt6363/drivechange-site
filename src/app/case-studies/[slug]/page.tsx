import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { caseStudies } from "@/lib/content";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  return { title: cs ? `${cs.title} - Case Study` : "Case Study" };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) notFound();

  return (
    <>
      <PageHero title={cs.title} subtitle="Case Study" />
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Situation</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              {cs.situation}
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              Approach and Solution
            </h2>
            <p className="text-[var(--muted)] leading-relaxed">
              {cs.approach}
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Value Delivered</h2>
            <ul className="space-y-3">
              {cs.value.map((v, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1 text-xs">
                    &#9679;
                  </span>
                  <span className="text-[var(--foreground)]">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/case-studies"
            className="text-[var(--primary)] font-medium hover:text-[var(--accent)] transition-colors"
          >
            &larr; Back to all case studies
          </Link>
        </div>
      </section>
    </>
  );
}
