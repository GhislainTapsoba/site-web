import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MonitorSmartphone, Code, Workflow } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web & Apps - Deep-Technologies',
  description: 'Développement de solutions web et mobiles innovantes.',
}

const features = [
  {
    name: 'Design UX/UI Moderne',
    description: 'Des interfaces conçues pour captiver vos utilisateurs, offrant une expérience fluide et intuitive sur tous les appareils.',
    icon: MonitorSmartphone,
  },
  {
    name: 'Technologies Robustes',
    description: 'Nous utilisons les derniers standards (Next.js, React, Node) pour des applications ultra-rapides, évolutives et sécurisées.',
    icon: Code,
  },
  {
    name: 'Accompagnement & Formation',
    description: 'Nous ne faisons pas que livrer du code. Nous vous formons à l\'utilisation de vos nouveaux outils pour une autonomie totale.',
    icon: Workflow,
  },
]

export default function WebAppsPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute inset-x-0 top-0 h-[50rem] bg-gradient-to-b from-primary/20 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:col-span-2 xl:col-auto">
              Web & Apps Design
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-muted-foreground">
                Le référencement étant avant tout une affaire de visibilité, nous développons des applications métiers sur mesure et concevons des sites web. Notre prestation comprend l'accompagnement, la réalisation, l'ergonomie, le graphisme, l'installation, la maintenance et la formation des utilisateurs. Nous réalisons les applications et sites WEB avec des technologies Open Source très robustes et éprouvées.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/#contact"
                  className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Nous contacter
                </a>
                <a href="#details" className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors">
                  Explorer nos expertises <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000"
              alt="Personne développant du code sur un ordinateur portable"
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 shadow-2xl ring-1 ring-border"
            />
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section id="details" className="py-24 sm:py-32 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Excellence Digitale</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Des solutions web à forte valeur ajoutée
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-foreground">
                    <feature.icon className="h-6 w-6 flex-none text-primary" aria-hidden="true" />
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
