"use client"

// Remplacez ces URLs par le chemin de vos vraies images une fois ajoutées (ex: "/images/bnda.png")
const partners = [
  { name: "Bigger", logo: "/images/Bigger.jpg" },
  { name: "Data-Quality", logo: "/images/Data-Quality.jpg" },
  { name: "Digital", logo: "/images/Digital Technologies.jpg" },
  { name: "Outsourcing", logo: "/images/Outsourcing.jpg" },
  { name: "Call Center", logo: "/images/Call Center.jpg" },
  { name: "Infogérance", logo: "/images/infogerance.jpg" }
]

export function Partners() {
  return (
    <section className="py-12 border-y border-border bg-card overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-muted-foreground mb-10 uppercase tracking-widest">
          Ils nous font confiance
        </p>
        
        {/* Infinite Marquee Container */}
        <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-fit animate-marquee gap-16 md:gap-24 items-center">
            {/* Duplicating the array so it loops seamlessly */}
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`} 
                className="flex-shrink-0 relative w-32 h-16 md:w-40 md:h-20 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 flex items-center justify-center bg-secondary/20 rounded-xl overflow-hidden group"
              >
                {/* Visual Placeholder text (until real image loads) */}
                <span className="absolute text-sm font-bold text-muted-foreground/50 group-hover:opacity-0 transition-opacity">
                  {partner.name}
                </span>
                
                {/* Actual Logo Image */}
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="z-10 max-h-full max-w-full object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
