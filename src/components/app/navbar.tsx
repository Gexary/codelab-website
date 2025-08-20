import { BadgeInfo, House, LibraryBig, PenLine, Users, type LucideIcon } from "lucide-react";

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

export function NavBar() {
  return (
    <div
      className="
    flex items-center gap-4
    z-50 bg-gradient-to-t from-blue-300/20 to-blue-300/10 backdrop-blur-md border-b border-blue-300/30 inner-glow shadow-md after:w-[90%]!
    rounded-none sm:rounded-full py-2 px-4 w-max left-1/2 transform -translate-x-1/2"
    >
      {AppNavLinks.map((navLink) => (
        <a
          key={navLink.name}
          href={navLink.href}
          className="flex items-center gap-2 rounded-full px-4 py-2 text-blue-100 text-sm hover:bg-blue-300/5 hover:text-blue-100 outline-none"
        >
          <span className="leading-6">{navLink.name}</span>
        </a>
      ))}
      <div className="absolute w-full dots top-2 left-0 h-0" />
      <div className="absolute w-full dots bottom-2 left-0 h-0" />
    </div>
  );
}
