const members = [
  {
    name: "Benchekroun Belabbes Othmane",
    role: "Co-fondateur",
    activity: "Ancien dirigeant de 2023-2025",
  },
  {
    name: "Aboulal Ghali",
    role: "Co-fondateur",
    activity: "Membre actif depuis 2023",
  },
  {
    name: "Mounjid Mehdi",
    role: "Co-fondateur",
    activity: "Membre actif depuis 2023",
  },
  {
    name: "Arkha Mohamed reda",
    role: "Dirigeant",
    activity: "Membre actif depuis 2025",
  },
];
export function TeamSection() {
  return (
    <section className="--px-60 py-8 relative sqdqdsqsd">
      <div className="testsqqs w-full py-8 text-white flex flex-col items-center justify-center gap-8 qsdqsdqs">
        <h1 className="text-4xl font-black text-white mb-4 text-center">Notre équipe</h1>
        <div className="flex flex-row gap-4 items-center">
          {members.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TeamMemberProps {
  name: string;
  role: string;
  activity: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, activity }) => {
  return (
    <div className="flex flex-col gap-2 items-center w-64 text-center">
      <h2 className="text-base font-medium">{name}</h2>
      <p className="text-blue-200 bg-blue-500/20 text-xs px-2 py-0.5 rounded-sm border border-blue-500/20">{role}</p>
      <p className="text-zinc-400 text-sm">{activity}</p>
    </div>
  );
};
