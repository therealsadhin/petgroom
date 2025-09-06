import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHeader from "@/components/shared/PageHeader";
import BrandStory from "@/components/about/BrandStory";
import CraftsmanshipSection from "@/components/about/CraftsmanshipSection";

const About = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
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
    </div>
  );
};

export default About;