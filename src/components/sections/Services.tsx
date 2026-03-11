import { Sparkles, ArrowRight, Crown, Gem, Star, Rocket, Flame, Code2, Shield, Headphones, Users, Zap, Heart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";

// Import des images des services
import outsourcingImg from "@/assets/Outsourcing.jpg";
import infogeranceImg from "@/assets/infogerance.jpg";
import webAppsImg from "@/assets/Digital Technologies.jpg";
import callCenterImg from "@/assets/Call Center.jpg";

const services = [
  {
    icon: Users,
    title: "Outsourcing",
    slug: "outsourcing",
    description: "Accédez aux compétences dont vous avez besoin, quand vous en avez besoin. Nos experts intègrent vos équipes.",
    tag: "Ressources",
    image: outsourcingImg,
  },
  {
    icon: Shield,
    title: "Infogérance",
    slug: "infogerance",
    description: "Sécurisez et optimisez votre parc informatique. Maintenance proactive et support technique dédié.",
    tag: "Infrastructure",
    image: infogeranceImg,
  },
  {
    icon: Code2,
    title: "Web & Apps Design",
    slug: "web-apps",
    description: "Sites web et applications métier sur mesure. Design moderne, performances optimales, expérience utilisateur exceptionnelle.",
    tag: "Développement",
    image: webAppsImg,
  },
  {
    icon: Headphones,
    title: "Call Center Solution",
    slug: "call-center",
    description: "Solutions professionnelles de centre d'appel. Technologie VoIP, CRM intégré et formation des agents.",
    tag: "Communication",
    image: callCenterImg,
  },
];

const Services = () => {
  return (
    <SectionWrapper id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Magical background */}
      <div className="absolute inset-0 -z-10">
        {/* Primary blue/orange orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-amber-500/20 rounded-full blur-3xl animate-blob-float" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 via-orange-500/20 to-blue-500/20 rounded-full blur-3xl animate-blob-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-orange-500/15 via-blue-500/15 to-cyan-500/15 rounded-full blur-2xl animate-blob-float" style={{ animationDelay: "4s" }} />

        {/* Emerald accent orbs */}
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-green-500/15 rounded-full blur-2xl animate-blob-float" style={{ animationDelay: "6s" }} />
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-gradient-to-r from-green-500/12 via-emerald-500/12 to-teal-500/12 rounded-full blur-xl animate-blob-float" style={{ animationDelay: "8s" }} />

        {/* Magical particles with new emerald ones */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
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
          {[...Array(4)].map((_, i) => (
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
        {/* Magical header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 mb-6 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Crown className="w-4 h-4 text-blue-400 relative z-10" />
            <span className="text-sm text-blue-300 font-medium relative z-10">Services Énergiques</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Des solutions <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">dynamiques</span>
          </h2>
          <p className="text-blue-200 max-w-xl mx-auto">
            Nous transformons vos idées en <span className="text-blue-100 font-semibold">expériences digitales performantes</span> avec des services adaptés à vos besoins.
          </p>
        </div>

        {/* Magical grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl glass border border-blue-400/20 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Magical background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Emerald accent layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/3 via-teal-500/2 to-transparent opacity-0 group-hover:opacity-30 transition-all duration-700"></div>

              {/* Background Image with magical overlay */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20"></div>
              </div>

              {/* Magical content */}
              <div className="relative p-8">
                {/* Magical icon container */}
                <div className="relative mb-6">
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 via-orange-500/20 to-amber-500/20 flex items-center justify-center relative z-10 border border-blue-400/30 group-hover:border-blue-400/50 transition-all duration-500">
                    <service.icon size={32} className="text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full opacity-60 animate-pulse">
                    <Sparkles className="w-2 h-2 text-white m-auto" />
                  </div>
                  {/* NEW: Emerald accent element */}
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-500 animate-pulse" style={{ animationDelay: "0.5s" }}>
                    <TrendingUp className="w-1.5 h-1.5 text-white m-auto" />
                  </div>
                </div>

                {/* Magical tag with emerald accent */}
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-blue-400/30 bg-blue-500/10 mb-4">
                  <Gem className="w-3 h-3 text-blue-400" />
                  <span className="text-[10px] uppercase tracking-widest text-blue-300 font-medium">{service.tag}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-blue-100 mb-3 group-hover:text-blue-50 transition-colors duration-300">{service.title}</h3>

                {/* Description */}
                <p className="text-blue-200 leading-relaxed mb-6 group-hover:text-blue-100 transition-colors duration-300">{service.description}</p>

                {/* Magical CTA with emerald accent */}
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-400/30 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 group"
                >
                  <span className="text-blue-300 group-hover:text-blue-200 transition-colors">Découvrir la performance</span>
                  <Rocket className="w-4 h-4 text-blue-400 group-hover:translate-x-1 group-hover:text-blue-300 transition-all duration-300" />
                </Link>

                {/* Floating magical elements with emerald */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-500 animate-bounce" style={{ animationDuration: "4s" }}>
                  <Star className="w-3 h-3 text-white m-auto" />
                </div>
                <div className="absolute bottom-4 left-4 w-5 h-5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-500 animate-pulse" style={{ animationDelay: "1s" }}>
                  <Heart className="w-2.5 h-2.5 text-white m-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;
