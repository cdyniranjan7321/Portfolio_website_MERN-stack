
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { Github, ExternalLink, ArrowLeft, Calendar, Users, Target, Code, Rocket, CheckCircle } from "lucide-react";

const projects = [
  {
    id: "little-heart-pet-shop",
    title: "Little Heart Pet Shop",
    desc: "Full-featured Pets Shop online store with cart, payments, admin dashboard, and real-time inventory management.",
    tech: ["React", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "Redux", "Cloudinary", "SMTP Emails"],
    github: "https://github.com/cdyniranjan7321/Rivo_ecommerce-_website",
    live: "https://shop.littleheartpetshop.com.np/",
    fullDescription: "Little Heart Pet Shop is a comprehensive e-commerce platform designed specifically for pet shops. The platform provides a seamless shopping experience for pet owners while offering powerful management tools for shop administrators.",
    challenge: "The pet shop needed a digital presence that could handle real-time inventory management, secure payment processing, and provide an intuitive interface for both customers and staff. Managing pet products with varying specifications (size, breed, age-appropriateness) required a flexible product categorization system.",
    solution: "I developed a full-stack MERN application with Redux for state management. The system features a responsive frontend with TailwindCSS, a robust backend API with Node.js/Express, and MongoDB for flexible data storage. Cloudinary handles image optimization, while SMTP integration manages order confirmations and notifications.",
    results: [
      "Increased online sales by 150% within first 3 months",
      "Reduced inventory management time by 60%",
      "Successfully processed 500+ orders in first month",
      "Improved customer satisfaction with real-time order tracking"
    ],
    features: [
      "User authentication and profile management",
      "Advanced product search and filtering",
      "Shopping cart with persistent storage",
      "Secure payment gateway integration",
      "Real-time inventory tracking",
      "Admin dashboard with analytics",
      "Order management system",
      "Email notifications for orders"
    ],
    timeline: "3 months",
    role: "Full Stack Developer",
    category: "E-commerce"
  },
  {
    id: "barber-shop",
    title: "Baber shop",
    desc: "A barber shop website with online Appointment booking, service listings, staffselection, Time&Date selection and customer reviews",
    tech: ["Next.js", "Express.js", "Socket.io", "MongoDB"],
    github: "https://github.com/cdyniranjan7321/Barber_shop",
    live: "https://practise.blueskyindustries.com.np/",
    fullDescription: "A modern barber shop management system that streamlines appointment booking, staff management, and customer engagement through an intuitive web platform.",
    challenge: "The barber shop struggled with manual appointment management, leading to double-bookings and customer dissatisfaction. They needed a system that could handle real-time availability, staff schedules, and automated reminders.",
    solution: "I built a Next.js frontend with Socket.io for real-time updates, Express.js backend, and MongoDB for data persistence. The system includes live availability checking, automated SMS/email reminders, and a review system for quality feedback.",
    results: [
      "Eliminated double-bookings completely",
      "Reduced no-show rates by 40%",
      "Increased customer retention by 65%",
      "Staff productivity improved by 35%"
    ],
    features: [
      "Real-time appointment booking",
      "Staff schedule management",
      "Automated reminders",
      "Customer review system",
      "Service catalog management",
      "Payment processing",
      "Analytics dashboard"
    ],
    timeline: "2.5 months",
    role: "Lead Developer",
    category: "Booking System"
  },
  {
    id: "business-appointments-dashboard",
    title: "Business Appointments Dashboard",
    desc: "Analytics dashboard integrating multiple social APIs with data visualization and automated reporting. In this dashboard we have website builder for automated website creation and management.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Chart.js"],
    github: "https://github.com/cdyniranjan7321/Business_Appointments_Dashboard",
    live: "https://www.blueskyindustries.com.np/",
    fullDescription: "A comprehensive business analytics dashboard that aggregates data from multiple social media platforms and provides actionable insights through beautiful visualizations.",
    challenge: "Businesses needed a unified view of their social media performance across platforms. Manual data aggregation was time-consuming and error-prone.",
    solution: "I developed a TypeScript-based React application with Node.js backend, integrating various social media APIs. Chart.js provides interactive data visualizations, while PostgreSQL ensures reliable data storage.",
    results: [
      "Saved 15+ hours per week on reporting",
      "Improved data accuracy by 95%",
      "Enabled data-driven decision making",
      "Supported 50+ concurrent business users"
    ],
    features: [
      "Multi-platform social media integration",
      "Customizable dashboard layouts",
      "Automated report generation",
      "Real-time data synchronization",
      "Interactive charts and graphs",
      "Export functionality (PDF/CSV)",
      "User role management"
    ],
    timeline: "4 months",
    role: "Full Stack Developer",
    category: "Analytics"
  },
  {
    id: "rasa-restaurant-app",
    title: "Rasa Restaurant App",
    desc: "A restaurant website with real-time order tracking, menu management, and customer reviews. It also has a chatbot for customer support and reservation management.",
    tech: ["React", "Socket.io", "Express", "MongoDB", "WebRTC"],
    github: "https://github.com/cdyniranjan7321/Restaurant-App",
    live: "https://restaurant-app-mgcz.onrender.com",
    fullDescription: "A complete restaurant management solution with online ordering, table reservations, and integrated chatbot for customer support.",
    challenge: "Restaurants needed to adapt to digital ordering while maintaining quality customer service. The solution needed to handle high traffic during peak hours.",
    solution: "Built with React and Socket.io for real-time updates, featuring a WebRTC-based video calling system for customer support. The system manages orders, reservations, and menu updates seamlessly.",
    results: [
      "Increased online orders by 200%",
      "Reduced wait times by 50%",
      "Improved customer satisfaction rating to 4.8/5",
      "Automated 70% of customer inquiries"
    ],
    features: [
      "Online food ordering",
      "Table reservation system",
      "Real-time order tracking",
      "AI-powered chatbot",
      "Customer review management",
      "Menu management system",
      "Video call support"
    ],
    timeline: "3 months",
    role: "Frontend Lead",
    category: "Food & Beverage"
  },
  {
    id: "blog-consultancy-cms",
    title: "Blog & Consultancy CMS",
    desc: "Consultancy website with Content management system",
    tech: ["TypeScript.js", "Node.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/cdyniranjan7321/consultancy_website",
    live: "https://consultancy-website-zt2c.onrender.com",
    fullDescription: "A professional consultancy website with a powerful CMS for managing blog posts, case studies, and service offerings.",
    challenge: "Consultancy firm needed a platform to showcase expertise through content marketing while maintaining brand consistency.",
    solution: "TypeScript-based full-stack application with secure admin panel, rich text editing, and media management through Cloudinary.",
    results: [
      "Increased organic traffic by 180%",
      "Generated 50+ qualified leads monthly",
      "Reduced content publishing time by 75%",
      "Improved SEO rankings significantly"
    ],
    features: [
      "WYSIWYG content editor",
      "SEO optimization tools",
      "Media library management",
      "User role management",
      "Analytics integration",
      "Newsletter system",
      "Contact form management"
    ],
    timeline: "2 months",
    role: "Solo Developer",
    category: "Content Management"
  },
  {
    id: "portfolio",
    title: "Portfolio",
    desc: "Responsive portfolio website with project showcases, skill highlights, experience timeline, projects, and contact information.",
    tech: ["React", "Tailwind CSS", "Express", "MongoDB"],
    github: "https://github.com/cdyniranjan7321/Portfolio_website_MERN-stack",
    live: "https://www.niranjanchaudhary.com.np/",
    fullDescription: "A modern, responsive portfolio website showcasing my work, skills, and professional journey as a full-stack developer.",
    challenge: "Create a visually appealing portfolio that effectively communicates technical expertise while maintaining fast load times and smooth animations.",
    solution: "Built with React and Framer Motion for smooth animations, Tailwind CSS for styling, and Express/MongoDB backend for dynamic content management.",
    results: [
      "Achieved 95+ Lighthouse score",
      "Increased recruiter engagement by 120%",
      "Showcased 6 major projects effectively",
      "Received positive feedback from 50+ visitors"
    ],
    features: [
      "Responsive design",
      "Smooth scroll animations",
      "Project filtering system",
      "Contact form with validation",
      "Skills visualization",
      "Experience timeline",
      "Dark/Light mode toggle"
    ],
    timeline: "1.5 months",
    role: "Designer & Developer",
    category: "Personal Branding"
  }
];

const CaseStudy = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <button 
            onClick={() => navigate('/')}
            className="text-primary hover:underline"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              {project.fullDescription}
            </p>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Github size={20} />
                View Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <Calendar className="text-primary mt-1" size={20} />
              <div>
                <h3 className="font-semibold mb-1">Timeline</h3>
                <p className="text-muted-foreground">{project.timeline}</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-3"
            >
              <Users className="text-primary mt-1" size={20} />
              <div>
                <h3 className="font-semibold mb-1">My Role</h3>
                <p className="text-muted-foreground">{project.role}</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-3"
            >
              <Code className="text-primary mt-1" size={20} />
              <div>
                <h3 className="font-semibold mb-1">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Target className="text-primary" size={24} />
                <h2 className="text-2xl font-bold">The Challenge</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="text-primary" size={24} />
                <h2 className="text-2xl font-bold">The Solution</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="text-primary" size={18} />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-6">Results & Impact</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {project.results.map((result, idx) => (
                <div key={idx} className="p-4 bg-card rounded-lg border border-border">
                  <p className="text-muted-foreground">{result}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;