import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Science – Data Science",
    university: "John Moores University, Liverpool",
    year: "2026",
    gpa: "6.2",
  },
  {
    degree: "B.Tech – Computer Science",
    university: "Biju Patnaik University of Technology",
    year: "2014",
    gpa: "7.2",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">
            <span className="text-primary">Education</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors duration-300"
            >
              <GraduationCap className="text-primary mb-3" size={28} />
              <h3 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground mb-2">{edu.university}</p>
              <div className="flex gap-4 text-xs font-mono text-muted-foreground">
                <span className="bg-muted px-3 py-1 rounded-full">Year: {edu.year}</span>
                <span className="bg-muted px-3 py-1 rounded-full">GPA: {edu.gpa}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
