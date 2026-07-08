import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, MapPin, X } from "lucide-react";

interface VisitorData {
  name: string;
  address: string;
}

const VisitorGreeting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visitorData, setVisitorData] = useState<VisitorData | null>(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if visitor data already exists in localStorage
    const savedData = localStorage.getItem("visitorData");
    if (savedData) {
      setVisitorData(JSON.parse(savedData));
    } else {
      // Show the modal if no data exists
      setIsOpen(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && address.trim()) {
      setIsSubmitting(true);
      
      // Save visitor data
      const data = { name: name.trim(), address: address.trim() };
      localStorage.setItem("visitorData", JSON.stringify(data));
      setVisitorData(data);
      
      // Close modal after animation
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitting(false);
      }, 500);
    }
  };

  const handleSkip = () => {
    // Save as anonymous visitor
    const data = { name: "Guest", address: "Unknown" };
    localStorage.setItem("visitorData", JSON.stringify(data));
    setVisitorData(data);
    setIsOpen(false);
  };

  return (
    <>
      {/* Show visitor name on navbar or somewhere visible */}
      {visitorData && (
        <div className="fixed top-20 right-4 z-40 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-sm text-white border border-white/20 hidden md:block">
          👋 Welcome, {visitorData.name} {visitorData.address !== "Unknown" && `from ${visitorData.address}`}
        </div>
      )}

      {/* Greeting Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm"
            onClick={() => {}} // Prevent closing on backdrop click
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass max-w-md w-full rounded-2xl p-6 md:p-8 relative border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-display font-bold text-gradient">
                  Welcome to My Portfolio! 👋
                </h2>
                <p className="text-sm text-muted-foreground mt-2">
                  I'd love to know who's visiting. Please introduce yourself!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-colors"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Location (City, Country)
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-colors"
                      placeholder="e.g., New York, USA"
                      required
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {isSubmitting ? "Saving..." : "Let's Go! 🚀"}
                  </button>
                  <button
                    type="button"
                    onClick={handleSkip}
                    className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition-colors text-sm"
                  >
                    Skip
                  </button>
                </div>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                This information is only stored locally in your browser
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VisitorGreeting;