
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Building a Modern Portfolio with React and Tailwind",
    excerpt: "Learn how to create a stunning developer portfolio using React, Framer Motion, and Tailwind CSS...",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    tags: ["React", "Tailwind", "Portfolio"],
    link: "#",
  },
  {
    title: "Understanding React Hooks: A Deep Dive",
    excerpt: "Master useState, useEffect, and custom hooks with practical examples and best practices...",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    tags: ["React", "JavaScript", "Hooks"],
    link: "#",
  },
  {
    title: "Optimizing Performance in Next.js Applications",
    excerpt: "Tips and techniques to make your Next.js apps faster and more efficient...",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    tags: ["Next.js", "Performance", "Web Dev"],
    link: "#",
  },
];

const BlogHighlight = () => {
  return (
    <section id="blog" className="py-24 relative bg-grid">
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
            Latest <span className="text-primary">Articles</span>
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and experiences through technical writing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>
              <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <a
                href={post.link}
                className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
              >
                Read More <ArrowRight size={14} />
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
          >
            View All Articles
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHighlight;