import { Metadata } from 'next'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: 'Mentions Légales - Deep-Technologies',
  description: 'Mentions légales du site Deep-Technologies.',
}

export default function MentionsLegalesPage() {
  return (
    <main>
      <Header />
      <div className="py-24 sm:py-32 bg-background min-h-screen">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl mb-8">Mentions Légales</h1>
            <div className="prose prose-sm sm:prose-base dark:prose-invert text-muted-foreground">
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Éditeur du site</h2>
              <p>
                <strong>Deep-Technologies</strong><br />
                Ouagadougou, Burkina Faso<br />
                Email : contact@deep-technologies.bf
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Hébergement</h2>
              <p>
                Ce site est hébergé par des prestataires garantissant un haut niveau de sécurité et de disponibilité.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Propriété Intellectuelle</h2>
              <p>
                L'ensemble de ce site relève de la législation sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
