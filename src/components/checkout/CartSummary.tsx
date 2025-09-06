import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2 } from "lucide-react";
import heroImage from "@/assets/pet-nail-grinder-hero.jpg";

const CartSummary = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Elegant White");
  
  const basePrice = 29.99;
  const originalPrice = 49.99;
  const savings = originalPrice - basePrice;
  const subtotal = basePrice * quantity;
  const shipping = subtotal >= 25 ? 0 : 6.99;
  const total = subtotal + shipping;

  const colors = [
    { name: "Elegant White", code: "#f8f9fa" },
    { name: "Emerald Green", code: "#10b981" },
    { name: "Ink Black", code: "#1f2937" }
  ];

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="bg-background rounded-2xl shadow-elegant p-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">Your Order</h2>
      
      {/* Product Item */}
      <div className="space-y-6">
        <div className="flex space-x-4">
          <div className="relative w-20 h-20 bg-muted rounded-lg overflow-hidden">
            <img
              src={heroImage}
              alt="Pet Nail Grinder"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1 space-y-2">
            <h3 className="font-semibold text-foreground">Professional Pet Nail Grinder</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Color:</span>
              <div className="flex space-x-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-6 h-6 rounded-full border-2 ${
                      selectedColor === color.name ? 'border-primary' : 'border-border'
                    }`}
                    style={{ backgroundColor: color.code }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-sm text-muted-foreground">Quantity:</span>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) => updateQuantity(parseInt(e.target.value) || 1)}
                  className="w-16 text-center h-8"
                  min="1"
                  max="10"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(quantity + 1)}
                  disabled={quantity >= 10}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-lg font-bold text-foreground">${subtotal.toFixed(2)}</div>
            <div className="text-sm text-muted-foreground line-through">${(originalPrice * quantity).toFixed(2)}</div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="border-t border-border pt-6 space-y-3">
          <div className="flex justify-between text-muted-foreground">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>Shipping</span>
            <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between text-accent">
            <span>You Save</span>
            <span>-${(savings * quantity).toFixed(2)}</span>
          </div>
          <div className="border-t border-border pt-3">
            <div className="flex justify-between text-xl font-bold text-foreground">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Free Shipping Notice */}
        {shipping > 0 && (
          <div className="bg-accent/10 rounded-lg p-4 text-center">
            <p className="text-sm text-foreground">
              Add ${(25 - subtotal).toFixed(2)} more for <strong>FREE SHIPPING</strong>
            </p>
          </div>
        )}

        {/* Trust Badges */}
        <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
          <span>🔒 Secure Checkout</span>
          <span>📦 Fast Shipping</span>
          <span>↩️ Easy Returns</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;