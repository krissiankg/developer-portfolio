import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

// Rebuilt from approved career evidence. Never embed or copy the original PDF.
const pdf = await PDFDocument.create();
pdf.setTitle("Christian Guegueligue — Public Developer Resume");
pdf.setAuthor("Christian Guegueligue");
const regular = await pdf.embedFont(StandardFonts.Helvetica);
const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
const ink = rgb(0.09, 0.22, 0.21);
const accent = rgb(0.55, 0.26, 0.17);
let page = pdf.addPage([595.28, 841.89]);
let y = 791;

function line(text: string, size = 10, strong = false) {
  const font = strong ? bold : regular;
  const words = text.split(" ");
  let row = "";
  for (const word of words) {
    const next = row ? `${row} ${word}` : word;
    if (font.widthOfTextAtSize(next, size) > 495 && row) {
      draw(row, size, strong);
      row = word;
    } else row = next;
  }
  if (row) draw(row, size, strong);
  y -= 6;
}
function draw(text: string, size: number, strong: boolean) {
  if (y < 60) { page = pdf.addPage([595.28, 841.89]); y = 791; }
  page.drawText(text, { x: 50, y, size, font: strong ? bold : regular, color: strong ? accent : ink });
  y -= size + 5;
}
function heading(text: string) { y -= 8; line(text.toUpperCase(), 11, true); }

line("CHRISTIAN GUEGUELIGUE", 24, true);
line("Early-Career Web Developer", 15);
line("Focused on Debugging, Testing & AI-Assisted Development", 11);
line("GitHub: https://github.com/krissiankg/", 9);
line("LinkedIn: https://www.linkedin.com/in/christian-guegueligue-a66876188/", 9);
line("Portfolio: https://gchristian.online/", 9);
heading("Profile");
line("Practical web application and database experience, website maintenance, user testing, data verification and AI-assisted development tools. Seeking ODNOS's early-career web developer opportunity. Broader freelance experience is distinct from the targeted developer role.");
heading("Technical skills");
line("Web: React, Next.js, JavaScript, TypeScript, HTML/CSS, Tailwind CSS, Node.js.");
line("Data / APIs: PostgreSQL, Prisma, Supabase, NextAuth, Sanity CMS, Resend, jsPDF.");
line("Tools: GitHub, Vercel; Cursor, Antigravity, Claude, n8n and Make.");
line("QA: user testing, feedback-based interface iteration and data verification. No formal automated-test experience or professional AI-generated PR review is claimed.");
heading("Selected technical projects");
line("Spass mit Deutsch - Examination Platform", 11, true);
line("Built examination registration, administration and results workflows. Public README documents fee calculation, Excel imports, module scores, payment tracking, restricted roles, audit logs and PDF receipts. Next.js 14, React 18, JavaScript, PostgreSQL, Prisma, NextAuth.");
line("https://github.com/krissiankg/spassmitdeutschbenin", 9);
line("ExcelTools - Data Processing Suite (2025)", 11, true);
line("Built browser-local conversion, extraction, comparison, merging and cleaning tools for Excel, CSV, JSON and XML. Public repository describes a separate newer Next.js/TypeScript SaaS iteration. AI features are roadmap items, not verified live features.");
line("https://github.com/krissiankg/exceltools-site", 9);
line("CapCut Studio - Web Editor Integration", 11, true);
line("Documented custom Node.js portal, authentication/admin integration, Supabase migrations and Nginx deployment/backup documentation. Editor is based on OpenReel Video; original editor or AI engine authorship is not claimed.");
line("https://github.com/krissiankg/capcut.guelichweb", 9);
line("Guelichweb - Multilingual Web Platform", 11, true);
line("Founder/developer of a bilingual FR/EN Next.js/React platform. Public repository documents Sanity CMS, Resend contact-email integration and Vercel deployment.");
line("https://github.com/krissiankg/guelichweb", 9);
heading("Relevant experience");
line("2023-present | Founder & Lead Developer | GUELICHWEB", 10, true);
line("Web platforms, API integrations and AI automation (current portfolio).");
line("Jan 2024-Jun 2026 | Web Development | Spass mit Deutsch Benin", 10, true);
line("Examination management platform and official website (resume).");
line("2017-present | Freelance Web Development & Maintenance | Various Clients", 10, true);
line("Responsive websites/custom applications, user testing, interface iteration and ongoing website updates.");
line("2025 | Webmaster & Technical Support | JSAN", 10, true);
line("Website/forms/access administration, event updates and participant support.");
line("Jan 2021 | IT / Database Management Consultant | PADA-Nutrition", 10, true);
line("Survey Solutions Designer/Server, survey digitization, remote support and collection-system quality control.");
line("Nov 2018 | Data Entry & Verification Assistant | IRD", 10, true);
line("Checked research data for completeness, consistency and accuracy.");
heading("Education and continuous learning");
line("2018: Management Programming Training; Computer & Network Maintenance Training.");
line("2018: Complete Web & Mobile Designer UI/UX, Figma - Zero To Mastery Academy.");
line("2010: CBG 2 - University of Abomey-Calavi. Credential not expanded; no completed degree inferred.");
line("Ongoing: Self-directed web development and AI automation learning.");
heading("Transferable experience / technology to learn");
line("Ruby on Rails, ERB, Stimulus, Hotwire, Heroku, RSpec, GitHub Actions and formal automated-test tooling are not verified current experience. Existing web/database/validation skills provide transferable foundations.");
line("AI accelerates implementation; human judgment validates requirements and behavior. The eleven-step bug workflow on the website is a proposed approach, not a claim about every past role.");
heading("Source and privacy note");
line("Rebuilt from candidate-provided resume, public GitHub READMEs and current portfolio. Not an independent certification. Private contact details, birth date and references omitted. LinkedIn uses the public GitHub-profile link; current portfolio lists a different slug.", 9);

for (let i = 0; i < pdf.getPageCount(); i++) {
  pdf.getPage(i).drawText(`PUBLIC DEVELOPER RESUME  |  ${i + 1} / ${pdf.getPageCount()}`, {
    x: 50, y: 30, size: 8, font: regular, color: ink,
  });
}
const root = fileURLToPath(new URL("../../", import.meta.url));
const out = path.join(root, "artifacts/christian-portfolio/public/resumes/christian-public-resume.pdf");
await mkdir(path.dirname(out), { recursive: true });
await writeFile(out, await pdf.save());
process.stdout.write(`Generated ${out} (${pdf.getPageCount()} pages)\n`);
