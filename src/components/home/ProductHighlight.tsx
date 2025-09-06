import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import productDetail from "@/assets/product-detail.jpg";

const ProductHighlight = () => {
  const benefits = [
    "High-speed precision grinding for perfect nail length",
    "Three adjustable speeds for different nail types",
    "Whisper-quiet motor won't scare your pets",
    "Ergonomic design for comfortable handling",
    "LED indicator for easy visibility",
    "Safe for dogs and cats of all sizes"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={productDetail}
              alt="Pet Nail Grinder Detail View"
              className="w-full h-auto rounded-2xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <SectionTitle
              title="Why Pet Owners Love Our Nail Grinder"
              subtitle="Professional grooming results at home with our advanced pet nail care technology."
            />

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold text-foreground">What's Included:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Professional Pet Nail Grinder</li>
                <li>• 3 Grinding Wheels (Different Sizes)</li>
                <li>• USB Charging Cable</li>
                <li>• User Manual & Safety Guide</li>
              </ul>
            </div>

            <Button variant="accent" size="lg" className="w-full sm:w-auto">
              Get Yours Today - $29.99
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;