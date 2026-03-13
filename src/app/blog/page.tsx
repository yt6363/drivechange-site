import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Insights on leadership, strategy, and driving organizational change."
      />
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white border border-[var(--border)] rounded-lg p-6 hover:shadow-lg hover:border-[var(--primary-light)] transition-all group"
              >
                <h2 className="text-xl font-semibold group-hover:text-[var(--accent)] transition-colors mb-3">
                  {post.title}
                </h2>
                <p className="text-[var(--muted)] text-sm leading-relaxed line-clamp-3">
                  {post.content[0]}
                </p>
                <span className="inline-block mt-4 text-sm font-medium text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
                  Read more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
