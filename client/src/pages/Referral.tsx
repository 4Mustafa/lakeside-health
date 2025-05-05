import { useRef, useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { scrollToTop } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const Referral = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [lastIframeUrl, setLastIframeUrl] = useState(''); // Track last iframe URL
  
  // URL for the embedded Google Form
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfwlTQbIV3BeQmz2FKy8sMdpkNAXitDj1KXUf_3-qeWzhwvhw/viewform?embedded=true";
  
  // Handler function for form submission
  const handleFormSubmission = () => {
    console.log('Form submission detected - scrolling to top');
    
    // Set loading state while we prepare to show success message
    setIsLoading(true);
    
    // Use a direct, immediate approach for scrolling
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.location.hash = 'top';
    
    // Set form as submitted to show success message
    setFormSubmitted(true);
    
    // Scroll again after a delay to ensure the success message is visible
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Turn off loading state
      setIsLoading(false);
    }, 100);
  };
  
  // Set up URL polling for form submission detection
  useEffect(() => {
    // Create a more robust submission detector using URL polling
    const checkFormSubmission = () => {
      try {
        if (iframeRef.current && iframeRef.current.contentWindow) {
          try {
            const currentUrl = iframeRef.current.contentWindow.location.href;
            
            // If URL changed and contains submission indicators
            if (currentUrl !== lastIframeUrl) {
              console.log('URL changed from:', lastIframeUrl, 'to:', currentUrl);
              setLastIframeUrl(currentUrl);
              
              // Check if the new URL indicates form submission
              if (
                currentUrl.includes('formResponse') || 
                currentUrl.includes('thanks') || 
                currentUrl.includes('submitted') ||
                currentUrl.includes('confirmation')
              ) {
                console.log('⭐ Form submission detected via URL change!');
                handleFormSubmission();
              }
            }
          } catch (urlError) {
            // Silent catch for cross-origin URL errors
          }
          
          // Try to access form elements for direct event listeners
          try {
            const doc = iframeRef.current.contentDocument;
            if (doc) {
              // Find all forms and add submission listeners
              const forms = doc.querySelectorAll('form');
              forms.forEach(form => {
                if (!form.hasAttribute('data-submit-listener')) {
                  form.addEventListener('submit', (e) => {
                    console.log('⭐ Form submission detected via submit event!');
                    // Prevent default only if needed
                    // e.preventDefault();
                    handleFormSubmission();
                  });
                  form.setAttribute('data-submit-listener', 'true');
                  
                  // Also hijack submit button clicks
                  const submitButtons = form.querySelectorAll('button[type="submit"], input[type="submit"]');
                  submitButtons.forEach(button => {
                    if (!button.hasAttribute('data-click-listener')) {
                      button.addEventListener('click', () => {
                        console.log('⭐ Form submission detected via submit button click!');
                        sessionStorage.setItem('form_submitted', 'true');
                        // Force immediate submission handling
                        setTimeout(handleFormSubmission, 100);
                      });
                      button.setAttribute('data-click-listener', 'true');
                    }
                  });
                }
              });
            }
          } catch (e) {
            // Ignore cross-origin errors
            console.log('Cannot access iframe document (expected for cross-origin)');
          }
        }
      } catch (e) {
        console.log('Error checking form submission:', e);
      }
      
      // Check if session storage has our flag
      if (sessionStorage.getItem('form_submitted') === 'true') {
        console.log('⭐ Form submission detected via session storage!');
        handleFormSubmission();
        sessionStorage.removeItem('form_submitted');
      }
    };
    
    // Run the check immediately
    checkFormSubmission();
    
    // Then set up polling interval (more frequent)
    const interval = setInterval(checkFormSubmission, 200);
    
    // Also set up message event listener from iframe
    const handleMessage = (event: MessageEvent) => {
      if (event.origin.includes('google.com')) {
        console.log('Received message from Google:', event.data);
        if (typeof event.data === 'string' && (
          event.data.includes('submitted') || 
          event.data.includes('formResponse')
        )) {
          console.log('⭐ Form submission detected via postMessage!');
          handleFormSubmission();
        }
      }
    };
    
    window.addEventListener('message', handleMessage);
    
    // Clean up
    return () => {
      clearInterval(interval);
      window.removeEventListener('message', handleMessage);
    };
  }, [lastIframeUrl]); // Depend on lastIframeUrl to re-run if that changes
  
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
            <>
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
                      // Store the initial URL when iframe loads
                      const iframe = e.currentTarget;
                      const iframeUrl = iframe.contentWindow?.location.href;
                      
                      // Save this as our initial URL
                      if (iframeUrl) {
                        console.log('Initial iframe URL:', iframeUrl);
                        setLastIframeUrl(iframeUrl);
                      }
                      
                      // If the URL already indicates submission, handle it
                      if (iframeUrl && (
                        iframeUrl.includes('formResponse') || 
                        iframeUrl.includes('thanks') || 
                        iframeUrl.includes('submitted')
                      )) {
                        console.log('⭐ Form submission detected during load!');
                        handleFormSubmission();
                      }
                    } catch (err) {
                      // Ignore cross-origin errors
                      console.log('Cannot access iframe URL (expected for cross-origin)');
                    }
                  }}>
                  Loading form...
                </iframe>
              </div>
              
              {/* Backup floating button to manually trigger success view if auto-detection fails */}
              <div className="fixed bottom-4 right-4 z-50">
                <button
                  onClick={() => {
                    console.log('Manual form completion triggered');
                    handleFormSubmission();
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-3 rounded-md shadow-lg flex items-center gap-2"
                  aria-label="Confirm submission"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>I've Completed The Form</span>
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Referral;
