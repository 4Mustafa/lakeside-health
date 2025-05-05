import { Link } from "wouter";
import { useCallback } from "react";

const Footer = () => {
  // Function to scroll to top when a link is clicked
  const handleLinkClick = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  
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
              <li><Link href="/" onClick={handleLinkClick}><div className="text-neutral-300 hover:text-[#4ECDC4] transition-all duration-300 cursor-pointer">Home</div></Link></li>
              <li><Link href="/about" onClick={handleLinkClick}><div className="text-neutral-300 hover:text-[#4ECDC4] transition-all duration-300 cursor-pointer">About Us</div></Link></li>
              <li><Link href="/services" onClick={handleLinkClick}><div className="text-neutral-300 hover:text-[#4ECDC4] transition-all duration-300 cursor-pointer">Services</div></Link></li>
              <li><Link href="/referral" onClick={handleLinkClick}><div className="text-neutral-300 hover:text-[#4ECDC4] transition-all duration-300 cursor-pointer">Make a Referral</div></Link></li>
              <li><Link href="/faq" onClick={handleLinkClick}><div className="text-neutral-300 hover:text-[#4ECDC4] transition-all duration-300 cursor-pointer">FAQ</div></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" onClick={(e) => { e.preventDefault(); window.location.href = '/services'; handleLinkClick(); }}><div className="text-neutral-300 hover:text-[#4ECDC4] transition-all duration-300 cursor-pointer">Housing Transition</div></Link></li>
              <li><Link href="/services" onClick={(e) => { e.preventDefault(); window.location.href = '/services'; handleLinkClick(); }}><div className="text-neutral-300 hover:text-[#4ECDC4] transition-all duration-300 cursor-pointer">Housing Sustaining</div></Link></li>
              <li><Link href="/services" onClick={(e) => { e.preventDefault(); window.location.href = '/services'; handleLinkClick(); }}><div className="text-neutral-300 hover:text-[#4ECDC4] transition-all duration-300 cursor-pointer">Housing Consultation</div></Link></li>
              <li><Link href="/admin"><div className="text-neutral-300 hover:text-[#4ECDC4] transition-all duration-300 cursor-pointer">Admin</div></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-2"></i>
                <span>info@lakesidehealth.org</span>
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
