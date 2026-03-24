"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "70%", label: "Croissance entreprise" },
  { value: "10+", label: "Années d'expérience" },
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <p className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm">
              À propos de nous
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight mb-8">
              Au-delà des 
              <span className="text-accent"> Technologies</span> ...
            </h2>
            
            {/* Stats */}
            <div className="flex gap-8 mb-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="text-4xl lg:text-5xl font-bold text-foreground">{stat.value}</span>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            
            {/* Card */}
            <div className="bg-card rounded-2xl border border-border p-6 mb-8">
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                Pourquoi nous choisir ?
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">-</span>
                  Société basée à Ouagadougou, experte en Support, Web & Mobile, Infogérance et Call Center.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">-</span>
                  Notre approche par compétences, notre intégrité et notre professionnalisme garantissent votre succès.
                </li>
              </ul>
            </div>
            
            <Button 
              variant="ghost" 
              className="group text-foreground hover:text-accent"
            >
              <a href="#services">
                Découvrir nos services
              </a>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Right content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/images/ceo-portrait.jpg"
                  alt="Leadership Deep-Technologies"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-card/95 backdrop-blur-sm rounded-xl border border-border p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Operations</p>
                  <p className="text-sm font-semibold text-foreground">Votre Partenaire en Excellence Digitale</p>
                </div>
              </div>

              {/* Badge top right */}
              <div className="absolute top-6 right-6 bg-accent text-accent-foreground rounded-full px-4 py-2">
                <span className="text-xs font-semibold uppercase tracking-wider">Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
