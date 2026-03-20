import { cn } from "@/lib/utils";
import { createElement } from "react";

export function Section({
  children,
  className,
  rootClassName,
  element = "section",
  id,
}: React.PropsWithChildren<{ className?: string; element?: React.ElementType; rootClassName?: string; id?: string }>) {
  return createElement(
    element,
    { className: cn("2xl:px-60 xl:px-30 lg:px-20 max-lg:px-16", className) },
    <div className={cn("max-w-[100rem] 2xl:mx-auto w-full h-full", rootClassName)} id={id}>
      {children}
    </div>
  );
}
