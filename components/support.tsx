"use client"

import { Download, MonitorPlay, CreditCard, LifeBuoy } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    icon: Download,
    title: "1. Télécharger AnyDesk",
    description: "Téléchargez et installez le logiciel gratuit AnyDesk pour nous permettre d'accéder à votre poste en toute sécurité.",
  },
  {
    icon: CreditCard,
    title: "2. Paiement du Support",
    description: "Effectuez le paiement de la prestation via mobile money (Orange Money / Moov Africa) ou virement bancaire selon le forfait choisi.",
  },
  {
    icon: MonitorPlay,
    title: "3. Assistance à distance",
    description: "Communiquez-nous votre identifiant AnyDesk. Notre technicien prend la main et résout votre problème en temps réel.",
  }
]

export function Support() {
  return (
    <section id="support" className="py-24 lg:py-32 relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <LifeBuoy className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Help Desk & Support Client</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight mb-6">
            Assistance informatique {" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              à distance
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Besoin d'un dépannage rapide ? Notre équipe technique intervient à distance sur vos équipements en quelques minutes seulement.
          </p>
        </div>

        {/* Timeline / Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative mb-16">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center mb-6 shadow-xl shadow-primary/5">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Panel */}
        <div className="bg-secondary/40 rounded-3xl border border-border p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />
          
          <MonitorPlay className="w-12 h-12 text-accent mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-foreground mb-4">Prêt à démarrer l'assistance ?</h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Cliquez sur le bouton ci-dessous pour télécharger notre outil de prise en main à distance. Une fois installé, contactez notre équipe pour procéder au paiement et lancer l'intervention.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white h-14 px-8 text-base font-semibold rounded-xl"
            >
              <a href="https://anydesk.com/fr/downloads/" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Télécharger AnyDesk
              </a>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="border-border hover:bg-secondary h-14 px-8 text-base font-semibold rounded-xl"
            >
              <a href="#contact">
                Contacter un technicien
              </a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}
