
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: "little-heart-pet-shop",
    title: "Little Heart Pet Shop",
    desc: "Full-featured Pets Shop online store with cart, payments, admin dashboard, and real-time inventory management.",
    tech: ["React", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "Redux", "Cloudinary", "SMTP Emails"],
    github: "https://github.com/cdyniranjan7321/Rivo_ecommerce-_website",
    live: "https://shop.littleheartpetshop.com.np/",
  },
  {
    id: "barber-shop",
    title: "Barber shop",
    desc: "A barber shop website with online Appointment booking, service listings, staffselection, Time&Date selection and customer reviews",
    tech: ["Next.js", "Express.js", "Socket.io", "MongoDB"],
    github: "https://github.com/cdyniranjan7321/Barber_shop",
    live: "https://practise.blueskyindustries.com.np/",
  },
  {
    id: "business-appointments-dashboard",
    title: "Business Appointments Dashboard",
    desc: "Analytics dashboard integrating multiple social APIs with data visualization and automated reporting. In this dashboard we have website builder for automated website creation and management.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Chart.js"],
    github: "https://github.com/cdyniranjan7321/Business_Appointments_Dashboard",
    live: "https://www.blueskyindustries.com.np/",
  },
  {
    id: "rasa-restaurant-app",
    title: "Rasa Restaurant App",
    desc: "A restaurant website with real-time order tracking, menu management, and customer reviews. It also has a chatbot for customer support and reservation management.",
    tech: ["React", "Socket.io", "Express", "MongoDB", "WebRTC"],
    github: "https://github.com/cdyniranjan7321/Restaurant-App",
    live: "https://restaurant-app-mgcz.onrender.com",
  },
  {
    id: "blog-consultancy-cms",
    title: "Blog & Consultancy CMS",
    desc: "Consultancy website with Content management system",
    tech: ["TypeScript.js", "Node.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/cdyniranjan7321/consultancy_website",
    live: "https://consultancy-website-zt2c.onrender.com",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    desc: "Responsive portfolio website with project showcases, skill highlights, experience timeline, projects, and contact information.",
    tech: ["React", "Tailwind CSS", "Express", "MongoDB"],
    github: "https://github.com/cdyniranjan7321/Portfolio_website_MERN-stack",
    live: "https://www.niranjanchaudhary.com.np/",
  },
  {
    id: "real-time team collaboration board ",
    title: "Real-time Team Collaboration Board",
    desc: "A real-time collaboration board for teams to manage tasks, share updates, and communicate effectively. It includes features like task assignment, progress tracking, and team chat.",
    tech: ["React", "Socket.io", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/cdyniranjan7321/Real_Time_Team_Collaboration_Board",
    live: "",
  },
  {
    id: "real estate house website",
    title: "Real Estate House Website",
    desc: "A real estate website with property listings, search functionality, and contact forms for inquiries. It allows users to browse available properties and get in touch with agents.",
    tech: ["React", "Tailwind CSS", "typeScript", "Node.js", "MongoDB"],
    github: "https://github.com/cdyniranjan7321/Dream_home_Real-Estate-project",
    live: "",
  },
  {
    id: "Rasa clothes collection",
    title: "Rasa Clothes Collection",
    desc: "Rasa clothes collection is a clothing e-commerce website with product listings, shopping cart, and checkout functionality. It allows users to browse and purchase clothing items online.",
    tech: ["React", "Tailwind CSS", "typeScript", "Node.js", "MongoDB"],
    github: "https://github.com/cdyniranjan7321/Ecommerce_App_for_clothes",
    live: "",
  },
  {
    id: "Ridgeline LMS Website",
    title: "Ridgeline LMS Website",
    desc: "Learning Management System supports two distinct user experiences through role-based access control: instructors can create courses, upload video lessons, and monitor student progress, while students can browse a course catalog, enroll, stream lessons, and track their own completion in real time.",
    tech: ["React", "Tailwind CSS", "typeScript", "Node.js", "MongoDB"],
    github: "",
    live: "",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    navigate(`/case-study/${projectId}`);
  };

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
            <span className="text-primary"></span>Projects
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mx-auto" />
         <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here is my few projects that I have worked on. Click on any project to read the case study and learn more about the challenges, solutions, and technologies used in each project.
          </p>
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
              className="group p-6 rounded-xl bg-card border border-border hover:border-glow transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="text-primary" size={28} />
                <div className="flex gap-3">
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Live demo for ${project.title}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 4).map((t, idx) => (
                  <span
                    key={t}
                    className="text-xs font-display text-primary/70"
                  >
                    {t}
                    {idx < Math.min(3, project.tech.length - 1) && (
                      <span className="text-muted-foreground ml-2">·</span>
                    )}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="text-xs text-muted-foreground">
                    +{project.tech.length - 4} more
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">Read Case Study</span>
                <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;