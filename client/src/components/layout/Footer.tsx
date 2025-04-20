import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="text-white text-2xl font-bold font-heading">Housing<span className="text-muted-teal">Stability</span></span>
            </div>
            <p className="text-neutral-300 mb-6">Providing comprehensive support to help individuals and families achieve and maintain housing stability.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/"><a className="text-neutral-300 hover:text-soft-gold transition-colors">Home</a></Link></li>
              <li><Link href="/about"><a className="text-neutral-300 hover:text-soft-gold transition-colors">About Us</a></Link></li>
              <li><Link href="/services"><a className="text-neutral-300 hover:text-soft-gold transition-colors">Services</a></Link></li>
              <li><Link href="/testimonials"><a className="text-neutral-300 hover:text-soft-gold transition-colors">Testimonials</a></Link></li>
              <li><Link href="/faq"><a className="text-neutral-300 hover:text-soft-gold transition-colors">FAQ</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services"><a className="text-neutral-300 hover:text-white transition-colors">Transition Services</a></Link></li>
              <li><Link href="/services"><a className="text-neutral-300 hover:text-white transition-colors">Sustaining Services</a></Link></li>
              <li><Link href="/services"><a className="text-neutral-300 hover:text-white transition-colors">Housing Consultation</a></Link></li>
              <li><Link href="/referral"><a className="text-neutral-300 hover:text-white transition-colors">Make a Referral</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-2"></i>
                <span>123 Community Lane<br/>Cityville, State 12345</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-2"></i>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-2"></i>
                <span>info@housingstability.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Housing Stabilization Services. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy"><a className="text-neutral-400 hover:text-white text-sm transition-colors">Privacy Policy</a></Link>
              <Link href="/terms"><a className="text-neutral-400 hover:text-white text-sm transition-colors">Terms of Service</a></Link>
              <Link href="/accessibility"><a className="text-neutral-400 hover:text-white text-sm transition-colors">Accessibility</a></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
