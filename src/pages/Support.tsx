import { useState, useEffect } from "react";
import { Download, Monitor, Smartphone, Tablet, Shield, Clock, Users, Headphones, CheckCircle, ArrowRight, Crown, Sparkles, Gem, Star, Rocket, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";

const Support = () => {
  const [os, setOs] = useState<string>("");
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Détecter l'OS du client
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("win")) {
      setOs("windows");
    } else if (userAgent.includes("mac")) {
      setOs("mac");
    } else if (userAgent.includes("linux")) {
      setOs("linux");
    } else if (userAgent.includes("android")) {
      setOs("android");
    } else if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
      setOs("ios");
    } else {
      setOs("unknown");
    }

    // Vérifier le thème
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const downloadLinks = {
    windows: "https://download.anydesk.com/AnyDesk.exe",
    mac: "https://download.anydesk.com/anydesk.dmg",
    linux: "https://download.anydesk.com/anydesk.deb",
    linux_rpm: "https://download.anydesk.com/anydesk.rpm",
    linux_tar: "https://download.anydesk.com/anydesk.tar.gz",
    android: "https://play.google.com/store/apps/details?id=com.anydesk.anydeskandroid",
    ios: "https://apps.apple.com/app/anydesk-remote-desktop/id1194084159"
  };

  const getOsIcon = (osType: string) => {
    switch (osType) {
      case "windows":
        return <Monitor className="w-8 h-8 text-blue-400" />;
      case "mac":
        return <Monitor className="w-8 h-8 text-orange-400" />;
      case "linux":
        return <Monitor className="w-8 h-8 text-emerald-400" />;
      case "android":
        return <Smartphone className="w-8 h-8 text-orange-400" />;
      case "ios":
        return <Tablet className="w-8 h-8 text-blue-400" />;
      default:
        return <Monitor className="w-8 h-8 text-blue-400" />;
    }
  };

  const getOsName = (osType: string) => {
    switch (osType) {
      case "windows":
        return "Windows";
      case "mac":
        return "macOS";
      case "linux":
        return "Linux";
      case "android":
        return "Android";
      case "ios":
        return "iOS";
      default:
        return "Système inconnu";
    }
  };

  const handleDownload = () => {
    if (os && os !== "unknown" && downloadLinks[os as keyof typeof downloadLinks]) {
      window.open(downloadLinks[os as keyof typeof downloadLinks], "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900/20 via-orange-900/20 to-amber-900/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden grain">
        {/* Magical background */}
        <div className="absolute inset-0 -z-10">
          {/* Primary blue/orange orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/25 via-orange-500/25 to-amber-500/25 rounded-full blur-3xl animate-blob-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/25 via-orange-500/25 to-blue-500/25 rounded-full blur-3xl animate-blob-float" style={{ animationDelay: "2s" }} />

          {/* Emerald accent orbs */}
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-green-500/15 rounded-full blur-2xl animate-blob-float" style={{ animationDelay: "4s" }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 mb-6 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Headphones className="w-4 h-4 text-blue-400 relative z-10" />
              <span className="text-sm text-blue-300 font-medium relative z-10">Support Technique Performant</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">Support à Distance</span>
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Téléchargez AnyDesk pour bénéficier de notre support technique à distance rapide et sécurisé
            </p>
          </div>
        </div>
      </section>

      {/* OS Detection Section */}
      <SectionWrapper className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/15 via-orange-500/15 to-amber-500/15 rounded-full blur-3xl animate-blob-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/15 via-orange-500/15 to-blue-500/15 rounded-full blur-3xl animate-blob-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/12 via-teal-500/12 to-green-500/12 rounded-full blur-2xl animate-blob-float" style={{ animationDelay: "4s" }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 mb-6">
                <Crown className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300 font-medium">Détection Automatique</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-blue-100">Votre Système Détecté</h2>
            </div>

            {/* OS Card */}
            <div className="glass rounded-2xl p-8 border border-blue-400/30 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-orange-500/5 to-amber-500/5 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/3 via-teal-500/2 to-transparent rounded-2xl"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 via-orange-500/20 to-amber-500/20 flex items-center justify-center border border-blue-400/30">
                    {getOsIcon(os)}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-center mb-4 text-blue-100">
                  {getOsName(os)}
                </h3>

                <p className="text-blue-200 text-center mb-8">
                  Nous avons détecté votre système d'exploitation. Cliquez sur le bouton ci-dessous pour télécharger AnyDesk adapté à votre appareil.
                </p>

                <div className="text-center">
                  <Button
                    onClick={handleDownload}
                    disabled={os === "unknown"}
                    className="bg-gradient-to-r from-blue-500 to-orange-500 text-white hover:scale-[1.02] transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                    size="lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center gap-2">
                      <Download className="w-5 h-5" />
                      {os === "unknown" ? "Système non détecté" : "Télécharger AnyDesk"}
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Manual Download Section */}
      <SectionWrapper className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/15 via-orange-500/15 to-amber-500/15 rounded-full blur-3xl animate-blob-float" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/15 via-orange-500/15 to-blue-500/15 rounded-full blur-3xl animate-blob-float" style={{ animationDelay: "3s" }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 mb-6">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">Téléchargement Manuel</span>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-blue-100">Choisissez Votre Plateforme</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { os: "windows", name: "Windows", icon: Monitor, color: "blue" },
              { os: "mac", name: "macOS", icon: Monitor, color: "orange" },
              { os: "linux", name: "Linux (DEB)", icon: Monitor, color: "emerald" },
              { os: "linux_rpm", name: "Linux (RPM)", icon: Monitor, color: "emerald" },
              { os: "android", name: "Android", icon: Smartphone, color: "orange" },
              { os: "ios", name: "iOS", icon: Tablet, color: "blue" }
            ].map((platform) => (
              <div key={platform.os} className="glass rounded-xl p-6 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 group">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 via-orange-500/20 to-amber-500/20 flex items-center justify-center relative z-10 border border-blue-400/30 mx-auto mb-4">
                    <platform.icon className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-100 text-center mb-3">{platform.name}</h3>
                <Button
                  onClick={() => window.open(downloadLinks[platform.os as keyof typeof downloadLinks], "_blank")}
                  className="w-full bg-gradient-to-r from-blue-500 to-orange-500 text-white hover:scale-[1.02] transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
                  size="sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger
                </Button>
              </div>
            ))}
          </div>

          {/* Section Linux Alternatif */}
          <div className="mt-8 text-center">
            <div className="glass rounded-xl p-6 border border-blue-400/20 max-w-md mx-auto">
              <h4 className="text-lg font-bold text-blue-100 mb-4">Linux - Autres Formats</h4>
              <div className="space-y-3">
                <Button
                  onClick={() => window.open(downloadLinks.linux_tar, "_blank")}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:scale-[1.02] transition-all shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40"
                  size="sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Linux (TAR.GZ)
                </Button>
                <p className="text-sm text-blue-300">
                  Pour les distributions Linux non prises en charge par DEB/RPM
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Instructions Section */}
      <SectionWrapper className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-green-500/15 rounded-full blur-3xl animate-blob-float" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/15 via-orange-500/15 to-amber-500/15 rounded-full blur-3xl animate-blob-float" style={{ animationDelay: "4s" }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 mb-6">
              <Rocket className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">Instructions Rapides</span>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-blue-100">Comment Utiliser AnyDesk</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { step: 1, title: "Téléchargez AnyDesk", desc: "Cliquez sur le bouton de téléchargement adapté à votre système" },
                { step: 2, title: "Installez le logiciel", desc: "Suivez les instructions d'installation de votre système" },
                { step: 3, title: "Communiquez votre ID", desc: "Lancez AnyDesk et communiquez-nous votre ID à 9 chiffres" },
                { step: 4, title: "Connexion sécurisée", desc: "Notre technicien se connectera pour vous assister" }
              ].map((instruction) => (
                <div key={instruction.step} className="flex items-start gap-4 p-6 rounded-xl glass border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 group">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center text-white font-bold relative z-10">
                      {instruction.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-100 mb-2">{instruction.title}</h3>
                    <p className="text-blue-200">{instruction.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-amber-500/20 rounded-full blur-3xl animate-blob-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 via-orange-500/20 to-blue-500/20 rounded-full blur-3xl animate-blob-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">Besoin d'Aide ?</span>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-blue-100">Contactez Notre Support</h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Une fois AnyDesk installé, contactez-nous pour une assistance technique immédiate
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                className="bg-gradient-to-r from-blue-500 to-orange-500 text-white hover:scale-[1.02] transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
                size="lg"
              >
                <Headphones className="w-5 h-5 mr-2" />
                Contacter le Support
              </Button>
              <Button
                variant="outline"
                className="border-blue-400/30 hover:border-blue-400/60 text-blue-300 hover:text-blue-200 bg-blue-500/10 hover:bg-blue-500/20 transition-all"
                size="lg"
              >
                <Users className="w-5 h-5 mr-2" />
                Voir Nos Services
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default Support;
