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
    <div className="fixed top-0 left-0 right-0 z-[60] w-full" style={{'--banner-height': '60px'} as React.CSSProperties}>
      <div className="gradient-accent text-white text-center py-3 px-4 md:px-6 shadow-elegant min-h-[60px] flex items-center justify-center">
        <div className="flex items-center justify-center space-x-2 md:space-x-4 flex-wrap gap-y-1">
          <div className="flex items-center space-x-1 md:space-x-2">
            <Truck className="w-3 h-3 md:w-4 md:h-4" />
            <span className="font-bold text-xs md:text-sm lg:text-base">LIMITED TIME OFFER</span>
            <Truck className="w-3 h-3 md:w-4 md:h-4" />
          </div>
          
          <span className="text-xs md:text-sm hidden sm:block">🎉 FREE SHIPPING - Save $9.99!</span>
          <span className="text-xs sm:hidden">🎉 FREE SHIPPING!</span>
          
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span className="text-xs font-medium hidden md:inline">Ends:</span>
            <div className="flex space-x-1 font-mono font-bold text-xs">
              <span className="bg-white/20 px-1 py-0.5 rounded">
                {timeLeft.hours.toString().padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="bg-white/20 px-1 py-0.5 rounded">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="bg-white/20 px-1 py-0.5 rounded">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedOfferBanner;