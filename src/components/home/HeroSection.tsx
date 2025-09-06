import { Button } from "@/components/ui/button";
import { Star, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/pet-nail-grinder-hero.jpg";
import { useCart } from "@/context/CartContext";

const HeroSection = () => {
  const { addToCart } = useCart();
  return (
    <section className="h-screen gradient-subtle flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-muted-foreground">4.9/5 from 2,000+ reviews</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Professional Pet Nail Grinder
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Keep your pet's nails perfectly trimmed with our quiet, safe, and efficient nail grinder. 
                Suitable for dogs and cats of all sizes.
              </p>
            </div>

            {/* Key Features */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Safe & Gentle</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Quick & Easy</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-5 h-5 text-primary text-center">🔇</span>
                <span className="text-sm font-medium">Ultra Quiet</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={addToCart}>
                Order Now - $29.99
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>✓ Free Shipping</span>
              <span>✓ 30-Day Guarantee</span>
              <span>✓ 24/7 Support</span>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-elegant p-8 animate-float">
              <img
                src={heroImage}
                alt="Professional Pet Nail Grinder"
                className="w-full h-auto"
              />
              <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                Best Seller
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;