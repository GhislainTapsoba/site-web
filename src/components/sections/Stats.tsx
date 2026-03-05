import { Clock, Users, Briefcase, HeartHandshake } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { icon: Clock, value: 10, suffix: "+", label: "Années d'expérience" },
  { icon: Users, value: 50, suffix: "+", label: "Clients satisfaits" },
  { icon: Briefcase, value: 100, suffix: "+", label: "Projets livrés" },
  { icon: HeartHandshake, value: 24, suffix: "/7", label: "Support disponible" },
];

const Stats = () => {
  return (
    <SectionWrapper className="py-20">
      <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center relative">
                <stat.icon size={28} className="mx-auto mb-3 text-primary" />
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                {/* Separator */}
                {i < stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-border" />
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
