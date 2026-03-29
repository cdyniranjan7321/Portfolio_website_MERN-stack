import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Tech Company",
    period: "2022 – Present",
    desc: "Building and maintaining large-scale web applications using React, Node.js, and MongoDB. Led migration of legacy systems to modern MERN architecture.",
    tech: ["React", "Node.js", "MongoDB", "TypeScript", "AWS"],
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency",
    period: "2021 – 2022",
    desc: "Developed responsive, high-performance UIs for client projects. Improved page load times by 40% through code splitting and optimization.",
    tech: ["React", "Next.js", "Tailwind CSS", "Redux"],
  },
  {
    role: "Junior Web Developer",
    company: "Startup Inc.",
    period: "2020 – 2021",
    desc: "Built RESTful APIs and contributed to frontend features. Collaborated in agile team to deliver MVP products on tight deadlines.",
    tech: ["JavaScript", "Express.js", "MongoDB", "HTML/CSS"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">{"// "}</span>Experience
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative mb-12 pl-16 md:pl-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute top-1 left-4 md:left-auto ${
                  i % 2 === 0 ? "md:right-[-7px]" : "md:left-[-7px]"
                } w-3.5 h-3.5 rounded-full bg-primary border-2 border-background shadow-[var(--shadow-glow-sm)]`}
              />

              <div className="p-5 rounded-xl bg-card border border-border hover:border-glow transition-all duration-300">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <Briefcase size={16} />
                  <span className="font-display text-xs tracking-wider uppercase">{exp.period}</span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-1">{exp.role}</h3>
                <p className="text-primary/70 text-sm font-display mb-3">{exp.company}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{exp.desc}</p>
                <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-display rounded-md bg-muted text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
