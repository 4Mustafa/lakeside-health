import { useRef, useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { scrollToTop } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const Referral = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // URL for the embedded Google Form
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfwlTQbIV3BeQmz2FKy8sMdpkNAXitDj1KXUf_3-qeWzhwvhw/viewform?embedded=true";
  
  // Handler function for form submission
  const handleFormSubmission = () => {
    console.log('Form submission detected - scrolling to top');
    
    // Set loading state while we prepare to show success message
    setIsLoading(true);
    
    // Set form as submitted to show success message
    setFormSubmitted(true);
    
    // Scroll immediately and then with delays to ensure it works
    scrollToTop();
    
    // Add redundancy for scrolling with various delays
    setTimeout(() => {
      scrollToTop();
      
      // Force scroll with native methods
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Set URL hash to #top to force browser to scroll
      window.location.hash = 'top';
      
      // Turn off loading state
      setIsLoading(false);
    }, 250);
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
          {/* Loading indicator */}
          {isLoading && (
            <div className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 shadow-md py-4 z-50 text-center">
              <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
              <p className="text-center text-lg font-medium mt-2">Processing your submission...</p>
            </div>
          )}
          
          {/* Form Submission Success Message */}
          {formSubmitted && (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 mb-8 text-center">
              <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Referral Submitted Successfully</h3>
              <p className="mb-4">Thank you for your referral. Our team will review the information and contact you within 1-2 business days.</p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  window.location.reload(); // Reload to reset the form
                }}
                className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-md transition-colors"
              >
                Submit Another Referral
              </button>
            </div>
          )}
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Referral</h1>
            <p className="text-lg text-neutral-600">For social workers and service providers to refer clients to our Housing Stabilization Services.</p>
          </div>
          
          {!formSubmitted && (
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
          )}
          
          {!formSubmitted ? (
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
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Referral;
