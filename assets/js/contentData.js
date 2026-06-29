/* ============================================================================
   project+  ::  contentData.js
   Exam facts, per-domain metadata + objectives, PBQ format definitions,
   curated external resources, the Exam-Mechanics and Career-Guidance readers,
   and the textbook-dense domain reading content (PROJPLUS.reading[1..4],
   loaded on demand from assets/js/content/domainN.js).

   This file loads first and establishes the global PROJPLUS namespace consumed
   by quizEngine.js and app.js.

   SINGLE SOURCE OF TRUTH: every exam figure (duration, item count, passing
   score, scale band, domain count) lives once in PROJPLUS.exam below. The
   dashboard cards, mock-exam engine, scoring, analytics, readiness projection,
   and history readouts all READ from it — no exam figure is duplicated as a
   literal elsewhere in the UI or engine.

   Authored by Professor Rizwan Virani, San Jacinto College.
   ========================================================================== */
window.PROJPLUS = window.PROJPLUS || {};

PROJPLUS.exam = {
  code: "PK0-005",
  name: "CompTIA Project+",
  minutes: 90,
  maxQuestions: 90,
  scaleLow: 100, scaleHigh: 900, passing: 710,
  domains: 4,
  launched: "2022",
  retiredPredecessor: "PK0-004"
};

/* Per-domain metadata. `objectives` mirror the official PK0-005 exam outline.
   `sectionCount` is the number of reading sections in each lazy-loaded module. */
PROJPLUS.domainMeta = [
  { id: 1, weight: 33, color: "d1", icon: "📐", title: "Project Management Concepts", sectionCount: 11,
    short: "The core discipline: project characteristics and methodologies, Agile vs. Waterfall, change and risk and issue control, schedule and quality management, communication, meetings, teams, and procurement.",
    objectives: [
      { id: "1.1", t: "Explain the basic characteristics of a project and various methodologies and frameworks used in IT projects" },
      { id: "1.2", t: "Compare and contrast Agile vs. Waterfall concepts" },
      { id: "1.3", t: "Given a scenario, apply the change control process throughout the project life cycle" },
      { id: "1.4", t: "Given a scenario, perform risk management activities" },
      { id: "1.5", t: "Given a scenario, perform issue management activities" },
      { id: "1.6", t: "Given a scenario, apply schedule development and management activities and techniques" },
      { id: "1.7", t: "Compare and contrast quality management concepts and performance management concepts" },
      { id: "1.8", t: "Compare and contrast communication management concepts" },
      { id: "1.9", t: "Given a scenario, apply effective meeting management techniques" },
      { id: "1.10", t: "Given a scenario, perform basic activities related to team and resource management" },
      { id: "1.11", t: "Explain important project procurement and vendor selection concepts" }
    ] },
  { id: 2, weight: 30, color: "d2", icon: "🔄", title: "Project Life Cycle Phases", sectionCount: 5,
    short: "The journey of a project: the value of discovery artifacts, then the activities that drive initiation, planning, execution, and a disciplined closing phase.",
    objectives: [
      { id: "2.1", t: "Explain the value of artifacts in the discovery/concept preparation phase for a project" },
      { id: "2.2", t: "Given a scenario, perform activities during the project initiation phase" },
      { id: "2.3", t: "Given a scenario, perform activities during the project planning phase" },
      { id: "2.4", t: "Given a scenario, perform activities during the project execution phase" },
      { id: "2.5", t: "Explain the importance of activities performed during the closing phase" }
    ] },
  { id: 3, weight: 19, color: "d3", icon: "📊", title: "Tools and Documentation", sectionCount: 3,
    short: "The instruments of control: life-cycle tools like Gantt, PERT, and risk registers; the productivity tool landscape; and the quality and performance charts that inform decisions.",
    objectives: [
      { id: "3.1", t: "Given a scenario, use the appropriate tools throughout the project life cycle" },
      { id: "3.2", t: "Compare and contrast various project management productivity tools" },
      { id: "3.3", t: "Given a scenario, analyze quality and performance charts to inform project decisions" }
    ] },
  { id: 4, weight: 18, color: "d4", icon: "🏛", title: "Basics of IT and Governance", sectionCount: 5,
    short: "The context every IT project lives in: ESG factors, information security, compliance and privacy, foundational IT and cloud concepts, and operational change control.",
    objectives: [
      { id: "4.1", t: "Summarize basic environmental, social, and governance (ESG) factors related to project management activities" },
      { id: "4.2", t: "Explain relevant information security concepts impacting project management concepts" },
      { id: "4.3", t: "Explain relevant compliance and privacy considerations impacting project management" },
      { id: "4.4", t: "Summarize basic IT concepts relevant to IT project management" },
      { id: "4.5", t: "Explain operational change-control processes during an IT project" }
    ] }
];

/* The five PBQ formats. `domainColor` just drives the badge tint. */
PROJPLUS.pbqFormats = [
  { id: 1, icon: "🧭", domainColor: 1, obj: "1.6 / 3.1", badge: "CRITICAL PATH", title: "Critical Path & Schedule Network",
    desc: "Read an activity table or network diagram and work the schedule: identify the critical path, total duration, an activity's float, and which slip moves the finish date.",
    long: "Each scenario gives you a set of activities with durations and dependencies. Walk the <b>forward pass</b> and <b>backward pass</b>, compute <b>total float</b>, name the <b>critical path</b>, and judge which delay actually slips the project end date versus which is absorbed by slack." },
  { id: 2, icon: "⚠", domainColor: 1, obj: "1.4", badge: "RISK REGISTER", title: "Risk Register & Response Planning",
    desc: "Score and rank risks by probability and impact, then choose the correct response strategy — avoid, mitigate, transfer, accept — and the right contingency for each.",
    long: "You are managing the risk register. For each entry, compute the <b>risk score</b> (probability × impact), prioritize, and select the appropriate <b>response strategy</b> (avoid, mitigate, transfer, accept; exploit, enhance, share for opportunities), distinguishing <b>mitigation</b> from <b>contingency</b> and identifying owners and triggers." },
  { id: 3, icon: "📈", domainColor: 2, obj: "2.4 / 3.3", badge: "EARNED VALUE", title: "Earned Value Management",
    desc: "Given PV, EV, AC, and BAC, compute CV, SV, CPI, and SPI, then interpret whether the project is over/under budget and ahead of/behind schedule, and forecast the EAC.",
    long: "Engineer the performance analysis. From <b>PV</b>, <b>EV</b>, <b>AC</b>, and <b>BAC</b>, calculate <b>CV</b>, <b>SV</b>, <b>CPI</b>, and <b>SPI</b>; read each variance and index for budget and schedule health; and forecast the <b>Estimate at Completion</b>. Every number is internally consistent so the math checks out." },
  { id: 4, icon: "🔧", domainColor: 1, obj: "1.3 / 1.5", badge: "CHANGE & ISSUE", title: "Change & Issue Control Workflow",
    desc: "Triage a change request or issue-log entry: classify the change type, choose the correct next CCB step, separate scope change from scope creep, and set escalation.",
    long: "Run the control process. For each item, classify the change as <b>standard</b>, <b>normal</b>, or <b>emergency</b>, choose the correct <b>change control board</b> step, distinguish a legitimate <b>scope change</b> from <b>scope creep</b>, and set the right <b>issue severity, owner, and escalation</b> path." },
  { id: 5, icon: "📑", domainColor: 2, obj: "1.11 / 2.2", badge: "PROCUREMENT & RACI", title: "Procurement, Contracts & RACI",
    desc: "Select the best contract type for a situation, choose RFI vs. RFP vs. RFQ, and assign or repair a responsibility assignment matrix (RACI) without role conflicts.",
    long: "Make the sourcing and accountability calls. Pick the right <b>contract type</b> (fixed-price, time-and-materials, cost-reimbursable) for the risk profile, choose the correct <b>exploratory document</b> (RFI/RFP/RFQ), and assign or correct a <b>RACI</b> grid so each task has exactly one Accountable owner." }
];

/* Curated free study resources. */
PROJPLUS.resources = [
  { icon: "📄", title: "Official CompTIA Project+ PK0-005 Exam Objectives (PDF)", host: "comptia.org",
    url: "https://www.comptia.org/en-us/certifications/project/",
    desc: "The authoritative exam outline — every objective and sub-bullet CompTIA can test. Download the objectives PDF from the certification page and use it as your master checklist." },
  { icon: "👥", title: "r/CompTIA — Community Wiki & Study Guides", host: "reddit.com/r/CompTIA",
    url: "https://www.reddit.com/r/CompTIA/wiki/index/",
    desc: "Crowd-sourced study plans, exam-day experiences, and the well-known community guides. Read recent “passed” posts for current question-style intel on Project+." },
  { icon: "📋", title: "r/projectmanagement — Practice & Career", host: "reddit.com/r/projectmanagement",
    url: "https://www.reddit.com/r/projectmanagement/",
    desc: "Real-world context: how Project+ concepts play out on actual projects, how the cert fits coordinator and PM roles, and discussions that reinforce the exam vocabulary." },
  { icon: "📚", title: "PMI Lexicon & A Guide to the PMBOK", host: "pmi.org",
    url: "https://www.pmi.org/pmbok-guide-standards/lexicon",
    desc: "When a definition has to be exact, the Project Management Institute is the source. The PMI Lexicon standardizes the vocabulary — risk responses, EVM terms, life-cycle phases — that underpins much of the exam." },
  { icon: "🧮", title: "Earned Value Management Reference (NDIA / DAU)", host: "dau.edu",
    url: "https://www.dau.edu/tools/integrated-program-management",
    desc: "Deep, free reference material on EVM: PV/EV/AC, the variances and indices (CV, SV, CPI, SPI), and forecasting (EAC). Excellent for cementing the Domain 2 and 3 performance-analysis math." },
  { icon: "🎥", title: "Agile & Scrum Fundamentals (Scrum Guide)", host: "scrumguides.org",
    url: "https://scrumguides.org/",
    desc: "The free, authoritative source on Scrum roles, events, and artifacts — directly relevant to the Agile-vs-Waterfall objective and the methodology and meeting-management content throughout Domain 1." }
];

/* ---- Reader: Exam Mechanics card ---- */
PROJPLUS.examMechanics = [
  { heading: "Format, length, and delivery", body:
    "<p>The <strong>CompTIA Project+ PK0-005</strong> is a single exam of <strong>up to 90 questions</strong> to be completed in <strong>90 minutes</strong>. It is delivered either at a Pearson VUE testing center or via OnVUE online proctoring. Because the count is a <em>maximum</em>, your particular form may contain fewer scored items; CompTIA also seeds unscored questions it is evaluating for future exams, and you cannot tell which is which — so treat every question as if it counts.</p>" +
    "<p>The exam mixes <strong>multiple-choice</strong> items (single- and multiple-response) with a handful of <strong>performance-based questions (PBQs)</strong>. PBQs are interactive tasks — sequencing a schedule, sorting risks into the right response, reading earned-value numbers — and they typically appear first. They are worth more and consume more time, which leads directly to the single most important time-management rule below.</p>" +
    "<div class='callout exam'><div class='lbl'>Exam tip</div>PBQs front-load the exam and can eat your clock. If a PBQ stalls you, <strong>flag it and move on</strong>. Bank the fast multiple-choice points first, then return with whatever time remains.</div>" },
  { heading: "Scoring: the 100–900 scale", body:
    "<p>Project+ is scored on a <strong>scaled range of 100 to 900</strong>, and the passing score is <strong>710</strong>. Scaled scoring is not a simple percentage: CompTIA weights items by difficulty and equates across exam forms so that no candidate is advantaged or disadvantaged by drawing a harder set. As a result you cannot reverse-engineer an exact “number correct” from 710, and CompTIA does not publish the raw-to-scaled mapping.</p>" +
    "<p>Practically, strong candidates aim to answer roughly <strong>80% or more</strong> of questions correctly to give themselves comfortable margin. There is <strong>no penalty for guessing</strong> — an unanswered question is simply wrong — so you should never leave an item blank. Eliminate obviously wrong options, make your best choice, flag it if unsure, and move on.</p>" +
    "<blockquote>This platform’s mock exam reports a scaled score using a transparent linear approximation of the 100–900 band. Use it as a <em>relative</em> readiness signal — “am I trending toward 710?” — not as a literal prediction of your official score.</blockquote>" },
  { heading: "Question styles and how to read them", body:
    "<p>CompTIA writes “best answer” questions. Often two or three options are <em>plausible</em> and only one is <em>best</em> for the scenario described. Read the <strong>last sentence first</strong> — it usually contains the actual ask (“which document should the project manager update <em>first</em>…”, “what is the <em>best</em> response to this risk…”). Words like <strong>first</strong>, <strong>best</strong>, <strong>most likely</strong>, and <strong>least</strong> are decisive; circle them mentally.</p>" +
    "<ul><li><strong>Multiple-response</strong> items tell you how many to pick (“choose two”). You must get all of them right for credit.</li><li><strong>Scenario</strong> items bury the relevant detail in a paragraph — identify the phase, the constraint, and the stakeholder before looking at options.</li><li><strong>PBQs</strong> reward methodical work; partial credit is generally available, so complete every field you can even if unsure of one.</li></ul>" +
    "<div class='callout'><div class='lbl'>Strategy</div>Use the <strong>flag-and-review</strong> workflow. First pass: answer everything you know cold and flag the rest. Second pass: spend remaining minutes only on flagged items. This guarantees you never run out of time with easy points unanswered.</div>" },
  { heading: "Eligibility, cost, and renewal", body:
    "<p>There are <strong>no formal prerequisites</strong>, but CompTIA recommends at least <strong>6 to 12 months</strong> of hands-on experience managing or directly contributing to small- to medium-scale projects. The exam voucher cost varies by region (commonly in the US$350+ range). Academic and bundle discounts exist — ask your institution. There may also be funding available for a free voucher. Connect with the Program Director or your professor for more information about funding opportunities.</p>" +
    "<p>A notable advantage of Project+: unlike most CompTIA certifications, it <strong>does not expire</strong> and has <strong>no continuing-education requirement</strong>. Once you pass, the credential is good for life — there is no three-year renewal cycle to maintain.</p>" },
  { heading: "Exam-day logistics", body:
    "<p>Bring two forms of ID; for online proctoring you must show a clear workspace, a working webcam, and a stable connection. You cannot use notes, phones, or smartwatches. A simple on-screen whiteboard or provided scratch material may be available — use it to jot the formula you’ll otherwise lose under pressure (think the EVM set: CV = EV − AC, or the order of the project life-cycle phases).</p>" +
    "<div class='callout scenario'><div class='lbl'>Mindset</div>Arrive early, breathe, and remember: the exam tests <strong>judgment and process</strong>, not trivia recall. Most questions are answerable by applying core principles — the project life cycle, the triple constraint, stakeholder management, and change control — to the scenario in front of you.</div>" }
];

/* ---- Reader: Career Guidance card ---- */
PROJPLUS.careerGuidance = [
  { heading: "Where Project+ sits on the ladder", body:
    "<p><strong>Project+ is the foundational, vendor-neutral project management certification.</strong> It is typically the first PM-specific credential a professional earns, validating the ability to manage small- to medium-sized projects end to end. Its value is breadth: it proves you can speak the language of project management across the life cycle, methodologies (Agile and Waterfall), risk and change control, communication, and the IT context projects run in.</p>" +
    "<p>For hiring managers, Project+ on a résumé is shorthand for “this person understands how projects are structured and won’t need the basics explained.” It is frequently listed as a <em>preferred</em> qualification for coordinator and junior project-management roles and is a natural stepping stone toward PMI’s CAPM and, with experience, the PMP.</p>" },
  { heading: "A lifetime certification with no renewal", body:
    "<p>One of Project+’s most concrete career advantages is that it <strong>never expires</strong>. Where most certifications demand continuing-education units or periodic re-testing, Project+ is a one-and-done credential — you pass it once and it remains valid for the rest of your career.</p>" +
    "<p>That makes it an unusually low-friction way to formally validate project-management knowledge. It is also <strong>broadly applicable beyond IT</strong>: although the objectives include IT-specific governance content, the core project-management discipline transfers to construction, healthcare, finance, and any field that runs projects.</p>" +
    "<div class='callout exam'><div class='lbl'>Why it matters</div>No expiration means no recurring cost or CE burden. Project+ is a durable line on your résumé that keeps its value while you build the experience needed for higher-level credentials like the PMP.</div>" },
  { heading: "Roles Project+ opens", body:
    "<p>Project+ aligns with a cluster of early-career roles. It will not, by itself, make you a senior program manager — but it credibly qualifies you for:</p>" +
    "<ul>" +
    "<li><strong>Project Coordinator</strong> — maintaining schedules, logs, and documentation, and supporting a project manager. The Domain 2 life-cycle and Domain 3 tools content map almost directly to this job.</li>" +
    "<li><strong>Junior / Associate Project Manager</strong> — running small projects: scope, schedule, budget, risk, and stakeholder communication.</li>" +
    "<li><strong>Scrum Team Member / Agile Coordinator</strong> — supporting sprints, backlogs, and ceremonies on Agile teams.</li>" +
    "<li><strong>Business / Operations Analyst advancing into delivery</strong> — the cert is a common springboard from analysis into project ownership.</li>" +
    "<li><strong>PMO Analyst (entry)</strong> — supporting a project management office with reporting, governance, and tool administration.</li>" +
    "</ul>" },
  { heading: "Building the path beyond Project+", body:
    "<p>Treat Project+ as a launch point, not a destination. A common trajectory: <em>Project+ → hands-on coordinator or junior-PM experience → a deeper PM credential</em>. From here, many learners pursue <strong>PMI’s CAPM</strong> (a close peer to Project+) or, once they have the requisite experience hours, the <strong>PMP</strong>; Agile-focused practitioners add <strong>PMI-ACP</strong> or a <strong>Certified ScrumMaster</strong>; and those staying in IT delivery pair it with technical certifications relevant to the projects they run.</p>" +
    "<div class='callout scenario'><div class='lbl'>Practical advice</div>Pair the cert with <strong>demonstrable delivery</strong> — a documented project you coordinated, a WBS and schedule you built, a risk register you maintained. Certifications get you past résumé filters; evidence of shipped projects gets you through interviews.</div>" }
];

/* Reading content is loaded on demand: each domain's dense reading sections live
   in their own module under assets/js/content/domainN.js and are fetched the
   first time a Domain Study card is opened. This object is the shared target
   those modules populate: PROJPLUS.reading[N] = [ ...sections ]. */
PROJPLUS.reading = PROJPLUS.reading || {};

/* Flashcard decks are likewise lazy-loaded from assets/js/content/flashN.js
   (100 cards per domain) and populate this object: PROJPLUS.flash[N] = [ ...cards ]. */
PROJPLUS.flash = PROJPLUS.flash || {};
