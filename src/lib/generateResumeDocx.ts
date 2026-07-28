import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle, TabStopPosition, TabStopType } from "docx";
import { saveAs } from "file-saver";

const teal = "009688";
const dark = "1E1E1E";
const mid = "505050";
const light = "787878";

const sectionHeading = (text: string) =>
  new Paragraph({
    spacing: { before: 200, after: 80 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: teal } },
    children: [
      new TextRun({ text: text.toUpperCase(), bold: true, size: 20, color: teal, font: "Calibri" }),
    ],
  });

const bulletItem = (text: string) =>
  new Paragraph({
    spacing: { after: 40 },
    children: [
      new TextRun({ text: `• ${text}`, size: 18, color: mid, font: "Calibri" }),
    ],
  });

const jobHeader = (company: string, role: string, period: string) =>
  new Paragraph({
    spacing: { before: 120, after: 40 },
    tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
    children: [
      new TextRun({ text: company, bold: true, size: 19, color: dark, font: "Calibri" }),
      new TextRun({ text: ` — ${role}`, size: 19, color: light, font: "Calibri" }),
      new TextRun({ text: `\t${period}`, size: 17, color: light, font: "Calibri" }),
    ],
  });

export const generateResumeDocx = async () => {
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: { top: 600, bottom: 500, left: 700, right: 700 },
          },
        },
        children: [
          // Header
          new Paragraph({
            spacing: { after: 40 },
            children: [
              new TextRun({ text: "AKSHIT PRATIUSH", bold: true, size: 32, color: dark, font: "Calibri" }),
            ],
          }),
          new Paragraph({
            spacing: { after: 30 },
            children: [
              new TextRun({ text: "Senior Solutions Architect II", size: 21, color: teal, font: "Calibri" }),
            ],
          }),
          new Paragraph({
            spacing: { after: 20 },
            children: [
              new TextRun({ text: "apratiush@gmail.com  |  +91-9741139265  |  Bengaluru, India", size: 17, color: light, font: "Calibri" }),
            ],
          }),
          new Paragraph({
            spacing: { after: 120 },
            children: [
              new TextRun({ text: "github.com/aprat2406  |  linkedin.com/in/akshit-pratiush", size: 17, color: light, font: "Calibri" }),
            ],
          }),

          // Summary
          sectionHeading("Summary"),
          new Paragraph({
            spacing: { after: 80 },
            children: [
              new TextRun({
                text: "Senior Solutions Architect with 10+ years designing and scaling cloud-native and Generative AI platforms. Expert in LLM-based architectures, GPU-backed inference workloads, Kubernetes and managed AI services (including DigitalOcean Gradient AI). Strong background in cloud migrations, cost optimisation, enterprise pre-sales and customer POCs delivering multi-million contracts and 30% efficiency gains.",
                size: 18,
                color: mid,
                font: "Calibri",
              }),
            ],
          }),

          // Experience
          sectionHeading("Experience"),
          jobHeader("DigitalOcean", "Senior Solutions Architect II", "Dec 2022 – Present"),
          bulletItem("Designed LLM-based architectures with GPU inference, managed DBs, storage & containerized microservices."),
          bulletItem("Advised on GPU selection, AI workload sizing & cost-performance trade-offs for inference and training."),
          bulletItem("Developed evals for GenAI prototypes ensuring reliability and alignment in enterprise settings."),
          bulletItem("Led cloud migration from AWS to DigitalOcean, securing multi-million-pound contracts."),
          bulletItem("Designed scalable infrastructure with auto-scaling and optimized managed databases."),
          bulletItem("Led generative AI POCs and customer demos on DigitalOcean Gradient AI Platform."),
          bulletItem("Performed architecture reviews & cost audits, improving resource utilization by up to 40%."),
          bulletItem("Engaged in pre-sales, presenting technical proposals to prospective clients."),
          bulletItem("Authored technical white papers, case studies, tutorials and conducted workshops."),

          jobHeader("Google Operations Center", "Cloud Engineer Specialist", "Oct 2021 – Dec 2022"),
          bulletItem("Provided Google Cloud training to new hires and experienced staff as technical trainer."),
          bulletItem("Led and managed a team of 10 big data support engineers."),
          bulletItem("Provided expert guidance on cloud architecture best practices."),

          jobHeader("T-Systems", "Cloud Consultant", "Nov 2018 – Oct 2021"),
          bulletItem("Designed & deployed Citrix on public cloud with PowerShell automation."),
          bulletItem("Reduced Azure services costs and improved virtual desktop performance."),

          jobHeader("Citrix", "Technical Lead / Solutions Engineer", "Aug 2014 – Oct 2018"),
          bulletItem("Managed team of ~10 as Technical Lead; handled escalated cases."),
          bulletItem("Conducted training; specialized in Provisioning Services & MCS."),

          // Skills
          sectionHeading("Skills"),
          new Paragraph({
            spacing: { after: 80 },
            children: [
              new TextRun({
                text: "Cloud Architecture Design • Infrastructure as Code • Customer Engagement • Project Management • Kubernetes & Containerization • Cloud Migration Strategies • Cost Optimization • Technical Leadership & Mentoring • LLMs – Inference & Deployment • GPU-based Workloads (Training & Inference)",
                size: 18,
                color: mid,
                font: "Calibri",
              }),
            ],
          }),

          // Education
          sectionHeading("Education"),
          new Paragraph({
            spacing: { after: 40 },
            children: [
              new TextRun({ text: "M.Sc. Data Science", bold: true, size: 18, color: dark, font: "Calibri" }),
              new TextRun({ text: " — John Moores University, Liverpool (2026) | GPA: 6.2", size: 18, color: mid, font: "Calibri" }),
            ],
          }),
          new Paragraph({
            spacing: { after: 80 },
            children: [
              new TextRun({ text: "B.Tech Computer Science", bold: true, size: 18, color: dark, font: "Calibri" }),
              new TextRun({ text: " — BPUT (2014) | GPA: 7.2", size: 18, color: mid, font: "Calibri" }),
            ],
          }),

          // Certifications
          sectionHeading("Certifications"),
          bulletItem("Claude Certified Architect – Foundations"),
          bulletItem("NVIDIA-Certified Associate – AI Infrastructure and Operations"),
          bulletItem("AWS AI/ML Practitioner"),
          bulletItem("Google Cloud Certified – Associate Cloud Engineer"),
          bulletItem("Google Cloud Certified – Cloud Digital Leader"),
          bulletItem("Microsoft Certified – Azure Fundamentals (AZ-900)"),
          bulletItem("Citrix Certified Professional – Virtualization (CCP-V)"),

          // Awards
          sectionHeading("Awards"),
          bulletItem("DigitalOcean: Golden Fin Award Dec 2025, Sammy Pearl Jun 2024, Sammy Pearl Mar 2023"),
          bulletItem("Google Operations Center: Touchstone Award – Individual Contributor, May 2022"),
          bulletItem("T-Systems: Above and Beyond Award, Aug 2019"),
          bulletItem("Citrix: Multiple Kudos, Performance & Excellence Awards"),

          // Publications
          sectionHeading("Publications"),
          bulletItem("Published multiple technical tutorials on DigitalOcean Community."),
          bulletItem("YouTube channel with 3,000+ views across technical demo videos."),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, "Akshit_Pratiush_Resume.docx");
};
