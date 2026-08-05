
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
import AdPlacement from "@/components/AdPlacement";

//import Certifications from "@/components/Certifications";
//import Testimonials from "@/components/Testimonials";
//import BlogHighlight from "@/components/BlogHighlight";

const Index = () => {
   // Replace these with your actual AdSense slot IDs from your dashboard
  const AD_SLOTS = {
    TOP: '1234567890',      // Replace with your top ad slot ID
    MIDDLE: '0987654321',   // Replace with your middle ad slot ID
    BOTTOM: '1122334455',   // Replace with your bottom ad slot ID
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Ad after Hero section */}
      <AdPlacement position="top" adSlot={AD_SLOTS.TOP} />

      <About />
      <Skills />
      
      
      {/* Ad between Skills and Experience */}
      <AdPlacement position="middle" adSlot={AD_SLOTS.MIDDLE} />

      <Experience />
      <Projects />
      <GitHubStats />

       {/* Visitor Counter - positioned at the bottom */}
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <VisitorCounter />
      </div>

         {/* Ad before Contact */}
      <AdPlacement position="bottom" adSlot={AD_SLOTS.BOTTOM} />

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
