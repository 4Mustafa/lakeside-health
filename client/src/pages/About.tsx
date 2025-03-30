import AboutSection from "@/components/home/AboutSection";
import TeamSection from "@/components/home/TeamSection";

const About = () => {
  return (
    <div className="pt-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About Us</h1>
      </div>
      <AboutSection />
      <TeamSection />
      
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-800 mb-8 text-center">Our Mission & Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-lg text-neutral-600 mb-6">
                The Housing Stabilization Service is dedicated to promoting stable, secure housing for all individuals and families in our community. We believe that housing is a fundamental right and a foundation for health, wellbeing, and successful participation in society.
              </p>
              <p className="text-lg text-neutral-600">
                Through comprehensive support services, education, and advocacy, we work to prevent homelessness, assist those in housing transitions, and help individuals maintain long-term housing stability.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 text-[#4ECDC4] mt-1">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-800">Dignity & Respect</h4>
                    <p className="text-neutral-600">We honor the inherent worth and dignity of every person, treating all with respect and compassion.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-[#4ECDC4] mt-1">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-800">Inclusivity & Equity</h4>
                    <p className="text-neutral-600">We are committed to serving all members of our community and addressing systemic barriers to housing.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-[#4ECDC4] mt-1">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-800">Empowerment</h4>
                    <p className="text-neutral-600">We believe in building capacity and self-sufficiency, helping clients develop skills for long-term success.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-[#4ECDC4] mt-1">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-800">Collaboration</h4>
                    <p className="text-neutral-600">We work closely with community partners to provide comprehensive, coordinated support.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-800 mb-8 text-center">Our History</h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-neutral-600 mb-6">
              The Housing Stabilization Service was founded in 2010 in response to the growing housing crisis affecting our community. What began as a small initiative by a group of concerned social workers has grown into a comprehensive service organization that has helped thousands of individuals and families find and maintain stable housing.
            </p>
            <p className="text-lg text-neutral-600 mb-6">
              Over the years, we have expanded our services to address the evolving needs of our community, developing specialized programs for families, seniors, and individuals transitioning from homelessness. Our evidence-based approaches and commitment to client-centered care have established us as a leader in housing stability services.
            </p>
            <p className="text-lg text-neutral-600">
              Today, we continue to grow and adapt, forging new partnerships and implementing innovative strategies to address the complex housing challenges faced by our community members. Through it all, we remain dedicated to our core mission of promoting housing stability as a foundation for health, wellbeing, and community participation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
