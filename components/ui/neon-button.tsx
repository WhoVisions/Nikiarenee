import { type ReactNode, type ReactElement, cloneElement, isValidElement } from "react";
import { cn } from "@/lib/utils";

interface NeonButtonProps {
  children: ReactNode;
  onClick?: () => void;
  asChild?: boolean;
  className?: string;
}

export function NeonButton({ children, onClick, asChild, className }: NeonButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-pill px-6 py-2 text-sm font-semibold text-white bg-brand-pink shadow-glow hover:bg-brand-pinkDark transition";

  if (asChild && isValidElement(children)) {
    return cloneElement(children as ReactElement<{ className?: string }>, {
      className: cn(baseClasses, className, (children as ReactElement<{ className?: string }>).props.className)
    });
  }

  return (
    <button onClick={onClick} className={cn(baseClasses, className)}>
      {children}
    </button>
  );
}
