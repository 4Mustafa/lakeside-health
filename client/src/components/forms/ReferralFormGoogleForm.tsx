import { useState, FormEvent } from "react";
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
import { CheckCircle2 } from "lucide-react";
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

  // Function to handle Google Form submission via direct URL with prefilled values
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
      
      // Create URL with parameters for the Google Form
      const formUrl = new URL('https://docs.google.com/forms/d/e/1FAIpQLSfwlTQbIV3BeQmz2FKy8sMdpkNAXitDj1KXUf_3-qeWzhwvhw/viewform');
      
      // Add the entry parameter with the consolidated data
      formUrl.searchParams.append('entry.1052175947', allFormData);
      
      // Store success state in sessionStorage before redirecting
      sessionStorage.setItem('referralSubmitted', 'true');
      
      // Open the form in a new tab/window
      window.open(formUrl.toString(), '_blank');
      
      // Set local success state
      setFormSubmitted(true);
      
      // Show toast notification
      toast({
        title: "Referral Form Ready",
        description: "Your referral information has been prepared. Please submit the form in the new window.",
        duration: 8000,
      });
    } catch (error: any) {
      toast({
        title: "Preparation Error",
        description: "There was a problem preparing your referral. Please try again.",
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

  if (formSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
        <div className="text-green-500 text-3xl mb-4">
          <CheckCircle2 className="h-12 w-12 mx-auto" />
        </div>
        <h3 className="text-xl font-semibold font-heading mb-2">Referral Form Opened</h3>
        <p className="mb-4">Your referral information has been transferred to Google Forms. Please complete submission in the newly opened window.</p>
        <p className="text-sm mb-4">Our team will review the information and contact you within 1-2 business days.</p>
        <Button 
          variant="outline" 
          className="mt-2" 
          onClick={() => setFormSubmitted(false)}
        >
          Return to Form
        </Button>
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