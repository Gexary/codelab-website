import { Typewriter } from "@/components/utils/typewriter";
import { NeonWireframeShape } from "@/components/neon-shape";
import { cn } from "@/lib/utils";
import { terminalCodes } from "@/components/app/terminal-codes";

// max col = 58
// max row = 10

export function Terminal() {
  return (
    <div className="relative md:scale-75 lg:scale-80 2xl:scale-100">
      <div className="w-[600px] h-[320px] bg-zinc-900/60 rounded-2xl overflow-hidden terminal-container shiny-glow-low backdrop-blur-sm shiny-bg-low">
        {/* Header */}
        <div className="relative grid grid-cols-3 bg-zinc-950/60 py-2 px-4">
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 inner-glow-round" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 inner-glow-round" />
            <div className="w-3 h-3 rounded-full bg-green-500 inner-glow-round" />
          </div>
          <p className="text-white text-center">Playground</p>
        </div>

        {/* Body */}
        <div className="p-4">
          <pre className="font-mono whitespace-pre-wrap text-blue-400">
            <Typewriter texts={terminalCodes} delay={20} pauseBetween={2000} cursor cursorBlinkSpeed={300} />
          </pre>
        </div>
      </div>
      <DotBackgroundDemo />
      <div className="absolute -top-32 -left-42">
        <NeonWireframeShape speed={0.5} shape="pyramid" colors={["#2b44ff", "#2b44ff"]} glowIntensity={0.8} borderThickness={2} width={250} height={250} />
      </div>
      <div className="absolute -bottom-20 -right-36">
        <NeonWireframeShape speed={0.5} shape="cube" colors={["#5ca8ff", "#8fc8ff"]} glowIntensity={0.8} borderThickness={2} width={200} height={200} />
      </div>
    </div>
  );
}

export function DotBackgroundDemo() {
  return (
    <>
      <div className="absolute flex h-[30rem] w-[30rem] items-center justify-center bg-transparent -z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className={cn("absolute inset-0", "[background-size:20px_20px]", "[background-image:radial-gradient(#85b4ff_1px,transparent_1px)]")} />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_60%)] bg-zinc-950" />
      </div>
      <div className="absolute w-[20rem] h-[20rem] opacity-100 pointer-events-none -z-10 gradient-light-2 blur-3xl -bottom-20 -right-20" />
    </>
  );
}
