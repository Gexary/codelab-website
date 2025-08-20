import { ContactSection } from "@/components/app/contact";
import { Footer } from "@/components/app/footer";
import { Header } from "@/components/app/header";
import { MissionSection } from "@/components/app/mission";
import { ProgramSection } from "@/components/app/program";
import { StatsSection } from "@/components/app/stats";
import { TeamSection } from "@/components/app/team";
import Threads from "@/components/threads";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
