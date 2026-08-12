
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Gamepad2, 
  Music, 
  Camera, 
  BookOpen, 
  Bike, 
  Coffee,
  Code2,
  Globe,
  X,
  Sparkles,
  ArrowRight
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
  const [isOpen, setIsOpen] = useState(false);
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

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      {/* Trigger Button */}
      <section id="hobbies" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse" as const,
                ease: "easeInOut",
              }}
              className="inline-block mb-4"
            >
              <span className="text-6xl"></span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              My Hobbies & Passions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Click the button below to explore what I love to do beyond coding
            </p>
            
            <motion.button
              onClick={() => setIsOpen(true)}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Explore My Hobbies</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal Content */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 overflow-y-auto p-4 md:p-8"
            >
              <div 
                className="relative max-w-7xl mx-auto min-h-[80vh] bg-gradient-to-br from-slate-900/95 to-slate-800/95 rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                >
                  <X className="w-6 h-6 text-white" />
                </motion.button>

                {/* Modal Header */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-center mb-10"
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse" as const,
                      ease: "easeInOut",
                    }}
                    className="inline-block mb-4"
                  >
                    <span className="text-7xl"></span>
                  </motion.div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-white bg-clip-text text-transparent">
                    My Hobbies & Passions
                  </h2>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Here's everything I love to do when I'm not coding
                  </p>
                </motion.div>

                {/* Hobbies Grid */}
                <motion.div
                  ref={containerRef}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
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
                        transition: { type: "spring" as const, stiffness: 300 }
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

                {/* Fun Fact Section */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-10 p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10"
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hobbies;