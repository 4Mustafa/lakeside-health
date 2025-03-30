import Hero from "@/components/home/Hero";
import ServiceOverview from "@/components/home/ServiceOverview";
import AboutSection from "@/components/home/AboutSection";
import FAQSection from "@/components/home/FAQSection";
import BlogPreviewSection from "@/components/home/BlogPreviewSection";
import ServicesDetailSection from "@/components/services/ServicesDetailSection";
import ReferralForm from "@/components/forms/ReferralForm";
import ContactForm from "@/components/forms/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Home = () => {
  return (
    <>
      <Hero />
      <ServiceOverview />
      <AboutSection />
      <ServicesDetailSection />
      
      <section id="referral" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-800 mb-4">Make a Referral</h2>
              <p className="text-lg text-neutral-600">For social workers and service providers to refer clients to our Housing Stabilization Services.</p>
            </div>
            
            <ReferralForm />
          </div>
        </div>
      </section>
      
      <FAQSection />
      <BlogPreviewSection />
      
      <section id="contact" className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-800 mb-4">Contact Us</h2>
              <p className="text-lg text-neutral-600 mb-8">We're here to answer your questions and provide information about our Housing Stabilization Services.</p>
              
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
            
            <div className="md:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
