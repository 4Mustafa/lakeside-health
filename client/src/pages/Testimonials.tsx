import TestimonialsSection from "@/components/home/TestimonialsSection";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const additionalTestimonials = [
  {
    quote: "When my landlord threatened eviction after I lost my job, I was terrified of becoming homeless with my two children. The Housing Stabilization team stepped in and not only helped me negotiate with my landlord but also connected me with rental assistance programs. Their support gave me the breathing room I needed to find new employment.",
    name: "Thomas K.",
    role: "Single Parent"
  },
  {
    quote: "As a senior citizen living on a fixed income, I was struggling to keep up with rising housing costs. The Housing Stabilization Service helped me apply for senior housing subsidies and assisted me through the entire application process. I'm now in an affordable apartment I love, with manageable monthly payments.",
    name: "Eleanor P.",
    role: "Senior Client"
  },
  {
    quote: "After experiencing homelessness for nearly a year, I had lost hope of ever having my own place again. The transition services program didn't just help me find housing—they helped me rebuild my life. From assistance with security deposits to connecting me with furniture donations, they thought of everything.",
    name: "Marcus J.",
    role: "Transition Services Client"
  },
  {
    quote: "The sustaining services program has been instrumental in helping our clients maintain housing stability. Their holistic approach addresses not just immediate housing needs but also the underlying factors that contribute to housing insecurity. It's made a tremendous difference in our clients' success rates.",
    name: "Dr. Sarah Williams",
    role: "Local Healthcare Provider"
  },
  {
    quote: "As someone with disabilities, finding accessible housing that I could afford seemed impossible. The Housing Consultation team was knowledgeable about accessibility requirements and fair housing laws, and they advocated on my behalf with potential landlords. They truly understood my unique needs.",
    name: "Rachel D.",
    role: "Housing Consultation Client"
  },
  {
    quote: "The Housing Stabilization Service has been an invaluable partner in our community's efforts to reduce homelessness. Their preventive approach has helped countless families avoid eviction, and their comprehensive support ensures that once housed, people stay housed.",
    name: "Mayor James Thompson",
    role: "City Official"
  }
];

const Testimonials = () => {
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Hear from individuals, families, and service providers who have experienced the impact of our Housing Stabilization Services.
          </p>
        </div>
        
        <TestimonialsSection />
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">More Client Experiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalTestimonials.map((testimonial, index) => (
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
        
        <div className="mt-16 text-center">
          <div className="bg-neutral-50 rounded-xl shadow-md p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Share Your Story</h2>
            <p className="text-lg text-neutral-600 mb-8">
              Have you been impacted by our Housing Stabilization Services? We'd love to hear about your experience and how our programs have made a difference in your life or the lives of your clients.
            </p>
            <a href="/contact" className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Submit Your Testimonial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
