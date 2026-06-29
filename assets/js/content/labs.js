window.LABS = [
  {
    "id": "Lab 01",
    "num": 1,
    "group": "PROJECT MANAGEMENT CONCEPTS",
    "title": "Selecting the Right Methodology",
    "desc": "A program office must choose delivery methodologies for several incoming projects with very different requirements stability. You map each project's characteristics to predictive, agile, or hybrid approaches, then justify the fit against scope and change tolerance.",
    "objectives": [
      "Differentiate predictive (waterfall), agile, and hybrid life cycles.",
      "Match a methodology to a project's requirements volatility and risk profile.",
      "Recognize when a hybrid model is appropriate."
    ],
    "console": {
      "host": "pm-sandbox01",
      "boot": [
        "[SYS] Methodology selection lab online.",
        "[SYS] Intake queue loaded: 3 candidate projects."
      ],
      "tasks": [
        { "id": "t1", "label": "Choose a methodology for a fixed-scope regulatory build" },
        { "id": "t2", "label": "Choose a methodology for an evolving software product" },
        { "id": "t3", "label": "Identify the hybrid use case" },
        { "id": "t4", "label": "List available delivery models" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Approach for a fixed-scope, audited compliance project",
          "options": ["Agile/Scrum", "Predictive/Waterfall", "Kanban", "Extreme Programming"],
          "correct": "Predictive/Waterfall",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Approach for a product with frequently changing requirements",
          "options": ["Predictive/Waterfall", "Agile/Scrum", "Critical Path", "Phase-gate"],
          "correct": "Agile/Scrum",
          "task": "t2"
        },
        {
          "id": "c3",
          "label": "Best fit when a fixed-deadline hardware build wraps an iterative UI",
          "options": ["Pure Waterfall", "Pure Agile", "Hybrid", "Ad hoc"],
          "correct": "Hybrid",
          "task": "t3"
        }
      ],
      "commands": [
        { "cmd": "list models", "out": "[PLAN] Predictive/Waterfall\n[PLAN] Agile (Scrum, Kanban, XP)\n[PLAN] Hybrid", "task": "t4" },
        { "cmd": "status", "out": "[PLAN] Methodology engine nominal. 3 projects awaiting decision." }
      ]
    }
  },
  {
    "id": "Lab 02",
    "num": 2,
    "group": "PROJECT MANAGEMENT CONCEPTS",
    "title": "Building a Work Breakdown Structure",
    "desc": "You decompose a website migration project into a deliverable-oriented WBS. The exercise reinforces the 100% rule, the use of work packages, and where the WBS dictionary fits in scope management.",
    "objectives": [
      "Decompose project scope into deliverables and work packages.",
      "Apply the 100% rule to a WBS.",
      "Distinguish a work package from an activity."
    ],
    "console": {
      "host": "pm-sandbox02",
      "boot": [
        "[SYS] WBS decomposition lab online.",
        "[SCOPE] Project loaded: corporate website migration."
      ],
      "tasks": [
        { "id": "t1", "label": "Identify the lowest level of a WBS" },
        { "id": "t2", "label": "Apply the 100% rule" },
        { "id": "t3", "label": "Register a deliverable in the WBS dictionary" },
        { "id": "t4", "label": "View the decomposition tree" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Lowest level of the WBS that work is estimated against",
          "options": ["Milestone", "Work package", "Phase", "Activity"],
          "correct": "Work package",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "The 100% rule states the WBS must capture",
          "options": ["Only critical deliverables", "All in-scope work and nothing out of scope", "Just the first phase", "Only billable tasks"],
          "correct": "All in-scope work and nothing out of scope",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ADD DELIVERABLE TO WBS DICTIONARY",
        "placeholder": "1.3 Content Migration",
        "button": "Register",
        "response": "[SCOPE] Deliverable registered in WBS dictionary.\n[SCOPE] Code 1.3 assigned, owner and acceptance criteria captured.\n[SCOPE] Rollup recalculated to 100%.",
        "task": "t3"
      },
      "commands": [
        { "cmd": "show wbs", "out": "[SCOPE] 1.0 Migration\n[SCOPE]  1.1 Discovery\n[SCOPE]  1.2 Build\n[SCOPE]  1.3 Content\n[SCOPE]  1.4 Cutover", "task": "t4" },
        { "cmd": "status", "out": "[SCOPE] WBS tree balanced. 4 deliverables, 12 work packages." }
      ]
    }
  },
  {
    "id": "Lab 03",
    "num": 3,
    "group": "PROJECT MANAGEMENT CONCEPTS",
    "title": "Critical Path and Float Calculation",
    "desc": "Using a small activity-on-node network, you perform a forward and backward pass to find the critical path and compute total float for non-critical activities. The lab cements how float and the longest path drive schedule risk.",
    "objectives": [
      "Identify the critical path through a network diagram.",
      "Calculate total float for an activity.",
      "Explain why critical-path activities have zero float."
    ],
    "console": {
      "host": "pm-sandbox03",
      "boot": [
        "[SYS] Network analysis lab online.",
        "[SCHED] Network loaded: A->B->D and A->C->D, durations set."
      ],
      "tasks": [
        { "id": "t1", "label": "Identify the critical path" },
        { "id": "t2", "label": "State the float of a critical activity" },
        { "id": "t3", "label": "Compute total float for a parallel branch" },
        { "id": "t4", "label": "Run the schedule analysis" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Critical path is the network's",
          "options": ["Shortest duration path", "Longest duration path", "Cheapest path", "Path with most activities"],
          "correct": "Longest duration path",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Total float of any activity on the critical path",
          "options": ["Zero", "One day", "Equal to project duration", "Undefined"],
          "correct": "Zero",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "FLOAT CALCULATOR (LS - ES)",
        "placeholder": "B: LS=8 ES=5",
        "button": "Compute",
        "response": "[SCHED] Total float = LS - ES = 3 days.\n[SCHED] Activity B can slip 3 days without delaying the project.\n[SCHED] Branch remains non-critical.",
        "task": "t3"
      },
      "commands": [
        { "cmd": "analyze schedule", "out": "[SCHED] Critical path: A->C->D (14 days)\n[SCHED] Parallel branch A->B->D has 3 days float", "task": "t4" },
        { "cmd": "status", "out": "[SCHED] Forward/backward pass complete. 1 critical path found." }
      ]
    }
  },
  {
    "id": "Lab 04",
    "num": 4,
    "group": "PROJECT MANAGEMENT CONCEPTS",
    "title": "Risk Register and Response Planning",
    "desc": "You populate a risk register, score risks by probability and impact, and select appropriate response strategies for both threats and opportunities. The lab reinforces the difference between avoid, transfer, mitigate, accept, and the positive-risk strategies.",
    "objectives": [
      "Score a risk using a probability-impact matrix.",
      "Select the correct response strategy for a threat.",
      "Distinguish negative-risk from positive-risk strategies."
    ],
    "console": {
      "host": "pm-sandbox04",
      "boot": [
        "[SYS] Risk management lab online.",
        "[RISK] Register loaded: 5 open risks, scoring matrix active."
      ],
      "tasks": [
        { "id": "t1", "label": "Select a strategy that buys insurance for a threat" },
        { "id": "t2", "label": "Select a strategy for a high-value opportunity" },
        { "id": "t3", "label": "Log a new risk into the register" },
        { "id": "t4", "label": "Display the probability-impact matrix" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Strategy that shifts a threat's impact to a third party",
          "options": ["Avoid", "Transfer", "Mitigate", "Accept"],
          "correct": "Transfer",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Strategy to maximize the chance of a beneficial opportunity",
          "options": ["Mitigate", "Exploit", "Avoid", "Transfer"],
          "correct": "Exploit",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "LOG RISK (P x I SCORE)",
        "placeholder": "Vendor delay, P=0.4 I=8",
        "button": "Score",
        "response": "[RISK] Risk scored: P 0.4 x I 8 = 3.2 (Medium).\n[RISK] Entered in register with owner and trigger.\n[RISK] Response: Mitigate via early vendor commitments.",
        "task": "t3"
      },
      "commands": [
        { "cmd": "show matrix", "out": "[RISK] Impact->\n[RISK] High  | Med | High | High\n[RISK] Med   | Low | Med  | High\n[RISK] Low   | Low | Low  | Med", "task": "t4" },
        { "cmd": "status", "out": "[RISK] Register healthy. 5 risks, 0 unowned." }
      ]
    }
  },
  {
    "id": "Lab 05",
    "num": 5,
    "group": "PROJECT MANAGEMENT CONCEPTS",
    "title": "Issue Log Triage",
    "desc": "Mid-execution, several issues surface at once. You triage the issue log by priority and severity, assign owners, and decide which items escalate versus which the team resolves. The lab clarifies how issues differ from risks.",
    "objectives": [
      "Distinguish an issue from a risk.",
      "Prioritize issues by severity and urgency.",
      "Determine the correct escalation path."
    ],
    "console": {
      "host": "pm-sandbox05",
      "boot": [
        "[SYS] Issue triage lab online.",
        "[ISSUE] Log loaded: 6 open issues, 2 unassigned."
      ],
      "tasks": [
        { "id": "t1", "label": "Classify an issue versus a risk" },
        { "id": "t2", "label": "Set priority for a blocking defect" },
        { "id": "t3", "label": "Escalate an out-of-tolerance issue" },
        { "id": "t4", "label": "View the open issue log" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "An issue is best defined as",
          "options": ["A future uncertain event", "A condition already affecting the project", "A budget line", "A stakeholder request"],
          "correct": "A condition already affecting the project",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Priority for a defect that halts all testing",
          "options": ["Low", "Medium", "Critical", "Deferred"],
          "correct": "Critical",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ESCALATE ISSUE",
        "placeholder": "ISSUE-118 scope conflict",
        "button": "Escalate",
        "response": "[ISSUE] ISSUE-118 exceeds PM tolerance.\n[ISSUE] Routed to sponsor per escalation path.\n[ISSUE] Status set to Escalated, SLA clock started.",
        "task": "t3"
      },
      "commands": [
        { "cmd": "show issues", "out": "[ISSUE] 101 build break - Critical\n[ISSUE] 109 env access - High\n[ISSUE] 118 scope conflict - Escalated", "task": "t4" },
        { "cmd": "status", "out": "[ISSUE] 6 open, 0 unassigned after triage." }
      ]
    }
  },
  {
    "id": "Lab 06",
    "num": 6,
    "group": "PROJECT MANAGEMENT CONCEPTS",
    "title": "RACI Assignment and Resource Leveling",
    "desc": "You build a responsibility assignment matrix and resolve an over-allocation by leveling resources. The lab reinforces RACI roles and how leveling can extend duration when resource limits bind.",
    "objectives": [
      "Assign RACI roles without duplicating accountability.",
      "Identify an over-allocated resource.",
      "Apply resource leveling to resolve a conflict."
    ],
    "console": {
      "host": "pm-sandbox06",
      "boot": [
        "[SYS] RACI and leveling lab online.",
        "[RES] Matrix loaded: 4 roles, 5 work packages."
      ],
      "tasks": [
        { "id": "t1", "label": "Set the single Accountable party per task" },
        { "id": "t2", "label": "Choose the correct response to over-allocation" },
        { "id": "t3", "label": "Apply resource leveling" },
        { "id": "t4", "label": "View the RACI matrix" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "How many people should be Accountable for one task",
          "options": ["Zero", "Exactly one", "Two", "The whole team"],
          "correct": "Exactly one",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "A developer is booked 150% next sprint. Best fix",
          "options": ["Ignore it", "Resource leveling", "Add scope", "Cancel the task"],
          "correct": "Resource leveling",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "APPLY LEVELING",
        "placeholder": "level dev-2 across sprint 4",
        "button": "Level",
        "response": "[RES] Leveling applied to dev-2.\n[RES] Allocation reduced from 150% to 100%.\n[RES] End date shifted +2 days; critical path re-validated.",
        "task": "t3"
      },
      "commands": [
        { "cmd": "show raci", "out": "[RES] WP1: R=dev A=PM C=arch I=sponsor\n[RES] WP2: R=qa  A=PM C=dev  I=sponsor", "task": "t4" },
        { "cmd": "status", "out": "[RES] No over-allocations remaining." }
      ]
    }
  },
  {
    "id": "Lab 07",
    "num": 7,
    "group": "PROJECT LIFE CYCLE",
    "title": "Drafting a Project Charter",
    "desc": "In initiation, you assemble the core elements of a project charter and confirm who authorizes it. The lab reinforces that the charter formally authorizes the project and names the project manager.",
    "objectives": [
      "Identify the mandatory elements of a project charter.",
      "Recognize who signs and authorizes the charter.",
      "Distinguish the charter from the scope statement."
    ],
    "console": {
      "host": "pm-sandbox07",
      "boot": [
        "[SYS] Initiation lab online.",
        "[CHARTER] Template loaded: high-level scope, objectives, sponsor."
      ],
      "tasks": [
        { "id": "t1", "label": "Identify who authorizes the charter" },
        { "id": "t2", "label": "Identify what the charter grants the PM" },
        { "id": "t3", "label": "Publish the signed charter" },
        { "id": "t4", "label": "List charter components" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Who formally authorizes a project charter",
          "options": ["The project manager", "The sponsor", "The development team", "The end users"],
          "correct": "The sponsor",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "The charter primarily gives the PM",
          "options": ["A detailed schedule", "Authority to apply resources", "A risk register", "A test plan"],
          "correct": "Authority to apply resources",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "PUBLISH CHARTER",
        "placeholder": "ERP-Upgrade charter v1",
        "button": "Publish",
        "response": "[CHARTER] Charter signed by sponsor.\n[CHARTER] Project manager named and empowered.\n[CHARTER] Project formally authorized to begin planning.",
        "task": "t3"
      },
      "commands": [
        { "cmd": "show charter", "out": "[CHARTER] Purpose\n[CHARTER] High-level scope\n[CHARTER] Objectives & success criteria\n[CHARTER] Sponsor & PM\n[CHARTER] High-level budget", "task": "t4" },
        { "cmd": "status", "out": "[CHARTER] Document complete, awaiting signature." }
      ]
    }
  },
  {
    "id": "Lab 08",
    "num": 8,
    "group": "PROJECT LIFE CYCLE",
    "title": "Stakeholder Analysis Grid",
    "desc": "You map stakeholders onto a power/interest grid and select engagement strategies for each quadrant. The lab reinforces tailoring communication and influence to stakeholder power and interest.",
    "objectives": [
      "Place stakeholders on a power/interest grid.",
      "Select an engagement strategy per quadrant.",
      "Prioritize the most influential stakeholders."
    ],
    "console": {
      "host": "pm-sandbox08",
      "boot": [
        "[SYS] Stakeholder analysis lab online.",
        "[STAKE] Register loaded: 8 stakeholders, power/interest scored."
      ],
      "tasks": [
        { "id": "t1", "label": "Choose the strategy for high power / high interest" },
        { "id": "t2", "label": "Choose the strategy for low power / low interest" },
        { "id": "t3", "label": "Classify a new stakeholder" },
        { "id": "t4", "label": "View the power/interest grid" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Strategy for a high-power, high-interest stakeholder",
          "options": ["Monitor only", "Manage closely", "Keep informed", "Ignore"],
          "correct": "Manage closely",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Strategy for a low-power, low-interest stakeholder",
          "options": ["Manage closely", "Keep satisfied", "Monitor (minimal effort)", "Escalate"],
          "correct": "Monitor (minimal effort)",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "CLASSIFY STAKEHOLDER",
        "placeholder": "CFO: power high, interest high",
        "button": "Classify",
        "response": "[STAKE] CFO placed in Manage Closely quadrant.\n[STAKE] Engagement cadence set to weekly.\n[STAKE] Communication tailored to executive summary level.",
        "task": "t3"
      },
      "commands": [
        { "cmd": "show grid", "out": "[STAKE] HiPwr/HiInt: Manage closely\n[STAKE] HiPwr/LoInt: Keep satisfied\n[STAKE] LoPwr/HiInt: Keep informed\n[STAKE] LoPwr/LoInt: Monitor", "task": "t4" },
        { "cmd": "status", "out": "[STAKE] 8 stakeholders mapped, strategies assigned." }
      ]
    }
  },
  {
    "id": "Lab 09",
    "num": 9,
    "group": "PROJECT LIFE CYCLE",
    "title": "Building a Communication Plan",
    "desc": "You design a communication plan defining audience, frequency, channel, and method. The lab reinforces matching communication type (push, pull, interactive) to message and audience needs.",
    "objectives": [
      "Match communication method to message urgency.",
      "Define cadence and channel per audience.",
      "Distinguish push, pull, and interactive communication."
    ],
    "console": {
      "host": "pm-sandbox09",
      "boot": [
        "[SYS] Communication planning lab online.",
        "[COMM] Audiences loaded: sponsor, team, vendors, end users."
      ],
      "tasks": [
        { "id": "t1", "label": "Pick the method for posting status to a portal" },
        { "id": "t2", "label": "Pick the method for resolving a complex issue live" },
        { "id": "t3", "label": "Publish a communication matrix entry" },
        { "id": "t4", "label": "View the communication plan" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Type when info is posted for self-service retrieval",
          "options": ["Push", "Pull", "Interactive", "Broadcast"],
          "correct": "Pull",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Type best for real-time, two-way problem solving",
          "options": ["Push", "Pull", "Interactive", "Asynchronous"],
          "correct": "Interactive",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ADD COMM ENTRY",
        "placeholder": "Sponsor / weekly / email / push",
        "button": "Add",
        "response": "[COMM] Entry added to communication matrix.\n[COMM] Audience: Sponsor, cadence weekly, channel email.\n[COMM] Method classified as push.",
        "task": "t3"
      },
      "commands": [
        { "cmd": "show plan", "out": "[COMM] Sponsor: weekly status (push)\n[COMM] Team: daily standup (interactive)\n[COMM] Portal: dashboard (pull)", "task": "t4" },
        { "cmd": "status", "out": "[COMM] Plan complete for 4 audiences." }
      ]
    }
  },
  {
    "id": "Lab 10",
    "num": 10,
    "group": "PROJECT LIFE CYCLE",
    "title": "Earned Value Management Calculation",
    "desc": "Mid-project, you compute earned value metrics to assess cost and schedule health. The lab drills CPI and SPI interpretation and the meaning of values above and below 1.0.",
    "objectives": [
      "Compute CPI and SPI from EV, PV, and AC.",
      "Interpret performance indices above and below 1.0.",
      "Identify whether the project is over budget or behind schedule."
    ],
    "console": {
      "host": "pm-sandbox10",
      "boot": [
        "[SYS] Earned value lab online.",
        "[EVM] Data loaded: PV=100k, EV=90k, AC=110k."
      ],
      "tasks": [
        { "id": "t1", "label": "Interpret a CPI below 1.0" },
        { "id": "t2", "label": "Interpret an SPI below 1.0" },
        { "id": "t3", "label": "Run the EVM calculator" },
        { "id": "t4", "label": "List EVM formulas" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "A CPI of 0.82 means the project is",
          "options": ["Under budget", "Over budget", "Exactly on budget", "Ahead of schedule"],
          "correct": "Over budget",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "An SPI of 0.90 means the project is",
          "options": ["Ahead of schedule", "Behind schedule", "Under budget", "On schedule"],
          "correct": "Behind schedule",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "EVM CALCULATOR",
        "placeholder": "EV=90000 AC=110000 PV=100000",
        "button": "Compute",
        "response": "[EVM] CPI = EV/AC = 0.82 (over budget).\n[EVM] SPI = EV/PV = 0.90 (behind schedule).\n[EVM] CV = -20k, SV = -10k. Corrective action advised.",
        "task": "t3"
      },
      "commands": [
        { "cmd": "list formulas", "out": "[EVM] CPI = EV/AC\n[EVM] SPI = EV/PV\n[EVM] CV = EV-AC\n[EVM] SV = EV-PV", "task": "t4" },
        { "cmd": "status", "out": "[EVM] Indices computed. Both below 1.0." }
      ]
    }
  },
  {
    "id": "Lab 11",
    "num": 11,
    "group": "PROJECT LIFE CYCLE",
    "title": "Project Closeout Checklist",
    "desc": "At closure, you verify that all administrative and contractual steps complete before releasing the team. The lab reinforces obtaining formal acceptance, documenting lessons learned, and archiving records.",
    "objectives": [
      "Sequence the activities of formal project closure.",
      "Recognize the role of lessons learned.",
      "Identify what must precede team release."
    ],
    "console": {
      "host": "pm-sandbox11",
      "boot": [
        "[SYS] Closeout lab online.",
        "[CLOSE] Checklist loaded: acceptance, contracts, archive, release."
      ],
      "tasks": [
        { "id": "t1", "label": "Identify the step that ends the project formally" },
        { "id": "t2", "label": "Identify what must occur before releasing resources" },
        { "id": "t3", "label": "Archive the project records" },
        { "id": "t4", "label": "View the closeout checklist" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Formal project closure requires",
          "options": ["A new charter", "Sponsor's formal acceptance of deliverables", "Another sprint", "A budget increase"],
          "correct": "Sponsor's formal acceptance of deliverables",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Before releasing the team, you should",
          "options": ["Skip documentation", "Capture lessons learned", "Delete records", "Cancel contracts silently"],
          "correct": "Capture lessons learned",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ARCHIVE PROJECT",
        "placeholder": "ERP-Upgrade final records",
        "button": "Archive",
        "response": "[CLOSE] Final deliverables accepted and signed off.\n[CLOSE] Lessons learned logged to OPA repository.\n[CLOSE] Records archived; team released.",
        "task": "t3"
      },
      "commands": [
        { "cmd": "show checklist", "out": "[CLOSE] 1 Obtain formal acceptance\n[CLOSE] 2 Close contracts\n[CLOSE] 3 Lessons learned\n[CLOSE] 4 Archive & release", "task": "t4" },
        { "cmd": "status", "out": "[CLOSE] All closeout items pending final sign-off." }
      ]
    }
  },
  {
    "id": "Lab 12",
    "num": 12,
    "group": "TOOLS AND DOCUMENTATION",
    "title": "Gantt Chart Sequencing",
    "desc": "You sequence activities on a Gantt chart and define dependencies. The lab reinforces predecessor relationships and how a finish-to-start link drives sequencing and milestone placement.",
    "objectives": [
      "Define dependency types between activities.",
      "Place a milestone correctly on a Gantt chart.",
      "Recognize the most common dependency relationship."
    ],
    "console": {
      "host": "pm-sandbox12",
      "boot": [
        "[SYS] Gantt sequencing lab online.",
        "[SCHED] Chart loaded: 6 activities, 0 milestones."
      ],
      "tasks": [
        { "id": "t1", "label": "Identify the most common dependency type" },
        { "id": "t2", "label": "Characterize a milestone's duration" },
        { "id": "t3", "label": "Link two activities with a dependency" },
        { "id": "t4", "label": "Render the Gantt timeline" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Most common dependency between sequential tasks",
          "options": ["Start-to-Start", "Finish-to-Start", "Finish-to-Finish", "Start-to-Finish"],
          "correct": "Finish-to-Start",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Duration of a milestone on a Gantt chart",
          "options": ["Zero", "One day", "The longest task", "Variable"],
          "correct": "Zero",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "LINK ACTIVITIES",
        "placeholder": "Design -> Build (FS)",
        "button": "Link",
        "response": "[SCHED] Dependency created: Design finish-to-start Build.\n[SCHED] Build cannot begin until Design completes.\n[SCHED] Timeline recalculated.",
        "task": "t3"
      },
      "commands": [
        { "cmd": "render gantt", "out": "[SCHED] Design  [====]\n[SCHED] Build        [======]\n[SCHED] Test               [====]\n[SCHED] Go-Live                  <>", "task": "t4" },
        { "cmd": "status", "out": "[SCHED] 6 activities sequenced, 1 milestone set." }
      ]
    }
  },
  {
    "id": "Lab 13",
    "num": 13,
    "group": "TOOLS AND DOCUMENTATION",
    "title": "Choosing the Right Quality Chart",
    "desc": "Given several quality problems, you select the correct analysis chart: Pareto, fishbone, or control chart. The lab reinforces matching the 80/20 rule, root-cause analysis, and process-variation monitoring to the right tool.",
    "objectives": [
      "Select a chart for prioritizing the vital few defects.",
      "Select a chart for structured root-cause analysis.",
      "Select a chart for monitoring process variation over time."
    ],
    "console": {
      "host": "pm-sandbox13",
      "boot": [
        "[SYS] Quality tools lab online.",
        "[QUAL] Defect data loaded: 5 categories, time-series sample."
      ],
      "tasks": [
        { "id": "t1", "label": "Choose the chart for the vital few (80/20)" },
        { "id": "t2", "label": "Choose the chart for cause-and-effect analysis" },
        { "id": "t3", "label": "Choose the chart for process control limits" },
        { "id": "t4", "label": "List available quality charts" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Chart that ranks defects to find the vital few",
          "options": ["Control chart", "Pareto chart", "Fishbone diagram", "Scatter plot"],
          "correct": "Pareto chart",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Diagram for structured root-cause (cause-and-effect)",
          "options": ["Pareto chart", "Fishbone diagram", "Histogram", "Gantt chart"],
          "correct": "Fishbone diagram",
          "task": "t2"
        },
        {
          "id": "c3",
          "label": "Chart for monitoring variation against control limits",
          "options": ["Pareto chart", "Fishbone diagram", "Control chart", "Pie chart"],
          "correct": "Control chart",
          "task": "t3"
        }
      ],
      "commands": [
        { "cmd": "list charts", "out": "[QUAL] Pareto - prioritization\n[QUAL] Fishbone (Ishikawa) - root cause\n[QUAL] Control chart - variation\n[QUAL] Histogram - distribution", "task": "t4" },
        { "cmd": "status", "out": "[QUAL] Quality toolkit nominal." }
      ]
    }
  },
  {
    "id": "Lab 14",
    "num": 14,
    "group": "TOOLS AND DOCUMENTATION",
    "title": "Reading a Burndown Chart",
    "desc": "You interpret an agile burndown chart to judge whether the team will finish the sprint on time. The lab reinforces reading the ideal versus actual line and what an above-the-line trend signals.",
    "objectives": [
      "Interpret the ideal versus actual burndown lines.",
      "Diagnose a sprint that is trending behind.",
      "Recognize what the axes of a burndown chart represent."
    ],
    "console": {
      "host": "pm-sandbox14",
      "boot": [
        "[SYS] Agile metrics lab online.",
        "[AGILE] Burndown loaded: 40 points, day 6 of 10."
      ],
      "tasks": [
        { "id": "t1", "label": "Identify what the Y axis tracks" },
        { "id": "t2", "label": "Diagnose an actual line above the ideal line" },
        { "id": "t3", "label": "Run the burndown projection" },
        { "id": "t4", "label": "View the burndown data" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "The Y axis of a burndown chart shows",
          "options": ["Cost spent", "Work remaining", "Team headcount", "Defect count"],
          "correct": "Work remaining",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Actual line consistently above the ideal line means",
          "options": ["Ahead of schedule", "Behind schedule", "Under budget", "Sprint complete"],
          "correct": "Behind schedule",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "PROJECT BURNDOWN",
        "placeholder": "remaining=22 day=6",
        "button": "Project",
        "response": "[AGILE] 22 points remaining at day 6 of 10.\n[AGILE] Velocity trend projects 4-point shortfall.\n[AGILE] Actual line above ideal: sprint at risk.",
        "task": "t3"
      },
      "commands": [
        { "cmd": "show burndown", "out": "[AGILE] Day1 40 | Day3 33 | Day6 22 (ideal 16)\n[AGILE] Actual above ideal line", "task": "t4" },
        { "cmd": "status", "out": "[AGILE] Sprint trending behind ideal." }
      ]
    }
  },
  {
    "id": "Lab 15",
    "num": 15,
    "group": "TOOLS AND DOCUMENTATION",
    "title": "Change Log Management",
    "desc": "A change request arrives mid-execution. You route it through the change control process, log it, and record the CCB decision. The lab reinforces that approved changes update the baseline.",
    "objectives": [
      "Sequence a change request through change control.",
      "Identify who approves a formal change.",
      "Recognize what happens to the baseline after approval."
    ],
    "console": {
      "host": "pm-sandbox15",
      "boot": [
        "[SYS] Change control lab online.",
        "[CHG] Log loaded: 3 requests, CCB convened."
      ],
      "tasks": [
        { "id": "t1", "label": "Identify the body that approves changes" },
        { "id": "t2", "label": "State the effect of an approved change on the baseline" },
        { "id": "t3", "label": "Log and route a change request" },
        { "id": "t4", "label": "View the change log" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Authority that approves or rejects formal changes",
          "options": ["The developer", "Change Control Board", "End users", "The vendor"],
          "correct": "Change Control Board",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Once a change is approved, the project baseline is",
          "options": ["Left unchanged", "Updated to reflect the change", "Deleted", "Frozen forever"],
          "correct": "Updated to reflect the change",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "LOG CHANGE REQUEST",
        "placeholder": "CR-204 add SSO feature",
        "button": "Submit",
        "response": "[CHG] CR-204 logged and assessed for impact.\n[CHG] Routed to CCB for decision.\n[CHG] If approved, scope/schedule/cost baselines update.",
        "task": "t3"
      },
      "commands": [
        { "cmd": "show changelog", "out": "[CHG] CR-201 Approved (baseline updated)\n[CHG] CR-202 Rejected\n[CHG] CR-204 Pending CCB", "task": "t4" },
        { "cmd": "status", "out": "[CHG] 1 pending decision, baselines current." }
      ]
    }
  },
  {
    "id": "Lab 16",
    "num": 16,
    "group": "TOOLS AND DOCUMENTATION",
    "title": "Dashboard KPI Setup",
    "desc": "You configure a project dashboard with the right KPIs and status indicators. The lab reinforces selecting meaningful metrics and using RAG (red/amber/green) status to convey health at a glance.",
    "objectives": [
      "Select appropriate project KPIs.",
      "Interpret RAG status indicators.",
      "Distinguish a leading from a lagging indicator."
    ],
    "console": {
      "host": "pm-sandbox16",
      "boot": [
        "[SYS] Dashboard lab online.",
        "[DASH] Widgets loaded: schedule, cost, risk, quality."
      ],
      "tasks": [
        { "id": "t1", "label": "Interpret a red RAG status" },
        { "id": "t2", "label": "Select a leading indicator" },
        { "id": "t3", "label": "Add a KPI widget" },
        { "id": "t4", "label": "Render the dashboard" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "A red RAG indicator on the dashboard means",
          "options": ["On track", "Minor concern", "Serious issue needing action", "Complete"],
          "correct": "Serious issue needing action",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Which is a leading indicator",
          "options": ["Final cost variance", "Open risk trend", "Closeout date", "Actual hours billed"],
          "correct": "Open risk trend",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ADD KPI WIDGET",
        "placeholder": "SPI trend gauge",
        "button": "Add",
        "response": "[DASH] KPI widget added: SPI trend gauge.\n[DASH] Threshold set: green >=0.95, amber 0.85-0.95, red <0.85.\n[DASH] Auto-refresh enabled.",
        "task": "t3"
      },
      "commands": [
        { "cmd": "render dashboard", "out": "[DASH] Schedule: AMBER (SPI 0.90)\n[DASH] Cost: RED (CPI 0.82)\n[DASH] Risk: GREEN\n[DASH] Quality: GREEN", "task": "t4" },
        { "cmd": "status", "out": "[DASH] 4 KPIs live, 1 red." }
      ]
    }
  },
  {
    "id": "Lab 17",
    "num": 17,
    "group": "IT AND GOVERNANCE",
    "title": "Cloud Service Model Selection",
    "desc": "Your project must choose among IaaS, PaaS, and SaaS for different workloads. The lab reinforces the shared-responsibility tradeoffs and which model fits each scenario.",
    "objectives": [
      "Differentiate IaaS, PaaS, and SaaS responsibilities.",
      "Match a workload to the correct service model.",
      "Recognize the management tradeoff of each model."
    ],
    "console": {
      "host": "pm-sandbox17",
      "boot": [
        "[SYS] Cloud governance lab online.",
        "[CLOUD] Workloads loaded: web app, dev platform, CRM."
      ],
      "tasks": [
        { "id": "t1", "label": "Pick the model for a ready-to-use CRM" },
        { "id": "t2", "label": "Pick the model giving the most infrastructure control" },
        { "id": "t3", "label": "Provision a service model" },
        { "id": "t4", "label": "List cloud service models" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Model for a fully managed, ready-to-use CRM application",
          "options": ["IaaS", "PaaS", "SaaS", "On-prem"],
          "correct": "SaaS",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Model giving the team control of OS and runtime but not hardware",
          "options": ["SaaS", "IaaS", "PaaS", "BPaaS"],
          "correct": "IaaS",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "PROVISION SERVICE MODEL",
        "placeholder": "PaaS for dev platform",
        "button": "Provision",
        "response": "[CLOUD] PaaS environment provisioned.\n[CLOUD] Provider manages OS/runtime; team manages app and data.\n[CLOUD] Shared-responsibility boundary recorded.",
        "task": "t3"
      },
      "commands": [
        { "cmd": "list models", "out": "[CLOUD] IaaS - you manage OS/apps/data\n[CLOUD] PaaS - you manage apps/data\n[CLOUD] SaaS - you manage data/config only", "task": "t4" },
        { "cmd": "status", "out": "[CLOUD] 3 workloads mapped to models." }
      ]
    }
  },
  {
    "id": "Lab 18",
    "num": 18,
    "group": "IT AND GOVERNANCE",
    "title": "Compliance and Privacy Mapping",
    "desc": "You map project data types to the governing regulation: GDPR, HIPAA, or PCI DSS. The lab reinforces recognizing which framework applies to personal, health, or cardholder data.",
    "objectives": [
      "Map a data type to the correct compliance framework.",
      "Differentiate GDPR, HIPAA, and PCI DSS scope.",
      "Recognize the consequence of a compliance gap."
    ],
    "console": {
      "host": "pm-sandbox18",
      "boot": [
        "[SYS] Compliance mapping lab online.",
        "[GOV] Data inventory loaded: EU PII, patient records, card data."
      ],
      "tasks": [
        { "id": "t1", "label": "Map EU personal data to its regulation" },
        { "id": "t2", "label": "Map cardholder data to its standard" },
        { "id": "t3", "label": "Map protected health information" },
        { "id": "t4", "label": "List compliance frameworks" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Regulation governing EU resident personal data",
          "options": ["HIPAA", "GDPR", "PCI DSS", "SOX"],
          "correct": "GDPR",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Standard governing credit card processing data",
          "options": ["GDPR", "HIPAA", "PCI DSS", "FERPA"],
          "correct": "PCI DSS",
          "task": "t2"
        },
        {
          "id": "c3",
          "label": "Regulation governing US protected health information",
          "options": ["PCI DSS", "GDPR", "HIPAA", "GLBA"],
          "correct": "HIPAA",
          "task": "t3"
        }
      ],
      "commands": [
        { "cmd": "list frameworks", "out": "[GOV] GDPR - EU personal data\n[GOV] HIPAA - US health data\n[GOV] PCI DSS - cardholder data\n[GOV] SOX - financial reporting", "task": "t4" },
        { "cmd": "status", "out": "[GOV] 3 data types mapped, 0 unclassified." }
      ]
    }
  },
  {
    "id": "Lab 19",
    "num": 19,
    "group": "IT AND GOVERNANCE",
    "title": "CI/CD and Change-Control Workflow",
    "desc": "You align an automated CI/CD pipeline with formal change-control governance. The lab reinforces gating production deployments through approvals while keeping integration and testing automated.",
    "objectives": [
      "Sequence stages of a CI/CD pipeline.",
      "Identify where change approval gates the pipeline.",
      "Recognize the goal of continuous integration."
    ],
    "console": {
      "host": "pm-sandbox19",
      "boot": [
        "[SYS] CI/CD governance lab online.",
        "[PIPE] Pipeline loaded: build -> test -> approve -> deploy."
      ],
      "tasks": [
        { "id": "t1", "label": "State the goal of continuous integration" },
        { "id": "t2", "label": "Identify where production deploys are gated" },
        { "id": "t3", "label": "Promote a release through the gate" },
        { "id": "t4", "label": "View the pipeline stages" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Primary goal of continuous integration",
          "options": ["Skip testing", "Merge and validate code frequently", "Deploy without review", "Remove version control"],
          "correct": "Merge and validate code frequently",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Production deployment should be gated by",
          "options": ["No control at all", "Change-control approval", "A single developer", "Random selection"],
          "correct": "Change-control approval",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "PROMOTE RELEASE",
        "placeholder": "release v2.3 to prod",
        "button": "Promote",
        "response": "[PIPE] Build and automated tests passed.\n[PIPE] Change-control gate: CCB approval required and granted.\n[PIPE] Release v2.3 deployed to production.",
        "task": "t3"
      },
      "commands": [
        { "cmd": "show pipeline", "out": "[PIPE] 1 Build (auto)\n[PIPE] 2 Test (auto)\n[PIPE] 3 Approve (CCB gate)\n[PIPE] 4 Deploy", "task": "t4" },
        { "cmd": "status", "out": "[PIPE] Pipeline green, awaiting approval gate." }
      ]
    }
  },
  {
    "id": "Lab 20",
    "num": 20,
    "group": "CAPSTONE",
    "title": "End-to-End Project Simulation",
    "desc": "A capstone simulation runs a project from charter to closeout, touching concepts, life cycle, tooling, and governance. You make a key decision in each domain to drive the project to a controlled close.",
    "objectives": [
      "Apply concepts, life cycle, tooling, and governance in one flow.",
      "Make correct decisions at each project phase.",
      "Drive the project to a formal, compliant close."
    ],
    "console": {
      "host": "pm-sandbox20",
      "boot": [
        "[SYS] Capstone simulation online.",
        "[SIM] Project loaded: cloud migration, all four domains active."
      ],
      "tasks": [
        { "id": "t1", "label": "Choose the methodology (concepts)" },
        { "id": "t2", "label": "Authorize initiation (life cycle)" },
        { "id": "t3", "label": "Track health with the right tool" },
        { "id": "t4", "label": "Govern data and close the project" }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Methodology for a phased, fixed-deadline migration with evolving UI",
          "options": ["Pure Waterfall", "Pure Agile", "Hybrid", "Ad hoc"],
          "correct": "Hybrid",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Document that authorizes the project to begin",
          "options": ["Status report", "Project charter", "Burndown chart", "Issue log"],
          "correct": "Project charter",
          "task": "t2"
        },
        {
          "id": "c3",
          "label": "Tool to show schedule and cost health at a glance",
          "options": ["Fishbone diagram", "RAG dashboard", "WBS dictionary", "RACI matrix"],
          "correct": "RAG dashboard",
          "task": "t3"
        }
      ],
      "payload": {
        "label": "CLOSE PROJECT (GOVERNANCE)",
        "placeholder": "verify GDPR + formal acceptance",
        "button": "Close",
        "response": "[SIM] EU data verified GDPR-compliant.\n[SIM] Sponsor acceptance obtained; lessons learned archived.\n[SIM] Capstone project formally closed across all domains.",
        "task": "t4"
      },
      "commands": [
        { "cmd": "show summary", "out": "[SIM] Concepts: Hybrid selected\n[SIM] Life cycle: Charter signed\n[SIM] Tools: RAG dashboard live\n[SIM] Governance: GDPR mapped", "task": "t4" },
        { "cmd": "status", "out": "[SIM] All four domains green. Ready to close." }
      ]
    }
  }
];
