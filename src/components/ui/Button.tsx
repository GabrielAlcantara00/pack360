import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "emerald";
  size?: "default" | "lg" | "xl";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "emerald", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-bold uppercase tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-display";

    const variants = {
      primary: "bg-[var(--color-brand-orange)] text-white hover:bg-[var(--color-brand-orange-hover)]",
      emerald: "bg-[var(--color-brand-emerald)] text-white hover:bg-[var(--color-brand-emerald-hover)] shadow-lg shadow-[var(--color-brand-emerald)]/20",
      secondary: "bg-[var(--color-dark-border)] text-white hover:bg-[var(--color-dark-graphite)]",
      outline: "border-2 border-[var(--color-dark-border)] bg-transparent text-white hover:bg-[var(--color-dark-border)]",
    };

    const sizes = {
      default: "h-12 px-6 py-2 text-sm",
      lg: "h-14 px-8 text-base",
      xl: "h-16 px-10 text-lg sm:text-xl",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
