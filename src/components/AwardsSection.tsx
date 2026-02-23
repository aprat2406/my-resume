import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const awards = [
  { company: "DigitalOcean", items: [
    "Annual Golden Fin Award, 2025",
    "Sammy Pearl Award, Q1 2024",
    "Sammy Pearl Award, Q1 2023",
  ]},
  { company: "Google Operations Center", items: [
    "Touchstone Award – Individual Contributor, Dec 2021",
  ]},
  { company: "T-Systems", items: [
    "Above and Beyond Award Q1 2020 – Cloud Migration Project",
  ]},
  { company: "Citrix", items: [
    "Kudos Award Q2 2015",
    "Kudos Award Q3 2015",
    "Performance Award Q1 2016",
    "Excellence Award Q2 2016",
    "Kudos Award Q2 2017",
    "Kudos Award Q1 2018",
  ]},
];

const AwardsSection = () => {
  return (
    <section id="awards" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Awards & <span className="text-primary">Recognition</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                <Trophy size={18} /> {group.company}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary">◆</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
