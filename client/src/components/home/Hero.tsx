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

        <div className="flex flex-col items-stretch">
          <div className="bg-primary/5 rounded-xl shadow-sm border border-primary/10 p-8 flex flex-col">
            <h3 className="text-xl font-bold mb-4 text-primary">A Reliable Housing Partner for Your Client Referrals</h3>
            
            <div className="bg-red-50 border border-red-200 p-4 mb-6 rounded-md h-auto flex flex-col justify-center">
              <p className="font-semibold text-red-600 flex items-center text-lg">
                <span className="mr-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </span>
                24-Hour Response Time Guarantee
              </p>
              <p className="text-neutral-700 text-sm mt-1">All referrals receive a prompt, professional response within 24 hours - guaranteed.</p>
            </div>
            
            <p className="text-neutral-700 mb-4">
              Lakeside Health ensures all referrals are processed promptly with our streamlined system. We work closely with social workers and case managers to provide comprehensive housing stabilization services.
            </p>
            <p className="text-neutral-700 mb-4">
              Our team of dedicated housing specialists will coordinate with you every step of the way to ensure your clients receive the support they need.
            </p>
            
            <div className="flex justify-center mt-6">
              <div 
                onClick={() => window.location.href = '/#referral'}
                className="bg-primary text-white hover:bg-[#4ECDC4] hover:border-transparent font-semibold px-12 py-4 rounded-lg transition-all duration-300 text-center cursor-pointer shadow-md hover:shadow-lg transform hover:scale-105 max-w-md"
              >
                Make a Referral
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;