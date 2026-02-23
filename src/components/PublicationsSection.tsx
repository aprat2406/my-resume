import { motion } from "framer-motion";
import { FileText, Youtube, ExternalLink } from "lucide-react";

const tutorials = [
  { title: "Sending App Platform Logs to DO Managed OpenSearch", url: "https://www.digitalocean.com/community/tutorials/sending-app-platform-logs-to-do-managed-opensearch" },
  { title: "Partner Connect GCP", url: "https://www.digitalocean.com/community/tutorials/partner-connect-gcp" },
  { title: "Connect VPC to Azure Using Megaport", url: "https://www.digitalocean.com/community/tutorials/connect-vpc-to-azure-using-megaport" },
  { title: "Integrate Telegram Bot with Gen AI", url: "https://www.digitalocean.com/community/tutorials/integrate-telegram-bot-gen-ai" },
  { title: "Chatbot for Ghost Website", url: "https://www.digitalocean.com/community/tutorials/chatbot-for-ghost-website" },
];

const videos = [
  { id: "Jnnq16hr-fM" },
  { id: "KYY5IhhOS3Q" },
  { id: "AHRd4YjbH6c" },
  { id: "MW6B27sGeDs" },
  { id: "cgw6WoLcQ6w" },
  { id: "xSEis5gTK0E" },
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-24 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Public <span className="text-primary">Contributions</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </motion.div>

        {/* Tutorials */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <FileText size={20} className="text-primary" /> Technical Tutorials
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {tutorials.map((t, i) => (
              <motion.a
                key={i}
                href={t.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex items-start gap-3 bg-background rounded-xl p-4 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <ExternalLink size={16} className="text-primary shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform" />
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{t.title}</p>
              </motion.a>
            ))}
          </div>
        </div>

        {/* YouTube */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <Youtube size={20} className="text-primary" /> YouTube Videos
            <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded-full">2,500+ views</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-video rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-colors"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={`YouTube video ${i + 1}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
