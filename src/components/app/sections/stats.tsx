import CountUp from "@/components/utils/count-up";
import GradientText from "@/components/utils/gradient-text";
import { Section } from "@/components/utils/section";
import { useAppData } from "@/context/AppData";

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

function AppStats() {
  const { data } = useAppData();
  if (!data) return null;

  const stats = data.stats as StatsProps[];

  return (
    <div className="flex flex-row justify-center items-center gap-32 px-16 flex-wrap">
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
