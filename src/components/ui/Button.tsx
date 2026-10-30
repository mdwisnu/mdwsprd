import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "text";
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", children, href, ...props }, ref) => {
    
    const baseStyles = "relative inline-flex items-center justify-center gap-2 overflow-hidden px-8 py-4 font-mono text-sm uppercase tracking-widest transition-all duration-300 disabled:opacity-50 group";
    
    const variants = {
      primary: "bg-white text-black hover:bg-neutral-200",
      outline: "border border-white/30 text-white hover:bg-white hover:text-black",
      text: "text-white hover:text-neutral-300 px-0 py-2",
    };

    const combinedClassName = cn(baseStyles, variants[variant], className);
    const content = (
      <>
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        {variant === "text" && (
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
        )}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={combinedClassName} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        {...props}
      >
        {content}
      </button>
    );
  }
);
Button.displayName = "Button";
