export interface CaseStudy {
  slug: string;
  title: string;
  situation: string;
  approach: string;
  value: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  content: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "targeted-promotions",
    title: "Targeted Promotions",
    situation:
      "A major retailer's strategic intent was to move towards a more digitized and personalized engagement with members. There was an aggressive push to drive customers to addressable, targeted digital channels while over 90% of revenues came from in-store foot traffic. The situation was further complicated by the extreme focus on physical assets like circulars and the fragmented nature of the organization where each category was setup as a separate business unit. Additionally, competing and conflicting messages/promotions to the customer caused confusion and margin erosion.",
    approach:
      'Our approach to establishing a cohesive internal organization that focused on real time targeted promotions was based on the fundamental premise of "taking the best of all" without the compulsion to "own and control". Wherever possible, transparent processes and engagement models were established to reduce conflict and allow for open dialogue. There was an intense and early focus on reporting and measurement to allow for fact based decision making instead of relying on anecdotal and institutional knowledge.',
    value: [
      "Delivered over $3B in sales over three years",
      "Winner of the 2013 eTail Best-in-Class Award",
      "Established a cross-functional organization focused on targeted promotions",
    ],
  },
  {
    slug: "internationalization-strategy",
    title: "Internationalization Strategy",
    situation:
      "The client had a pressing need to expand and grow. Upon evaluating a number of growth opportunities, it was determined that providing higher education opportunities to international students would complement the client's existing US service offerings. The situation was complicated by the lack of experience in working with international students and concerns around integrating students with diverse cultural and language backgrounds in a foreign setting.",
    approach:
      "We developed a stair-step approach that addressed each of the concerns in a methodical manner. After completing a worldwide assessment, three countries were identified as the best candidates for further analyses. For each of these countries, a deeper analysis of social, cultural, economic, political and customer motivations was completed to help design potential service offerings and programs. The program concepts were validated by an on-the-ground/in-country analysis which included interviews, surveys and focus groups of over 300 constituents.",
    value: [
      "Three program concepts accepted with detailed business plans developed",
      "Revenue projections and investment requirements itemized",
      "Operational plans established for each program",
    ],
  },
  {
    slug: "planning-for-growth",
    title: "Planning for Growth",
    situation:
      "The client was experiencing significant growth and had established a strong brand presence and reputation for high quality of service. The business environment, though healthy, was subject to significant swings caused by fluctuations in the value of the dollar against foreign currencies. The client asked us to develop a plan for growth that leveraged their core strength while developing new markets.",
    approach:
      "Keeping in mind the economic and organizational environment, our approach was highly conservative and methodical and emphasized due diligence over an extended period of time, allowing for reaction time and full engagement by decision makers. Multiple go/no-go decision points were established. Additionally, we used the full suite of tools and techniques for executive decision making including attribute-hierarchy modeling and decision trees.",
    value: [
      "Prioritized over 14 growth opportunities and agreed on 2 for further research",
      "Assessed competition and developed detailed business plans",
      "Created financial models with investment requirements",
    ],
  },
  {
    slug: "establishing-a-change-agenda",
    title: "Establishing a Change Agenda",
    situation:
      "The company planned to invest $100M in replacing obsolescent technology. Upon analysis, it was discovered another $150M would be required to meet the necessary objectives. Business leaders were at a cross-roads and a thorough analysis was required to determine next steps and re-establish the program on the right footing.",
    approach:
      "A cross-functional team of business and financial analysts evaluated the benefits inherent in the program using structured methods to develop a business case and a rigorous process to collect, review and analyze the data. Business stakeholders were organized into a guiding coalition and took responsibility for conducting the analysis and delivering the benefits.",
    value: [
      "Redefined the program in a business context",
      "Identified $250M in additional value",
      "Established governance and change management framework",
    ],
  },
  {
    slug: "strategic-planning",
    title: "Strategic Planning",
    situation:
      "The client was embarking on an annual strategic planning exercise and realized that the existing IT organization and system was seriously constrained in its ability to launch new services in a timely manner without considerable manual intervention. Relationships between the business and IT were constrained and in some cases openly hostile.",
    approach:
      "Conducted an organizational assessment of the IT department. Made recommendations to overhaul and reorganize the department. Evaluated entire IT spend and introduced off-shore application development. Engaged the business to re-establish relationship with IT and developed a joint business IT investment plan.",
    value: [
      "Helped recruit IT Leader",
      "Reduced IT operating spend through off-shore application development",
      "Developed and presented an IT Strategic Plan accepted by the Board of Directors",
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "being-in-charge-vs-taking-charge",
    title: "Being in Charge vs. Taking Charge",
    content: [
      "What is it about leaders that when the going gets tough they get tougher? When the company is foundering, shareholders are upset, employees are confused and customers are fleeing so many leaders hunker down and take over the action, as if a rush of action is what's needed to steady the ship and they are the only ones that know the way.",
      "Today, Satya Nadella was appointed the CEO of Microsoft. A remarkable achievement for anyone. One of his anecdotes is about how once his captain stepped in, during a game of cricket, when he was floundering as a bowler. The captain proceeded to decimate the opposition, saved the day and taught Satya a remarkable lesson in leadership: about needing to step in when the going gets tough.",
      "Can and should an executive jump into the fray and start \"bowling\" relegating their teams to the role of bystanders while he/she shows them the way? Is this even feasible? Does it drive the desired result or behavior? Would pushing aside the accumulated expertise of the team and presuming upon a superiority of knowledge and skill not be counterproductive?",
      "The most effective leaders know when to step in and when to step back. They understand that being in charge is about authority, but taking charge is about responsibility, and the two are not the same thing.",
    ],
  },
  {
    slug: "sustaining-momentum-to-drive-change",
    title: "Sustaining Momentum to Drive Change",
    content: [
      '"We have lost momentum!" These are words that chill the hearts of committed change leaders. They understand that momentum is critical to the success of a change program. It embodies an inherent force that propels teams into action and a positive energy that miraculously creates more momentum.',
      "Every change program is constantly threatened by shifting priorities, organizational merry-go-rounds, economic conditions, resource constraints and mixed expectations. Change leaders have to nimbly ride the relentless waves of disruption and avoid the temptation to blame external influences as their initiative flounders.",
      "They understand that momentum is a commodity that can be sustained by careful management of six critical factors: STRUCTURAL factors include making resources available and defining roles and responsibilities. PERFORMANCE factors concern monitoring and controlling progress. POLITICAL factors address the power dynamics and stakeholder management. CULTURAL factors acknowledge the organizational norms that can either support or hinder change. EMOTIONAL factors recognize the human element. COMMUNICATION factors ensure transparent and consistent messaging.",
    ],
  },
  {
    slug: "overcoming-decision-making-paralysis",
    title: "Overcoming Decision Making Paralysis",
    content: [
      "Managers often avoid the responsibility of making decisions or let their personal biases influence the decisions to the detriment of the company. This makes it difficult for leaders committed to driving change to move the agenda forward.",
      "Agree on a broad basis or process on how the decision will be made. The process could be as simple as a meeting, followed by a vote where majority wins or complicated enough to require considerable data analysis and iterations of decisions.",
      "Define the role of each stakeholder in the decision making process. Not all stakeholders need to be engaged in every decision. Define whether the stakeholder is an approver, needs to be consulted, needs to be informed or advisor.",
      "Agree on the criteria that will be used in making the decision. Make sure it's clear what decision needs to be made. Very often, we are not aligned on the problem we are solving. Define the problem and use structured methods to evaluate and analyze options.",
    ],
  },
  {
    slug: "power-of-visualization",
    title: "Unleashing the Power of Visualization",
    content: [
      "Visualization, the power of creating a new reality devoid of the constraints of the past, requires us to look beyond the horizon and dig deep into our conscience. It's a critical component of strategy development that helps materialize break through thinking and enlist large groups towards a common vision.",
      "Despite its obvious value and the numerous examples where it has been used successfully, many leaders find it difficult to exercise it in their personal lives or within their teams.",
      "Participants bring strong pre-conceptions to a visualization exercise that influence their ability to stretch the imagination. An internal dialogue on mundane realities, constraints and skepticism cannot, and will not, unleash the full power of visualization.",
      "The facilitator has to work early and quickly to overcome these attitudes using break through workshops, motivational videos, inspirational props or advance exercises focused on self-exploration.",
    ],
  },
  {
    slug: "agile-and-resilient-organization-design",
    title: "Agile and Resilient Organization Design",
    content: [
      "Designing an organization that is both agile and resilient can be very challenging as leaders grapple with a number of complex considerations: should I set up autonomous functional units versus establishing centers of excellence? Should I go deep with industry focused units or get broad with geography based units?",
      "Any choice you make takes away a degree of flexibility, it is the very nature of choice. When you choose something, you choose to not choose something else.",
      "Step 1: Prioritize the competitive positioning/market advantage that the organization needs to focus on. Step 2: Design the organization structure around the most important competitive advantage. Step 3: Build in mechanisms for cross-functional collaboration. Step 4: Create governance structures that enable both autonomy and alignment.",
      "The most successful organizations are those that can balance structure with flexibility, ensuring that the organization design supports rather than constrains the strategic objectives.",
    ],
  },
];
