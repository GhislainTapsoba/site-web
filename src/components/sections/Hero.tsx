import { ChevronDown, ArrowRight, Code2, Shield, Headphones, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import GradientText from "@/components/ui/GradientText";
import { useEffect, useState } from "react";
import SloganBanner from "./SloganBanner";
import SloganHero from "./SloganHero";

const words = ["du style", "de la vie", "du sens", "de la force"];

const floatingCards = [
  { icon: Code2, label: "Web & Apps", x: "left-[5%]", y: "top-[20%]", delay: "0s" },
  { icon: Shield, label: "Infogérance", x: "right-[5%]", y: "top-[25%]", delay: "1s" },
  { icon: Users, label: "Outsourcing", x: "left-[8%]", y: "bottom-[25%]", delay: "2s" },
  { icon: Headphones, label: "Call Center", x: "right-[8%]", y: "bottom-[20%]", delay: "3s" },
];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 3500);
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayed(
            isDeleting
              ? currentWord.substring(0, displayed.length - 1)
              : currentWord.substring(0, displayed.length + 1)
          );
        },
        isDeleting ? 100 : 200
      );
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex]);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden grain pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] animate-blob-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/12 rounded-full blur-[130px] animate-blob-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/8 rounded-full blur-[100px] animate-blob-float" style={{ animationDelay: "4s" }} />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Horizontal glow line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      {/* Floating service cards (desktop only) */}
      {floatingCards.map((card) => (
        <div
          key={card.label}
          className={`absolute ${card.x} ${card.y} hidden xl:flex items-center gap-2 px-4 py-2.5 rounded-xl glass animate-blob-float opacity-60 hover:opacity-100 transition-opacity`}
          style={{ animationDelay: card.delay, animationDuration: "10s" }}
        >
          <card.icon size={16} className="text-primary" />
          <span className="text-xs font-medium text-muted-foreground">{card.label}</span>
        </div>
      ))}

      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-sm text-muted-foreground">Société IT de référence en Afrique de l'Ouest</span>
        </div>

        {/* H1 with typing effect */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-6 animate-fade-in-up stagger-1 opacity-0" style={{ animationFillMode: "forwards" }}>
          Nous donnons {" "}
          <span className="relative inline-block">
            <GradientText className="font-extrabold">{displayed}</GradientText>
            <span className="inline-block w-[3px] h-[0.8em] bg-accent ml-1 animate-pulse align-middle" />
          </span>
          <br />
          à vos projets
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up stagger-2 opacity-0" style={{ animationFillMode: "forwards" }}>
          Outsourcing, Infogérance, Web & Apps Design, Call Center —{" "}
          <span className="text-foreground font-medium">des solutions IT sur mesure</span> pour accélérer votre transformation digitale.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up stagger-3 opacity-0" style={{ animationFillMode: "forwards" }}>
          <Button
            size="lg"
            onClick={() => scrollTo("#services")}
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all px-8 h-12 text-base"
          >
            Découvrir nos services
            <ArrowRight size={18} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("#contact")}
            className="border-border hover:border-primary hover:text-primary transition-all px-8 h-12 text-base"
          >
            Nous contacter
          </Button>
        </div>

        {/* Mini stats with glass cards */}
        <div className="flex items-center justify-center gap-4 md:gap-6 animate-fade-in-up stagger-4 opacity-0" style={{ animationFillMode: "forwards" }}>
          {[
            { value: "10+", label: "Années d'expérience" },
            { value: "50+", label: "Clients satisfaits" },
            { value: "100+", label: "Projets livrés" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="glass rounded-xl px-5 py-3 text-center min-w-[100px]">
                <div className="text-xl md:text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-muted-foreground mt-0.5">{stat.label}</div>
              </div>
              {i < 2 && <div className="hidden sm:block w-px h-8 bg-border" />}
            </div>
          ))}
        </div>

        {/* Trusted by */}
        <div className="mt-16 animate-fade-in-up stagger-5 opacity-0" style={{ animationFillMode: "forwards" }}>
          <p className="text-xs text-muted-foreground mb-4 uppercase tracking-widest">Nos partenaires technologiques</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {["Digital Technologies", "Bigger", "Data-Quality"].map((name) => (
              <span key={name} className="text-sm font-medium text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                {name}
              </span>
            ))}
          </div>
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
