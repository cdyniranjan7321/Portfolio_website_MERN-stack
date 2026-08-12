
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
import VisitorTracker from "@/components/VisitorTracker";
import Hobbies from "@/components/Hobbies";

//import AdPlacement from "@/components/AdPlacement";
//import Certifications from "@/components/Certifications";
//import Testimonials from "@/components/Testimonials";
//import BlogHighlight from "@/components/BlogHighlight";

const Index = () => {

  // Your actual slot ID from AdSense
 // const AD_SLOT_TOP = '2194107970';
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

        {/* ✅ Ad after Hero section - Using your slot ID 
      <AdPlacement position="top" adSlot={AD_SLOT_TOP} />
      */}
      
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Hobbies /> {/* Add the Hobbies component here */}
      <GitHubStats />

       {/* Visitor Counter - positioned at the bottom */}
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <VisitorCounter />
      </div>

      {/*  <Certifications /> */}
      {/* <Testimonials />  */}
      {/* <BlogHighlight /> */}
      <Contact />
      <Footer />
      
      {/* Add the chatbot here - it will appear on all pages */}
      <PortfolioChatBot />
      {/* Visitor Tracker - only you can see the data */}
      <VisitorTracker />
    </div>
  );
};

export default Index;
