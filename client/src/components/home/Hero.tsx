import { Link } from "wouter";

const Hero = () => {
  return (
    <section id="home" className="bg-white text-primary py-14 md:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-primary">
              Connecting Your Clients to Housing Stability Solutions
            </h1>
            <p className="text-lg text-neutral-700 mb-8">
              Lakeside Health provides comprehensive Housing Stabilization Services for vulnerable Minnesotans. As a trusted MA-billable provider, we partner with social workers and case managers to support clients facing housing instability.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/services">
                <div className="bg-white border border-primary text-primary hover:text-[#4ECDC4] hover:bg-primary hover:border-transparent font-semibold px-8 py-3 rounded-md transition-all duration-300 text-center cursor-pointer shadow-sm hover:shadow-md hover:scale-105">
                  OUR SERVICES
                </div>
              </Link>
              <Link href="/#referral">
                <div className="bg-primary text-[#4ECDC4] hover:text-primary hover:bg-white hover:border hover:border-primary font-semibold px-8 py-3 rounded-md transition-all duration-300 text-center cursor-pointer shadow-sm hover:shadow-md relative overflow-hidden hover:scale-105">
                  MAKE A REFERRAL
                </div>
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
              <h3 className="text-xl font-bold mb-3 text-primary">A Reliable Housing Partner for Your Client Referrals</h3>
              <p className="text-neutral-700 mb-3">
                We understand the challenges you face when supporting clients with housing needs. Lakeside Health offers a streamlined referral process and evidence-based approaches to help your clients establish and maintain stable housing.
              </p>
              <p className="text-neutral-700">
                Our professional team handles the housing-specific components of your clients' care plans, allowing you to focus on other critical aspects of their wellbeing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;