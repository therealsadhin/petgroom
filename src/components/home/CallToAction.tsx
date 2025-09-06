import { Button } from "@/components/ui/button";
import { Shield, Truck, Clock } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to Transform Your Pet's Grooming Experience?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of pet parents who've already made the switch to stress-free, 
            professional nail care at home.
          </p>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            <div className="flex flex-col items-center text-white space-y-2">
              <Truck className="w-8 h-8" />
              <span className="font-semibold">Free Shipping</span>
              <span className="text-sm text-white/80">On all orders over $25</span>
            </div>
            <div className="flex flex-col items-center text-white space-y-2">
              <Shield className="w-8 h-8" />
              <span className="font-semibold">30-Day Guarantee</span>
              <span className="text-sm text-white/80">Risk-free purchase</span>
            </div>
            <div className="flex flex-col items-center text-white space-y-2">
              <Clock className="w-8 h-8" />
              <span className="font-semibold">Fast Delivery</span>
              <span className="text-sm text-white/80">Ships within 24 hours</span>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
            <div className="space-y-2">
              <div className="text-white/80 text-lg line-through">$49.99</div>
              <div className="text-4xl font-bold text-white">$29.99</div>
              <div className="text-white/90">Limited Time Offer - Save 40%</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                Order Now
              </Button>
              <Button variant="ghost" size="lg" className="text-white border-white/20 hover:bg-white/10 text-lg px-8 py-4">
                Add to Cart
              </Button>
            </div>

            <div className="text-sm text-white/80">
              ⚡ Only 127 left in stock • 🔥 2,847 sold this month
            </div>
          </div>

          {/* Final Trust Statement */}
          <p className="text-white/80 text-sm">
            Over 50,000 happy pets and their families can't be wrong. 
            Start your stress-free grooming journey today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;