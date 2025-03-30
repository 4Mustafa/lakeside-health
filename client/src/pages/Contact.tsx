import ContactForm from "@/components/forms/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We're here to answer your questions and provide information about our Housing Stabilization Services.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Address</h4>
                    <p className="text-neutral-600">123 Community Lane<br />Cityville, State 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Phone</h4>
                    <p className="text-neutral-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Email</h4>
                    <p className="text-neutral-600">info@housingstability.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Hours of Operation</h4>
                    <p className="text-neutral-600">Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: 10:00 AM - 2:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-neutral-800 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <ContactForm />
          </div>
        </div>
        
        <div className="mt-12">
          <div className="bg-neutral-50 rounded-xl shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Contact Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="font-bold text-lg mb-2">What is the best way to reach your team?</h3>
                <p className="text-neutral-600">
                  For general inquiries, you can reach us by phone, email, or through our contact form. If you're a social worker looking to make a referral, please use our dedicated referral form for faster processing.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">Do you offer emergency housing assistance?</h3>
                <p className="text-neutral-600">
                  While we don't provide emergency shelter directly, we can connect you with emergency resources in our community. Please call our office directly for immediate assistance with urgent housing needs.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">How quickly will I receive a response?</h3>
                <p className="text-neutral-600">
                  We strive to respond to all inquiries within 1-2 business days. For urgent matters, we recommend calling our office directly during business hours.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">Can I schedule an appointment to discuss my housing needs?</h3>
                <p className="text-neutral-600">
                  Yes, we offer in-person and virtual appointments. Please contact us to schedule a time to meet with one of our housing specialists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
