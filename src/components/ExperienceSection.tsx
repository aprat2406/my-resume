import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
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

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-4 top-1 w-5 h-5 rounded-full bg-card border-2 border-primary items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors duration-300 shadow-[var(--shadow-card)]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Briefcase size={18} className="text-primary" />
                        {exp.company}
                      </h3>
                      <p className="text-primary font-medium text-sm">{exp.role}</p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">▹</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
