import Image from "@/components/app-ui/image";
import GradientText from "@/components/app-ui/style/gradient-text";
import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-60 py-16 text-zinc-200 border-t border-zinc-800 bg-zinc-950/75 backdrop-blur-md">
      <div className="flex flex-row justify-between">
        <div className="space-y-4 max-w-2xl">
          <div className="flex flex-row items-center justify-start gap-4">
            <Image src="/codelab-logo.svg" className="w-12 h-12" />
            <div className="space-y-1">
              <p className="text-xl font-medium text-left">CodeLab</p>
              <p className="text-sm text-zinc-400">Lycée Descartes</p>
            </div>
          </div>
          <p className="text-zinc-400 text-base">
            Le club d'informatique du Lycée Descartes. Nous formons la nouvelle génération de développeurs et d'innovateurs
            technologiques dans un environnement collaboratif et passionnant.
          </p>
        </div>
        <div className="flex flex-row gap-32">
          {footerLinks.map((link) => (
            <div>
              <GradientText className="text-base font-medium mb-4">{link.name}</GradientText>
              <ul className="flex flex-col gap-2 text-sm text-zinc-400">
                {link.links.map((link) => (
                  <li>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center gap-4 inner-glow-1 pt-8 mt-8 relative">
        <p className="text-sm text-zinc-400 flex flex-row items-center gap-2">
          <MapPin className="inline-block w-4 h-4" /> Lycée Descartes - Club CodeLab
        </p>
        <p className="text-sm text-zinc-400">© 2024 CodeLab. Créé avec passion par les étudiants.</p>
      </div>
    </footer>
  );
}

const footerLinks = [
  {
    name: "Navigation",
    links: [
      {
        name: "Accueil",
        href: "#",
      },
      {
        name: "À propos",
        href: "#",
      },
      {
        name: "Notre équipe",
        href: "#",
      },
      {
        name: "Nos projets",
        href: "#",
      },
      {
        name: "Contact",
        href: "#",
      },
    ],
  },
  {
    name: "Ressources",
    links: [
      {
        name: "Tutoriels",
        href: "#",
      },
      {
        name: "Projets",
        href: "#",
      },
      {
        name: "GitHub",
        href: "#",
      },
      {
        name: "Blog",
        href: "#",
      },
    ],
  },
  {
    name: "Technologies",
    links: [
      {
        name: "Python",
        href: "#",
      },
      {
        name: "Javascript",
        href: "#",
      },
      {
        name: "HTML/CSS",
        href: "#",
      },
      {
        name: "Machine Learning",
        href: "#",
      },
    ],
  },
];
