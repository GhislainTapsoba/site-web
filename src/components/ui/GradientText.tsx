import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

const GradientText = ({ children, className, as: Tag = "span" }: GradientTextProps) => {
  return (
    <Tag className={cn("gradient-text animate-gradient-shift", className)}>
      {children}
    </Tag>
  );
};

export default GradientText;
