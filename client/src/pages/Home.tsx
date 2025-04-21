import Hero from "@/components/home/Hero";
import ServiceOverview from "@/components/home/ServiceOverview";
import WhyPartnerSection from "@/components/home/WhyPartnerSection";
import EligibilitySection from "@/components/home/EligibilitySection";
import ReferralForm from "@/components/forms/ReferralForm";

const Home = () => {
  return (
    <>
      <Hero />
      <ServiceOverview />
      <WhyPartnerSection />
      <EligibilitySection />
      
      <section id="referral" className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-800 mb-4">Make a Referral</h2>
              <p className="text-lg text-neutral-600">For social workers and case managers to refer clients to our Housing Stabilization Services.</p>
            </div>
            
            <ReferralForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
