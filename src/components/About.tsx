
import { motion } from "framer-motion";
import { Code2, Server, Database, Layers, Globe } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Frontend", desc: "JS, React.js, Next.js, TypeScript" },
  { icon: Server, label: "Backend", desc: "Node.js, Express.js, Php" },
  { icon: Database, label: "Database", desc: "MongoDB, PostgreSQL, MySQL" },
  { icon: Globe, label: "Deployment & Hosting", desc: "cPanel, Vercel, Render" },
  { icon: Layers, label: "Full Stack", desc: "End-to-end solutions" },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">{""}</span>About Me
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-secondary-foreground leading-relaxed mb-6">
              I'm a passionate Full Stack Developer specializing in the{" "}
              <span className="text-primary font-semibold">MERN Stack</span>. With over 3 years of
              professional experience, I've built and maintained complex web applications for diverse
              clients and industries. I've also working on deploying and hosting applications on platforms like cPanel, Vercel, and Render.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I love turning ideas into reality through clean, efficient code. My expertise spans from
              crafting pixel-perfect UIs to designing robust backend architectures and RESTful APIs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, and staying up-to-date with the latest industry trends.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-5 rounded-xl bg-card border border-border hover:border-glow transition-all duration-300 group"
              >
                <Icon
                  size={28}
                  className="text-primary mb-3 group-hover:animate-pulse-glow"
                />
                <h3 className="font-display text-sm font-semibold mb-1">{label}</h3>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
