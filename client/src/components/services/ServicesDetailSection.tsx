import { Link } from "wouter";
import { Home, ShieldCheck, MessageCircle } from "lucide-react";

const ServicesDetailSection = () => {
  return (
    <section id="services" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-800 mb-4">Our Services</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">Comprehensive housing support designed to meet you where you are and help you get where you want to be.</p>
        </div>
        
        <div className="space-y-12">
          {/* Transition Services */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-primary text-white p-8">
                <div className="flex items-center mb-4">
                  <Home className="h-8 w-8 mr-4" />
                  <h3 className="text-2xl font-bold font-heading">Transition Services</h3>
                </div>
                <p className="text-white/90 mb-6">Supporting individuals and families as they move into new housing situations.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Housing search assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Move-in coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Initial stability planning</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-2/3 p-8">
                <h4 className="text-2xl font-semibold font-heading text-neutral-800 mb-3">How Transition Services Help</h4>
                <p className="text-neutral-600 mb-6 leading-relaxed">Our Transition Services are designed to support you through the sometimes challenging process of finding and moving into a new home. We understand that this period can be stressful, and our team is here to help make it as smooth as possible.</p>
                <div className="space-y-5 mb-6">
                  <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-100">
                    <h5 className="font-semibold text-neutral-800 mb-2 text-lg">Housing Search Assistance</h5>
                    <p className="text-neutral-700">We'll help you identify suitable housing options that match your needs and budget, and assist with applications and paperwork.</p>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-100">
                    <h5 className="font-semibold text-neutral-800 mb-2 text-lg">Move-In Support</h5>
                    <p className="text-neutral-700">From coordinating move-in logistics to connecting you with resources for furniture and household essentials.</p>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-100">
                    <h5 className="font-semibold text-neutral-800 mb-2 text-lg">Landlord Mediation</h5>
                    <p className="text-neutral-700">We can act as intermediaries with landlords to help establish positive relationships from the start.</p>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-100">
                    <h5 className="font-semibold text-neutral-800 mb-2 text-lg">Initial Stability Planning</h5>
                    <p className="text-neutral-700">Creating a plan for the first months in your new home to ensure you have the support you need.</p>
                  </div>
                </div>
                <Link href="/referral#client-info" className="inline-block bg-primary text-white hover:text-white hover:bg-[#4ECDC4] hover:border-transparent font-semibold px-5 py-2 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
                  Request This Service
                </Link>
              </div>
            </div>
          </div>
          
          {/* Sustaining Services */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-[#4ECDC4] text-white p-8">
                <div className="flex items-center mb-4">
                  <ShieldCheck className="h-8 w-8 mr-4" />
                  <h3 className="text-2xl font-bold font-heading">Sustaining Services</h3>
                </div>
                <p className="text-white/90 mb-6">Ongoing support to help maintain housing stability long-term.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Budget management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Tenant rights education</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Community connection</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-2/3 p-8">
                <h4 className="text-2xl font-semibold font-heading text-neutral-800 mb-3">Long-Term Housing Stability</h4>
                <p className="text-neutral-600 mb-6 leading-relaxed">Our Sustaining Services focus on helping you maintain your housing over the long term. We provide ongoing support to address challenges before they become crises and help you build the skills and connections needed for lasting stability.</p>
                <div className="space-y-5 mb-6">
                  <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-100">
                    <h5 className="font-semibold text-neutral-800 mb-2 text-lg">Housing-Focused Case Management</h5>
                    <p className="text-neutral-700">Regular check-ins and support to address any issues that might threaten housing stability.</p>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-100">
                    <h5 className="font-semibold text-neutral-800 mb-2 text-lg">Financial Capability</h5>
                    <p className="text-neutral-700">Assistance with budgeting, managing housing costs, and connecting to financial resources as needed.</p>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-100">
                    <h5 className="font-semibold text-neutral-800 mb-2 text-lg">Community Integration</h5>
                    <p className="text-neutral-700">Help connecting to neighborhood resources, community groups, and support networks.</p>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-100">
                    <h5 className="font-semibold text-neutral-800 mb-2 text-lg">Tenancy Skills</h5>
                    <p className="text-neutral-700">Education on tenant rights and responsibilities, and communication with landlords.</p>
                  </div>
                </div>
                <Link href="/referral#client-info" className="inline-block bg-[#4ECDC4] text-white hover:text-[#4ECDC4] hover:bg-white hover:border border-[#4ECDC4] font-semibold px-5 py-2 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
                  Request This Service
                </Link>
              </div>
            </div>
          </div>
          
          {/* Housing Consultation */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-[#FF6B6B] text-white p-8">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-8 w-8 mr-4" />
                  <h3 className="text-2xl font-bold font-heading">Housing Consultation</h3>
                </div>
                <p className="text-white/90 mb-6">Expert guidance on navigating housing challenges and opportunities.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Housing rights information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Resource navigation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Housing planning</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-2/3 p-8">
                <h4 className="text-2xl font-semibold font-heading text-neutral-800 mb-3">Expert Housing Guidance</h4>
                <p className="text-neutral-600 mb-6 leading-relaxed">Our Housing Consultation services provide specialized guidance to help you understand your housing options, rights, and available resources. Whether you're facing a specific challenge or planning your housing future, our consultants can help.</p>
                <div className="space-y-5 mb-6">
                  <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-100">
                    <h5 className="font-semibold text-neutral-800 mb-2 text-lg">Housing Rights Consultation</h5>
                    <p className="text-neutral-700">Information about fair housing laws, tenant protections, and advocacy when your rights are not being respected.</p>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-100">
                    <h5 className="font-semibold text-neutral-800 mb-2 text-lg">Housing Resource Navigation</h5>
                    <p className="text-neutral-700">Guidance on accessing housing-related programs, subsidies, and support services in your community.</p>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-100">
                    <h5 className="font-semibold text-neutral-800 mb-2 text-lg">Housing Planning</h5>
                    <p className="text-neutral-700">Assistance in developing personalized plans to address your specific housing needs and goals.</p>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-100">
                    <h5 className="font-semibold text-neutral-800 mb-2 text-lg">Crisis Prevention</h5>
                    <p className="text-neutral-700">Early intervention support when housing stability is threatened by changing circumstances.</p>
                  </div>
                </div>
                <Link href="/referral#client-info" className="inline-block bg-[#FF6B6B] text-white hover:text-[#FF6B6B] hover:bg-white hover:border border-[#FF6B6B] font-semibold px-5 py-2 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
                  Request This Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailSection;
