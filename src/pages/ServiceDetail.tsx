import { useParams, Link } from "react-router-dom";
import { Users, Shield, Code2, Headphones, ArrowLeft, CheckCircle2 } from "lucide-react";
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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service non trouvé</h1>
          <Link to="/">
            <Button><ArrowLeft size={16} /> Retour à l'accueil</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden grain">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-blob-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-blob-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} /> Retour à l'accueil
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Icon size={28} className="text-primary" />
            </div>
            <span className="text-xs uppercase tracking-widest text-accent font-medium">{service.tag}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <GradientText>{service.title}</GradientText>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
            {service.headline}
          </p>
        </div>
      </section>

      {/* Description */}
      <SectionWrapper className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">À propos de ce service</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{service.description}</p>

              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4">Ce que nous proposons</h3>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">Vos avantages</h3>
                <ul className="space-y-4">
                  {service.benefits.map((b, i) => (
                    <li key={b} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-foreground font-medium pt-1">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Intéressé par ce service ?</p>
                  <Link to="/#contact">
                    <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
                      Demander un devis
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
