import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProductHighlight from "@/components/home/ProductHighlight";
import HowToUseSection from "@/components/home/HowToUseSection";
import LifestyleSection from "@/components/home/LifestyleSection";
import FeatureGrid from "@/components/home/FeatureGrid";
import TestimonialSection from "@/components/home/TestimonialSection";
import FAQSection from "@/components/home/FAQSection";
import CallToAction from "@/components/home/CallToAction";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const Home = () => {
  return (
    <LayoutWrapper>
      <main>
        <HeroSection />
        <ProductHighlight />
        <HowToUseSection />
        <LifestyleSection />
        <FeatureGrid />
        <TestimonialSection />
        <FAQSection />
        <CallToAction />
      </main>
      <Footer />
    </LayoutWrapper>
  );
};

export default Home;