import Footer from "@/components/shared/Footer";
import PageHeader from "@/components/shared/PageHeader";
import BrandStory from "@/components/about/BrandStory";
import CraftsmanshipSection from "@/components/about/CraftsmanshipSection";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const About = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About" }
  ];

  return (
    <LayoutWrapper>
      <main>
        <PageHeader
          title="About PetGroomer"
          subtitle="Dedicated to making pet grooming stress-free for both pets and their loving families."
          breadcrumbs={breadcrumbs}
        />
        <BrandStory />
        <CraftsmanshipSection />
      </main>
      <Footer />
    </LayoutWrapper>
  );
};

export default About;