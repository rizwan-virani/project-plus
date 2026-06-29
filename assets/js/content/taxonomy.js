window.TAXONOMY = [
  {
    title: "Project Methodologies",
    subtitle: "Sort each practice or trait into the development approach it best describes.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "predictive", label: "Predictive / Waterfall" },
      { id: "agile", label: "Agile" },
      { id: "hybrid", label: "Hybrid / Other" }
    ],
    items: [
      { text: "Detailed plan locked in up front", cat: "predictive" },
      { text: "Sequential phases with defined gates", cat: "predictive" },
      { text: "Fixed scope, schedule, and budget", cat: "predictive" },
      { text: "Heavy documentation before build", cat: "predictive" },
      { text: "Change control board approves changes", cat: "predictive" },
      { text: "Work delivered in short sprints", cat: "agile" },
      { text: "Daily stand-up meetings", cat: "agile" },
      { text: "Product backlog and user stories", cat: "agile" },
      { text: "Welcomes changing requirements", cat: "agile" },
      { text: "Sprint retrospective for improvement", cat: "agile" },
      { text: "Combines phase gates with iterative sprints", cat: "hybrid" },
      { text: "Predictive planning for fixed parts, agile for the rest", cat: "hybrid" },
      { text: "Tailored approach to fit the organization", cat: "hybrid" },
      { text: "SAFe scaled framework across teams", cat: "hybrid" }
    ]
  },
  {
    title: "Risk Response Strategies",
    subtitle: "Match each action to the risk response strategy it represents.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "avoid", label: "Avoid" },
      { id: "mitigate", label: "Mitigate" },
      { id: "transfer", label: "Transfer" },
      { id: "accept", label: "Accept" },
      { id: "escalate", label: "Escalate" }
    ],
    items: [
      { text: "Drop the risky feature from scope entirely", cat: "avoid" },
      { text: "Change the plan to eliminate the threat", cat: "avoid" },
      { text: "Choose a proven technology over the untested one", cat: "avoid" },
      { text: "Add extra testing to reduce defect likelihood", cat: "mitigate" },
      { text: "Cross-train staff to lessen the impact of turnover", cat: "mitigate" },
      { text: "Build a prototype to reduce uncertainty", cat: "mitigate" },
      { text: "Purchase insurance against the loss", cat: "transfer" },
      { text: "Outsource the work to a specialist vendor", cat: "transfer" },
      { text: "Add a warranty clause to the contract", cat: "transfer" },
      { text: "Take no action and set aside a reserve", cat: "accept" },
      { text: "Document the risk and monitor it passively", cat: "accept" },
      { text: "Note a low-impact risk in the register and move on", cat: "accept" },
      { text: "Raise the risk to the steering committee", cat: "escalate" },
      { text: "Hand the threat to senior management, outside your authority", cat: "escalate" }
    ]
  },
  {
    title: "Project Life Cycle Phases",
    subtitle: "Place each activity or artifact in the project phase where it occurs.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "discovery", label: "Discovery / Concept" },
      { id: "initiation", label: "Initiation" },
      { id: "planning", label: "Planning" },
      { id: "execution", label: "Execution" },
      { id: "closing", label: "Closing" }
    ],
    items: [
      { text: "Develop the business case", cat: "discovery" },
      { text: "Conduct a feasibility study", cat: "discovery" },
      { text: "Identify the high-level need", cat: "discovery" },
      { text: "Develop the project charter", cat: "initiation" },
      { text: "Identify stakeholders", cat: "initiation" },
      { text: "Appoint the project manager", cat: "initiation" },
      { text: "Create the work breakdown structure", cat: "planning" },
      { text: "Build the project schedule and budget", cat: "planning" },
      { text: "Develop the communications plan", cat: "planning" },
      { text: "Produce the deliverables", cat: "execution" },
      { text: "Manage the project team", cat: "execution" },
      { text: "Issue status reports to stakeholders", cat: "execution" },
      { text: "Obtain formal customer acceptance", cat: "closing" },
      { text: "Document lessons learned", cat: "closing" },
      { text: "Release project resources", cat: "closing" },
      { text: "Archive project records", cat: "closing" }
    ]
  },
  {
    title: "Project Artifacts & Documents",
    subtitle: "Sort each document into the phase whose work it supports.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "initiation", label: "Initiation Docs" },
      { id: "planning", label: "Planning Docs" },
      { id: "execution", label: "Execution / Monitoring Docs" },
      { id: "closing", label: "Closing Docs" }
    ],
    items: [
      { text: "Project charter", cat: "initiation" },
      { text: "Business case", cat: "initiation" },
      { text: "Stakeholder register", cat: "initiation" },
      { text: "Scope statement", cat: "planning" },
      { text: "Work breakdown structure", cat: "planning" },
      { text: "Risk register", cat: "planning" },
      { text: "Communications plan", cat: "planning" },
      { text: "Status report", cat: "execution" },
      { text: "Issue log", cat: "execution" },
      { text: "Change request form", cat: "execution" },
      { text: "Dashboard / project metrics", cat: "execution" },
      { text: "Project closeout report", cat: "closing" },
      { text: "Lessons learned document", cat: "closing" },
      { text: "Final acceptance sign-off", cat: "closing" }
    ]
  },
  {
    title: "Charts & Tools",
    subtitle: "Classify each chart or tool by the purpose it serves on a project.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "schedule", label: "Schedule Tools" },
      { id: "quality", label: "Quality / Performance Charts" },
      { id: "communication", label: "Communication / Collaboration Tools" }
    ],
    items: [
      { text: "Gantt chart", cat: "schedule" },
      { text: "Network diagram", cat: "schedule" },
      { text: "Critical path analysis", cat: "schedule" },
      { text: "Milestone chart", cat: "schedule" },
      { text: "PERT chart", cat: "schedule" },
      { text: "Pareto chart", cat: "quality" },
      { text: "Fishbone (Ishikawa) diagram", cat: "quality" },
      { text: "Control chart", cat: "quality" },
      { text: "Burndown chart", cat: "quality" },
      { text: "Run chart", cat: "quality" },
      { text: "Dashboard", cat: "communication" },
      { text: "Ticketing system", cat: "communication" },
      { text: "Wiki / knowledge base", cat: "communication" },
      { text: "Video conferencing platform", cat: "communication" },
      { text: "Shared file repository", cat: "communication" }
    ]
  },
  {
    title: "Contract Types",
    subtitle: "Match each scenario or trait to the contract type that fits best.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "fixed", label: "Fixed-Price" },
      { id: "tm", label: "Time-and-Materials" },
      { id: "cost", label: "Cost-Reimbursable" }
    ],
    items: [
      { text: "One set price for a well-defined deliverable", cat: "fixed" },
      { text: "Most risk falls on the seller", cat: "fixed" },
      { text: "Buyer knows the exact scope up front", cat: "fixed" },
      { text: "Firm-fixed-price (FFP) agreement", cat: "fixed" },
      { text: "Pay an hourly rate plus material costs", cat: "tm" },
      { text: "Good fit for staff augmentation", cat: "tm" },
      { text: "Used when scope is unclear and short-term", cat: "tm" },
      { text: "Hybrid of fixed and cost-reimbursable", cat: "tm" },
      { text: "Seller is reimbursed for allowable costs plus a fee", cat: "cost" },
      { text: "Most risk falls on the buyer", cat: "cost" },
      { text: "Cost-plus-incentive-fee (CPIF) agreement", cat: "cost" },
      { text: "Used when scope cannot be fully defined early", cat: "cost" }
    ]
  },
  {
    title: "IT & Governance Concepts",
    subtitle: "Sort each concept into cloud models, compliance regulations, or security concepts.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "cloud", label: "Cloud Models (IaaS/PaaS/SaaS)" },
      { id: "compliance", label: "Compliance / Privacy Regulations" },
      { id: "security", label: "Security Concepts" }
    ],
    items: [
      { text: "IaaS", cat: "cloud" },
      { text: "PaaS", cat: "cloud" },
      { text: "SaaS", cat: "cloud" },
      { text: "Public vs. private cloud deployment", cat: "cloud" },
      { text: "Elastic, on-demand virtual servers", cat: "cloud" },
      { text: "GDPR", cat: "compliance" },
      { text: "HIPAA", cat: "compliance" },
      { text: "PCI-DSS", cat: "compliance" },
      { text: "SOX", cat: "compliance" },
      { text: "Data classification policy", cat: "security" },
      { text: "Physical security controls", cat: "security" },
      { text: "Least-privilege access control", cat: "security" },
      { text: "Encryption of data at rest", cat: "security" },
      { text: "Multifactor authentication", cat: "security" }
    ]
  }
];
