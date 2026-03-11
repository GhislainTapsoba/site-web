import { ChevronDown, ArrowRight, Code2, Shield, Headphones, Users, Sparkles, Zap, Star, Heart, Rocket, Flame, Crown, Gem } from "lucide-react";
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
      {/* Magical animated background */}
      <div className="absolute inset-0 -z-10">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-orange-900/20 to-amber-900/20" />

        {/* Magical floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 via-orange-500/30 to-amber-500/30 rounded-full blur-3xl animate-blob-float" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/30 via-orange-500/30 to-blue-500/30 rounded-full blur-3xl animate-blob-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-orange-500/25 via-blue-500/25 to-cyan-500/25 rounded-full blur-2xl animate-blob-float" style={{ animationDelay: "4s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-amber-500/20 via-blue-500/20 to-orange-500/20 rounded-full blur-2xl animate-blob-float" style={{ animationDelay: "6s" }} />

        {/* Magical particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
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
        </div>

        {/* Magical rays */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-shimmer"
              style={{
                top: `${20 + i * 12}%`,
                width: '200%',
                left: '-50%',
                transform: `rotate(${15 + i * 5}deg)`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Simple floating service cards */}
      {floatingCards.map((card) => (
        <div
          key={card.label}
          className={`absolute ${card.x} ${card.y} hidden xl:flex items-center gap-2 px-4 py-2.5 rounded-xl glass animate-blob-float opacity-60 hover:opacity-100 transition-all duration-500`}
          style={{ animationDelay: card.delay, animationDuration: "10s" }}
        >
          <card.icon size={16} className="text-blue-400" />
          <span className="text-xs font-medium text-muted-foreground">{card.label}</span>
        </div>
      ))}

      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        {/* Magical badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 mb-8 animate-fade-in-up">
          <Crown className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-300 font-medium">Société IT Énergique en Afrique de l'Ouest</span>
        </div>

        {/* H1 with typing effect */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-6 animate-fade-in-up stagger-1 opacity-0" style={{ animationFillMode: "forwards" }}>
          Nous donnons {" "}
          <span className="relative inline-block">
            <span className="font-extrabold bg-gradient-to-r from-blue-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">{displayed}</span>
            <span className="inline-block w-[3px] h-[0.8em] bg-blue-400 ml-1 animate-pulse align-middle" />
          </span>
          <br />
          à vos projets
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto mb-12 animate-fade-in-up stagger-2 opacity-0" style={{ animationFillMode: "forwards" }}>
          Outsourcing, Infogérance, Web & Apps Design, Call Center —{" "}
          <span className="text-blue-100 font-medium">des solutions IT énergiques</span> pour accélérer votre transformation digitale.
        </p>

        {/* Magical CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up stagger-3 opacity-0" style={{ animationFillMode: "forwards" }}>
          <Button
            size="lg"
            onClick={() => scrollTo("#services")}
            className="bg-gradient-to-r from-blue-500 to-orange-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all px-8 h-12 text-base"
          >
            Découvrir nos services
            <Rocket className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("#contact")}
            className="border-blue-400/50 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-300 transition-all px-8 h-12 text-base"
          >
            Nous contacter
            <Sparkles className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Magical mini stats */}
        <div className="flex items-center justify-center gap-4 md:gap-6 animate-fade-in-up stagger-4 opacity-0" style={{ animationFillMode: "forwards" }}>
          {[
            { value: "10+", label: "Années d'expérience" },
            { value: "50+", label: "Clients satisfaits" },
            { value: "100+", label: "Projets livrés" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="glass rounded-xl px-5 py-3 text-center min-w-[100px] border border-blue-400/20">
                <div className="text-xl md:text-2xl font-bold text-blue-300">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-blue-400 mt-0.5">{stat.label}</div>
              </div>
              {i < 2 && <div className="hidden sm:block w-px h-8 bg-blue-400/20" />}
            </div>
          ))}
        </div>

        {/* Trusted by */}
        <div className="mt-16 animate-fade-in-up stagger-5 opacity-0" style={{ animationFillMode: "forwards" }}>
          <p className="text-xs text-blue-400 mb-4 uppercase tracking-widest">Nos partenaires technologiques</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {["Digital Technologies", "Bigger", "Data-Quality"].map((name) => (
              <span key={name} className="text-sm font-medium text-blue-400/50 hover:text-blue-300 transition-colors">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow text-blue-400 hover:text-blue-300 transition-colors"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};

export default Hero;
