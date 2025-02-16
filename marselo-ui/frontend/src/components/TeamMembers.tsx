const teamMembers = [
  {
    name: "Rafael Coutinho",
    role: "Software Engineer Student",
    photo: "https://avatars.githubusercontent.com/u/70056727?v=4",
    github: "https://github.com/c0utin",
    country: "🇧🇷",
  },
  {
    name: "Matheus Ribeiro",
    role: "Software Engineer Student",
    photo: "https://avatars.githubusercontent.com/u/124204749?v=4",
    github: "https://github.com/omatheu",
    country: "🇧🇷",
  },
];

export default function TeamSection() {
    return (
      <section className=" text-green-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
            Who we are
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="mb-6 relative">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-green-900 group-hover:border-yellow-400 transition-colors duration-300"
                  />
                </div>
                
                <div className="mb-4">
                  <h3 className="text-2xl lg:text-3xl font-bold inline-flex items-center gap-2 justify-center">
                    {member.name}
                    <span className="text-xl align-middle">{member.country}</span>
                  </h3>
                </div>
  
                <p className="text-green-800 text-lg mb-6 font-medium">
                  {member.role}
                </p>
  
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-900 text-yellow-400 px-6 py-2 rounded-full font-semibold hover:bg-green-800 hover:-translate-y-1 transition-all duration-300"
                >
                  GitHub Profile
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
