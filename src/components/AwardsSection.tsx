import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const awards = [
  { company: "DigitalOcean", items: [
    "Golden Fin Award, Dec 2025",
    "Sammy Pearl Award, Jun 2024",
    "Sammy Pearl Award, Mar 2023",
  ]},
  { company: "Google Operations Center", items: [
    "Touchstone Award – Individual Contributor, May 2022",
  ]},
  { company: "T-Systems", items: [
    "Above and Beyond Award, Aug 2019",
  ]},
  { company: "Citrix", items: [
    "Kudos Award",
    "Performance Award",
    "Excellence Award",
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
