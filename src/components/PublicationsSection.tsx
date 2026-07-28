import { motion } from "framer-motion";
import { FileText, Youtube, ExternalLink, Play } from "lucide-react";

const tutorials = [
  { title: "DigitalOcean Inference Mode Comparison for Your Use Case", url: "https://www.digitalocean.com/community/tutorials" },
  { title: "Upload a File to DigitalOcean Spaces Using AWS C++ SDK", url: "https://www.digitalocean.com/community/tutorials/upload-file-digitalocean-spaces-c-plus-plus-sdk" },
  { title: "How to Use AWS Java SDK with DigitalOcean Spaces", url: "https://www.digitalocean.com/community/tutorials/how-to-use-aws-java-sdk-with-digitalocean-spaces" },
  { title: "Connecting DigitalOcean VPC to Microsoft Azure via Megaport", url: "https://www.digitalocean.com/community/tutorials/connect-vpc-to-azure-using-megaport" },
  { title: "Sending App Platform Logs to DO Managed OpenSearch", url: "https://www.digitalocean.com/community/tutorials/sending-app-platform-logs-to-do-managed-opensearch" },
  { title: "Partner Connect GCP", url: "https://www.digitalocean.com/community/tutorials/partner-connect-gcp" },
  { title: "Integrate Telegram Bot with Gen AI", url: "https://www.digitalocean.com/community/tutorials/integrate-telegram-bot-gradient" },
  { title: "Chatbot for Ghost Website", url: "https://www.digitalocean.com/community/tutorials/chatbot-for-ghost-website" },
  { title: "Visualise Spaces Access Logs", url: "https://www.digitalocean.com/community/tutorials/visualize-logs-with-goaccess" },
];

const videos = [
  { id: "xSEis5gTK0E", title: "Webinar: How to Deploy Fast, Cost-efficient AI Workloads to DigitalOcean" },
  { id: "nkAjHjx_7e0", title: "CloudxAI: Serverless Inference in Production" },
  { id: "cgw6WoLcQ6w", title: "Keep Your Billing in Check with Monitoring and Alerts" },
  { id: "Jnnq16hr-fM", title: "App Platform's Log Forwarding to OpenSearch" },
  { id: "KYY5IhhOS3Q", title: "DigitalOcean Kubernetes Advanced Monitoring" },
  { id: "AHRd4YjbH6c", title: "Tutorial: How to Add a Chatbot to a Ghost Website Using Gen AI" },
  { id: "V0fVCHeX61c", title: "App Platform Intelligence Demo" },
  { id: "MW6B27sGeDs", title: "DigitalOcean Solutions Walkthrough" },
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
            <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded-full">3,000+ views</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((v, i) => (
              <motion.a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative block aspect-video rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors bg-muted"
              >
                <img
                  src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = `https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play size={24} className="text-primary-foreground fill-primary-foreground ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-xs font-medium text-foreground line-clamp-2">{v.title}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
