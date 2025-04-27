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
            <p className="text-lg text-neutral-700 mb-4">
              Lakeside Health provides comprehensive Housing Stabilization Services for vulnerable Minnesotans. As a trusted MA-billable provider, we partner with social workers and case managers to support clients facing housing instability.
            </p>
            
            <div className="bg-[#4ECDC4]/10 border-l-4 border-[#4ECDC4] p-4 mb-6 rounded-r-md">
              <p className="font-semibold text-primary flex items-center">
                <span className="mr-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </span>
                24-Hour Response Time Guarantee
              </p>
              <p className="text-neutral-700 text-sm mt-1">Every referral receives a professional response within 24 hours – we prioritize your clients' needs.</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/services">
                <div className="bg-white border border-primary text-primary hover:text-white hover:bg-[#4ECDC4] hover:border-transparent font-semibold px-8 py-3 rounded-md transition-all duration-300 text-center cursor-pointer shadow-sm hover:shadow-md hover:scale-105">
                  OUR SERVICES
                </div>
              </Link>
              <Link href="/#referral">
                <div className="bg-primary text-white hover:text-white hover:bg-[#4ECDC4] hover:border-transparent font-semibold px-8 py-3 rounded-md transition-all duration-300 text-center cursor-pointer shadow-sm hover:shadow-md relative overflow-hidden hover:scale-105">
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
              <p className="text-neutral-700 mb-4">
                Our professional team handles the housing-specific components of your clients' care plans, allowing you to focus on other critical aspects of their wellbeing.
              </p>
              <div className="flex items-center text-sm text-primary font-medium">
                <svg className="h-5 w-5 mr-2 text-[#4ECDC4]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Guaranteed 24-hour response to all referrals
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;