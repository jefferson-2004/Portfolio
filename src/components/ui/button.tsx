import React from "react";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
};

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const variantStyles = {
    primary: "bg-zinc-50 text-black hover:bg-white",
    secondary: "bg-zinc-900 text-zinc-100 border border-zinc-800 hover:bg-zinc-800",
    tertiary: "bg-transparent text-zinc-300 hover:text-zinc-50 hover:underline px-0 py-0 rounded-none",
  };

  return (
    <button className={cn("cursor-pointer inline-flex items-center justify-center font-medium transition-colors focus:outline-none px-4 py-1.5 rounded-lg text-base", 
      variantStyles[variant],
      className
    )}
    {...props}
    >
      {children}
    </button>
  );
}