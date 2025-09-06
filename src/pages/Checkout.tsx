import Footer from "@/components/shared/Footer";
import PageHeader from "@/components/shared/PageHeader";
import CartSummary from "@/components/checkout/CartSummary";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const Checkout = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Checkout" }
  ];

  return (
    <LayoutWrapper>
      <main>
        <PageHeader
          title="Checkout"
          breadcrumbs={breadcrumbs}
        />
        
        <section className="spacing-section bg-gradient-to-br from-emerald-50 to-white">
          <div className="container-responsive">
            {/* Cart Summary - Full width */}
            <div className="mb-[var(--space-2xl)]">
              <CartSummary />
            </div>
            {/* Checkout Form - Full width */}
            <div>
              <CheckoutForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </LayoutWrapper>
  );
};

export default Checkout;