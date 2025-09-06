import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Truck, Shield } from "lucide-react";

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
    <div className="space-y-8">
      {/* Shipping Information */}
      <div className="bg-background rounded-2xl shadow-soft p-8">
        <div className="flex items-center space-x-2 mb-6">
          <Truck className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Shipping Information</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="John" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Doe" required />
          </div>
          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" required />
          </div>
          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="123 Main Street" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" placeholder="New York" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input id="state" placeholder="NY" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="zip">ZIP Code</Label>
            <Input id="zip" placeholder="10001" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required />
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div className="bg-background rounded-2xl shadow-soft p-8">
        <div className="flex items-center space-x-2 mb-6">
          <CreditCard className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Payment Information</h2>
        </div>

        <Tabs defaultValue="card" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="card">Credit Card</TabsTrigger>
            <TabsTrigger value="paypal">PayPal</TabsTrigger>
          </TabsList>
          
          <TabsContent value="card" className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cardName">Cardholder Name</Label>
              <Input id="cardName" placeholder="John Doe" required />
            </div>
          </TabsContent>
          
          <TabsContent value="paypal" className="mt-6">
            <div className="text-center py-8">
              <div className="text-blue-600 text-2xl font-bold mb-4">PayPal</div>
              <p className="text-muted-foreground mb-6">
                You'll be redirected to PayPal to complete your purchase securely.
              </p>
              <Button variant="outline" className="bg-blue-50 border-blue-200 text-blue-600">
                Continue with PayPal
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Security Notice */}
      <div className="bg-muted/50 rounded-lg p-4 flex items-center space-x-3">
        <Shield className="w-5 h-5 text-primary" />
        <div className="text-sm text-muted-foreground">
          Your payment information is encrypted and secure. We never store your card details.
        </div>
      </div>

      {/* Place Order Button */}
      <Button
        onClick={handleSubmit}
        variant="hero"
        size="lg"
        disabled={isProcessing}
        className="w-full text-lg py-4"
      >
        {isProcessing ? "Processing..." : "Place Order - $29.99"}
      </Button>
    </div>
  );
};

export default CheckoutForm;