import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { About } from "@/components/about"
import { Support } from "@/components/support"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Partners } from "@/components/partners"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Partners />
      <Services />
      <Portfolio />
      <Testimonials />
      <Support />
      <CTA />
      <Footer />
    </main>
  )
}
