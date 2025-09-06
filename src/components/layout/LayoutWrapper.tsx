import { useLocation } from "react-router-dom";
import { createContext, useContext } from "react";
import LimitedOfferBanner from "@/components/home/LimitedOfferBanner";
import Navbar from "@/components/shared/Navbar";

// Context to share banner visibility state
const BannerContext = createContext<{ showBanner: boolean }>({ showBanner: false });

export const useBannerContext = () => useContext(BannerContext);

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  const location = useLocation();
  const showBanner = location.pathname === '/';

  return (
    <BannerContext.Provider value={{ showBanner }}>
      <div className="min-h-screen">
        {showBanner && <LimitedOfferBanner />}
        <Navbar />
        {children}
      </div>
    </BannerContext.Provider>
  );
};

export default LayoutWrapper;