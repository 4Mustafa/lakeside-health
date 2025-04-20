import Hero from "@/components/home/Hero";
import ServiceOverview from "@/components/home/ServiceOverview";
import AboutSection from "@/components/home/AboutSection";
import ServicesDetailSection from "@/components/services/ServicesDetailSection";
import ReferralForm from "@/components/forms/ReferralForm";

const Home = () => {
  return (
    <>
      <Hero />
      <ServiceOverview />
      <AboutSection />
      <ServicesDetailSection />
      
      <section id="referral" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-800 mb-4">Make a Referral</h2>
              <p className="text-lg text-neutral-600">For healthcare providers to refer patients to our services.</p>
            </div>
            
            <ReferralForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
