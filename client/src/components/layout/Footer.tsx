import { Link } from "wouter";
import { useCallback } from "react";
import { scrollToTop, navigateTo } from "@/lib/utils";
import { useLocation } from "wouter";

const Footer = () => {
  // Function to scroll to top when a link is clicked
  const handleLinkClick = useCallback(() => {
    scrollToTop();
  }, []);
    const [, setLocation] = useLocation();

  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="text-white text-2xl font-bold font-heading">Lakeside <span className="text-[#4ECDC4]">Health</span></span>
            </div>
            <p className="text-neutral-300 mb-6">Providing Housing Stabilization Services to help individuals find, secure, and maintain safe and stable housing in their communities.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><div onClick={() => setLocation("/")} className="text-neutral-300 hover:text-[#4ECDC4] transition-all duration-300 cursor-pointer">Home</div></li>
              <li><div onClick={() => setLocation("/about")} className="text-neutral-300 hover:text-[#4ECDC4] transition-all duration-300 cursor-pointer">About Us</div></li>
              <li><div onClick={() => setLocation("/services")} className="text-neutral-300 hover:text-[#4ECDC4] transition-all duration-300 cursor-pointer">Services</div></li>
              <li><div onClick={() => setLocation("/referral")} className="text-neutral-300 hover:text-[#4ECDC4] transition-all duration-300 cursor-pointer">Make a Referral</div></li>
              <li><div onClick={() => setLocation("/faq")} className="text-neutral-300 hover:text-[#4ECDC4] transition-all duration-300 cursor-pointer">FAQ</div></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><div onClick={() => setLocation("/services")} className="text-neutral-300 hover:text-[#4ECDC4] transition-all duration-300 cursor-pointer">Housing Transition</div></li>
              <li><div onClick={() => setLocation("/services")} className="text-neutral-300 hover:text-[#4ECDC4] transition-all duration-300 cursor-pointer">Housing Sustaining</div></li>
              <li><div onClick={() => setLocation("/services")} className="text-neutral-300 hover:text-[#4ECDC4] transition-all duration-300 cursor-pointer">Housing Consultation</div></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-2"></i>
                <span>lakesidehealthmn@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-700">
          <div className="flex justify-center items-center">
            <p className="text-neutral-400 text-sm">&copy; {new Date().getFullYear()} Lakeside Health. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
