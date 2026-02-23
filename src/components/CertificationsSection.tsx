import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  "NVIDIA-Certified Associate – AI Infrastructure and Operations",
  "AWS AI/ML Practitioner",
  "Google Cloud Certified – Associate Cloud Engineer",
  "Google Cloud Certified – Cloud Digital Leader",
  "Microsoft Certified – Azure Fundamentals (AZ-900)",
  "Citrix Certified Professional – Virtualization (CCP-V)",
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">
            <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 bg-background rounded-xl p-5 border border-border hover:border-primary/30 transition-colors duration-300"
            >
              <Award className="text-primary shrink-0 mt-0.5" size={20} />
              <p className="text-sm font-medium text-foreground">{cert}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
