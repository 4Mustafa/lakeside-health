import { Link } from "wouter";

const Hero = () => {
  return (
    <section id="home" className="bg-blue-50 text-primary py-14 md:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-primary">
              Lakeside Health is where healing happens
            </h1>
            <p className="text-lg text-neutral-700 mb-8">
              With compassionate care and advanced treatments, we help individuals and families maintain their health and wellbeing in their communities.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/services">
                <a className="bg-primary text-white hover:bg-primary/90 font-semibold px-8 py-3 rounded-md transition-colors text-center">
                  OUR SERVICES
                </a>
              </Link>
              <Link href="/referral">
                <a className="bg-white border border-neutral-300 text-neutral-700 hover:bg-gray-50 font-semibold px-8 py-3 rounded-md transition-colors text-center">
                  MAKE A REFERRAL
                </a>
              </Link>
            </div>
            <p className="text-sm text-neutral-500 mt-4">
              Need immediate assistance? <a href="tel:5551234567" className="text-primary underline">Call us</a>
            </p>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="rounded-full bg-yellow-300 w-60 h-60 absolute -top-4 -left-4 z-0"></div>
              <div className="bg-white rounded-lg shadow-lg p-6 z-10 relative">
                <img 
                  src="/images/lakeside-logo.png" 
                  alt="Lakeside Health logo" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;