import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { projects } from "@/lib/projects"
import { ArrowLeft, Calendar, Clock, CheckCircle2, Tag } from "lucide-react"
import Link from "next/link"

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} - Deep Technologies`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[50rem] bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <Link href="/#portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Retour au portfolio
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                {project.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-6 mb-8">
                {project.client && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Tag className="w-4 h-4 text-primary" />
                    <span><strong className="text-foreground">Client :</strong> {project.client}</span>
                  </div>
                )}
                {project.duration && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span><strong className="text-foreground">Durée :</strong> {project.duration}</span>
                  </div>
                )}
                {project.year && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span><strong className="text-foreground">Année :</strong> {project.year}</span>
                  </div>
                )}
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-xs font-semibold uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border">
              <img src={project.image} alt={project.title} className="w-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge + Solution */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Le défi</h2>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-2xl">💡</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Notre solution</h2>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Résultats */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Résultats obtenus</h2>
            <p className="text-muted-foreground">Des résultats concrets et mesurables pour notre client.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results.map((result, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-foreground font-medium leading-relaxed">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-20 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Aperçu du projet</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.gallery.map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-border">
                  <img src={img} alt={`${project.title} - ${i + 1}`} className="w-full object-cover aspect-video" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-card rounded-3xl border border-border p-10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">Un projet similaire en tête ?</h2>
            <p className="text-muted-foreground mb-8">Discutons de vos besoins et voyons comment nous pouvons vous aider à atteindre vos objectifs.</p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Démarrer un projet
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
