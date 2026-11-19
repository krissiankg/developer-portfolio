type Source = { label: string; url: string };
type Evidence = { answer: string; section: string; sources: Source[] };

const github = { label: "Public GitHub profile", url: "https://github.com/krissiankg/" };
const resume = { label: "Public-safe resume", url: "/resumes/christian-public-resume.pdf" };
const portfolio = { label: "Current portfolio", url: "https://gchristian.online/" };
const repo = (name: string): Source => ({ label: `${name} source`, url: `https://github.com/krissiankg/${name}` });

// Only approved, public-safe text is returned. No user text is interpolated.
// This is deliberately a curated lookup, not a model generating biographical facts.
export const evidence: Record<string, Evidence> = {
  fit: {
    answer: "Christian brings practical web application and database work, website maintenance, user testing and data verification, plus AI-assisted development tools. His Spass mit Deutsch platform documents registration, PostgreSQL/Prisma, role-based access, audit logs and PDF documents. These are relevant foundations for debugging and validating web features at ODNOS. Professional AI-generated pull-request review and formal automated testing are not verified; those are transferable skills to develop, not claimed experience.",
    section: "#fit", sources: [repo("spassmitdeutschbenin"), github, resume],
  },
  spass: {
    answer: "Spass mit Deutsch — Examination Platform is the strongest technical evidence for this role. The resume describes Christian building the platform, and its public README documents dynamic registration fees, Excel imports, score entry by module, payment tracking, restricted administrative roles, audit logs and PDF receipts. The current repository uses Next.js 14, React 18 and JavaScript, with PostgreSQL, Prisma and NextAuth. Fee rules, data consistency and role permissions are relevant validation targets—not claims about a specific past bug or test.",
    section: "#projects", sources: [repo("spassmitdeutschbenin"), resume],
  },
  debugging: {
    answer: "The resume lists website maintenance, technical troubleshooting, user testing and feedback-based interface iteration. It also documents survey-system support and research-data verification. The examination platform offers inspectable examples of application state, role permissions and data workflows. No named production bug, bug-fix metric or professional AI-generated PR review was verified. The portfolio’s eleven-step bug workflow is a proposed approach: understand the requirement, reproduce the problem, find the root cause, make a small fix, validate it, check edge cases and regressions, and document verification.",
    section: "#approach", sources: [resume, repo("spassmitdeutschbenin")],
  },
  ai: {
    answer: "Christian’s public GitHub profile lists Cursor, Antigravity and Claude for AI-assisted iteration. The resume also lists self-directed learning in AI automation, n8n and Make. His stated operating principle here is to treat generated code as a draft and verify behavior against requirements. This is not evidence of professional AI-generated PR review. ExcelTools’ AI cleaning and Chat with CSV are roadmap items, not verified shipped features; the CapCut editor is based on upstream OpenReel, not an original AI engine authored by Christian.",
    section: "#ai", sources: [github, repo("exceltools-site"), repo("capcut.guelichweb"), resume],
  },
  testing: {
    answer: "Verified evidence is user testing and interface iterations based on feedback, research-data checks for completeness/consistency/accuracy, and quality control of survey data collection systems. These transfer to reproducing issues and validating features and data. Formal automated-test experience, RSpec, GitHub Actions and automated regression suites are not verified. The bug-validation workflow in this portfolio describes how he proposes to work, not a record of completed tests.",
    section: "#approach", sources: [resume],
  },
  databases: {
    answer: "PostgreSQL is explicitly supported by the resume and the Spass mit Deutsch repository, which documents Prisma ORM and application data for exams, candidates, roles and payments. CapCut Studio documents Supabase PostgreSQL migrations. The resume also lists Survey Solutions Designer/Server, MySQL and SQL Server. This demonstrates database and structured-data experience; it is not an independently audited security or performance claim.",
    section: "#skills", sources: [repo("spassmitdeutschbenin"), repo("capcut.guelichweb"), resume],
  },
  exceltools: {
    answer: "ExcelTools is relevant for data handling: the resume describes browser-local conversion, extraction, comparison, merging and cleaning of Excel, CSV, JSON and XML files in 2025. Its public repository describes a newer Next.js/TypeScript/PostgreSQL/Prisma SaaS iteration, while the documented live URL points to the older production version. That live domain did not resolve during our check; the repository is available to inspect. AI cleaning, Chat with CSV, formula generation and categorization are explicitly roadmap items; Stripe is in progress. Do not treat those as verified live features.",
    section: "#projects", sources: [repo("exceltools-site"), resume],
  },
  capcut: {
    answer: "CapCut Studio is integration evidence, not original editor authorship. Its README states that the editor is based on OpenReel Video. Documented custom work includes a French-language Node.js authentication/admin portal, auth API and legal pages, Supabase PostgreSQL migrations, Nginx deployment and backup documentation, and upstream rebranding. The GitHub profile mentions Whisper transcription, but authorship of an AI engine or model is not verified.",
    section: "#projects", sources: [repo("capcut.guelichweb"), { label: "OpenReel upstream", url: "https://github.com/Augani/openreel-video" }],
  },
  guelichweb: {
    answer: "Guelichweb’s public repository documents a bilingual French/English Next.js 14 and React platform, with Sanity CMS, Resend email integration, Tailwind CSS, Framer Motion and Vercel deployment. The resume identifies Christian as founder/developer; his current portfolio dates the founder role to 2023–present. It offers evidence of content integration, language routing and maintainable web delivery, without claiming specific performance metrics.",
    section: "#projects", sources: [repo("guelichweb"), portfolio, resume],
  },
  skills: {
    answer: "Relevant supported skills include React, Next.js, JavaScript, TypeScript (resume and the newer ExcelTools repository), HTML/CSS, Tailwind CSS, Node.js, PostgreSQL, Prisma, NextAuth, Supabase, Sanity, Resend, jsPDF, GitHub and Vercel. AI tools include Cursor, Antigravity, Claude, n8n and Make. QA evidence is user testing and data verification. The current Spass and Guelichweb repositories are JavaScript, so this portfolio does not relabel them as TypeScript.",
    section: "#skills", sources: [github, repo("spassmitdeutschbenin"), repo("exceltools-site"), repo("guelichweb"), resume],
  },
  experience: {
    answer: "Relevant candidate-provided history: GUELICHWEB founder/developer, 2023–present (current portfolio); Spass mit Deutsch web development, January 2024–June 2026 (resume); freelance website/custom-platform development and maintenance, 2017–present; JSAN webmaster/technical support, 2025; PADA-Nutrition survey-system/database support, January 2021; IRD data entry and verification, November 2018. Broader freelance experience is distinct from his targeted early-career developer role.",
    section: "#experience", sources: [portfolio, resume],
  },
  education: {
    answer: "The resume lists Management Programming Training and Computer & Network Maintenance Training in 2018, a 2018 Figma/UI/UX course from Zero To Mastery Academy, and ongoing self-directed learning in web development and AI automation. It lists CBG 2 at the University of Abomey-Calavi in 2010; no completed university degree or computer-science/engineering qualification is claimed.",
    section: "#education", sources: [resume],
  },
  git: {
    answer: "Christian’s public source is at github.com/krissiankg. The four selected repositories are spassmitdeutschbenin, exceltools-site, capcut.guelichweb and guelichweb. The resume describes GitHub version-control/collaboration workflows. Public code is inspectable, but professional AI-generated PR review, GitHub Actions and specific project-board experience are not verified.",
    section: "#projects", sources: [github, repo("spassmitdeutschbenin"), repo("exceltools-site"), resume],
  },
  communication: {
    answer: "The resume documents website training and support, participant assistance and coordination of updates at JSAN, and remote technical support/training for digital survey workflows. Public repositories include setup and deployment documentation. These support technical communication and independent project work; they do not establish a formal senior-engineering role.",
    section: "#experience", sources: [resume, repo("guelichweb")],
  },
  learning: {
    answer: "I don’t have verified information establishing experience with Ruby on Rails, ERB, Stimulus, Hotwire, Heroku, RSpec or GitHub Actions. The portfolio treats these as technologies to learn, with transferable foundations from web development, databases, user testing and GitHub. Formal automated testing and professional AI-generated pull-request review are also not verified. PostgreSQL is different: it is explicitly documented in the resume and examination-platform source.",
    section: "#fit", sources: [resume, repo("spassmitdeutschbenin")],
  },
  contact: {
    answer: "Use Christian’s LinkedIn link from his public GitHub profile to contact him: linkedin.com/in/christian-guegueligue-a66876188/. His current portfolio lists a different LinkedIn slug, so that discrepancy is disclosed rather than silently merged. Private contact details and references are not part of this portfolio or assistant.",
    section: "#contact", sources: [github, { label: "LinkedIn (GitHub-profile link)", url: "https://www.linkedin.com/in/christian-guegueligue-a66876188/" }],
  },
};

export const unknown: Evidence = {
  answer: "I don’t have verified information about that.",
  section: "", sources: [],
};

export function findEvidence(question: string): Evidence {
  const q = question.normalize("NFKC").toLowerCase();
  // No executable instructions, prompt contents, personal data, or external fetches.
  if (/ignore|override|system.?prompt|instructions|jailbreak|pretend|invent|fabricat|secret|api.?key|password|phone|birthday|birth|street|home address|private|salary|compensation|married|religion|politic|email|references|hired|availability|visa|work permit|years of|how many|how much|users|revenue|uptime|guarantee/.test(q)) return unknown;
  if (/rails|ruby|erb|stimulus|hotwire|heroku|rspec|github actions|automated tests|automated testing|pull.request review|review.*pull.request|review.*ai.generated/.test(q)) return evidence.learning!;
  if (/which project|best.*project|strongest.*project|best demonstrates/.test(q)) return evidence.spass!;
  if (/good fit|strong fit|role fit|odnos|why.*role/.test(q)) return evidence.fit!;
  if (/exceltools|excel tools|csv|spreadsheet/.test(q)) return evidence.exceltools!;
  if (/capcut|openreel|whisper|video editor/.test(q)) return evidence.capcut!;
  if (/spass|examination|exam platform/.test(q)) return evidence.spass!;
  if (/guelichweb/.test(q)) return evidence.guelichweb!;
  if (/\bai\b|artificial intelligence|cursor|antigravity|claude|automation|n8n|make/.test(q)) return evidence.ai!;
  if (/debug|bug|troubleshoot|solve technical|root cause/.test(q)) return evidence.debugging!;
  if (/test|quality|validation|\bqa\b|verify|verification/.test(q)) return evidence.testing!;
  if (/database|postgres|prisma|supabase|sql/.test(q)) return evidence.databases!;
  if (/education|study|studied|training|degree|university|course/.test(q)) return evidence.education!;
  if (/contact|linkedin|connect/.test(q)) return evidence.contact!;
  if (/github|\bgit\b|repository|repositories|source code/.test(q)) return evidence.git!;
  if (/communication|document|independent|freelance/.test(q)) return evidence.communication!;
  if (/experience|background|work history|career/.test(q)) return evidence.experience!;
  if (/skills|technolog|stack|frontend|backend|javascript|typescript|react|next.js|web development/.test(q)) return evidence.skills!;
  return unknown;
}
