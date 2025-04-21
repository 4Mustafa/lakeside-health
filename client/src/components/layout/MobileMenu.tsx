import { Link, useLocation } from "wouter";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [location] = useLocation();

  return (
    <div 
      className={`fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 border-b flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/images/lakeside-logo.png" 
            alt="Lakeside Health logo" 
            className="w-8 h-8 mr-2"
          />
          <span className="text-primary text-lg font-bold font-heading">Lakeside <span className="text-[#4ECDC4]">Health</span></span>
        </div>
        <button className="text-neutral-700 focus:outline-none" onClick={onClose}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <nav className="flex flex-col p-4 space-y-4 font-medium">
        <Link href="/">
          <div 
            className={`text-neutral-700 hover:text-primary transition-colors py-2 cursor-pointer ${location === "/" ? "text-primary" : ""}`}
            onClick={onClose}
          >
            Home
          </div>
        </Link>
        <Link href="/about">
          <div 
            className={`text-neutral-700 hover:text-primary transition-colors py-2 cursor-pointer ${location === "/about" ? "text-primary" : ""}`}
            onClick={onClose}
          >
            About Us
          </div>
        </Link>
        <Link href="/services">
          <div 
            className={`text-neutral-700 hover:text-primary transition-colors py-2 cursor-pointer ${location === "/services" ? "text-primary" : ""}`}
            onClick={onClose}
          >
            Services
          </div>
        </Link>
        <Link href="/testimonials">
          <div 
            className={`text-neutral-700 hover:text-primary transition-colors py-2 cursor-pointer ${location === "/testimonials" ? "text-primary" : ""}`}
            onClick={onClose}
          >
            Testimonials
          </div>
        </Link>
        <Link href="/faq">
          <div 
            className={`text-neutral-700 hover:text-primary transition-colors py-2 cursor-pointer ${location === "/faq" ? "text-primary" : ""}`}
            onClick={onClose}
          >
            FAQ
          </div>
        </Link>
        <Link href="/#referral">
          <div 
            className="bg-primary text-[#4ECDC4] hover:text-primary hover:bg-white hover:border hover:border-primary font-semibold px-5 py-2 rounded-lg transition-all duration-300 text-center mt-4 cursor-pointer shadow-sm hover:shadow-md"
            onClick={onClose}
          >
            Make a Referral
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
