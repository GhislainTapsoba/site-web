import { useState } from "react";
import { ExternalLink, ArrowLeft, Sparkles, ArrowRight, Crown, Gem, Star, Rocket, Flame, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";
import teamProject from "@/assets/teamproject.jpg";

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
    title: "Application de Gestion de Projets : Team Project",
    category: "web" as Category,
    description: "Plateforme web complète permettant le suivi des taches dans une structure .",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: teamProject,
  },
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900/20 via-orange-900/20 to-amber-900/20">
      <Navbar />

      {/* Magical Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden grain">
        {/* Magical background */}
        <div className="absolute inset-0 -z-10">
          {/* Primary blue/orange orbs */}
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-500/25 via-orange-500/25 to-amber-500/25 rounded-full blur-3xl animate-blob-float" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/25 via-orange-500/25 to-blue-500/25 rounded-full blur-3xl animate-blob-float" style={{ animationDelay: "3s" }} />
          <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-orange-500/20 via-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-blob-float" style={{ animationDelay: "5s" }} />

          {/* NEW: Emerald accent orbs */}
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-green-500/15 rounded-full blur-2xl animate-blob-float" style={{ animationDelay: "7s" }} />
          <div className="absolute bottom-1/2 right-1/3 w-56 h-56 bg-gradient-to-r from-green-500/12 via-emerald-500/12 to-teal-500/12 rounded-full blur-xl animate-blob-float" style={{ animationDelay: "9s" }} />

          {/* Magical particles with new emerald ones */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
            {[...Array(6)].map((_, i) => (
              <div
                key={`emerald-${i}`}
                className="absolute w-1.5 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-blue-100 transition-colors mb-8 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Retour à l'énergie
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 mb-6 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Crown className="w-4 h-4 text-blue-400 relative z-10" />
            <span className="text-sm text-blue-300 font-medium relative z-10">Portfolio Dynamique</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Notre <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">Portfolio Performant</span>
          </h1>
          <p className="text-lg text-blue-200 max-w-2xl">
            Découvrez une sélection de <span className="text-blue-100 font-semibold">projets performants</span> réalisés pour nos clients à travers l'Afrique de l'Ouest.
          </p>
        </div>
      </section>

      {/* Magical Filters + Grid */}
      <SectionWrapper className="py-16 relative overflow-hidden">
        {/* Magical background */}
        <div className="absolute inset-0 -z-10">
          {/* Primary blue/orange orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/15 via-orange-500/15 to-amber-500/15 rounded-full blur-3xl animate-blob-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/15 via-orange-500/15 to-blue-500/15 rounded-full blur-3xl animate-blob-float" style={{ animationDelay: "2s" }} />

          {/* Emerald accent orbs */}
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/12 via-teal-500/12 to-green-500/12 rounded-full blur-2xl animate-blob-float" style={{ animationDelay: "4s" }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Magical filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group ${active === cat.value
                  ? "bg-gradient-to-r from-blue-500 to-orange-500 text-white shadow-lg shadow-blue-500/30 hover:scale-[1.02]"
                  : "glass border border-blue-400/30 text-blue-300 hover:border-blue-400/60 hover:text-blue-200"
                  }`}
              >
                {active === cat.value && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
                <div className="relative z-10 flex items-center gap-2">
                  {active === cat.value && <Sparkles className="w-3 h-3" />}
                  {cat.label}
                </div>
              </button>
            ))}
          </div>

          {/* Magical grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <div
                key={project.title}
                className="group glass rounded-2xl overflow-hidden border border-blue-400/20 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 relative"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Background magical effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>

                {/* Emerald accent layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/3 via-teal-500/2 to-transparent opacity-0 group-hover:opacity-30 transition-all duration-700 rounded-2xl"></div>

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent" />

                  {/* Magical overlay */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="p-3 rounded-full glass border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 group">
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                      <ExternalLink size={18} className="text-blue-300 relative z-10 group-hover:text-blue-200 transition-colors" />
                    </div>
                  </div>

                  {/* Floating magical elements with emerald */}
                  <div className="absolute top-4 left-4 w-6 h-6 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse">
                    <Star className="w-3 h-3 text-white m-auto" />
                  </div>
                  <div className="absolute bottom-4 right-4 w-5 h-5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-500 animate-pulse" style={{ animationDelay: "0.5s" }}>
                    <Zap className="w-2.5 h-2.5 text-white m-auto" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold text-blue-100 mb-3 group-hover:text-blue-50 transition-colors duration-300">{project.title}</h3>
                  <p className="text-blue-200 leading-relaxed mb-4 group-hover:text-blue-100 transition-colors duration-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-md bg-gradient-to-r from-blue-500/20 to-orange-500/20 text-blue-300 font-medium border border-blue-400/30">
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

      {/* Magical CTA */}
      <SectionWrapper className="py-20 relative overflow-hidden">
        {/* Magical background */}
        <div className="absolute inset-0 -z-10">
          {/* Primary blue/orange orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-amber-500/20 rounded-full blur-3xl animate-blob-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 via-orange-500/20 to-blue-500/20 rounded-full blur-3xl animate-blob-float" style={{ animationDelay: "2s" }} />

          {/* Emerald accent orbs */}
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-green-500/15 rounded-full blur-2xl animate-blob-float" style={{ animationDelay: "4s" }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <div className="glass rounded-2xl p-12 max-w-2xl mx-auto border border-blue-400/30 relative">
            {/* Background magical effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-orange-500/5 to-amber-500/5 rounded-2xl"></div>

            {/* Emerald accent layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/3 via-teal-500/2 to-transparent rounded-2xl"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 mb-6">
                <Rocket className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300 font-medium">Prêt pour la performance ?</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-blue-100">
                Vous avez un <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">projet dynamique</span> ?
              </h2>
              <p className="text-blue-200 mb-8">
                Discutons ensemble de vos besoins et transformons votre vision en <span className="text-blue-100 font-semibold">réalité performante</span>.
              </p>
              <Link to="/#contact">
                <Button className="bg-gradient-to-r from-blue-500 to-orange-500 text-white hover:scale-[1.02] transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 px-8" size="lg">
                  Démarrer un projet performant
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default Portfolio;
