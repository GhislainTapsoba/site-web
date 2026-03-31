import Link from "next/link"
import Image from "next/image"
import { Linkedin, MapPin, Facebook } from "lucide-react"

const navigation = {
  services: [
    { name: "Outsourcing", href: "/services/outsourcing" },
    { name: "Infogérance", href: "/services/infogerance" },
    { name: "Web & Apps", href: "/services/web-apps" },
    { name: "Call Center", href: "/services/call-center" },
    { name: "Formations & Matériel", href: "/services/formations" },
    { name: "Fournitures de bureau", href: "/services/fournitures" },
  ],
  company: [
    { name: "À propos", href: "/a-propos" },
    { name: "Services", href: "/#services" },
    { name: "Projets", href: "/#portfolio" },
    { name: "Contact", href: "/#contact" },
  ],
  legal: [
    { name: "Confidentialité", href: "/legal/confidentialite" },
    { name: "Mentions légales", href: "/legal/mentions-legales" },
  ],
}

const socials = [
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/deep-techno" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/Deep-Technologies-109319097086906" },
  { name: "Localisation", icon: MapPin, href: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3940.123456789!2d-1.55846!3d12.3103393!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe2e9758b013c271%3A0x964b5b57d438f2ce!2sDeep%20Technologies%20SARL!5e0!3m2!1sen!2sbf" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">
                  <Image src="/images/logo.jpg" alt="Logo" width={40} height={40} className="rounded-full" />
                </span>
              </div>
              <span className="font-semibold text-foreground text-lg">Deep-Technologies</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Votre partenaire technologique au Burkina Faso pour une transformation digitale réussie.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Entreprise
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Légal
            </h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Deep-Technologies. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
