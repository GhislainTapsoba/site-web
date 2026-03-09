import { Clock, Users, Briefcase, HeartHandshake } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { icon: Clock, value: 10, suffix: "+", label: "Années d'expérience", color: "text-primary" },
  { icon: Users, value: 50, suffix: "+", label: "Clients satisfaits", color: "text-accent" },
  { icon: Briefcase, value: 100, suffix: "+", label: "Projets livrés", color: "text-primary" },
  { icon: HeartHandshake, value: 24, suffix: "/7", label: "Support disponible", color: "text-accent" },
];

const Stats = () => {
  return (
    <SectionWrapper className="py-20">
      <div className="relative overflow-hidden border-y border-border">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/10 blur-[100px] rounded-full" />

        <div className="container mx-auto px-4 lg:px-8 py-20 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center relative group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl glass mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon size={24} className={stat.color} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                {/* Separator */}
                {i < stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-20 bg-gradient-to-b from-transparent via-border to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Stats;
