export default function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <p
          className="text-sm font-medium text-[var(--accent)] tracking-[0.2em] uppercase mb-6"
          style={{ animation: "slideUp 0.6s 0.1s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          {title}
        </p>
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-4xl"
          style={{ animation: "slideUp 0.8s 0.25s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          {subtitle || title}
        </h1>
        <div
          className="divider-accent mt-8"
          style={{ animation: "slideUp 0.6s 0.45s cubic-bezier(0.16,1,0.3,1) both" }}
        />
      </div>
    </section>
  );
}
