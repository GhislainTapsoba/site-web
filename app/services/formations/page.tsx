import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GraduationCap, Monitor, Printer, Server, Router, Tablet, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Formations & Matériel Informatique - Deep Technologies',
  description: 'Formations professionnelles et vente de matériel informatique au Burkina Faso.',
}

const formationAvantages = [
  "Investir davantage les salariés dans la vie de l'entreprise",
  "Rester à la pointe des évolutions technologiques",
  "Avoir des collaborateurs toujours plus qualifiés et compétents",
  "Stratégie à long terme dans un monde professionnel en constante évolution",
  "Améliorer la productivité et l'efficacité des équipes",
]

const materielCategories = [
  { icon: Monitor, label: "Ordinateurs fixes & portables" },
  { icon: Tablet, label: "Tablettes" },
  { icon: Printer, label: "Matériels d'impression" },
  { icon: Server, label: "Serveurs" },
  { icon: Router, label: "Routeurs & équipements réseau" },
]

export default function FormationsPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute inset-x-0 top-0 h-[50rem] bg-gradient-to-b from-primary/20 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold mb-4 uppercase tracking-wider text-sm">Formations & Matériel</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
                Formations &{" "}
                <span className="text-primary">Vente de matériel</span>{" "}
                informatique
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Les entreprises manquent parfois de temps ou encore d'organisation pour entreprendre des formations professionnelles. C'est pourtant un réel atout pour rester à la pointe des évolutions et avoir des collaborateurs toujours plus qualifiés et compétents.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="/#contact"
                  className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
                >
                  Nous contacter
                </a>
                <a href="#details" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                  En savoir plus →
                </a>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200"
              alt="Formation professionnelle"
              className="rounded-2xl shadow-2xl ring-1 ring-border w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Formations */}
      <section id="details" className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200"
              alt="Formation en entreprise"
              className="rounded-2xl shadow-xl ring-1 ring-border w-full object-cover aspect-[4/3]"
            />
            <div>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Formations professionnelles</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                La formation professionnelle continue fait partie d'une stratégie à long terme à prendre en compte dans un monde professionnel qui évolue constamment. Elle possède de nombreuses qualités et avantages pour les entreprises.
              </p>
              <ul className="space-y-3">
                {formationAvantages.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vente matériel */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Monitor className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Vente de matériel informatique</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Notre offre de vente de matériel informatique réunit pour vous et vos collaborateurs un large choix de produits. Nous écoutons en premier lieu vos besoins et vos problématiques, ensuite nous vous proposons la solution la mieux adaptée à vos attentes mais également à vos contraintes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {materielCategories.map((cat) => (
                  <div key={cat.label} className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border">
                    <cat.icon className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{cat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&q=80&w=1200"
              alt="Matériel informatique"
              className="rounded-2xl shadow-xl ring-1 ring-border w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
