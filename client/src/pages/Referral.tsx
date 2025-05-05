import { useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { scrollToTop } from "@/lib/utils";

const Referral = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // URL for the embedded Google Form
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfwlTQbIV3BeQmz2FKy8sMdpkNAXitDj1KXUf_3-qeWzhwvhw/viewform?embedded=true";
  
  // Handler function for form submission
  const handleFormSubmission = () => {
    console.log('Form submission detected - scrolling to top');
    
    // Scroll immediately and then with delays to ensure it works
    scrollToTop();
    
    // Add redundancy for scrolling with various delays
    setTimeout(() => scrollToTop(), 100);
    setTimeout(() => scrollToTop(), 500);
    setTimeout(() => scrollToTop(), 1500);
    
    // Set URL hash to #top to force browser to scroll
    window.location.hash = 'top';
    
    // Force scroll with native methods
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };
  
  // Listen for messages from the iframe (Google Form)
  useEffect(() => {
    // This function will handle messages from the iframe
    const handleMessage = (event: MessageEvent) => {
      // Check if the message is from our Google Form (or related domains)
      if (event.origin.includes('google.com')) {
        // Check if the message indicates form submission
        // Google form submissions often trigger a redirect or page change
        if (event.data && typeof event.data === 'string' && 
            (event.data.includes('formResponse') || event.data.includes('submitted'))) {
          // Scroll to the top of the page
          scrollToTop();
        }
      }
    };

    // Add event listener
    window.addEventListener('message', handleMessage);
    
    // Add fallback for form submission detection
    const checkIframeChanges = () => {
      try {
        if (iframeRef.current && iframeRef.current.contentWindow) {
          // If the iframe URL has changed to include formResponse or thanks
          const iframeUrl = iframeRef.current.contentWindow.location.href;
          if (iframeUrl.includes('formResponse') || iframeUrl.includes('thanks')) {
            handleFormSubmission();
          }
          
          // Try to add listeners directly to form elements in the iframe
          try {
            const iframeDocument = iframeRef.current.contentDocument;
            if (iframeDocument) {
              // Find form elements
              const forms = iframeDocument.querySelectorAll('form');
              forms.forEach(form => {
                // Use attribute instead of dataset to avoid TypeScript errors
                if (!form.hasAttribute('data-listener-added')) {
                  form.addEventListener('submit', () => {
                    console.log('Form submit detected');
                    handleFormSubmission();
                  });
                  form.setAttribute('data-listener-added', 'true');
                }
              });
              
              // Find submit buttons
              const submitButtons = iframeDocument.querySelectorAll('button[type="submit"], input[type="submit"]');
              submitButtons.forEach(button => {
                // Use attribute instead of dataset to avoid TypeScript errors
                if (!button.hasAttribute('data-listener-added')) {
                  button.addEventListener('click', () => {
                    console.log('Submit button clicked');
                    handleFormSubmission();
                    // Set a flag in sessionStorage to indicate form was submitted
                    sessionStorage.setItem('formSubmitted', 'true');
                  });
                  button.setAttribute('data-listener-added', 'true');
                }
              });
            }
          } catch (e) {
            // Ignore cross-origin errors
          }
        }
      } catch (e) {
        // Ignore cross-origin errors
      }
      
      // Check if the submission flag exists in sessionStorage
      if (sessionStorage.getItem('formSubmitted') === 'true') {
        handleFormSubmission();
        // Clear the flag after using it
        sessionStorage.removeItem('formSubmitted');
      }
    };
    
    // Setup interval to check for form submission
    const interval = setInterval(checkIframeChanges, 500);
    
    // Cleanup event listeners
    return () => {
      window.removeEventListener('message', handleMessage);
      clearInterval(interval);
    };
  }, []);
  
  return (
    <div id="top" className="pt-8 pb-16 referral-page" style={{ overflow: 'visible' }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 referral-container" style={{ overflow: 'visible' }}>
        <div className="max-w-4xl mx-auto referral-content" style={{ overflow: 'visible' }}>
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
            
            <p className="text-red-600 font-medium border border-red-200 bg-red-50 p-3 rounded-md">Note: Our team will review all referrals within 1-2 business days and contact the referring provider to gather any additional information needed before reaching out to the client.</p>
          </div>
          
          <div ref={formRef} className="referral-iframe-container" style={{ overflow: 'hidden' }}>
            <iframe 
              ref={iframeRef}
              src={googleFormUrl}
              width="100%" 
              height="4000" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              title="Lakeside Health Referral Form"
              className="block mx-auto referral-iframe"
              style={{ overflow: 'hidden' }}
              onLoad={(e) => {
                try {
                  // Check if the iframe URL indicates form submission completion
                  const iframe = e.currentTarget;
                  const iframeUrl = iframe.contentWindow?.location.href;
                  if (iframeUrl && (iframeUrl.includes('formResponse') || iframeUrl.includes('thanks'))) {
                    handleFormSubmission();
                  }
                } catch (err) {
                  // Ignore cross-origin errors
                }
              }}>
              Loading form...
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
