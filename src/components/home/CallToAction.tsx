import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Truck, Clock, ShoppingCart, Check } from "lucide-react";

const CallToAction = () => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    
    // Simulate adding to cart
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsAddingToCart(false);
    setAddedToCart(true);
    
    // Reset after 2 seconds
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <section className="spacing-section gradient-hero">
      <div className="container-responsive">
        <div className="max-w-4xl mx-auto text-center space-y-[var(--space-fluid-lg)]">
          <h2 className="font-bold text-white leading-tight">
            Ready to Transform Your Pet's Grooming Experience?
          </h2>
          <div className="text-block mx-auto">
            <p className="text-responsive-xl text-white/90">
              Join thousands of pet parents who've already made the switch to stress-free, 
              professional nail care at home.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid-responsive max-w-3xl mx-auto py-[var(--space-fluid-md)]">
            <div className="flex flex-col items-center text-white space-y-[var(--space-sm)]">
              <Truck className="w-6 h-6 lg:w-8 lg:h-8 flex-shrink-0" />
              <span className="font-semibold text-sm lg:text-base">Free Shipping</span>
              <span className="text-xs lg:text-sm text-white/80 text-center">On all orders over $25</span>
            </div>
            <div className="flex flex-col items-center text-white space-y-[var(--space-sm)]">
              <Shield className="w-6 h-6 lg:w-8 lg:h-8 flex-shrink-0" />
              <span className="font-semibold text-sm lg:text-base">30-Day Guarantee</span>
              <span className="text-xs lg:text-sm text-white/80 text-center">Risk-free purchase</span>
            </div>
            <div className="flex flex-col items-center text-white space-y-[var(--space-sm)]">
              <Clock className="w-6 h-6 lg:w-8 lg:h-8 flex-shrink-0" />
              <span className="font-semibold text-sm lg:text-base">Fast Delivery</span>
              <span className="text-xs lg:text-sm text-white/80 text-center">Ships within 24 hours</span>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-[var(--space-fluid-lg)] space-y-[var(--space-fluid-md)]">
            <div className="space-y-[var(--space-sm)]">
              <div className="text-white/80 text-responsive-lg line-through">$49.99</div>
              <div className="text-4xl lg:text-5xl font-bold text-white">$29.99</div>
              <div className="text-sm lg:text-base text-white/90">Limited Time Offer - Save 40%</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-[var(--space-lg)] justify-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-responsive-lg px-[var(--space-xl)] py-[var(--space-lg)] min-w-0" 
                asChild
              >
                <Link to="/checkout">
                  Order Now
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-white border-white/20 hover:bg-white/10 text-responsive-lg px-[var(--space-xl)] py-[var(--space-lg)] relative overflow-hidden min-w-0"
                onClick={handleAddToCart}
                disabled={isAddingToCart}
              >
                <div className="flex items-center space-x-2">
                  {isAddingToCart ? (
                    <>
                      <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full flex-shrink-0"></div>
                      <span>Adding...</span>
                    </>
                  ) : addedToCart ? (
                    <>
                      <Check className="w-4 h-4 flex-shrink-0" />
                      <span>Added!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4 flex-shrink-0" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </div>
              </Button>
            </div>

            <div className="text-xs lg:text-sm text-white/80">
              ⚡ Only 127 left in stock • 🔥 2,847 sold this month
            </div>
          </div>

          {/* Final Trust Statement */}
          <div className="text-block mx-auto">
            <p className="text-white/80 text-xs lg:text-sm">
              Over 50,000 happy pets and their families can't be wrong. 
              Start your stress-free grooming journey today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;