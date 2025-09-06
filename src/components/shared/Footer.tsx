import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container-responsive spacing-section">
        <div className="grid-responsive max-w-5xl mx-auto">
          {/* Brand */}
          <div className="space-y-[var(--space-lg)] text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-[var(--space-sm)]">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold text-sm">PG</span>
              </div>
              <span className="text-responsive-xl font-bold text-foreground">PetGroomer</span>
            </div>
            <div className="text-block mx-auto sm:mx-0">
              <p className="text-muted-foreground text-sm">
                Professional pet grooming tools for happy, healthy pets.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-[var(--space-lg)] text-center sm:text-left">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-[var(--space-sm)]">
              <Link to="/" className="block text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-[var(--space-lg)] text-center sm:text-left">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-[var(--space-sm)]">
              <div className="flex items-center justify-center sm:justify-start space-x-[var(--space-sm)] text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm break-all">therealsadhin@gmail.com</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-[var(--space-sm)] text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+8801540318111</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-[var(--space-sm)] text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">Rangpur, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-[var(--space-lg)] text-center sm:text-left">
            <h3 className="font-semibold text-foreground">Follow Us</h3>
            <div className="flex justify-center sm:justify-start space-x-[var(--space-lg)]">
              <a href="https://facebook.com/petgroom" className="text-muted-foreground hover:text-primary transition-colors p-2" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/petgroom" className="text-muted-foreground hover:text-primary transition-colors p-2" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/petgroom" className="text-muted-foreground hover:text-primary transition-colors p-2" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-[var(--space-2xl)] pt-[var(--space-2xl)] text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 PetGroomer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;