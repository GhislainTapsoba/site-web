import { CheckCircle2, Zap, Globe, Server, Shield } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";
import logo from "@/assets/logo.jpg";

const values = [
  { label: "Transparence totale", description: "Communication claire à chaque étape" },
  { label: "Professionnalisme", description: "Rigueur et qualité dans nos livrables" },
  { label: "Réactivité garantie", description: "Intervention rapide et support continu" },
  { label: "Solutions sur-mesure", description: "Adaptées à vos besoins spécifiques" },
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Un partenaire IT qui{" "}
              <GradientText>vous comprend</GradientText>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              Depuis 5 ans, Deep-Technologies accompagne les entreprises du Burkina Faso et d'Afrique de l'Ouest dans leur transformation digitale.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Notre approche repose sur l'écoute, l'accompagnement personnalisé et la livraison de solutions sur-mesure qui créent une vraie valeur ajoutée. Notre équipe d'experts passionnés met tout en œuvre pour dépasser vos attentes.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value) => (
                <div key={value.label} className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                  <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-foreground block">{value.label}</span>
                    <span className="text-xs text-muted-foreground">{value.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual - Enhanced */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              {/* Main card */}
              <div className="relative rounded-2xl overflow-hidden glass p-8">
                {/* Logo */}
                <div className="flex items-center justify-center mb-8">
                  <img src={logo} alt="Deep-Technologies" className="h-32 w-auto rounded-lg scale-110" />
                </div>

                {/* Tech icons grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: Globe, label: "Web" },
                    { icon: Server, label: "Cloud" },
                    { icon: Shield, label: "Sécurité" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                      <Icon size={24} className="text-primary" />
                      <span className="text-xs text-muted-foreground">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Mini stats */}
                <div className="flex justify-between p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5">
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground">10+</div>
                    <div className="text-[10px] text-muted-foreground">Ans</div>
                  </div>
                  <div className="w-px bg-border" />
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground">50+</div>
                    <div className="text-[10px] text-muted-foreground">Clients</div>
                  </div>
                  <div className="w-px bg-border" />
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground">4</div>
                    <div className="text-[10px] text-muted-foreground">Services</div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/15 rounded-full blur-[50px]" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/15 rounded-full blur-[60px]" />

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 glass rounded-xl px-3 py-2 animate-blob-float" style={{ animationDuration: "6s" }}>
                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-accent" />
                  <span className="text-xs font-medium text-foreground">Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
