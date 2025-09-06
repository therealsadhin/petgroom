import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/shared/SectionTitle";
import productDetail from "@/assets/petgromer_images/petgromer nail grinder 03.jpeg";

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
    <section className="spacing-section bg-background">
      <div className="container-responsive">
        <div className="grid-two-col items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={productDetail}
                alt="Pet Nail Grinder Detail View"
                className="w-full rounded-xl lg:rounded-2xl shadow-elegant"
                style={{ aspectRatio: '4/3', objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl lg:rounded-2xl" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-[var(--space-fluid-md)]">
            <SectionTitle
              title="Why Pet Owners Love Our Nail Grinder"
              subtitle="Professional grooming results at home with our advanced pet nail care technology."
            />

            <div className="space-y-[var(--space-lg)]">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-[var(--space-md)]">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 lg:w-4 lg:h-4 text-primary" />
                  </div>
                  <span className="text-sm lg:text-base text-foreground leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 rounded-lg p-[var(--space-lg)] space-y-[var(--space-lg)]">
              <h3 className="text-responsive-xl font-semibold text-foreground">What's Included:</h3>
              <ul className="space-y-[var(--space-sm)] text-sm lg:text-base text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>Professional Pet Nail Grinder</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>3 Grinding Wheels (Different Sizes)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>USB Charging Cable</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary flex-shrink-0">•</span>
                  <span>User Manual & Safety Guide</span>
                </li>
              </ul>
            </div>

            <Button 
              variant="accent" 
              size="lg" 
              className="w-full sm:w-auto text-responsive-lg px-[var(--space-xl)] py-[var(--space-lg)] min-w-0" 
              asChild
            >
              <Link to="/checkout">
                Get Yours Today - $29.99
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;