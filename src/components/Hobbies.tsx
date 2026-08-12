
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Gamepad2, 
  Music, 
  Camera, 
  BookOpen, 
  Bike, 
  Coffee,
  Code2,
  Globe
} from "lucide-react";

interface Hobby {
  id: number;
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  bgColor: string;
  emoji: string;
}

const hobbies: Hobby[] = [
  {
    id: 1,
    name: "Gaming",
    icon: <Gamepad2 className="w-8 h-8" />,
    description: "Exploring virtual worlds and competitive gaming",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    emoji: "🎮"
  },
  {
    id: 2,
    name: "Music",
    icon: <Music className="w-8 h-8" />,
    description: "Playing instruments and creating melodies",
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
    emoji: "🎵"
  },
  {
    id: 3,
    name: "Photography",
    icon: <Camera className="w-8 h-8" />,
    description: "Capturing moments through the lens",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    emoji: "📸"
  },
  {
    id: 4,
    name: "Reading",
    icon: <BookOpen className="w-8 h-8" />,
    description: "Diving into books and expanding knowledge",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    emoji: "📚"
  },
  {
    id: 5,
    name: "Cycling",
    icon: <Bike className="w-8 h-8" />,
    description: "Exploring nature on two wheels",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    emoji: "🚴"
  },
  {
    id: 6,
    name: "Coffee Brewing",
    icon: <Coffee className="w-8 h-8" />,
    description: "Perfecting the art of coffee making",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    emoji: "☕"
  },
  {
    id: 7,
    name: "Coding Challenges",
    icon: <Code2 className="w-8 h-8" />,
    description: "Solving problems and building projects",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    emoji: "💻"
  },
  {
    id: 8,
    name: "Traveling",
    icon: <Globe className="w-8 h-8" />,
    description: "Discovering new cultures and places",
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
    emoji: "🌍"
  }
];

const Hobbies = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePosition({ x, y });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="hobbies" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-500 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse" as const,
              ease: "easeInOut",
            }}
            className="inline-block mb-4"
          >
            <span className="text-6xl">🎯</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            My Hobbies & Passions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Beyond coding, here's what I love to do in my free time
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          onMouseMove={handleMouseMove}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.id}
              custom={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                rotateX: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
              onHoverStart={() => setHoveredId(hobby.id)}
              onHoverEnd={() => setHoveredId(null)}
              style={{
                transform: hoveredId === hobby.id
                  ? `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`
                  : 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
              }}
              className={`relative group p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${hobby.bgColor} border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl`}
            >
              {/* 3D card glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Floating emoji background */}
              <div className="absolute -top-2 -right-2 text-4xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                {hobby.emoji}
              </div>

              <div className="relative z-10">
                {/* Icon with animated border */}
                <motion.div
                  animate={hoveredId === hobby.id ? {
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  } : {}}
                  transition={{ duration: 0.8 }}
                  className={`w-16 h-16 rounded-xl ${hobby.bgColor} border border-white/10 flex items-center justify-center mb-4 ${hobby.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  {hobby.icon}
                </motion.div>

                <h3 className="text-xl font-semibold mb-2 text-white">
                  {hobby.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {hobby.description}
                </p>

                {/* Animated progress indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: hoveredId === hobby.id ? "100%" : "0%" }}
                  className="h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mt-4 rounded-full"
                />
              </div>

              {/* Decorative corner dots */}
              <div className="absolute top-2 left-2 flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400/30" />
                <div className="w-1.5 h-1.5 rounded-full bg-pink-400/30" />
              </div>
              <div className="absolute bottom-2 right-2 flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400/30" />
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400/30" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fun fact section with 3D tilt */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="p-4"
            >
              <div className="text-3xl mb-2">⏰</div>
              <p className="text-sm text-muted-foreground">Hours spent on hobbies weekly</p>
              <p className="text-2xl font-bold text-white">20+</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="p-4"
            >
              <div className="text-3xl mb-2">🏆</div>
              <p className="text-sm text-muted-foreground">Skills improved through hobbies</p>
              <p className="text-2xl font-bold text-white">15+</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="p-4"
            >
              <div className="text-3xl mb-2">💡</div>
              <p className="text-sm text-muted-foreground">Ideas generated from hobbies</p>
              <p className="text-2xl font-bold text-white">50+</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;