import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Strategy",
    description:
      "Today's leaders grapple with economic changes, technological innovations and generational mindsets. Establishing a clear path forward requires inspiration and action.",
    href: "/services/strategy",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Leadership",
    description:
      "Developing tomorrow's leaders today is critical for progressive organizations that need executives who are innovative and flexible while being thoughtful and thorough.",
    href: "/services/leadership",
  },
  {
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    title: "Change",
    description:
      "More leadership than management, more listening than talking. These are the foundational elements of driving sustainable organizational change that inspires.",
    href: "/services/change",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Efficiency",
    description:
      "Fine-tuning resources and organizations requires expertise, grace and ease. Leaders are constantly challenged to do more with less while building high performing teams.",
    href: "/services/efficiency",
  },
];

const clients = [
  { name: "Accenture", file: "Accenture-Logo.jpg" },
  { name: "IBM", file: "ibm-logo.jpg" },
  { name: "Google", file: "google-logo.jpg" },
  { name: "United Airlines", file: "UAL-Logo.jpg" },
  { name: "Kraft", file: "kraft-logo.jpg" },
  { name: "Sears", file: "sears-logo.jpg" },
  { name: "American Family Insurance", file: "amfam_logo.png" },
  { name: "Aon", file: "aon_logo_2.png" },
  { name: "NORC", file: "norc.png" },
  { name: "Star Alliance", file: "star-alliance.png" },
  { name: "Transamerica", file: "transamerica.png" },
  { name: "Kmart", file: "kmart.png" },
  { name: "Lufthansa", file: "Lufthansa-Logo-image.png" },
  { name: "American Airlines", file: "american-airlines-logo1.jpg" },
  { name: "IES Abroad", file: "ies-abroad.jpg" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--primary)] text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Move Mountains, Aim Higher.
            <br />
            Lead Together.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Drive Change helps leaders drive organizational change from ideation
            through implementation, using methods and frameworks that bring
            transparency and results.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="/about"
              className="bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            How We Help Leaders Drive Change
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white border border-[var(--border)] rounded-lg p-6 hover:shadow-lg hover:border-[var(--primary-light)] transition-all"
              >
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--primary)] transition-colors">
                  <svg
                    className="w-6 h-6 text-[var(--primary)] group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={service.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-block mt-4 text-sm font-medium text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
                  Read more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About callout */}
      <section className="bg-[var(--muted-bg)] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Drive Change?</h2>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                In the 15+ years of working for the big consulting firms, our
                founder realized that leaders needed to solve a wide range of
                complex problems by leveraging consulting support that reinforced
                their individual capacity and moved the organization towards
                sustainable change.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-6">
                There is a strong emphasis on leadership (versus management) and
                innovation (versus tried and tested) by creating shared purpose
                and social networks to drive change.
              </p>
              <Link
                href="/about/why"
                className="text-[var(--primary)] font-semibold hover:text-[var(--accent)] transition-colors"
              >
                Learn more about our approach &rarr;
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/why-drive-change.jpg"
                alt="Why Drive Change"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            Companies Served
          </h2>
          <p className="text-[var(--muted)] text-center mb-12 max-w-2xl mx-auto">
            We have had the privilege of working with leading organizations
            across industries.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-8 items-center justify-items-center">
            {clients.map((client) => (
              <div
                key={client.name}
                className="relative w-24 h-16 sm:w-32 sm:h-20 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
              >
                <Image
                  src={`/images/clients/${client.file}`}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--primary)] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Drive Change?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Whether you are preparing for change or already engaged, we can
            help.
          </p>
          <Link
            href="/contact"
            className="bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white px-8 py-3 rounded-md font-semibold transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
