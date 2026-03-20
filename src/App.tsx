import { ContactSection } from "@/components/app/sections/contact";
import { Footer } from "@/components/app/sections/footer";
import { Header } from "@/components/app/sections/header";
import { MissionSection } from "@/components/app/sections/mission";
import { ProgramSection } from "@/components/app/sections/program";
import { StatsSection } from "@/components/app/sections/stats";
import { TeamSection } from "@/components/app/sections/team";
import Threads from "@/components/threads";
import { AppDataProvider } from "@/context/AppData";

function App() {
  return (
    <AppDataProvider>
      <Header />
      <MissionSection />
      <ProgramSection />
      <TeamSection />
      <StatsSection />
      <div className="w-full pointer-events-none relative">
        <div className="w-full h-[600px] absolute top-1/2 -translate-y-1/2 left-0">
          <Threads amplitude={1} distance={0.1} />
        </div>
      </div>
      <ContactSection />
      <Footer />
    </AppDataProvider>
  );
}

export default App;
