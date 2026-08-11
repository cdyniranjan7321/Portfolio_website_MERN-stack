
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { Github, ExternalLink, ArrowLeft, Calendar, Users, Target, Code, Rocket, CheckCircle, Image } from "lucide-react";
import { useEffect } from "react";
import ImageGallery from '../components/ImageGallery';

const projects = [
  {
    id: "little-heart-pet-shop",
    title: "Little Heart Pet Shop",
    desc: "Full-featured Pets Shop online store with cart, payments, admin dashboard, and real-time inventory management.",
    tech: ["React", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "Redux", "Cloudinary", "SMTP Emails"],
    github: "https://github.com/cdyniranjan7321/Rivo_ecommerce-_website",
    live: "https://shop.littleheartpetshop.com.np/",
    fullDescription: "Little Heart Pet Shop is a comprehensive e-commerce platform designed specifically for pet shops. The platform provides a seamless shopping experience for pet owners while offering powerful management tools for shop administrators.",
    challenge: "The pet shop needed a digital presence that could handle real-time inventory management, secure payment processing, and provide an intuitive interface for both customers and staff. Managing pet products with varying specifications (size, color, stock level etc.) required a flexible product categorization system.",
    solution: "I developed a full-stack MERN application with Redux for state management. The system features a responsive frontend with TailwindCSS, a robust backend API with Node.js/Express, and MongoDB for flexible data storage. Cloudinary handles image optimization, while SMTP integration manages order confirmations and notifications.",
    results: [
      "Increased online sales by 53% within first 3 months",
      "Reduced inventory management time by 90%",
      "Successfully processed 50+ orders in first month",
      "Improved customer satisfaction with real-time order tracking"
    ],
    features: [
      "User authentication and profile management",
      "Advanced product search and filtering",
      "Shopping cart with persistent storage",
      "Secure payment gateway integration",
      "Real-time inventory tracking",
      "Admin dashboard with analytics",
      "product management with image uploads",
      "category management with flexible attributes",
      "order management system with status updates",
      "multiple Admin roles with different permissions",
      "Order management system",
      "Email notifications for orders"
    ],
    timeline: "3 months",
    role: "Full Stack Developer",
    category: "E-commerce",
    images: [
      {
        src: "/projects/littleheartpetshop/homepage.png",
        alt: "Little Heart Pet Shop Homepage",
        title: "Homepage",
        description: "Main landing page."
      },
      {
        src: "/projects/littleheartpetshop/productpage.png",
        alt: "Product Page",
        title: "Product Page",
        description: "Products page with search and filter functionality."
      },
      {
        src: "/projects/littleheartpetshop/productsdetailspage.png",
        alt: "ProductDeails Page",
        title: "ProductDetails Page",
        description: "ProductDetails page with selectable product colors, sizes and add to cart functionality."
      },
       {
        src: "/projects/littleheartpetshop/add to cart.png",
        alt: "Add to Cart Page",
        title: "Add to Cart Page",
        description: "Add to Cart page with quantity selection and checkout button."
      },
      {
        src: "/projects/littleheartpetshop/checkoutpage.png",
        alt: "Checkout Page",
        title: "Checkout Page",
        description: "Checkout page with shipping address and order summary."
      },
      {
        src: "/projects/littleheartpetshop/paymentpage.png",
        alt: "Payment Page",
        title: "Payment Page",
        description: "Payment page with payment method selection and order confirmation."
      },
      {
        src: "/projects/littleheartpetshop/admindashboard.png",
        alt: "Admin Dashboard",
        title: "Admin Dashboard",
        description: "Admin dashboard with analytics, order management, product management and category management."
      },
      {
        src: "/projects/littleheartpetshop/orderhistorypage.png",
        alt: "Order History Page",
        title: "Order History Page",
        description: "Order history page with order details."
      },
      {
        src: "/projects/littleheartpetshop/order confirmation email.png",
        alt: "Order Confirmation Email",
        title: "Order Confirmation Email",
        description: "Order confirmation email sent to customers after successful order placement."
      },
    ]
  },

  {
    id: "barber-shop",
    title: "Barber shop",
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
    role: "Full Stack Developer",
    category: "Booking System",
    images: [
      {
        src: "/projects/barbershop/homepage.png",
        alt: "Little Heart Pet Shop Homepage",
        title: "Homepage",
        description: "Main landing page."
      },
      {
        src: "/projects/barbershop/servicesselectionpage.png",
        alt: "Services Selection Page",
        title: "Services Selection Page",
        description: "Services selection page with available services and their details."
      },
      {
        src: "/projects/barbershop/staffselectionpage.png",
        alt: "Staff Selection Page",
        title: "Staff Selection Page",
        description: "Staff selection page with available staff and their profiles."
      },
      {
        src: "/projects/barbershop/date&timeselection page.png",
        alt: "Date & Time Selection Page",
        title: "Date & Time Selection Page",
        description: "Date & Time selection page with available slots and calendar view."
      },
    ]
  },

  {
    id: "business-appointments-dashboard",
    title: "Business Appointments Dashboard",
    desc: "Analytics dashboard integrating multiple social APIs with data visualization and automated reporting. In this dashboard we have website builder for automated website creation and management.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/cdyniranjan7321/Business_Appointments_Dashboard",
    live: "https://www.blueskyindustries.com.np/",
    fullDescription: "A comprehensive business Appointments analytics dashboard that aggregates data from multiple business platforms and provides actionable insights through beautiful visualizations. User can also create and manage their business website with the help of website builder. This dashboard empowers businesses to make data-driven decisions and optimize their online presence.",
    challenge: "Businesses needed a unified platform to track appointments, analyze customer behavior, and manage their online presence. The challenge was to integrate various APIs, handle large datasets efficiently, and present insights in an easily digestible format.",
    solution: "I developed a React and TypeScript frontend with Chart.js for data visualization, and a Node.js backend with MongoDB for data storage. The dashboard integrates with multiple APIs to fetch appointment data, customer interactions, and website analytics. The website builder allows users to create and manage their business websites with ease.",
    results: [
      "Saved 15+ hours per week on reporting",
      "Improved data accuracy by 65%",
      "Enabled data-driven decision making",
      "Supported 15+ concurrent business users"
    ],
    features: [
      "Multi-platform API integration",
      "Advanced data visualization",
      "Auto website builder with customizable templates",
      "Customizable dashboard layouts",
      "Automated report generation",
      "Real-time data synchronization",
      "Interactive charts and graphs",
      "Export functionality (PDF/CSV)",
      "User role management"
    ],
    timeline: "4 months",
    role: "Full Stack Developer",
    category: "Analytics",
    images: [
      {
        src: "/projects/businesssappointmentsdashboard/businessdashboard.png",
        alt: "Business Appointments Dashboard",
        title: "Business Appointments Dashboard",
        description: "Business Appointments Dashboard with analytics, charts, and website builder."
      },
      {
        src: "/projects/businesssappointmentsdashboard/servicespage.png",
        alt: "Services Page",
        title: "Services Page",
        description: "Services Page with service listings and management."
      },
      {
        src: "/projects/businesssappointmentsdashboard/appointmentpage.png",
        alt: "Appointment Page",
        title: "Appointment Page",
        description: "Appointment Page with appointment listings and management."
      },
      {
        src: "/projects/businesssappointmentsdashboard/projectpage.png",
        alt: "Project Page",
        title: "Project Page",
        description: "Project Page with different projects templates to choose from and manage their business website."
      },
      {
        src: "/projects/businesssappointmentsdashboard/templatepage.png",
        alt: "Template Page",
        title: "Template Page",
        description: "View selected template and customize it according to their business needs."
      },
      {
        src: "/projects/businesssappointmentsdashboard/websiteeditpage.png",
        alt: "Website Builder Edit Page",
        title: "Website Builder Edit Page",
        description: "Website Builder Edit Page with selectable components to customize their business website."
      },
      {
        src: "/projects/businesssappointmentsdashboard/customizesection.png",
        alt: "Customize Section",
        title: "Customize Section",
        description: "Customize Section with options to change colors, fonts, and layout of the selected component."
      },
      {
        src: "/projects/businesssappointmentsdashboard/deploysection.png",
        alt: "Deploy Section",
        title: "Deploy Section",
        description: "Deploy Section with preview of the website and options to deploy it to a live server."
      },
    ]
  },

  {
    id: "rasa-restaurant-app",
    title: "Rasa Restaurant App",
    desc: "A restaurant website with real-time order tracking, menu management, and customer reviews. It also has a chatbot for customer support, Chef's table and reservation management.",
    tech: ["React", "Socket.io", "Express", "MongoDB"],
    github: "https://github.com/cdyniranjan7321/Restaurant-App",
    live: "https://restaurant-app-mgcz.onrender.com",
    fullDescription: "A complete restaurant management solution with online ordering, table reservations, and integrated chatbot for customer support.",
    challenge: "Restaurants needed to adapt to digital ordering while maintaining quality customer service. The solution needed to handle high traffic during peak hours.",
    solution: "Built with React and Socket.io for real-time updates. The system manages orders, reservations, and menu updates seamlessly.",
    results: [
      "Increased online orders by 30%",
      "Reduced wait times by 50%",
      "Improved customer satisfaction rating to 4.8/5",
      "Automated 70% of customer inquiries"
    ],
    features: [
      "Online food ordering",
      "Table reservation system",
      "Chef's table management",
      "Real-time order tracking",
      "AI-powered chatbot",
      "Customer review management",
      "Menu management system",
      "Analytics dashboard for sales and customer insights",
      "Grapical representation of peak hours, daily, weekly and monthly aanalytics",
    ],
    timeline: "2 months",
    role: "Full Stack Developer",
    category: "Food & Beverage",
     images: [
      {
        src: "/projects/restaurant/homepage.png",
        alt: "Little Heart Pet Shop Homepage",
        title: "Homepage",
        description: "Main landing page with featured products"
      },
      {
        src: "/projects/restaurant/menu page.png",
        alt: "Menu Page",
        title: "Menu Page",
        description: "Menus with categories and search functionality"
      },
      {
        src: "/projects/restaurant/products.png",
        alt: "Product Listing",
        title: "Product Catalog",
        description: "Products lists with edit, delete and add new product functionality"
      },
      {
        src: "/projects/restaurant/cart.png",
        alt: "Shopping Cart",
        title: "Shopping Cart",
        description: "Cart management with quantity controls"
      },
      {
        src: "/projects/restaurant/admin-dashboard.png",
        alt: "Admin Dashboard",
        title: "Admin Dashboard",
        description: "Inventory, Menu, Reservations, Sales&Analytics and order management"
      },
      {
        src: "/projects/restaurant/checkout.png",
        alt: "Checkout Page",
        title: "Checkout",
        description: "Secure payment processing"
      },
      {
        src: "/projects/restaurant/order-confirmation.png",
        alt: "Order Confirmation",
        title: "Order Confirmation",
        description: "Phone, Email and order tracking"
      },
      {
        src: "/projects/restaurant/sales and analytics.png",
        alt: "Sales & Analytics",
        title: "Sales & Analytics",
        description: "Revenue, Orders, Customer Insights and graphical representation of peak hours, daily, weekly and monthly analytics"
      },
      {
        src: "/projects/restaurant/order-distribution.png",
        alt: "Category distribution",
        title: "Category Distribution",
        description: "Graphical representation of sales distribution by category, helping to identify popular items and trends."
      },
      {
        src: "/projects/restaurant/chatbotpage.png",
        alt: "Rasa AI Assistant",
        title: "Rasa AI Assistant",
        description: "ChatBot page with a chatbot to answer all the questions related to the restaurant website. It is an AI-powered chatbot that can answer all the questions related to the restaurant website."
      }
    ]
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
      "Increased organic traffc.",
      "Generated 50+ qualified leads monthly",
      "Reduced content publishing time by 65%",
    ],
    features: [
      "Media library management",
      "User role management",
      "Analytics integration",
      "Newsletter system",
      "Contact form management"
    ],
    timeline: "1 months",
    role: "Full Stack Developer",
    category: "Content Management",
    images: [
      {
        src: "/projects/blog&consultancy/homepage.png",
        alt: "Blog & Consultancy Homepage",
        title: "Blog & Consultancy Homepage",
        description: "Blog & Consultancy Homepage with featured articles and services."
      },
      {
        src: "/projects/blog&consultancy/servicespage.png",
        alt: "Services Page",
        title: "Services Page",
        description: "Services Page with detailed descriptions of consultancy offerings."
      },
       {
        src: "/projects/blog&consultancy/contactpage.png",
        alt: "Contact Page",
        title: "Contact Page",
        description: "Contact Page with form for inquiries."
      },
    ]
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
      "Increased recruiter engagements.",
      "Showcased 6 major projects effectively",
      "Received positive feedback from visitors"
    ],
    features: [
      "Responsive design",
      "Smooth scroll animations",
      "Project filtering system",
      "Contact form with validation",
      "Skills visualization",
      "Experience timeline"
    ],
    timeline: "1.5 months",
    role: "Designer & Developer",
    category: "Personal Branding",
    images: [
      {
        src: "/projects/portfolio/homepage.png",
        alt: "Portfolio Homepage",
        title: "Portfolio Homepage",
        description: "Portfolio with all skills, experience and projects."
      },
       {
        src: "/projects/portfolio/aboutpage.png",
        alt: "About Me page",
        title: "About Me page",
        description: "About Me page with skills and experience."
      },
       {
        src: "/projects/portfolio/skillspage.png",
        alt: "Skills & Technologies page",
        title: "Skills & Technologies page",
        description: "Skills & Technologies page with all the technologies and skills I have."
      },
       {
        src: "/projects/portfolio/projects.png",
        alt: "Projects page",
        title: "Projects page",
        description: "Projects page with all the projects I have worked on. And each project has a case study page with all the details of the project."
      },
       {
        src: "/projects/portfolio/experience.png",
        alt: "Experience page",
        title: "Experience page",
        description: "Experience page with all the experience I have."
      },
       {
        src: "/projects/portfolio/github.png",
        alt: "Github Activity page",
        title: "Github Activity page",
        description: "Github Activity page with all the contributions I have made on Github. And live website visiters counter with all the visitors and their locations."
      },
       {
        src: "/projects/portfolio/contactpage.png",
        alt: "Contact page",
        title: "Contact page",
        description: "Contact page with all the contact information and a contact form to send me a message."
      },
      {
        src: "/projects/portfolio/chatbotpage.png",
        alt: "ChatBot",
        title: "ChatBot",
        description: "ChatBot page with a chatbot to answer all the questions related to my portfolio website. It is an AI-powered chatbot that can answer all the questions related to my portfolio website."
      },
      ]
  },

  {
    id: "real-time team collaboration board",
    title: "Real-time Team Collaboration Board",
    desc: "Real-time collaboration board for teams to manage tasks, share updates, and communicate effectively. It includes features like task assignment, progress tracking, and team chat.",
    tech: ["React", "Tailwind CSS", "Express", "MongoDB"],
    github: "https://github.com/cdyniranjan7321/Real_Time_Team_Collaboration_Board",
    live: "",
    fullDescription: "A real-time collaboration board for teams to manage tasks, share updates, and communicate effectively. It includes features like task assignment, progress tracking, and team chat.",
    challenge: "Teams often struggle with task management and communication, especially in remote settings. The challenge was to create a platform that allows for real-time updates and seamless collaboration.",
    solution: "Built with React for the frontend, Socket.io for real-time communication, and Express/MongoDB for backend and data storage. The platform allows team members to create tasks, assign them, track progress, and communicate through an integrated chat system.",
    results: [
      "Increased team productivity by 40%",
      "Reduced task completion time by 30%",
      "Improved team communication and collaboration"
    ],
    features: [
      "Real-time task management",
      "Team chat and notifications",
      "Progress tracking and analytics",
      "Task assignment and deadlines",
      "File sharing and attachments",
      
    ],
    timeline: "1.5 months",
    role: "Full Stack Developer",
    category: "Personal Branding",
    images: [
      {
        src: "/projects/realtimeboard/homepage.png",
        alt: "Real-time Team Collaboration Board Homepage",
        title: "Real-time Team Collaboration Board Homepage",
        description: "Real-time Team Collaboration Board with all the tasks, team members and chat."
       },
       {
        src: "/projects/realtimeboard/addtaskspage.png",
        alt: "Add Tasks Page",
        title: "Add Tasks Page",
        description: "Add Tasks Page with all the tasks and their details."
       },
      ]
  },

  {
    id: "real estate house website",
    title: "Real Estate House Website",
    desc: "Real Estate website with property listings, search functionality, and contact forms for inquiries. It allows users to browse available properties and get in touch with agents.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Express", "MongoDB"],
    github: "https://github.com/cdyniranjan7321/Dream_home_Real-Estate-project",
    live: "",
    fullDescription: "A real estate website that allows users to browse property listings, view detailed information, and contact agents for inquiries. The platform provides a user-friendly interface for both buyers and sellers.",
    challenge: "The real estate market needed a digital platform to showcase properties effectively, allowing users to filter and search based on their preferences. The challenge was to create a responsive and intuitive interface that could handle a large number of listings.",
    solution: "Developed a React frontend with TypeScript for type safety, Tailwind CSS for styling, and an Express/MongoDB backend for managing property data. The website includes advanced search and filtering options, detailed property pages, and contact forms for inquiries.",
    results: [
      "Increased property inquiries by 50%",
      "Enhanced user experience with intuitive navigation",
      "Reduced time to find suitable properties by 40%"
    ],
    features: [
      "Property listings with images and details",
      "Advanced search and filtering options",
      "Responsive design for mobile and desktop",
      "Contact forms for inquiries",
      "Search as price range, location, property type, and more"
      
    ],
    timeline: "1.5 months",
    role: "Full Stack Developer",
    category: "Personal Branding",
    images: [
      {
        src: "/projects/realestate/homepage.png",
        alt: "Real Estate House Website Homepage",
        title: "Real Estate House Website Homepage",
        description: "Real Estate House Website with all the properties, search functionality and contact forms."
       },
       {
        src: "/projects/realestate/homepage2.png",
        alt: "Real Estate properties page",
        title: "Real Estate properties page",
        description: "Real Estate properties page with all the properties and their details."
       },
        {
        src: "/projects/realestate/contactpage.png",
        alt: "Contact Page",
        title: "Contact Page",
        description: "Contact Page with contact form for inquiries."
       },
        {
        src: "/projects/realestate/propertiespage.png",
        alt: "Properties selection page as filtered by location, price range and property type",
        title: "Properties selection page ",
        description: "Properties selection page as filtered by location, price range and property type with all the properties and their details."
       },
      ]
  },

  {
    id: "Rasa clothes collection",
    title: "Rasa Clothes Collection",
    desc: "Rasa clothes collection is a clothing e-commerce website with product listings, shopping cart, and checkout functionality. It allows users to browse and purchase clothing items online.",
    tech: ["React", "Tailwind CSS", "Express", "MongoDB"],
    github: "",
    live: "",
    fullDescription: "A real-time collaboration board for teams to manage tasks, share updates, and communicate effectively. It includes features like task assignment, progress tracking, and team chat.",
    challenge: "Teams often struggle with task management and communication, especially in remote settings. The challenge was to create a platform that allows for real-time updates and seamless collaboration.",
    solution: "Built with React for the frontend, Socket.io for real-time communication, and Express/MongoDB for backend and data storage. The platform allows team members to create tasks, assign them, track progress, and communicate through an integrated chat system.",
    results: [
      "Increased team productivity by 40%",
      "Reduced task completion time by 30%",
      "Improved team communication and collaboration"
    ],
    features: [
      "Real-time task management",
      "Team chat and notifications",
      "Progress tracking and analytics",
      "Task assignment and deadlines",
      "File sharing and attachments",
      
    ],
    timeline: "1.5 months",
    role: "Full Stack Developer",
    category: "Personal Branding",
    images: [
      {
        src: "/projects/realtimeboard/homepage.png",
        alt: "Real-time Team Collaboration Board Homepage",
        title: "Real-time Team Collaboration Board Homepage",
        description: "Real-time Team Collaboration Board with all the tasks, team members and chat."
       },
       {
        src: "/projects/realtimeboard/addtaskspage.png",
        alt: "Add Tasks Page",
        title: "Add Tasks Page",
        description: "Add Tasks Page with all the tasks and their details."
       },
      ]
  },

];

const CaseStudy = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === projectId);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Use "smooth" for animated scrolling
    });
  }, []); // Empty dependency array means this runs once when component mounts

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

          {/* inside the CaseStudy component, after the Key Features section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16"
            >
             <div className="flex items-center gap-2 mb-6">
              <Image className="text-primary" size={24} />
               <h2 className="text-2xl font-bold">Project Gallery</h2>
             </div>
            <p className="text-muted-foreground mb-6">
               Explore the visual journey of {project.title}. Click on any image to view it in full screen.
            </p>
             <ImageGallery images={project.images} />
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