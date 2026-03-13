import { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Communication Workshops" };

const workshops = [
  {
    title: "Unleash the Power of the Written Word",
    description:
      "During this workshop we explore how best to communicate in the absence of face-to-face interaction using email, notes, or other written expression. This is an interactive workshop that explores the distinctions of writing for impact and understanding.",
    points: [
      "Responding to emails clearly and concisely addressing the question asked and the motivation behind it",
      'Recognizing the role of "emotions" in written communications and how best to manage them',
      "Knowing which written communication/email to skip and how to skip it without harming the relationship",
      "Using written communication to engage and relate to others in a powerful way",
    ],
  },
  {
    title: "Empowered and Enabled to Ask Why",
    description:
      'During this workshop we explore the shift from the "black and white" world of doing a task well to the "grey" world of understanding the intent behind the task and the implications it has on our work and the work of others.',
    points: [
      "How to maintain a positive and productive working relationship while questioning tasks and processes",
      "Understanding the importance of context in all assignments",
      "Building confidence to ask probing questions",
    ],
  },
  {
    title: "Listening to Inspire",
    description:
      "Good listening enables us to inspire, enroll and enlist others. Powerful listening can change individuals, teams and organizations. During this workshop, we explore five dimensions of listening.",
    points: [
      "Maintaining focus while listening",
      "Understanding what is being said and what is not being said",
      "Using contextual clues to better understand the message",
      "Responding constructively and empathetically",
    ],
  },
];

export default function CommunicationWorkshopsPage() {
  return (
    <>
      <PageHero
        title="Communication Workshops"
        subtitle="Develop a forward looking, problem solving mindset that helps you communicate to drive teams to success."
      />
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-[var(--muted)] leading-relaxed mb-12">
            Communication workshop participants develop a forward looking,
            problem solving mindset that helps them communicate to drive teams
            to success. The workshops are highly interactive using real world
            problems and role playing to demonstrate simple techniques that can
            be used in multiple situations. While the workshops are founded on
            established frameworks, they are free of jargon and theory. Each
            workshop is tailored to drive a specific change or behavior.
          </p>
          <div className="space-y-10">
            {workshops.map((w) => (
              <div
                key={w.title}
                className="border-l-4 border-[var(--accent)] pl-6"
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
