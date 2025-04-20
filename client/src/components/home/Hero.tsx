import { Link } from "wouter";

const Hero = () => {
  return (
    <section id="home" className="bg-white text-primary py-14 md:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <div className="flex items-center mb-6">
              <img 
                src="/images/lakeside-logo.png" 
                alt="Lakeside Health logo" 
                className="w-16 h-16 mr-4"
              />
              <h2 className="text-2xl font-bold text-primary">Lakeside Health</h2>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-primary">
              Where compassionate care meets excellence
            </h1>
            <p className="text-lg text-neutral-700 mb-8">
              We help individuals and families maintain their health and wellbeing with personalized healthcare services and a commitment to community wellness.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/services">
                <a className="bg-primary text-white hover:bg-primary/90 font-semibold px-8 py-3 rounded-md transition-colors text-center">
                  OUR SERVICES
                </a>
              </Link>
              <Link href="/referral">
                <a className="bg-white border border-primary text-primary hover:bg-primary/5 font-semibold px-8 py-3 rounded-md transition-colors text-center">
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
              <div className="bg-primary/10 rounded-full w-80 h-80 absolute -top-10 -left-10 z-0"></div>
              <div className="bg-white border border-primary/20 rounded-lg shadow-lg p-6 z-10 relative">
                <img 
                  src="/images/lakeside-logo.png" 
                  alt="Lakeside Health logo" 
                  className="w-full max-w-md h-auto object-contain"
                />
                <div className="mt-6 bg-gray-50 p-4 rounded-md">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-primary">Patient Portal</div>
                    <div className="text-xs text-gray-500">Secure Access</div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-3/4 mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;