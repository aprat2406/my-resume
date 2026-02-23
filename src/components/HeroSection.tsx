import { motion } from "framer-motion";
import { MapPin, Mail, Github, Linkedin, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Glow orb */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] glow-pulse" />
      <div className="absolute bottom-1/4 -left-32 w-72 h-72 rounded-full bg-accent/10 blur-[100px] glow-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-primary/30 shadow-[var(--shadow-glow)]">
            <img
              src={profilePhoto}
              alt="Akshit Pratiush"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-primary animate-pulse" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center lg:text-left"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider uppercase">Senior Solutions Architect</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
            Akshit <span className="text-primary">Pratiush</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mb-8 leading-relaxed">
            Experienced architect designing scalable cloud solutions across AWS, Google Cloud & DigitalOcean. Passionate about cloud migrations, cost optimization & technical leadership.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={16} className="text-primary" /> Bengaluru, India
            </span>
            <a href="mailto:apratiush@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail size={16} className="text-primary" /> apratiush@gmail.com
            </a>
          </div>

          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="https://github.com/aksprat"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/akshit-pratiush"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 text-sm font-medium"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
