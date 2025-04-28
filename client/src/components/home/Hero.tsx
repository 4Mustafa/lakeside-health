import { Link } from "wouter";

const Hero = () => {
  return (
    <section id="home" className="bg-white text-primary py-14 md:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary">
            Connecting Your Clients to Housing Stability Solutions
          </h1>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Lakeside Health provides comprehensive Housing Stabilization Services for vulnerable Minnesotans. As a trusted MA-billable provider, we partner with social workers and case managers to support clients facing housing instability.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          <div className="md:w-1/2 bg-white rounded-xl shadow-sm border border-neutral-100 p-8">
            <h3 className="text-xl font-bold mb-4 text-primary">How We Support Your Clients</h3>
            <p className="text-neutral-700 mb-6">
              We understand the challenges you face when supporting clients with housing needs. Lakeside Health offers a streamlined referral process and evidence-based approaches to help your clients establish and maintain stable housing.
            </p>
            <p className="text-neutral-700 mb-6">
              Our professional team handles the housing-specific components of your clients' care plans, allowing you to focus on other critical aspects of their wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-auto">
              <div 
                onClick={() => window.location.href = '/services'} 
                className="bg-white border border-primary text-primary hover:text-white hover:bg-[#4ECDC4] hover:border-transparent font-semibold px-8 py-3 rounded-md transition-all duration-300 text-center cursor-pointer shadow-sm hover:shadow-md hover:scale-105"
              >
                OUR SERVICES
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-primary/5 rounded-xl shadow-sm border border-primary/10 p-8">
            <h3 className="text-xl font-bold mb-4 text-primary">A Reliable Housing Partner for Your Client Referrals</h3>
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
            <p className="text-neutral-700 mb-6">
              Lakeside Health ensures all referrals are processed promptly with our streamlined system. We work closely with social workers and case managers to provide comprehensive housing stabilization services.
            </p>
            <p className="text-neutral-700 mb-6">
              Our team of dedicated housing specialists will coordinate with you every step of the way to ensure your clients receive the support they need.
            </p>
            <div className="flex flex-col sm:flex-row mt-auto">
              <div 
                onClick={() => window.location.href = '/#referral'}
                className="bg-primary text-white hover:text-white hover:bg-[#4ECDC4] hover:border-transparent font-semibold px-8 py-3 rounded-md transition-all duration-300 text-center cursor-pointer shadow-sm hover:shadow-md hover:scale-105 w-full"
              >
                MAKE A REFERRAL
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;