// Static portfolio data exposed via MCP tools.
export const profile = {
  name: "Akshit Pratiush",
  title: "Senior Solutions Architect",
  location: "Bengaluru, India",
  email: "apratiush@gmail.com",
  phone: "+91 97411 39265",
  github: "https://github.com/aprat2406",
  linkedin: "https://www.linkedin.com/in/akshit-pratiush",
  summary:
    "Experienced architect designing scalable cloud solutions across AWS, Google Cloud & DigitalOcean. Passionate about cloud migrations, cost optimization & technical leadership.",
};

export const experience = [
  {
    company: "DigitalOcean",
    role: "Senior Solutions Architect",
    period: "Dec 2022 – Present",
    highlights: [
      "Led end-to-end cloud migration from AWS to DigitalOcean, resulting in multi-million-pound contracts.",
      "Designed scalable infrastructure for data analytics platforms with auto-scaling and managed databases.",
      "Built reusable IaC modules (Terraform, Ansible) to accelerate client onboarding.",
      "Performed architecture reviews and cost audits, improving resource utilization by up to 40%.",
      "Led POC sessions with enterprise clients involving Kubernetes, PostgreSQL, and VPC networking.",
      "Authored technical white papers and case studies for the wider technology community.",
      "Conducted technical workshops and webinars to educate clients on product features.",
      "Led generative AI POCs and demos on DigitalOcean Gradient AI Platform.",
      "Designed LLM-based architectures leveraging GPU inference, managed databases, object storage, and containerized microservices.",
      "Advised customers on GPU selection, AI workload sizing, and cost-performance trade-offs.",
    ],
  },
  {
    company: "Google Operations Center",
    role: "Cloud Engineer Specialist",
    period: "Oct 2021 – Dec 2022",
    highlights: [
      "Technical trainer providing Google Cloud training to new hires and experienced staff.",
      "Led and managed a team of 10 big data support engineers.",
      "Provided expert guidance on cloud architecture best practices.",
      "Upskilled internal engineers through cloud-focused training programs.",
    ],
  },
  {
    company: "T-Systems",
    role: "Cloud Consultant",
    period: "Nov 2018 – Oct 2021",
    highlights: [
      "Designed and deployed Citrix on the public cloud with PowerShell automation.",
      "Set up FSLogix profiles on Azure NetApp platform.",
      "Consistently reduced Azure services costs and improved virtual desktop performance.",
      "Oversaw environment monitoring and application performance.",
    ],
  },
  {
    company: "Citrix",
    role: "Technical Lead / Solutions Engineer",
    period: "Aug 2014 – Oct 2018",
    highlights: [
      "Managed a team of around 10 people as Technical Lead.",
      "Handled escalated cases with efficiency and professionalism.",
      "Conducted technical training sessions for team members.",
      "Specialized in Provisioning Services and Machine Creation Services.",
    ],
  },
];

export const skills = [
  "Cloud Architecture Design",
  "Infrastructure as Code",
  "Customer Engagement",
  "Project Management",
  "Kubernetes & Containerization",
  "Cloud Migration Strategies",
  "Cost Optimization",
  "Technical Leadership & Mentoring",
  "LLMs – Inference & Deployment",
  "GPU-based Workloads (Training & Inference)",
];

export const education = [
  { degree: "Master of Science – Data Science", university: "John Moores University, Liverpool", year: "2026", gpa: "6.2" },
  { degree: "B.Tech – Computer Science", university: "Biju Patnaik University of Technology", year: "2014", gpa: "7.2" },
];

export const certifications = [
  "NVIDIA-Certified Associate – AI Infrastructure and Operations",
  "AWS AI/ML Practitioner",
  "Google Cloud Certified – Associate Cloud Engineer",
  "Google Cloud Certified – Cloud Digital Leader",
  "Microsoft Certified – Azure Fundamentals (AZ-900)",
  "Citrix Certified Professional – Virtualization (CCP-V)",
];

export const awards = [
  { company: "DigitalOcean", items: ["Annual Golden Fin Award, 2025", "Sammy Pearl Award, Q1 2024", "Sammy Pearl Award, Q1 2023"] },
  { company: "Google Operations Center", items: ["Touchstone Award – Individual Contributor, Dec 2021"] },
  { company: "T-Systems", items: ["Above and Beyond Award Q1 2020 – Cloud Migration Project"] },
  { company: "Citrix", items: ["Kudos Award Q2 2015", "Kudos Award Q3 2015", "Performance Award Q1 2016", "Excellence Award Q2 2016", "Kudos Award Q2 2017", "Kudos Award Q1 2018"] },
];

export const publications = {
  tutorials: [
    { title: "Sending App Platform Logs to DO Managed OpenSearch", url: "https://www.digitalocean.com/community/tutorials/sending-app-platform-logs-to-do-managed-opensearch" },
    { title: "Partner Connect GCP", url: "https://www.digitalocean.com/community/tutorials/partner-connect-gcp" },
    { title: "Connect VPC to Azure Using Megaport", url: "https://www.digitalocean.com/community/tutorials/connect-vpc-to-azure-using-megaport" },
    { title: "Integrate Telegram Bot with Gen AI", url: "https://www.digitalocean.com/community/tutorials/integrate-telegram-bot-gen-ai" },
    { title: "Chatbot for Ghost Website", url: "https://www.digitalocean.com/community/tutorials/chatbot-for-ghost-website" },
  ],
  videos: ["Jnnq16hr-fM", "KYY5IhhOS3Q", "AHRd4YjbH6c", "MW6B27sGeDs", "cgw6WoLcQ6w", "xSEis5gTK0E"].map((id) => ({
    id,
    url: `https://www.youtube.com/watch?v=${id}`,
  })),
};
