import { CheckCircle2, Zap } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";

const values = [
  "Transparence totale",
  "Professionnalisme",
  "Réactivité garantie",
  "Solutions sur-mesure",
];

const About = () => {
  return (
    <SectionWrapper id="apropos" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 mb-4">
              <span className="text-xs font-medium text-primary">Notre histoire</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Un partenaire IT qui <GradientText>vous comprend</GradientText>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Depuis plus de 10 ans, Deep-Technologies accompagne les entreprises du Burkina Faso et d'Afrique de l'Ouest dans leur transformation digitale. Notre approche repose sur l'écoute, l'accompagnement personnalisé et la livraison de solutions sur-mesure qui créent une vraie valeur ajoutée.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Notre équipe d'experts passionnés met tout en œuvre pour dépasser vos attentes et faire de chaque projet une réussite.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-success shrink-0" />
                  <span className="text-sm text-foreground">{value}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              En savoir plus →
            </button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Abstract tech visual */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border" />
              <div className="absolute inset-4 rounded-xl glass flex items-center justify-center">
                <div className="text-center">
                  <Zap size={64} className="mx-auto text-primary mb-4" />
                  <div className="text-2xl font-bold text-foreground mb-2">Innovation</div>
                  <div className="text-sm text-muted-foreground">Technologie de pointe</div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-[40px]" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-[50px]" />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
