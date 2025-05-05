import { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import ReferralFormGoogleForm from "@/components/forms/ReferralFormGoogleForm";

const Referral = () => {
  const clientInfoRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string>("custom");
  
  // URL for the embedded Google Form
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfwlTQbIV3BeQmz2FKy8sMdpkNAXitDj1KXUf_3-qeWzhwvhw/viewform?embedded=true";
  
  useEffect(() => {
    // Handle scrolling to the client-info section
    const handleHashChange = () => {
      if (window.location.hash === '#client-info') {
        // Add a slight delay to ensure the DOM is fully rendered
        setTimeout(() => {
          // Get the element and scroll to it
          const element = document.getElementById('client-info');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 200);
      }
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes (if user navigates with browser back/forward buttons)
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
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
          
          <Tabs defaultValue="custom" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="custom">Streamlined Form</TabsTrigger>
              <TabsTrigger value="google">Google Form</TabsTrigger>
            </TabsList>
            
            <TabsContent value="custom">
              <div ref={clientInfoRef}>
                <ReferralFormGoogleForm />
              </div>
            </TabsContent>
            
            <TabsContent value="google">
              <Card className="p-6 bg-neutral-50 rounded-xl shadow-md">
                <div className="mb-4 text-neutral-700 text-center">
                  <p>Complete our Google Form below to submit your referral directly.</p>
                </div>
                <div className="bg-white rounded-md overflow-hidden border border-gray-100">
                  <iframe 
                    src={googleFormUrl}
                    width="100%" 
                    height="1100" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0}
                    title="Lakeside Health Referral Form"
                    className="block mx-auto">
                    Loading form...
                  </iframe>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Referral;
