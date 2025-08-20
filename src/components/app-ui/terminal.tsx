import { NeonWireframeShape } from "@/components/neon-shape";
import { cn } from "@/lib/utils";
import { terminalCodes } from "@/terminal-codes";
import { useCallback, useEffect, useRef, useState } from "react";

// max col = 58
// max row = 10

export function Terminal() {
  const [showCursor, setShowCursor] = useState(true);
  const [currentCode, setCurrentCode] = useState("");
  const currentInterval = useRef<NodeJS.Timeout | null>(null);

  const state = useRef({ index: 0, charIndex: 0 });

  const startCodeWriting = useCallback((index: number) => {
    if (index >= terminalCodes.length) return;
    setCurrentCode("");
    state.current = { index, charIndex: 0 };

    currentInterval.current = setInterval(() => {
      const { index, charIndex } = state.current;
      const code = terminalCodes[index];

      if (charIndex >= code.length) {
        clearInterval(currentInterval.current!);
        setTimeout(() => startCodeWriting((index + 1) % terminalCodes.length), 2000);
        return;
      }

      state.current.charIndex++;
      setCurrentCode((prev) => prev + code[charIndex]);
    }, 20);
  }, []);

  useEffect(() => {
    startCodeWriting(0);
    return () => {
      if (currentInterval.current) clearInterval(currentInterval.current);
    };
  }, [startCodeWriting]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((prev) => !prev), 300);
    return () => clearInterval(blink);
  }, []);

  return (
    <div className="relative">
      <div className="w-[600px] h-[320px] bg-zinc-900/60 rounded-2xl overflow-hidden terminal-container shiny-glow-low backdrop-blur-sm shiny-bg-low">
        {/* Header */}
        <div className="relative grid grid-cols-3 bg-zinc-950/60 py-2 px-4">
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 inner-glow-round" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 inner-glow-round" />
            <div className="w-3 h-3 rounded-full bg-green-500 inner-glow-round" />
          </div>
          <div className="text-white text-center">Playground</div>
        </div>

        {/* Body */}
        <div className="p-4">
          <pre className="font-mono text-blue-400 whitespace-pre-wrap ">
            {currentCode}
            {showCursor && "_"}
          </pre>
        </div>
      </div>
      <DotBackgroundDemo />
      <div className="absolute -top-32 -left-42">
        <NeonWireframeShape
          speed={0.5}
          shape="pyramid"
          colors={["#2b44ff", "#5ca8ff"]}
          glowIntensity={0.8}
          borderThickness={2}
          width={250}
          height={250}
        />
      </div>
      <div className="absolute -bottom-20 -right-36">
        <NeonWireframeShape
          speed={0.5}
          shape="cube"
          colors={["#5ca8ff", "#8fc8ff"]}
          glowIntensity={0.8}
          borderThickness={2}
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}

export function DotBackgroundDemo() {
  return (
    <>
      <div className="absolute flex h-[30rem] w-[30rem] items-center justify-center bg-transparent -z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#85b4ff_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_60%)] bg-zinc-950" />
      </div>
      <div className="absolute w-[20rem] h-[20rem] opacity-100 pointer-events-none -z-10 gradient-light-2 blur-3xl -bottom-20 -right-20" />
    </>
  );
}
