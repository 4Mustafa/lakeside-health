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
                <h4 className="text-xl font-semibold font-heading text-neutral-800 mb-4">How Transition Services Help</h4>
                <p className="text-neutral-600 mb-4">Our Transition Services are designed to support you through the sometimes challenging process of finding and moving into a new home. We understand that this period can be stressful, and our team is here to help make it as smooth as possible.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-semibold text-neutral-800 mb-2">Housing Search Assistance</h5>
                    <p className="text-neutral-600 text-sm">We'll help you identify suitable housing options that match your needs and budget, and assist with applications and paperwork.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-neutral-800 mb-2">Move-In Support</h5>
                    <p className="text-neutral-600 text-sm">From coordinating move-in logistics to connecting you with resources for furniture and household essentials.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-neutral-800 mb-2">Landlord Mediation</h5>
                    <p className="text-neutral-600 text-sm">We can act as intermediaries with landlords to help establish positive relationships from the start.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-neutral-800 mb-2">Initial Stability Planning</h5>
                    <p className="text-neutral-600 text-sm">Creating a plan for the first months in your new home to ensure you have the support you need.</p>
                  </div>
                </div>
                <Link href="/referral#client-info">
                  <a className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-5 py-2 rounded-lg transition-colors">Request This Service</a>
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
                <h4 className="text-xl font-semibold font-heading text-neutral-800 mb-4">Long-Term Housing Stability</h4>
                <p className="text-neutral-600 mb-4">Our Sustaining Services focus on helping you maintain your housing over the long term. We provide ongoing support to address challenges before they become crises and help you build the skills and connections needed for lasting stability.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-semibold text-neutral-800 mb-2">Housing-Focused Case Management</h5>
                    <p className="text-neutral-600 text-sm">Regular check-ins and support to address any issues that might threaten housing stability.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-neutral-800 mb-2">Financial Capability</h5>
                    <p className="text-neutral-600 text-sm">Assistance with budgeting, managing housing costs, and connecting to financial resources as needed.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-neutral-800 mb-2">Community Integration</h5>
                    <p className="text-neutral-600 text-sm">Help connecting to neighborhood resources, community groups, and support networks.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-neutral-800 mb-2">Tenancy Skills</h5>
                    <p className="text-neutral-600 text-sm">Education on tenant rights and responsibilities, and communication with landlords.</p>
                  </div>
                </div>
                <Link href="/referral#client-info">
                  <a className="inline-block bg-[#4ECDC4] hover:bg-[#38A39A] text-white font-semibold px-5 py-2 rounded-lg transition-colors">Request This Service</a>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Housing Consultation */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-neutral-700 text-white p-8">
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
                <h4 className="text-xl font-semibold font-heading text-neutral-800 mb-4">Expert Housing Guidance</h4>
                <p className="text-neutral-600 mb-4">Our Housing Consultation services provide specialized guidance to help you understand your housing options, rights, and available resources. Whether you're facing a specific challenge or planning your housing future, our consultants can help.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-semibold text-neutral-800 mb-2">Housing Rights Consultation</h5>
                    <p className="text-neutral-600 text-sm">Information about fair housing laws, tenant protections, and advocacy when your rights are not being respected.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-neutral-800 mb-2">Housing Resource Navigation</h5>
                    <p className="text-neutral-600 text-sm">Guidance on accessing housing-related programs, subsidies, and support services in your community.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-neutral-800 mb-2">Housing Planning</h5>
                    <p className="text-neutral-600 text-sm">Assistance in developing personalized plans to address your specific housing needs and goals.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-neutral-800 mb-2">Crisis Prevention</h5>
                    <p className="text-neutral-600 text-sm">Early intervention support when housing stability is threatened by changing circumstances.</p>
                  </div>
                </div>
                <Link href="/referral#client-info">
                  <a className="inline-block bg-neutral-700 hover:bg-neutral-800 text-white font-semibold px-5 py-2 rounded-lg transition-colors">Request This Service</a>
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
