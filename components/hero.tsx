"use client"

import { ArrowRight, Play, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"

const stats = [
  { target: 98, suffix: "%", label: "Clients satisfaits" },
  { target: 150, suffix: "+", label: "Projets réalisés" },
]

function AnimatedStat({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const running = useRef(false)

  useEffect(() => {
    function start() {
      if (running.current) return
      running.current = true
      let current = 0
      const interval = 7000 / target
      const timer = setInterval(() => {
        current += 1
        setCount(current)
        if (current >= target) {
          clearInterval(timer)
          running.current = false
          setTimeout(() => setCount(0), 2500)
        }
      }, interval)
    }
    start()
  }, [target])

  useEffect(() => {
    if (count === 0 && !running.current) {
      running.current = true
      let current = 0
      const interval = 7000 / target
      const timer = setInterval(() => {
        current += 1
        setCount(current)
        if (current >= target) {
          clearInterval(timer)
          running.current = false
          setTimeout(() => setCount(0), 2500)
        }
      }, interval)
      return () => clearInterval(timer)
    }
  }, [count, target])

  return (
    <span className="text-4xl font-bold text-foreground">
      {count}{suffix}
    </span>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-30 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl opacity-20" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">Votre partenaire technologique de confiance</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
              <span className="text-balance">
                Nous donnons du
                <br />
                <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                  style
                </span> à vos
                <br />
                projets IT
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Chez Deep-Technologies, vous explorez les talents cachés, élargissez votre vision et augmentez votre valeur par la transparence et l'innovation continue.
            </p>
            
            <div className="py-4">
              <Image 
                src="/media/image9.png" 
                alt="Slogan Deep-Technologies" 
                width={500} 
                height={150} 
                className="w-full max-w-[450px] h-auto rounded-xl shadow-lg border border-border/50 object-contain"
                priority 
              />
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button 
                asChild
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground h-14 px-8 text-base font-semibold rounded-xl shadow-lg shadow-accent/25 transition-all hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
              >
                <Link href="#contact">
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="h-14 px-8 text-base font-semibold rounded-xl border-border hover:bg-secondary group"
              >
                <Link href="#portfolio">
                  <Play className="mr-2 h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                  Voir la demo
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6">
              {[
                "Support 24/7",
                "100+ Projets livrés",
                "10 ans d'expertise"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex gap-10 pt-8 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <AnimatedStat target={stat.target} suffix={stat.suffix} />
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
              <div>
                <span className="text-4xl font-bold text-foreground">24/7</span>
                <p className="text-sm text-muted-foreground mt-1">Support technique</p>
              </div>
            </div>
          </div>
          
          {/* Right content - Dashboard mockup */}
          <div className="relative lg:pl-8 hidden lg:block">
            {/* Main dashboard image */}
            <div className="relative">
              {/* Browser frame */}
              <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-2xl shadow-primary/10">
                {/* Browser header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-accent/60" />
                    <div className="w-3 h-3 rounded-full bg-primary/60" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-6 bg-muted rounded-md flex items-center px-3">
                      <span className="text-xs text-muted-foreground">deep-technologies.com</span>
                    </div>
                  </div>
                </div>
                {/* Dashboard content */}
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/hero-dashboard.jpg"
                    alt="Dashboard Deep-Technologies"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Floating card - Stats */}
              <div className="absolute -left-8 top-1/3 glass rounded-xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">+85%</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Performance</p>
                    <p className="text-xs text-muted-foreground">Optimisation IT</p>
                  </div>
                </div>
              </div>

              {/* Floating card - Success */}
              <div className="absolute -right-4 bottom-16 glass rounded-xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Projet deploye</p>
                    <p className="text-xs text-muted-foreground">il y a 2 min</p>
                  </div>
                </div>
              </div>

              {/* Floating mobile mockup */}
              <div className="absolute -bottom-8 -left-4 w-32 rounded-2xl overflow-hidden border border-border bg-card shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                <div className="aspect-[9/16] relative">
                  <Image
                    src="/images/mobile-app.jpg"
                    alt="Application mobile"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
