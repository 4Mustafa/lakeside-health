import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { HomeIcon, ShieldCheck, MessageCircle } from "lucide-react";

const services = [
  {
    icon: <HomeIcon className="text-primary h-6 w-6" />,
    title: "Transition Services",
    description: "Supporting individuals as they move into new housing, ensuring a smooth transition and initial stability."
  },
  {
    icon: <ShieldCheck className="text-primary h-6 w-6" />,
    title: "Sustaining Services",
    description: "Ongoing support to help clients maintain their housing, navigate challenges, and build community connections."
  },
  {
    icon: <MessageCircle className="text-primary h-6 w-6" />,
    title: "Housing Consultation",
    description: "Expert guidance on housing options, rights, and resources available in your community."
  }
];

const ServiceOverview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-800 mb-4">How We Can Help</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">Our Housing Stabilization Services are designed to provide comprehensive support at every stage of your housing journey.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-neutral-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-neutral-800 mb-2">{service.title}</h3>
              <p className="text-neutral-600">{service.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services">
            <a className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors">Learn More About Our Services</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
