import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import sloganBanner from "@/assets/slogan.jpg";

const SloganBanner = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background with slogan image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={sloganBanner}
          alt="Deep-Technologies Slogan"
          className={`w-full h-full object-cover scale-150 transition-opacity duration-1000 ${imageLoaded ? 'opacity-80' : 'opacity-0'
            }`}
          onLoad={() => setImageLoaded(true)}
        />
        {/* Overlay pour lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Notre Engagement</span>
          </div>

          {/* Slogan principal */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fade-in-up stagger-1">
            <span className="text-foreground">L'Excellence</span>
            <br />
            <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technologique
            </span>
            <br />
            <span className="text-foreground">au Service de</span>
            <br />
            <span className="text-gradient bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Votre Succès
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up stagger-2">
            Transformons vos idées en solutions digitales innovantes.
            Votre partenaire de confiance pour une transformation numérique réussie en Afrique de l'Ouest.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 group"
            >
              <Link to="/portfolio" className="flex items-center gap-2">
                Voir Nos Projets
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/30 hover:border-primary hover:bg-primary/5 transition-all"
            >
              <Link to="#contact" className="flex items-center gap-2">
                Démarrer un Projet
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Stats highlight */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/50">
            {[
              { number: "50+", label: "Projets Livrés" },
              { number: "15+", label: "Années d'Expérience" },
              { number: "98%", label: "Clients Satisfaits" },
              { number: "24/7", label: "Support Technique" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${(index + 4) * 100}ms` }}>
                <div className="text-3xl sm:text-4xl font-bold text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] animate-blob-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-accent/10 rounded-full blur-[80px] animate-blob-float" style={{ animationDelay: "2s" }} />
    </section>
  );
};

export default SloganBanner;
