import { useState, FormEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { scrollToTop } from "@/lib/utils";

// No global declarations needed anymore

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

const ReferralForm = () => {
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

  // Function to handle direct form submission to Google Forms
  const handleGoogleFormSubmit = async (data: ReferralFormValues) => {
    setIsSubmitting(true);
    try {
      // Set up form object with the data - these field names need to match your Google Form entry IDs
      const formData = new FormData();
      
      // Client Information
      formData.append("entry.XXXXX1", data.client.name); // Replace XXXXX1 with actual entry ID
      formData.append("entry.XXXXX2", data.client.dob);  // Replace XXXXX2 with actual entry ID
      formData.append("entry.XXXXX3", data.client.phone); // And so on...
      formData.append("entry.XXXXX4", data.client.email || "");
      formData.append("entry.XXXXX5", data.client.address || "");
      
      // Referring Social Worker Information
      formData.append("entry.XXXXX6", data.referrer.name);
      formData.append("entry.XXXXX7", data.referrer.organization);
      formData.append("entry.XXXXX8", data.referrer.phone);
      formData.append("entry.XXXXX9", data.referrer.email);
      
      // Services Requested
      formData.append("entry.XXXX10", data.services.transition ? "Housing Transition Services" : "");
      formData.append("entry.XXXX11", data.services.sustaining ? "Housing Sustaining Services" : "");
      formData.append("entry.XXXX12", data.services.consultation ? "Housing Consultation Services" : "");
      
      // Additional Notes
      formData.append("entry.XXXX13", data.notes || "");
      
      // Submit to Google Forms using the Fetch API
      const response = await fetch(
        'https://docs.google.com/forms/d/e/YOUR_FORM_ID_HERE/formResponse', // Replace with your actual Google Form ID
        {
          method: 'POST',
          mode: 'no-cors', // Important for CORS issues
          body: formData
        }
      );
      
      // Since 'no-cors' mode doesn't give us response details, we assume success
      setFormSubmitted(true);
      
      // Simple approach: scroll window to top immediately
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Also try again after a short delay
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
      
      toast({
        title: "Referral Submitted",
        description: "We've received your referral and will be in touch soon.",
        duration: 5000,
      });
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your referral. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
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
        <h3 className="text-xl font-semibold font-heading mb-2">Referral Submitted Successfully</h3>
        <p className="mb-4">Thank you for your referral. Our team will review the information and contact you within 1-2 business days.</p>
        <p className="text-sm">A confirmation email has been sent to your email address.</p>
      </div>
    );
  }

  return (
    <Card className="bg-neutral-50 rounded-xl shadow-md p-6 md:p-8 referral-form-container">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 referral-form">
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
                    I confirm that I have obtained the client's consent to share their information for the purpose of this referral, and that they understand how their information will be used.
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full bg-primary text-white hover:text-white hover:bg-[#4ECDC4] hover:border-transparent font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
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

export default ReferralForm;
