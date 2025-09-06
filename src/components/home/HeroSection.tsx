import { Button } from "@/components/ui/button";
import { Star, Shield, Zap, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useBannerContext } from "@/components/layout/LayoutWrapper";

// Import all carousel images
import image1 from "@/assets/petgromer_images/petgromer nail grinder.jpeg";
import image2 from "@/assets/petgromer_images/petgromer nail grinder 03.jpeg";
import image3 from "@/assets/petgromer_images/petgromer nail grinder 04 deep green.jpeg";
import image4 from "@/assets/petgromer_images/petgromer nail grinder 06 white.jpeg";
import image5 from "@/assets/petgromer_images/petgromer nail grinder deep green.jpg";
import image6 from "@/assets/petgromer_images/petgromer nail grindre02 deep green.jpeg";
import image7 from "@/assets/petgromer_images/pet gromer nail grinder 05.jpeg";

const HeroSection = () => {
  const { showBanner } = useBannerContext();
  
  // Carousel images array
  const carouselImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  
  // Auto-swipe functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds
    
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
      return () => {
        document.removeEventListener('keydown', handleEscKey);
      };
    }
  }, [isModalOpen]);

  const openModal = (imageIndex: number) => {
    setModalImageIndex(imageIndex);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };
  
  return (
    <section className={`min-h-screen gradient-subtle flex items-center ${showBanner ? 'pt-[140px] pb-[var(--space-lg)]' : 'pt-[80px] pb-[var(--space-lg)]'}`}>
      <div className="container-responsive w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-fluid-lg)] items-center">
          {/* Content - Left on desktop, second on mobile */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-[var(--space-fluid-md)] px-[var(--space-sm)] sm:px-0">
            <div className="space-y-[var(--space-lg)]">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-muted-foreground">4.9/5 from 2,000+ reviews</span>
              </div>
              <h1 className="font-bold text-foreground leading-tight">
                Professional Pet Nail Grinder
              </h1>
              <div className="text-block mx-auto lg:mx-0">
                <p className="text-responsive-lg text-muted-foreground">
                  Keep your pet's nails perfectly trimmed with our quiet, safe, and efficient nail grinder. 
                  Suitable for dogs and cats of all sizes.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-[var(--space-lg)]">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0" />
                <span className="text-sm lg:text-base font-medium">Safe & Gentle</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0" />
                <span className="text-sm lg:text-base font-medium">Quick & Easy</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 lg:w-5 lg:h-5 text-primary text-center text-sm flex-shrink-0">🔇</span>
                <span className="text-sm lg:text-base font-medium">Ultra Quiet</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-[var(--space-md)] justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-responsive-lg px-[var(--space-xl)] py-[var(--space-lg)] min-w-0" asChild>
                <Link to="/checkout">
                  Order Now - $29.99
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-responsive-lg px-[var(--space-xl)] py-[var(--space-lg)] min-w-0">
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-[var(--space-lg)] text-sm text-muted-foreground">
              <span className="flex items-center space-x-1">
                <span>✓</span>
                <span>Free Shipping</span>
              </span>
              <span className="flex items-center space-x-1">
                <span>✓</span>
                <span>30-Day Guarantee</span>
              </span>
              <span className="flex items-center space-x-1">
                <span>✓</span>
                <span>24/7 Support</span>
              </span>
            </div>
          </div>

          {/* Product Image Carousel - Right on desktop, first on mobile */}
          <div className="order-1 lg:order-2 w-full px-[var(--space-sm)] sm:px-0">
            <div className="relative bg-white rounded-2xl shadow-elegant p-[var(--space-md)] sm:p-[var(--space-lg)] animate-float max-w-md mx-auto lg:max-w-none">
              {/* Carousel Images */}
              <div className="relative w-full overflow-hidden rounded-xl cursor-pointer" onClick={() => openModal(currentImageIndex)}>
                {carouselImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Professional Pet Nail Grinder - Image ${index + 1}`}
                    className={`w-full h-auto transition-opacity duration-500 hover:opacity-90 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                    }`}
                    style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      openModal(currentImageIndex);
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openModal(currentImageIndex);
                      }
                    }}
                    aria-label={`Click to view full size carousel starting at image ${currentImageIndex + 1}`}
                  />
                ))}
                
                {/* Click indicator overlay */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 hover:opacity-100 pointer-events-none">
                  <div className="bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                    Click to view gallery
                  </div>
                </div>
              </div>
              
              {/* Best Seller Badge */}
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 bg-accent text-white px-[var(--space-sm)] sm:px-[var(--space-md)] py-[var(--space-xs)] sm:py-[var(--space-sm)] rounded-full font-bold text-xs lg:text-sm shadow-lg">
                Best Seller
              </div>
              
              {/* Carousel Dots */}
              <div className="flex justify-center space-x-2 mt-[var(--space-md)] sm:mt-[var(--space-lg)]">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 touch-manipulation ${
                      index === currentImageIndex 
                        ? 'bg-primary w-6' 
                        : 'bg-gray-300 hover:bg-gray-400 w-2'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                    style={{ touchAction: 'manipulation' }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeModal}
          onTouchEnd={(e) => {
            e.preventDefault();
            closeModal();
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Product image gallery"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999
          }}
        >
          <div className="relative max-w-4xl max-h-full w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              onTouchEnd={(e) => {
                e.preventDefault();
                closeModal();
              }}
              className="absolute -top-12 right-0 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 touch-manipulation"
              aria-label="Close gallery"
              style={{ touchAction: 'manipulation' }}
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Modal Image */}
            <img
              src={carouselImages[modalImageIndex]}
              alt={`Full size view of Professional Pet Nail Grinder - Image ${modalImageIndex + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
              style={{
                maxHeight: 'calc(100vh - 150px)',
                touchAction: 'manipulation'
              }}
            />
            
            {/* Modal Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-6">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalImageIndex(index);
                  }}
                  onTouchEnd={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setModalImageIndex(index);
                  }}
                  className={`h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 touch-manipulation ${
                    index === modalImageIndex 
                      ? 'bg-white w-8' 
                      : 'bg-white/50 hover:bg-white/75 w-3'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                  style={{ touchAction: 'manipulation' }}
                />
              ))}
            </div>
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 rounded-b-lg">
              <p className="text-white text-sm font-medium">
                Professional Pet Nail Grinder - Image {modalImageIndex + 1} of {carouselImages.length}
              </p>
              <p className="text-white/80 text-xs mt-1">
                Click dots to navigate • Tap outside or press ESC to close
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;