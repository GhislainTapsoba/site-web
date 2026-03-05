import { Target, Award, ShieldCheck, Settings, Zap, Users } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";

const features = [
  { icon: Target, title: "Approche par compétences", description: "Des experts qualifiés pour chaque domaine d'intervention." },
  { icon: Award, title: "Professionnalisme", description: "Qualité et rigueur dans chaque livrable et interaction." },
  { icon: ShieldCheck, title: "Intégrité", description: "Transparence et honnêteté au cœur de nos engagements." },
  { icon: Settings, title: "Services sur mesure", description: "Chaque solution est adaptée à vos besoins spécifiques." },
  { icon: Zap, title: "Réactivité", description: "Des délais de réponse et d'intervention optimisés." },
  { icon: Users, title: "Accompagnement complet", description: "Un suivi de bout en bout, de l'audit au déploiement." },
];

const WhyUs = () => {
  return (
    <SectionWrapper className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 mb-4">
            <span className="text-xs font-medium text-primary">Nos atouts</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Pourquoi <GradientText>nous choisir</GradientText>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ce qui fait de Deep-Technologies un partenaire de confiance pour votre entreprise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-xl glass hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyUs;
