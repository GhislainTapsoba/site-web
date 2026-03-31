import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Target, Eye, Heart, Star, Users, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'À propos - Deep Technologies',
  description: 'Découvrez Deep Technologies, votre partenaire technologique au Burkina Faso depuis 2021.',
}

const beliefs = [
  {
    icon: Users,
    title: "Autonomisation par la technologie",
    description: "Nous croyons que chaque entreprise, grande ou petite, mérite d'avoir accès aux outils les plus avancés pour prospérer dans l'économie mondiale d'aujourd'hui.",
  },
  {
    icon: Star,
    title: "Innovation constante",
    description: "Nous repoussons les limites de la créativité pour créer des expériences utilisateur exceptionnelles et des solutions sur mesure qui répondent aux besoins uniques de nos clients.",
  },
  {
    icon: Globe,
    title: "Un avenir inclusif",
    description: "Nous aspirons à être le partenaire privilégié des entreprises, des organisations gouvernementales et des particuliers, en leur offrant des solutions technologiques révolutionnaires.",
  },
]

const values = [
  {
    icon: Target,
    title: "Notre Mission",
    description: "Accompagner la transformation digitale des entreprises burkinabè et africaines en fournissant des solutions IT sur mesure, fiables et innovantes, capables de sécuriser leurs données et d'accélérer leur croissance.",
  },
  {
    icon: Eye,
    title: "Notre Vision",
    description: "Redéfinir l'avenir technologique de l'Afrique en offrant des solutions innovantes et personnalisées. Être le leader incontesté dans les domaines du Support Utilisateurs, des Solutions de Centre d'Appel, de l'Externalisation et du Développement Web & Mobile en Afrique et au-delà.",
  },
  {
    icon: Heart,
    title: "Notre Engagement",
    description: "L'excellence est notre norme. Notre équipe hautement qualifiée travaille sans relâche pour créer des solutions technologiques qui dépassent les attentes, tout en offrant un support client inégalé pour garantir une expérience sans faille.",
  },
]

const domains = [
  "Support utilisateurs",
  "Solutions de centre d'appel",
  "Télécommunications",
  "Externalisation et prestations de services",
  "Développement de sites Web",
  "Solutions Mobiles",
]

export default function AProposPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute inset-x-0 top-0 h-[50rem] bg-gradient-to-b from-accent/20 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm">Depuis 2021</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
                À propos de{" "}
                <span className="text-accent">Deep Technologies</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Deep Technologies est une société à responsabilité limitée ayant son siège à Ouagadougou au Burkina Faso. Créée depuis 2021, elle est spécialisée dans les secteurs d'activités telles que le Support utilisateurs, les Solutions de centre d'appel, les Télécommunications, l'Externalisation et Prestations de services, ainsi que le Développement et la Conception de sites Web et de solutions Mobiles.
              </p>
              <div className="flex flex-wrap gap-3">
                {domains.map((d) => (
                  <span key={d} className="px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-sm text-accent font-medium">
                    {d}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                alt="Équipe Deep Technologies"
                className="rounded-2xl shadow-2xl ring-1 ring-border w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-xl">
                <p className="text-3xl font-bold text-foreground">2021</p>
                <p className="text-sm text-muted-foreground">Année de création</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-accent text-white rounded-2xl p-4 shadow-xl">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm">Années d'expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Engagement */}
      <section className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Nos fondements</h2>
            <p className="text-muted-foreground">Ce qui nous guide au quotidien dans chacune de nos actions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-card rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <v.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce que nous croyons */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm">Nos convictions</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ce que nous croyons</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nous croyons en l'autonomisation à travers la technologie. Nous croyons que chaque entreprise, grande ou petite, mérite d'avoir accès aux outils les plus avancés pour prospérer dans l'économie mondiale d'aujourd'hui.
              </p>
              <div className="space-y-6">
                {beliefs.map((b) => (
                  <div key={b.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <b.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{b.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                alt="Équipe en collaboration"
                className="rounded-2xl shadow-2xl ring-1 ring-border w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notre avenir ensemble */}
      <section className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-card rounded-3xl border border-border p-10 lg:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />
            <Globe className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Notre avenir ensemble</h2>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto mb-8">
              Ensemble, nous bâtissons un avenir où la technologie est accessible, inclusive et au service de tous. Chez Deep Technologies, nous sommes non seulement les créateurs de technologies, mais aussi les architectes d'un avenir meilleur pour l'Afrique et au-delà.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Travaillons ensemble
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
