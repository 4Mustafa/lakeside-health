import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

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
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  subject: z.string().min(2, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const submitContact = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setFormSubmitted(true);
      form.reset();
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you as soon as possible.",
        duration: 5000,
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Error",
        description: error.message || "There was a problem sending your message. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    submitContact.mutate(data);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <h3 className="text-xl font-semibold font-heading text-neutral-800 mb-6">Send Us a Message</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-neutral-700 font-medium mb-1">Your Name*</FormLabel>
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
            name="email"
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
          
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-neutral-700 font-medium mb-1">Subject*</FormLabel>
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
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-neutral-700 font-medium mb-1">Message*</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={4}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="pt-2">
            <Button 
              type="submit" 
              className="w-full bg-primary text-white hover:text-white hover:bg-[#4ECDC4] hover:border-transparent font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
              disabled={submitContact.isPending}
            >
              {submitContact.isPending ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </Form>
      
      {/* Success Message */}
      {formSubmitted && (
        <div className="mt-4 bg-green-50 border border-green-200 text-green-800 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0 text-green-500">
              <CheckCircle className="h-5 w-5" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">Thank you for your message! We'll get back to you as soon as possible.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
