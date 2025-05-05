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

// Function to scroll to top of page - used after navigation
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Function to navigate to a new page and scroll to top
export function navigateTo(path: string) {
  // Change the location
  window.location.href = path;
  
  // Scroll to top
  scrollToTop();
}
