"use client"

import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    content: "Deep-Technologies a transformé notre infrastructure IT. Une équipe extrêmement professionnelle, réactive et à l'écoute de nos besoins.",
    author: "Amadou Diallo",
    role: "Directeur IT, SONABEL",
    rating: 5
  },
  {
    content: "Leur prestation pour notre sécurité réseau nous a permis de garantir un plan de continuité d'activité parfait. Je les recommande vivement.",
    author: "Mariam Kaboré",
    role: "RSSI, Data-Quality",
    rating: 5
  },
  {
    content: "Grâce à leur solution de centre d'appels, nous avons boosté nos ventes et considérablement amélioré notre relation client au quotidien.",
    author: "Karim Ouedraogo",
    role: "Responsable Commercial, Orange BF",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section id="temoignages" className="py-24 lg:py-32 relative bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
            Témoignages
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight mb-6">
            Ce que disent nos <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez comment nous avons aidé nos partenaires à atteindre leurs objectifs technologiques.
          </p>
        </div>

        <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-4">
          <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] gap-8 items-stretch" style={{ animationDuration: '45s' }}>
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, i) => (
              <div key={i} className="flex-shrink-0 w-[320px] md:w-[420px] bg-card rounded-2xl p-8 border border-border relative group hover:border-primary/40 transition-colors shadow-lg shadow-black/5 flex flex-col">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/5 group-hover:text-primary/20 transition-colors" />
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8 relative z-10 italic flex-1">
                  "{testimonial.content}"
                </p>
                <div className="mt-auto border-t border-border pt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xl">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{testimonial.author}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
