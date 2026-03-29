
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">{""}</span>Get In Touch
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-xl font-semibold mb-4">Let's work together</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm always interested in new opportunities and exciting projects. Whether you have a
              question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "cdyniranjan7321@gmail.com" },
                { icon: Phone, label: "+977 9869148791" },
                { icon: MapPin, label: "Pokhara, Nepal" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4 text-muted-foreground">
                  <div className="p-2.5 rounded-lg bg-muted">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

{ /* 
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {[
              { name: "name" as const, placeholder: "Your Name", type: "text" },
              { name: "email" as const, placeholder: "Your Email", type: "email" },
            ].map(({ name, placeholder, type }) => (
              <input
                key={name}
                type={type}
                placeholder={placeholder}
                value={formData[name]}
                onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 focus:shadow-[var(--shadow-glow-sm)] transition-all duration-300 font-body text-sm"
                required
              />
            ))}
            <textarea
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 focus:shadow-[var(--shadow-glow-sm)] transition-all duration-300 font-body text-sm resize-none"
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-[var(--shadow-glow)] transition-shadow duration-300"
            >
              Send Message <Send size={16} />
            </motion.button>
          </motion.form>
          */}

        </div>
      </div>
    </section>
  );
};

export default Contact;
