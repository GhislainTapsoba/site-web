"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@deep-technologies.com" },
  { icon: Phone, label: "Téléphone", value: "+226 07 26 60 60" },
  { icon: MapPin, label: "Adresse", value: "Ouagadougou - Secteur 29" },
]

export function CTA() {
  const [form, setForm] = useState({ nom: "", email: "", sujet: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("Une erreur est survenue. Veuillez réessayer.")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus("success")
        setForm({ nom: "", email: "", sujet: "", message: "" })
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        const data = await res.json()
        setStatus("error")
        setErrorMsg(data.error || "Une erreur est survenue.")
        setTimeout(() => setStatus("idle"), 5000)
      }
    } catch {
      setStatus("error")
      setErrorMsg("Impossible de contacter le serveur.")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary/30 relative">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-card rounded-3xl border border-border p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left content */}
            <div>
              <p className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm">
                Contact
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight mb-6">
                Prêt à transformer votre entreprise?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nous sommes les artisans de la technologie, un collectif de passionnés qui aide les organisations à réussir leurs transformations digitales.
              </p>

              {/* Success message */}
              {status === "success" && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 mb-6">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-medium">Message envoyé avec succès ! Nous vous répondrons rapidement.</p>
                </div>
              )}

              {/* Error message */}
              {status === "error" && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 mb-6">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-medium">{errorMsg}</p>
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nom complet</label>
                    <input
                      type="text" name="nom" required value={form.nom} onChange={handleChange}
                      className="w-full h-12 px-4 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <input
                      type="email" name="email" required value={form.email} onChange={handleChange}
                      className="w-full h-12 px-4 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Sujet</label>
                  <input
                    type="text" name="sujet" required value={form.sujet} onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Objet de votre demande"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <textarea
                    name="message" required rows={4} value={form.message} onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading"}
                  className="w-full h-14 bg-accent hover:bg-accent/90 text-white rounded-xl font-semibold text-base mt-2 disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Envoi en cours...</>
                  ) : (
                    <><Send className="mr-2 h-5 w-5" /> Envoyer le message</>
                  )}
                </Button>
              </form>
            </div>

            {/* Right content - Contact cards */}
            <div className="space-y-3">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="group bg-secondary/50 rounded-xl p-4 flex items-center gap-4 hover:bg-secondary transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 rounded-2xl overflow-hidden border border-border h-80 relative w-full shadow-lg">
            <iframe
              title="Deep-Technologies - Ouagadougou"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3940.123456789!2d-1.55846!3d12.3103393!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe2e9758b013c271%3A0x964b5b57d438f2ce!2sDeep%20Technologies%20SARL!5e0!3m2!1sen!2sbf"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500 relative z-10 block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}