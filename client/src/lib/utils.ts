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
  // Scroll main window to top
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  
  // Find all scrollable elements and reset their scroll position
  setTimeout(() => {
    // Specific selectors for referral form and page
    const referralSelectors = [
      '.referral-page',
      '.referral-container',
      '.referral-content',
      '.referral-form-container',
      '.referral-form',
      '.referral-iframe-container',
      '.scrollable',
      '.iframe'
    ];
    
    // General selectors for potentially scrollable elements
    const generalSelectors = [
      'div[style*="overflow"]', 
      'div[style*="scroll"]', 
      '.scrollable', 
      'div[class*="overflow-y"]', 
      'div[class*="overflow-auto"]'
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
        }
      } catch (e) {
        // Ignore cross-origin errors
      }
    });
  }, 100); // Small delay to ensure DOM is ready
}

// Function to navigate to a new page and scroll to top
export function navigateTo(path: string) {
  // Change the location
  window.location.href = path;
  
  // Scroll to top
  scrollToTop();
}
