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
          <div className="md:w-1/2">
            <svg className="w-full h-auto" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="800" height="600" rx="10" fill="#E6F0FF" />
              <path d="M400 100L600 300H500V500H300V300H200L400 100Z" fill="#2A5DB0" fillOpacity="0.8" />
              <rect x="325" y="350" width="50" height="50" rx="5" fill="white" />
              <rect x="425" y="350" width="50" height="50" rx="5" fill="white" />
              <rect x="325" y="425" width="150" height="75" rx="5" fill="#4ECDC4" />
              <circle cx="200" cy="200" r="50" fill="#FFD1D1" />
              <path d="M650 150C650 177.614 627.614 200 600 200C572.386 200 550 177.614 550 150C550 122.386 572.386 100 600 100C627.614 100 650 122.386 650 150Z" fill="#FF6B6B" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
