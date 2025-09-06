import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Truck, Shield } from "lucide-react";

const CheckoutForm = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      alert("Order placed successfully! You'll receive a confirmation email shortly.");
    }, 2000);
  };

  return (
    <div className="space-y-[var(--space-2xl)]">
      {/* Shipping Information */}
      <div className="bg-white rounded-2xl shadow-soft p-[var(--space-lg)] lg:p-[var(--space-2xl)] border border-emerald-100">
        <div className="flex items-center space-x-[var(--space-sm)] mb-[var(--space-lg)]">
          <Truck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          <h2 className="text-responsive-xl font-bold text-emerald-800">Shipping Information</h2>
        </div>
        
        <div className="grid-responsive">
          <div className="space-y-[var(--space-sm)]">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="John" required className="w-full" />
          </div>
          <div className="space-y-[var(--space-sm)]">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Doe" required className="w-full" />
          </div>
          <div className="space-y-[var(--space-sm)] sm:col-span-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" required className="w-full" />
          </div>
          <div className="space-y-[var(--space-sm)] sm:col-span-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="123 Main Street" required className="w-full" />
          </div>
          <div className="space-y-[var(--space-sm)]">
            <Label htmlFor="city">City</Label>
            <Input id="city" placeholder="New York" required className="w-full" />
          </div>
          <div className="space-y-[var(--space-sm)]">
            <Label htmlFor="state">State</Label>
            <Input id="state" placeholder="NY" required className="w-full" />
          </div>
          <div className="space-y-[var(--space-sm)]">
            <Label htmlFor="zip">ZIP Code</Label>
            <Input id="zip" placeholder="10001" required className="w-full" />
          </div>
          <div className="space-y-[var(--space-sm)]">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required className="w-full" />
          </div>
        </div>
      </div>

      {/* Security Notice */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-[var(--space-lg)] flex items-start space-x-[var(--space-md)]">
        <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
        <div className="text-block">
          <div className="text-sm text-emerald-700">
            Your information is encrypted and secure. We never store your personal details.
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <Button
        onClick={handleSubmit}
        size="lg"
        disabled={isProcessing}
        className="w-full text-responsive-lg py-[var(--space-lg)] bg-emerald-600 hover:bg-emerald-700 text-white min-w-0"
      >
        {isProcessing ? "Processing..." : "Place Order - $29.99"}
      </Button>
    </div>
  );
};

export default CheckoutForm;