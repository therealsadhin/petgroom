import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "@/components/shared/SectionTitle";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is this nail grinder safe for all dog and cat breeds?",
      answer: "Yes! Our nail grinder is designed to be safe for dogs and cats of all sizes and breeds. The adjustable speed settings and built-in safety guard ensure you can never over-grind your pet's nails."
    },
    {
      question: "How quiet is the motor? Will it scare my anxious pet?",
      answer: "Our advanced motor operates at whisper-quiet levels (less than 50dB). Many customers report their previously anxious pets staying calm during grooming sessions. The gradual grinding process is much less stressful than traditional clippers."
    },
    {
      question: "How long does the battery last?",
      answer: "The rechargeable battery provides up to 5 hours of continuous use on a full charge. It charges completely in just 2 hours via the included USB cable, making it perfect for multiple pets or professional use."
    },
    {
      question: "What's included in the package?",
      answer: "You'll receive the nail grinder, 3 different sized grinding wheels, USB charging cable, and a comprehensive user manual with safety guidelines and tips for best results."
    },
    {
      question: "How do I know I'm not cutting the nail too short?",
      answer: "The grinder includes an LED light for clear visibility of the nail quick (pink area). The gradual grinding process makes it virtually impossible to cut too short, unlike traditional clippers. Always grind in short sessions."
    },
    {
      question: "What if my pet doesn't like it? Do you offer returns?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied, return the product for a full refund. We also provide training tips and customer support to help you and your pet adjust."
    },
    {
      question: "How often should I trim my pet's nails?",
      answer: "Most pets need nail trims every 2-3 weeks, but this varies by activity level and breed. Active outdoor pets may need less frequent trims, while indoor pets typically need more regular maintenance."
    },
    {
      question: "Can I use this on very thick or black nails?",
      answer: "Absolutely! The three speed settings and professional-grade diamond grinding wheels can handle thick nails. For black nails where the quick is harder to see, work gradually and use the LED light for guidance."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <SectionTitle
              title="Frequently Asked Questions"
              subtitle="Get answers to common questions about our pet nail grinder."
              centered
            />
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-lg shadow-soft border border-border"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@petgroomer.com"
                className="text-primary hover:underline font-medium"
              >
                Email Support
              </a>
              <a
                href="tel:+15551234567"
                className="text-primary hover:underline font-medium"
              >
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;