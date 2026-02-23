import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-8" />
          <p className="text-muted-foreground mb-10">
            I'm always open to discussing cloud architecture, new opportunities, or interesting projects.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <a href="mailto:apratiush@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail size={18} /> apratiush@gmail.com
            </a>
            <a href="tel:+919741139265" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone size={18} /> +91-9741139265
            </a>
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} /> Bengaluru, India
            </span>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/aksprat"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/akshit-pratiush"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-border pt-8 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Akshit Pratiush. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
