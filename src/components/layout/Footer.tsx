import { MapPin, Mail, Phone, Linkedin, Facebook, Twitter } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (href: string) => {
    if (location.pathname !== "/") {
      navigate("/" + href);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Deep-Technologies" className="h-10 w-auto rounded" />
              <span className="text-lg font-bold text-foreground">
                Deep<span className="text-primary">-Technologies</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Votre partenaire IT de confiance en Afrique de l'Ouest.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-all text-muted-foreground">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Liens rapides */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Liens rapides</h4>
            <ul className="space-y-2">
              {[
                { label: "Accueil", href: "#accueil" },
                { label: "Services", href: "#services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "À propos", href: "#apropos" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("/") ? (
                    <Link to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{item.label}</Link>
                  ) : (
                    <button onClick={() => scrollTo(item.href)} className="text-sm text-muted-foreground hover:text-primary transition-colors">{item.label}</button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-2">
              {[
                { label: "Outsourcing", slug: "outsourcing" },
                { label: "Infogérance", slug: "infogerance" },
                { label: "Web & Apps Design", slug: "web-apps" },
                { label: "Call Center", slug: "call-center" },
              ].map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{s.label}</Link>
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
