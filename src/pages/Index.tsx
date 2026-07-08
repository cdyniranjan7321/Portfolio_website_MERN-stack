
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GitHubStats from "@/components/GitHubStats";
import PortfolioChatBot from "@/components/PortfolioChatBot";
import VisitorCounter from "@/components/VisitorCounter";
import VisitorGreeting from "@/components/VisitorsGreeting";

//import Certifications from "@/components/Certifications";
//import Testimonials from "@/components/Testimonials";
//import BlogHighlight from "@/components/BlogHighlight";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <GitHubStats />

       {/* Visitor Counter - positioned at the bottom */}
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <VisitorCounter />
      </div>

      {/*  <Certifications /> */}     {/* NEW: Shows your credentials */}
      {/* <Testimonials />  */}      {/* NEW: Social proof */}
      {/* <BlogHighlight /> */}   {/* NEW: Shows technical writing */}

      <Contact />
      <Footer />
      {/* Add the chatbot here - it will appear on all pages */}
      <PortfolioChatBot />
      
      {/* Visitor Greeting Modal - shows when user first visits */}
      <VisitorGreeting />
    </div>
  );
};

export default Index;
