import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = { title: "Change" };

export default function ChangePage() {
  return (
    <ServicePage
      title="Drive Business Change"
      subtitle="Mobilizing organizations around a common agenda and maintaining course through conflict."
      image="/images/change.jpg"
      imageAlt="Business change"
      intro="Change is introduced constantly in the business, either due to economic conditions, competitive action, technology, or other market forces. Change Leadership is about mobilizing the organization around a common agenda, skillfully navigating the political land mines, and maintaining course through conflict and more change."
      columns={[
        {
          title: "Change Agenda",
          description:
            "We help identify opportunities for measurable improvement within four spheres of influence: strategy, people, process, and technology.",
          items: [
            "Develop proactive thinkers",
            "Articulate change agenda",
            "Create a sense of urgency",
            "Analyze environmental uncertainties",
            "Design a change plan",
            "Identify short-term wins",
          ],
        },
        {
          title: "Securing Buy-In",
          description:
            "Since no change is possible without the active participation of other people, we help build guiding coalitions.",
          items: [
            "Analyze individual agendas",
            "Design negotiating strategies",
            "Establish a guiding coalition",
          ],
        },
        {
          title: "Sustaining Momentum",
          description:
            "We help leaders maintain the energy and focus necessary to drive change through to completion.",
          items: [
            "Manage structural factors",
            "Monitor performance",
            "Build resilient teams",
            "Navigate resistance",
          ],
        },
      ]}
    />
  );
}
