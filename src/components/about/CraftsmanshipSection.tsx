import { Microscope, Award, Shield, Zap } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import productDetail from "@/assets/product-detail.jpg";

const CraftsmanshipSection = () => {
  const qualityPoints = [
    {
      icon: Microscope,
      title: "Precision Engineering",
      description: "Each grinder undergoes 47 quality checks before shipping"
    },
    {
      icon: Award,
      title: "Premium Materials",
      description: "Medical-grade ABS plastic and diamond grinding wheels"
    },
    {
      icon: Shield,
      title: "Safety Tested",
      description: "Tested with 500+ pets to ensure maximum safety"
    },
    {
      icon: Zap,
      title: "Advanced Motor",
      description: "German-engineered motor for whisper-quiet operation"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionTitle
            title="Uncompromising Quality"
            subtitle="Every detail matters when it comes to your pet's comfort and safety."
            centered
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <img
              src={productDetail}
              alt="Close-up of pet nail grinder precision components"
              className="w-full h-auto rounded-2xl shadow-elegant"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="text-sm font-semibold text-foreground">Diamond Grade</div>
              <div className="text-xs text-muted-foreground">Grinding Wheel</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Built to Last, Designed for Comfort</h3>
              <p className="text-muted-foreground">
                Our nail grinder isn't just another pet accessory - it's a precision instrument crafted 
                with the same attention to detail as professional veterinary equipment.
              </p>
            </div>

            <div className="space-y-6">
              {qualityPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{point.title}</h4>
                    <p className="text-muted-foreground text-sm">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-background rounded-2xl shadow-soft p-8">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">&lt; 50dB</div>
              <div className="text-sm text-muted-foreground">Noise Level</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5 Hours</div>
              <div className="text-sm text-muted-foreground">Battery Life</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3 Speeds</div>
              <div className="text-sm text-muted-foreground">Adjustable</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">LED</div>
              <div className="text-sm text-muted-foreground">Safety Light</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;