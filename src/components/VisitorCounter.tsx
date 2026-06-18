
import { useEffect, useState } from 'react';
import { Users, Eye, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VisitorData {
  totalVisits: number;
  liveVisitors: number;
  todayVisits: number;
}

const VisitorCounter = () => {
  const [visitorData, setVisitorData] = useState<VisitorData>({
    totalVisits: 2379,
    liveVisitors: 0,
    todayVisits: 0,
  });
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Initialize visitor data
    const initializeVisitors = () => {
      // Get today's date
      const today = new Date().toDateString();
      const lastVisitDate = localStorage.getItem('lastVisitDate');
      
      // Get stored values or set defaults
      let totalVisits = parseInt(localStorage.getItem('totalVisits') || '2379');
      let todayVisits = parseInt(localStorage.getItem('todayVisits') || '0');
      
      // If it's a new day, reset today's visits
      if (lastVisitDate !== today) {
        todayVisits = 0;
        localStorage.setItem('lastVisitDate', today);
        localStorage.setItem('todayVisits', '0');
      }
      
      // Check if this is a new session
      const sessionId = sessionStorage.getItem('visitorSessionId');
      if (!sessionId) {
        // New visitor - increment counts
        const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        sessionStorage.setItem('visitorSessionId', newSessionId);
        
        totalVisits = totalVisits + 1;
        todayVisits = todayVisits + 1;
        
        localStorage.setItem('totalVisits', totalVisits.toString());
        localStorage.setItem('todayVisits', todayVisits.toString());
      }
      
      // Set initial live visitors
      const liveVisitors = Math.floor(Math.random() * 6) + 3; // 3-8 visitors
      
      setVisitorData({
        totalVisits,
        liveVisitors,
        todayVisits,
      });
      setLoading(false);
    };

    initializeVisitors();

    // Update live visitors and counters
    const updateInterval = setInterval(() => {
      setVisitorData(prev => {
        // Random change for live visitors (-2 to +3)
        const change = Math.floor(Math.random() * 6) - 2;
        let newLive = prev.liveVisitors + change;
        newLive = Math.max(1, Math.min(15, newLive));
        
        let newTotal = prev.totalVisits;
        let newToday = prev.todayVisits;
        
        // If live visitors increased, increment both counters
        if (change > 0) {
          const increment = Math.abs(change);
          newTotal = prev.totalVisits + increment;
          newToday = prev.todayVisits + increment;
          
          localStorage.setItem('totalVisits', newTotal.toString());
          localStorage.setItem('todayVisits', newToday.toString());
        }
        
        return {
          totalVisits: newTotal,
          liveVisitors: newLive,
          todayVisits: newToday,
        };
      });
    }, 1000); // Update every 1 seconds

    return () => {
      clearInterval(updateInterval);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-4 px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-700">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-blue-400 animate-pulse" />
          <span className="text-gray-400 text-sm">Loading stats...</span>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-6 px-5 py-2.5 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700/50 shadow-lg shadow-black/20">
        {/* Total Visits */}
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-blue-400" />
          <span className="text-gray-400 text-sm font-medium">Total:</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={visitorData.totalVisits}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-white font-bold text-sm bg-blue-500/10 px-2 py-0.5 rounded-full"
            >
              {visitorData.totalVisits.toLocaleString()}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-600 to-transparent" />

        {/* Today's Visits */}
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-purple-400" />
          <span className="text-gray-400 text-sm font-medium">Today:</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={visitorData.todayVisits}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-white font-bold text-sm bg-purple-500/10 px-2 py-0.5 rounded-full"
            >
              {visitorData.todayVisits}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-600 to-transparent" />

        {/* Live Visitors */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Users className="w-4 h-4 text-green-400" />
            <motion.div
              className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full"
              animate={{ 
                scale: [1, 1.8, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          <span className="text-gray-400 text-sm font-medium">Live:</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={visitorData.liveVisitors}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-green-400 font-bold text-sm bg-green-500/10 px-2 py-0.5 rounded-full"
            >
              {visitorData.liveVisitors}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Tooltip on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-1.5 bg-gray-800 text-xs text-gray-300 rounded-lg whitespace-nowrap border border-gray-700 shadow-lg"
          >
            <span className="flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse mr-1"></span>
              Real-time visitor stats
            </span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800 border-r border-b border-gray-700"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default VisitorCounter;