import { Target, Award, ShieldCheck, Settings, Zap, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";

const features = [
  { icon: Target, title: "Approche par compétences", description: "Des experts qualifiés pour chaque domaine d'intervention.", accent: "from-primary/20 to-primary/5" },
  { icon: Award, title: "Professionnalisme", description: "Qualité et rigueur dans chaque livrable et interaction.", accent: "from-accent/20 to-accent/5" },
  { icon: ShieldCheck, title: "Intégrité", description: "Transparence et honnêteté au cœur de nos engagements.", accent: "from-primary/20 to-primary/5" },
  { icon: Settings, title: "Services sur mesure", description: "Chaque solution est adaptée à vos besoins spécifiques.", accent: "from-accent/20 to-accent/5" },
  { icon: Zap, title: "Réactivité", description: "Des délais de réponse et d'intervention optimisés.", accent: "from-primary/20 to-primary/5" },
  { icon: Users, title: "Accompagnement complet", description: "Un suivi de bout en bout, de l'audit au déploiement.", accent: "from-accent/20 to-accent/5" },
];

const WhyUs = () => {
  return (
    <SectionWrapper className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left - sticky text */}
          <div className="lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 mb-4">
              <span className="text-xs font-medium text-primary">Nos atouts</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Pourquoi <GradientText>nous choisir</GradientText>
            </h2>
            <p className="text-muted-foreground mb-8">
              Ce qui fait de Deep-Technologies un partenaire de confiance pour votre entreprise.
            </p>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all font-medium"
            >
              Voir nos réalisations <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right - feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-6 rounded-2xl glass hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.accent} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <f.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyUs;
