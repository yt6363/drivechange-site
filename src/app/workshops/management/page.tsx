import { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Management Workshops" };

const workshops = [
  {
    title: "Road to the Future: Creating Sticky Plans",
    description:
      "Strategic planning and road map development is best done in collaborative sessions where participants push the boundaries of their own thinking and where open dialogue is fostered and conflict surfaced.",
    points: [
      "Develop our strategic direction",
      "Understand constraints, risks and opportunities of the choices we are proposing",
      "Surface stakeholder perspectives and bring out points of alignment",
      "Develop a forward looking, pragmatic road map for the future",
    ],
  },
  {
    title: "Agile and Boundary Less Organizations",
    description:
      "High performing organizations demonstrate both structural coherence and agility. During this workshop, we will learn how to construct a boundary less organization that can be rapidly deployed towards a shared objective.",
    points: [
      "Understand our organizational barriers to success",
      "Separate function/purpose from personality in organization design",
      "Explore the challenges with highly matrixed organizations",
      "Define the boundaries that matter: authority, task, political and identity",
    ],
  },
  {
    title: "Design Thinking and Innovation",
    description:
      "Innovation requires a culture that encourages experimentation and tolerates failure. During this workshop, we explore design thinking principles and their application to business challenges.",
    points: [
      "Apply human-centered design principles",
      "Develop prototyping and rapid iteration skills",
      "Build innovation pipelines",
      "Create a culture of experimentation",
    ],
  },
];

export default function ManagementWorkshopsPage() {
  return (
    <>
      <PageHero
        title="Management Workshops"
        subtitle="Establish future direction in an engaging, collaborative environment."
      />
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-[var(--muted)] leading-relaxed mb-12">
            Business management workshops help leaders establish future
            direction in an engaging, collaborative environment that allows all
            stakeholders to voice their perspectives and resolve conflict in the
            best interest of the team. The workshops are highly customized and
            can range from traditional strategic planning to complex problem
            solving for a specific business need. The emphasis is on clearly
            defining the problem and co-creating the desired outcome everyone is
            committed to pursuing.
          </p>
          <div className="space-y-10">
            {workshops.map((w) => (
              <div
                key={w.title}
                className="border-l-4 border-[var(--primary)] pl-6"
              >
                <h3 className="text-xl font-semibold mb-3">{w.title}</h3>
                <p className="text-[var(--muted)] text-sm mb-4">
                  {w.description}
                </p>
                <ol className="space-y-2 list-decimal list-inside">
                  {w.points.map((p, i) => (
                    <li key={i} className="text-sm text-[var(--foreground)]">
                      {p}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
