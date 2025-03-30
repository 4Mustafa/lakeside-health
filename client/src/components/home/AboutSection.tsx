import { Link } from "wouter";
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
    <section id="about" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <svg className="w-full h-auto rounded-lg shadow-lg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="800" height="600" rx="10" fill="#F0F4F8" />
              <rect x="50" y="50" width="700" height="500" rx="10" fill="#D1DAE8" />
              <circle cx="400" cy="180" r="100" fill="#B9C6DA" />
              <rect x="250" y="320" width="300" height="200" rx="10" fill="#8595AD" />
              <circle cx="325" cy="390" r="25" fill="#E9EEF6" />
              <circle cx="475" cy="390" r="25" fill="#E9EEF6" />
              <path d="M350 440H450" stroke="#E9EEF6" strokeWidth="10" strokeLinecap="round" />
            </svg>
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
            <Link href="/about">
              <a className="inline-block bg-neutral-800 hover:bg-neutral-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors">Meet Our Team</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
