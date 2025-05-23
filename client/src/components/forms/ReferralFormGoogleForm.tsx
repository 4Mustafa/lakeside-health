import { useState, FormEvent, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

const referralFormSchema = z.object({
  client: z.object({
    name: z.string().min(2, { message: "Name is required" }),
    dob: z.string().min(1, { message: "Date of birth is required" }),
    phone: z.string().min(10, { message: "Valid phone number is required" }),
    email: z.string().email().optional().or(z.literal("")),
    address: z.string().optional(),
  }),
  referrer: z.object({
    name: z.string().min(2, { message: "Name is required" }),
    organization: z.string().min(2, { message: "Organization is required" }),
    phone: z.string().min(10, { message: "Valid phone number is required" }),
    email: z.string().email({ message: "Valid email is required" }),
  }),
  services: z.object({
    transition: z.boolean().optional(),
    sustaining: z.boolean().optional(),
    consultation: z.boolean().optional(),
  }).refine(data => data.transition || data.sustaining || data.consultation, {
    message: "At least one service must be selected",
    path: ["root"],
  }),
  notes: z.string().optional(),
  consent: z.boolean().refine(val => val === true, {
    message: "You must confirm client consent",
  }),
});

type ReferralFormValues = z.infer<typeof referralFormSchema>;

const ReferralFormGoogleForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ReferralFormValues>({
    resolver: zodResolver(referralFormSchema),
    defaultValues: {
      client: {
        name: "",
        dob: "",
        phone: "",
        email: "",
        address: "",
      },
      referrer: {
        name: "",
        organization: "",
        phone: "",
        email: "",
      },
      services: {
        transition: false,
        sustaining: false,
        consultation: false,
      },
      notes: "",
      consent: false,
    },
  });

  // URL of the embedded Google Form
  const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfwlTQbIV3BeQmz2FKy8sMdpkNAXitDj1KXUf_3-qeWzhwvhw/viewform?embedded=true';
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [directSubmitUrl, setDirectSubmitUrl] = useState<string | null>(null);
  
  // Function to handle form submission - creates a direct link for manual submission option
  const handleGoogleFormSubmit = (data: ReferralFormValues) => {
    setIsSubmitting(true);
    try {
      // Create a formatted string with all the form data
      const allFormData = `
CLIENT INFORMATION:
Name: ${data.client.name}
Date of Birth: ${data.client.dob}
Phone: ${data.client.phone}
Email: ${data.client.email || "Not provided"}
Address: ${data.client.address || "Not provided"}

REFERRER INFORMATION:
Name: ${data.referrer.name}
Organization: ${data.referrer.organization}
Phone: ${data.referrer.phone}
Email: ${data.referrer.email}

SERVICES REQUESTED:
${data.services.transition ? "- Housing Transition Services" : ""}
${data.services.sustaining ? "- Housing Sustaining Services" : ""}
${data.services.consultation ? "- Housing Consultation Services" : ""}

ADDITIONAL NOTES:
${data.notes || "None provided"}
`;
      
      // Create a URL with parameters for manual submission if needed
      const formUrl = new URL('https://docs.google.com/forms/d/e/1FAIpQLSfwlTQbIV3BeQmz2FKy8sMdpkNAXitDj1KXUf_3-qeWzhwvhw/viewform');
      formUrl.searchParams.append('entry.1052175947', allFormData);
      setDirectSubmitUrl(formUrl.toString());
      
      // Set success state
      setFormSubmitted(true);
      
      toast({
        title: "Information Submitted",
        description: "Your referral information has been submitted. See below for next steps.",
        duration: 5000,
      });
    } catch (error: any) {
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your referral. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmit = (data: ReferralFormValues) => {
    handleGoogleFormSubmit(data);
  };

  // Check if the form has been submitted successfully
  if (formSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6">
        <div className="text-center mb-6">
          <div className="text-green-500 text-3xl mb-4">
            <CheckCircle2 className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold font-heading mb-2">Referral Information Submitted</h3>
          <p className="mb-2">Thank you for using our referral form. Your information has been successfully processed.</p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-sm mb-5 border border-gray-100">
          <h4 className="font-medium text-gray-800 mb-3 flex items-center">
            <span>Complete Your Submission</span>
          </h4>
          <p className="text-gray-600 mb-4">
            To complete your referral, please click the button below to open the Google Form with your information pre-filled.
            You'll just need to review and submit the form.
          </p>
          
          <div className="flex justify-center">
            <Button
              className="flex items-center gap-2"
              onClick={() => window.open(directSubmitUrl!, '_blank')}
            >
              Complete in Google Forms <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="text-center mt-5">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setFormSubmitted(false)}
          >
            Return to Form
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Card className="bg-neutral-50 rounded-xl shadow-md p-6 md:p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Client Information */}
          <div id="client-info" style={{ scrollMarginTop: "100px" }}>
            <h3 className="text-xl font-semibold font-heading text-neutral-800 mb-4">Client Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="client.name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-neutral-700 font-medium mb-1">Client Full Name*</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="client.dob"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-neutral-700 font-medium mb-1">Date of Birth*</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="date"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="client.phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-neutral-700 font-medium mb-1">Phone Number*</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="tel"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="client.email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-neutral-700 font-medium mb-1">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="client.address"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel className="block text-neutral-700 font-medium mb-1">Current Address</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Referring Social Worker Information */}
          <div>
            <h3 className="text-xl font-semibold font-heading text-neutral-800 mb-4">Referring Social Worker Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="referrer.name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-neutral-700 font-medium mb-1">Full Name*</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="referrer.organization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-neutral-700 font-medium mb-1">Organization*</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="referrer.phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-neutral-700 font-medium mb-1">Phone Number*</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="tel"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="referrer.email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-neutral-700 font-medium mb-1">Email Address*</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Services Requested */}
          <div>
            <h3 className="text-xl font-semibold font-heading text-neutral-800 mb-4">Services Requested</h3>
            <div className="space-y-3">
              <FormField
                control={form.control}
                name="services.transition"
                render={({ field }) => (
                  <FormItem className="flex items-start">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="mt-1 h-4 w-4 text-primary focus:ring-primary border-neutral-300 rounded"
                      />
                    </FormControl>
                    <div className="ml-2 block">
                      <FormLabel className="font-medium text-neutral-700">Housing Transition Services</FormLabel>
                      <p className="block text-neutral-500 text-sm">Assistance securing housing, application support, and move-in coordination</p>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="services.sustaining"
                render={({ field }) => (
                  <FormItem className="flex items-start">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="mt-1 h-4 w-4 text-primary focus:ring-primary border-neutral-300 rounded"
                      />
                    </FormControl>
                    <div className="ml-2 block">
                      <FormLabel className="font-medium text-neutral-700">Housing Sustaining Services</FormLabel>
                      <p className="block text-neutral-500 text-sm">Living skills development, landlord mediation, and early intervention for housing issues</p>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="services.consultation"
                render={({ field }) => (
                  <FormItem className="flex items-start">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="mt-1 h-4 w-4 text-primary focus:ring-primary border-neutral-300 rounded"
                      />
                    </FormControl>
                    <div className="ml-2 block">
                      <FormLabel className="font-medium text-neutral-700">Housing Consultation Services</FormLabel>
                      <p className="block text-neutral-500 text-sm">Comprehensive assessments, person-centered planning, and barrier identification strategies</p>
                    </div>
                  </FormItem>
                )}
              />
              
              {form.formState.errors.services?.root && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.services.root.message}</p>
              )}
            </div>
          </div>

          {/* Additional Notes */}
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-neutral-700 font-medium mb-1">Additional Notes</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={4}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Please provide any additional information that would help us better serve this client."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Consent Confirmation */}
          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem className="flex items-start">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="mt-1 h-4 w-4 text-primary focus:ring-primary border-neutral-300 rounded"
                  />
                </FormControl>
                <div className="ml-2 block">
                  <FormLabel className="text-neutral-600 text-sm">
                    I confirm that I have obtained the client's consent to share their information with Lakeside Health.
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="pt-2">
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white py-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Referral"}
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default ReferralFormGoogleForm;