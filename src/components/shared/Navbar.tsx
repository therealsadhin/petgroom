import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useBannerContext } from "@/components/layout/LayoutWrapper";

const Navbar = () => {
  const { showBanner } = useBannerContext();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`bg-background/95 backdrop-blur-sm border-b border-border sticky z-50 ${showBanner ? 'top-[60px]' : 'top-0'}`}>
      <div className="container-responsive py-[var(--space-lg)]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-[var(--space-sm)] flex-shrink-0">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-primary-foreground font-bold text-sm">PG</span>
            </div>
            <span className="text-responsive-xl font-bold text-foreground whitespace-nowrap">PetGroomer</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-[var(--space-xl)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
            <Button variant="default" size="sm" className="px-[var(--space-lg)] py-[var(--space-sm)] min-w-0" asChild>
              <Link to="/checkout" className="flex items-center space-x-2">
                <ShoppingCart className="w-4 h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">Cart</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[280px]">
                <div className="flex flex-col space-y-[var(--space-lg)] mt-[var(--space-2xl)]">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="text-responsive-lg text-muted-foreground hover:text-foreground transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button variant="default" className="w-full mt-[var(--space-lg)] py-[var(--space-md)]" asChild>
                    <Link to="/checkout" className="flex items-center justify-center space-x-2">
                      <ShoppingCart className="w-4 h-4 flex-shrink-0" />
                      <span>Cart</span>
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;