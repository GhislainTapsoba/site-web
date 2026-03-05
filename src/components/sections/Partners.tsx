import SectionWrapper from "@/components/ui/SectionWrapper";

const partners = [
  "Digital Technologies",
  "Bigger",
  "Data-Quality",
  "TechVision",
  "AfriConnect",
  "CloudNet Africa",
];

const Partners = () => {
  return (
    <SectionWrapper className="py-20 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">Ils nous font confiance</h2>
          <p className="text-sm text-muted-foreground">Nos partenaires et clients de confiance</p>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee">
            {[...partners, ...partners].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-8 px-8 py-4 rounded-xl border border-border bg-card/50 hover:border-primary/30 transition-all duration-300 grayscale hover:grayscale-0 cursor-default"
              >
                <span className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
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
