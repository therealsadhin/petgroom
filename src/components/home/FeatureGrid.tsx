import { Volume2, Battery, Shield, Zap, Heart, Award } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";

const FeatureGrid = () => {
  const features = [
    {
      icon: Volume2,
      title: "Ultra Quiet Motor",
      description: "Advanced motor technology operates at whisper-quiet levels, keeping your pet calm and relaxed."
    },
    {
      icon: Battery,
      title: "Long Battery Life",
      description: "USB rechargeable battery lasts up to 5 hours of continuous use. Perfect for multiple pets."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Built-in safety guard prevents over-grinding. LED indicator shows optimal grinding position."
    },
    {
      icon: Zap,
      title: "3-Speed Settings",
      description: "Adjustable speeds for different nail hardness and pet comfort levels. Suitable for all breeds."
    },
    {
      icon: Heart,
      title: "Stress-Free Grooming",
      description: "Gentle, gradual nail trimming reduces pet anxiety compared to traditional clippers."
    },
    {
      icon: Award,
      title: "Professional Quality",
      description: "Veterinarian recommended design with diamond bit grinding wheels for precision results."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionTitle
            title="Why Choose Our Pet Nail Grinder?"
            subtitle="Professional-grade features designed with your pet's comfort and safety in mind."
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-lg p-3 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;