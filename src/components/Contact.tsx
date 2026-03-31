import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h3 className="font-display text-xl font-semibold mb-4">Let's work together</h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I'm always interested in new opportunities and exciting projects. Whether you have a
            question or just want to say hi, feel free to reach out!
          </p>

          <div className="space-y-4 inline-block text-left">
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
      </div>
    </section>
  );
};

export default Contact;