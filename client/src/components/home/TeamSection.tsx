const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Program Director",
    bio: "10+ years experience in housing services and community support programs."
  },
  {
    name: "Michael Rodriguez",
    role: "Housing Specialist",
    bio: "Expert in navigating housing regulations and building landlord relationships."
  },
  {
    name: "Lisa Chen",
    role: "Case Manager",
    bio: "Dedicated to providing holistic support to clients throughout their housing journey."
  },
  {
    name: "David Washington",
    role: "Community Liaison",
    bio: "Creates partnerships with local organizations to enhance our service offerings."
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-800 mb-4">Our Dedicated Team</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">Meet the professionals committed to helping you achieve housing stability.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                <svg className="w-24 h-24 text-primary/30" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading text-neutral-800">{member.name}</h3>
              <p className="text-[#4ECDC4] font-medium mb-2">{member.role}</p>
              <p className="text-neutral-600 text-sm mb-4">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
