import Image from "@/components/app-ui/image";
import { MainButton } from "@/components/app-ui/style/main-button";
import { GlowLineEffect } from "@/components/app-ui/style/utils";
import { NavBar } from "@/components/app/navbar";
import Beams from "@/components/beams";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, GraduationCap } from "lucide-react";

function AppTopHeader() {
  return (
    <div className="absolute top-16 w-full">
      <NavBar />
      <div className="absolute top-0 left-24 h-full flex items-center justify-center">
        <Image src="/codelab-logo.svg" className="w-8 h-8" />
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
        <GlowLineEffect className="-mt-4" />
      </div>
      <p className="text-center text-zinc-300 text-base mt-2 w-lg">
        Le club d'informatique qui façonne les développeurs de demain. Algorithmie, IA, Computer Science et métiers du futur.
      </p>

      <div className="flex items-center justify-center gap-4 mt-8 content-center flex-wrap">
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
      <Image src="/pattern.svg" className="absolute -bottom-8 -right-9 w-[50%] opacity-50 pointer-events-none" />
      <Image src="/patternl.svg" className="absolute -bottom-8 -left-9 w-[50%] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-zinc-950 to-zinc-950/0"></div>
      <div className="absolute top-0 left-0 w-full h-56 bg-gradient-to-b from-zinc-950 to-zinc-950/0"></div>
    </div>
  );
}

export function Header() {
  return (
    <div className="w-full h-screen overflow-hidden relative flex flex-col justify-center items-center">
      <BeamsBackground />

      {/* App Header */}
      <AppTopHeader />

      {/* App Name and Logo */}
      <AppStart />

      <ChevronDown className="absolute bottom-8 opacity-30 text-white h-10 w-10 animate-bounce" strokeWidth={1.5} />
    </div>
  );
}
