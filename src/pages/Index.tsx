
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Certifications from "@/components/Certifications";
import GitHubStats from "@/components/GitHubStats";
import Testimonials from "@/components/Testimonials";
import BlogHighlight from "@/components/BlogHighlight";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <GitHubStats />        {/* NEW: Shows your GitHub activity */}
       <Certifications />      {/* NEW: Shows your credentials */}
        <Testimonials />        {/* NEW: Social proof */}
      <BlogHighlight />       {/* NEW: Shows technical writing */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
