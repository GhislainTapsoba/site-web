import { useState } from "react";
import { Award, Users, Target, Zap } from "lucide-react";
import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";

// Import des images pour la section About
import dataQualityImg from "@/assets/Data-Quality.jpg";
import biggerAgencyImg from "@/assets/Bigger.jpg";
import performance from "@/assets/performance.jpg";
import innovation from "@/assets/innovation.jpg";
import expertise from "@/assets/expertise.jpg";


const AboutImages = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      icon: Award,
      title: "Excellence",
      description: "Plus de 15 ans d'expérience au service de l'innovation technologique",
      image: dataQualityImg,
    },
    {
      id: 1,
      icon: Users,
      title: "Expertise",
      description: "Une équipe de passionnés dédiés à votre succès",
      image: biggerAgencyImg,
    },
    {
      id: 2,
      icon: Target,
      title: "Innovation",
      description: "Des solutions cutting-edge adaptées à vos besoins",
      image: innovation,
    },
    {
      id: 3,
      icon: Zap,
      title: "Performance",
      description: "Des résultats mesurables et un ROI optimal",
      image: performance,
    },
  ];

  return (
    <SectionWrapper className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 mb-4">
            <span className="text-xs font-medium text-primary">Notre Histoire</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <GradientText>L'Excellence</GradientText> depuis toujours
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fondée en 2021, Deep-Technologies s'est imposée comme un acteur majeur de la transformation numérique au Burkina Faso.
          </p>
        </div>

        {/* Tabs and Images */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Tabs */}
          <div className="space-y-4">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 ${activeTab === index
                  ? "border-primary/50 bg-primary/5 shadow-lg shadow-primary/10"
                  : "border-border/50 hover:border-primary/30 hover:bg-muted/50"
                  }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${activeTab === index
                    ? "bg-gradient-to-br from-primary to-accent text-primary-foreground"
                    : "bg-gradient-to-br from-primary/20 to-accent/20 text-primary"
                    }`}>
                    <tab.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{tab.title}</h3>
                    <p className="text-sm text-muted-foreground">{tab.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Display */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    {React.createElement(tabs[activeTab].icon, { size: 20, className: "text-primary-foreground" })}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{tabs[activeTab].title}</h3>
                </div>
                <p className="text-white/90 text-sm">{tabs[activeTab].description}</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutImages;
