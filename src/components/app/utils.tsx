import { cn } from "@/lib/utils";

export function Important({ children }: { children: React.ReactNode }) {
  return <span className="font-bold">{children}</span>;
}

const glowLineEffectStyle = "absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent to-transparent";

export function GlowLineEffect({ className }: { className: string }) {
  return (
    <div className={cn("w-full relative", className)}>
      <div className={cn(glowLineEffectStyle, "via-indigo-500 h-[2px] w-3/4 blur-sm")} />
      <div className={cn(glowLineEffectStyle, "via-indigo-500 h-[2px] w-3/4 blur-xs")} />
      <div className={cn(glowLineEffectStyle, "via-indigo-500 h-[2px] w-3/4")} />
      <div className={cn(glowLineEffectStyle, "via-sky-500 h-[8px] w-1/2 blur-sm")} />
      <div className={cn(glowLineEffectStyle, "via-sky-500 h-[2px] w-1/4")} />
    </div>
  );
}
