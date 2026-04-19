
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion"; // Add this to imports

const testimonials = [
  {
    name: "John Smith",
    role: "CTO, TechCorp",
    content: "Niranjan is an exceptional developer who delivered our project ahead of schedule. His React expertise and problem-solving skills are outstanding.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=John+Smith&background=6366f1&color=fff",
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    content: "Working with Niranjan was a pleasure. He communicates clearly, writes clean code, and always goes the extra mile.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=6366f1&color=fff",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    content: "One of the most dedicated developers I've worked with. His attention to detail and technical knowledge are impressive.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Michael+Chen&background=6366f1&color=fff",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 relative bg-grid">
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
            What <span className="text-primary">People Say</span>
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-xl bg-card border border-border relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-display font-semibold text-lg">{testimonials[current].name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-secondary-foreground leading-relaxed italic">
                "{testimonials[current].content}"
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-card border border-border hover:bg-primary/10 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    current === idx ? "w-6 bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-card border border-border hover:bg-primary/10 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;