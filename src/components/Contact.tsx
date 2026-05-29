import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Loader2, X, CheckCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call / form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Store form data in localStorage if needed
    const submissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
    submissions.push({
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    setShowPopup(true);

    // Auto close popup after 5 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mx-auto" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-semibold mb-4">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to work on new projects and collaborate with
                creative minds. Feel free to reach out through any of these
                channels.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: Mail,
                  label: "cdyniranjan7321@gmail.com",
                  href: "mailto:cdyniranjan7321@gmail.com",
                  subtitle: "Send me an email",
                },
                {
                  icon: Phone,
                  label: "+977 9869148791",
                  href: "tel:+9779869148791",
                  subtitle: "Give me a call",
                },
                {
                  icon: MapPin,
                  label: "Pokhara, Nepal",
                  href: "https://maps.google.com/?q=Pokhara+Nepal",
                  subtitle: "Based in Nepal",
                },
              ].map(({ icon: Icon, label, href, subtitle }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-primary/70 mb-0.5">{subtitle}</p>
                    <p className="text-sm font-medium group-hover:text-primary transition-colors">
                      {label}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          />
          
          {/* Popup Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            className="relative bg-background rounded-2xl shadow-2xl max-w-md w-full p-6 border border-border"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 p-1 rounded-lg hover:bg-muted transition-colors"
            >
              <X size={18} className="text-muted-foreground" />
            </button>

            {/* Success Icon */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} className="text-green-500" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">Message Sent! 🎉</h3>
              <p className="text-muted-foreground mb-4">
                Thank you for reaching out, {formData.name || "there"}! I've received your message and will get back to you within 24 hours.
              </p>
              
              <div className="w-full bg-muted/50 rounded-lg p-3 mb-4">
                <p className="text-xs text-muted-foreground mb-1">Message preview:</p>
                <p className="text-sm line-clamp-2">{formData.message || "..."}</p>
              </div>
              
              <button
                onClick={() => setShowPopup(false)}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Contact;