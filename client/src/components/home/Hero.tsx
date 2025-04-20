import { Link } from "wouter";

const Hero = () => {
  return (
    <section id="home" className="bg-white text-primary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-14 md:py-20">
        <div className="text-center mb-10">
          <img 
            src="/images/lakeside-logo.png" 
            alt="Lakeside Health logo" 
            className="w-40 h-40 mx-auto mb-6 object-contain"
          />
          <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight text-primary mb-4">Lakeside Health</h1>
          <p className="text-lg md:text-xl mb-8 text-neutral-700 max-w-3xl mx-auto">We offer comprehensive healthcare services designed to help individuals and families maintain their health and wellbeing in their communities.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/services">
              <a className="bg-primary text-white hover:bg-primary/90 font-semibold px-6 py-3 rounded-lg transition-colors text-center">Our Services</a>
            </Link>
            <Link href="/referral">
              <a className="bg-[#4ECDC4] hover:bg-[#38A39A] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center">Make a Referral</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;