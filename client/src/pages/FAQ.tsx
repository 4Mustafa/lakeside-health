import FAQSection from "@/components/home/FAQSection";
import { Link } from "wouter";

const FAQ = () => {
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Find answers to common questions about our Housing Stabilization Services.
          </p>
        </div>
        
        <FAQSection />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">About Financial Assistance</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Do you provide direct financial assistance for rent or security deposits?</h3>
                <p className="text-neutral-600">
                  While we don't directly provide financial assistance, we work closely with partner organizations that offer rental assistance, security deposit programs, and other financial support. Our housing specialists can help you identify and apply for appropriate financial resources.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">Is there a cost for your services?</h3>
                <p className="text-neutral-600">
                  Most of our Housing Stabilization Services are provided at no cost to clients. We are funded through a combination of grants, donations, and partnerships with local government agencies. In some cases, specific programs may have eligibility requirements related to income or other factors.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">Do you help with utility bills or other housing-related expenses?</h3>
                <p className="text-neutral-600">
                  We can connect you with resources for utility assistance, weatherization programs, and other supports for housing-related expenses. Our goal is to address all aspects of housing stability, including the ability to maintain essential utilities.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Service Delivery Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">How long do services typically last?</h3>
                <p className="text-neutral-600">
                  The duration of services varies based on individual needs and the specific program. Transition services may be relatively short-term (1-3 months), while sustaining services might continue for 6-12 months or longer. We work with each client to determine the appropriate length of support.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">Can you help with emergency housing situations?</h3>
                <p className="text-neutral-600">
                  While we're not an emergency shelter provider, we can help connect you with emergency housing resources and work with you on a plan for longer-term stability. If you're facing an immediate housing crisis, please contact us right away so we can help coordinate appropriate resources.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">Do you provide transportation assistance for appointments?</h3>
                <p className="text-neutral-600">
                  We understand that transportation can be a barrier to accessing services. We offer flexible meeting options, including virtual appointments and home visits when appropriate. In some cases, we may be able to provide transportation assistance or connect you with community transportation resources.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-primary-50 rounded-xl shadow-sm p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg text-neutral-600 mb-6">
              If you couldn't find the answer you were looking for, please don't hesitate to reach out to our team directly. We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
           <a
  href="mailto:lakesidehealthmn@gmail.com"
  className="bg-primary text-white hover:bg-[#4ECDC4] hover:border-transparent font-semibold px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:scale-105"
>
  Contact Us
</a>
              <Link href="/#referral">
                <div className="bg-white border border-primary text-primary hover:text-white hover:bg-[#4ECDC4] hover:border-transparent font-semibold px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:scale-105">Make a Referral</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
