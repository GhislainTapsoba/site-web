"use client"

import { ArrowUpRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    title: "Application de Gestion : Team Project",
    category: "Web & Apps",
    description: "Plateforme web complète permettant le suivi des tâches dans une structure.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
  },
  {
    title: "Sécurité réseau - Data-Quality",
    category: "Infogérance",
    description: "Audit de sécurité complet, mise en place de pare-feu et plan de continuité d'activité.",
    tech: ["Fortinet", "Palo Alto", "SIEM"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop"
  },
  {
    title: "Centre d'Appels - Orange BF",
    category: "Call Center",
    description: "Déploiement d'une solution de centre d'appel multi-canal avec CRM intégré.",
    tech: ["Asterisk", "VoIP", "CRM"],
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop",
  },
  {
    title: "Portail E-commerce BNDA",
    category: "Web & Apps",
    description: "Plateforme e-commerce complète avec paiement en ligne et gestion des stocks.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "Application RH - Coris Bank",
    category: "Applications",
    description: "Application de gestion des ressources humaines avec suivi des congés et évaluations.",
    tech: ["React Native", "Firebase", "Node.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Infrastructure Cloud - ONATEL",
    category: "Infogérance",
    description: "Migration complète de l'infrastructure vers le cloud avec haute disponibilité.",
    tech: ["AWS", "Docker", "Terraform"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    title: "Site vitrine - Bigger Agency",
    category: "Web & Apps",
    description: "Site web premium avec animations avancées et SEO optimisé pour une agence créative.",
    tech: ["Next.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
  },
  {
    title: "App de suivi logistique",
    category: "Applications",
    description: "Application mobile de suivi des livraisons en temps réel avec géolocalisation.",
    tech: ["Flutter", "Firebase", "Maps"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
  },
  {
    title: "Plateforme e-learning",
    category: "Web & Apps",
    description: "Plateforme de formation en ligne avec vidéos et quiz interactifs.",
    tech: ["React", "Django", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
  }
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 relative bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
            Notre Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight mb-6">
            Des réalisations qui{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              inspirent
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez une sélection de projets performants réalisés pour nos clients à travers l'Afrique de l'Ouest.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article 
              key={project.title}
              className="group flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60" />
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-primary">
                  {project.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-secondary text-secondary-foreground font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Découvrir le projet
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
