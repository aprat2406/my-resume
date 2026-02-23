import { motion } from "framer-motion";
import { Cloud, Server, Users, FolderKanban, Container, ArrowRightLeft, DollarSign, UserCheck } from "lucide-react";

const skills = [
  { name: "Cloud Architecture Design", icon: Cloud },
  { name: "Infrastructure as Code", icon: Server },
  { name: "Customer Engagement", icon: Users },
  { name: "Project Management", icon: FolderKanban },
  { name: "Kubernetes & Containerization", icon: Container },
  { name: "Cloud Migration Strategies", icon: ArrowRightLeft },
  { name: "Cost Optimization", icon: DollarSign },
  { name: "Technical Leadership & Mentoring", icon: UserCheck },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Core <span className="text-primary">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-background rounded-xl p-5 border border-border hover:border-primary/40 transition-all duration-300 text-center hover:shadow-[var(--shadow-glow)]"
            >
              <skill.icon className="mx-auto mb-3 text-primary group-hover:scale-110 transition-transform duration-300" size={28} />
              <p className="text-sm font-medium text-foreground">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
