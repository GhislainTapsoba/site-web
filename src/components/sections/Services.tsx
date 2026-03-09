import { Users, Shield, Code2, Headphones, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";

const services = [
  {
    icon: Users,
    title: "Outsourcing",
    slug: "outsourcing",
    description: "Accédez aux compétences dont vous avez besoin, quand vous en avez besoin. Nos experts intègrent vos équipes.",
    tag: "Ressources",
  },
  {
    icon: Shield,
    title: "Infogérance",
    slug: "infogerance",
    description: "Sécurisez et optimisez votre parc informatique. Maintenance proactive et support technique dédié.",
    tag: "Infrastructure",
  },
  {
    icon: Code2,
    title: "Web & Apps Design",
    slug: "web-apps",
    description: "Sites web et applications métier sur mesure. Design moderne, performances optimales, expérience utilisateur exceptionnelle.",
    tag: "Développement",
  },
  {
    icon: Headphones,
    title: "Call Center Solution",
    slug: "call-center",
    description: "Solutions professionnelles de centre d'appel. Technologie VoIP, CRM intégré et formation des agents.",
    tag: "Communication",
  },
];

const Services = () => {
  return (
    <SectionWrapper id="services" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 mb-4">
            <span className="text-xs font-medium text-primary">Nos Prestations</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Des solutions <GradientText>sur mesure</GradientText>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Nous vous accompagnons dans votre transformation digitale avec des services adaptés à vos besoins.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative p-6 rounded-xl glass hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                <service.icon size={24} className="text-primary" />
              </div>

              {/* Tag */}
              <span className="text-[10px] uppercase tracking-widest text-accent font-medium">{service.tag}</span>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>

              {/* Link */}
              <Link
                to={`/services/${service.slug}`}
                className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all"
              >
                En savoir plus <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;
