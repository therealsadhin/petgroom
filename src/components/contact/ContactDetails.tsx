import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react";

const ContactDetails = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "therealsadhin@gmail.com",
      subDetails: "We respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+8801540318111",
      subDetails: "24/7 Support Available"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Rangpur, Bangladesh",
      subDetails: "Professional Pet Care Services"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "24/7 Customer Support",
      subDetails: "Always here to help you and your pet"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/petgroom", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/petgroom", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/petgroom", label: "Instagram" }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Information */}
      <div className="bg-background rounded-2xl shadow-soft p-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-primary/10 rounded-lg p-3">
                <info.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{info.title}</h3>
                <p className="text-muted-foreground">{info.details}</p>
                <p className="text-sm text-muted-foreground">{info.subDetails}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-background rounded-2xl shadow-soft p-8">
        <h3 className="text-xl font-bold text-foreground mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="bg-primary/10 hover:bg-primary/20 rounded-lg p-3 transition-colors"
            >
              <social.icon className="w-5 h-5 text-primary" />
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Join our community of pet lovers and get grooming tips, product updates, and exclusive offers!
        </p>
      </div>

      {/* FAQ Link */}
      <div className="bg-muted/50 rounded-2xl p-6 text-center">
        <h3 className="font-semibold text-foreground mb-2">Looking for quick answers?</h3>
        <p className="text-muted-foreground text-sm mb-4">
          Check out our FAQ section for instant answers to common questions.
        </p>
        <a
          href="/#faq"
          className="text-primary hover:underline font-medium"
        >
          View FAQ →
        </a>
      </div>
    </div>
  );
};

export default ContactDetails;