import { Section } from "@/components/utils/section";
import { TechCategories } from "@/components/TechCard";

export function ProgramSection() {
  return (
    <Section className="py-16 pb-60">
      <h1 className="text-4xl font-bold text-white mb-16">Notre programme</h1>
      <TechCategories />
    </Section>
  );
}
