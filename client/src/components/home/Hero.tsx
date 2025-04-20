import { Link } from "wouter";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-4">Helping You Find Stability in Housing</h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">We offer comprehensive services designed to help individuals and families find and maintain stable housing in their communities.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/services">
                <a className="bg-white text-primary hover:bg-neutral-100 font-semibold px-6 py-3 rounded-lg transition-colors text-center">Our Services</a>
              </Link>
              <Link href="/referral">
                <a className="bg-[#4ECDC4] hover:bg-[#38A39A] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center">Make a Referral</a>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/attached_assets/Lakeside health.png" 
              alt="Lakeside Health logo" 
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
