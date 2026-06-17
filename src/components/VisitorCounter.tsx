import { useEffect, useState } from 'react';
import { Users, Eye } from 'lucide-react';

interface VisitorData {
  totalVisits: number;
  liveVisitors: number;
}

const VisitorCounter = () => {
  const [visitorData, setVisitorData] = useState<VisitorData>({
    totalVisits: 0,
    liveVisitors: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisitorData = async () => {
      try {
        // Fetch total visits and live visitors from your API
        const response = await fetch('/api/visitors');
        const data = await response.json();
        setVisitorData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching visitor data:', error);
        setLoading(false);
      }
    };

    fetchVisitorData();

    // Update live visitors every 30 seconds
    const interval = setInterval(fetchVisitorData, 30000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-4 text-sm text-gray-400 animate-pulse">
        <span>Loading stats...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-6 text-sm">
      <div className="flex items-center gap-2">
        <Eye className="w-4 h-4 text-blue-400" />
        <span className="text-gray-300">Total Visits:</span>
        <span className="text-white font-semibold">
          {visitorData.totalVisits.toLocaleString()}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Users className="w-4 h-4 text-green-400" />
        <span className="text-gray-300">Live:</span>
        <span className="text-green-400 font-semibold animate-pulse">
          {visitorData.liveVisitors}
        </span>
      </div>
    </div>
  );
};

export default VisitorCounter;