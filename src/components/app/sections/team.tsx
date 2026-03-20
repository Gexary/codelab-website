import { useAppData } from "@/context/AppData";
import "./team.css";

interface TeamMemberProps {
  name: string;
  role: string;
  activity: string;
}

export function TeamSection() {
  const { data } = useAppData();
  const members = data ? (data.team as TeamMemberProps[]) : null;

  return (
    <section className="py-8 relative gradient-separator" id="team">
      <div className="w-full py-8 text-white flex flex-col items-center justify-center gap-8 vignette sliding-bg">
        <h1 className="text-4xl font-black mb-4 text-center">Notre équipe</h1>
        <div className="flex flex-row gap-4 gap-y-16 items-start flex-wrap content-center justify-center md:mx-20 sm:mx-10">
          {members ? members.map((member) => <TeamMember key={member.name} {...member} />) : null}
        </div>
      </div>
    </section>
  );
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, activity }) => {
  return (
    <div className="flex flex-col gap-2 items-center w-64 text-center">
      <h2 className="text-base font-medium">{name}</h2>
      <p className="text-blue-200 bg-blue-500/20 text-xs px-2 py-0.5 rounded-sm border border-blue-500/20">{role}</p>
      <p className="text-zinc-400 text-sm whitespace-pre-wrap">{activity}</p>
    </div>
  );
};
