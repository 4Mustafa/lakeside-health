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
              <a className="flex items-center">
                <img 
                  src="/images/lakeside-logo.png" 
                  alt="Lakeside Health logo" 
                  className="w-10 h-10 mr-3"
                />
                <span className="text-primary text-xl font-bold font-heading">Lakeside <span className="text-[#4ECDC4]">Health</span></span>
              </a>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 font-medium">
            <Link href="/">
              <a className={`text-neutral-700 hover:text-primary transition-colors py-2 ${location === "/" ? "text-primary" : ""}`}>Home</a>
            </Link>
            <Link href="/about">
              <a className={`text-neutral-700 hover:text-primary transition-colors py-2 ${location === "/about" ? "text-primary" : ""}`}>About Us</a>
            </Link>
            <Link href="/services">
              <a className={`text-neutral-700 hover:text-primary transition-colors py-2 ${location === "/services" ? "text-primary" : ""}`}>Services</a>
            </Link>
            <Link href="/testimonials">
              <a className={`text-neutral-700 hover:text-primary transition-colors py-2 ${location === "/testimonials" ? "text-primary" : ""}`}>Testimonials</a>
            </Link>
            <Link href="/faq">
              <a className={`text-neutral-700 hover:text-primary transition-colors py-2 ${location === "/faq" ? "text-primary" : ""}`}>FAQ</a>
            </Link>
          </nav>
          <div className="hidden md:block">
            <Link href="/referral#client-info">
              <a className="bg-primary hover:bg-primary/90 text-white font-semibold px-5 py-2 rounded-lg transition-colors">Make a Referral</a>
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
