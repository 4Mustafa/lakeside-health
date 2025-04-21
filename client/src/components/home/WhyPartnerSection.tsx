import { Check } from "lucide-react";

const benefits = [
  {
    title: "Seamless Referral Process",
    description: "Simple documentation requirements and responsive intake team"
  },
  {
    title: "Regular Progress Updates",
    description: "Consistent communication about client engagement and outcomes"
  },
  {
    title: "Trauma-Informed Approach",
    description: "Specialized in working with clients with complex histories"
  },
  {
    title: "Cross-System Collaboration",
    description: "Coordination with mental health, substance use, and healthcare providers"
  },
  {
    title: "Documentation for Care Plans",
    description: "Detailed reporting that supports your case management goals"
  }
];

const WhyPartnerSection = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Why Partner with Lakeside Health?
          </h2>
          
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-neutral-100"
              >
                <div className="bg-primary text-white p-1 rounded-full mr-4 mt-1 flex-shrink-0">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-1">{benefit.title}</h3>
                  <p className="text-neutral-700">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <div className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-lg">
              Ready to refer a client? Contact our referral coordinator today.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;