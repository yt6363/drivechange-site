import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = { title: "Efficiency" };

export default function EfficiencyPage() {
  return (
    <ServicePage
      title="Drive Efficiency"
      subtitle="Helping leaders shift mindsets from 'why can't they fix it' to 'what can be done'."
      image="/images/efficiency.jpg"
      imageAlt="Efficiency"
      intro='Any efficiency drive requires a mind-set that is open to change. We help leaders change the internal dialogue from "already tried it, will not work" to "what can I do, how can we move forward". Teams learn to shift from "why can&apos;t they fix it" towards "what can be done" and "how should we do it". Leaders look beyond existing processes and mind-sets to drive the necessary change.'
      columns={[
        {
          title: "Sense of Urgency",
          description:
            "We help leaders develop a clarity of purpose and create a well articulated and quantifiable reason for driving efficiency.",
          items: [
            "Quantify and qualify need",
            "Understand risks and constraints",
            "Evaluate organization and cultural norms",
          ],
        },
        {
          title: "Securing Buy-In",
          description:
            "We help build guiding coalitions that drive the change agenda and design negotiating strategies.",
          items: [
            "Analyze the political agenda",
            "Develop negotiating strategies",
            "Establish a guiding coalition",
          ],
        },
        {
          title: "Process Improvement",
          description:
            "We help leaders and teams shift from reactive problem solving to proactive process optimization.",
          items: [
            "Map current state processes",
            "Identify bottlenecks",
            "Design future state workflows",
            "Implement continuous improvement",
          ],
        },
      ]}
    />
  );
}
