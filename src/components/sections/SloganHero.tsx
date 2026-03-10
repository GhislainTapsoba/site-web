import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SloganHero = () => {
  const scrollToContact = () => {
    const contactElement = document.querySelector("#contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-background">
      {/* Image simple et visible */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <img
            src="/slogan.jpg"
            alt="Slogan Deep-Technologies"
            className="w-full h-auto rounded-xl shadow-2xl mb-12 scale-90"
          />

          {/* Texte par-dessus */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Notre Engagement</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
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
            </h1>

            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Transformons vos idées en solutions digitales innovantes.
              Votre partenaire de confiance pour une transformation numérique réussie en Afrique de l'Ouest.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-all shadow-lg"
              >
                <Link to="/portfolio" className="flex items-center gap-2">
                  Voir Nos Projets
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/30 hover:border-primary"
              >
                <button onClick={scrollToContact} className="flex items-center gap-2">
                  Démarrer un Projet
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SloganHero;
