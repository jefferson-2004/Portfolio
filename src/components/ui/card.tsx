import React from "react";
import { cn } from "@/lib/cn";

// Types
export type CardProps = React.HTMLAttributes<HTMLDivElement>;
export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;
export type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
export type CardContentProps = React.HTMLAttributes<HTMLDivElement>;
export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;
export type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  icon?: React.ReactNode;
  imageSrc?: string;
  imageFullWidth?: boolean;
}

// Component Functions Parts for Card
export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col justify-between border border-slate-800 hover:border-blue-500 rounded-2xl p-6 bg-slate-900 transition-colors duration-300",
        className
      )}
      {...props}
    />
  );
}


export function CardHeader({ className, ...props }: CardHeaderProps) {
  return <div className={cn("space-y-4", className)} {...props} />;
}

export function CardTitle({ className, icon, imageSrc, imageFullWidth = false, children, ...props }: CardTitleProps) {
  return (
    <div className="space-y-4">
      {imageSrc && (
        <img
          src={imageSrc}
          alt=""
          className={cn(
            "w-full h-40 object-cover",
            imageFullWidth
              ? "-mx-6 -mt-6 w-[calc(100%+3rem)] max-w-none rounded-t-2xl rounded-b-none border-b border-slate-800"
              : "rounded-xl border border-slate-800"
          )}
        />
      )}
      <div className="flex items-center gap-3">
        {icon && (
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-800 text-slate-300 group-hover:bg-blue-500/15 group-hover:text-blue-400 transition-colors duration-300 shrink-0">
            {icon}
          </div>
        )}
        <h3
          className={cn(
            "text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors duration-300",
            className
          )}
          {...props}
        >
          {children}
        </h3>
      </div>
    </div>
  );
}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <p
      className={cn("text-sm text-slate-400 mt-2 leading-relaxed", className)}
      {...props}
    />
  );
}


export function CardContent({ className, ...props }: CardContentProps) {
  return <div className={cn("py-2", className)} {...props} />;
}

export function CardFooter({ className, ...props }: CardFooterProps) {
  return <div className={cn("pt-6 mt-auto", className)} {...props} />;
}