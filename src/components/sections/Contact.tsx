import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Mail, Phone, Linkedin, Facebook, Twitter, Send, Loader2 } from "lucide-react";
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
    <SectionWrapper id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 mb-4">
            <span className="text-xs font-medium text-primary">Contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Parlons de votre <GradientText>projet</GradientText>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Nos coordonnées</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                N'hésitez pas à nous contacter par téléphone, email ou en remplissant le formulaire. Notre équipe vous répondra dans les plus brefs délais.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: MapPin, text: "Ouagadougou, Secteur 29, Burkina Faso" },
                { icon: Mail, text: "info@deep-technologies.com" },
                { icon: Phone, text: "+226 07 26 60 60" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3 p-4 rounded-xl glass">
                  <Icon size={20} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{text}</span>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-sm font-medium text-foreground mb-3">Suivez-nous</h4>
              <div className="flex gap-3">
                {[Linkedin, Facebook, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-3 rounded-xl glass hover:border-primary/40 transition-all text-muted-foreground hover:text-primary"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8 rounded-2xl glass space-y-5">
            <div>
              <Label htmlFor="name" className="text-foreground">Nom complet</Label>
              <Input id="name" {...register("name")} placeholder="Votre nom" className="mt-1.5 bg-background/50" />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input id="email" type="email" {...register("email")} placeholder="votre@email.com" className="mt-1.5 bg-background/50" />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="phone" className="text-foreground">Téléphone</Label>
                <Input id="phone" {...register("phone")} placeholder="+226 XX XX XX XX" className="mt-1.5 bg-background/50" />
              </div>
            </div>

            <div>
              <Label className="text-foreground">Sujet</Label>
              <Select onValueChange={(v) => setValue("subject", v)}>
                <SelectTrigger className="mt-1.5 bg-background/50">
                  <SelectValue placeholder="Sélectionnez un sujet" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="outsourcing">Outsourcing</SelectItem>
                  <SelectItem value="infogerance">Infogérance</SelectItem>
                  <SelectItem value="webdesign">Web & Apps Design</SelectItem>
                  <SelectItem value="callcenter">Call Center</SelectItem>
                  <SelectItem value="autre">Autre</SelectItem>
                </SelectContent>
              </Select>
              {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject.message}</p>}
            </div>

            <div>
              <Label htmlFor="message" className="text-foreground">Message</Label>
              <Textarea id="message" {...register("message")} placeholder="Décrivez votre projet..." rows={5} className="mt-1.5 bg-background/50 resize-none" />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/25 hover:opacity-90 transition-opacity"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Envoyer le message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
