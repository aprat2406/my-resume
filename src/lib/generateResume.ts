import { jsPDF } from "jspdf";

export const generateResumePDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  let y = 20;
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;

  const addSectionTitle = (title: string) => {
    checkPageBreak(12);
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 150, 136);
    doc.text(title, margin, y);
    y += 2;
    doc.setDrawColor(0, 150, 136);
    doc.setLineWidth(0.5);
    doc.line(margin, y, margin + 40, y);
    y += 8;
  };

  const addText = (text: string, bold = false, size = 10, color: [number, number, number] = [60, 60, 60]) => {
    checkPageBreak(size * 0.6);
    doc.setFontSize(size);
    doc.setFont("helvetica", bold ? "bold" : "normal");
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, contentWidth);
    doc.text(lines, margin, y);
    y += lines.length * (size * 0.45) + 2;
  };

  const checkPageBreak = (needed: number) => {
    if (y + needed > doc.internal.pageSize.getHeight() - 15) {
      doc.addPage();
      y = 20;
    }
  };

  // Header
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(30, 30, 30);
  doc.text("Akshit Pratiush", margin, y);
  y += 8;
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 150, 136);
  doc.text("Senior Solutions Architect", margin, y);
  y += 7;
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text("apratiush@gmail.com | +91-9741139265 | Bengaluru, India", margin, y);
  y += 5;
  doc.text("GitHub: github.com/aksprat | LinkedIn: linkedin.com/in/akshit-pratiush", margin, y);
  y += 10;

  // Summary
  addSectionTitle("Professional Summary");
  addText("Experienced Senior Solutions Architect with expertise in designing and implementing scalable cloud solutions for diverse industries. Proven leadership in cloud migrations, infrastructure design, and cost optimization using platforms like AWS, Google Cloud, and DigitalOcean. Skilled in translating business needs into technical strategies, mentoring teams, and driving operational efficiency.");
  y += 4;

  // Experience
  addSectionTitle("Professional Experience");

  const experiences = [
    { company: "DigitalOcean", role: "Senior Solutions Architect", period: "Dec 2022 – Present", items: [
      "Led end-to-end cloud migration from AWS to DigitalOcean, resulting in multi-million-pound contracts.",
      "Designed scalable infrastructure for data analytics platforms with auto-scaling and managed databases.",
      "Built reusable IaC modules (Terraform, Ansible) to accelerate client onboarding.",
      "Performed architecture reviews and cost audits, improving resource utilization by up to 40%.",
      "Led POC sessions with enterprise clients involving Kubernetes, PostgreSQL, and VPC networking.",
      "Authored technical white papers, case studies, and conducted workshops and webinars.",
    ]},
    { company: "Google Operations Center", role: "Cloud Engineer Specialist", period: "Oct 2021 – Dec 2022", items: [
      "Technical trainer providing Google Cloud training to new hires and experienced staff.",
      "Led and managed a team of 10 big data support engineers.",
      "Provided expert guidance on cloud architecture best practices.",
    ]},
    { company: "T-Systems", role: "Cloud Consultant", period: "Nov 2018 – Oct 2021", items: [
      "Designed and deployed Citrix on the public cloud with PowerShell automation.",
      "Consistently reduced Azure services costs and improved virtual desktop performance.",
    ]},
    { company: "Citrix", role: "Technical Lead / Solutions Engineer", period: "Aug 2014 – Oct 2018", items: [
      "Managed a team of ~10 people as Technical Lead.",
      "Handled escalated cases, conducted training, specialized in Provisioning Services and MCS.",
    ]},
  ];

  experiences.forEach((exp) => {
    checkPageBreak(20);
    addText(`${exp.company} — ${exp.role}`, true, 11, [30, 30, 30]);
    addText(exp.period, false, 9, [120, 120, 120]);
    exp.items.forEach((item) => {
      checkPageBreak(8);
      addText(`• ${item}`);
    });
    y += 4;
  });

  // Skills
  addSectionTitle("Core Skills");
  addText("Cloud Architecture Design • Infrastructure as Code • Customer Engagement • Project Management • Kubernetes & Containerization • Cloud Migration Strategies • Cost Optimization • Technical Leadership & Mentoring");
  y += 4;

  // Education
  addSectionTitle("Education");
  addText("M.Sc. Data Science — John Moores University, Liverpool (2026) | GPA: 6.2", true, 10, [30, 30, 30]);
  addText("B.Tech Computer Science — Biju Patnaik University of Technology (2014) | GPA: 7.2", true, 10, [30, 30, 30]);
  y += 4;

  // Certifications
  addSectionTitle("Certifications");
  const certs = [
    "NVIDIA-Certified Associate – AI Infrastructure and Operations",
    "AWS AI/ML Practitioner",
    "Google Cloud Certified – Associate Cloud Engineer",
    "Google Cloud Certified – Cloud Digital Leader",
    "Microsoft Certified – Azure Fundamentals (AZ-900)",
    "Citrix Certified Professional – Virtualization (CCP-V)",
  ];
  certs.forEach((c) => addText(`• ${c}`));
  y += 4;

  // Awards
  addSectionTitle("Awards & Recognition");
  const awards = [
    "DigitalOcean: Golden Fin Award 2025, Sammy Pearl Q1 2024, Sammy Pearl Q1 2023",
    "Google: Touchstone Award – Individual Contributor, Dec 2021",
    "T-Systems: Above and Beyond Award Q1 2020",
    "Citrix: Multiple Kudos, Performance & Excellence Awards (2015–2018)",
  ];
  awards.forEach((a) => addText(`• ${a}`));

  doc.save("Akshit_Pratiush_Resume.pdf");
};
