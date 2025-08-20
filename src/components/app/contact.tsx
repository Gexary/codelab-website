import Image from "@/components/app-ui/image";
import { Clock, Mail, MapPin, type LucideIcon } from "lucide-react";

export function ContactSection() {
  return (
    <section className="px-60 py-40 pb-20 text-white flex flex-row justify-between items-center relative overflow">
      <div>
        <h1 className="text-4xl font-black text-white mb-4">Contactez-nous</h1>
        <p className="text-zinc-400 text-sm leading-loose">
          Une question ? Une idée de projet ? Rejoignez-nous et participez à l'aventure CodeLab !
        </p>
      </div>
      <ContactList />
      <Image src="/pattern.svg" className="absolute -bottom-8 -right-9 w-[50%] opacity-20 pointer-events-none -z-10" />
      <div className="absolute -bottom-[25rem] -left-[25rem] w-[50%] h-[50rem] opacity-100 pointer-events-none -z-10 gradient-light blur-3xl" />
      <Image src="/patternl.svg" className="absolute -bottom-8 -left-9 w-[50%] opacity-50 pointer-events-none -z-10" />
    </section>
  );
}

interface ContactProps {
  title: string;
  content: string;
  icon: LucideIcon;
}

const contacts: ContactProps[] = [
  {
    title: "Email",
    content: "contact@codelab.fr",
    icon: Mail,
  },
  {
    title: "Adresse",
    content: "Lycée Descartes, Salle Info 2",
    icon: MapPin,
  },
  {
    title: "Horaires",
    content: "Mercredi 14h-16h, une semaine sur deux",
    icon: Clock,
  },
];

function ContactList() {
  return (
    <div className="flex flex-col gap-8 min-w-xl">
      {contacts.map((contact, i) => (
        <div className="flex flex-row gap-8 items-center adsqgsd py-4 px-8 backdrop-blur-md">
          <div className="w-16 h-16 rounded-full bg-white/5 shrink-0 flex items-center justify-center shiny-glow shiny-bg after:rounded-full! before:rounded-full!">
            <contact.icon className="w-8 h-8 text-zinc-300" strokeWidth={1.5} />
          </div>
          <div className="shiny-separator" />
          <div key={contact.title}>
            <h2 className="text-base font-medium text-white mb-1">{contact.title}</h2>
            <p className="text-zinc-400 text-base leading-loose">{contact.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
