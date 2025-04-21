import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Home, UserCheck, ClipboardCheck, ShieldCheck, Activity } from "lucide-react";

const services = [
  {
    icon: <Home className="text-primary h-6 w-6" />,
    title: "Housing Consultation Services",
    description: "Comprehensive housing needs assessments, person-centered plans, and barrier identification with practical mitigation strategies."
  },
  {
    icon: <ClipboardCheck className="text-primary h-6 w-6" />,
    title: "Housing Transition Services",
    description: "Housing search assistance, application completion, landlord engagement, lease review, and move-in coordination."
  },
  {
    icon: <ShieldCheck className="text-primary h-6 w-6" />,
    title: "Housing Sustaining Services",
    description: "Independent living skills development, landlord mediation, lease compliance coaching, and financial management assistance."
  },
  {
    icon: <UserCheck className="text-primary h-6 w-6" />,
    title: "Cross-System Collaboration",
    description: "Coordination with mental health, substance use, and healthcare providers to ensure comprehensive client support."
  }
];

const ServiceOverview = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">Housing Stabilization Services</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">As a certified Minnesota Housing Stabilization Services provider, we deliver MA-billable services that complement your existing case management.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <div className="inline-block bg-white hover:bg-neutral-100 text-primary font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
              View Our Detailed Service Continuum
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
