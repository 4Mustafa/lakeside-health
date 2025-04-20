import { useEffect, useRef } from "react";
import ReferralForm from "@/components/forms/ReferralForm";

const Referral = () => {
  const clientInfoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Check if the URL has the client-info hash
    if (window.location.hash === '#client-info') {
      // Add a slight delay to ensure the DOM is fully rendered
      setTimeout(() => {
        // Get the element and scroll to it
        const element = document.getElementById('client-info');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);
  
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Referral</h1>
            <p className="text-lg text-neutral-600">For social workers and service providers to refer clients to our Housing Stabilization Services.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Referral Guidelines</h2>
            <p className="mb-4">Thank you for considering our Housing Stabilization Services for your client. To ensure we can provide the most appropriate support, please review the following guidelines:</p>
            
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Complete all required fields in the referral form</li>
              <li>Obtain client consent before sharing their information</li>
              <li>Provide accurate contact information for both client and referrer</li>
              <li>Include any relevant housing history or special considerations in the notes section</li>
              <li>Select all services that might benefit the client</li>
            </ul>
            
            <p className="text-neutral-600 italic">Note: Our team will review all referrals within 1-2 business days and contact the referring provider to gather any additional information needed before reaching out to the client.</p>
          </div>
          
          <div ref={clientInfoRef}>
            <ReferralForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
