// Static portfolio data exposed via MCP tools.
export const profile = {
  name: "Akshit Pratiush",
  title: "Senior Solutions Architect II",
  location: "Bengaluru, India",
  email: "apratiush@gmail.com",
  phone: "+91 97411 39265",
  github: "https://github.com/aprat2406",
  linkedin: "https://www.linkedin.com/in/akshit-pratiush",
  summary:
    "Senior Solutions Architect with 10+ years designing and scaling cloud-native and Generative AI platforms. Expert in LLM-based architectures, GPU-backed inference workloads, Kubernetes and managed AI services (including DigitalOcean Gradient AI). Strong background in cloud migrations, cost optimisation, enterprise pre-sales and customer POCs delivering multi-million contracts and 30% efficiency gains.",
};

export const experience = [
  {
    company: "DigitalOcean",
    role: "Senior Solutions Architect II",
    period: "Dec 2022 – Present",
    highlights: [
      "Designed LLM-based application architectures leveraging GPU-backed inference, managed databases, object storage, and containerized microservices.",
      "Advised customers on GPU selection, AI workload sizing, and cost-performance trade-offs for inference and light model training.",
      "Developed evals for GenAI prototypes, ensuring reliability and alignment in enterprise settings.",
      "Led end-to-end cloud migration of a complex production workload from AWS to DigitalOcean, resulting in multi-million pound contracts.",
      "Designed scalable cloud infrastructure for a data analytics platform with auto-scaling and optimized managed databases.",
      "Led multiple generative AI POCs and customer demos on the DigitalOcean Gradient AI Platform.",
      "Performed architecture reviews and cost audits, improving resource utilization by up to 40%.",
      "Engaged in pre-sales activities, presenting technical proposals and demonstrating solution value to prospective clients.",
      "Collaborated with product managers to define technical requirements and plan the product roadmap.",
      "Conducted technical workshops and webinars to educate clients on product features.",
    ],
  },
  {
    company: "Google Operations Center",
    role: "Cloud Engineer Specialist",
    period: "Oct 2021 – Dec 2022",
    highlights: [
      "Technical trainer providing Google Cloud training to new hires and experienced staff.",
      "Led and managed a team of 10 data support engineers.",
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
      "Oversaw environment monitoring and application performance as Login Enterprise liaison.",
    ],
  },
  {
    company: "Citrix",
    role: "Technical Lead / Technical Support Engineer",
    period: "Aug 2014 – Oct 2018",
    highlights: [
      "Managed a team of around 10 people as Technical Lead.",
      "Handled escalated cases with efficiency and professionalism.",
      "Conducted technical training sessions for team members.",
      "Resolved HDX, graphics and OS services technical challenges efficiently.",
    ],
  },
];

export const skills = [
  "Cloud Architecture Design",
  "GPU-based Workloads (Training & Inference)",
  "Infrastructure as Code",
  "Kubernetes & Containerization",
  "Cost Optimization for Cloud Services",
  "LLMs – Inference & Deployment",
  "Customer Engagement",
  "Project Management",
  "Cloud Migration Strategies",
  "Technical Leadership & Mentoring",
];

export const education = [
  { degree: "Master of Science – Data Science", university: "John Moores University, Liverpool", year: "2024 – 2026", gpa: "6.2" },
  { degree: "B.Sc. – Computer Science", university: "Biju Patnaik University of Technology, Bhubaneswar", year: "2010 – 2014", gpa: "7.2" },
];

export const certifications = [
  "Claude Certified Architect – Foundations",
  "NVIDIA-Certified Associate – AI Infrastructure and Operations",
  "AWS AI/ML Practitioner",
  "Google Cloud Certified – Associate Cloud Engineer",
  "Google Cloud Certified – Cloud Digital Leader",
  "Microsoft Certified – Azure Fundamentals (AZ-900)",
  "Citrix Certified Professional – Virtualization (CCP-V)",
];

export const awards = [
  { company: "DigitalOcean", items: ["Golden Fin Award, Dec 2025", "Sammy Pearl Award, Jun 2024", "Sammy Pearl Award, Mar 2023"] },
  { company: "Google Operations Center", items: ["Touchstone Award – Individual Contributor, May 2022"] },
  { company: "T-Systems", items: ["Above and Beyond Award, Aug 2019"] },
  { company: "Citrix", items: ["Kudos Award", "Performance Award", "Excellence Award"] },
];

export const publications = {
  tutorials: [
    { title: "DigitalOcean Inference Mode Comparison for Your Use Case", url: "https://www.digitalocean.com/community/tutorials" },
    { title: "Upload a File to DigitalOcean Spaces Using AWS C++ SDK", url: "https://www.digitalocean.com/community/tutorials" },
    { title: "How to Use AWS Java SDK with DigitalOcean Spaces", url: "https://www.digitalocean.com/community/tutorials" },
    { title: "Connecting DigitalOcean VPC to Microsoft Azure via Megaport", url: "https://www.digitalocean.com/community/tutorials/connect-vpc-to-azure-using-megaport" },
    { title: "Sending App Platform Logs to DO Managed OpenSearch", url: "https://www.digitalocean.com/community/tutorials/sending-app-platform-logs-to-do-managed-opensearch" },
    { title: "Partner Connect GCP", url: "https://www.digitalocean.com/community/tutorials/partner-connect-gcp" },
    { title: "Integrate Telegram Bot with Gen AI", url: "https://www.digitalocean.com/community/tutorials/integrate-telegram-bot-gen-ai" },
    { title: "Chatbot for Ghost Website", url: "https://www.digitalocean.com/community/tutorials/chatbot-for-ghost-website" },
    { title: "Visualise Spaces Access Logs", url: "https://www.digitalocean.com/community/tutorials" },
  ],
  videos: [
    { id: "xSEis5gTK0E", title: "Webinar: How to Deploy Fast, Cost-efficient AI Workloads to DigitalOcean" },
    { id: "nkAjHjx_7e0", title: "CloudxAI: Serverless Inference in Production" },
    { id: "cgw6WoLcQ6w", title: "Keep Your Billing in Check with Monitoring and Alerts" },
    { id: "Jnnq16hr-fM", title: "App Platform's Log Forwarding to OpenSearch" },
    { id: "KYY5IhhOS3Q", title: "DigitalOcean Kubernetes Advanced Monitoring" },
    { id: "AHRd4YjbH6c", title: "Tutorial: How to Add a Chatbot to a Ghost Website Using Gen AI" },
    { id: "V0fVCHeX61c", title: "App Platform Intelligence Demo" },
    { id: "MW6B27sGeDs", title: "DigitalOcean Solutions Walkthrough" },
  ].map((v) => ({ ...v, url: `https://www.youtube.com/watch?v=${v.id}` })),
  videoStats: "3,000+ views across all videos",
};
