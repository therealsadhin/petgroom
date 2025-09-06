import { Star, Quote } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "California",
      rating: 5,
      text: "This nail grinder is a game-changer! My anxious rescue dog actually stays calm during nail trims now. The quiet motor makes all the difference.",
      petType: "Golden Retriever"
    },
    {
      name: "Mike Chen",
      location: "Texas",
      rating: 5,
      text: "I was skeptical at first, but this really works. Much safer than clippers and gives a smoother finish. My cat doesn't run away anymore!",
      petType: "Maine Coon Cat"
    },
    {
      name: "Emily Rodriguez",
      location: "Florida",
      rating: 5,
      text: "Professional groomer quality at home. The LED light helps me see exactly where I'm trimming. Worth every penny for the peace of mind.",
      petType: "French Bulldog"
    },
    {
      name: "David Kim",
      location: "New York",
      rating: 5,
      text: "Amazing product! The battery lasts forever and it's so easy to use. My senior dog with arthritis is much more comfortable now.",
      petType: "Labrador Mix"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionTitle
            title="What Pet Parents Are Saying"
            subtitle="Join thousands of satisfied customers who've transformed their pet grooming routine."
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 border border-border"
            >
              <div className="space-y-4">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/20" />

                {/* Rating */}
                <div className="flex text-yellow-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-border pt-4">
                  <div className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.location} • {testimonial.petType}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">
              4.9/5 from 2,000+ verified reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;