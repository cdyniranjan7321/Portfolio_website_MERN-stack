import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Full-featured online store with cart, payments, admin dashboard, and real-time inventory management.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Management Tool",
    desc: "Collaborative task management app with real-time updates, drag-and-drop boards, and team chat.",
    tech: ["Next.js", "Express", "Socket.io", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Social Media Dashboard",
    desc: "Analytics dashboard integrating multiple social APIs with data visualization and automated reporting.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Chart.js"],
    github: "#",
    live: "#",
  },
  {
    title: "Real-Time Chat App",
    desc: "Messaging platform with file sharing, video calls, typing indicators, and end-to-end encryption.",
    tech: ["React", "Socket.io", "Express", "MongoDB", "WebRTC"],
    github: "#",
    live: "#",
  },
  {
    title: "Blog & CMS",
    desc: "Content management system with markdown editor, SEO tools, image optimization, and role-based access.",
    tech: ["Next.js", "Node.js", "MongoDB", "Cloudinary"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Generator",
    desc: "Dynamic portfolio builder where users can create and customize their developer portfolios with templates.",
    tech: ["React", "Tailwind CSS", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-grid relative">
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
            <span className="text-primary">{"// "}</span>Projects
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-glow transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="text-primary" size={28} />
                <div className="flex gap-3">
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                  <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-display text-primary/70"
                  >
                    {t}
                    {project.tech.indexOf(t) < project.tech.length - 1 && (
                      <span className="text-muted-foreground ml-2">·</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
