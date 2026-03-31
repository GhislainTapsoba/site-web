import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Package, ShieldCheck, ThumbsUp, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fournitures & Équipements de bureau - Deep Technologies',
  description: 'Fournitures et équipements de bureau de qualité au meilleur prix au Burkina Faso.',
}

const avantages = [
  {
    icon: ShieldCheck,
    title: "Qualité irréprochable",
    description: "Nous sélectionnons uniquement des produits de qualité supérieure pour vous permettre de travailler sereinement et produire de bons résultats.",
  },
  {
    icon: ThumbsUp,
    title: "Meilleurs prix",
    description: "Le marché étant rempli de fournitures de toutes gammes, nous nous assurons de vous trouver les meilleurs produits défiant toute concurrence.",
  },
  {
    icon: Package,
    title: "Large gamme",
    description: "Un large choix de fournitures et équipements de bureau adaptés à tous les types d'entreprises, des PME aux grandes structures.",
  },
  {
    icon: Truck,
    title: "Livraison & installation",
    description: "Nous assurons la livraison et l'installation de vos équipements directement dans vos locaux pour une mise en service rapide.",
  },
]

export default function FournituresPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute inset-x-0 top-0 h-[50rem] bg-gradient-to-b from-accent/20 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm">Équipement de bureau</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
                Fournitures &{" "}
                <span className="text-accent">équipements</span>{" "}
                de bureau
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Le marché étant rempli de fournitures et équipements de bureau de toutes gammes, nous nous assurons de vous trouver les meilleurs produits défiant toutes concurrences et de qualités irréprochables pour vous permettre de travailler sereinement et produire de bons résultats.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="/#contact"
                  className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent/90 transition-colors"
                >
                  Demander un devis
                </a>
                <a href="#details" className="text-sm font-semibold text-foreground hover:text-accent transition-colors">
                  En savoir plus →
                </a>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
              alt="Bureau équipé"
              className="rounded-2xl shadow-2xl ring-1 ring-border w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section id="details" className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Pourquoi nous choisir ?</h2>
            <p className="text-muted-foreground">Des produits de qualité au meilleur prix, sélectionnés pour répondre à vos besoins.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {avantages.map((a) => (
              <div key={a.title} className="bg-card rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 mx-auto">
                  <a.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{a.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-card rounded-3xl border border-border p-10 lg:p-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">Besoin d'un équipement ?</h2>
            <p className="text-muted-foreground mb-8">
              Contactez-nous pour obtenir un devis personnalisé adapté à vos besoins et à votre budget.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
