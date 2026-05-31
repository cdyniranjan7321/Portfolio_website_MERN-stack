
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
  SiRender,
  SiCpanel,
} from "react-icons/si";
import { FaPhp, FaDatabase } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { TbApi } from "react-icons/tb";
import { RiAtFill } from "react-icons/ri";
import { CiCloudOn } from "react-icons/ci";

const skillCategories = [
  {
    title: "Frontend",
    icon: <SiReact className="text-cyan-400" />,
    skills: [
      { name: "JavaScript", level: 95, icon: <SiJavascript className="text-yellow-400" /> },
      { name: "React.js", level: 90, icon: <SiReact className="text-cyan-400" /> },
      { name: "TypeScript", level: 85, icon: <SiTypescript className="text-blue-500" /> },
      { name: "Next.js", level: 80, icon: <SiNextdotjs className="text-white" /> },
      { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss className="text-sky-500" /> },
      { name: "HTML/CSS", level: 95, icon: <div className="flex gap-1"><SiHtml5 className="text-orange-500" /><SiCss className="text-blue-500" /></div> },
      { name: "Redux", level: 85, icon: <SiRedux className="text-purple-500" /> },
    ],
  },
  {
    title: "Backend",
    icon: <SiNodedotjs className="text-green-500" />,
    skills: [
      { name: "Node.js", level: 90, icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express.js", level: 90, icon: <SiExpress className="text-gray-400" /> },
      { name: "Prisma", level: 80, icon: <SiPrisma className="text-teal-400" /> },
      { name: "REST APIs", level: 92, icon: <TbApi className="text-indigo-400" /> },
      { name: "JWT Auth", level: 88, icon: <RiAtFill className="text-pink-500" /> },
      { name: "PHP", level: 60, icon: <FaPhp className="text-purple-400" /> },
    ],
  },
  {
    title: "Database & Tools",
    icon: <FaDatabase className="text-emerald-400" />,
    skills: [
      { name: "MongoDB", level: 95, icon: <SiMongodb className="text-green-600" /> },
      { name: "PostgreSQL", level: 85, icon: <SiPostgresql className="text-blue-400" /> },
      { name: "MySQL", level: 88, icon: <SiMysql className="text-sky-600" /> },
      { name: "Git/GitHub", level: 96, icon: <div className="flex gap-1"><SiGit className="text-orange-600" /><SiGithub className="text-white" /></div> },
      { name: "CI/CD", level: 70, icon: <CiCloudOn className="text-blue-300" /> },
    ],
  },
  {
    title: "Deploying and Hosting",
    icon: <SiVercel className="text-white" />,
    skills: [
      { name: "Vercel", level: 95, icon: <SiVercel className="text-white" /> },
      { name: "Render", level: 85, icon: <SiRender className="text-purple-400" /> },
      { name: "cPanel", level: 88, icon: <SiCpanel className="text-orange-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary"></span>Skills & Technologies
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-display text-lg font-semibold text-primary">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-secondary-foreground">{skill.name}</span>
                      </div>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: catIdx * 0.15 + i * 0.05, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;