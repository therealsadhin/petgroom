import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, X } from "lucide-react";
import whiteGroomerImage from "@/assets/petgromer_images/petgromer nail grinder 06 white.jpeg";
import greenGroomerImage from "@/assets/petgromer_images/petgromer nail grinder deep green.jpg";

const CartSummary = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Elegant White");
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  
  const basePrice = 29.99;
  const originalPrice = 49.99;
  const savings = originalPrice - basePrice;
  const subtotal = basePrice * quantity;
  const shipping = subtotal >= 25 ? 0 : 6.99;
  const total = subtotal + shipping;

  const colors = [
    { name: "Elegant White", code: "#ffffff", image: whiteGroomerImage },
    { name: "Deep Green", code: "#0f5132", image: greenGroomerImage }
  ];

  const selectedColorData = colors.find(color => color.name === selectedColor) || colors[0];

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isImageModalOpen) {
        closeImageModal();
      }
    };

    if (isImageModalOpen) {
      document.addEventListener('keydown', handleEscKey);
      return () => {
        document.removeEventListener('keydown', handleEscKey);
      };
    }
  }, [isImageModalOpen]);

  const openImageModal = (imageSrc: string) => {
    setModalImageSrc(imageSrc);
    setIsImageModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setModalImageSrc("");
    // Restore body scroll
    document.body.style.overflow = 'unset';
    // Remove any touch event listeners for cleanup
    document.removeEventListener('touchend', closeImageModal);
  };

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-elegant border border-emerald-100 overflow-hidden">
      <h2 className="text-responsive-xl font-bold text-emerald-800 p-[var(--space-lg)] pb-[var(--space-md)]">Your Order</h2>
      
      {/* Product Item - Image left full height, Info right */}
      <div className="flex flex-col md:flex-row min-h-[400px]">
        {/* Product Image - Left side full height */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          <div className="relative w-full h-64 md:h-full bg-muted overflow-hidden">
            <img
              src={selectedColorData.image}
              alt={`Pet Nail Grinder - ${selectedColor}`}
              className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity touch-manipulation"
              onClick={() => openImageModal(selectedColorData.image)}
              onTouchEnd={(e) => {
                e.preventDefault();
                openImageModal(selectedColorData.image);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openImageModal(selectedColorData.image);
                }
              }}
              aria-label={`Click to view full size image of ${selectedColor} Pet Nail Grinder`}
              style={{ 
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            />
            {/* Click indicator for mobile */}
            <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 hover:opacity-100 sm:hidden pointer-events-none">
              <div className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium animate-pulse">
                Tap to view full image
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Info - Right side */}
        <div className="flex-1 p-[var(--space-lg)] flex flex-col justify-between">
          {/* Product Details */}
          <div className="space-y-[var(--space-fluid-md)]">
            <div>
              <h3 className="text-responsive-xl font-semibold text-emerald-800 mb-[var(--space-sm)]">Professional Pet Nail Grinder</h3>
              <div className="text-block">
                <p className="text-sm text-emerald-600">Keep your pet's nails perfectly trimmed with our quiet, safe, and efficient nail grinder.</p>
              </div>
            </div>
            
            {/* Color Selection */}
            <div>
              <span className="text-sm font-medium text-emerald-700 block mb-[var(--space-md)]">Color:</span>
              <div className="flex space-x-[var(--space-md)] mb-[var(--space-sm)] flex-wrap gap-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border-2 flex-shrink-0 ${
                      selectedColor === color.name ? 'border-emerald-600 ring-2 ring-emerald-200' : 'border-gray-300'
                    } transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-200`}
                    style={{ backgroundColor: color.code }}
                    title={color.name}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
              <p className="text-sm text-emerald-600">{selectedColor}</p>
            </div>
            
            {/* Quantity Selection */}
            <div>
              <span className="text-sm font-medium text-emerald-700 block mb-[var(--space-md)]">Quantity:</span>
              <div className="flex items-center space-x-[var(--space-sm)]">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 border-emerald-300 text-emerald-700 hover:bg-emerald-50 flex-shrink-0"
                  onClick={() => updateQuantity(quantity - 1)}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) => updateQuantity(parseInt(e.target.value) || 1)}
                  className="w-20 text-center h-10 border-emerald-300 focus:border-emerald-500"
                  min="1"
                  max="10"
                  aria-label="Quantity"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 border-emerald-300 text-emerald-700 hover:bg-emerald-50 flex-shrink-0"
                  onClick={() => updateQuantity(quantity + 1)}
                  disabled={quantity >= 10}
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="border-t border-emerald-200 pt-[var(--space-lg)] space-y-[var(--space-lg)] mt-[var(--space-lg)]">
            <div className="space-y-[var(--space-md)]">
              <div className="flex justify-between text-emerald-700">
                <span className="font-medium">Subtotal</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-emerald-700">
                <span className="font-medium">Shipping</span>
                <span className="font-bold">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-emerald-600 font-medium">
                <span>You Save</span>
                <span className="font-bold">-${(savings * quantity).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="border-t border-emerald-200 pt-[var(--space-lg)]">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <span className="text-responsive-xl font-bold text-emerald-800">Total</span>
                <div className="text-right">
                  <div className="text-sm text-gray-500 line-through">${(originalPrice * quantity).toFixed(2)}</div>
                  <div className="text-2xl font-bold text-emerald-800">${total.toFixed(2)}</div>
                </div>
              </div>
            </div>
            
            {/* Free Shipping Notice */}
            {shipping > 0 && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-[var(--space-md)] text-center mt-[var(--space-lg)]">
                <p className="text-sm text-emerald-800">
                  Add ${(25 - subtotal).toFixed(2)} more for <strong>FREE SHIPPING</strong>
                </p>
              </div>
            )}
            
            {/* Trust Badges */}
            <div className="flex items-center justify-center space-x-4 text-xs text-emerald-600 mt-[var(--space-lg)]">
              <span>🔒 Secure</span>
              <span>📦 Fast Ship</span>
              <span>↩️ Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeImageModal}
          onTouchEnd={(e) => {
            e.preventDefault();
            closeImageModal();
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Product image viewer"
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
              onClick={closeImageModal}
              onTouchEnd={(e) => {
                e.preventDefault();
                closeImageModal();
              }}
              className="absolute -top-12 right-0 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 touch-manipulation"
              aria-label="Close image viewer"
              style={{ touchAction: 'manipulation' }}
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Modal Image */}
            <img
              src={modalImageSrc}
              alt={`Full size view of ${selectedColor} Pet Nail Grinder`}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
              style={{
                maxHeight: 'calc(100vh - 100px)',
                touchAction: 'manipulation'
              }}
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 rounded-b-lg">
              <p className="text-white text-sm font-medium">
                Professional Pet Nail Grinder - {selectedColor}
              </p>
              <p className="text-white/80 text-xs mt-1">
                Tap outside or press ESC to close
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSummary;