import SectionWrapper from "@/components/ui/SectionWrapper";

const partners = [
  "Digital Technologies",
  "Bigger",
  "Data-Quality",
  "TechVision",
  "AfriConnect",
  "CloudNet Africa",
  "ONATEL",
  "Coris Bank",
];

const Partners = () => {
  return (
    <SectionWrapper className="py-20 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-10">
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">Ils nous font confiance</h2>
          <p className="text-sm text-muted-foreground">Des entreprises de premier plan nous accompagnent</p>
        </div>
      </div>

      {/* Double marquee for continuous flow */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Row 1 */}
        <div className="overflow-hidden mb-4">
          <div className="flex animate-marquee">
            {[...partners, ...partners].map((name, i) => (
              <div
                key={`a-${i}`}
                className="flex-shrink-0 mx-3 px-8 py-4 rounded-xl glass hover:border-primary/30 transition-all duration-300 group cursor-default"
              >
                <span className="text-base font-semibold text-muted-foreground/60 group-hover:text-foreground transition-colors whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - reversed */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee" style={{ animationDirection: "reverse", animationDuration: "35s" }}>
            {[...partners.reverse(), ...partners].map((name, i) => (
              <div
                key={`b-${i}`}
                className="flex-shrink-0 mx-3 px-8 py-4 rounded-xl glass hover:border-accent/30 transition-all duration-300 group cursor-default"
              >
                <span className="text-base font-semibold text-muted-foreground/60 group-hover:text-foreground transition-colors whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Partners;
