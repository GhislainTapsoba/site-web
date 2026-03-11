import { Sparkles, ArrowRight, Crown, Gem, Star, Rocket, Flame, Users, Target, Zap, Heart, Shield, Award, CheckCircle2, Globe, Server, TrendingUp } from "lucide-react";
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
    <SectionWrapper id="apropos" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Magical background - Portfolio palette */}
      <div className="absolute inset-0 -z-10">
        {/* Primary blue/orange orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-amber-500/20 rounded-full blur-3xl animate-blob-float" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 via-orange-500/20 to-blue-500/20 rounded-full blur-3xl animate-blob-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-orange-500/15 via-blue-500/15 to-cyan-500/15 rounded-full blur-2xl animate-blob-float" style={{ animationDelay: "4s" }} />

        {/* Emerald accent orbs */}
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-green-500/15 rounded-full blur-2xl animate-blob-float" style={{ animationDelay: "6s" }} />
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-gradient-to-r from-green-500/12 via-emerald-500/12 to-teal-500/12 rounded-full blur-xl animate-blob-float" style={{ animationDelay: "8s" }} />

        {/* Magical particles with new emerald ones */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
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
          {[...Array(5)].map((_, i) => (
            <div
              key={`emerald-${i}`}
              className="absolute w-1.5 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Magical text section */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 mb-6 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Crown className="w-4 h-4 text-blue-400 relative z-10" />
              <span className="text-sm text-blue-300 font-medium relative z-10">Notre Histoire Dynamique</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Un partenaire IT qui{" "}
              <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                vous comprend dynamiquement
              </span>
            </h2>
            <p className="text-blue-200 leading-relaxed mb-6 text-lg">
              Depuis 5 ans, Deep-Technologies accompagne les entreprises du Burkina Faso et d'Afrique de l'Ouest dans leur <span className="text-blue-100 font-semibold">transformation digitale performante</span>.
            </p>
            <p className="text-blue-200 leading-relaxed mb-10">
              Notre approche repose sur l'écoute, l'accompagnement personnalisé et la livraison de <span className="text-blue-100 font-semibold">solutions spectaculaires</span> qui créent une vraie valeur ajoutée. Notre équipe d'experts passionnés met tout en œuvre pour dépasser vos attentes avec des résultats performants.
            </p>

            {/* Magical values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={value.label} className="flex items-start gap-3 p-4 rounded-xl glass border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 group">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 via-orange-500/20 to-amber-500/20 flex items-center justify-center relative z-10 border border-blue-400/30">
                      <Award className="w-5 h-5 text-blue-300" />
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-blue-100 block group-hover:text-blue-50 transition-colors">{value.label}</span>
                    <span className="text-xs text-blue-300 group-hover:text-blue-200 transition-colors">{value.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Magical visual section */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              {/* Main magical card */}
              <div className="relative rounded-2xl overflow-hidden glass border border-blue-400/30 p-8">
                {/* Background magical effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-orange-500/5 to-amber-500/5 rounded-2xl"></div>

                {/* Emerald accent layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/3 via-teal-500/2 to-transparent rounded-2xl"></div>

                <div className="relative z-10">
                  {/* Logo with magical effect */}
                  <div className="flex items-center justify-center mb-8 relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-2xl opacity-60 animate-pulse"></div>
                    <img src={logo} alt="Deep-Technologies" className="h-32 w-auto rounded-lg relative z-10 ring-4 ring-blue-400/30" />
                  </div>

                  {/* Magical tech icons grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { icon: Globe, label: "Web" },
                      { icon: Server, label: "Cloud" },
                      { icon: Shield, label: "Sécurité" },
                    ].map(({ icon: Icon, label }, index) => (
                      <div key={label} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-blue-500/10 via-orange-500/10 to-amber-500/10 border border-blue-400/30 hover:border-blue-400/40 transition-all duration-300 group">
                        <div className="relative">
                          <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <Icon size={24} className="text-blue-300 relative z-10 group-hover:text-blue-200 transition-colors" />
                        </div>
                        <span className="text-xs text-blue-300">{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Magical mini stats */}
                  <div className="flex justify-between p-4 rounded-xl bg-gradient-to-r from-blue-500/10 via-orange-500/10 to-amber-500/10 border border-blue-400/20">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-100">10+</div>
                      <div className="text-[10px] text-blue-300">Ans Dynamiques</div>
                    </div>
                    <div className="w-px bg-blue-400/20" />
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-100">50+</div>
                      <div className="text-[10px] text-blue-300">Clients Performants</div>
                    </div>
                    <div className="w-px bg-blue-400/20" />
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-100">4</div>
                      <div className="text-[10px] text-blue-300">Services Dynamiques</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Magical decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-full blur-[50px] animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: "1s" }}></div>

              {/* Floating magical badges */}
              <div className="absolute -top-3 -right-3 glass rounded-xl px-3 py-2 border border-blue-400/30 animate-blob-float" style={{ animationDuration: "6s" }}>
                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-blue-400" />
                  <span className="text-xs font-medium text-blue-300">Innovation</span>
                </div>
              </div>

              <div className="absolute -bottom-3 -left-3 glass rounded-xl px-3 py-2 border border-emerald-400/30 animate-blob-float" style={{ animationDuration: "8s", animationDelay: "2s" }}>
                <div className="flex items-center gap-2">
                  <TrendingUp size={14} className="text-emerald-400" />
                  <span className="text-xs font-medium text-emerald-300">Excellence</span>
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
