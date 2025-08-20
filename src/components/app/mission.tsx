import RotatingText from "@/components/app-ui/style/rotating-text";
import { Section } from "@/components/app-ui/style/section";
import { Important } from "@/components/app-ui/style/utils";
import { Terminal } from "@/components/app-ui/terminal";

export function MissionSection() {
  return (
    <Section className="py-60 flex flex-row max-sm:flex-col justify-between items-center overflow-x-hidden">
      <div className="max-w-2xl">
        <div className="flex flex-row items-center justify-start gap-2 mb-6 relative">
          <h1 className="text-4xl font-bold text-white">Notre</h1>
          <RotatingText
            texts={["mission", "vision", "approche", "expertise", "futur"]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-blue-600 text-4xl font-bold text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg transition-all duration-500 ease-in-out"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
        <p className="text-zinc-300 text-base leading-loose">
          <Important>CodeLab</Important> forme la nouvelle génération de développeurs en cultivant l'autonomie, la créativité et
          l'<Important>innovation</Important>. Nous explorons l'<Important>algorithmie</Important>, la complexité temporelle, les
          structures de données et les réseaux pour préparer aux métiers du futur comme le <Important>développement</Important>,
          la data science et la cybersécurité. Les membres acquièrent une véritable culture technique : se documenter, utiliser
          Git/GitHub, résoudre des problèmes et partager leurs connaissances, dans un esprit d'apprentissage collaboratif et d'
          <Important>innovation collective</Important>.
        </p>
      </div>
      <div>
        <Terminal />
      </div>
    </Section>
  );
}
