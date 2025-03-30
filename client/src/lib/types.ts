import { 
  ReferralFormValues, 
  ContactFormValues,
  Referral,
  Contact
} from "@shared/schema";

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Array<{
    code: string;
    message: string;
    path: string[];
  }>;
}

export interface ReferralResponse extends ApiResponse<Referral> {}
export interface ContactResponse extends ApiResponse<Contact> {}

// Service Types
export interface ServiceItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

// These types match the expected structure from schema.ts but are specifically for the frontend
// to avoid circular dependencies
export type ReferralFormData = ReferralFormValues;
export type ContactFormData = ContactFormValues;
