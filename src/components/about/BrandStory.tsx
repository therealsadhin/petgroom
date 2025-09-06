import SectionTitle from "@/components/shared/SectionTitle";
import ImageWithCaption from "@/components/shared/ImageWithCaption";
import lifestyleGrooming from "@/assets/lifestyle-grooming.jpg";

const BrandStory = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <SectionTitle
              title="Our Mission: Stress-Free Pet Care"
              subtitle="We believe every pet deserves gentle, professional grooming care in the comfort of their own home."
            />

            <div className="space-y-6 text-muted-foreground">
              <p>
                Founded in 2020 by veterinarian Dr. Sarah Mitchell and pet grooming expert Mike Johnson, 
                PetGroomer was born from a simple observation: traditional nail clippers caused unnecessary 
                stress for both pets and their owners.
              </p>
              
              <p>
                After seeing countless anxious pets in the clinic, Dr. Mitchell knew there had to be a better way. 
                Working with engineering teams and testing with over 500 pets, we developed the quietest, safest, 
                and most effective nail grinder on the market.
              </p>

              <p>
                Today, we're proud to serve over 50,000 pet families worldwide, transforming the nail care 
                experience from a dreaded chore into a bonding moment between pets and their humans.
              </p>
            </div>

            <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
              <p className="text-foreground font-medium italic">
                "Every pet deserves to feel safe and comfortable during grooming. That's not just our slogan - 
                it's our promise to you and your beloved companion."
              </p>
              <div className="mt-3 text-sm text-muted-foreground">
                - Dr. Sarah Mitchell, Co-Founder & Veterinarian
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <ImageWithCaption
              src={lifestyleGrooming}
              alt="Professional pet grooming with care and comfort"
              caption="Our gentle approach puts pets at ease during grooming sessions"
              className="shadow-elegant"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;