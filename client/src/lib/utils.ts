import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  try {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  } catch (error) {
    return 'Invalid date';
  }
}

// Function to scroll to top of page and all scrollable areas - used after navigation
export function scrollToTop() {
  // Force immediate scroll to top using multiple methods
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  
  // Also try smooth scrolling for better UX
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  
  // Find all scrollable elements and reset their scroll position
  const resetAllScrolls = () => {
    // Specific selectors for referral form and page
    const referralSelectors = [
      '.referral-page',
      '.referral-container',
      '.referral-content',
      '.referral-form-container',
      '.referral-form',
      '.referral-iframe-container',
      '.scrollable',
      '.iframe',
      '.referral-iframe'
    ];
    
    // General selectors for potentially scrollable elements
    const generalSelectors = [
      'div[style*="overflow"]', 
      'div[style*="scroll"]', 
      '.scrollable', 
      'div[class*="overflow"]',
      'section', 
      'main', 
      'article'
    ];
    
    // Combine all selectors
    const combinedSelectors = [...referralSelectors, ...generalSelectors].join(', ');
    
    // Get all potentially scrollable elements
    const scrollableElements = document.querySelectorAll(combinedSelectors);
    
    // Reset scroll position for each element
    scrollableElements.forEach(element => {
      if (element instanceof HTMLElement) {
        element.scrollTop = 0;
      }
    });
    
    // Also try to scroll iframes if possible
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      try {
        if (iframe.contentWindow) {
          iframe.contentWindow.scrollTo(0, 0);
          if (iframe.contentDocument) {
            iframe.contentDocument.documentElement.scrollTop = 0;
            iframe.contentDocument.body.scrollTop = 0;
          }
        }
      } catch (e) {
        // Ignore cross-origin errors
      }
    });
    
    // Also scroll parent elements just to be sure
    let element = document.documentElement;
    while (element.parentElement) {
      element.parentElement.scrollTop = 0;
      element = element.parentElement;
    }
  };
  
  // Try immediately and then with increasing delays to ensure it works
  resetAllScrolls();
  setTimeout(resetAllScrolls, 100);
  setTimeout(resetAllScrolls, 500);
  setTimeout(resetAllScrolls, 1000);
}

// Function to navigate to a new page and scroll to top
export function navigateTo(path: string) {
  // Change the location
  window.location.href = path;
  
  // Scroll to top
  scrollToTop();
}
