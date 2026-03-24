"use client"

import { Code2, Server, Headphones, Users, Globe, Shield, ArrowRight, Network, Cloud, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Users,
    title: "Outsourcing",
    description: "Accédez aux compétences dont vous avez besoin, quand vous en avez besoin. Nos experts intègrent vos équipes.",
    features: ["Experts dédiés", "Flexibilité", "Montée en compétences"],
    color: "accent",
    href: "/services/outsourcing"
  },
  {
    icon: Shield,
    title: "Infogérance",
    description: "Sécurisez et optimisez votre parc informatique. Maintenance proactive et support technique dédié.",
    features: ["Gestion du parc", "Sauvegarde", "Maintenance préventive"],
    color: "primary",
    href: "/services/infogerance"
  },
  {
    icon: Code2,
    title: "Web & Apps Design",
    description: "Sites web et applications métier sur mesure. Design moderne, performances optimales, expérience utilisateur exceptionnelle.",
    features: ["Applications web", "Apps mobiles", "APIs REST"],
    color: "primary",
    href: "/services/web-apps"
  },
  {
    icon: Headphones,
    title: "Call Center Solution",
    description: "Solutions professionnelles de centre d'appel. Technologie VoIP, CRM intégré et formation des agents.",
    features: ["VoIP intégré", "CRM", "Reporting avancé"],
    color: "accent",
    href: "/services/call-center"
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
            Services Énergiques
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight mb-6">
            Des solutions{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              dynamiques
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Nous transformons vos idées en expériences digitales performantes avec des services adaptés à vos besoins.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`group relative bg-card rounded-2xl border border-border p-8 hover:border-${service.color}/30 transition-all duration-500 cursor-pointer hover:shadow-xl hover:shadow-${service.color}/5 hover:-translate-y-1`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-7 w-7 text-${service.color}`} />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${service.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link href={service.href} className={`inline-flex items-center gap-2 text-sm font-semibold text-${service.color} group-hover:gap-3 transition-all`}>
                  En savoir plus
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
