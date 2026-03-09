import { useState } from "react";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";

type Category = "all" | "web" | "app" | "infogerance" | "callcenter";

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "Tous" },
  { value: "web", label: "Web & Apps" },
  { value: "app", label: "Applications" },
  { value: "infogerance", label: "Infogérance" },
  { value: "callcenter", label: "Call Center" },
];

const projects = [
  {
    title: "Portail E-commerce BNDA",
    category: "web" as Category,
    description: "Plateforme e-commerce complète pour une institution bancaire, avec paiement en ligne et gestion des stocks.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "Application RH - Coris Bank",
    category: "app" as Category,
    description: "Application de gestion des ressources humaines avec suivi des congés, évaluations et paie intégrée.",
    tech: ["React Native", "Firebase", "Node.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Infrastructure Cloud - ONATEL",
    category: "infogerance" as Category,
    description: "Migration complète de l'infrastructure vers le cloud avec haute disponibilité et supervision 24/7.",
    tech: ["AWS", "Docker", "Terraform"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    title: "Centre d'appel - Orange BF",
    category: "callcenter" as Category,
    description: "Déploiement d'une solution de centre d'appel multi-canal avec CRM intégré et supervision temps réel.",
    tech: ["Asterisk", "VoIP", "CRM"],
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop",
  },
  {
    title: "Site vitrine - Bigger Agency",
    category: "web" as Category,
    description: "Site web premium avec animations avancées, SEO optimisé et design responsive pour une agence créative.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
  },
  {
    title: "App de suivi logistique",
    category: "app" as Category,
    description: "Application mobile de suivi des livraisons en temps réel avec géolocalisation et notifications push.",
    tech: ["Flutter", "Firebase", "Google Maps"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
  },
  {
    title: "Sécurité réseau - Data-Quality",
    category: "infogerance" as Category,
    description: "Audit de sécurité complet, mise en place de pare-feu nouvelle génération et plan de continuité d'activité.",
    tech: ["Fortinet", "Palo Alto", "SIEM"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop"
  },
  {
    title: "Plateforme e-learning",
    category: "web" as Category,
    description: "Plateforme de formation en ligne avec vidéos, quiz interactifs, certificats et tableau de bord administrateur.",
    tech: ["React", "Django", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
  },
];

const Portfolio = () => {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden grain">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-blob-float" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-blob-float" style={{ animationDelay: "3s" }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} /> Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Notre <GradientText>Portfolio</GradientText>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Découvrez une sélection de projets réalisés pour nos clients à travers l'Afrique de l'Ouest.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <SectionWrapper className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${active === cat.value
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/25"
                    : "glass text-muted-foreground hover:text-foreground hover:border-primary/40"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <div
                key={project.title}
                className="group glass rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-2 rounded-full glass">
                      <ExternalLink size={16} className="text-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-primary/10 text-primary font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="glass rounded-2xl p-12 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Vous avez un <GradientText>projet</GradientText> ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Discutons ensemble de vos besoins et transformons votre vision en réalité.
            </p>
            <Link to="/#contact">
              <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 px-8" size="lg">
                Démarrer un projet
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default Portfolio;
