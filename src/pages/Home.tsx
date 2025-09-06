import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProductHighlight from "@/components/home/ProductHighlight";
import LifestyleSection from "@/components/home/LifestyleSection";
import FeatureGrid from "@/components/home/FeatureGrid";
import TestimonialSection from "@/components/home/TestimonialSection";
import FAQSection from "@/components/home/FAQSection";
import CallToAction from "@/components/home/CallToAction";
import LimitedOfferBanner from "@/components/home/LimitedOfferBanner";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <LimitedOfferBanner />
        <HeroSection />
        <ProductHighlight />
        <LifestyleSection />
        <FeatureGrid />
        <TestimonialSection />
        <FAQSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Home;