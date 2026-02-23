import { jsPDF } from "jspdf";

export const generateResumePDF = () => {
  const doc = new jsPDF();
  const pw = doc.internal.pageSize.getWidth();
  const ph = doc.internal.pageSize.getHeight();
  const m = 14; // margin
  const cw = pw - m * 2;
  const colGap = 6;
  const leftCol = 58;
  const rightCol = cw - leftCol - colGap;
  const rightX = m + leftCol + colGap;
  let y = 0;

  const teal: [number, number, number] = [0, 150, 136];
  const dark: [number, number, number] = [30, 30, 30];
  const mid: [number, number, number] = [80, 80, 80];
  const light: [number, number, number] = [120, 120, 120];

  // ─── HEADER BAR ───
  doc.setFillColor(20, 25, 35);
  doc.rect(0, 0, pw, 38, "F");
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text("AKSHIT PRATIUSH", m, 16);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 200, 180);
  doc.text("Senior Solutions Architect", m, 23);
  doc.setFontSize(7.5);
  doc.setTextColor(180, 190, 200);
  doc.text("apratiush@gmail.com  |  +91-9741139265  |  Bengaluru, India", m, 29);
  doc.text("github.com/aksprat  |  linkedin.com/in/akshit-pratiush", m, 34);
  y = 44;

  // Helper: section title in left column
  const sectionTitle = (title: string, yPos: number) => {
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...teal);
    doc.text(title.toUpperCase(), m, yPos);
    doc.setDrawColor(...teal);
    doc.setLineWidth(0.4);
    doc.line(m, yPos + 1.5, m + leftCol - 4, yPos + 1.5);
  };

  const checkPage = (needed: number) => {
    if (y + needed > ph - 10) { doc.addPage(); y = 14; }
  };

  // ─── SUMMARY ───
  sectionTitle("SUMMARY", y);
  doc.setFontSize(7.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...mid);
  const summaryLines = doc.splitTextToSize(
    "Experienced Senior Solutions Architect with expertise in designing scalable cloud solutions. Proven leadership in cloud migrations, infrastructure design, and cost optimization using AWS, Google Cloud, and DigitalOcean. Skilled in translating business needs into technical strategies, mentoring teams, and driving operational efficiency.",
    rightCol
  );
  doc.text(summaryLines, rightX, y);
  y += summaryLines.length * 3.2 + 4;

  // ─── EXPERIENCE ───
  sectionTitle("EXPERIENCE", y);
  const experiences = [
    { company: "DigitalOcean", role: "Senior Solutions Architect", period: "Dec 2022 – Present", items: [
      "Led cloud migration from AWS to DigitalOcean, securing multi-million-pound contracts.",
      "Designed scalable infrastructure with auto-scaling, managed databases & secure payment workflows.",
      "Built reusable IaC modules (Terraform, Ansible) to accelerate client onboarding.",
      "Performed architecture reviews & cost audits, improving resource utilization by up to 40%.",
      "Led POC sessions with enterprise clients involving K8s, PostgreSQL & VPC networking.",
      "Authored technical white papers, case studies, tutorials and conducted workshops.",
    ]},
    { company: "Google Operations Center", role: "Cloud Engineer Specialist", period: "Oct 2021 – Dec 2022", items: [
      "Provided Google Cloud training to new hires and experienced staff as technical trainer.",
      "Led and managed a team of 10 big data support engineers.",
      "Provided expert guidance on cloud architecture best practices.",
    ]},
    { company: "T-Systems", role: "Cloud Consultant", period: "Nov 2018 – Oct 2021", items: [
      "Designed & deployed Citrix on public cloud with PowerShell automation.",
      "Reduced Azure services costs and improved virtual desktop performance.",
    ]},
    { company: "Citrix", role: "Technical Lead / Solutions Engineer", period: "Aug 2014 – Oct 2018", items: [
      "Managed team of ~10 as Technical Lead; handled escalated cases.",
      "Conducted training; specialized in Provisioning Services & MCS.",
    ]},
  ];

  let expStartY = y;
  experiences.forEach((exp) => {
    checkPage(14);
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...dark);
    doc.text(`${exp.company}`, rightX, y);
    const compW = doc.getTextWidth(exp.company);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...light);
    doc.text(` — ${exp.role}`, rightX + compW, y);
    doc.setFontSize(7);
    doc.text(exp.period, rightX + rightCol - doc.getTextWidth(exp.period), y);
    y += 3.5;
    doc.setFontSize(7.5);
    doc.setTextColor(...mid);
    exp.items.forEach((item) => {
      checkPage(5);
      const lines = doc.splitTextToSize(`• ${item}`, rightCol - 2);
      doc.text(lines, rightX + 1, y);
      y += lines.length * 3 + 0.8;
    });
    y += 2;
  });

  // ─── SKILLS ───
  checkPage(12);
  sectionTitle("SKILLS", y);
  doc.setFontSize(7.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...mid);
  const skillsText = "Cloud Architecture Design • Infrastructure as Code • Customer Engagement • Project Management • Kubernetes & Containerization • Cloud Migration Strategies • Cost Optimization • Technical Leadership & Mentoring";
  const skillLines = doc.splitTextToSize(skillsText, rightCol);
  doc.text(skillLines, rightX, y);
  y += skillLines.length * 3.2 + 5;

  // ─── EDUCATION ───
  checkPage(12);
  sectionTitle("EDUCATION", y);
  doc.setFontSize(7.5);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...dark);
  doc.text("M.Sc. Data Science", rightX, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...mid);
  doc.text(" — John Moores University, Liverpool (2026) | GPA: 6.2", rightX + doc.getTextWidth("M.Sc. Data Science"), y);
  y += 4;
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...dark);
  doc.text("B.Tech Computer Science", rightX, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...mid);
  doc.text(" — BPUT (2014) | GPA: 7.2", rightX + doc.getTextWidth("B.Tech Computer Science"), y);
  y += 6;

  // ─── CERTIFICATIONS ───
  checkPage(18);
  sectionTitle("CERTIFICATIONS", y);
  const certs = [
    "NVIDIA-Certified Associate – AI Infrastructure and Operations",
    "AWS AI/ML Practitioner",
    "Google Cloud Certified – Associate Cloud Engineer",
    "Google Cloud Certified – Cloud Digital Leader",
    "Microsoft Certified – Azure Fundamentals (AZ-900)",
    "Citrix Certified Professional – Virtualization (CCP-V)",
  ];
  doc.setFontSize(7.5);
  doc.setTextColor(...mid);
  certs.forEach((c) => {
    checkPage(4);
    doc.text(`• ${c}`, rightX, y);
    y += 3.5;
  });
  y += 3;

  // ─── AWARDS ───
  checkPage(14);
  sectionTitle("AWARDS", y);
  const awards = [
    "DigitalOcean: Golden Fin Award 2025, Sammy Pearl Q1 2024, Sammy Pearl Q1 2023",
    "Google: Touchstone Award – Individual Contributor, Dec 2021",
    "T-Systems: Above and Beyond Award Q1 2020",
    "Citrix: Multiple Kudos, Performance & Excellence Awards (2015–2018)",
  ];
  doc.setFontSize(7.5);
  doc.setTextColor(...mid);
  awards.forEach((a) => {
    checkPage(4);
    const lines = doc.splitTextToSize(`• ${a}`, rightCol);
    doc.text(lines, rightX, y);
    y += lines.length * 3.2 + 0.8;
  });
  y += 3;

  // ─── PUBLICATIONS ───
  checkPage(10);
  sectionTitle("PUBLICATIONS", y);
  doc.setFontSize(7.5);
  doc.setTextColor(...mid);
  doc.text("• Published multiple technical tutorials on DigitalOcean Community.", rightX, y);
  y += 3.5;
  doc.text("• YouTube channel with 2,500+ views across technical demo videos.", rightX, y);

  doc.save("Akshit_Pratiush_Resume.pdf");
};
