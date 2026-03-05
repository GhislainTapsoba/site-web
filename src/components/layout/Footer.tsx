import { MapPin, Mail, Phone, Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-secondary/30">
      {/* Gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
                DT
              </div>
              <span className="text-lg font-bold text-foreground">
                Deep<span className="text-primary">-Technologies</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Votre partenaire IT de confiance en Afrique de l'Ouest. Nous transformons vos défis technologiques en solutions performantes.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-all text-muted-foreground"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Liens rapides */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Liens rapides</h4>
            <ul className="space-y-2">
              {["Accueil", "Services", "À propos", "Contact"].map((label) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(`#${label === "À propos" ? "apropos" : label.toLowerCase()}`)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-2">
              {["Outsourcing", "Infogérance", "Web & Apps Design", "Call Center"].map((s) => (
                <li key={s}>
                  <span className="text-sm text-muted-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                Ouagadougou, Secteur 29, Burkina Faso
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="shrink-0 text-primary" />
                info@deep-technologies.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="shrink-0 text-primary" />
                +226 07 26 60 60
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Deep-Technologies. Tous droits réservés.
          </p>
          <p className="text-xs text-muted-foreground">
            Mentions légales · Politique de confidentialité
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
