import Image from "next/image";
import Link from "next/link";
import PageHero from "./PageHero";

interface ServiceColumn {
  title: string;
  description: string;
  items: string[];
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  intro: string;
  columns: ServiceColumn[];
}

export default function ServicePage({
  title,
  subtitle,
  image,
  imageAlt,
  intro,
  columns,
}: ServicePageProps) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} />
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-2">
              <p className="text-lg text-[var(--muted)] leading-relaxed mb-4">
                {intro}
              </p>
              <Link
                href="/blog"
                className="text-[var(--primary)] font-medium hover:text-[var(--accent)] transition-colors text-sm"
              >
                Check out blogs for case studies, workshop agendas and
                frameworks for your own practice. &rarr;
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {columns.map((col) => (
              <div
                key={col.title}
                className="bg-[var(--muted-bg)] rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{col.title}</h3>
                <p className="text-[var(--muted)] text-sm mb-4">
                  {col.description}
                </p>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[var(--foreground)]"
                    >
                      <span className="text-[var(--accent)] mt-1 text-xs">
                        &#9679;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
