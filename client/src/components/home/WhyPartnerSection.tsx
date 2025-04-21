import { ShieldCheck, HeartHandshake, BookOpen, Handshake } from "lucide-react";

const WhyPartnerSection = () => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Why Partner with Lakeside Health?
          </h2>
          <p className="text-lg text-neutral-600">
            We collaborate with social workers and referral partners to provide comprehensive Housing Stabilization Services that meet the unique needs of your clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-5">
              <Handshake className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-3">Experienced Team</h3>
            <p className="text-neutral-600">Our housing specialists have years of experience helping clients with diverse needs find and maintain stable housing.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-5">
              <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-3">Certified Provider</h3>
            <p className="text-neutral-600">We are a DHS-enrolled provider of Housing Stabilization Services with all required certifications and training.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-5">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-3">Person-Centered</h3>
            <p className="text-neutral-600">Our approach focuses on each client's unique needs, preferences, strengths, and housing goals.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-5">
              <HeartHandshake className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-3">Seamless Collaboration</h3>
            <p className="text-neutral-600">We work closely with referral sources to ensure smooth transitions and ongoing communication regarding your clients.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;