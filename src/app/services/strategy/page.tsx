import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = { title: "Strategy" };

export default function StrategyPage() {
  return (
    <ServicePage
      title="Drive Strategic Direction"
      subtitle="Setting up for success through strategic leadership and execution excellence."
      image="/images/strategy.jpg"
      imageAlt="Chess pieces representing strategy"
      intro="An organization's ability to introduce new and responsive products and services and execute to perfection is a significant competitive advantage. Strategic Leadership is about setting up for success by evaluating the competitive landscape, understanding the industry, assessing the risks, unleashing the organization's creative potential and driving decisions for long-term success with a strong focus on execution excellence."
      columns={[
        {
          title: "Business Planning",
          description:
            "We help develop business plans for start-up ventures, new business lines or a new product or service offering.",
          items: [
            "Generate bold new ideas",
            "Define products and services",
            "Assess the competitive landscape",
            "Design business and operating plan",
            "Develop business case",
          ],
        },
        {
          title: "Decision Making",
          description:
            "We apply formal decision-making processes to reduce risk and choose the best course of action.",
          items: [
            "Change organizational culture",
            "Uncover decision making styles",
            "Master consensus building",
            "Analyze key stakeholders",
          ],
        },
        {
          title: "Strategic Alignment",
          description:
            "We help organizations create alignment around a shared vision for the future.",
          items: [
            "Introduce strategic methodologies",
            "Get stakeholder buy-in",
            "Drive focused execution",
            "Resolve organizational conflict",
          ],
        },
      ]}
    />
  );
}
