import Footer from "@/components/shared/Footer";
import PageHeader from "@/components/shared/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import ContactDetails from "@/components/contact/ContactDetails";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const Contact = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact" }
  ];

  return (
    <LayoutWrapper>
      <main>
        <PageHeader
          title="Contact Us"
          subtitle="We're here to help you and your pet have the best grooming experience possible."
          breadcrumbs={breadcrumbs}
        />
        
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactForm />
              <ContactDetails />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </LayoutWrapper>
  );
};

export default Contact;