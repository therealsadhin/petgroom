import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHeader from "@/components/shared/PageHeader";
import CartSummary from "@/components/checkout/CartSummary";
import CheckoutForm from "@/components/checkout/CheckoutForm";

const Checkout = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Checkout" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHeader
          title="Checkout"
          breadcrumbs={breadcrumbs}
        />
        
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <CheckoutForm />
              <div className="lg:order-first">
                <CartSummary />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;