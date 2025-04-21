import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who is eligible for Housing Stabilization Services?",
    answer: "Our services are available to individuals and families who are at risk of losing their housing, currently experiencing housing instability, or transitioning to new housing. Eligibility may vary depending on the specific program, but we aim to be as inclusive as possible. Please contact us or submit a referral to discuss your specific situation."
  },
  {
    question: "Is there a cost for your services?",
    answer: "Most of our Housing Stabilization Services are provided at no cost to clients. We are funded through a combination of grants, donations, and partnerships with local government agencies. In some cases, specific programs may have eligibility requirements related to income or other factors."
  },
  {
    question: "How long does the referral process take?",
    answer: "Once we receive a completed referral form, our team will review it within 1-2 business days. We will then contact the referring social worker to gather any additional information needed and coordinate an intake meeting with the client. The entire process from referral to service initiation typically takes 5-7 business days, though we can expedite this process in urgent situations."
  },
  {
    question: "Can individuals refer themselves to your services?",
    answer: "Yes, individuals can contact us directly to inquire about our services. While many of our clients come through referrals from social workers and partner organizations, we welcome direct inquiries. Our intake team will work with you to determine your needs and eligibility for specific programs."
  },
  {
    question: "What geographic areas do you serve?",
    answer: "Our Housing Stabilization Services are currently available to residents in [Geographic Area]. We continue to expand our service area as resources allow. If you're outside our service area, please still contact us, as we may be able to refer you to partner organizations in your location."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">Find answers to common questions about our Housing Stabilization Services.</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-neutral-200 rounded-lg overflow-hidden">
                <button 
                  className="w-full flex justify-between items-center p-4 text-left font-semibold bg-white hover:bg-neutral-50 hover:text-[#4ECDC4] transition-all duration-300 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <ChevronDown 
                    className={`text-primary transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`} 
                  />
                </button>
                <div 
                  className={`bg-white px-4 pb-4 ${openIndex === index ? 'block' : 'hidden'}`}
                >
                  <p className="text-neutral-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
