import { Terminal } from "@/components/editor";
import GradientText from "@/components/gradient-text";
import Threads from "@/components/threads";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BadgeInfo,
  ChevronDown,
  GraduationCap,
  House,
  LibraryBig,
  MapPin,
  PenLine,
  Users,
  type LucideIcon,
} from "lucide-react";
import Beams from "./components/beams";
import { TechCategories } from "./components/TechCard";
import { MainButton } from "./components/ui/main-button";

function App() {
  return (
    <>
      <div className="w-full h-screen overflow-hidden relative flex flex-col justify-center items-center">
        <BeamsBackground />

        {/* App Header */}
        <AppHeader />

        {/* App Name and Logo */}
        <AppStart />

        <ChevronDown className="absolute bottom-8 opacity-30 text-white h-10 w-10 animate-bounce" strokeWidth={1.5} />
      </div>
      <section className="px-60 py-40 flex flex-row justify-between items-center overflow-x-hidden">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-black text-white mb-8">Notre mission</h1>
          <p className="text-white/80 text-base mt-2 leading-loose">
            <BlogTag>CodeLab</BlogTag> forme la nouvelle génération de développeurs en cultivant l'autonomie, la créativité et l'
            <BlogTag>innovation</BlogTag>. Nous explorons l'<BlogTag>algorithmie</BlogTag>, la complexité temporelle, les
            structures de données et les réseaux pour préparer aux métiers du futur comme le <BlogTag>développement</BlogTag>, la
            data science et la cybersécurité. Les membres acquièrent une véritable culture technique : se documenter, utiliser
            Git/GitHub, résoudre des problèmes et partager leurs connaissances, dans un esprit d'apprentissage collaboratif et d'
            <BlogTag>innovation collective</BlogTag>.
          </p>
        </div>
        <div>
          <Terminal />
        </div>
      </section>
      <section className="px-60 py-16">
        <h2 className="text-lg font-medium text-white mb-8">Notre programme :</h2>
        <TechCategories />
      </section>
      <section className="px-60 py-16 pb-10">
        <AppStats />
      </section>
      <div className="w-full pointer-events-none relative">
        <div className="w-full h-[600px] absolute top-1/2 -translate-y-1/2 left-0">
          <Threads amplitude={1} distance={0.1} />
        </div>
      </div>
      <section className="px-60 py-16 text-white">
        <h1 className="text-4xl font-black text-white mb-8">Contactez-nous</h1>
        <p className="text-white/80 text-base mt-2 leading-loose">
          Une question ? Une idée de projet ? Rejoignez-nous et participez à l'aventure CodeLab !
        </p>
        <div>
          <h2>Email</h2>
          <p>contact@codelab.fr</p>
        </div>
        <div>
          <h2>Adresse</h2>
          <p>Lycée Descartes, Salle Info 2</p>
        </div>
        <div>
          <h2>Horaires</h2>
          <p>Mercredi 14h-16h, une semaine sur deux</p>
        </div>
      </section>
      <Footer />
    </>
  );
}

function BlogTag({ children }: { children: React.ReactNode }) {
  return <span className="tag-text relative">{children}</span>;
}

export default App;

export function GlowEffect({ className }: { className: string }) {
  return (
    <div className={cn("w-full relative", className)}>
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-xs" />
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4" />
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[8px] w-1/2 blur-sm" />
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[2px] w-1/4" />
    </div>
  );
}

interface NavLinkProps {
  href: string;
  name: string;
  icon: LucideIcon;
}

const AppNavLinks: NavLinkProps[] = [
  {
    href: "#",
    name: "Accueil",
    icon: House,
  },
  {
    href: "#",
    name: "À propos",
    icon: BadgeInfo,
  },
  {
    href: "#",
    name: "Notre équipe",
    icon: Users,
  },
  {
    href: "#",
    name: "Nos projets",
    icon: LibraryBig,
  },
  {
    href: "#",
    name: "Contact",
    icon: PenLine,
  },
];

function AppHeader() {
  return (
    <div className="absolute top-16 w-full">
      <div className="relative flex items-center gap-4 bg-blue-300/20 backdrop-blur-md rounded-lg py-2 px-4 inner-glow shadow-md w-max left-1/2 transform -translate-x-1/2">
        {AppNavLinks.map((navLink) => (
          <a
            key={navLink.name}
            href={navLink.href}
            className="flex items-center gap-2 rounded-full px-4 py-2 text-blue-100 text-sm hover:bg-blue-300/20 hover:text-blue-100 outline-none"
          >
            <navLink.icon className="w-6 h-6" strokeWidth={1.5} />
            <span>{navLink.name}</span>
          </a>
        ))}
        <div className="absolute w-full dots top-2 left-0 h-0" />
        <div className="absolute w-full dots bottom-2 left-0 h-0" />
      </div>
      <div className="absolute top-0 left-24 h-full flex items-center justify-center">
        <img src="/codelab-logo.svg" className="w-8 h-8" />
        <span className="text-white ml-2 text-xl font-medium">CodeLab</span>
      </div>
      <div className="absolute top-0 right-24 h-full flex items-center justify-center">
        <Button>Se connecter</Button>
      </div>
    </div>
  );
}

function AppStart() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-4 px-4 py-1.5 bg-blue-500/20 rounded-full text-blue-100 text-sm border border-blue-500/20 backdrop-blur-md flex items-center justify-center gap-3">
        <GraduationCap strokeWidth={1.5} />
        Club du Lycée Descartes • Depuis 2023
      </div>
      <div className="flex flex-col items-center justify-center mb-8">
        <h1 className="text-[5rem] font-black text-center text-transparent bg-clip-text bg-[linear-gradient(to_top,_rgba(0,0,0,0.5),_#fff_50%)]">
          CodeLab
        </h1>
        <GlowEffect className="-mt-4" />
      </div>
      <p className="text-center text-white/80 text-base mt-2 w-lg">
        Le club d'informatique qui façonne les développeurs de demain. Algorithmie, IA, Computer Science et métiers du futur.
      </p>

      <div className="flex items-center justify-center gap-4 mt-8">
        <MainButton variant={"primary"} outerGlow={true} className="group">
          Rejoindre l'aventure <ArrowRight strokeWidth={3} className="group-hover:translate-x-1 transition-all" />
        </MainButton>
        <MainButton variant={"secondary"} outerGlow={true}>
          Découvrez nos projets
        </MainButton>
      </div>
    </div>
  );
}

function BeamsBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Beams
        beamWidth={2}
        beamHeight={30}
        beamNumber={20}
        lightColor="#85b1ff"
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={30}
      />
      <img src="/pattern.svg" className="absolute -bottom-8 -right-9 w-[50%] opacity-50 pointer-events-none" />
      <img src="/patternl.svg" className="absolute -bottom-8 -left-9 w-[50%] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-zinc-950 to-zinc-950/0"></div>
      <div className="absolute top-0 left-0 w-full h-56 bg-gradient-to-b from-zinc-950 to-zinc-950/0"></div>
    </div>
  );
}

interface StatsProps {
  title: string;
  value: string;
}

const stats: StatsProps[] = [
  {
    title: "Dirigeants Passionnés",
    value: "3",
  },
  {
    title: "Étudiants Uniques",
    value: "50+",
  },
  {
    title: "Projets Réalisés",
    value: "15",
  },
  {
    title: "Heures de formation",
    value: "100+",
  },
];

function AppStats() {
  return (
    <div className="flex flex-row justify-center items-center gap-32">
      {stats.map((stat) => (
        <div className="flex flex-col items-center justify-center gap-4">
          <GradientText className="text-6xl font-bold block text-center">{stat.value}</GradientText>
          <span className="text-sm text-zinc-200 text-center">{stat.title}</span>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="px-60 py-16 text-zinc-200 border-t border-zinc-800">
      <div className="flex flex-row justify-between">
        <div className="space-y-4 max-w-2xl">
          <div className="flex flex-row items-center justify-start gap-4">
            <img src="/codelab-logo.svg" className="w-12 h-12" />
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
