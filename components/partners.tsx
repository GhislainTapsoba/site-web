"use client"

const partners: { name: string; logo: string }[] = [
  { name: "Partenaire 1", logo: "/partners/image10.png" },
  { name: "Partenaire 2", logo: "/partners/image11.png" },
  { name: "Partenaire 3", logo: "/partners/image12.png" },
  { name: "Partenaire 4", logo: "/partners/image13.png" },
  { name: "Partenaire 5", logo: "/partners/image14.jpg" },
]

const clients: { name: string; logo: string }[] = [
  { name: "Client 1", logo: "/confiance/image14.png" },
  { name: "Client 2", logo: "/confiance/image15.png" },
  { name: "Client 3", logo: "/confiance/image16.png" },
  { name: "Client 4", logo: "/confiance/image17.png" },
  { name: "Client 5", logo: "/confiance/image18.png" },
  { name: "Client 6", logo: "/confiance/image19.png" },
  { name: "Client 7", logo: "/confiance/image20.png" },
  { name: "Client 8", logo: "/confiance/image21.png" },
  { name: "Client 9", logo: "/confiance/image22.png" },
  { name: "Client 10", logo: "/confiance/image23.png" },
  { name: "Client 11", logo: "/confiance/image24.png" },
  { name: "Client 12", logo: "/confiance/image25.png" },
]

function LogoMarquee({ items }: { items: { name: string; logo: string }[] }) {
  const doubled = [...items, ...items]
  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-fit animate-marquee gap-16 md:gap-24 items-center">
        {doubled.map((item, index) => (
          <div
            key={item.name + index}
            className="flex-shrink-0 w-32 h-16 md:w-40 md:h-20 transition-all duration-300 flex items-center justify-center bg-white rounded-xl overflow-hidden"
          >
            {item.logo
              ? <img src={item.logo} alt={item.name} className="max-h-full max-w-full object-contain p-2" />
              : <span className="text-sm font-bold text-muted-foreground/50">{item.name}</span>
            }
          </div>
        ))}
      </div>
    </div>
  )
}

export function Partners() {
  return (
    <section className="py-16 border-y border-border bg-card overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-14">

        <div>
          <p className="text-center text-sm font-semibold text-muted-foreground mb-10 uppercase tracking-widest">
            Nos Partenaires
          </p>
          <LogoMarquee items={partners} />
        </div>

        <div>
          <p className="text-center text-sm font-semibold text-muted-foreground mb-10 uppercase tracking-widest">
            Ils nous font confiance
          </p>
          <LogoMarquee items={clients} />
        </div>

      </div>
    </section>
  )
}
