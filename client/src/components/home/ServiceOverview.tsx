import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { HeartPulse, Stethoscope, UserPlus } from "lucide-react";

const services = [
  {
    icon: <HeartPulse className="text-primary h-6 w-6" />,
    title: "Primary Care",
    description: "Comprehensive healthcare services for individuals and families, including preventive care, routine check-ups, and chronic disease management."
  },
  {
    icon: <Stethoscope className="text-primary h-6 w-6" />,
    title: "Specialty Services",
    description: "Specialized medical care including cardiology, pediatrics, and women's health services to address specific health needs."
  },
  {
    icon: <UserPlus className="text-primary h-6 w-6" />,
    title: "Community Outreach",
    description: "Health education, preventive screenings, and support services to improve health outcomes in our community."
  }
];

const ServiceOverview = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">Our Healthcare Services</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">Lakeside Health provides comprehensive healthcare services designed to support your wellbeing at every stage of life.</p>
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
            <a className="inline-block bg-white hover:bg-neutral-100 text-primary font-semibold px-6 py-3 rounded-lg transition-colors">Learn More About Our Services</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
