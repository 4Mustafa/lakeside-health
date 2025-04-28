import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      title: "Personalized Support",
      description: "Tailored services to meet individual needs"
    },
    {
      title: "Community Focused",
      description: "Building connections for lasting support"
    },
    {
      title: "Professional Team",
      description: "Experienced housing specialists"
    },
    {
      title: "Comprehensive Care",
      description: "Addressing all aspects of housing needs"
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 flex items-center justify-center">
            <div className="bg-white p-12 flex flex-col items-center max-w-md">
              <img 
                src="/images/lakeside-logo.png" 
                alt="Lakeside Health logo" 
                className="w-64 h-64 mb-6"
              />
              <div className="text-center">
                <h3 className="text-primary text-3xl font-bold font-heading">Lakeside <span className="text-[#4ECDC4]">Health</span></h3>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-800 mb-4">About Our Mission</h2>
            <p className="text-lg text-neutral-600 mb-6">Our organization is dedicated to the belief that stable housing is a fundamental right. We work tirelessly to provide comprehensive housing support services to vulnerable individuals and families in our community.</p>
            <p className="text-lg text-neutral-600 mb-6">With personalized care and professional expertise, we help our clients navigate the complex challenges of housing insecurity and build pathways to lasting stability.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 text-[#4ECDC4]">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800">{feature.title}</h4>
                    <p className="text-neutral-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
