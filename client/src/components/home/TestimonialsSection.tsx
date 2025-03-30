import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "After losing my job during the pandemic, I was facing eviction and didn't know where to turn. The Housing Stabilization team not only helped me find emergency assistance to stay in my home but also connected me with employment resources. Today I'm back on my feet with a stable job and housing.",
    name: "Maria T.",
    role: "Transition Services Client"
  },
  {
    quote: "As a senior on a fixed income, I was struggling to manage my housing costs and was considering giving up my apartment. The Sustaining Services program helped me create a budget, apply for energy assistance, and even negotiate a more affordable rent with my landlord. I'm now able to stay in my home of 15 years.",
    name: "Robert J.",
    role: "Sustaining Services Client"
  },
  {
    quote: "As a social worker, I've referred numerous clients to the Housing Stabilization Service. Their comprehensive approach and dedication to each client makes a tremendous difference. They don't just help people find housing—they provide the support needed to maintain it long-term.",
    name: "Jennifer L.",
    role: "Referring Social Worker"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-800 mb-4">Success Stories</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">Hear from individuals and families who have found stability through our services.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-sm h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="text-primary">
                    <Quote className="h-6 w-6" />
                  </div>
                </div>
                <p className="text-neutral-600 mb-6 italic flex-grow">{testimonial.quote}</p>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary/50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800">{testimonial.name}</h4>
                    <p className="text-neutral-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
