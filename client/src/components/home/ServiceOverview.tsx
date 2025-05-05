import { Card } from "@/components/ui/card";
import { Home, UserCheck, ClipboardCheck, ShieldCheck } from "lucide-react";
import { navigateTo } from "@/lib/utils";

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
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-16">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">Housing Stabilization Services</h2>
            <p className="text-lg text-white/90">As a certified Minnesota Housing Stabilization Services provider, we deliver MA-billable services that complement your existing case management.</p>
            <div className="mt-8">
              <div 
                onClick={() => navigateTo("/services")} 
                className="inline-block bg-white border border-white text-primary hover:text-white hover:bg-[#4ECDC4] hover:border-transparent font-semibold px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
              >
                View Our Detailed Service Continuum
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-neutral-50 rounded-xl p-7 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 h-full"
              >
                <div className="flex flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold font-heading text-neutral-800">{service.title}</h3>
                  </div>
                  <div className="mt-3 pl-[4.5rem]">
                    <p className="text-neutral-600 text-lg leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
