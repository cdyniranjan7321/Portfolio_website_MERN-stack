
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import bytesoftLogo from "/images/Bytesoft-logo.png";
import littleheartLogo from "/images/Littleheartpetshop_logo.png";
import blueskyLogo from "/images/Blue_Sky_industry_Logo.png";
import aakarLogo from "/images/aakar-logo.jpg";
import sochcollegeLogo from "/images/Soch_college_of_IT.png";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Bytesoft Nepal",
    logo: bytesoftLogo,
    period: "February 2024 – Present",
    desc: "Building and maintaining large-scale Ecommerce and pets shop, Business Appointment system, Barber shop web applications using React, Node.js, and MongoDB. Led migration of legacy systems to modern MERN architecture. Also works on cPanel for Deploying and Hosting the web applications.",
    tech: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "cPanel", "AWS"],
  },
  {
    role: "Social Media Handler",
    company: "Little Heart Pet Shop",
    logo: littleheartLogo,
    period: "2025 – Present",
    desc: "Manages social media accounts, creates engaging content, and interacts with followers to enhance brand presence and drive traffic to the online store.",
    tech: [],
  },
  {
    role: "Inventory Manager",
    company: "BlueSky Industries",
    logo: blueskyLogo,
    period: "2025 – Present",
    desc: "Tracks inventory levels, orders, sales, and deliveries. It can also be used in the manufacturing industry to create a work order, bill of materials and other production-related documents.",
    tech: [],
  },
  {
    role: "React Developer",
    company: "Aakar eSolution",
    logo: aakarLogo,
    period: "2023 – 2024",
    desc: "Developed Quiz App with responsive, high-performance UIs for client projects. Improved page load times by 40% through code splitting and optimization.",
    tech: ["React.js", "Next.js", "Tailwind CSS", "Redux", "TypeScript", "Prisma", "postgreSQL"],
  },
  {
    role: "Junior Web Developer(Internship)",
    company: "Aakar eSolution",
    logo: aakarLogo,
    period: "2023",
    desc: "Built Blood management system using RESTful APIs and contributed to both frontend and backend features. Collaborated in agile team to deliver MVP products on tight deadlines.",
    tech: ["JavaScript", "React.js", "Express.js", "MongoDB", "CSS/TailwindCSS"],
  },
   {
    role: "Full stack Developer(College Project)",
    company: "Soch college of IT",
    logo: sochcollegeLogo,
    period: "2022",
    desc: "Developed and maintained Restaurant web applications using MERN stack. Implemented user authentication, real-time order tracking, CURD operations and responsive design.",
    tech: ["JavaScript", "React.js", "Express.js", "MongoDB", "CSS/TailwindCSS"],
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
            <span className="text-primary">{""}</span>Experience
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
                
                {/* Company with logo */}
                <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  {exp.logo && (
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      className="w-11 h-11 object-contain rounded-sm"
                      onError={(e) => {
                        console.error(`Failed to load logo for ${exp.company}`);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  )}
                  <p className="text-primary/70 text-sm font-display">{exp.company}</p>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{exp.desc}</p>
                <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  {exp.tech.map((t) => t && (
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