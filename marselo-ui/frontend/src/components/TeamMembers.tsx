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
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Who We Are</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 text-center shadow-lg"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold mb-2">
                {member.name} <span className="text-lg">{member.country}</span>
              </h3>
              <p className="text-gray-400 mb-4">{member.role}</p>
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
