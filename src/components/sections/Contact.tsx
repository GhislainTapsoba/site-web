import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Sparkles, ArrowRight, Crown, Gem, Star, Rocket, Flame, Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Facebook, Twitter, Loader2, TrendingUp } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const schema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Veuillez sélectionner un sujet"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    toast.success("Message envoyé avec succès ! Nous vous répondrons rapidement.");
    reset();
  };

  return (
    <SectionWrapper id="contact" className="py-24 lg:py-32 relative overflow-hidden">
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
          {[...Array(8)].map((_, i) => (
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
          {[...Array(4)].map((_, i) => (
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
        {/* Magical header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 mb-6 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Crown className="w-4 h-4 text-blue-400 relative z-10" />
            <span className="text-sm text-blue-300 font-medium relative z-10">Contact Dynamique</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Parlons de votre <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">projet performant</span>
          </h2>
          <p className="text-blue-200 max-w-xl mx-auto">
            Contactez-nous pour discuter de vos besoins et obtenir un <span className="text-blue-100 font-semibold">devis performant personnalisé</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Magical info section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-100 mb-4">Nos Coordonnées Performantes</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                N'hésitez pas à nous contacter par téléphone, email ou en remplissant le formulaire. Notre équipe d'experts vous répondra dans les plus brefs délais avec des <span className="text-blue-100 font-semibold">solutions spectaculaires</span>.
              </p>
            </div>

            {/* Magical contact cards */}
            <div className="space-y-4">
              {[
                { icon: MapPin, text: "Ouagadougou, Secteur 29, Burkina Faso" },
                { icon: Mail, text: "info@deep-technologies.com" },
                { icon: Phone, text: "+226 07 26 60 60" },
              ].map(({ icon: Icon, text }, index) => (
                <div key={text} className="flex items-start gap-4 p-4 rounded-xl glass border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 group">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 via-orange-500/20 to-amber-500/20 flex items-center justify-center relative z-10 border border-blue-400/30">
                      <Icon size={20} className="text-blue-300" />
                    </div>
                  </div>
                  <span className="text-blue-200 group-hover:text-blue-100 transition-colors">{text}</span>
                </div>
              ))}
            </div>

            {/* Magical social section */}
            <div>
              <h4 className="text-lg font-bold text-blue-100 mb-4">Suivez Notre Performance</h4>
              <div className="flex gap-4">
                {[Linkedin, Facebook, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-4 rounded-xl glass border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 group relative"
                  >
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Icon size={20} className="text-blue-300 relative z-10 group-hover:text-blue-200 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Magical map */}
            <div className="rounded-2xl overflow-hidden glass border border-blue-400/30 h-64 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-orange-500/5 to-amber-500/5"></div>
              <iframe
                title="Deep-Technologies - Ouagadougou"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3940.123456789!2d-1.55846!3d12.3103393!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe2e9758b013c271%3A0x964b5b57d438f2ce!2sDeep%20Technologies%20SARL!5e0!3m2!1sen!2sbf"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500 relative z-10"
              />
              {/* Magical overlay */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full opacity-80 animate-pulse">
                <MapPin className="w-4 h-4 text-white m-auto" />
              </div>
            </div>
          </div>

          {/* Magical form section */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-8 rounded-2xl glass border border-blue-400/30 space-y-6 relative">
            {/* Background magical effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-orange-500/5 to-amber-500/5 rounded-2xl"></div>

            {/* Emerald accent layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/3 via-teal-500/2 to-transparent rounded-2xl"></div>

            <div className="relative z-10">
              {/* Magical form header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/30 bg-blue-500/10">
                  <Gem className="w-3 h-3 text-blue-400" />
                  <span className="text-xs text-blue-300 font-medium">Formulaire Performant</span>
                </div>
              </div>

              <div>
                <Label htmlFor="name" className="text-blue-100">Nom complet</Label>
                <Input id="name" {...register("name")} placeholder="Votre nom performant" className="mt-1.5 bg-blue-500/10 border-blue-400/30 text-blue-100 placeholder-blue-400 focus:border-blue-400/60" />
                {errors.name && <p className="text-xs text-orange-400 mt-1">{errors.name.message}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-blue-100">Email</Label>
                  <Input id="email" type="email" {...register("email")} placeholder="votre@email.com" className="mt-1.5 bg-blue-500/10 border-blue-400/30 text-blue-100 placeholder-blue-400 focus:border-blue-400/60" />
                  {errors.email && <p className="text-xs text-orange-400 mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <Label htmlFor="phone" className="text-blue-100">Téléphone</Label>
                  <Input id="phone" {...register("phone")} placeholder="+226 XX XX XX XX" className="mt-1.5 bg-blue-500/10 border-blue-400/30 text-blue-100 placeholder-blue-400 focus:border-blue-400/60" />
                </div>
              </div>

              <div>
                <Label className="text-blue-100">Sujet</Label>
                <Select onValueChange={(v) => setValue("subject", v)}>
                  <SelectTrigger className="mt-1.5 bg-blue-500/10 border-blue-400/30 text-blue-100 focus:border-blue-400/60">
                    <SelectValue placeholder="Sélectionnez un sujet performant" />
                  </SelectTrigger>
                  <SelectContent className="bg-blue-900/95 border-blue-400/30">
                    <SelectItem value="outsourcing" className="text-blue-100">Outsourcing</SelectItem>
                    <SelectItem value="infogerance" className="text-blue-100">Infogérance</SelectItem>
                    <SelectItem value="webdesign" className="text-blue-100">Web & Apps Design</SelectItem>
                    <SelectItem value="callcenter" className="text-blue-100">Call Center</SelectItem>
                    <SelectItem value="autre" className="text-blue-100">Autre</SelectItem>
                  </SelectContent>
                </Select>
                {errors.subject && <p className="text-xs text-orange-400 mt-1">{errors.subject.message}</p>}
              </div>

              <div>
                <Label htmlFor="message" className="text-blue-100">Message</Label>
                <Textarea id="message" {...register("message")} placeholder="Décrivez votre projet performant..." rows={5} className="mt-1.5 bg-blue-500/10 border-blue-400/30 text-blue-100 placeholder-blue-400 focus:border-blue-400/60 resize-none" />
                {errors.message && <p className="text-xs text-orange-400 mt-1">{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-orange-500 text-white hover:scale-[1.02] transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Envoi performant en cours...
                    </>
                  ) : (
                    <>
                      <Rocket className="w-5 h-5" />
                      Envoyer le message performant
                    </>
                  )}
                </div>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
