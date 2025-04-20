import { Link } from "wouter";

const Hero = () => {
  return (
    <section id="home" className="bg-white text-primary py-14 md:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-primary">
              Where compassionate care meets excellence
            </h1>
            <p className="text-lg text-neutral-700 mb-8">
              We help individuals and families maintain their health and wellbeing with personalized healthcare services and a commitment to community wellness.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/services">
                <div className="bg-primary text-white hover:bg-primary/90 font-semibold px-8 py-3 rounded-md transition-colors text-center cursor-pointer">
                  OUR SERVICES
                </div>
              </Link>
              <Link href="/referral">
                <div className="bg-white border border-primary text-primary hover:bg-primary/5 font-semibold px-8 py-3 rounded-md transition-colors text-center cursor-pointer">
                  MAKE A REFERRAL
                </div>
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="p-6">
              <p className="text-lg text-neutral-700">
                Lakeside Health provides comprehensive healthcare services designed to support your wellbeing at every stage of life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;