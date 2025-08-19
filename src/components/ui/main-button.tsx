import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-white rounded-lg px-6 text-base py-3 inner-glow relative font-medium shadow-xs cursor-pointer h-12 has-[>svg]:px-4 transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        primary: "bg-blue-700 bg-gradient-to-tl from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-400",
        secondary: "bg-blue-200/20 hover:bg-blue-200/40",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export function MainButton({
  className,
  children,
  variant,
  outerGlow,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { outerGlow?: boolean }) {
  const btn = (
    <button className={cn(buttonVariants({ variant, className }))} {...props}>
      {children}
    </button>
  );
  return outerGlow ? <div className="p-1 bg-blue-300/20 rounded-xl backdrop-blur-md">{btn}</div> : btn;
}
