import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Headset, PhoneCall, LineChart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Call Center - Deep-Technologies',
  description: 'Solutions de centre d\'appels professionnelles.',
}

const features = [
  {
    name: 'Logiciel CRM Intégré',
    description: 'Centralisez vos prospects, simplifiez l\'accès à l\'information et boostez la productivité devos agents d\'appel grâce à un outil sur-mesure.',
    icon: Headset,
  },
  {
    name: 'Campagnes Automatisées',
    description: 'Gérez facilement vos appels sortants et entrants, planifiez des rappels et optimisez vos taux de conversion.',
    icon: PhoneCall,
  },
  {
    name: 'Tableaux de bord & Reporting',
    description: 'Analysez les performances en temps réel avec des indicateurs clés (KPI) et prenez des décisions basées sur vos métriques exactes.',
    icon: LineChart,
  },
]

export default function CallCenterPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute inset-x-0 top-0 h-[50rem] bg-gradient-to-b from-accent/20 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:col-span-2 xl:col-auto">
              Call Center Solution
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-muted-foreground">
                Vous avez besoin d'acquérir un logiciel professionnel simple d’utilisation pour piloter efficacement votre activité, centraliser votre base de prospects, booster vos ventes et faciliter le travail de vos commerciaux, améliorer la productivité de vos équipes, améliorer votre relation client, automatiser vos campagnes d’appels et accéder à de nombreuses fonctionnalités? Deep-Technologies vous offre la solution "sur mesure" après étude de vos besoins.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/#contact"
                  className="rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Nous contacter
                </a>
                <a href="#details" className="text-sm font-semibold leading-6 text-foreground hover:text-accent transition-colors">
                  Voir en détails <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=2000"
              alt="Personne dans un centre d'appels"
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 shadow-2xl ring-1 ring-border"
            />
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section id="details" className="py-24 sm:py-32 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-accent">Vos interactions unifiées</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Optimisez votre service client
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-foreground">
                    <feature.icon className="h-6 w-6 flex-none text-accent" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
