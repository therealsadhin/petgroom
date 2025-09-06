import { useState, useEffect } from "react";
import { Clock, Truck } from "lucide-react";

const LimitedOfferBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset timer when it reaches zero
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <div className="gradient-accent text-white text-center py-4 px-6 rounded-lg shadow-elegant mb-8">
        <div className="flex items-center justify-center space-x-3 mb-2">
          <Truck className="w-5 h-5" />
          <span className="font-bold text-lg">LIMITED TIME OFFER</span>
          <Truck className="w-5 h-5" />
        </div>
        
        <p className="text-sm mb-3">🎉 FREE SHIPPING on all orders - Save $9.99!</p>
        
        <div className="flex items-center justify-center space-x-2">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">Ends in:</span>
          <div className="flex space-x-1 font-mono font-bold">
            <span className="bg-white/20 px-2 py-1 rounded text-sm">
              {timeLeft.hours.toString().padStart(2, '0')}
            </span>
            <span>:</span>
            <span className="bg-white/20 px-2 py-1 rounded text-sm">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </span>
            <span>:</span>
            <span className="bg-white/20 px-2 py-1 rounded text-sm">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedOfferBanner;