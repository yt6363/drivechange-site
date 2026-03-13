import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = { title: "Leadership" };

export default function LeadershipPage() {
  return (
    <ServicePage
      title="Drive Leadership"
      subtitle="Cultivating leadership potential to enroll and enlist others to drive change."
      image="/images/leadership.jpg"
      imageAlt="Team climbing together"
      intro="Leadership is fundamentally about exerting social and material influence to enroll and enlist others to drive change. Many organizations operate under the premise that a leader guides or directs others, emphasizing managing over leading, creating a culture of 'followers'. Progressive and innovative organizations cultivate the leadership potential inherent in all their people and are careful to distinguish between managing and leading."
      columns={[
        {
          title: "Exerting Influence",
          description:
            "We help leaders identify underlying motivators that influence behaviors and be aware of their own mind blocks.",
          items: [
            "Engage stakeholders",
            "Break through mental models",
            "Listen actively",
            "Project soft power",
          ],
        },
        {
          title: "Personal Branding",
          description:
            "We help leaders define their own unique and compelling brand that inspires and motivates.",
          items: [
            "Mentor and coach leaders",
            "Cultivate principled leadership",
            "Design a personal brand",
            "Overcome organizational conflict",
            "Evaluate new opportunities",
          ],
        },
        {
          title: "Envisioning",
          description:
            "We help leaders visualize alternate futures unconstrained by the present.",
          items: [
            "Co-create a shared purpose",
            "Unleash power of language",
            "Visualize the future",
          ],
        },
      ]}
    />
  );
}
