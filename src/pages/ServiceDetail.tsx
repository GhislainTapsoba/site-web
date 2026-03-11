import { useParams, Link } from "react-router-dom";
import { Users, Shield, Code2, Headphones, ArrowLeft, CheckCircle2, Sparkles, ArrowRight, Crown, Gem, Star, Rocket, Flame, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";

const servicesData: Record<string, {
  icon: typeof Users;
  title: string;
  tag: string;
  headline: string;
  description: string;
  features: string[];
  benefits: string[];
}> = {
  outsourcing: {
    icon: Users,
    title: "Outsourcing",
    tag: "Ressources",
    headline: "Accédez aux talents IT dont vous avez besoin",
    description: "Notre service d'outsourcing vous permet de renforcer vos équipes avec des experts qualifiés en développement, administration système, support technique et gestion de projets. Nous sélectionnons rigoureusement nos consultants pour garantir une intégration fluide dans votre environnement.",
    features: [
      "Mise à disposition de développeurs fullstack",
      "Administrateurs systèmes et réseaux",
      "Chefs de projets IT certifiés",
      "Support technique niveau 1, 2 et 3",
      "Gestion flexible des contrats",
      "Formation et montée en compétences",
    ],
    benefits: [
      "Réduction des coûts de recrutement",
      "Accès à un vivier de talents diversifié",
      "Flexibilité et scalabilité des équipes",
      "Expertise immédiatement opérationnelle",
    ],
  },
  infogerance: {
    icon: Shield,
    title: "Infogérance",
    tag: "Infrastructure",
    headline: "Sécurisez et optimisez votre infrastructure IT",
    description: "Confiez-nous la gestion complète de votre parc informatique. Notre équipe assure la maintenance préventive, la supervision 24/7, la sécurité de vos données et l'optimisation continue de vos performances réseau et serveur.",
    features: [
      "Supervision et monitoring 24/7",
      "Maintenance préventive et corrective",
      "Gestion des sauvegardes et PRA",
      "Sécurité réseau et pare-feu",
      "Gestion des mises à jour et patchs",
      "Helpdesk et support utilisateurs",
    ],
    benefits: [
      "Disponibilité maximale de vos systèmes",
      "Réduction des incidents et pannes",
      "Conformité et sécurité renforcées",
      "Maîtrise de votre budget IT",
    ],
  },
  "web-apps": {
    icon: Code2,
    title: "Web & Apps Design",
    tag: "Développement",
    headline: "Des applications web et mobiles sur mesure",
    description: "Nous concevons et développons des sites web modernes, des applications métier et des solutions e-commerce adaptées à vos besoins. Notre approche UX-first garantit des interfaces intuitives et des performances optimales.",
    features: [
      "Sites vitrines et e-commerce",
      "Applications métier sur mesure",
      "Applications mobiles (iOS & Android)",
      "Intégration API et systèmes tiers",
      "UI/UX Design responsive",
      "Maintenance et évolutions continues",
    ],
    benefits: [
      "Design moderne et professionnel",
      "Performances et SEO optimisés",
      "Expérience utilisateur exceptionnelle",
      "Solutions évolutives et maintenables",
    ],
  },
  "call-center": {
    icon: Headphones,
    title: "Call Center Solution",
    tag: "Communication",
    headline: "Solutions professionnelles de centre d'appel",
    description: "Déployez un centre d'appel performant avec nos solutions VoIP, CRM intégré et outils de supervision en temps réel. Nous vous accompagnons de la conception à la formation de vos équipes pour une relation client d'excellence.",
    features: [
      "Installation et configuration VoIP/IPBX",
      "CRM et ticketing intégrés",
      "Supervision et tableaux de bord temps réel",
      "Enregistrement et analyse des appels",
      "IVR et routage intelligent",
      "Formation des agents et superviseurs",
    ],
    benefits: [
      "Amélioration de la satisfaction client",
      "Réduction des temps d'attente",
      "Pilotage par la donnée",
      "Scalabilité de votre centre d'appel",
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900/20 via-orange-900/20 to-amber-900/20 flex items-center justify-center relative overflow-hidden">
        {/* Magical background - Portfolio palette */}
        <div className="absolute inset-0 -z-10">
          {/* Primary blue/orange orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-amber-500/20 rounded-full blur-3xl animate-blob-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 via-orange-500/20 to-blue-500/20 rounded-full blur-3xl animate-blob-float" style={{ animationDelay: "2s" }} />

          {/* Emerald accent orbs */}
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-green-500/15 rounded-full blur-2xl animate-blob-float" style={{ animationDelay: "4s" }} />
        </div>

        <div className="text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 mb-6">
            <Crown className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">Service Performant Introuvable</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-blue-100">Ce service n'existe pas</h1>
          <Link to="/">
            <Button className="bg-gradient-to-r from-blue-500 to-orange-500 text-white hover:scale-[1.02] transition-all">
              <ArrowLeft size={16} /> Retour à la performance
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900/20 via-orange-900/20 to-amber-900/20">
      <Navbar />

      {/* Magical Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden grain">
        {/* Magical background - Portfolio palette */}
        <div className="absolute inset-0 -z-10">
          {/* Primary blue/orange orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/25 via-orange-500/25 to-amber-500/25 rounded-full blur-3xl animate-blob-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/25 via-orange-500/25 to-blue-500/25 rounded-full blur-3xl animate-blob-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-3/4 right-1/3 w-72 h-72 bg-gradient-to-r from-orange-500/20 via-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-blob-float" style={{ animationDelay: "4s" }} />

          {/* Emerald accent orbs */}
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-green-500/15 rounded-full blur-2xl animate-blob-float" style={{ animationDelay: "6s" }} />
          <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-gradient-to-r from-green-500/12 via-emerald-500/12 to-teal-500/12 rounded-full blur-xl animate-blob-float" style={{ animationDelay: "8s" }} />

          {/* Magical particles with new emerald ones */}
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
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
            {[...Array(5)].map((_, i) => (
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
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 mb-6 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Crown className="w-4 h-4 text-blue-400 relative z-10" />
              <span className="text-sm text-blue-300 font-medium relative z-10">Service Dynamique</span>
            </div>
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 via-orange-500/20 to-amber-500/20 flex items-center justify-center border border-blue-400/30">
                <Icon size={40} className="text-blue-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">{service.title}</span>
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Magical Description */}
      <SectionWrapper className="py-20 relative overflow-hidden">
        {/* Magical background - Portfolio palette */}
        <div className="absolute inset-0 -z-10">
          {/* Primary blue/orange orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/15 via-orange-500/15 to-amber-500/15 rounded-full blur-3xl animate-blob-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/15 via-orange-500/15 to-blue-500/15 rounded-full blur-3xl animate-blob-float" style={{ animationDelay: "2s" }} />

          {/* Emerald accent orbs */}
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/12 via-teal-500/12 to-green-500/12 rounded-full blur-2xl animate-blob-float" style={{ animationDelay: "4s" }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 mb-6">
                <Crown className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300 font-medium">À propos de ce service performant</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-blue-100">Découvrez notre expertise</h2>
              <p className="text-blue-200 leading-relaxed text-lg">{service.description}</p>

              <div className="mt-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/30 bg-blue-500/10 mb-4">
                  <Star className="w-3 h-3 text-blue-400" />
                  <span className="text-xs text-blue-300 font-medium">Ce que nous proposons de performant</span>
                </div>
                <ul className="space-y-4">
                  {service.features.map((f, index) => (
                    <li key={f} className="flex items-start gap-4 p-4 rounded-xl glass border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 group">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 via-orange-500/20 to-amber-500/20 flex items-center justify-center relative z-10 border border-blue-400/30">
                          <CheckCircle2 size={20} className="text-blue-300" />
                        </div>
                      </div>
                      <span className="text-blue-200 group-hover:text-blue-100 transition-colors">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="glass rounded-2xl p-8 border border-blue-400/30 relative">
                {/* Background magical effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-orange-500/5 to-amber-500/5 rounded-2xl"></div>

                {/* Emerald accent layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/3 via-teal-500/2 to-transparent rounded-2xl"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/30 bg-blue-500/10 mb-6">
                    <Zap className="w-3 h-3 text-blue-400" />
                    <span className="text-xs text-blue-300 font-medium">Vos avantages performants</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-blue-100">Bénéfices extraordinaires</h3>
                  <ul className="space-y-4">
                    {service.benefits.map((b, i) => (
                      <li key={b} className="flex items-start gap-4">
                        <div className="relative group">
                          <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm shrink-0 relative z-10">
                            {i + 1}
                          </div>
                        </div>
                        <span className="text-blue-200 font-medium pt-1 group-hover:text-blue-100 transition-colors">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-blue-400/20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/30 bg-blue-500/10 mb-4">
                      <Rocket className="w-3 h-3 text-blue-400" />
                      <span className="text-xs text-blue-300 font-medium">Prêt pour la performance ?</span>
                    </div>
                    <Link to="/#contact">
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-orange-500 text-white hover:scale-[1.02] transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40">
                        Demander un devis performant
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div >
  );
};

export default ServiceDetail;
