import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Lock, Download, Trash2, Globe, MapPin, User } from "lucide-react";

interface VisitorData {
  id: string;
  name?: string;
  address?: string;
  city?: string;
  country?: string;
  region?: string;
  latitude?: number;
  longitude?: number;
  timezone?: string;
  visitDate: string;
  sessionId: string;
  userAgent: string;
  screenResolution?: string;
  language?: string;
  referrer?: string;
}

const VisitorTracker = () => {
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [allVisitors, setAllVisitors] = useState<VisitorData[]>([]);
  const [visitorCount, setVisitorCount] = useState(0);
  const [isCollecting, setIsCollecting] = useState(false);
  const [locationStatus, setLocationStatus] = useState("");

  // Change this to your own password
  const ADMIN_PASSWORD = "ADmin@1234";

  useEffect(() => {
    // Check if visitor already recorded in this session
    const sessionId = sessionStorage.getItem("visitorSessionId");
    
    if (!sessionId) {
      collectVisitorData();
    } else {
      // Load visitors for admin panel
      loadVisitors();
    }
  }, []);

  // Load visitors from localStorage
  const loadVisitors = () => {
    const stored = localStorage.getItem("visitorsData");
    if (stored) {
      try {
        const visitors = JSON.parse(stored);
        setAllVisitors(visitors);
        setVisitorCount(visitors.length);
      } catch (e) {
        console.error("Error loading visitors:", e);
      }
    }
  };

  // Save visitors to localStorage
  const saveVisitors = (visitors: VisitorData[]) => {
    localStorage.setItem("visitorsData", JSON.stringify(visitors));
    setAllVisitors(visitors);
    setVisitorCount(visitors.length);
  };

  // Get location from IP using free API
  const getLocationFromIP = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      return {
        city: data.city || 'Unknown',
        country: data.country_name || 'Unknown',
        region: data.region || 'Unknown',
        latitude: data.latitude || null,
        longitude: data.longitude || null,
        timezone: data.timezone || 'Unknown'
      };
    } catch (error) {
      console.error("Error getting location from IP:", error);
      return null;
    }
  };

  // Get precise location from browser Geolocation API
  const getPreciseLocation = () => {
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        resolve(null);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy
          });
        },
        (error) => {
          console.log("Geolocation error:", error.message);
          resolve(null);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    });
  };

  // Main function to collect visitor data
  const collectVisitorData = async () => {
    setIsCollecting(true);
    setLocationStatus("Collecting visitor information...");

    try {
      // Get IP-based location
      const ipLocation = await getLocationFromIP();
      
      // Try to get precise location
      const preciseLocation = await getPreciseLocation();

      // Build visitor data
      const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      // Get browser info
      const userAgent = navigator.userAgent;
      const screenResolution = `${window.screen.width}x${window.screen.height}`;
      const language = navigator.language || navigator.languages?.[0] || 'Unknown';
      const referrer = document.referrer || 'Direct';

      // Try to get city/country from IP or use default
      let city = 'Unknown';
      let country = 'Unknown';
      let region = 'Unknown';
      let latitude = null;
      let longitude = null;
      let timezone = 'Unknown';

      if (ipLocation) {
        city = ipLocation.city;
        country = ipLocation.country;
        region = ipLocation.region;
        latitude = ipLocation.latitude;
        longitude = ipLocation.longitude;
        timezone = ipLocation.timezone;
      }

      // Override with precise location if available
      if (preciseLocation && typeof preciseLocation === 'object') {
        // preciseLocation may be unknown; guard and cast safely
        const loc = preciseLocation as { latitude?: number | null; longitude?: number | null };
        latitude = loc.latitude ?? latitude;
        longitude = loc.longitude ?? longitude;
        // Try to get city from reverse geocoding if we have coordinates
        if (latitude && longitude) {
          try {
            const geoResponse = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            const geoData = await geoResponse.json();
            if (geoData.city) city = geoData.city;
            if (geoData.countryName) country = geoData.countryName;
            if (geoData.principalSubdivision) region = geoData.principalSubdivision;
          } catch (e) {
            console.log("Reverse geocoding error:", e);
          }
        }
      }

      // Get user's name (optional - could be from a cookie or we can leave blank)
      // We'll just use a placeholder or leave it empty
      const visitorName = localStorage.getItem("visitorName") || undefined;

      const visitor: VisitorData = {
        id: `visitor_${Date.now()}`,
        name: visitorName,
        address: city && country ? `${city}, ${country}` : undefined,
        city: city,
        country: country,
        region: region,
        latitude: latitude,
        longitude: longitude,
        timezone: timezone,
        visitDate: new Date().toISOString(),
        sessionId: sessionId,
        userAgent: userAgent,
        screenResolution: screenResolution,
        language: language,
        referrer: referrer
      };

      // Store in localStorage
      const existing = localStorage.getItem("visitorsData");
      let visitors: VisitorData[] = [];
      if (existing) {
        try {
          visitors = JSON.parse(existing);
        } catch (e) {
          console.error("Error parsing visitors:", e);
        }
      }

      visitors.push(visitor);
      localStorage.setItem("visitorsData", JSON.stringify(visitors));
      
      // Save session
      sessionStorage.setItem("visitorSessionId", sessionId);
      sessionStorage.setItem("visitorSubmitted", "true");

      setLocationStatus("Visitor information collected successfully!");
      
      // Load visitors if admin panel is open
      if (showAdminPanel) {
        loadVisitors();
      }

    } catch (error) {
      console.error("Error collecting visitor data:", error);
      setLocationStatus("Error collecting visitor information");
    } finally {
      setIsCollecting(false);
    }
  };

  // Admin panel functions
  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setShowPasswordModal(false);
      loadVisitors();
    } else {
      alert("Wrong password! Please try again.");
    }
  };

  const handleExportCSV = () => {
    if (allVisitors.length === 0) {
      alert("No visitor data to export!");
      return;
    }

    // Create CSV header
    const headers = ["Name", "City", "Country", "Region", "Latitude", "Longitude", "Visit Date", "Timezone", "Language", "Screen", "Referrer"];
    const rows = allVisitors.map(v => [
      v.name || 'Anonymous',
      v.city || 'Unknown',
      v.country || 'Unknown',
      v.region || 'Unknown',
      v.latitude || '',
      v.longitude || '',
      new Date(v.visitDate).toLocaleString(),
      v.timezone || 'Unknown',
      v.language || 'Unknown',
      v.screenResolution || 'Unknown',
      v.referrer || 'Direct'
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.join(","))
    ].join("\n");

    // Download CSV
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `visitors_${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleClearAll = () => {
    if (confirm("Are you sure you want to delete all visitor data? This cannot be undone!")) {
      localStorage.removeItem("visitorsData");
      setAllVisitors([]);
      setVisitorCount(0);
      alert("All visitor data has been cleared.");
    }
  };

  const handleDeleteVisitor = (id: string) => {
    if (confirm("Delete this visitor record?")) {
      const updated = allVisitors.filter(v => v.id !== id);
      saveVisitors(updated);
    }
  };

  // Auto-load visitors when admin panel opens
  useEffect(() => {
    if (isAuthenticated) {
      loadVisitors();
    }
  }, [isAuthenticated]);

  const [showPasswordModal, setShowPasswordModal] = useState(false);

  return (
    <>
      {/* Secret button to open admin panel - only visible to you */}
      <button
        onClick={() => setShowAdminPanel(true)}
        className="fixed bottom-20 left-4 z-40 bg-white/5 backdrop-blur-md rounded-full p-3 border border-white/10 hover:bg-white/10 transition-colors opacity-50 hover:opacity-100 group"
        title="Admin Panel (Only you)"
      >
        <Eye size={20} className="text-muted-foreground group-hover:text-purple-400 transition-colors" />
      </button>

      {/* Admin Panel */}
      <AnimatePresence>
        {showAdminPanel && (
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -20, y: 20 }}
            className="fixed bottom-24 left-4 z-50 glass rounded-2xl p-4 w-[400px] max-h-[70vh] overflow-y-auto border border-white/20 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-4 sticky top-0 bg-black/80 backdrop-blur-sm p-2 -m-2 rounded-lg">
              <div>
                <h3 className="font-display font-bold text-lg">👥 Admin Login</h3>
                <p className="text-xs text-muted-foreground">{visitorCount} total visitors</p>
              </div>
              <button
                onClick={() => {
                  setShowAdminPanel(false);
                  setIsAuthenticated(false);
                  setAdminPassword("");
                }}
                className="text-muted-foreground hover:text-foreground p-1 hover:bg-white/10 rounded"
              >
                ✕
              </button>
            </div>

            {!isAuthenticated ? (
              <form onSubmit={handleAdminLogin} className="space-y-3">
                <p className="text-sm text-muted-foreground">Enter admin password to view Admin Panel</p>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-colors"
                    autoFocus
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Unlock Panel 🔓
                </button>
              </form>
            ) : (
              <div className="space-y-3">
                {/* Action buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={handleExportCSV}
                    className="flex-1 flex items-center justify-center gap-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 px-3 py-2 rounded-lg text-sm transition-colors border border-green-500/20"
                  >
                    <Download size={16} />
                    Export CSV
                  </button>
                  <button
                    onClick={handleClearAll}
                    className="flex items-center justify-center gap-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 px-3 py-2 rounded-lg text-sm transition-colors border border-red-500/20"
                  >
                    <Trash2 size={16} />
                    Clear All
                  </button>
                  <button
                    onClick={collectVisitorData}
                    className="flex items-center justify-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 px-3 py-2 rounded-lg text-sm transition-colors border border-blue-500/20"
                  >
                    <Globe size={16} />
                    Collect
                  </button>
                </div>

                {/* Refresh button */}
                <button
                  onClick={loadVisitors}
                  className="w-full text-xs bg-white/5 px-3 py-1 rounded hover:bg-white/10 transition-colors"
                >
                  🔄 Refresh Data
                </button>

                {/* Visitors list */}
                <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
                  {allVisitors.length === 0 ? (
                    <div className="text-center text-muted-foreground py-8">
                      <User className="w-12 h-12 mx-auto mb-2 opacity-20" />
                      <p>No visitors yet</p>
                      <p className="text-xs">Visit your site from another browser to test</p>
                    </div>
                  ) : (
                    allVisitors.map((visitor, index) => (
                      <motion.div
                        key={visitor.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-purple-500/30 transition-all group"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            {/* Name */}
                            <div className="flex items-center gap-2">
                              <User size={14} className="text-purple-400" />
                              <span className="font-medium text-sm">
                                {visitor.name || 'Anonymous Visitor'}
                              </span>
                              <span className="text-[10px] text-muted-foreground">
                                #{index + 1}
                              </span>
                            </div>
                            
                            {/* Location */}
                            <div className="flex items-center gap-2 mt-1">
                              <MapPin size={12} className="text-pink-400" />
                              <span className="text-xs text-muted-foreground">
                                {visitor.city && visitor.country 
                                  ? `${visitor.city}, ${visitor.country}`
                                  : visitor.address || 'Unknown location'}
                              </span>
                            </div>
                            
                            {/* Coordinates if available */}
                            {visitor.latitude && visitor.longitude && (
                              <div className="text-[10px] text-muted-foreground mt-0.5">
                                📍 {visitor.latitude.toFixed(4)}, {visitor.longitude.toFixed(4)}
                              </div>
                            )}
                            
                            {/* Additional info */}
                            <div className="flex flex-wrap gap-2 mt-1">
                              <span className="text-[10px] px-2 py-0.5 bg-white/5 rounded-full">
                                {visitor.timezone || 'Unknown TZ'}
                              </span>
                              <span className="text-[10px] px-2 py-0.5 bg-white/5 rounded-full">
                                {visitor.language || 'Unknown Lang'}
                              </span>
                              <span className="text-[10px] px-2 py-0.5 bg-white/5 rounded-full">
                                {visitor.screenResolution || 'Unknown Screen'}
                              </span>
                            </div>
                            
                            {/* Visit time */}
                            <div className="text-[10px] text-muted-foreground mt-1">
                              🕐 {new Date(visitor.visitDate).toLocaleString()}
                            </div>
                            
                            {/* Referrer */}
                            {visitor.referrer && visitor.referrer !== 'Direct' && (
                              <div className="text-[10px] text-muted-foreground mt-0.5 truncate">
                                🔗 {visitor.referrer}
                              </div>
                            )}
                          </div>
                          <button
                            onClick={() => handleDeleteVisitor(visitor.id)}
                            className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 transition-all p-1"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>

                {/* Footer info */}
                <div className="text-[10px] text-muted-foreground text-center border-t border-white/10 pt-2 mt-2">
                  Data stored locally in your browser • {allVisitors.length} unique visitors
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VisitorTracker;