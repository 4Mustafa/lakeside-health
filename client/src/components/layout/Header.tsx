import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`bg-white shadow-sm sticky top-0 z-50 transition-shadow ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <img 
                  src="/images/lakeside-logo.png" 
                  alt="Lakeside Health logo" 
                  className="w-10 h-10 mr-3"
                />
                <span className="text-primary text-xl font-bold font-heading">Lakeside <span className="text-[#4ECDC4]">Health</span></span>
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 font-medium">
            <Link href="/">
              <div className={`text-neutral-700 hover:text-[#4ECDC4] transition-all duration-300 py-2 cursor-pointer ${location === "/" ? "text-primary" : ""}`}>Home</div>
            </Link>
            <Link href="/about">
              <div className={`text-neutral-700 hover:text-[#4ECDC4] transition-all duration-300 py-2 cursor-pointer ${location === "/about" ? "text-primary" : ""}`}>About Us</div>
            </Link>
            <Link href="/services">
              <div className={`text-neutral-700 hover:text-[#4ECDC4] transition-all duration-300 py-2 cursor-pointer ${location === "/services" ? "text-primary" : ""}`}>Services</div>
            </Link>
            <Link href="/testimonials">
              <div className={`text-neutral-700 hover:text-[#4ECDC4] transition-all duration-300 py-2 cursor-pointer ${location === "/testimonials" ? "text-primary" : ""}`}>Testimonials</div>
            </Link>
            <Link href="/faq">
              <div className={`text-neutral-700 hover:text-[#4ECDC4] transition-all duration-300 py-2 cursor-pointer ${location === "/faq" ? "text-primary" : ""}`}>FAQ</div>
            </Link>
          </nav>
          <div className="hidden md:block">
            <Link href="/#referral">
              <div className="bg-primary text-[#4ECDC4] hover:text-white hover:bg-[#4ECDC4] hover:border-transparent font-semibold px-5 py-2 rounded-lg transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:scale-105">Make a Referral</div>
            </Link>
          </div>
          <button id="mobile-menu-button" className="md:hidden text-neutral-700 focus:outline-none" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
};

export default Header;
