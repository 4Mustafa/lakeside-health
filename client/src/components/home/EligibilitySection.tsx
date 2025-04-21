import { BadgeCheck } from "lucide-react";

const criteria = [
  "Be enrolled in Medical Assistance",
  "Have a documented disability or disabling condition",
  "Require support with obtaining or maintaining housing",
  "Meet at least one housing instability criterion as defined by DHS",
  "Have a completed Housing Focused Person-Centered Plan"
];

const EligibilitySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Eligibility Criteria for Referrals
            </h2>
            <p className="text-lg text-neutral-700 mb-8">
              To qualify for Housing Stabilization Services through Lakeside Health, your clients must meet the following criteria:
            </p>
            
            <div className="space-y-4">
              {criteria.map((item, index) => (
                <div key={index} className="flex items-center">
                  <BadgeCheck className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span className="text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 bg-primary/5 p-8 rounded-lg border border-primary/10">
            <h3 className="text-2xl font-bold text-primary mb-4">Referral Process</h3>
            <ol className="space-y-3 list-decimal list-inside text-neutral-700">
              <li className="pl-2"><span className="font-medium text-primary">Initial Consultation:</span> Contact our referral coordinator to discuss your client's situation</li>
              <li className="pl-2"><span className="font-medium text-primary">Documentation:</span> Submit the required eligibility documentation</li>
              <li className="pl-2"><span className="font-medium text-primary">Assessment Coordination:</span> Schedule a certified assessment if not already completed</li>
              <li className="pl-2"><span className="font-medium text-primary">Service Authorization:</span> Assist with MA service authorization paperwork</li>
              <li className="pl-2"><span className="font-medium text-primary">Warm Handoff:</span> Participate in an introduction meeting between your client and their housing specialist</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;