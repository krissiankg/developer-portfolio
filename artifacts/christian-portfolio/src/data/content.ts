export const LINKS = {
  github: 'https://github.com/krissiankg/',
  portfolio: 'https://gchristian.online/',
  linkedin: 'https://www.linkedin.com/in/christian-guegueligue-a66876188/',
  resume: `${import.meta.env.BASE_URL}resumes/christian-public-resume.pdf`,
};

export const NAV = [
  ['fit', 'Fit'],
  ['projects', 'Projects'],
  ['approach', 'Approach'],
  ['ai', 'AI'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['education', 'Education'],
  ['contact', 'Contact'],
] as const;

export const SAFE_SECTIONS = new Set(NAV.map(([id]) => id));

export const STARTERS = [
  'Why is Christian a good fit for this role?',
  'Which project best demonstrates his technical abilities?',
  'What evidence shows that he can debug and solve technical problems?',
  'How does he use AI in software development?',
];

export const CAPABILITIES = [
  {
    t: 'Web Development & Debugging',
    d: 'Web applications, website maintenance and technical troubleshooting. No named bug incident is claimed; the evidence is the applications themselves.',
  },
  {
    t: 'Testing, QA & Attention to Detail',
    d: 'User testing and feedback-based interface iterations, plus data verification work. Transferable to reproducing bugs and checking edge cases. No formal automated-test credential.',
  },
  {
    t: 'AI-Assisted Development & Problem Solving',
    d: 'GitHub profile lists Cursor, Antigravity and Claude for rapid iteration; resume lists n8n, Make and Antigravity. Human validation is a working principle, not a PR-review history.',
  },
];

export type Project = {
  id: string;
  n: string;
  name: string;
  kind: string;
  short: string;
  problem: string;
  contribution: string;
  stack: string[];
  challenges: string[];
  implementation: string[];
  outcome: string;
  caveat?: string;
  repo: string;
  live: string;
};

export const PROJECTS: Project[] = [
  {
    id: 'spass',
    n: '01',
    name: 'Spass mit Deutsch — Examination Platform',
    kind: 'Backend, data and access control',
    short: 'Exam registration, marks, results and accounting in one role-controlled application. The strongest backend, database and access-control evidence.',
    problem: 'Centralize candidate registration, marks, results and accounting for a language-center examination process.',
    contribution: 'Candidate-provided: built the examination registration, administration and results platform. The resume dates language-center web work January 2024 to June 2026.',
    stack: ['Next.js 14', 'React 18', 'JavaScript', 'PostgreSQL', 'Prisma', 'NextAuth', 'Tailwind CSS', 'Nodemailer', 'jsPDF'],
    challenges: [
      'Validating exam fees and scores consistently across different roles.',
      'Protecting student results.',
      'Tracing sensitive changes.',
    ],
    implementation: [
      'Dynamic exam fee calculation.',
      'Excel imports; candidate IDs and consultation codes.',
      'Scores by module and payment status; PDF receipts.',
      'Role-based access for super admin, secretariat and accounting.',
      'Audit trail for sensitive changes; custom registration fields.',
    ],
    outcome: 'Implemented examination-management workflows. No usage numbers or security guarantees are claimed.',
    caveat: 'The current repository is JavaScript. The resume additionally mentions TypeScript. No specific debugging incident is verified.',
    repo: 'https://github.com/krissiankg/spassmitdeutschbenin',
    live: 'https://platform.spassmitdeutschbenin.com/',
  },
  {
    id: 'exceltools',
    n: '02',
    name: 'ExcelTools — Data Processing Suite',
    kind: 'Data utilities, browser-local',
    short: 'Browser-local tools for converting, extracting, comparing, merging and cleaning spreadsheet and structured data.',
    problem: 'Work with Excel, CSV, JSON and XML data without sending files to a server.',
    contribution: 'Developed the original suite and is working on a newer SaaS iteration.',
    stack: ['HTML', 'CSS', 'JavaScript', 'TypeScript and Web Workers (per GitHub profile)'],
    challenges: [
      'Keeping behavior consistent across file formats.',
      'Handling malformed data.',
      'Keeping processing local to protect privacy.',
    ],
    implementation: [
      'Conversion, extraction, comparison, merging and cleaning tools for Excel, CSV, JSON and XML (resume, 2025).',
    ],
    outcome: 'Browser data utilities. The newer SaaS iteration is kept separate below.',
    caveat:
      'The documented live link points to the older production version, but its domain did not resolve during our check. Inspect the repository instead. Its README describes a newer Next.js, TypeScript, PostgreSQL and Prisma SaaS iteration; Stripe is in progress. AI cleaning, Chat with CSV, formula generation and categorization are roadmap items, not proven live features.',
    repo: 'https://github.com/krissiankg/exceltools-site',
    live: 'https://www.exceltools.site/',
  },
  {
    id: 'capcut',
    n: '03',
    name: 'CapCut Studio — Web Editor Integration',
    kind: 'Integration and deployment',
    short: 'An upstream open-source web video editor, rebranded and wrapped with a custom authentication and admin portal. Integration work, not original editor authorship.',
    problem: 'Run an upstream editor together with a portal, database migrations and a documented deployment.',
    contribution: 'Documented custom code around the editor. The README states the editor is based on OpenReel Video (github.com/Augani/openreel-video).',
    stack: ['Node.js', 'Supabase PostgreSQL', 'Nginx'],
    challenges: ['Integrating an upstream editor with a portal and deployment.', 'Maintaining the boundary between custom and upstream code.'],
    implementation: [
      'Node.js French-language authentication and admin portal.',
      'Auth API and legal pages.',
      'Supabase PostgreSQL migrations.',
      'Nginx, deployment and backup documentation.',
      'Rebranded upstream editor.',
    ],
    outcome: 'Documented integrated web-editor platform. No dates are verified.',
    caveat: 'The GitHub profile mentions AI Whisper transcription, but repository evidence is insufficient to claim authorship of the engine or the AI model.',
    repo: 'https://github.com/krissiankg/capcut.guelichweb',
    live: 'https://capcut.guelichweb.store/',
  },
  {
    id: 'guelichweb',
    n: '04',
    name: 'Guelichweb — Multilingual Web Platform',
    kind: 'CMS, routing and content',
    short: 'A bilingual FR/EN platform with a CMS-backed content model and a contact email integration.',
    problem: 'Publish maintainable, bilingual web content with a working contact path.',
    contribution: 'Founder and developer: the web platform and its maintainable content and API integration. Founder dates 2023 to present (current portfolio).',
    stack: ['Next.js 14', 'React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Sanity CMS', 'Resend', 'Vercel'],
    challenges: ['Language routing.', 'CMS data.', 'The contact email boundary.'],
    implementation: ['Bilingual FR/EN routing.', 'Sanity CMS content.', 'Resend contact email integration.', 'Deployed on Vercel.'],
    outcome: 'Documented bilingual platform.',
    caveat: 'The stack shown is the repository stack, which is more specific than the resume.',
    repo: 'https://github.com/krissiankg/guelichweb',
    live: 'https://guelichweb.online/fr',
  },
];

export const ROLE_MAP = [
  ['Code review', 'Transferable', 'Reading, debugging and improving code across four public repositories. No professional AI-generated PR review is claimed.'],
  ['Debugging web applications', 'Direct', 'Applications plus website maintenance and technical troubleshooting. No named bug incident is claimed.'],
  ['Testing and validation', 'Direct, partial', 'User testing, feedback iterations and data verification. No formal automated-test experience.'],
  ['Databases', 'Direct', 'PostgreSQL verified by resume and the Spass mit Deutsch source; Prisma and Supabase migrations in the repositories.'],
  ['GitHub', 'Direct', 'Public source code at github.com/krissiankg; the resume describes version-control and collaboration workflows. No GitHub Actions or project-board experience is claimed.'],
  ['AI tooling', 'Direct', 'Cursor, Antigravity and Claude (GitHub profile); n8n, Make and Antigravity (resume).'],
  ['Technical communication', 'Direct', 'Training and participant support at JSAN; documentation in repositories.'],
  ['Independent work', 'Direct', 'Freelance web development and maintenance since 2017; founder of GUELICHWEB since 2023.'],
];

export const TO_LEARN = ['Ruby on Rails', 'ERB', 'Stimulus', 'Hotwire', 'Heroku', 'RSpec', 'GitHub Actions', 'Automated test tooling'];

export const STEPS = [
  ['Understand the requirement', 'What was this supposed to do, and for whom?'],
  ['Define expected behavior', 'Write down the correct result before touching code.'],
  ['Reproduce the issue', 'A bug that cannot be repeated cannot be verified as fixed.'],
  ['Identify the affected component', 'Narrow to a route, query, role or file.'],
  ['Inspect code, data and state', 'Read the code, the stored rows and the runtime state.'],
  ['Determine the root cause', 'Separate the symptom from the cause.'],
  ['Smallest suitable fix', 'Change as little as the cause allows.'],
  ['Test the fix', 'Re-run the reproduction.'],
  ['Test edge cases', 'Empty, malformed, boundary and permission cases.'],
  ['Check for regressions', 'Look at what shares the changed code.'],
  ['Document the change', 'What changed and how to verify it.'],
];

export const VALIDATION_TARGETS = [
  ['Spass mit Deutsch', 'Fee rules, score entry by module, and what each role (super admin, secretariat, accounting) may see or change.'],
  ['ExcelTools', 'Consistent output across Excel, CSV, JSON and XML, and behavior on malformed files.'],
];

export const AI_POINTS = [
  'Tools named on the public GitHub profile: Cursor, Antigravity and Claude, for rapid iteration.',
  'Workflow automation tools named on the resume: n8n, Make and Antigravity.',
  'Self-directed learning in AI automation is listed on the resume.',
  'The proposed rule: generated code is a draft. It is read, run, tested against the expected behavior and checked for edge cases before it is accepted.',
];

export const SKILLS: [string, string[]][] = [
  ['Frontend', ['React 18', 'Next.js 14', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Framer Motion']],
  ['Backend', ['Node.js', 'NextAuth', 'Nodemailer']],
  ['Databases', ['PostgreSQL', 'Prisma', 'Supabase PostgreSQL migrations', 'Survey Solutions (Designer/Server)']],
  ['APIs and integrations', ['Sanity CMS', 'Resend', 'jsPDF', 'Excel imports']],
  ['Development tools', ['GitHub', 'Cursor', 'Antigravity', 'Claude']],
  ['AI automation', ['n8n', 'Make']],
  ['Testing and QA', ['User testing', 'Data verification', 'Feedback-based iteration']],
  ['Deployment', ['Vercel', 'Nginx']],
];

export const EXPERIENCE = [
  ['2023 – present', 'Founder & Lead Developer', 'GUELICHWEB', 'Web platforms, API integrations and AI automation. Present positioning is early-career developer.'],
  ['Jan 2024 – Jun 2026', 'Web development', 'Spass mit Deutsch Bénin', 'The examination platform and the official website, with emphasis on the custom application.'],
  ['2017 – present', 'Freelance web development and maintenance', 'Various clients', 'Responsive websites and custom platforms, user testing, feedback-based interface iterations and ongoing updates.'],
  ['2025', 'Webmaster & Technical Support', 'JSAN', 'Website, forms and access administration; event updates; participant support.'],
  ['Jan 2021', 'IT / Database Management Consultant', 'PADA-Nutrition', 'Survey Solutions Designer and Server, survey digitization, remote support and quality control of the collection system.'],
  ['Nov 2018', 'Data Entry & Verification Assistant', 'IRD', 'Checked completeness, consistency and accuracy of research data.'],
];

export const EDUCATION = [
  ['2018', 'Management Programming Training; Computer & Network Maintenance Training', 'Resume lists the training; no certificate names are claimed.'],
  ['2018', 'Complete Web & Mobile Designer UI/UX, Figma', 'Zero To Mastery Academy.'],
  ['2010', 'CBG 2', 'University of Abomey-Calavi. The resume lists this credential without expanding it; no completed degree or specific coursework is inferred.'],
  ['Ongoing', 'Self-directed learning', 'Modern web development, AI automation, n8n, Make, Antigravity.'],
];
