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
        <span className="text-primary text-xl font-bold font-heading">Housing<span className="text-[#4ECDC4]">Stability</span></span>
        <button className="text-neutral-700 focus:outline-none" onClick={onClose}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <nav className="flex flex-col p-4 space-y-4 font-medium">
        <Link href="/">
          <a 
            className={`text-neutral-700 hover:text-primary transition-colors py-2 ${location === "/" ? "text-primary" : ""}`}
            onClick={onClose}
          >
            Home
          </a>
        </Link>
        <Link href="/about">
          <a 
            className={`text-neutral-700 hover:text-primary transition-colors py-2 ${location === "/about" ? "text-primary" : ""}`}
            onClick={onClose}
          >
            About Us
          </a>
        </Link>
        <Link href="/services">
          <a 
            className={`text-neutral-700 hover:text-primary transition-colors py-2 ${location === "/services" ? "text-primary" : ""}`}
            onClick={onClose}
          >
            Services
          </a>
        </Link>
        <Link href="/testimonials">
          <a 
            className={`text-neutral-700 hover:text-primary transition-colors py-2 ${location === "/testimonials" ? "text-primary" : ""}`}
            onClick={onClose}
          >
            Testimonials
          </a>
        </Link>
        <Link href="/faq">
          <a 
            className={`text-neutral-700 hover:text-primary transition-colors py-2 ${location === "/faq" ? "text-primary" : ""}`}
            onClick={onClose}
          >
            FAQ
          </a>
        </Link>
        <Link href="/contact">
          <a 
            className={`text-neutral-700 hover:text-primary transition-colors py-2 ${location === "/contact" ? "text-primary" : ""}`}
            onClick={onClose}
          >
            Contact
          </a>
        </Link>
        <Link href="/referral#client-info">
          <a 
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-5 py-2 rounded-lg transition-colors text-center mt-4"
            onClick={onClose}
          >
            Make a Referral
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
