import ServicesDetailSection from "@/components/services/ServicesDetailSection";
import { Link } from "wouter";

const Services = () => {
  return (
    <div className="pt-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Our Services</h1>
        <p className="text-xl text-center text-neutral-600 max-w-3xl mx-auto mb-12">
          We offer comprehensive housing support at every stage of your housing journey, with personalized services tailored to your unique needs.
        </p>
      </div>
      
      <ServicesDetailSection />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-800 mb-8 text-center">Our Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-neutral-50 rounded-xl p-6 shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading text-neutral-800 mb-2">Person-Centered Care</h3>
              <p className="text-neutral-600">
                We recognize that each person's housing situation is unique. Our services are tailored to individual needs, preferences, and goals, with clients actively involved in decision-making.
              </p>
            </div>
            
            <div className="bg-neutral-50 rounded-xl p-6 shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading text-neutral-800 mb-2">Holistic Support</h3>
              <p className="text-neutral-600">
                We address all factors affecting housing stability, from immediate housing needs to underlying challenges such as employment, health, and social connections.
              </p>
            </div>
            
            <div className="bg-neutral-50 rounded-xl p-6 shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading text-neutral-800 mb-2">Community Integration</h3>
              <p className="text-neutral-600">
                We believe in the importance of building connections and support networks. Our services help clients integrate into their communities and access local resources.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/referral">
              <a className="inline-block bg-primary text-[#4ECDC4] hover:text-white hover:bg-[#4ECDC4] hover:border-transparent font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">Make a Referral Today</a>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-800 mb-8 text-center">Eligibility & Process</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold font-heading text-neutral-800 mb-4">Eligibility Criteria</h3>
              <p className="text-lg text-neutral-600 mb-6">
                Our Housing Stabilization Services are available to individuals and families who:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 text-[#4ECDC4] mt-1">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-neutral-600">
                    Are at risk of losing their current housing
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-[#4ECDC4] mt-1">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-neutral-600">
                    Need assistance transitioning to new housing
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-[#4ECDC4] mt-1">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-neutral-600">
                    Require support to maintain their current housing
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-[#4ECDC4] mt-1">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-neutral-600">
                    Need guidance on housing options and rights
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-[#4ECDC4] mt-1">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-neutral-600">
                    Reside in our service area (geographic eligibility may apply)
                  </p>
                </li>
              </ul>
              <p className="text-lg text-neutral-600 mt-6">
                While some programs may have specific income requirements, we strive to serve all individuals in need regardless of financial status. Please contact us to discuss your specific situation.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold font-heading text-neutral-800 mb-4">Service Process</h3>
              <ol className="space-y-6 relative border-l border-neutral-200 dark:border-neutral-700 ml-3 pl-6">
                <li className="mb-10">
                  <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full border-2 border-[#4ECDC4] bg-white flex items-center justify-center">
                    <span className="text-[#4ECDC4] font-bold">1</span>
                  </div>
                  <h4 className="font-bold text-neutral-800 text-lg mb-1">Referral & Intake</h4>
                  <p className="text-neutral-600">Clients can be referred by social workers, partner organizations, or self-refer. Our intake team will contact you to gather initial information.</p>
                </li>
                <li className="mb-10">
                  <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full border-2 border-[#4ECDC4] bg-white flex items-center justify-center">
                    <span className="text-[#4ECDC4] font-bold">2</span>
                  </div>
                  <h4 className="font-bold text-neutral-800 text-lg mb-1">Assessment</h4>
                  <p className="text-neutral-600">We'll meet with you to understand your housing needs, challenges, and goals, and determine which services will be most beneficial.</p>
                </li>
                <li className="mb-10">
                  <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full border-2 border-[#4ECDC4] bg-white flex items-center justify-center">
                    <span className="text-[#4ECDC4] font-bold">3</span>
                  </div>
                  <h4 className="font-bold text-neutral-800 text-lg mb-1">Service Planning</h4>
                  <p className="text-neutral-600">Together, we'll develop a personalized service plan outlining goals, action steps, and timelines.</p>
                </li>
                <li>
                  <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full border-2 border-[#4ECDC4] bg-white flex items-center justify-center">
                    <span className="text-[#4ECDC4] font-bold">4</span>
                  </div>
                  <h4 className="font-bold text-neutral-800 text-lg mb-1">Ongoing Support</h4>
                  <p className="text-neutral-600">Our team will provide regular support, guidance, and connections to resources based on your service plan, with periodic reviews to ensure it continues to meet your needs.</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
