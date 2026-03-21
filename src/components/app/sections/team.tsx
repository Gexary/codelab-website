import { useAppData } from "@/context/AppData";
import "./team.css";
import { GradientShapes } from "@/components/utils/gradient-shapes";

interface TeamMemberProps {
  name: string;
  role: string;
  activity: string;
}

export function TeamSection() {
  const { data } = useAppData();
  const members = data ? (data.team as TeamMemberProps[]) : null;

  return (
    <div className="w-full relative">
      <div className="absolute top-1/2 left-1/2 -translate-1/2 w-180 h-140 gradient-light-3 opacity-75 blur-3xl rounded-[100%]" />
      <div className="absolute top-1/2 left-1/2 -translate-1/2">
        <GradientShapes shape="square" shapeCount={10} firstOpacity={0.5} lastOpacity={0.05} firstShapeSize={50} lastShapeSize={500} borderWidth={2} rotate={45} color="#9ec8ff" />
      </div>
      <section className="relative gradient-separator bg-zinc-950/50 backdrop-blur-xl h-80" id="team">
        <div className="absolute inset-0 select-none pointer-events-none backdrop-blur-xl sliding-bg sb-animate opacity-75" />
        <div className="absolute inset-0 py-16 text-white flex flex-col items-center justify-center gap-8 z-50 inner-glow-2">
          <h1 className="text-4xl font-black mb-4 text-center">Notre équipe</h1>
          <div className="flex flex-row gap-4 gap-y-16 items-start flex-wrap content-center justify-center md:mx-20 sm:mx-10">
            {members ? members.map((member) => <TeamMember key={member.name} {...member} />) : null}
          </div>
        </div>
      </section>
    </div>
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
