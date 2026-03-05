import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

const SectionWrapper = ({ children, className, id, delay = 0 }: SectionWrapperProps) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "opacity-0 translate-y-10 transition-all duration-700 ease-out",
        isVisible && "opacity-100 translate-y-0",
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
