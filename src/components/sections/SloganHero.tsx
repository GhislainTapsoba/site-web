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
    <section className="relative py-20 lg:py-32 overflow-hidden bg-background grain">
      {/* Magical background avec nouvelle palette */}
      <div className="absolute inset-0 -z-10">
        {/* Primary blue/orange orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/25 via-orange-500/25 to-amber-500/25 rounded-full blur-3xl animate-blob-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/25 via-orange-500/25 to-blue-500/25 rounded-full blur-3xl animate-blob-float" style={{ animationDelay: "2s" }} />

        {/* Emerald accent orbs */}
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-green-500/15 rounded-full blur-2xl animate-blob-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-2 lg:gap-4 items-start lg:items-center">
          {/* Image à gauche */}
          <div className="order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:mx-0 lg:mt-4">
              <img
                src="/slogan.jpg"
                alt="Slogan Deep-Technologies"
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              {/* Magical border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-orange-500/30 to-amber-500/30 rounded-2xl blur-sm opacity-50"></div>
            </div>
          </div>

          {/* Slogan à droite */}
          <div className="order-1 lg:order-2 text-left lg:text-left lg:mt-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 mb-8 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Sparkles className="w-4 h-4 text-blue-400 relative z-10" />
              <span className="text-sm text-blue-300 font-medium relative z-10">Notre Engagement</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
              <span className="text-blue-100">L'Excellence</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                Technologique
              </span>
              <br />
              <span className="text-blue-100">au Service de</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-blue-400 bg-clip-text text-transparent">
                Votre Succès
              </span>
            </h1>

            <p className="text-xl text-blue-200 mb-12 max-w-2xl">
              Transformons vos idées en solutions digitales innovantes.
              Votre partenaire de confiance pour une transformation numérique réussie en Afrique de l'Ouest.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-start">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-orange-500 text-white hover:scale-[1.02] transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 relative overflow-hidden group"
              >
                <Link to="/portfolio" className="flex items-center gap-2 relative z-10">
                  Voir Nos Projets
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-blue-400/30 hover:border-blue-400/60 text-blue-300 hover:text-blue-200 bg-blue-500/10 hover:bg-blue-500/20 transition-all"
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
