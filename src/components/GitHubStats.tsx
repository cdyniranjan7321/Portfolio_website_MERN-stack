import { motion } from "framer-motion";
import { Github, Star, GitFork, Users, Code, GitPullRequest } from "lucide-react";
import { useEffect, useState } from "react";

const GitHubStats = () => {
  const [stats, setStats] = useState({
    repos: 36,
    followers: 0,
    totalStars: 24,
    totalForks: 0,
    contributions: 2826,
  });

  useEffect(() => {
    // Replace 'your-username' with your actual GitHub username
    const username = "https://github.com/cdyniranjan7321";
    
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setStats((prev) => ({
          ...prev,
          repos: data.public_repos || 25,
          followers: data.followers || 11,
        }));
      })
      .catch((err) => console.error("GitHub API error:", err));
  }, []);

  const statItems = [
    { label: "Public Repos", value: stats.repos, icon: Code },
    { label: "Private Repos", value: stats.followers, icon: Users },
    { label: "Total Stars", value: stats.totalStars, icon: Star },
    { label: "Contributions more than", value: stats.contributions, icon: GitPullRequest },
  ];

  const topRepos = [
    { name: "Ecommerce Website", stars: 12, language: "React.js, Tailwind CSS, Node.js, Express.js, MongoDB", description: "Awesome pets shop ecommerce project" },
    //{ name: "Project 2", stars: 8, language: "React", description: "Another great project" },
    // Add your actual top repos
  ];

  return (
    <section id="github" className="py-24 relative bg-grid">
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
            <span className="text-primary">GitHub</span> Activity
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Open source contributions and project statistics
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {statItems.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border text-center"
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">
                {item.value}
              </div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Top Repositories */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-xl font-semibold text-center mb-6">
            Top Repositories
          </h3>
          <div className="space-y-4">
            {topRepos.map((repo, idx) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <h4 className="font-semibold text-primary">{repo.name}</h4>
                    <p className="text-sm text-muted-foreground">{repo.description}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Star size={12} /> {repo.stars} stars
                      </span>
                      <span className="text-xs text-muted-foreground">{repo.language}</span>
                    </div>
                  </div>
                  <a
                    href="https://github.com/cdyniranjan7321/Rivo_ecommerce-_website"
                    className="text-sm text-primary hover:underline"
                  >
                    View →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/cdyniranjan7321"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
          >
            <Github size={18} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;