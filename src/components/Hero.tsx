
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/5 blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 text-primary font-display text-xs tracking-widest uppercase">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-5xl font-bold leading-tight mb-6"
          >
            Hi, I'm{" "}
            <span className="text-gradient">Niranjan Chaudhary</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8"
          >
            <p className="font-display text-lg md:text-xl text-muted-foreground">
              <span className="text-primary">{">"}</span>{" "}
              MERN Stack Developer with 3+ years of experience building scalable web applications
              <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-blink align-middle" />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            {[
              { 
                icon: Github, 
                href: "https://github.com/cdyniranjan7321", 
                label: "GitHub",
                target: "_blank",
                rel: "noopener noreferrer"
              },
              { 
                icon: Linkedin, 
                href: "https://linkedin.com/in/niranjanchaudhary", 
                label: "LinkedIn",
                target: "_blank",
                rel: "noopener noreferrer"
              },
              { 
                icon: Mail, 
                href: "#contact", 
                label: "Email",
                target: "_self"
              },
            ].map(({ icon: Icon, href, label, target, rel }) => (
              <a
                key={label}
                href={href}
                target={target}
                rel={rel}
                className="p-3 rounded-lg border border-border hover:border-primary/40 hover:shadow-[var(--shadow-glow-sm)] text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="animate-float"
          >
            <a href="#about" className="inline-block text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;