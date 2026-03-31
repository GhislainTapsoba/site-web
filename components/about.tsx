"use client"

import Image from "next/image"
import { ArrowRight, Target, Eye, ShieldCheck, Heart, Star, Globe, Users, Headset, Wifi, Code, MonitorSmartphone, GraduationCap, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Link from "next/link"

const stats = [
  { target: 70, suffix: "%", label: "Croissance entreprise" },
]

function AnimatedStat({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 4000
    const steps = 80
    const increment = target / steps
    const interval = duration / steps

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
        setTimeout(() => setCount(0), 2500)
      } else {
        setCount(Math.floor(start))
      }
    }, interval)

    return () => clearInterval(timer)
  }, [count === 0, target])

  return (
    <span className="text-4xl lg:text-5xl font-bold text-foreground">
      {count}{suffix}
    </span>
  )
}

const domaines = [
  {
    icon: Headset,
    title: "Support Utilisateurs",
    description: "Assistance technique et help desk pour vos collaborateurs, à distance ou sur site, pour une productivité sans interruption.",
    href: "/services/infogerance",
  },
  {
    icon: Wifi,
    title: "Solutions de Centre d'Appel",
    description: "Déploiement de solutions multi-canal pour garder le contact avec vos clients sur tous les canaux et améliorer votre relation client.",
    href: "/services/call-center",
  },
  {
    icon: Globe,
    title: "Télécommunications",
    description: "Installation, maintenance et optimisation de vos infrastructures télécom et réseaux pour une connectivité fiable.",
    href: "/services/infogerance",
  },
  {
    icon: Users,
    title: "Externalisation & Prestations",
    description: "Solutions d'externalisation via l'intérim de spécialité et de capacité dans les domaines IT, RH, logistique, finances et marketing.",
    href: "/services/outsourcing",
  },
  {
    icon: Code,
    title: "Développement Web",
    description: "Conception de sites web et applications métiers sur mesure avec les technologies les plus robustes et éprouvées.",
    href: "/services/web-apps",
  },
  {
    icon: MonitorSmartphone,
    title: "Solutions Mobiles",
    description: "Développement d'applications mobiles natives Android et iOS, transformant vos idées en expériences mobiles performantes.",
    href: "/services/web-apps",
  },
  {
    icon: GraduationCap,
    title: "Formations & Matériel",
    description: "Formations professionnelles continues et vente de matériel informatique adapté à vos besoins et contraintes.",
    href: "/services/formations",
  },
  {
    icon: Package,
    title: "Fournitures de Bureau",
    description: "Fournitures et équipements de bureau de qualité irréprochable au meilleur prix pour travailler sereinement.",
    href: "/services/fournitures",
  },
]

const convictions = [
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
    icon: Heart,
    title: "Excellence comme norme",
    description: "Notre équipe hautement qualifiée travaille sans relâche pour créer des solutions technologiques qui dépassent les attentes, tout en offrant un support client inégalé.",
  },
]

export function About() {
  return (
    <section id="about" className="relative overflow-hidden">

      {/* ── Section 1 : Présentation ── */}
      <div className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm">
                À propos de nous
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight mb-6">
                Au-delà des
                <span className="text-accent"> Technologies</span> ...
              </h2>
              <div className="text-muted-foreground leading-relaxed mb-10 space-y-4">
                <p>
                  <strong className="text-foreground">Deep Technologies</strong> est une société à responsabilité limitée ayant son siège à Ouagadougou au Burkina Faso. Créée depuis 2021, elle est spécialisée dans les secteurs d'activités telles que le Support utilisateurs, les Solutions de centre d'appel, les Télécommunications, l'Externalisation et Prestations de services, ainsi que le Développement et la Conception de sites Web et de solutions Mobiles.
                </p>
                <p>
                  Avant notre première intervention, nous venons à votre rencontre pour écouter, échanger sur vos attentes et définir vos priorités. Cette approche est essentielle pour vous conseiller et vous guider dans vos choix stratégiques.
                </p>
              </div>

              <div className="flex gap-8 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <AnimatedStat target={stat.target} suffix={stat.suffix} />
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
                <div>
                  <span className="text-4xl lg:text-5xl font-bold text-foreground">10+</span>
                  <p className="text-sm text-muted-foreground mt-1">Années d'expérience</p>
                </div>
                <div>
                  <span className="text-4xl lg:text-5xl font-bold text-foreground">2021</span>
                  <p className="text-sm text-muted-foreground mt-1">Année de création</p>
                </div>
              </div>

              <Button variant="ghost" className="group text-foreground hover:text-accent" asChild>
                <Link href="#services">
                  Découvrir nos services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

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
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-card/95 backdrop-blur-sm rounded-xl border border-border p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Depuis 2021 — Ouagadougou, Burkina Faso</p>
                    <p className="text-sm font-semibold text-foreground">Votre Partenaire en Excellence Digitale</p>
                  </div>
                </div>
                <div className="absolute top-6 right-6 bg-accent text-accent-foreground rounded-full px-4 py-2">
                  <span className="text-xs font-semibold uppercase tracking-wider">Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 2 : Mission / Vision / Engagement ── */}
      <div className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm">Nos fondements</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Ce qui nous guide</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Notre Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Accompagner la transformation digitale des entreprises burkinabè et africaines en fournissant des solutions IT sur mesure, fiables et innovantes, capables de sécuriser leurs données et d'accélérer leur croissance.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Notre Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Redéfinir l'avenir technologique Mondial et de l'Afrique en particulier, en offrant des solutions innovantes et personnalisées qui propulsent nos clients vers le succès. Être le leader incontesté dans les domaines du Support Utilisateurs, des Solutions de Centre d'Appel, de l'Externalisation et du Développement Web & Mobile en Afrique et au-delà.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Notre Engagement</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                L'excellence est notre norme. Notre équipe hautement qualifiée et dévouée travaille sans relâche pour créer des solutions technologiques qui dépassent les attentes, tout en offrant un support client inégalé pour garantir une expérience sans faille.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 3 : Ce que nous croyons ── */}
      <div className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm">Nos convictions</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ce que nous croyons</h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Nous croyons en l'autonomisation à travers la technologie. Nous croyons que chaque entreprise, grande ou petite, mérite d'avoir accès aux outils les plus avancés pour prospérer dans l'économie mondiale d'aujourd'hui.
              </p>
              <div className="space-y-6">
                {convictions.map((c) => (
                  <div key={c.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <c.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{c.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
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
      </div>

      {/* ── Section 4 : Domaines d'activité ── */}
      <div className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm">Ce que nous faisons</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Nos domaines d'activité</h2>
            <p className="text-muted-foreground">
              Une gamme complète de services technologiques pour accompagner votre transformation digitale.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {domaines.map((d) => (
              <Link
                key={d.title}
                href={d.href}
                className="group bg-background rounded-2xl p-6 border border-border/50 hover:border-accent/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <d.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Section 5 : Notre avenir ensemble ── */}
      <div className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-card rounded-3xl border border-border p-10 lg:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />
            <Globe className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Notre avenir ensemble</h2>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto mb-8">
              Ensemble, nous bâtissons un avenir où la technologie est accessible, inclusive et au service de tous. Nous aspirons à être le partenaire privilégié des entreprises, des organisations gouvernementales et des particuliers. Chez Deep Technologies, nous sommes non seulement les créateurs de technologies, mais aussi les architectes d'un avenir meilleur pour l'Afrique et au-delà.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Travaillons ensemble
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}
