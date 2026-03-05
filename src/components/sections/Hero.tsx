import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GradientText from "@/components/ui/GradientText";

const Hero = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-blob-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-blob-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px] animate-blob-float" style={{ animationDelay: "4s" }} />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in-up">
          <span className="text-sm">🚀</span>
          <span className="text-sm text-muted-foreground">Société IT de référence en Afrique de l'Ouest</span>
        </div>

        {/* H1 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up stagger-1 opacity-0" style={{ animationFillMode: "forwards" }}>
          Nous donnons du{" "}
          <GradientText className="font-extrabold">style</GradientText>
          <br />
          à vos projets
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up stagger-2 opacity-0" style={{ animationFillMode: "forwards" }}>
          Outsourcing, Infogérance, Web & Apps Design, Call Center — 
          des solutions IT sur mesure pour accélérer votre transformation digitale.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up stagger-3 opacity-0" style={{ animationFillMode: "forwards" }}>
          <Button
            size="lg"
            onClick={() => scrollTo("#services")}
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/25 hover:opacity-90 transition-opacity px-8"
          >
            Découvrir nos services
            <ArrowRight size={18} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("#contact")}
            className="border-border hover:border-primary hover:text-primary transition-all px-8"
          >
            Nous contacter
          </Button>
        </div>

        {/* Mini stats */}
        <div className="flex items-center justify-center gap-8 md:gap-16 animate-fade-in-up stagger-4 opacity-0" style={{ animationFillMode: "forwards" }}>
          {[
            { value: "10+", label: "Années d'expérience" },
            { value: "50+", label: "Clients satisfaits" },
            { value: "100+", label: "Projets livrés" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};

export default Hero;
