import CountUp from "@/components/app-ui/style/count-up";
import GradientText from "@/components/app-ui/style/gradient-text";
import { Section } from "@/components/app-ui/style/section";

export function StatsSection() {
  return (
    <Section className="pt-40 pb-30">
      <AppStats />
    </Section>
  );
}

interface StatsProps {
  title: string;
  value: number;
  suffix?: string;
  startValue?: number;
}

const stats: StatsProps[] = [
  {
    title: "Dirigeants Passionnés",
    value: 3,
  },
  {
    title: "Étudiants Uniques",
    value: 50,
    suffix: "+",
  },
  {
    title: "Projets Réalisés",
    value: 15,
  },
  {
    title: "Heures de formation",
    value: 100,
    suffix: "+",
  },
];

function AppStats() {
  return (
    <div className="flex flex-row justify-center items-center gap-32">
      {stats.map((stat) => (
        <div className="flex flex-col items-center justify-center gap-4">
          <GradientText className="text-6xl font-bold block text-center">
            <CountUp from={stat.startValue ?? 0} to={stat.value} separator="." direction="up" duration={1} />
            {stat.suffix}
          </GradientText>
          <span className="text-sm text-zinc-200 text-center">{stat.title}</span>
        </div>
      ))}
    </div>
  );
}
